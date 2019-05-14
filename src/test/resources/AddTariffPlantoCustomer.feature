#Author: your.email@your.domain.com
@regression @us4
Feature: To test the add tariff plan to customer page

   @scenario1
   Scenario: To check the add tarriff to customer page with valid data
   Given the user is in add tarrif plan to customer page
   When the user enters valid customer ID
   When the user clicks the submit button
   Then the tariff plan is added

    @scenario2
    Scenario: To check the add tarriff to customer page with invalid data
    Given the user is in add tarrif plan to customer page
    When the user enters invalid customer ID
    When the user clicks the submit button
    Then Then the invalid customer id error message should display

    