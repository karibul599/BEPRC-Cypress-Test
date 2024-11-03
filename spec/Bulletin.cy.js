describe('Bulletin Creat ', () => {
    it('Super Admin Login', () => {
     
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
      .get('a[href="/news"]')
      .click();
     
      cy.wait(15000);
      cy.get('a[href="/news/add-news/0"]')
      .click();
      cy.wait(1500);

      cy.get('[name="title"]') 
        .should('exist')      
        .and('be.visible')     
        .click()             
        .type('title[i]'); 

        cy.get('[name="details"]')
        .should('exist')
        .and('be.visible')
        .click() 
        .type('details[i]');

        cy.wait(5000);
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/form/div[3]/div[1]/div/div/input')
        .click()
        .type('04/14/2021');
        cy.wait(500);
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/form/div[3]/div[2]/div/div/input')
        .click()
        .type('04/14/2023');
        const file = ['download (1).jpg', 'download (2).jpg', 'download (3).jpg','download (4).jpg','download.jpg'];
        cy.wait(500);
        cy.get('input[type="file"]').attachFile(file[0]);
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

    })
})
describe.only('Bulletin Edit ', () => {
  it('Super Admin Login', () => {
   
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
    .get('a[href="/news"]')
    .click();
   
    cy.wait(15000);
    cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/table/tbody/tr[1]/td[3]/button')
    .click();
    cy.wait(1500);

    cy.get('[name="title"]') 
      .should('exist')      
      .and('be.visible')     
      .click().clear()             
      .type('title[5]'); 

      cy.get('[name="details"]')
      .should('exist')
      .and('be.visible')
      .click().clear() 
      .type('Update details[5]');

      cy.wait(5000);
      cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/form/div[3]/div[1]/div/div/input')
      .click()
      .type('07/17/2011');
      cy.wait(500);
      cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/form/div[3]/div[2]/div/div/input')
      .click()
      .type('03/13/2013');
      const file = ['download (1).jpg', 'download (2).jpg', 'download (3).jpg','download (4).jpg','download.jpg'];

      cy.wait(500);
      cy.get('input[type="file"]').attachFile(file[2]);
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

      // cy.contains('title[5]')
      //cy.wait(100);

  })
})