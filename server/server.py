
from flask import Flask, jsonify, request
from flask_cors import CORS
from openapi import gpt_connect


# app instance
app = Flask(__name__)
CORS(app)



@app.route("/api/prompt", methods=['POST'])
def user_prompt():
    before_prompt = request.json['prompt']
    print('before prompt:', before_prompt, type(before_prompt))
    
    # parse dict into str
    
    # calling gpt with prompt
    
    try:
        after_prompt = gpt_connect(before_prompt)
    except:
        after_prompt = "prompt output not found"

    # res object to client side
    response = {
        'received_data': before_prompt,
        'prompted_data': after_prompt
    }

    print(" [[[[[ success: receiving before prompt ]]]]] ", type(after_prompt))
    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True, port=8080)
    
    

