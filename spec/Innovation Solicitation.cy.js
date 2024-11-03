import 'cypress-iframe';
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
        .get('a[href="/solicitation"]')
        .click();
        cy
        .wait(3000);

        cy
        .get('a[href="/solicitation/editSolicitation/0"]')
        .click();
        cy
        .wait(3000);
        cy.contains('Solicited');
        
        //   cy.contains('Solicited').then(($el) => {
        //     if ($el.length > 0) {
        //         cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div/div/div[1]/div[1]/div/div').click();
        //         cy.contains('Unsolicited').click();//Unsolicited
        //     } 
        //   });
    
        
        cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div/div/div[1]/div[2]/div').click();
        cy.wait(500);
        cy.contains('Solar(PV) Power Plant').click();
        cy.wait(1000);

        cy.get('[name="projectDuration"]') 
        .should('exist')      
        .and('be.visible')     
        .click()            
        .type('12');   
  
        cy.get('[name="projectAmount"]') 
        .should('exist')      
        .and('be.visible')     
        .click()             
        .type('100000'); 
  
        cy.get('[name="serialNumber"]') 
        .should('exist')      
        .and('be.visible')     
        .click()             
        .type('5'); 
  
        cy.get('[name="programTitle"]')
        .should('exist')
        .and('be.visible')
        .click()
        .type('12KW Solar (PV) Power Plant');
        cy.wait(500);
        // cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div/div/div[4]/div/div/div/div/div/div/input')
        // .type('xyz@gmail.com')

        
cy.wait(5000);
      

cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div/div/div[5]/div/div/div[1]/div[2]/div[1]/iframe')
  .should('be.visible')
  .then(($iframe) => {
    const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
    
   
    cy.wrap(iframeDocument.body).should('not.be.empty') 
      .then(($body) => {
       
        cy.wrap($body)
          .find('p') 
          .type('6KW Section', { force: true }) 
          .should('contain.text', '6KW Section');
      });
  });


cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div/div/div[6]/div/div/div[1]/div[2]/div[1]/iframe')
  .should('be.visible')
  .then(($iframe) => {
    const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
    
   
    cy.wrap(iframeDocument.body).should('not.be.empty') 
      .then(($body) => {
       
        cy.wrap($body)
          .find('p') 
          .type('6KW Section', { force: true }) 
          .should('contain.text', '6KW Section');
      });
  });

//   cy.wait(3000);
//   cy.contains('Specified Date').click();
//   cy.wait(500);
//   cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div/div/div[7]/div[2]/div/div/input')
//   .click()
//   .type('04/14/2028');

  cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div/div/div[8]/div/div/div/input')
  .click()
  .type('02/14/2024');
        cy.get('input[type="file"]').attachFile('download (1).jpg');
        cy.wait(10000);
        cy.get('input[name="file-upload"]').attachFile('dummy-pdf_2.pdf');

        cy.wait(1000);
        cy.contains('button', 'Save')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(5000);
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
  
    });         
          
    });
