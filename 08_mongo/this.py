# Team computerInteraction -- Theodore Peters & Mai Rachelevsky
# Sotdev pd7
# K07 -- mongo to the polls that you created yoruself with a pymonWOAH script
# 2019-03-05

import pymongo

SERVER_ADDR = "jayy.mooo.com"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.computerInteraction
collection = db.movies

# moovies (wikipedia's movie info: names, genres, cast, year of release): https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
# import method:
# run that.py
# which parses json file and into a python obj and adds all that data to mongo collection

def title(t):
    return[(i["title"],i["year"],i["cast"],i["genres"])for i in collection.find({'title': t})]
def year(y):
    return[(i["title"],i["year"],i["cast"],i["genres"])for i in collection.find({'year': y})]
def actor(a):
    return[(i["title"],i["year"],i["cast"],i["genres"])for i in collection.find({"cast": a})]
def genreAndActor(a, g):
    return[(i["title"],i["year"],i["cast"],i["genres"])for i in collection.find({ '$and': [ {"genres": g}, {"cast": a} ]})]

print(title("Brazen Beauty"))
print(year(1918))
print(actor("Harold Lloyd"))
print(genreAndActor("Harold Lloyd","Comedy"))
