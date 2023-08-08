

import openai
from secret import OPEN_KEY

key = OPEN_KEY
openai.api_key = key


def gpt_connect(before_prompt):

    prompt = before_prompt
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{
            "role": "user",
            "content": prompt
        }],
        temperature=0,
        max_tokens=1024
    )
    
    output = response['choices'][0]['message']['content']
    print(" [[[[[ generated output ]]]]] ")
    return output