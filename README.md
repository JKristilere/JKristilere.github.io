# Exploring Hidden Insights and Predicting Premier League Matches Using A Classification Machine Learning Model

This project involved scraping data from the *fbref* website which provides data about scores and statistics for premier league matches from the previous two seasons and then conducting an exploratory data analysis and building a machine learning model capable of predicting the outcomes of future matches based on the features and independent variables of the dataset.

Methodology:

    1. Problem Definition
    2. Data Scraping
    3. Data Cleaning and Preprocessing
    4. Exploratory Data Analysis
    5. Feature Engineering
    6. Model Selection & Training
    7. Model Evaluation

## Problem Definition

The objective of this study is to ingest data related to the previous two premier league seasons from the *fbref.com* website by scraping data and statistics related to our analysis
using the BeautifulSoup python web scraping library and then conduct a statistical and exploratory analysis to uncover meaningful insights in the data. We then build a machine learning algorithm which is capable of predicting the outcomes of future matches based on the features of the dataset and then tuning our model to perform at it's optimal best.


## Data
The data used for conducting our analysis and project was obtained by scraping data from the https://fbref.com/en/comps/9/Premier-League-Stats website. The code written for scraping the data can be found in the scraping-2.ipynb

## Evaluation

Success for this project would be based on whether our model can achieve an accuracy score of over 93% and a precision of at least 95%.

## Features

Data Dictionary:

* **Date** -- Date listed is local to the match
* **Time** -- Time listed is local to the match venue. Time is written in the 24-hour notation.
* **Round** -- Round or Phase of Competition
* **Day** -- Day of week
* **GF (Goals For)** -- Goals scored by team
* **GA (Goals Against)** -- Goals scored against team
* **xG (Expected Goals)** -- xG totals include penalty kicks, but do not include penalty shootouts (unless otherwise noted). Provided by Opta.
* **xGA (Expected Goals Allowed)** -- xG totals include penalty kicks, but do not include penalty shootouts (unless otherwise noted).Provided by Opta. 
* **Poss (Possession)** Calculated as the percentage of passes attempted
* **attendance** -- total crowd attendance for that fixture.
* **Formation** -- Number of players in each row from defenders to forwards, not including the goalkeeper.
* **comp** -- Competition the match is played in.
* **result** -- result of the fixture played by the team. W - Win, D - Draw, L - Loss
* **opponent** -- team played for that fixture.
* **captain** -- captain chosen for the team for the particular fixture.
* **Sh (Shots Total)** -- Total shots by team in the match. Does not include penalty kicks
* **SoT (Shots on Target)** -- Shots on target do not include penalty kicks
* **Dist (Average Shot Distance)** -- Average distance, in yards, from goal of all shots taken. Does not include penalty kicks
* **FK** -- Shots from Free Kicks
* **PK** -- Penalty Kicks Made
* **PKatt** -- Penalty Kicks Attempted
