$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AddCustomer.feature");
formatter.feature({
  "name": "To test the add customer functionality.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "test customer id genarated for valid customer.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid customer details",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_fill_in_the_valid_customer_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the customer ID generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_should_see_the_customer_ID_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "test reset button",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid customer details",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_fill_in_the_valid_customer_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the reset button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_clicks_the_reset_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the form should be cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsAddCustomer.the_form_should_be_cleared()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "test for the error message",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters incorrect data format",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_enters_incorrect_data_format()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsAddCustomer.the_error_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "blank validation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user keeps the field empty",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_keeps_the_field_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message in alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsAddCustomer.the_error_message_in_alert_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/AddTariffPlan.feature");
formatter.feature({
  "name": "To test the add tariff plan page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To test the success message",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user fill in the valid plan details\"\u003cMonthRental\u003e\",\"\u003cFreelocMin\u003e\",\"\u003cFreeintMins\u003e\",\"\u003cFreesms\u003e\",\"\u003cLoccharges\u003e\",\"\u003cIntchargesv\u003e\",\"\u003cSmscharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.step({
  "name": "user should see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRental",
        "FreelocMin",
        "FreeintMins",
        "Freesms",
        "Loccharges",
        "Intchargesv",
        "Smscharges"
      ]
    },
    {
      "cells": [
        "1000",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600"
      ]
    },
    {
      "cells": [
        "2000",
        "200",
        "300",
        "200",
        "300",
        "500",
        "600"
      ]
    },
    {
      "cells": [
        "3000",
        "300",
        "400",
        "300",
        "200",
        "500",
        "600"
      ]
    },
    {
      "cells": [
        "4000",
        "400",
        "500",
        "100",
        "100",
        "500",
        "600"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test the success message",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"1000\",\"100\",\"200\",\"300\",\"400\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsAddCustomer.user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the success message",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"2000\",\"200\",\"300\",\"200\",\"300\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsAddCustomer.user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the success message",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"3000\",\"300\",\"400\",\"300\",\"200\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsAddCustomer.user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the success message",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"4000\",\"400\",\"500\",\"100\",\"100\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsAddCustomer.user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
});