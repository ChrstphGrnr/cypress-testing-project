describe('Browswer Actions', () => {
	it('should load correct URL', () => {
		cy.visit('http://example.com', { timeout: 10000 })
	})
})
