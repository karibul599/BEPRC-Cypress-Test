// const { describe } = require("mocha");


describe('google test', ()=>{
    beforeEach(()=>{
        cy.viewport(1000,500);
    });
    
    it('visit google',()=>{
    googleSearchBerOpen();
    searchSomeBeautifulPage();
    function googleSearchBerOpen(){
        let site= Cypress.env('DEMO_SITE') ?? 'original' 
        let extra=(site=='original') ?'':'/index_v2.html'
     cy.visit('www.google.com'+extra);
    }
function searchSomeBeautifulPage(){
    cy.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/textarea')
  .type('Beautiful wallpaper{enter}');
}

    });
});

describe('google test', ()=>{
    beforeEach(()=>{
        cy.viewport(1000,500);
    });
    
    it('visit google',()=>{
    googleSearchBerOpen();
    searchSomeBeautifulPage();
    function googleSearchBerOpen(){
        let site= Cypress.env('DEMO_SITE') ?? 'original' 
        let extra=(site=='original') ?'':'/index_v2.html'
     cy.visit('www.google.com'+extra);
    }
function searchSomeBeautifulPage(){
    cy.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/textarea')
  .type('Beautiful wallpaper{enter}');
}

    });
});