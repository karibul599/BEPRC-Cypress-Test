

describe.only('Super Admin Login ', () => {
  it('Super Admin Login', () => {
    //cy.get('/html/body/div/div[2]/div/div/div[1]/div/form/div[1]/input').click().type('superadmin@beprc.com');
    //cy.xpath('/html/body/div/div[2]/div/div/div[1]/div/form/div[2]/input').click().type('12345#Bmail');
    // cy.xpath('//*[@id="kc-login"]').click();
   
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
    
    cy
    .get('.text-sm.text-gray-200')
    .contains('Super Admin') 
    .should('be.visible');

    cy
    .get('a[href="/"]')
    .click();
    cy
    .wait(3000);

    cy
    .get('a[href="/news"]')
    .click();
    cy
    .wait(3000);
   
    cy
    .get('a[href="/activities"]')
    .click();
    cy
    .wait(3000);

    cy
    .get('a[href="/messages"]')
    .click();
    cy
    .wait(3000);

    cy
    .get('a[href="/fundings"]')
    .click();
    cy
    .wait(3000);

    cy
    .get('a[href="/articles"]')
    .click();
    cy
    .wait(3000);

    cy
    .get('a[href="/important-links"]')
    .click();
    cy
    .wait(3000);

    cy
    .get('a[href="/admin-users"]')
    .click();
    cy
    .wait(3000);

    cy
    .get('a[href="/guidlines"]')
    .click();
    cy
    .wait(3000);
   
    cy.wait(5000);
  });
});

describe.only('Innovation Admin Login ', () => {
  it('Innovation Admin Login', () => {

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
    .get('a[href="/dashboard"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/proposal"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/project-management-admin/14a5701a-f3cb-453e-a227-dcf66f95e2cf"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/report-management-admin/14a5701a-f3cb-453e-a227-dcf66f95e2cf"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/researchArea"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/solicitation"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/screening/INNOVATION_SCREENING_COMMITTEE/d78f7c60-bf82-4a02-9057-93e93bfb1c44"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/negotiation/INNOVATION_NEGOTIATION_COMMITTEE/795a2fb7-4d9e-4e7a-be68-cc211d8ead28"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/reviewer/INNOVATION"]')
    .click();
    cy
    .wait(500);

   

    cy
    .get('a[href="/pcr-report-list"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/AttachmentDeclaration"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/screening-committee-criteria"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/user"]')
    .click();
    cy
    .wait(500);
   
    cy
    .wait(5000);
  });
});

describe.only('Icubation Admin Login ', () => {
  it('Icubation Admin Login', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('incadm@ovi.com');
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
    .contains('Incubation Admin') 
    .should('be.visible');

    cy
    .get('a[href="/dashboard"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/proposal"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/project-management-admin/28071f83-77dd-40a9-8f68-1d622e6d4223"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/report-management-admin/28071f83-77dd-40a9-8f68-1d622e6d4223"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/solicitation"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/screening/INCUBATION_SCREENING_COMMITTEE/3760d33b-241c-486b-937f-045453969183"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/negotiation/INCUBATION_NEGOTIATION_COMMITTEE/314cf5f5-c0ad-410e-9fa4-0d17ab5b7290"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/reviewer/INCUBATION"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/user"]')
    .click();
    cy
    .wait(5000);
    cy.get('[data-testid="ExpandMoreIcon"]').should('be.visible').click();

  cy
    .wait(1000);
    cy
    .get('a[href="/pcr-report-list-innovation/14a5701a-f3cb-453e-a227-dcf66f95e2cf"]')
    .click();
    cy
    .wait(1000);

    cy
    .get('a[href="/pcr-report-list-incubation/28071f83-77dd-40a9-8f68-1d622e6d4223"]')
    .click();
    cy
    .wait(200);

    cy
    .get('a[href="/user"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/AttachmentDeclaration"]')
    .click();
    cy
    .wait(500);
   
    cy
    .wait(5000);
  });
});

describe.only('Entrepreneurship Admin Login ', () => {
  it('Entrepreneurship Admin Login', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('entadm@yahoo.com');
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
    .contains('Entrepreneurship Admin') 
    .should('be.visible');

    cy
    .get('a[href="/dashboard"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/proposal"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/project-management-admin/3527c31f-a770-4898-bf60-5c8c7d1992f1"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/report-management-admin/3527c31f-a770-4898-bf60-5c8c7d1992f1"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/solicitation"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/reviewer/ENTREPRENEURSHIP"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/negotiation/ENTREPRENEURSHIP_NEGOTIATION_COMMITTEE/b769d1da-754b-4053-ac80-fadd77b7fd7d"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/AttachmentDeclaration"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/user"]')
    .click();
    cy
    .wait(500);

    // cy
    // .get('a[href="/report"]')
    // .click();
    // cy
    // .wait(500);

    // cy
    // .get('a[href="/pcr-report-list"]')
    // .click();
    // cy
    // .wait(500);
   
    
    cy
    .wait(5000);
  });
});

describe.only('Lab Development Admin Login ', () => {
  it('Lab Development Admin Login', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('lbdadmin@beprc.com');
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
    .xpath('//*[@id="root"]/div/div[1]/div/div[1]/div[2]/div/div[1]/div[1]/div[2]/p[2]')
    .contains('Lab Development Admin');

    cy
    .get('a[href="/dashboard"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/proposal"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/project-management-admin/46d007cd-c4e3-4c15-a378-1f2a221a5beb"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/lab-program"]')
    .click();
    cy
    .wait(500);
    
    cy
    .get('a[href="/lab-criteria"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/reviewer/LAB_DEVELOPMENT"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/negotiation/LAB_DEV_NEGOTIATION_COMMITTEE/4afa2e4c-44e1-4c5c-aecc-0877f75aa4e8"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/AttachmentDeclaration"]')
    .click();
    cy
    .wait(500);

    cy
    .get('a[href="/user"]')
    .click();
    cy
    .wait(500);

   
    cy
    .wait(5000);
  });
});

describe('Innovation Screening Committee Login ', () => {
  it('Innovation Screening Committee Login', () => {
   
    
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
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/proposal"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
  
    
    
  });
});

describe('Innovation Reviewer Login ', () => {
  it('Innovation Reviewer Login', () => {
   
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
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/proposal"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
  
    
    
  });
});

describe('Innovation Negotiation Committee ', () => {
  it('Innovation Negotiation Committee', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('innovationNegotiationCommittee1@beprc.com');
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
        cy
        .contains('Innovation Negotiation Committee')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('Innovation Negotiation Committee')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/proposal"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
  
    
    
  });
});

describe('Incubation Screening Committee Login ', () => {
  it('Incubation Screening Committee Login', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('incScCm1@beprc.com');
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
        .includes('Incubation Screening Committee')) {
        cy
        .contains('Incubation Screening Committee')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('Incubation Screening Committee')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/proposal"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
  
    
    
  });
});

describe('Incubation Reviewer  Login ', () => {
  it('Incubation Reviewer  Login', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('incRv1@beprc.com');
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
        .includes('IPSC(Incubation Proposal Scoring Committee)')) {
        cy
        .contains('IPSC(Incubation Proposal Scoring Committee)')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('IPSC(Incubation Proposal Scoring Committee)')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/proposal"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
  
    
    
  });
});


describe('Incubation Negotiation Committee Login ', () => {
  it('Incubation Negotiation Committee Login', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('incNgCm1@beprc.com');
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
        .includes('Incubation Negotiation Committee')) {
        cy
        .contains('Incubation Negotiation Committee')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('Incubation Negotiation Committee')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/proposal"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
  
    
    
  });
});

describe('Entrepreneurship Reviewer Login ', () => {
  it('Entrepreneurship Reviewer Login', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('entRv1@beprc.com');
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
        .includes('Entrepreneurship Evaluation Committee')) {
        cy
        .contains('Entrepreneurship Evaluation Committee')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('Entrepreneurship Evaluation Committee')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/proposal"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
  
    
    
  });
});

describe('Entrepreneurship Negotiation Committee Login ', () => {
  it('Entrepreneurship Negotiation Committee Login', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('entNgCm1@beprc.com');
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
        .includes('Entrepreneurship Negotiation Committee')) {
        cy
        .contains('Entrepreneurship Negotiation Committee')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('Entrepreneurship Negotiation Committee')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/proposal"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
  
    
    
  });
});

describe('Lab Development Reviewer Login ', () => {
  it('Lab Development Reviewer Login', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('lbdRv3@beprc.com');
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
        .includes('Evaluation Committee')) {
        cy
        .contains('Evaluation Committee')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('Evaluation Committee')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/proposal"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
  
    
    
  });
});

describe('Lab Development Negotiation Committee Login ', () => {
  it('Lab Development Negotiation Committee Login', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('lbdNgCm1@beprc.com');
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
        .includes('Negotiation Committee')) {
        cy
        .contains('Negotiation Committee')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('Negotiation Committee')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/proposal"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
  
    
    
  });
});

describe('Lab Development Technical Monitoring Team Login and Navbar Check ', () => {
  it('Lab Development Technical Monitoring Team Login and Navbar Check', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('innovationNegotiationCommittee1@beprc.com');
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
        .includes('Lab Technical Monitoring Team')) {
        cy
        .contains('Lab Technical Monitoring Team')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('Lab Technical Monitoring Team')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/project-management-admin/46d007cd-c4e3-4c15-a378-1f2a221a5beb"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
    
  });
});

describe('Lab Development Procurement Monitoring Team Login and Navbar Check ', () => {
  it('Lab Development Procurement Monitoring Team Login and Navbar Check', () => {
   
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
        .includes('Lab Procurement Monitoring Team')) {
        cy
        .contains('Lab Procurement Monitoring Team')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('Lab Procurement Monitoring Team')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/project-management-admin/46d007cd-c4e3-4c15-a378-1f2a221a5beb"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
    
  });
});


describe('Procurement Monitoring Team Login and Navbar Check', () => {
  it('Procurement Monitoring Team Login and Navbar Check', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('innovationNegotiationCommittee1@beprc.com');
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
        .includes('Procurement Monitoring Team')) {
        cy
        .contains('Procurement Monitoring Team')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('Procurement Monitoring Team')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/project-management-admin/14a5701a-f3cb-453e-a227-dcf66f95e2cf"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
    
  });
});


describe('Technical Monitoring Team Login and Navbar Check', () => {
  it('Technical Monitoring Team Login and Navbar Check', () => {
   
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
        .includes('Technical Monitoring Team')) {
        cy
        .contains('Technical Monitoring Team')
        .should('exist')
        .and('be.visible');
      }else{
        cy
        .get('.text-gray-200')
        .click();  
        cy
        .wait(1000);
        cy
        .contains('Technical Monitoring Team')
        .should('exist')
        .and('be.visible')
        .click();
      }
    });
    
      cy
      .get('a[href="/dashboard"]')
      .click();
      cy
        .wait(1000);

        cy
      .get('a[href="/project-management-admin/14a5701a-f3cb-453e-a227-dcf66f95e2cf"]')
      .click();
      cy
        .wait(1000);
    cy
    .wait(5000);
    
  });
});

describe('Applicant Login(User) ', () => {
  it('Applicant Login(User)', () => {
   
    cy.visit('http://localhost:5173');
    cy
    .wait(3000);
    cy.contains('button', 'Login / Register')
    .click();


    cy.origin('https://uat-beprc.oss.net.bd', () => {
 
    cy.get('input[name="username"]').type('adi@gmail.com');
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
    
    // cy
    // .get('.text-sm.text-gray-600')
    // .contains('Applicant') 
    // .should('be.visible');

    cy
    .get('a[href="/"]')
    .click();
    cy
    .wait(5000);

    cy
    .get('a[href="/14a5701a-f3cb-453e-a227-dcf66f95e2cf"]')
    .click();
    cy
    .wait(5000);

    cy
    .get('a[href="/28071f83-77dd-40a9-8f68-1d622e6d4223"]')
    .click();
    cy
    .wait(5000);

    cy
    .get('a[href="/3527c31f-a770-4898-bf60-5c8c7d1992f1"]')
    .click();
    cy
    .wait(5000);

    cy
    .get('a[href="/46d007cd-c4e3-4c15-a378-1f2a221a5beb"]')
    .click();
    cy
    .wait(5000);

    cy
    .get('a[href="/project-management"]')
    .click();
    cy
    .wait(5000);

    cy
    .get('a[href="/lab-management/46d007cd-c4e3-4c15-a378-1f2a221a5beb"]')
    .click();
    cy
    .wait(5000);

    cy
    .get('a[href="/report-management"]')
    .click();
    cy
    .wait(5000);

   

  });
});



 





