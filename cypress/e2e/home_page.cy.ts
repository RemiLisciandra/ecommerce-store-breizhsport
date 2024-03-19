describe("Page d’accueil", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("http://localhost:3001/");
    cy.contains("Featured Products");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("http://localhost:3001/");
    cy.contains("Shoes");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("http://localhost:3001/");
    cy.contains("Jackets");
  });

  it("doit contenir un texte spécifique", () => {
    cy.visit("http://localhost:3001/");
    cy.contains("© 2023 Breizhsport. All rights reserved.");
  });

  it("le bouton du panier doit être cliquable", () => {
    cy.get("button.flex.items-center.rounded-full")
      .should("be.visible")
      .eq(0)
      .click();
    cy.url().should("include", "/cart");
  });
});
