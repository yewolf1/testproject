const { Given, When, Then } = require("@cucumber/cucumber");

let result;

Given("que je possède les nombres {int} et {int}", function (a, b) {
  this.numbers = [a, b];
});

When("je les additionne", function () {
  result = this.numbers[0] + this.numbers[1];
});

Then("le résultat doit être {int}", function (expected) {
  result === expected;
});
