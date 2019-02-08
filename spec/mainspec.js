describe('testing ajax call functionality', () => {
  it('should search for books upon pressing enter', () => {
    var spyEvent = spyOnEvent('button', 'click')
    $('button').click()
    expect('click').toHaveBeenTriggeredOn('button')
    expect(spyEvent).toHaveBeenTriggered()
  });
  it('should return a list of books matching the query', () => {
    expects(callAPI().toBe(arr));
  })
  // it('should insert a space inbetween commas', () => {

  // })
  // it("should display 'No info' when publisher is undefined", () => {

  // })
  // it('should not display any errors in the console if result is undefined', () => {

  // })
});