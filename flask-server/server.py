from flask import Flask, request, jsonify, session
from flask_cors import CORS
from passlib.hash import pbkdf2_sha256
from pymongo import MongoClient
import os
import uuid
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"]) #we are allowing the frontend to access the backend

client = MongoClient('localhost', 27017)
db = client.user_system 
users = db.users

# This is the route for the home page
@app.route("/register", methods = ['POST'])
def register():
    data = request.get_json()
    email = data['email']
    password = data['pass']
    hashed_password = pbkdf2_sha256.encrypt(password) #we are hashing the password so that it is not stored in plain text. for security

    user = {
        '_id': uuid.uuid4().hex,
        'email': email,
        'password': hashed_password
    }

    #check if the user already exists
    if users.find_one({ "email": email }):
        return jsonify({'message': 'Email address already in use'}), 400

    result = users.insert_one(user) #we are inserting the user into the database

    if result.acknowledged:
        session['logged_in'] = True #we are setting the session to true
        session['email'] = email # Create a session for the user
        return jsonify({'message': 'User registered successfully'}), 201 #if the user is registered successfully we return a 201 status code
    else:
        return jsonify({'message': 'Registration failed'}), 500

@app.route("/login", methods = ['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['pass']

    user = users.find_one({ "email": email })

    if user and pbkdf2_sha256.verify(password, user['password']): #we are verifying the password
        session['logged_in'] = True
        session['email'] = email
        return jsonify({'message': 'User logged in successfully'}), 200
    else:
        return jsonify({'message': 'Incorrect credentials'}), 401
    

@app.route("/signout", methods = ['POST'])
def signout():
    session.clear() #we are clearing the session
    return jsonify({'message': 'Successfully logged out'}), 200


if __name__ == '__main__':
    app.secret_key = os.getenv('SECRET_KEY') #we need a secret key to sign the session cookie
    app.run(debug=True)



