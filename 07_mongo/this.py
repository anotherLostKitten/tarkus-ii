# Team -- Theodore Peters & Mai Rachelevsky
# Sotdev pd7
# K06 -- mongo to the polls
# 2019-02-28

import pymongo

SERVER_ADDR = "jayy.mooo.com"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def title(t):
    return collection.find({'title': t})

def year(y):
    return collection.find({'year': y})
          
def genreAndActor(genre, actor):
    return collection.find({ '$and': [ {"genres": genre}, {"cast": actor} ]})
