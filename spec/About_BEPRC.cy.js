import 'cypress-iframe';
import login from '../../Page_Object/LOgin_Page2.js';
describe('About BEPRC Creat', () => {
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
      .get('a[href="/fundings"]')
      .click();
      cy
      .wait(3000);
     
      //cy.wait(15000);
      cy.get('a[href="/fundings/add-funding/0"]')
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
      const iframeDocument = $iframe[1].contentDocument || $iframe[1].contentWindow.document;
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


describe.only('About BEPRC Edit', () => {
  beforeEach(() => {
    cy.visit('https://uat-beprc.oss.net.bd');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


   // cy.origin('https://uat-beprc.oss.net.bd', () => {

      // const ln = new login();
      // ln.setUserName('superadmin@beprc.com');
      // ln.setPassword('12345#Bmail');
      // ln.clickSubmit();

    cy.get('input[name="username"]').type('superadmin@beprc.com');
    cy.get('input[name="password"]').type('12345#Bmail');
    cy
    .get('#kc-login')
    .should('exist')
    .and('be.visible')
    .click();
   //  });


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
      .get('a[href="/fundings"]')
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
        .click()             
        .type('title[4]'); 
        cy.get('[name="serialNumber"]')
        .should('exist')
        .and('be.visible')
        .click() 
        .type('3');
       
    })

  it(' TinyMCE editor', () => {
    cy.wait(5000);
    cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/form/div[3]/div/div/div[1]/div[2]/div[1]/iframe')
    .then(($iframe) => {
      const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
      cy.wrap(iframeDocument)
      .find('body')  
      .clear()       
      .type('Updated: In the ever-evolving landscape of energy and power, a visionary organization stands at the forefront of progress. The Bangladesh Energy and Power Research Council (BEPRC) is entrusted with a vital mission: to catalyze research and innovation across the spectrum of Innovation, Incubation, and Entrepreneurship stages within the energy and power sector. With a steadfast commitment to excellence, BEPRC is also mandated to develop and upgrade research infrastructure in government-approved research organizations. To fulfill these responsibilities, BEPRC has developed comprehensive guidelines for proposal submission, evaluation, monitoring, reporting, project management, and lab management. Furthermore, to ensure operational efficiency and transparency, BEPRC has embarked on the development of an integrated portal that encompasses all these components.') 
      .should('contain.text', 'Updated: In the ever-evolving landscape of energy and power, a visionary organization stands at the forefront of progress. The Bangladesh Energy and Power Research Council (BEPRC) is entrusted with a vital mission: to catalyze research and innovation across the spectrum of Innovation, Incubation, and Entrepreneurship stages within the energy and power sector. With a steadfast commitment to excellence, BEPRC is also mandated to develop and upgrade research infrastructure in government-approved research organizations. To fulfill these responsibilities, BEPRC has developed comprehensive guidelines for proposal submission, evaluation, monitoring, reporting, project management, and lab management. Furthermore, to ensure operational efficiency and transparency, BEPRC has embarked on the development of an integrated portal that encompasses all these components.');

                cy.wait(500);
        cy.get('input[type="file"]').attachFile('download (2).jpg');
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

         cy.contains('details[5]')
        cy.wait(100);

  });
});
});