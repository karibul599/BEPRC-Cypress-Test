describe('from', ()=> {
    it('from', ()=>{
        // cy.visit(' https://uat-beprc.oss.net.bd');
        // cy.wait(500);
        // cy.contains('Md Mokabbir Hossain')
        // cy.wait(100);
        // cy.contains('Test Title')
        // cy.wait(100);
        // cy.contains('test1')
        // cy.wait(100);
        // cy.contains('button', 'Login / Register')
        // .click();

        // cy.get('#username')
        // .should('exist')
        // .and('be.visible')
        // .type('superadmin@beprc.com');
        // cy.get('#password')
        // .should('exist')
        // .and('be.visible')
        // .type('12345#Bmail');
        // cy.get('#kc-login')
        // .should('exist')
        // .and('be.visible')
        // .click();
        // cy.wait(5000);
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

        for (let i = 0; i < 5; i++) {
          
        cy.get('[name="title"]') 
        .should('exist')      
        .and('be.visible')     
        .click()             
        .type(title[i]);   

        cy.get('[name="serialNumber"]') 
        .should('exist')      
        .and('be.visible')     
        .click()             
        .type(serial[i]); 

        cy.get('[name="designation"]') 
        .should('exist')      
        .and('be.visible')     
        .click()             
        .type(designation[i]); 

        cy.get('[name="details"]')
        .should('exist')
        .and('be.visible')
        .click() 
        .type(details[i]);

        cy.get('input[type="file"]').attachFile(file[i]);
                cy.wait(15000);

                if (i === 0 || i === 1 || i === 2) {
                    cy.wait(500);
                    cy.contains('Active')
                    .should('exist')
                    .and('be.visible')
                    .click();
                  }else{
                    cy.wait(500);
                    cy.contains('Inactive')
                    .should('exist')
                    .and('be.visible')
                    .click();
                  }

                  cy.wait(1000);
                  cy.contains('button', 'Add')
                    .should('exist')
                    .and('be.visible')
                    .click();
                    cy.wait(1000);
                    cy.xpath('/html/body/div/div/div[2]/div/div/button').click()

                    cy.wait(10000);
                    cy.get('a[href="/messages/add-message/0"]')
                    .click();
                    cy.wait(10000);

        }
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
        cy.contains('TitleTwo')
        cy.wait(100);
        cy.contains('TitleThree')
        cy.wait(100);       
    })
})