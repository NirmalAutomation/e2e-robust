/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { scorecardLanding } from "../../pages/scorecard/scorecard-landing/scorecard-landing"
import { breastCancer } from "../../pages/scorecard/pillar-1/d3-measures/breast-cancer"
import { adolescentWell } from "../../pages/scorecard/pillar-1/d3-measures/adolescent-well-care"

beforeEach(() => {
    cy.medicaidLanding();
})

Given('User visits the Scorecard landing', () => {

    cy.visit('/state-overviews/scorecard/index.html');

})

Then('User sees Medicaid gov logo', () => {

    scorecardLanding.medicaidLogo();

})

Then('User sees secondary header navigation', () => {

    scorecardLanding.headerNavSecondary();

})

When('User inspects search feature', () => {

    scorecardLanding.searchContainer();

})

Then('User sees mega menu block', () => {

    scorecardLanding.mainMenuList();

})

Then('User sees Related Sites', () => {

    scorecardLanding.relatedSitesLinks();

})

Then('User sees Helpful Links', () => {

    scorecardLanding.helpfulLinks();

})

When('User inspects Sign Up block', () => {

    scorecardLanding.signUpText();
    scorecardLanding.yourEmailAddress();
    scorecardLanding.signUpBtn();

})

Then('User enter email address', () => {

    scorecardLanding.enterEmailAddress();

})

Then('User sees footer logo', () => {

    scorecardLanding.usaFooterLogo();

})

Then('User sees footer logo header', () => {

    scorecardLanding.usaFooterLogoHeading();

})

Then('User sees Twitter and Youtube logos', () => {

    scorecardLanding.twitterIcon();
    scorecardLanding.youtubeIcon();

})

Then('User sees footer contact heading', () => {

    scorecardLanding.footerContactHeading();

})

When('User inspects the breadcrumbs', () => {

    scorecardLanding.breadcrumbs();

})

Then('User sees Medicaid and CHIP Scorecard logo', () => {

    scorecardLanding.scorecardLogo();

})

When('User clicks on National Context icon', () => {

    scorecardLanding.ncIcon();

})

Then('User sees National Context page', () => {

    cy.url().should('include', '/state-overviews/scorecard/national-context/index.html');

})

When('User clicks on System Health System Performance', () => {

    scorecardLanding.shspIcon();

})

Then('User sees System Health System Performance', () => {

    cy.url().should('include', '/state-overviews/scorecard/state-health-system-performance/index.html');

})


When('User clicks on State Administrative Accountability', () => {

    scorecardLanding.saaIcon();

})

Then('User sees State Administrative Accountability', () => {

    cy.url().should('include', '/state-overviews/scorecard/state-administrative-accountability/index.html');

})


When('User clicks on Federal Administrative Accountability', () => {

    scorecardLanding.faaIcon();

})

Then('User sees Federal Administrative Accountability', () => {

    cy.url().should('include', '/state-overviews/scorecard/federal-administrative-accountability/index.html');

})


When('User selects on National Context link text', () => {

    scorecardLanding.ncLinkText();

})

When('User selects on State Health System Performance link text', () => {

    scorecardLanding.shspLinkText();

})

When('User selects on State Administrative Accountability link text', () => {

    scorecardLanding.saaLinkText();

})

When('User selects on Federal Administrative Accountability link text', () => {

    scorecardLanding.faaLinkText();

})

Then('User sees Find a Measure section', () => {

    scorecardLanding.findAMeasureText();

})

Then('User sees What is Scorecard text', () => {

    scorecardLanding.textAssertionScorecard();

})

When('User selects a measure drop down', () => {

    scorecardLanding.selectMeasureDropDown();

})

Then('User sees the pillar 1 measures', () => {

    scorecardLanding.assertMeasureNames();

})

Then('User sees the pillar 2 and 3 sub categories', () => {

    scorecardLanding.assertSubcategoryNames();

})

When('User selects the Breast Cancer Screening measure', () => {

    scorecardLanding.selectMeasureName();

})

Then('User visits the Breast Cancer Screening measure', () => {

    cy.url().should('include', '/state-overviews/scorecard/breast-cancer-screening/index.html');

})

Then('User sees Breast Cancer Screening measure title', () => {

    breastCancer.measureTitle();

})

When('User enters the Adolescent Well-Care Visits measure', () => {

    scorecardLanding.typeMeasureName();

})

Then('User visits the Adolescent Well-Care Visits measure', () => {

    cy.url().should('include', '/state-overviews/scorecard/adolescent-well-care-visits/index.html');

})

Then('User sees measure title', () => {

    adolescentWell.measureTitle();

})