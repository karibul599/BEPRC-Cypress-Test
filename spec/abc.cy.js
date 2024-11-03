describe(' Parallely Test Case ', () => {
  it('case:1', () => {
    cy.visit('www.google.com');
    cy.wait(5000);
    cy.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/textarea')
    .type('Beautiful wallpaper{enter}');

    
  });


  it('case:2', () => {
    cy.visit('www.twitter.com login');
    cy.wait(5000);
  });

  it('case:3', () => {
    cy.visit('www.email.com login');
    cy.wait(5000);
  });

  it('case:4', () => {
    cy.visit('www.etrade.com login');
    cy.wait(5000);
  });

  
});