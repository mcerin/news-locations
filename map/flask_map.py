from flask import Flask, render_template, request
import json
import random

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/places',  methods=['POST','GET'])
def background_process_test():
    file = open('..\\places.txt', 'r')
    dic = {}
    for line in file:
        list_places = line.replace('\n', '').split(',')
        try:
            dic[list_places[0] + '-' + list_places[-1]] = [str(float(list_places[1]) + (random.random() - 0.5)/10), str(float(list_places[2]) + (random.random() - 0.5)/10)]
        except:
            pass
    file.close()
    return json.dumps(dic)

if __name__ == '__main__':
    app.run()
