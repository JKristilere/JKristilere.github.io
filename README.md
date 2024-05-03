# Predicting Flight Prices Using Regression Machine Learning Model
This project involves studying flight booking dataset obtained from the Easemytrip website to conduct various analysis on the dataset to draw meaningful information from the data to determine factors which influence the change in price of various flights, as well building a machine learning model capable of predicting flight prices based on various factors surrounding fight bookings.

Approach/Methodology:

    1. Problem definition
    2. Data
    3. Evaluation
    4. Features
    5. Data Preprocessing
    6. Data Modelling
    6. Feature Importance

## 1. Problem Definition
The objective of the study is to analyse the flight booking dataset obtained from **Ease My Trip** website and to conduct various statistical hypothesis tests 
in order to get meaningful information from it. The 'SGDRegressor' statistical model would be used to train the dataset and predict a continuous target variable. 
'Easemytrip' is an internet platform for booking flight tickets, and hence a platform that potential passengers use to buy tickets. A thorough study of the data will aid 
in the discovery of valuable insights that will be of enormous value to passengers.

The aim of our study is to answer the below research questions:

    a) Does price vary with Airlines?
    b) How is the price affected when tickets are bought in just 1 or 2 days before departure?
    c) Does ticket price change based on the departure time and arrival time?
    d) How the price changes with change in Source and Destination?
    e) How does the ticket price vary between Economy and Business class?
        
 ## 2. Data
       
Data used during the course of the project was obtained from kaggle via the link below: 
      https://www.kaggle.com/datasets/shubhambathwal/flight-price-prediction
                        
## 3. Evaluation
        
Reaching an R2 score of 94%  would be deemed as success for this project.
              
## 4. Features

 #### Data Dictionary
 The various features of the cleaned dataset are explained below:
1) Airline: The name of the airline company is stored in the airline column. It is a categorical feature having 6 different airlines.
2) Flight: Flight stores information regarding the plane's flight code. It is a categorical feature.
3) Source City: City from which the flight takes off. It is a categorical feature having 6 unique cities.
4) Departure Time: This is a derived categorical feature obtained created by grouping time periods into bins. It stores information about the departure time and have 6 unique time labels.
5) Stops: A categorical feature with 3 distinct values that stores the number of stops between the source and destination cities.
6) Arrival Time: This is a derived categorical feature created by grouping time intervals into bins. It has six distinct time labels and keeps information about the arrival time.
7) Destination City: City where the flight will land. It is a categorical feature having 6 unique cities.
8) Class: A categorical feature that contains information on seat class; it has two distinct values: Business and Economy.
9) Duration: A continuous feature that displays the overall amount of time it takes to travel between cities in hours.
10)Days Left: This is a derived characteristic that is calculated by subtracting the trip date by the booking date.
11) Price: Target variable stores information of the ticket price.
