import 'cypress-iframe';
import 'cypress-file-upload';
describe.only('Innovation Applicatioon', () => {
it('Innovation Applicatioon', () => {
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('kari@gmail.com');
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
          .type('12345');

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
            .type('12345');
  
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
            .type('12345');
  
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
          cy.wait(5000);
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
          .type('12345');

          cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[5]/div[2]/div[5]/div/div/input')  
          .should('exist')
          .and('be.visible')
          .click()                       
          .type('Sharsha,Jashore');


        cy.xpath('/html/body/div/div/div[1]/div/div[2]/main/div/div/div[2]/div/div/div/div/div[6]/div[2]/button')
          .should('exist')
          .and('be.visible')
          .click();
          cy.wait(5000);
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
          cy.wait(5000);
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
          cy.wait(5000);
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
          cy.wait(5000);
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
          cy.wait(5000);
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
        cy.wait(5000);
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
          cy.wait(20000);
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
          cy.wait(15000);
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
          cy.wait(15000);
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
           cy.wait(15000);
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
           cy.wait(15000);
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
cy.wait(20000);
 cy.xpath('/html/body/div[2]/div[3]/div/h2/div/button[1]').click();
 cy.wait(5000);

    });
});
