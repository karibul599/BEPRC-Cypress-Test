import 'cypress-iframe';
import 'cypress-file-upload';
describe('Add Research Area Title', () => {
  it('Add Research Area Title', () => {
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
      .wait(5000);
     
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

                
      // cy.get('.fill-gray-100').click();
      // cy.wait(1000);
      // cy.wait(5000);

      // cy.contains('button', 'Log Out')
      //  .should('exist')
      //  .and('be.visible')
      //  .click();
      // cy.wait(1000);

  });
});
describe('Add Committee Member', () => {
  it('Add Committee Member', () => {
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
    .get('a[href="/screening/INNOVATION_SCREENING_COMMITTEE/d78f7c60-bf82-4a02-9057-93e93bfb1c44"]')
    .click();
    cy.wait(500);
    cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[1]/div/div/button').click();
    cy.wait(5000);
    cy.xpath('/html/body/div[2]/div[3]/div[2]/div[2]/div[1]/div/div/div/input').click();
    cy.contains('INNOVATION_SCREENING_COMMITTEE_1 (innovationScreeningCommittee1@beprc.com)').click();
    cy.xpath('/html/body/div[2]/div[3]/div[2]/div[2]/div[2]/div/div/div/input').click();
    cy.contains('Member Secretary').click();
    cy.xpath('/html/body/div[2]/div[3]/div[3]/button[2]').click();
    cy.wait(1000);
    cy.xpath('/html/body/div/div/div[2]/div/div/button').click()
    cy
    .wait(5000);

    cy
    .get('a[href="/negotiation/INNOVATION_NEGOTIATION_COMMITTEE/795a2fb7-4d9e-4e7a-be68-cc211d8ead28"]')
    .click();
    cy
    .wait(500);
    cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[1]/div/button').click();
    cy.wait(5000);
    cy.xpath('/html/body/div[2]/div[3]/div[1]/div[2]/div[1]/div/div/div/input').click();
    cy.contains('INNOVATION_NEGOTIATION_COMMITTEE_1 (innovationNegotiationCommittee1@beprc.com)').click();
    cy.xpath('/html/body/div[2]/div[3]/div[1]/div[2]/div[2]/div/div/div/input').click();
    cy.contains('Member Secretary').click();
    cy.xpath('/html/body/div[2]/div[3]/div[3]/button[2]').click();
    cy.wait(1000);
    cy.xpath('/html/body/div/div/div[2]/div/div/button').click()
    cy
    .wait(5000);

    cy
    .get('a[href="/reviewer/INNOVATION"]')
    .click();
    cy
    .wait(500);
     cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[1]/div/div/button').click();
    cy.wait(5000);
    cy.xpath('/html/body/div[2]/div[3]/div[1]/div[2]/div/div/div/input').click();
    cy.contains('INNOVATION_REVIEWER_1 (innovationReviewer1@beprc.com)').click();
    cy.xpath('/html/body/div[2]/div[3]/div[1]/div[2]/div/div/div/input').click();
    cy.contains('INNOVATION_REVIEWER_2 (innovationReviewer2@beprc.com)').click();
    cy.xpath('/html/body/div[2]/div[3]/div[1]/div[2]/div/div/div/input').click();
    cy.contains('INNOVATION_REVIEWER_3 (innovationReviewer3@beprc.com)').click();
    cy.xpath('/html/body/div[2]/div[3]/div[1]/div[3]/div/div/div/div/input').click();
    cy.contains('Solar(PV) Power Plant').click();
    cy.xpath('/html/body/div[2]/div[3]/div[2]/button[2]').click();
    cy.wait(1000);
    cy.xpath('/html/body/div/div/div[2]/div/div/button').click()
    cy.wait(1000);

    
    

    });
  });

describe('Innovation Solicitation', () => {
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
         .wait(5000);
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
          //  cy.wait(500);
          //  cy.get('.fill-gray-100').click();
       
          //  cy.wait(5000);
          //  cy.contains('button', 'Log Out')
          //  .should('exist')
          //  .and('be.visible')
          //  .click();
          // cy.wait(5000);
   
     });         
           
     });
describe('Innovation Applicatioon', () => {
it('Innovation Applicatioon', () => {
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
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
     
  
      cy
      .get('a[href="/14a5701a-f3cb-453e-a227-dcf66f95e2cf"]')
      .click();
      cy
      .wait(3000);

      cy.contains('12KW Solar (PV) Power Plant').scrollIntoView();
      cy.wait(500);
      
      cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[2]/div/div/div[2]/button[2]',{ timeout: 20000 }).should('exist')
      .and('be.visible')
      .click();
      cy
      .wait(3000);
      cy.contains('I have read the guideline and agree to comply with all the terms and conditions').click();

      cy.contains('button', 'Next')
      .should('exist')
      .and('be.visible')
      .click();
      cy.wait(500);

      cy.contains('Individual Proposal').click();
      cy.wait(500);

      cy.contains('button', 'Next')
      .should('exist')
      .and('be.visible')
      .click();
      cy.wait(5000);

///////////////////////////////////////////////////////////Start of Cover Page
      cy.get('[name="proposedTitle"]') 
        .should('exist')      
        .and('be.visible')     
        .click()            
        .type('Power Plant1'); 


        ///////////////////////////////////////////////////Start of Add member
        cy.contains('button', 'Add Member')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(5000);
          cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[1]/div[1]/div/label[1]/span[2]').click();
          cy.get('input[type="file"]').attachFile('download (4).jpg'); 
          cy.wait(5000);

          cy.get('[name="memberInfo.memberName"]') 
           .should('exist')      
           .and('be.visible')     
           .click()            
           .type('Nahid Hossen');
           
           cy.get('[name="memberInfo.designation"]') 
           .should('exist')      
           .and('be.visible')     
           .click()            
           .type('CEO');

           cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[2]/div[3]/div/div/div') 
           .should('exist')      
           .and('be.visible')    
           .click()            
           .xpath('/html/body/div[3]/div[3]/ul/li[1]')
           .click();

          //  cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[2]/div[3]/div/div/div') 
          //  .should('exist')      
          //  .and('be.visible')    ///////
          //  .click()            
          //  .xpath('/html/body/div[3]/div[3]/ul/li[2]')
          //  .click();

          cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[2]/div[4]/div/div/input')
          .click()
          .type('11/14/1964');

           cy.get('[name="memberInfo.nid"]') 
           .should('exist')      
           .and('be.visible')     
           .click()            
           .type('1234554321');

           cy.get('[name="memberInfo.emailAddress"]') 
           .should('exist')      
           .and('be.visible')     
           .click()            
           .type('xyz@gmail.com');

           cy.get('[name="memberInfo.phoneNumber"]') 
           .should('exist')      
           .and('be.visible')     
           .click()            
           .type('01234567889');

           cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[3]/div/div/label/span[2]').click();

        cy.get('[name="memberInfo.organizationName"]') 
        .should('exist')      
        .and('be.visible')     
        .click()            
        .type('Green Energy'); 

        cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[4]/div[2]/div/div/div/input') 
        .should('exist')      
        .and('be.visible')     
        .click();
        cy.wait(1000);           
          cy.contains('Dhaka').click();             
        

        cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[4]/div[3]/div/div/div/input') 
        .should('exist')      
        .and('be.visible')     
        .click();
        cy.wait(1000);           
        cy.contains('Adabor').click();              
       

          cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[4]/div[4]/div/div/input')  
          .should('exist')
          .and('be.visible')
          .click()                       
          .type('1234');

          cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[4]/div[5]/div/div/input')  
          .should('exist')
          .and('be.visible')
          .click()                       
          .type('Adabor,Dhaka');


          cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[5]/div[1]/div/div/div/input') 
          .should('exist')      
          .and('be.visible')     
          .click(); 
          cy.wait(1000);           
          cy.contains('Barisal').click();
  
          cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[5]/div[2]/div/div/div/input') 
          .should('exist')      
          .and('be.visible')     
          .click();
          cy.wait(1000);           
          cy.contains('Airport').click();            
         
            cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[5]/div[3]/div/div/input')  
            .should('exist')
            .and('be.visible')
            .click()                       
            .type('1234');
  
            cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[5]/div[4]/div/div/input')  
            .should('exist')
            .and('be.visible')
            .click()                       
            .type('Airport,Barisal');


            cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[7]/div[1]/div/div/div/input') 
          .should('exist')      
          .and('be.visible')     
          .click();
          cy.wait(1000);           
          cy.contains('Feni').click();            
           
  
          cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[7]/div[2]/div/div/div/input') 
          .should('exist')      
          .and('be.visible')     
          .click();
          cy.wait(1000);           
          cy.contains('Fulgazi').click();            
          
  
            cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[7]/div[3]/div/div/input')  
            .should('exist')
            .and('be.visible')
            .click()                       
            .type('1234');
  
            cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[2]/div[7]/div[4]/div/div/input')  
            .should('exist')
            .and('be.visible')
            .click()                       
            .type('Fulgazi,Feni');
            cy.wait(500);
            cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div/form/button')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(10000);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click();

          //////////////////////////////////////////////////////////End of Add Member

       

       
        cy.get('[name="totalDuration"]') 
        .should('exist')      
        .and('be.visible')     
        .click()            
        .type('12'); 

        cy.get('[name="totalBudget"]') 
        .should('exist')      
        .and('be.visible')     
        .click()            
        .type('100000');

        cy.get('[name="awardeeOrganizationInfoBean.identificationNumber"]') 
        .should('exist')      
        .and('be.visible')     
        .click()            
        .type('1234512345');

        cy.get('[name="awardeeOrganizationInfoBean.taxPaperNumber"]') 
        .should('exist')      
        .and('be.visible')     
        .click()            
        .type('100034678843');

        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[5]/div[2]/div[1]/div/div/div/input')  
          .should('exist')
          .and('be.visible')
          .click()                       
          .type('Khulna');
          cy.contains('Khulna').click();  

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[5]/div[2]/div[2]/div/div/div/input')  
          .should('exist')
          .and('be.visible')
          .click()
          .type('Jashore');
        cy.wait(1000);           
        cy.contains('Jashore').click();                        
        

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[5]/div[2]/div[3]/div/div/div/input')  
          .should('exist')
          .and('be.visible')
          .click();
        cy.wait(1000);           
        cy.contains('Sharsha').click();                       
       

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[5]/div[2]/div[4]/div/div/input')  
          .should('exist')
          .and('be.visible')
          .click()                       
          .type('2345');

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[5]/div[2]/div[5]/div/div/input')  
          .should('exist')
          .and('be.visible')
          .click()                       
          .type('Sharsha,Jashore');


        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[6]/div[2]/button')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(15000);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
          
          ///////////////////////////////////////////////////////End of Cover Page
          //////////////////////////////////////////////////////// Start of Research Background page

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(500);
          cy.get('[type="file"]').attachFile('dummy-pdf_2.pdf');
          cy.wait(2000);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[4]/div/button[2]')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(10000);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click();

          ///////////////////////////////////////////////////////////End Research Background 
          ///////////////////////////////////////////////////////////Start of Research Summary With Key Words

          cy.xpath('//*[@id="root"]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(500);
          cy.get('[type="file"]').attachFile('dummy-pdf_2.pdf');
          cy.wait(2000);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[4]/div/button[2]')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(10000);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click();

          //////////////////////////////////////////////////////////////End of Research Summary With Key Words
          /////////////////////////////////////////////////////////////Start of Literature Review

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(500);
          cy.get('[type="file"]').attachFile('dummy-pdf_2.pdf');
          cy.wait(2000);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[4]/div/button[2]')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(10000);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
          /////////////////////////////////////////////////////////////End of Literature Review
          /////////////////////////////////////////////////////////////Start of Research Description
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[1]/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(500);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[1]/div/div/div[3]/div/label/input').attachFile('dummy-pdf_2.pdf');
          cy.wait(2000);
//
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[2]/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(500);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[2]/div/div/div[3]/div/label/input').attachFile('dummy-pdf_2.pdf');
          cy.wait(2000);
//
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[3]/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(500);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[3]/div/div/div[3]/div/label/input').attachFile('dummy-pdf_2.pdf');
          cy.wait(2000);

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(500);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div/div/div[3]/div/label/input').attachFile('dummy-pdf_2.pdf');
          cy.wait(2000);

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[5]/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(500);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[5]/div/div/div[3]/div/label/input').attachFile('dummy-pdf_2.pdf');
          cy.wait(2000);

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[6]/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(500);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[6]/div/div/div[3]/div/label/input').attachFile('dummy-pdf_2.pdf');
          cy.wait(2000);

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[7]/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(500);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[7]/div/div/div[3]/div/label/input').attachFile('dummy-pdf_2.pdf');
          cy.wait(2000);

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[8]/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(500);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[8]/div/div/div[3]/div/label/input').attachFile('dummy-pdf_2.pdf');
          cy.wait(2000);

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[9]/div/button[2]')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(25000);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click();

           /////////////////////////////////////////////////////////////End of Research Description
            /////////////////////////////////////////////////////////////Start of Statement of Activities and Work Plan
            cy.contains('button', 'Add')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(5000);

          cy.get('[name="milestoneBean.name"]') 
        .should('exist')      
        .and('be.visible')     
        .click()            
        .type('Milestone1');

        cy.get('[name="milestoneBean.weight"]') 
        .should('exist')      
        .and('be.visible')     
        .click()            
        .type('100');

        cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[1]/div[3]/div/div')  
          .should('exist')
          .and('be.visible')
          .click();
  
        cy.wait(1000);           
        cy.xpath('/html/body/div[3]/div[3]/ul/li[1]').click();

        cy.xpath('/html/body/div[2]/div[3]/div/div[1]/div/div[1]/div[4]/div/div/div')  
          .should('exist')
          .and('be.visible')
          .click();
    
        cy.wait(1000);           
        cy.xpath('/html/body/div[3]/div[3]/ul/li[11]').click();
        
        // cy.get('[type="number"]') 
        // .should('exist')      
        // .and('be.visible')     
        // .click()            
        // .type('12');

        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div/button[2]').click();
        cy.wait(10000);
        cy.xpath('/html/body/div/div/div[2]/div/div/button').click();

        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[2]/div/div/div[1]/div/label[2]/span[1]/input')
          .click();
          cy.wait(5000);
          cy.get('[type="file"]').attachFile('dummy-pdf_2.pdf');

          cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[3]/div/div/div[1]/div/label[1]/span[1]').click();
          cy.wait(5000);
          cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[3]/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/iframe')
            .should('be.visible')
            .then(($iframe) => {
           const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
    
   
          cy.wrap(iframeDocument.body).should('not.be.empty') 
            .then(($body) => {
       
          cy.wrap($body)
            .find('p') 
            .type('Dissemination of Results', { force: true }) 
            .should('contain.text', 'Dissemination of Results');
      });
  });
        
  cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div[1]/div/div/div[1]/div/label[1]/span[1]').click();
  cy.wait(5000);
  cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div[1]/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/iframe')
    .should('be.visible')
    .then(($iframe) => {
   const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;


  cy.wrap(iframeDocument.body).should('not.be.empty') 
    .then(($body) => {

  cy.wrap($body)
    .find('p') 
    .type('Management Plan and Qualifications', { force: true }) 
    .should('contain.text', 'Management Plan and Qualifications');
});
});

cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div[2]/div/div/div[1]/div/label[1]/span[1]').click();
  cy.wait(5000);
  cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/iframe')
    .should('be.visible')
    .then(($iframe) => {
   const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;


  cy.wrap(iframeDocument.body).should('not.be.empty') 
    .then(($body) => {

  cy.wrap($body)
    .find('p') 
    .type('Tasking Chart', { force: true }) 
    .should('contain.text', 'Tasking Chart');
});
});

cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div[3]/div/div/div[1]/div/label[1]/span[1]').click();
  cy.wait(5000);
  cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div[3]/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/iframe')
    .should('be.visible')
    .then(($iframe) => {
   const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;


  cy.wrap(iframeDocument.body).should('not.be.empty') 
    .then(($body) => {

  cy.wrap($body)
    .find('p') 
    .type('Resumes', { force: true }) 
    .should('contain.text', 'Resumes');
});
});

cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div[4]/div/div/div[1]/div/label[1]/span[1]').click();
  cy.wait(5000);
  cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div[4]/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/iframe')
    .should('be.visible')
    .then(($iframe) => {
   const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;


  cy.wrap(iframeDocument.body).should('not.be.empty') 
    .then(($body) => {

  cy.wrap($body)
    .find('p') 
    .type('Completed & Ongoing Projects', { force: true }) 
    .should('contain.text', 'Completed & Ongoing Projects');
});
});

cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[5]/div/div/div[1]/div/label[1]/span[1]').click();
  cy.wait(5000);
  cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[5]/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/iframe')
    .should('be.visible')
    .then(($iframe) => {
   const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;


  cy.wrap(iframeDocument.body).should('not.be.empty') 
    .then(($body) => {

  cy.wrap($body)
    .find('p') 
    .type('Letters of Commitment or Support', { force: true }) 
    .should('contain.text', 'Letters of Commitment or Support');
});
});

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[6]/div/button[2]')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(25000);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click();    
           /////////////////////////////////////////////////////////////End of Statement of Activities and Work Plan
            /////////////////////////////////////////////////////////////Start of Budget and Budget Justification
            
  cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[1]/div/div[3]/div/div/div[1]/div[2]/div[1]/iframe')
    .should('be.visible')
    .then(($iframe) => {
   const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;


  cy.wrap(iframeDocument.body).should('not.be.empty') 
    .then(($body) => {

  cy.wrap($body)
    .find('p') 
    .type('Details', { force: true }) 
    .should('contain.text', 'Details');
});
});

cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[1]/td[2]/div/div/div').click();
cy.wait(500);
cy.contains('Full Time').click();
cy.get('[name="innHonorariumDetails.data.rows[0].amount[0].manMonth"]').click().type('6');
cy.get('[name="innHonorariumDetails.data.rows[0].amount[0].yearlyBudget"]').click().type('7500');

cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[2]/div/div[3]/div/table/tbody/tr[2]/td[2]/div/div/div').click();
cy.wait(500);
cy.xpath('/html/body/div[6]/div[3]/ul/li[1]').click();
cy.get('[name="innHonorariumDetails.data.rows[1].amount[0].manMonth"]').click().type('6');
cy.get('[name="innHonorariumDetails.data.rows[1].amount[0].yearlyBudget"]').click().type('7500');

cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[2]/div/div[4]/div/div/div[1]/div[2]/div[1]/iframe')
    .should('be.visible')
    .then(($iframe) => {
   const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;


  cy.wrap(iframeDocument.body).should('not.be.empty') 
    .then(($body) => {

  cy.wrap($body)
    .find('p') 
    .type('Details', { force: true }) 
    .should('contain.text', 'Details');
});
});

cy.get('[name="innEquipmentProductDetails.data[0].rows[0].name"]').click().type('Panal(PV)');
cy.get('[name="innEquipmentProductDetails.data[0].rows[0].estimate_cost"]').click().type('70000');

cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div/div[3]/div/table/tbody/tr[1]/td[2]/div/div/div').click();
cy.wait(500);
cy.contains('Foreign').click();
cy.get('[name="innTravelDetails.data.rows[0].amount[0]"]').click().type('2500');

cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div/div[3]/div/table/tbody/tr[2]/td[2]/div/div/div').click();
cy.wait(500);
cy.xpath('/html/body/div[6]/div[3]/ul/li[2]').click();
cy.get('[name="innTravelDetails.data.rows[1].amount[0]"]').click().type('2500');

cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[4]/div/div[4]/div/div/div[1]/div[2]/div[1]/iframe')
    .should('be.visible')
    .then(($iframe) => {
   const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;


  cy.wrap(iframeDocument.body).should('not.be.empty') 
    .then(($body) => {

  cy.wrap($body)
    .find('p') 
    .type('Details', { force: true }) 
    .should('contain.text', 'Details');
});
});

cy.get('[name="innOtherDirectDetails.contingencies.rows[0].amount[0]"]').click().type('2000');
cy.get('[name="innOtherDirectDetails.contingencies.rows[1].amount[0]"]').click().type('2000');


cy.get('[name="innOtherDirectDetails.other_direct_costs.rows[0].amount[0]"]').click().type('1000');
cy.get('[name="innOtherDirectDetails.other_direct_costs.rows[1].amount[0]"]').click().type('1000');
cy.get('[name="innOtherDirectDetails.other_direct_costs.rows[2].amount[0]"]').click().type('1000');
cy.get('[name="innOtherDirectDetails.other_direct_costs.rows[3].amount[0]"]').click().type('1000');
cy.get('[name="innOtherDirectDetails.other_direct_costs.rows[4].amount[0]"]').click().type('1000');
cy.get('[name="innOtherDirectDetails.other_direct_costs.rows[5].amount[0]"]').click().type('1000');


cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[5]/div[4]/div/div/div[1]/div[2]/div[1]/iframe')
    .should('be.visible')
    .then(($iframe) => {
   const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;


  cy.wrap(iframeDocument.body).should('not.be.empty') 
    .then(($body) => {

  cy.wrap($body)
    .find('p') 
    .type('Details', { force: true }) 
    .should('contain.text', 'Details');
});
});
cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[6]/div[1]/div/div[1]/div/label/input').attachFile('dummy-pdf_2.pdf');
cy.wait(2000);
cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[7]/div/button[2]')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(25000);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
        
   /////////////////////////////////////////////////////////////End of Budget and Budget Justification
  /////////////////////////////////////////////////////////////Start of List of Facilities Equipment and other Resources



  cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[1]/div/label[1]/span[1]').click();
  cy.wait(5000);
  cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/iframe')
    .should('be.visible')
    .then(($iframe) => {
   const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;


  cy.wrap(iframeDocument.body).should('not.be.empty') 
    .then(($body) => {

  cy.wrap($body)
    .find('p') 
    .type('Document Upload Type', { force: true }) 
    .should('contain.text', 'Document Upload Type');
});
});
cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[4]/div/button[2]')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(10000);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
  /////////////////////////////////////////////////////////////End of List of Facilities Equipment and other Resources 
   /////////////////////////////////////////////////////////////Start of Procurement Plan
   cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[1]/div/label[1]/span[1]').click();
   cy.wait(5000);
   cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/iframe')
     .should('be.visible')
     .then(($iframe) => {
    const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
 
 
   cy.wrap(iframeDocument.body).should('not.be.empty') 
     .then(($body) => {
 
   cy.wrap($body)
     .find('p') 
     .type('Document Upload Type', { force: true }) 
     .should('contain.text', 'Document Upload Type');
 });
 });
 cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[4]/div/button[2]')
           .should('exist')
           .and('be.visible')
           .click();
           cy.wait(10000);
           cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
/////////////////////////////////////////////////////////////End of Procurement Plan

/////////////////////////////////////////////////////////////Start of Reference Cited
cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[1]/div/label[1]/span[1]').click();
   cy.wait(5000);
   cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/iframe')
     .should('be.visible')
     .then(($iframe) => {
    const iframeDocument = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
 
 
   cy.wrap(iframeDocument.body).should('not.be.empty') 
     .then(($body) => {
 
   cy.wrap($body)
     .find('p') 
     .type('Document Upload Type', { force: true }) 
     .should('contain.text', 'Document Upload Type');
 });
 });
 cy.xpath('/html/body/div[1]/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[4]/div/button[2]')
           .should('exist')
           .and('be.visible')
           .click();
           cy.wait(10000);
           cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
/////////////////////////////////////////////////////////////End of Reference Cited

/////////////////////////////////////////////////////////////Start of Attachment & Declaration

cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[1]/div[1]/div/table/tbody/tr[1]/td[2]/div/div[1]/div/label/input').attachFile('dummy-pdf_2.pdf');
cy.wait(3000);
cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[1]/div[2]/div/table/tbody/tr[1]/td[3]/div/div/div[1]/div/label/input').attachFile('dummy-pdf_2.pdf');
cy.wait(3000);
cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div[2]/div[2]/button[2]')
           .should('exist')
           .and('be.visible')
           .click();
           cy.wait(15000);
           cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
/////////////////////////////////////////////////////////////End of Attachment & Declaration
cy.wait(40000);
 cy.xpath('/html/body/div[2]/div[3]/div/h2/div/button[1]').click();
 cy.wait(5000);

    });
});
describe('Innovation Admin to Screening Committee ', () => {
    it('Innovation Admin to Screening Committe', () => {
    
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
        .get('a[href="/proposal"]')
        .click();
        cy
        .wait(5000);
        cy.reload();
        cy
        .wait(5000);
        cy.contains('Submitted');
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/table/tbody/tr/td[8]/button').click();
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[1]/div/div/div').click();
        cy.wait(200);
        cy.contains('Send To Innovation Screening Committee').click();
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[2]/textarea')
        .type('Send To Innovation Screening Committee');
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[2]/div/div/div[1]/div/label/input')
        .attachFile('dummy-pdf_2.pdf');
        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
        cy.wait(3000);
        // cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
        // cy.get('.fill-gray-100').click();
        //   cy.wait(1000);
        //   cy.wait(5000);
    
        //   cy.contains('button', 'Log Out')
        //    .should('exist')
        //    .and('be.visible')
        //    .click();
        //   cy.wait(10000);
        });
    });
describe('Innovation Screening Committee Innovation Admin ', () => {
        it('Innovation Screening Committee Innovation Admin', () => {
         
          
          cy.visit('http://localhost:5173');
          cy
          .wait(3000);
          cy.contains('button', 'Login / Register')
          .click();
      
      
          cy.origin('https://uat-beprc.oss.net.bd', () => {
       
          cy.get('input[name="username"]').type('innovationScreeningCommittee1@beprc.com');
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
          .get('.text-gray-200')
          .then($element => {
            if ($element.text()
              .includes('Innovation Negotiation Committee')) {
              cy.contains('Innovation Screening Committee')
              .should('exist')
              .and('be.visible');
            }else{
              cy
              .get('.text-gray-200')
              .click();  
              cy
              .wait(1000);
              cy
              .contains('Innovation Screening Committee')
              .should('exist').and('be.visible')
              .click();
            }
          });
          
            // cy
            // .get('a[href="/dashboard"]')
            // .click();
            // cy
            //   .wait(1000);
      
              cy
            .get('a[href="/proposal"]')
            .click();
            cy
              .wait(1000);
            cy.reload();
            cy.contains('Waiting For Innovation Screening Committee Review');
            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/table/tbody/tr/td[8]/button').click();
            cy.wait(2000);
            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/form/table/thead/tr/th[3]/label/span[1]/input').click();
            cy.wait(300);
            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/form/div/div/button').click();
    
          cy
          .wait(500);
          cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
    
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/div[2]/div[1]/div[1]/div/div/div').click();
          cy.contains('Send To Innovation Admin').click();
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/div[2]/div[1]/div[2]/textarea').type('Pass');
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/div[2]/div[2]/div[1]/div/div[1]/div/label/input')
          .attachFile('dummy-pdf_2.pdf');
          cy.wait(1000);
          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div/div[3]/form/button').click();
    
          // cy.get('.fill-gray-100').click();
          // cy.wait(1000);
          // cy.wait(5000);
    
          // cy.contains('button', 'Log Out')
          //  .should('exist')
          //  .and('be.visible')
          //  .click();
          // cy.wait(10000);
        
          
          
        });
      });
describe('Innovation Admin to Reviewer ', () => {
        it('Innovation Admin to Reviewer', () => {
        
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
            .get('a[href="/proposal"]')
            .click();
            cy.reload();
            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[1]/div[2]/div/div/div/button[2]').click();
            cy
            .wait(2000);
            cy.contains('Reviewed by Innovation Screening Committee');
            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/table/tbody/tr/td[8]/button').click();
            cy.wait(500);
            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/div[1]/div/div/div').click();
            cy.contains('Send To Innovation Reviewer').click();
            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/div[2]/div/div/div').click();
            cy.xpath('/html/body/div[2]/div[3]/ul/li[1]').click();

            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/div[3]/div/div/div/input').click();
            cy.contains('INNOVATION_REVIEWER_1 (innovationReviewer1@beprc.com)').click();
            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/div[3]/div/div/div/input').click();
            cy.contains('INNOVATION_REVIEWER_2 (innovationReviewer2@beprc.com)').click();
            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/div[3]/div/div/div/input').click();
            cy.contains('INNOVATION_REVIEWER_3 (innovationReviewer3@beprc.com)').click();

            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[4]/div[1]/textarea').type('Reviewer')
            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[4]/div[2]/div/div/div[1]/div/label/input')
            .attachFile('dummy-pdf_2.pdf');
            cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[5]/button[2]').click();
            

            cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
            // cy.get('.fill-gray-100').click();
            //   cy.wait(1000);
            //   cy.wait(5000);
        
            //   cy.contains('button', 'Log Out')
            //    .should('exist')
            //    .and('be.visible')
            //    .click();
            //   cy.wait(10000);
            });
        });
describe(' Reviewer1 to Innovation Admin ', () => {
            it('Reviewer1 to Innovation Admin', () => {
             
              cy.visit('http://localhost:5173');
              cy
              .wait(3000);
              cy.contains('button', 'Login / Register')
              .click();
          
          
              cy.origin('https://uat-beprc.oss.net.bd', () => {
           
              cy.get('input[name="username"]').type('innovationReviewer1@beprc.com');
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
              .get('.text-gray-200')
              .then($element => {
                if ($element.text()
                  .includes('Reviewer')) {
                  cy
                  .contains('Reviewer')
                  .should('exist')
                  .and('be.visible');
                }else{
                  cy
                  .get('.text-gray-200')
                  .click();  
                  cy
                  .wait(1000);
                  cy
                  .contains('Reviewer')
                  .should('exist')
                  .and('be.visible')
                  .click();
                }
              });
              
                // cy
                // .get('a[href="/dashboard"]')
                // .click();
                // cy
                //   .wait(1000);
          
                  cy
                .get('a[href="/proposal"]')
                .click();
                cy
                  .wait(1000);
                  cy.reload();

                  cy.contains('Waiting For Innovation Reviewer To Accept');
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/table/tbody/tr/td[8]/button').click();
                  cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div/div/button[2]').click();
                  cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div/div/button[2]').click();
                  cy.wait(1000);
                  cy.get('[name="data[0].score"]').type('5');
                  cy.get('[name="data[0].remarks"]').type('Good');

                  cy.get('[name="data[1].score"]').type('4');
                  cy.get('[name="data[1].remarks"]').type('Bad');

                  cy.get('[name="data[2].score"]').type('3');
                  cy.get('[name="data[2].remarks"]').type('Good');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Bad');

                  cy.get('[name="data[4].score"]').type('2');
                  cy.get('[name="data[4].remarks"]').type('Good');

                  cy.get('[name="data[5].score"]').type('1');
                  cy.get('[name="data[5].remarks"]').type('Good');

                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                  cy.wait(1000);
                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('3');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  cy.get('[name="data[5].score"]').type('2');
                  cy.get('[name="data[5].remarks"]').type('Not Bad');

                  cy.get('[name="data[6].score"]').type('2');
                  cy.get('[name="data[6].remarks"]').type('Not Bad');

                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                  cy.wait(1000);



                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('3');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  cy.get('[name="data[5].score"]').type('2');
                  cy.get('[name="data[5].remarks"]').type('Not Bad');

                  cy.get('[name="data[6].score"]').type('2');
                  cy.get('[name="data[6].remarks"]').type('Not Bad');

                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                  cy.wait(1000);

                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('3');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  

                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  
                  
                  cy.get('[class="px-5 py-2 text-white duration-700 rounded-md bg-gradient-to-r from-green-500 to-green-700"]').click();
                  
                  cy.get('[class="px-5 py-2 text-white duration-700 rounded-md bg-gradient-to-r from-green-500 to-green-700"]').click();
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();

                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('1');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  cy.get('[name="data[5].score"]').type('1');
                  cy.get('[name="data[5].remarks"]').type('Not Bad');


                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                cy.wait(3000);
                


                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[1]/div/div/div').click();
                cy.contains('Send To Innovation Admin').click();
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[2]/textarea').type("pass");
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[2]/div/div/div[1]/div/label/input').attachFile('dummy-pdf_2.pdf');
                cy.wait(1000);
                 cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();

              cy
              .wait(2000);
              cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
              // cy.get('.fill-gray-100').click();
              //   cy.wait(1000);
              //   cy.wait(5000);
          
              //   cy.contains('button', 'Log Out')
              //    .should('exist')
              //    .and('be.visible')
              //    .click();
              //   cy.wait(10000);
              
              
            });
          });
 describe(' Reviewer2 to Innovation Admin ', () => {
            it('Reviewer2 to Innovation Admin', () => {
             
              cy.visit('http://localhost:5173');
              cy
              .wait(3000);
              cy.contains('button', 'Login / Register')
              .click();
          
          
              cy.origin('https://uat-beprc.oss.net.bd', () => {
           
              cy.get('input[name="username"]').type('innovationReviewer2@beprc.com');
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
              .get('.text-gray-200')
              .then($element => {
                if ($element.text()
                  .includes('Reviewer')) {
                  cy
                  .contains('Reviewer')
                  .should('exist')
                  .and('be.visible');
                }else{
                  cy
                  .get('.text-gray-200')
                  .click();  
                  cy
                  .wait(1000);
                  cy
                  .contains('Reviewer')
                  .should('exist')
                  .and('be.visible')
                  .click();
                }
              });
              
                // cy
                // .get('a[href="/dashboard"]')
                // .click();
                // cy
                //   .wait(1000);
          
                  cy
                .get('a[href="/proposal"]')
                .click();
                cy
                  .wait(1000);
                  cy.reload();

                  cy.contains('Waiting For Innovation Reviewer To Accept');
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/table/tbody/tr/td[8]/button').click();
                  cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div/div/button[2]').click();
                  cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div/div/button[2]').click();
                  cy.wait(1000);
                  cy.get('[name="data[0].score"]').type('5');
                  cy.get('[name="data[0].remarks"]').type('Good');

                  cy.get('[name="data[1].score"]').type('4');
                  cy.get('[name="data[1].remarks"]').type('Bad');

                  cy.get('[name="data[2].score"]').type('3');
                  cy.get('[name="data[2].remarks"]').type('Good');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Bad');

                  cy.get('[name="data[4].score"]').type('2');
                  cy.get('[name="data[4].remarks"]').type('Good');

                  cy.get('[name="data[5].score"]').type('1');
                  cy.get('[name="data[5].remarks"]').type('Good');

                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                  cy.wait(1000);
                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('3');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  cy.get('[name="data[5].score"]').type('2');
                  cy.get('[name="data[5].remarks"]').type('Not Bad');

                  cy.get('[name="data[6].score"]').type('2');
                  cy.get('[name="data[6].remarks"]').type('Not Bad');

                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                  cy.wait(1000);



                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('3');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  cy.get('[name="data[5].score"]').type('2');
                  cy.get('[name="data[5].remarks"]').type('Not Bad');

                  cy.get('[name="data[6].score"]').type('2');
                  cy.get('[name="data[6].remarks"]').type('Not Bad');

                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                  cy.wait(1000);

                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('3');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  

                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                 
                  
                  cy.get('[class="px-5 py-2 text-white duration-700 rounded-md bg-gradient-to-r from-green-500 to-green-700"]').click();
                  
                  cy.get('[class="px-5 py-2 text-white duration-700 rounded-md bg-gradient-to-r from-green-500 to-green-700"]').click();
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                  
                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('1');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  cy.get('[name="data[5].score"]').type('1');
                  cy.get('[name="data[5].remarks"]').type('Not Bad');


                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                cy.wait(3000);
                


                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[1]/div/div/div').click();
                cy.contains('Send To Innovation Admin').click();
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[2]/textarea').type("pass");
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[2]/div/div/div[1]/div/label/input').attachFile('dummy-pdf_2.pdf');
                cy.wait(1000);
                 cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();

              cy
              .wait(2000);
              cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
              // cy.get('.fill-gray-100').click();
              //   cy.wait(1000);
              //   cy.wait(5000);
          
              //   cy.contains('button', 'Log Out')
              //    .should('exist')
              //    .and('be.visible')
              //    .click();
              //   cy.wait(10000);
              
              
            });
          });
describe(' Reviewer3 to Innovation Admin ', () => {
            it('Reviewer3 to Innovation Admin', () => {
             
              cy.visit('http://localhost:5173');
              cy
              .wait(3000);
              cy.contains('button', 'Login / Register')
              .click();
          
          
              cy.origin('https://uat-beprc.oss.net.bd', () => {
           
              cy.get('input[name="username"]').type('innovationReviewer3@beprc.com');
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
              .get('.text-gray-200')
              .then($element => {
                if ($element.text()
                  .includes('Reviewer')) {
                  cy
                  .contains('Reviewer')
                  .should('exist')
                  .and('be.visible');
                }else{
                  cy
                  .get('.text-gray-200')
                  .click();  
                  cy
                  .wait(1000);
                  cy
                  .contains('Reviewer')
                  .should('exist')
                  .and('be.visible')
                  .click();
                }
              });
              
                // cy
                // .get('a[href="/dashboard"]')
                // .click();
                // cy
                //   .wait(1000);
          
                  cy
                .get('a[href="/proposal"]')
                .click();
                cy
                  .wait(1000);
                  cy.reload();

                  cy.contains('Waiting For Innovation Reviewer To Accept');
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/table/tbody/tr/td[8]/button').click();
                  cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div/div/button[2]').click();
                  cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div/div/button[2]').click();
                  cy.wait(1000);
                  cy.get('[name="data[0].score"]').type('5');
                  cy.get('[name="data[0].remarks"]').type('Good');

                  cy.get('[name="data[1].score"]').type('4');
                  cy.get('[name="data[1].remarks"]').type('Bad');

                  cy.get('[name="data[2].score"]').type('3');
                  cy.get('[name="data[2].remarks"]').type('Good');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Bad');

                  cy.get('[name="data[4].score"]').type('2');
                  cy.get('[name="data[4].remarks"]').type('Good');

                  cy.get('[name="data[5].score"]').type('1');
                  cy.get('[name="data[5].remarks"]').type('Good');

                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                  cy.wait(1000);
                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('3');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  cy.get('[name="data[5].score"]').type('2');
                  cy.get('[name="data[5].remarks"]').type('Not Bad');

                  cy.get('[name="data[6].score"]').type('2');
                  cy.get('[name="data[6].remarks"]').type('Not Bad');

                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                  cy.wait(1000);



                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('3');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  cy.get('[name="data[5].score"]').type('2');
                  cy.get('[name="data[5].remarks"]').type('Not Bad');

                  cy.get('[name="data[6].score"]').type('2');
                  cy.get('[name="data[6].remarks"]').type('Not Bad');

                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                  cy.wait(1000);

                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('3');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  

                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  
                  cy.get('[class="px-5 py-2 text-white duration-700 rounded-md bg-gradient-to-r from-green-500 to-green-700"]').click();
                  
                  cy.get('[class="px-5 py-2 text-white duration-700 rounded-md bg-gradient-to-r from-green-500 to-green-700"]').click();
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();

                  cy.get('[name="data[0].score"]').type('1');
                  cy.get('[name="data[0].remarks"]').type('Not Bad');

                  cy.get('[name="data[1].score"]').type('2');
                  cy.get('[name="data[1].remarks"]').type('Not Bad');

                  cy.get('[name="data[2].score"]').type('1');
                  cy.get('[name="data[2].remarks"]').type('Not Bad');

                  cy.get('[name="data[3].score"]').type('2');
                  cy.get('[name="data[3].remarks"]').type('Not Bad');

                  cy.get('[name="data[4].score"]').type('1');
                  cy.get('[name="data[4].remarks"]').type('Not Bad');

                  cy.get('[name="data[5].score"]').type('1');
                  cy.get('[name="data[5].remarks"]').type('Not Bad');


                  
                  cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                cy.wait(3000);
                


                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[1]/div/div/div').click();
                cy.contains('Send To Innovation Admin').click();
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[2]/textarea').type("pass");
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[2]/div/div/div[1]/div/label/input').attachFile('dummy-pdf_2.pdf');
                cy.wait(1000);
                 cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();

              cy
              .wait(2000);
              cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
              // cy.get('.fill-gray-100').click();
              //   cy.wait(1000);
              //   cy.wait(5000);
          
              //   cy.contains('button', 'Log Out')
              //    .should('exist')
              //    .and('be.visible')
              //    .click();
              //   cy.wait(10000);
              
              
            });
          });
describe('Innovation Admin to Nevition ', () => {
            it('Innovation Admin to Nevition', () => {
            
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
                .get('a[href="/proposal"]')
                .click();
                cy.reload();
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[1]/div[2]/div/div/div/button[2]').click();
                cy
                .wait(2000);
                cy.contains('Marking Completed By Reviewers');
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/table/tbody/tr/td[8]/button').click();
                cy.wait(500);
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[1]/div/div/div').click();
                cy.contains('Send To Innovation Negotiation Committee').click();
                
    
               
    
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[1]/div[2]/textarea').type('negotion')
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[2]/div[2]/div/div/div[1]/div/label')
                .attachFile('dummy-pdf_2.pdf');
                cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div[1]/div[3]/form/button').click();
                
    
                cy.xpath('/html/body/div/div/div[2]/div/div/button').click();
                // cy.get('.fill-gray-100').click();
                //   cy.wait(1000);
                //   cy.wait(5000);
            
                //   cy.contains('button', 'Log Out')
                //    .should('exist')
                //    .and('be.visible')
                //    .click();
                //   cy.wait(10000);

                });
              });
