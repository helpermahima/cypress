describe('Hooks demo', function(){
    before(function(){
    cy.log('before');
    });
    beforeEach(function(){
        cy.log('before each');
    });

    it('TC #1',function(){
        console.log('TC #1')

    });

    it.skip('TC #2',function(){
        console.log('TC #2')

    });
    it('TC #3',function(){
        console.log('TC #3')

    });
    afterEach(function(){
        cy.log('After Each')
    });
    after(function(){
        cy.log('After ')
    });

});