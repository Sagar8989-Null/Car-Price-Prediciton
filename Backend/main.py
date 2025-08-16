from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app) 

# Load your trained model
model = joblib.load("Model/car_price_model.pkl")

# def predict():
#     data = request.json  # Get JSON data from frontend
    
#     # Extract values (make sure keys match frontend)
#     year = int(data["year"])
#     km_driven = int(data["km_driven"])
#     fuel = int(data["fuel"])  
#     transmission = int(data["transmission"])
#     owner = int(data["owner"])

#     # Example: Adjust this feature order based on how you trained your model
#     features = np.array([[year, km_driven, fuel, transmission,owner]])

#     prediction = model.predict(features)[0]
    
#     return jsonify({"predicted_price": round(float(prediction), 2)})


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json  # Get JSON data from frontend
    
    # Extract values (make sure keys match frontend)
    year = int(data["year"])
    km_driven = int(data["km_driven"])

    if data["fuel"] == "Diesel":
        fuel=[1,0]
    elif data["fuel"] == "Petrol":
        fuel=[0,1]  

    if data["transmission"] == "Manual":
        transmission = 1
    else:
        transmission = 0

    if data["owner"] == "First":
        owner = [0,0,0]
    elif data["owner"] == "Second":
        owner = [0,1,0]
    elif data["owner"] == "Third":
        owner = [0,0,1]
    else:
        owner = [1,0,0]

    features = np.array([[km_driven,fuel[0],fuel[1],transmission,owner[0],owner[1],owner[2],year]])

    prediction = model.predict(features)[0]

    print(prediction)
    
    return jsonify({"predicted_price": round(float(prediction), 2)})

if __name__ == "__main__":
    app.run(debug=True)


