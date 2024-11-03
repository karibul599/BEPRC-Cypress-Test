
describe.only('Innovation Solicitation', () => {
    it('Innovation Solicitation', () => {
      cy.visit('http://localhost:5173');
      cy
      .wait(3000);
      cy.contains('button', 'Login / Register')
      .click();
  
  
      cy.origin('https://uat-beprc.oss.net.bd', () => {
   
      cy.get('input[name="username"]').type('innovationAdmin@beprc.com');
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
        .contains('Innovation Admin') 
        .should('be.visible');
    
        cy
        .get('a[href="/researchArea"]')
        .click();
        cy
        .wait(3000);
       
        cy.contains('button', 'Add Research Title')
        .should('exist')
        .and('be.visible')
        .click();
        cy
        .wait(3000);
        cy.get('[name="title"]') 
        .should('exist')      
        .and('be.visible')     
        .click()             
        .type('Solar(PV) Power Plant'); 

        cy.get('[name="bdgForHnrPrc"]') 
        .should('exist')      
        .and('be.visible')     
        .click()             
        .type('15'); 

        cy.xpath('/html/body/div[2]/form/div/div[1]/div[3]/div/div/div/label[1]/span[2]').click();//Active
        //cy.xpath('/html/body/div[2]/form/div/div[1]/div[3]/div/div/div/label[2]/span[2]').click();///Inactive
        
        cy.contains('button', 'Save')
        .should('exist')
        .and('be.visible')
        .click();
        cy.wait(500);
        cy.xpath('/html/body/div/div/div[2]/div/div/button').click()

                  
        cy.get('.fill-gray-100').click();
        cy.wait(1000);
        cy.wait(5000);
  
        cy.contains('button', 'Log Out')
         .should('exist')
         .and('be.visible')
         .click();
        cy.wait(1000);

    });
});
