# Team -- Theodore Peters & Mai Rachelevsky
# Sotdev pd7
# K06 -- mongo to the polls
# 2019-02-28

import pymongo
import json

SERVER_ADDR = "jayy.mooo.com"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.computerInteraction
collection = db.movies

f=open("movies.json","r")
data=json.loads(f.read())
f.close()

collection.insert_many(data)
