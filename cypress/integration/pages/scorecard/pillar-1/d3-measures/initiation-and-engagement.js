/// <reference types="Cypress" />

export class InitiationEngagement {

    // Measure title
    measureTitle() {
        cy.get('h1')
            .should('contain', 'Initiation & Engagement of Alcohol & Other Drug Dependence Treatment');
    }

    // VISIT THE DOMAIN
    visitTheDomain() {
        cy.get('.domainNav')
            .should('contain', 'VISIT THE DOMAIN: ')
            .and('contain', 'Promote Effective Prevention & Treatment of Chronic Diseases');
    }

    // Total AOD Abuse or Dependence
    totalAODTitle() {
        cy.get('h2')
            .should('contain', 'Total AOD Abuse or Dependence');

    }

    totalAODMedianRateInitiation() {
        cy.get('.median-text')
            .should('contain', 'Median - 40.0%');

    }

    totalAODMedianRateEngagement() {
        cy.get('.median-text')
            .should('contain', 'Median - 14.5%');

    }

    // Total Rate List
    totalAODInitiationrateList() {
        cy.get('.chart-axisRight')
            .should('contain', 'NR')
            .and('contain', '38.8%')
            .and('contain', 'NR')
            .and('contain', '59.1%')
            .and('contain', '31.2%')
            .and('contain', 'NR')
            .and('contain', '48.0%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.0%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '6.8%')
            .and('contain', 'NR')
            .and('contain', '9.8%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.9%')
            .and('contain', '12.1%')
            .and('contain', '8.8%')
            .and('contain', 'NR')
            .and('contain', '8.7%')
            .and('contain', '8.8%')
            .and('contain', '7.8%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.3%')
            .and('contain', 'NR')
            .and('contain', '9.1%')
            .and('contain', '8.3%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '10.6%')
            .and('contain', '7.6%')
            .and('contain', '10.5%')
            .and('contain', '9.4%')
            .and('contain', 'NR')
            .and('contain', '9.9%')
            .and('contain', 'NR')
            .and('contain', '11.5%')
            .and('contain', 'NR')
            .and('contain', '10.9%')
            .and('contain', '9.1%')
            .and('contain', 'NR')
            .and('contain', 'NR')
            .and('contain', '8.3%')
            .and('contain', '7.3%')
            .and('contain', 'NR')
            .and('contain', '10.8%')
            .and('contain', 'NR');
    }

    // Alcohol Abuse or Dependence
    alcoholAbuseTitle() {
        cy.get('h2')
            .should('contain', 'Alcohol Abuse or Dependence');

    }

    alcoholAbuseMedianRateInitiation() {
        cy.get('.median-text')
            .should('contain', 'Median - 38.8%');

    }

    alcoholAbuseMedianRateEngagement() {
        cy.get('.median-text')
            .should('contain', 'Median - 11.6%');

    }

    // Opioid Abuse or Dependence
    opioidAbuseTitle() {
        cy.get('h2')
            .should('contain', 'Opioid Abuse or Dependence');

    }

    opioidAbuseMedianRateInitiation() {
        cy.get('.median-text')
            .should('contain', 'Median - 46.3%');

    }

    opioidAbuseMedianRateEngagement() {
        cy.get('.median-text')
            .should('contain', 'Median - 25.4%');

    }

    // Other Drug Abuse or Dependence
    otherDrugTitle() {
        cy.get('h2')
            .should('contain', 'Other Drug Abuse or Dependence');

    }

    otherDrugMedianRateInitiation() {
        cy.get('.median-text')
            .should('contain', 'Median - 38.5%');

    }

    otherDrugMedianRateEngagement() {
        cy.get('.median-text')
            .should('contain', 'Median - 11.2%');

    }
}

export const initiationEngagement = new InitiationEngagement();