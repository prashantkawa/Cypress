describe('POST API request to add book', () => {
  it('Test add book', () => {
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
      name: 'Learn Appium Automation with Java',
      isbn: 'bacd',
      aisle: '2217',
      author: 'John foe',
    }).then((response) => {
      expect(response.body).to.have.property('Msg', 'successfully added');
      expect(response.status).to.eq(200);
    });
  });
});