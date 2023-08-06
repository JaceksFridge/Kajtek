

import openai
from secret import OPEN_KEY

key = OPEN_KEY
openai.api_key = key


def gpt_connect():

    prompt = input(" bitch write prompt")
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        message=[{
            "role": "user",
            "content": prompt
        }],
        temperature=0,
        max_tokens=1024
    )
    
    output = response['choices'][0]['message']['content']
    print("generated output")
    print(output)
    return output