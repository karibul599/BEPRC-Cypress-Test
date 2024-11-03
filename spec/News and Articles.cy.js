import 'cypress-iframe';

describe('News and Articles Edit', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('superadmin@beprc.com');
    cy.get('input[name="password"]').type('12345#Bmail');
    cy
    .get('#kc-login')
    .should('exist')
    .and('be.visible')
    .click();
      });


    cy
    .wait(5000);
    cy.visit('http://localhost:5173/');
    cy
    .wait(1000);
      // cy.get('//input[@name="username"]').click().type('superadmin@beprc.com');
      // cy.xpath('//input[@name="password"]').click().type('12345#Bmail');
      // cy.xpath('//*[@id="kc-login"]').click();

      
      cy
      .get('.text-sm.text-gray-200')
      .contains('Super Admin') 
      .should('be.visible');
  
      cy
      .get('a[href="/articles"]')
      .click();
      cy
      .wait(3000);
     
      //cy.wait(15000);
      cy.get('a[href="/articles/add-article/0"]')
      .click();
      cy.wait(1500);

      cy.get('[name="title"]') 
        .should('exist')      
        .and('be.visible')     
        .click()             
        .type('title[i]'); 
        cy.get('[name="serialNumber"]')
        .should('exist')
        .and('be.visible')
        .click() 
        .type('1');
       
    })

  it('should type and verify text in TinyMCE editor', () => {
    cy.wait(5000);
    cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/form/div[3]/div/div/div[1]/div[2]/div[1]/iframe')
    .then(($iframe) => {
      const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
      cy.wrap(iframeDocument)
        .find('body')
        .type('Hello, TinyMCE!')
        .should('contain.text', 'Hello, TinyMCE!');

                cy.wait(500);
        cy.get('input[type="file"]').attachFile('download (1).jpg');
        cy.wait(15000);

        cy.wait(500);
        cy.contains('button', 'Add')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(500);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click()
          cy.wait(500);
          cy.wait(500);
          cy.get('.fill-gray-100').click();
      
          cy.wait(5000);
          cy.contains('button', 'Log Out')
          .should('exist')
          .and('be.visible')
          .click();
         cy.wait(5000);

         cy.contains('details[i]')
        cy.wait(100);

  });
});
});


describe.only('News and Articles creat', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('superadmin@beprc.com');
    cy.get('input[name="password"]').type('12345#Bmail');
    cy
    .get('#kc-login')
    .should('exist')
    .and('be.visible')
    .click();
      });


    cy
    .wait(5000);
    cy.visit('http://localhost:5173/');
    cy
    .wait(1000);

      
      cy
      .get('.text-sm.text-gray-200')
      .contains('Super Admin') 
      .should('be.visible');
  
      cy
      .get('a[href="/articles"]')
      .click();
      cy
      .wait(3000);
     
      //cy.wait(15000);
      cy.contains('button', 'Edit')
          .should('exist')
          .and('be.visible')
          .click();
      cy.wait(1500);

      cy.get('[name="title"]') 
        .should('exist')      
        .and('be.visible')     
        .click().clear()             
        .type('Under the leadership of Mr. Md. MokabbirHossain (Secretary),the Bangladesh Energy'); 
        cy.get('[name="serialNumber"]')
        .should('exist')
        .and('be.visible')
        .click().clear() 
        .type('5');
       
    })

  it('should type and verify text in TinyMCE editor', () => {
    cy.wait(5000);
    cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/form/div[3]/div/div/div[1]/div[2]/div[1]/iframe')
    .then(($iframe) => {
      const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
      cy.wrap(iframeDocument)
      .find('body')  
      .clear()       
      .type('Hello, everyone') 
      .should('contain.text', 'Hello, everyone');

                cy.wait(500);
        cy.get('input[type="file"]').attachFile('download (3).jpg');
        cy.wait(15000);

        cy.wait(500);
        cy.contains('button', 'Update')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(500);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click()
          cy.wait(500);
          cy.wait(500);
          cy.get('.fill-gray-100').click();
      
          cy.wait(5000);
          cy.contains('button', 'Log Out')
          .should('exist')
          .and('be.visible')
          .click();
         cy.wait(5000);

        //  cy.contains('details[i]')
        // cy.wait(100);

  });
});
});