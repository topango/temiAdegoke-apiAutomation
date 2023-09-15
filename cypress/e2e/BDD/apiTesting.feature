Feature: Testing Add API

    Scenario: Unsuccessful POST Request
    Given I make a POST request to the API
    When the response is received
    Then the response status should be bad request 400

    Scenario: Successful POST Request
    Given I make a POST request to the add API with valid data
    When the response is received
    Then the response should have a status code of 200          


    Scenario: Successful GET request
    Given I make a GET request to the get API
    When the GET response is received
    Then the GET response should have a status code of 200

    Scenario: Unsuccessful GET by ID request
    Given I make a GET request to the get API with an invalid ID
    Then the response should have a status code of 404


    Scenario: Successful get by ID request
    Given I make a GET request to the get API with a valid ID
    Then the GET response should have a status code of 200