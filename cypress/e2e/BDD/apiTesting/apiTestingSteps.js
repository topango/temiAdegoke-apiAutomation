/// <reference types="cypress" />
import { Given, When, Then, And, } from "cypress-cucumber-preprocessor/steps";



Given('I make a POST request to the API', () => {
    cy.request({
      method: 'POST',
      url: 'https://linetencustomerapi.azurewebsites.net/Api/add',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json-patch+json'
      },
      body: {
        Email: 'john@doe.com',
        Phone: '07499111222',
        Address: '191 Wood ln',
        City: 'London',
        Zip: 'W12 7FP',
        Country: 'UK',
        Notes: 'Hello'
      },
      failOnStatusCode: false,
    }).as('addRequest');
  });
  
  When('the response is received', () => {
    cy.get('@addRequest').should('exist');
  });
  
  Then('the response status should be bad request 400', () => {
    cy.get('@addRequest').its('status').should('equal', 400);
  });


  Given('I make a POST request to the add API with valid data', () => {
    cy.request({
      method: 'POST',
      url: 'https://linetencustomerapi.azurewebsites.net/Api/add',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json-patch+json',
      },
      body: {
        Name: 'John Doe',
        Email: 'john@doe.com',
        Phone: '07499111222',
        Address: '191 Wood ln',
        City: 'London',
        Zip: 'W12 7FP',
        Country: 'UK',
        Notes: 'hello',
      },
      failOnStatusCode: false,
    }).as('addRequest');
  });

  When('the response is received', () => {
    cy.get('@addRequest').should('exist');
  });
  
  Then('the response should have a status code of 200', () => {
    cy.get('@addRequest').its('status').should('equal', 200);
  });
  
  
  Given('I make a GET request to the get API', () => {
    cy.request({
      method: 'GET',
      url: 'https://linetencustomerapi.azurewebsites.net/Api/get',
      headers: {
        accept: '*/*',
      },
      failOnStatusCode: false,
    }).as('request');
  });

  When('the GET response is received', () => {
    cy.get('@request').should('exist');
  });
  
  Then('the GET response should have a status code of 200', () => {
    cy.get('@request').its('status').should('equal', 200);
  });
  
  
  Given('I make a GET request to the get API with an invalid ID', () => {
    cy.request({
      method: 'GET',
      url: 'https://linetencustomerapi.azurewebsites.net/Api/get/1cedd95b-da95-4231-bc05-ba23a9f8b697',
      headers: {
        accept: '*/*',
      },
      failOnStatusCode: false,
    }).as('request');
  });
  
  Then('the response should have a status code of 404', () => {
    cy.get('@request').its('status').should('equal', 404);
  });
  
  
  Given('I make a GET request to the get API with a valid ID', () => {
    cy.request({
      method: 'GET',
      url: 'https://linetencustomerapi.azurewebsites.net/Api/get/c241a259-58b0-4936-b27d-6a393f0c95eb',
      headers: {
        accept: '*/*',
      },
      failOnStatusCode: false,
    }).as('request');
  });
  
  Then('the GET response should have a status code of 200', () => {
    cy.get('@request').its('status').should('equal', 200);
  });




