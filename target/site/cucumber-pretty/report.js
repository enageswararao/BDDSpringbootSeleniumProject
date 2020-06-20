$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Login Functionality",
  "description": "",
  "id": "gmail-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 190361400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login Successful",
  "description": "",
  "id": "gmail-login-functionality;login-successful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigated to google page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on SigIn button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see create account link",
  "keyword": "Then "
});
formatter.match({
  "location": "GooglePageStepDefs.i_navigated_to_google_page()"
});
formatter.result({
  "duration": 10272617200,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageStepDefs.i_click_on_SigIn_button()"
});
formatter.result({
  "duration": 10738222400,
  "status": "passed"
});
formatter.match({
  "location": "GooglePageStepDefs.i_should_see_create_account_link()"
});
formatter.result({
  "duration": 5312111100,
  "status": "passed"
});
formatter.after({
  "duration": 342300,
  "status": "passed"
});
});