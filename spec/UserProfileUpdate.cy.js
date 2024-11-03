describe('Innovation Applicatioon', () => {
    it('Innovation Applicatioon', () => {
        cy.visit('http://localhost:5173');
        cy
        .wait(5000);
        cy.contains('button', 'Login / Register')
        .click();
    
    
        cy.origin('https://uat-beprc.oss.net.bd', () => {
     
        cy.get('input[name="username"]').type('asif@yahoo.com');
        cy.get('input[name="password"]').type('12345#Bmail');
        cy
        .get('#kc-login')
        .should('exist')
        .and('be.visible')
        .click();
          });
    
    
        cy
        .wait(5000);
        cy.visit('http://localhost:5173');
        cy
        .wait(1000);
        
          
          cy
          .xpath('/html/body/div/div/div[1]/div/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[2]/p[2]')
          .contains('Applicant') 
          .should('be.visible');
           cy.wait(500);
           cy.xpath('/html/body/div/div/div[1]/div/div[1]/div[1]/div[2]/div[3]/div[1]').click();
       
           cy.wait(5000);
           cy.get('[href="/profile"]')
           .should('exist')
           .and('be.visible')
           .click();
          cy.wait(5000);
         // cy.get('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[1]/div[2]/div/div/label').attachFile('dummy-pdf_2.pdf');
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[1]/div[2]/div/div/label').click();
          cy.get('input[type="file"]').attachFile('download (4).jpg');
          cy.wait(1000);
          cy.get('[name="applicantBean.nid"]').clear().type('9876567890');
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[4]/div[2]/div/div/div').click().clear().type('Jashore');
          cy.contains('Jashore').click();
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[4]/div[3]/div/div/div/input').click();
          cy.contains('Sharsha').click();
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[4]/div[4]/div/div/input').click().clear().type("5678");
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[4]/div[5]/div/div/input').clear().type("Sharsha,Jashore").click();


          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[5]/div[1]/div').click().clear().type('Jashore');
          cy.contains('Jashore').click();
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[5]/div[2]/div/div/div/input').click();
          cy.contains('Sharsha').click();
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[5]/div[3]/div/div/input').click().clear().type("5078");
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[5]/div[4]/div/div/input').clear().type("Sharsha,Jashore").click();


          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[7]/div[1]/div/div/div/input').click().clear().type('Jashore');
          cy.contains('Jashore').click();
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[7]/div[2]/div/div/div/input').click();
          cy.contains('Sharsha').click();
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[7]/div[3]/div/div/input').click().clear().type("5678");
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div[7]/div[4]/div/div/input').clear().type("Sharsha,Jashore").click();
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/button').click();
          cy.wait(10000);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click()
          cy.wait(10000);
          
          
        });
    });