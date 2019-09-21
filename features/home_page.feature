Feature: User should be able to navigate through the site

  Scenario: User should be able to accept the cookies
    Given I navigate to the home page
    When I click on the site logo
    Then I should be redirected to https://www.toolsqa.com/
    And the user should be able to accept the cookies

  Scenario: User should be able hover over an element
    Given I navigate to the home page
    When I navigate to the doubleClick menu
    And the page url should include double-click
    Then I hover over the Age element

  Scenario: User should be able to navigate to the Widgets menu
    Given I navigate to the home page
    When I navigate to the widgets menu
    Then the page url should contain widgets
    And Widgets menu should be displayed

  Scenario: User should be able to scroll until Datepicker Widget is visible
    Given I navigate to the home page
    When I scroll to bring datePicker label into view
    And I click on the datePicker label
    Then I pick the september 25
    And the day displayed should be 09/25/2019

  Scenario: User should be able to move a slider
    Given I navigate to the home page
    When I click on the slider label
    Then I move the square element

  Scenario: User should be able to drag and Drop elements
    Given I navigate to the home page
    When I click on the droppable label
    Then I drag and drop the element

  Scenario: User should be able Toggle elements
    Given I navigate to the home page
    When I click on the spinner label
    And The widget element should be visible
    Then I toggle off the widget
    And The widget element should not be visible

  Scenario: User should see different color in selected items
    Given I navigate to the home page
    When I click on the selectable label
    Then I click on the Item 3 element
    And The Item 3 should have a background color

  Scenario: User should be able to use autocomplete functionality
    Given I navigate to the home page
    When I click on the autoComplete label
    Then autocompleted option JavaScript should be displayed

  Scenario: User should be able to close an opened tab
    Given I navigate to the home page
    When I click on the switchWindow label
    And I open a new tab
    Then I close the new tab

