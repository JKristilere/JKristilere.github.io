## Predicting Breast Cancer using Machine Learning

This notebook looks to predict whether or not whether a medical patient has breast cancer 
or not based off on various medical attributes using various machine learning models/estimators
and different data science libraries.

Approach/Methodology:

    1. Problem definition
    2. Data
    3. Evaluation
    4. Features
    5. Modelling
    6. Experimentation

### 1. Problem Definition

    Identification of breast cancer in a patient based on medical records.
        
 ### 2. Data
       
     Data used during the course of the project was obtained from: 
      https://archive.ics.uci.edu/dataset/17/breast+cancer+wisconsin+diagnostic
                        
### 3. Evaluation
        
     Reaching 90% accuracy would be deemed as success forn this project.
              
### 4. Features

 #### Data Dictionary
 
    1. radius_mean:	Mean radius of the tumor cells
    2. radius_mean:	Mean radius of the tumor cells
    3. texture_mean:	Mean texture of the tumor cells
    4. perimeter_mean:	Mean perimeter of the tumor cells
    5. area_mean: Mean area of the tumor cells
    6. smoothness_mean:	Mean smoothness of the tumor cells
    7. compactness_mean:	Mean compactness of the tumor cells
    8. concavity_mean:	Mean concavity of the tumor cells
    9. concave_points_mean:	Mean number of concave portions of the contour of the tumor cells
    10. symmetry_mean:	Mean symmetry of the tumor cells
    11. fractal_dimension_mean:	Mean "coastline approximation" of the tumor cells
    12. radius_se:	Standard error of the radius of the tumor cells
    13. texture_se:	Standard error of the texture of the tumor cells
    14. perimeter_se:	Standard error of the perimeter of the tumor cells
    15. area_se:	Standard error of the area of the tumor cells
    16. smoothness_se:	Standard error of the smoothness of the tumor cells
    17. compactness_se:	Standard error of the compactness of the tumor cells
    18. concavity_se:	Standard error of the concavity of the tumor cells
    19. concave_points_se:	Standard error of the number of concave portions of the contour of the tumor cells
    20. symmetry_se:	Standard error of the symmetry of the tumor cells
    21. fractal_dimension_se:	Standard error of the "coastline approximation" of the tumor cells
    22. radius_worst:	Worst (largest) radius of the tumor cells
    23. texture_worst:	Worst (most severe) texture of the tumor cells
    24. perimeter_worst:	Worst (largest) perimeter of the tumor cells
    25. area_worst:	Worst (largest) area of the tumor cells
    26. smoothness_worst:	Worst (most severe) smoothness of the tumor cells
    27. compactness_worst:	Worst (most severe) compactness of the tumor cells
    28. concavity_worst:	Worst (most severe) concavity of the tumor cells
    29. concave_points_worst:	Worst (most severe) number of concave portions of the contour of the tumor cells
    30. symmetry_worst:	Worst (most severe) symmetry of the tumor cells
    31. fractal_dimension_worst:	Worst (most severe) "coastline approximation" of the tumor cells
    32. target:	Diagnosis (1 = Malignant (Cancer), 0 = Benign (Not cancer))
 
