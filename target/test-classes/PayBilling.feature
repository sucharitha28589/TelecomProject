#Author: your.email@your.domain.com
@regression @us3
Feature: To check the functionality of pay Billing page 

  @scenario1  
  Scenario: To check the billing page with valid data  
    Given  the user is in the pay billing page
    When the user enters valid customer ID
    When the user clicks the submit button
    Then the bill is genrated
    

   @scenario2
   Scenario: To check the billing page with invalid data
    Given the user is in the pay billing page
    When the user enters invalid customer ID
    When the user clicks the submit button
    Then the invalid customer id shoul generate

