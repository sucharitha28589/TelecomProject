#Author: your.email@your.domain.com
@regression @us1
Feature: To test the add customer functionality.
  @scenario1
  Scenario: test customer id genarated for valid customer.
    Given the user is in add customer page
    When the user fill in the valid customer details
    When the user clicks the submit button
    Then the user should see the customer ID generated
    
  @scenario2
  Scenario: test reset button
    Given the user is in add customer page
    When the user fill in the valid customer details
    When the user clicks the reset button
    Then the form should be cleared
    
   @scenario3
  Scenario: test for the error message
    Given the user is in add customer page
    When the user enters incorrect data format
    Then the error message is displayed
    
  @scenario4
  Scenario: blank validation
    Given the user is in add customer page
    When The user keeps the field empty
    When the user clicks the submit button
    Then the error message in alert is displayed
