from flask import Flask, render_template, request
from transformers import pipeline,Conversation

import json
app=Flask(__name__)
pipe = pipeline("conversational", model="facebook/blenderbot-400M-distill")
@app.route('/')
def index1():
    return render_template('index1.html')
@app.route('/app')
def index2():
    return render_template('index2.html')
@app.route('/playground')
def index3():
    return render_template('game.html')
@app.route('/get',methods=['POST'])
def getpy():
    data = request.get_json()
    question=Conversation(data['input'])
    ans=str(pipe(question))[63+len(data['input'])+9:-1]
    return {'res':ans}
if __name__ == "__main__": 
   app.run(debug=True) 

