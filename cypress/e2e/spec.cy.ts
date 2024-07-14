describe('template spec', () => {
  it('renders the title', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="cypress-title"]').should("exist").should("have.text", "Car catalogue")
  })

  it("fetches data from an api", () => {
    cy.request('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=honda&year=2022&model=civic&limit=10&fuel_type=petrol', {
      headers: {
        'X-RapidAPI-Key': 'b01c4dfa4emsh2f1e85e66344aaep1c0b6fjsne0a907019d40',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq("success")
      expect(response.body.data).to.be.an('array')
      expect(response.body.data.length).to.be.greaterThan(0)
    })
  })
})