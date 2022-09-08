describe('location demo', function(){
    // beforeEach(function(){
    //   cy.visit('https://www.youtube.com/')
    // });

    it('should redirect /results?search_query=proshore',function(){;
      // prepare
       cy.visit('https://www.youtube.com/')
      // perform
      cy.get('#search-input').type('proshore');
         cy.get('#search-icon-legacy').click();
        // cy.type('{enter}')
     
    
   cy.get('a[title="10 Years Of Proshore"]').click();
   cy.wait(5000);
   
    //  cy.title().should('have.text','10 Years Of Proshore');
     // perdict
    cy.title().should('include','10 Years Of Proshore');
    //  });
     
      
// search how to tigger enter action using cypress
  
    
  //   });
  
  //   it('URL should be https://www.youtube.com/', function(){
  //   cy.url().should ('eq','https://www.youtube.com/');
  // });
  // it('should be HTTPS',function(){;
  //   cy.location('protocol').should('contains','https');
  });
  });