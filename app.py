from flask import Flask, render_template, request, jsonify, redirect, url_for,session
from flask_restx import Api, Resource
import json
from flask_cors import CORS

from datetime import timedelta
# from auth_decorator import login_required
#from dotenv import load_dotenv
from functools import wraps
from xml.etree import ElementTree

#python3 -m flask run --host=127.0.0.1 --port=5000
#load_dotenv()

"""Define Flask app"""
app = Flask(__name__)


CORS(app, support_credentials=False)
@app.route("/bbc/<topic>", methods=["GET"])
def bbc(topic):
    #world , business, technology

    # response = requests.get("http://feeds.bbci.co.uk/news/video_and_audio/" + topic + "/rss.xml")
    # tree = ElementTree.fromstring(response.text)
    # jsonArr = []
    # for item in tree.iter('item'):
    #     title = item.find('title').text

    #     link = " "
    #     if item.find('link') is not None:
    #         link = item.find('link').text

    #     description = " "
    #     if item.find('description') is not None:
    #         description = item.find('description').text

    #     pubdate = " "
    #     if item.find('pubDate') is not None:
    #         pubdate = item.find('pubDate').text

    #     jsonArr.append({"title": title, "link": link, "description": description, "pubdate": pubdate})

    with open('./cached/bbc_' + topic +'.json', 'r') as json_file:
        jsonArr = json.load(json_file)

    return jsonify(jsonArr)

@app.route("/sky/<topic>")
def sky(topic):
    #world, business, technology

    # response = requests.get("https://feeds.skynews.com/feeds/rss/" + topic + ".xml")
    # tree = ElementTree.fromstring(response.text)
    # jsonArr = []
    # for item in tree.iter('item'):
    #     title = item.find('title').text

    #     link = " "
    #     if item.find('link') is not None:
    #         link = item.find('link').text

    #     description = " "
    #     if item.find('description') is not None:
    #         description = item.find('description').text

    #     pubdate = " "
    #     if item.find('pubDate') is not None:
    #         pubdate = item.find('pubDate').text

    #     jsonArr.append({"title": title, "link": link, "description": description, "pubdate": pubdate})

    with open('./cached/sky_' + topic +'.json', 'r') as json_file:
        jsonArr = json.load(json_file)
    return jsonify(jsonArr)


@app.route("/cnn/<topic>", methods=["GET"])  # Define the route
def cnn(topic):  
    #world, business, technology

    # response = requests.get("https://feeds.skynews.com/feeds/rss/" + topic + ".xml")
    # tree = ElementTree.fromstring(response.text)
    # jsonArr = []
    # for item in tree.iter('item'):
    #     title = item.find('title').text

    #     link = " "
    #     if item.find('link') is not None:
    #         link = item.find('link').text

    #     description = " "
    #     if item.find('description') is not None:
    #         description = item.find('description').text

    #     pubdate = " "
    #     if item.find('pubDate') is not None:
    #         pubdate = item.find('pubDate').text

    #     jsonArr.append({"title": title, "link": link, "description": description, "pubdate": pubdate})

    with open('./cached/cnn_' + topic +'.json', 'r') as json_file:
        jsonArr = json.load(json_file)
    return jsonify(jsonArr)


if __name__ == '__main__':
    app.run(host="0.0.0.0",debug=True)










