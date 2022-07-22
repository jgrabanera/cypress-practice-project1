/// <reference types="Cypress" />
describe('Traversing DOM elements in Cypress', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com/');
    cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true });
  });

  //Get the child elements
  it('children() to get the children of DOM elements', () => {
    cy.get('.traversal-breadcrumb')
      .children('.active')
      .should('contain', 'Contact Us');
  });

  //Get the closest elements
  it('closest() to validate the closest ancestor DOM element', () => {
    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group'); // in assertion of class, no need to include period(.) in class name
  });

  // Get the element based on index (ul>li)
  it('eq() to retrieve a specific element based on index', () => {
    cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk');
  });

  // Get the element using filter (works like children())
  it.only('filter() to retrieve DOM elements that match a specific selector', () => {
    cy.get('.btn-group-toggle > *')
      .filter('.active')
      .should('contain', 'Button-1');
  });

  it('find() to retrieve DOM elements of a given selector', () => {});

  it('first() to retrieve the first DOM element within elements ', () => {});

  it('last() to retrieve the last DOM element within elements', () => {});

  it('nextAll() to get all of the next sibling DOM elements within elements', () => {});

  it('nextUntil() to get all of the next sibling DOM elements within elements until another element', () => {});

  it('not() to remove DOM element(s) from the set of elements', () => {});

  it('parent() To get parent DOM element of elements', () => {});

  it('parents() to get parents DOM element of elements', () => {});

  it('prev() to get the previous sibling DOM element within elements', () => {});

  it('prevAll() to get all previous sibling DOM elements within elements', () => {});

  it('prevUntil() to get all previous sibling DOM elements within elements until other element', () => {});

  it('siblings() To get all sibling DOM elements of elements', () => {});
});
