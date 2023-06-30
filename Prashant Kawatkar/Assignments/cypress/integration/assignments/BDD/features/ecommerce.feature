Feature: End to end Ecommerce validation

    @Regression
    Scenario: Greencart product delivery
    Given I open ecommerce page
    When I add items to cart
    Then Validate the total price
    When Select country and submit the order
    Then Verify Success message

    @Smoke
    Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
    |name|email|
    |John|john@test.com|
    Then Validate the forms behaviuor
    And Select the shop page