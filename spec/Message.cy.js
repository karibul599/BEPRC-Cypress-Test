describe('Message creat', ()=> {
  it('from', ()=>{
      
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

      cy.get('a[href="/messages"]')
      .click();
      cy.wait(10000);
      cy.get('a[href="/messages/add-message/0"]')
      .click();
      cy.wait(1500);

      const title = ['TitleOne', 'TitleTwo', 'TitleThree','TitleFour','TitleFive'];
      const serial = ['2', '3', '4','5','6'];
      const designation = ['Manager', 'Sub-Assistant Manager', 'Assistant Manager','Officer','Junior Officer'];
      const details = [
           'https://www.localvisibilitysystem.com/2016/05/19/dummy-links-part-of-a-smart-local-seo-strategy/'
          , 'https://www.w3.org/Provider/Style/dummy.html'
          , 'https://dummygenerator.com/text/web/url'
          ,'https://dictionarymarketing.com/definition/dummy-link/'
          ,'https://answers.ros.org/question/415304/urdf-what-is-a-dummy-link-needed-for/'
      ];
      const file = ['download (1).jpg', 'download (2).jpg', 'download (3).jpg','download (4).jpg','download.jpg'];

      //for (let i = 0; i < 5; i++) {
        
      cy.get('[name="title"]') 
      .should('exist')      
      .and('be.visible')     
      .click()             
      .type(title[0]);   

      cy.get('[name="serialNumber"]') 
      .should('exist')      
      .and('be.visible')     
      .click()             
      .type(serial[0]); 

      cy.get('[name="designation"]') 
      .should('exist')      
      .and('be.visible')     
      .click()             
      .type(designation[0]); 

      cy.get('[name="details"]')
      .should('exist')
      .and('be.visible')
      .click() 
      .type(details[0]);

      cy.get('input[type="file"]').attachFile(file[0]);
              cy.wait(15000);

              //if (i === 0 || i === 1 || i === 2) {
                  cy.wait(500);
                  cy.contains('Active')
                  .should('exist')
                  .and('be.visible')
                  .click();
               // }else{
                  // cy.wait(500);
                  // cy.contains('Inactive')
                  // .should('exist')
                  // .and('be.visible')
                  // .click();
               // }

                cy.wait(1000);
                cy.contains('button', 'Add')
                  .should('exist')
                  .and('be.visible')
                  .click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click()

                  // cy.wait(10000);
                  // cy.get('a[href="/messages/add-message/0"]')
                  // .click();
                  // cy.wait(10000);

      //}
      //cy.wait(25000);
      cy.get('.fill-gray-100').click();
      cy.wait(1000);
      cy.wait(5000);

      cy.contains('button', 'Log Out')
       .should('exist')
       .and('be.visible')
       .click();
      cy.wait(10000);

      cy.contains('TitleOne')
      cy.wait(100);
      // cy.contains('TitleTwo')
      // cy.wait(100);
      // cy.contains('TitleThree')
      // cy.wait(100);       
  })
})
describe.only('Message Edit', ()=> {
  it('from', ()=>{
      
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

      cy.get('a[href="/messages"]')
      .click();
      cy.wait(10000);
      cy.contains('button', 'Edit')
                  .should('exist')
                  .and('be.visible')
                  .click();

      cy.wait(1500);

      
      
      const file = ['download (1).jpg', 'download (2).jpg', 'download (3).jpg','download (4).jpg','download.jpg'];

      
        
      cy.get('[name="title"]') 
      .should('exist')      
      .and('be.visible')     
      .click().clear()             
      .type('title[0]');   

      cy.get('[name="serialNumber"]') 
      .should('exist')      
      .and('be.visible')     
      .click().clear()             
      .type('5'); 

      cy.get('[name="designation"]') 
      .should('exist')      
      .and('be.visible')     
      .click().clear()             
      .type('designation[0]'); 

      cy.get('[name="details"]')
      .should('exist')
      .and('be.visible')
      .click().clear() 
      .type('details[0]');

      cy.get('input[type="file"]').attachFile(file[2]);
              cy.wait(15000);

              
                  cy.wait(500);
                  cy.contains('Active')
                  .should('exist')
                  .and('be.visible')
                  .click();
              
                  // cy.wait(500);
                  // cy.contains('Inactive')
                  // .should('exist')
                  // .and('be.visible')
                  // .click();
              

                cy.wait(1000);
                cy.contains('button', 'Update')
                  .should('exist')
                  .and('be.visible')
                  .click();
                  cy.wait(1000);
                  cy.xpath('/html/body/div/div/div[2]/div/div/button').click()

                  
      cy.get('.fill-gray-100').click();
      cy.wait(1000);
      cy.wait(5000);

      cy.contains('button', 'Log Out')
       .should('exist')
       .and('be.visible')
       .click();
      cy.wait(10000);

      // cy.contains('TitleOne')
      // cy.wait(100);
            
  })
})