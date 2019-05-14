#Author: your.email@your.domain.com
@regression @us2
Feature: To test the add tariff plan page

  @scenario1
  Scenario Outline: To test the success message
  Given the user is in add tarrif plan page
  When the user fill in the valid plan details"<MonthRental>","<FreelocMin>","<FreeintMins>","<Freesms>","<Loccharges>","<Intchargesv>","<Smscharges>"
  When the user clicks the submit button
  Then user should see the success message

    Examples: 
      | MonthRental  | FreelocMin | FreeintMins  | Freesms  |  Loccharges | Intchargesv | Smscharges|
      | 1000         | 100        | 200          | 300      |  400        | 500         | 600       |
      | 2000         | 200        | 300          | 200      |  300        | 500         | 600       |
      | 3000         | 300        | 400          | 300      |  200        | 500         | 600       |
      | 4000         | 400        | 500          | 100      |  100        | 500         | 600       |
      
   @scenario2  
   Scenario Outline: To test reset function     
    Given the user is in add tarrif plan page
    When the user fill in the valid plan details"<MonthRental>","<FreelocMin>","<FreeintMins>","<Freesms>","<Loccharges>","<Intchargesv>","<Smscharges>"
    When the user clicks the reset button
    Then the add tariff form should be cleared 

  Examples: 
      | MonthRental  | FreelocMin | FreeintMins  | Freesms  |  Loccharges | Intchargesv | Smscharges|
      | 1000         | 100        | 200          | 300      |  400        | 500         | 600       |
      | 2000         | 200        | 300          | 200      |  300        | 500         | 600       |
      | 3000         | 300        | 400          | 300      |  200        | 500         | 600       |
      | 4000         | 400        | 500          | 100      |  100        | 500         | 600       |
      
     
   @scenario3
   Scenario: To test with invalid format
   Given the user is in add tarrif plan page
   When the user fill in the invalid format
   Then user should see the error message
 