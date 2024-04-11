from flask import Flask, url_for, render_template, request
import random
from markupsafe import Markup
import json
import os
import re
from operator import itemgetter
app = Flask(__name__) #__name__ = "__main__" if this is the file that was run.  Otherwise, it is the name of the file (ex. webapp)

@app.route("/p2")
def render_page2():
    
    if request.args:
        text = request.args['category']
        if text == "Aroma":
            print("a")
        m = get_best_for_category(text)
        o = get_countries()
        y = request.args['year']
        check = y.isdigit()
        if check:
            y = int(y)
            r = avg_scores_year(y)
        else:
            r = avg_scores_country(y)
        return render_template('page2.html', category = text, list = m, aroma = r, year = y, country_list = o)
    else:
        return render_template('page2.html', category="O", list = [{"name": "pick"}])
   


@app.route("/")
def render_main():
    return render_template('layout.html', done = "/done", answer = "Would you like a recipe to make? (Yes/Recipe)")


    

def get_best_for_category(r):
    with open('coffee.json') as coffee_data:
        coffee = json.load(coffee_data)
    test = []
    for x in coffee:
        test.append({"name": x["Data"]["Owner"], "value": x["Data"]["Scores"][r] })
    newlist = sorted(test, key=itemgetter("value"), reverse=True)
    return newlist

def avg_scores_year(year):
    with open('coffee.json') as coffee_data:
        coffee = json.load(coffee_data)
    yearset =[{}]
    Aroma = 0
    times = 0
    Flavor = 0
    Aftertaste = 0
    Acidity = 0
    Body = 0
    Balance = 0
    Uniformity = 0
    Sweetness = 0
    scoreset = []
    for x in coffee:
        if x["Year"] == year:
            Aroma += x["Data"]["Scores"]["Aroma"]
            Flavor += x["Data"]["Scores"]["Flavor"]
            Aftertaste += x["Data"]["Scores"]["Aftertaste"]
            Acidity += x["Data"]["Scores"]["Acidity"]
            Body += x["Data"]["Scores"]["Body"]
            Balance += x["Data"]["Scores"]["Balance"]
            Uniformity += x["Data"]["Scores"]["Uniformity"]
            Sweetness += x["Data"]["Scores"]["Sweetness"]
            times += 1
    scoreset = [Aroma, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Sweetness ]
    for x in range (0, len(scoreset)):
        scoreset[x]/= times
    return scoreset

def avg_scores_country(country):
    with open('coffee.json') as coffee_data:
        coffee = json.load(coffee_data)
    yearset =[{}]
    Aroma = 0
    times = 0
    Flavor = 0
    Aftertaste = 0
    Acidity = 0
    Body = 0
    Balance = 0
    Uniformity = 0
    Sweetness = 0
    scoreset = []
    for x in coffee:
        if x["Location"]["Country"] == country:
            Aroma += x["Data"]["Scores"]["Aroma"]
            Flavor += x["Data"]["Scores"]["Flavor"]
            Aftertaste += x["Data"]["Scores"]["Aftertaste"]
            Acidity += x["Data"]["Scores"]["Acidity"]
            Body += x["Data"]["Scores"]["Body"]
            Balance += x["Data"]["Scores"]["Balance"]
            Uniformity += x["Data"]["Scores"]["Uniformity"]
            Sweetness += x["Data"]["Scores"]["Sweetness"]
            times += 1
    scoreset = [Aroma, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Sweetness ]
    for x in range (0, len(scoreset)):
        scoreset[x]/= times
    return scoreset

def get_countries():
    with open('coffee.json') as coffee_data:
        coffee = json.load(coffee_data)
    country_list = []
    for x in coffee:
        if x["Location"]["Country"] in country_list:
            r = 0
        else:
            country_list.append(x["Location"]["Country"])
    return country_list
    

    
        


    
    


    
if __name__=="__main__":
    app.run(debug=True)
