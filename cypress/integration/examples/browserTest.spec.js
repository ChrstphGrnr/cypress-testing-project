describe('Browswer Actions', () => {
	it('should load correct URL', () => {
		cy.visit('http://example.com', { timeout: 10000 })
	})

	it('should check correct URL', () => {
		cy.url().should('include', 'example.com')
	})

	it('should wait for 3 seconds', () => {
		cy.wait(3000)
	})

	it('should check for correct element on the page', () => {
		cy.get('h1').should('be.visible')
	})
})
