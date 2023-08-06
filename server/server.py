
from flask import Flask, jsonify
from flask_cors import CORS
from openapi import gpt_connect


# app instance
app = Flask(__name__)
CORS(app)

    
data = gpt_connect()


# api/home
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': data,
    })


if __name__ == "__main__":
    app.run(debug=True, port=8080)
    
    
    
