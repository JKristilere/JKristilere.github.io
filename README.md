# Sales Analysis of Different Product Categories Across Various Years

### Dashboard Link : https://app.powerbi.com/groups/me/reports/e7b11630-1eb6-4f20-9623-3a99bacfc5cb/ReportSection?experience=power-bi

## Problem Statement

This project involves the creation of Dashboards and the usage of DAX measures in Power BI to identify key metrics for sales analysis of different product categories over a period of time.

The dataset used during the course of the project is the 2017 AdventureWorks sample dataset provided by Microsoft. A link is provided below to access the dataset.

AdventureWorks Dataset:https://learn.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-ver16&tabs=ssms

### Steps followed 

- Step 1 : The downloaded dataset, which is a bak file, is restored to a Microsoft SQL Server Database.

- Step 2 : The SQL Server Database is then connected to Power BI where the required tables for analysis are selected.

- Step 3 : The tables are checked for outliers in order to be cleaned up.

- Step 4 : Since no outliers were found, we went straight to our analysis.

- Step 5 : The first step in creating our dashboard was to customize are canvas background by making it a shade of light blue.

- Step 6 : 3 cards were first added to display the Total Sales Amount, Total Product Cost, and Total Tax Amount of every product category.

        TOTAL SALES AMOUNT = 80.45 M Naira
        TOTAL PRODUCT COST = 79.98 M Naira
        TOTAL TAX AMOUNT = 6.44 M Naira

- Step 7 : Two column chart were added to the dashboard. The first dislayed total sales amount of each product category from the "DimProductCategory" and "FactResellerSales" tables.. The second showed the total sales amount quota for the last 4 years from the "FactSalesQuota" table.

- Step 8 : A piechart was added which showed the percentage sum of annual revenue by each business type from the "DimReseller" table.

- Step 9 : A map visual was lastly added to show the spread of the product categories across the globe.

- Step 10 : A second page was created on our dashboard in order to highlight key metrics comparing the previous year's perforamnce with the current year's perforamnce. All these were created using DAX measures.

- Step 11 : The first visual included a bar chart which highlighted the total product cost of the current year compared to that of the previous year.

        Current Year's Total Product Cost = CALCULATE(SUM(FactResellerSales[TotalProductCost]), 
        FILTER(FactResellerSales, FactResellerSales[OrderDate].[Year] = 
        MAX(FactResellerSales[OrderDate].[Year]))) 

        Previous Year's Total Product Cost = CALCULATE(SUM(FactResellerSales[TotalProductCost]), 
        FILTER(FactResellerSales, FactResellerSales[OrderDate].[Year] = 
        MAX(FactResellerSales[OrderDate].[Year]) - 1))

- Step 12 : The next visual also highlighted the tax amount of the previous year with that of the current year using DAX meaures.

        Current Year's Tax Amount = CALCULATE(SUM(FactResellerSales[TaxAmt]),
         FILTER(FactResellerSales, FactResellerSales[OrderDate].[Year] = 
         MAX(FactResellerSales[OrderDate].[Year])))

        Previous Year's Tax Amount = CALCULATE(SUM(FactResellerSales[TaxAmt]), 
        FILTER(FactResellerSales, FactResellerSales[OrderDate].[Year] = 
        MAX(FactResellerSales[OrderDate].[Year]) - 1))
        
- Step 13 : The third visual created was also a column chart which compared the sales amount of the previous year and current year.

        Current Year's Sales Amount = CALCULATE(SUM(FactResellerSales[SalesAmount]), 
        FILTER(FactResellerSales, FactResellerSales[OrderDate].[Year] = 
        MAX(FactResellerSales[OrderDate].[Year])))

        Previous Year's Sales Amount = CALCULATE(SUM(FactResellerSales[SalesAmount]), 
        FILTER(FactResellerSales, FactResellerSales
        [OrderDate].[Year] = MAX(FactResellerSales[OrderDate].[Year]) - 1))

    
- Step 14 : The last visual compared the average sales amount of the current year and previous year.

        Current Year's Average Sales Amount = CALCULATE(AVERAGEFactResellerSales[SalesAmount]),
        FILTER(FactResellerSales, FactResellerSales[OrderDate].
        [Year] = MAX(FactResellerSales[OrderDate].[Year])))


        Previous Year's Average Sales Amount = CALCULATE(Average(FactResellerSales[SalesAmount]), 
        FILTER(FactResellerSales, FactResellerSales[OrderDate].[Year] =
         MAX(FactResellerSales[OrderDate].[Year]) - 1))

- Step 15 : Further customizations were made to the dashboard to make it aesthetically pleasing.

 
 - Step 16 : The report was then published to Power BI Service.
 
 
![Screenshot (66)](https://github.com/JKristilere/JKristilere.github.io/assets/120747811/b205303c-b031-435f-911e-f704901bfb45)


# Snapshot of  Dashboard (Power BI Desktop)

![Screenshot (68)](https://github.com/JKristilere/JKristilere.github.io/assets/120747811/e0064a04-e526-491a-b26c-b295602f4fa6)
 
![Screenshot (67)](https://github.com/JKristilere/JKristilere.github.io/assets/120747811/daeb50bd-bfa9-4573-ac20-cf55c2d97b4f)


 # Report Snapshot (Power BI Service)

 
![Screenshot (69)](https://github.com/JKristilere/JKristilere.github.io/assets/120747811/d3d30fed-acf4-4517-af01-b389445e63d0)



# Insights

A two page report was created on Power BI Desktop & it was then published to Power BI Service.

Following inferences can be drawn from the dashboard;

### [1] First Dashboard

The year with the highest sales amount quota was 2012 with 2013 coming in second.

The target market audience is located mainly in North America with Europe coming in second.

The Business type which is most profitable is the Warehouse with it accounting for 58.87% of the total revenue generated.

### [2] Second Dashboard

More products are being sold in the current year than in the previous year which led to a subsequent increase in the total product cisr and sales amount of the current yeae compared to that of the previous year.

