

describe('Slider Image Creat', () => {
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
          cy
          .get('a[href="/"]')
          .click();
          cy
          .wait(3000);
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/button/p').click();
        cy.wait(1500);
    
        cy.get('[type="number"]')
          .should('exist')
          .and('be.visible')
          .click()
          .type('1');
    
           cy.get('#status-select').click();
          cy.get('[data-value="active"]').click();
          //cy.get('[data-value="inactive"]').click();
         cy.wait(500);
         const file = ['download (1).jpg', 'download (2).jpg', 'download (3).jpg','download (4).jpg','download.jpg'];
        cy.get('input[type="file"]').attachFile(file[0]); 
        cy.wait(15000);
        cy.contains('button', 'Add')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(500);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click()
       // cy.get('img[src="http://192.168.30.250:23931/public/download-image-v2/7bed585b-c7ab-408c-b973-5e3246453854"]').should('be.visible');

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
describe.only('Slider Image Edit', () => {
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
        cy
        .get('a[href="/"]')
        .click();
        cy
        .wait(3000);
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[2]/div/table/tbody/tr[1]/td[4]/button').click();
        cy.get('[type="number"]')
        .should('exist')
        .and('be.visible')
        .click()
        .clear()
        .type('2');
        cy.get('#status-select').click();
          cy.get('[data-value="active"]').click();
          //cy.get('[data-value="inactive"]').click();
         cy.wait(500);
         const file = ['download (1).jpg', 'download (2).jpg', 'download (3).jpg','download (4).jpg','download.jpg'];
        cy.get('input[type="file"]').attachFile(file[2]); 
        cy.wait(15000);
        cy.contains('button', 'Update')
        .should('exist')
        .and('be.visible')
        .click();
        cy.wait(500);
        cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
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
