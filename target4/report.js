$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/PayBilling.feature");
formatter.feature({
  "name": "To check the functionality of pay Billing page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us3"
    }
  ]
});
formatter.scenario({
  "name": "To check the billing page with invalid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us3"
    },
    {
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "name": "the user is in the pay billing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_is_in_the_pay_billing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters invalid customer ID",
  "keyword": "When "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_enters_invalid_customer_ID()"
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
  "name": "the invalid customer id shoul generate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsAddCustomer.the_invalid_customer_id_shoul_generate()"
});
formatter.result({
  "status": "passed"
});
});