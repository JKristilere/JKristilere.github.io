# Distribution of Airlines - Dashboard

### Dashboard Link : https://app.powerbi.com/groups/me/reports/18d68471-11fc-4b6c-8317-7269cb4cb1d8/ReportSection2fd3311b94e000c60ac1?experience=power-bi

## Problem Statement

This dashboard displays the distribution of active and inactive airlines across all countries worldwide. The dashboard should provide insights into the current status of airlines, allowing stakeholders to make informed decisions based on global trends.

The dataset used for this analysis was obtained from the kaggle website and a github repository with the links displayed below:


Continent Dataset: https://github.com/dbouquin/IS_608/blob/master/NanosatDB_munging/Countries-Continents.csv

Kaggle Dataset: https://www.kaggle.com/datasets/open-flights/airline-database

### Steps followed 

- Step 1 : The downloaded datasets, which are csv files, are loaded into Microsoft excel.
- Step 2 : The airline dataset is then cleaned by checking for duplicates row. None were found.
- Step 3 : Nulll or empty values were checked for in the "Name" and cross referenced with it's ICAO or IATA code to identify the airline names. No null values were found.
- Step 4 : The "Alias", "IATA", "ICAO", and "Callsign" columns weren't checked for null or empty values as they weren't paramount for our analysis.
- Step 5 : The "Active" column was filtered to display only null values. Rows with null values in the column were then removed as those outliers would obscure the result of our analysis.
- Step 6 : The "Country" column was also filtered to display empty values. The Airline names as well as it's ICAO codes were then cross-referenced to obtain their countries using the wikipedia link below.
          https://en.wikipedia.org/wiki/List_of_airline_codes
- Step 7 : There are 201 unique countries in the dataset and it would be impossible to create a visualization with 201 distinct fields. This countries were then grouped into their continents using the countries-continent.csv file using VLOOKUP.
![Screenshot (62)](https://github.com/JKristilere/JKristilere.github.io/assets/120747811/f48ba5bc-10e3-4e5e-82d2-785774a69485)
- Step 8 : At this point, we observed that some of the Country names referencing the same countries were spelt differently. As a result, we ensured that there were no multiple spellings of countries by filtering out the names of countries which had more than one spelling and then correcting them.
- Step 9 : After the data had been clean to our satisfaction, we then proceeded to save the file in a csv format and then upload it to Power BI Desktop.

- Step 10 : Two card visuals were first added to show the total number of active airlines and inactive airlines.

- Step 11 : A piechart was added to show the percentage of active and inactive airlines to it's total number.

- Step 12 : A stacked column chart was also created to show the distribution of airlines across the various continents with the "Active" column added as a legend.


- Step 13 : A map visual was then added to show spread of airlines across the globe. 

- Step 14 : Two slicers were added, to manually filter countries and active or inactive fields. 
        
- Step 15 : Further customizations were made to the dashboard to make it aesthetically pleasing.

 
 - Step 16 : The report was then published to Power BI Service.
 
 
![Screenshot (63)](https://github.com/JKristilere/JKristilere.github.io/assets/120747811/a16b1aee-7ae6-4148-887c-290fdae271e2)

# Snapshot of Dashboard (Power BI Service)

![Screenshot (65)](https://github.com/JKristilere/JKristilere.github.io/assets/120747811/e6af6c04-d043-4ba9-8bc6-85195dfca3af)

 
 # Report Snapshot (Power BI DESKTOP)

 
![Screenshot (64)](https://github.com/JKristilere/JKristilere.github.io/assets/120747811/3aa579cc-efba-4085-9603-648c2ce888cb)


# Insights

A single page report was created on Power BI Desktop & it was then published to Power BI Service.

Following inferences can be drawn from the dashboard;

### [1] Total Number of Airlines = 6156

a)  Total Active Airlines = 1253 (20.35%)

b) Total Inactive Airlines = 4903 (79.65%)


        Thus, 79.65% of the airlines are currently inactive, which shows 
        that the airline business industry is highly competitive and not as
        profitable as one would expect.

           

### [2] Continent and Countries with the Highest Number of Airlines
        While North America has the highest number of airlines, it ranks 
        3rd in the highest number of active airlines, with Europe ranking
        1st with 383, and Asia 2nd with 370.

        This shows that majority of airlines operate within these regions
        and flights both in and out of these regions being the most 
        profitable.
