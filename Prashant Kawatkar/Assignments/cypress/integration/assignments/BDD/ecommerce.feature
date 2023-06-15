Feature: End to end Ecommerce validation

    @Regression
    Scenario: Greencart product delivery
    Given I open ecommerce page
    When I add items to cart
    And validate the total price
    Then Select the country submit and verify Success message

    @Smoke
    Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
    |name|email|
    |John|john@test.com|
    Then validate the forms behaviuor
    And select the shop page