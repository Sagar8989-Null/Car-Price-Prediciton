from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app) 

# Loading trained model
model = joblib.load("Model/car_price_model.pkl")


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json  # Get JSON data from frontend
    
    # Extract values 
    year = int(data["year"])
    km_driven = int(data["km_driven"])

    # Adujusting lists according to Values
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

    # Passing all the Features in order as the model is trained
    features = np.array([[km_driven,fuel[0],fuel[1],transmission,owner[0],owner[1],owner[2],year]])
    # actual Prediction
    prediction = model.predict(features)[0]

    return jsonify({"predicted_price": round(float(prediction), 2)})

if __name__ == "__main__":
    app.run(debug=True)


