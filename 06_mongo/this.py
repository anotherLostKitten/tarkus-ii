# Team -- Theodore Peters & Ray Onishi
# Sotdev pd7
# K06 -- mongo to the polls
# 2019-02-28

import pymongo

SERVER_ADDR = "jayy.mooo.com"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def burrow(b):
    return tuple(i["name"]for i in db.restaurants.find({"borough":b}))
def zipcode(z):
    return tuple(i["name"]for i in db.restaurants.find({"address.zipcode":z}))
def zipcode_grade(z,grade):
    return tuple(i["name"]for i in db.restaurants.find({"$and":[{"address.zipcode":z},{"grades.grade":grade}]}))
def zipcode_thresh(z,thresh):
    return tuple(i["name"]for i in db.restaurants.find({"$and":[{"address.zipcode":z},{"grades.score":{"$lt":thresh}}]}))
def avg_score(thresh):
    return tuple(i["name"]for i in db.restaurants.find({"$expr":{"$gte":[{"$divide":[{"$reduce":{"input":"grades.score","initialValue":0,"in":{"$add":["$$value.sum","$$this"]}}},{"$size":"grades.score"}]},thresh]}}))
if __name__=="__main__":
    print(burrow("Brooklyn"))
    print(zipcode(10282))
    print(zipcode_grade(10282,"B"))
    print(zipcode_thresh(10282,15))
    print(avg_score(15))
