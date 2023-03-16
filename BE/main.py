# from crypt import methods
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

StoreData ={
    "Products": [
        { "productID": 1, "name": "TV", "price": 1000, "quantity": 10, "img": "https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua43tu8000uxtw-frontblack-229856295?$684_547_PNG$"
        },
        { "productID": 2, "name": "laptop", "price": 500, "quantity": 15, "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428998_sd.jpg"
        },
        { "productID": 3, "name": "refrigerator", "price": 250, "quantity": 1, "img": "https://m.media-amazon.com/images/I/71if9IRsHlL._SL1500_.jpg"
        },
    ],
    "Customers": [
        { "customerID": 1, "firstName": "zeev", "lastName": "cohen", "city": "jerusalem"
        },
        { "customerID": 2, "firstName": "tal", "lastName": "levi", "city": "tel-aviv"
        },
        { "customerID": 3, "firstName": "shlomo", "lastName": "dagan", "city": "tel-aviv"
        },
        { "customerID": 4, "firstName": "shira", "lastName": "shalom", "city": "tel-aviv"
        },
    ],
    "Purchases": [
        { "purchasID": 1, "productID": 1, "customerID": 1, "date": "2020-11-13"
        },
        { "purchasID": 2, "productID": 2, "customerID": 1, "date": "2019-08-20"
        },
        { "purchasID": 3, "productID": 2, "customerID": 2, "date": "2022-03-20"
        }
    ],
    "clients": []
}

@app.route("/", methods=['GET'])
def get_data():
    return jsonify(StoreData)

@app.route("/", methods=['POST'])
def save_data():
    return print("added!")

app.run()