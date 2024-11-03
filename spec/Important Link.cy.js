describe('Important links Creat', () => {
  it('from', ()=>{
      cy.visit('http://localhost:5173');
      cy.wait(3000);
  
      cy.contains('button', 'Login / Register').click();
  
      cy.origin('https://uat-beprc.oss.net.bd', () => {
        cy.get('input[name="username"]').type('superadmin@beprc.com');
        cy.get('input[name="password"]').type('12345#Bmail');
        cy.get('#kc-login')
          .should('exist')
          .and('be.visible')
          .click();
      });
  
      cy.wait(5000);
      cy.visit('http://localhost:5173/');
      cy.wait(1000);
  
      cy.get('.text-sm.text-gray-200')
        .contains('Super Admin')
        .should('be.visible');
      cy.get('a[href="/important-links"]').click();
      cy.wait(3000);
      cy.get('a[href="/important-links/add-important-link/0"]').click();
      cy.wait(1500);
  
      cy.get('[name="title"]')
        .should('exist')
        .and('be.visible')
        .click()
        .type('title[i]');
  
      cy.get('[type="number"]')
        .should('exist')
        .and('be.visible')
        .click()
        .type('1');
  
      cy.get('[name="url"]')
        .should('exist')
        .and('be.visible')
        .click()
        .type('https://powerdivision.gov.bd/');
  
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
         cy.wait(500);
    });
  });
  describe.only('Important links Edit', () => {
    it('from', ()=>{
        cy.visit('http://localhost:5173');
        cy.wait(3000);
    
        cy.contains('button', 'Login / Register').click();
    
        cy.origin('https://uat-beprc.oss.net.bd', () => {
          cy.get('input[name="username"]').type('superadmin@beprc.com');
          cy.get('input[name="password"]').type('12345#Bmail');
          cy.get('#kc-login')
            .should('exist')
            .and('be.visible')
            .click();
        });
    
        cy.wait(5000);
        cy.visit('http://localhost:5173/');
        cy.wait(1000);
    
        cy.get('.text-sm.text-gray-200')
          .contains('Super Admin')
          .should('be.visible');
        cy.get('a[href="/important-links"]').click();
        cy.wait(3000);
        cy.contains('button', 'Edit')
        .should('exist')
        .and('be.visible')
        .click();
        cy.wait(1500);
    
        cy.get('[name="title"]')
          .should('exist')
          .and('be.visible')
          .click().clear()
          .type('title[5]');
    
        cy.get('[type="number"]')
          .should('exist')
          .and('be.visible')
          .click().clear()
          .type('3');
    
        cy.get('[name="url"]')
          .should('exist')
          .and('be.visible')
          .click().clear()
          .type('https://powerdivision.gov.us/');
    
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
           cy.wait(500);
      });
    });
    