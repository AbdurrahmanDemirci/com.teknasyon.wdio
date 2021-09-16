@desktopWeb     @desktopWeb_happyPath
Feature: Desktop Happy Path Test Case Scenarios

    Background: Search for Teknasyon and enter website
        Given The opened is url "https://www.google.com/"
        Then I expect it to includes with "www.google.com" url. If not, print error "The opened page url is not the same as the expected url"
        Given The click on "homePageGoogle_searchBar_comboBox" element. Write "Teknasyon" in the relevant field
        Given The click on "homePageGoogle_searchFirstResult_listBox" element
        Then I expect is exist check "resultsPageGoogle_resultsFoundTeknasyon_text". If not, print error "Teknasyon not found in search results"
        Given The click on "resultsPageGoogle_resultsFoundTeknasyonSelect_text" element


    @desktopWeb_happyPath_1
    Scenario: Successfully uploading a CV - TR
        Then I expect the title of the site to be "Teknasyon". If not, print error "Site title is not the same as expected value"
        When Scroll on element "footer_career_text"
        Then I expect element "footer_career_text" is visible and click it. If not, print error "Footer career not visible"
        Then I expect is displayed check "careerPage_careerDescription_text". If not, print error "Career description not visible"
        Then I expect element "careerPage_jobAdsTestAutomationEngineer_text" is visible and click it. If not, print error "Career job advertisement test automation engineer not visible"

        Then I expect the title of the site to be "Test Otomasyon Mühendisi - Teknasyon". If not, print error "Site title is not the same as expected value"
        Given The click on "jobAdsPage_applyForJob_button" element

        Then I expect is not displayed check "jobaApplicationFormPage_allWarningMessages_text". If not, print error "Warning messages visible"
        Then I expect element "jobaApplicationFormPage_applyForJob_button" is visible and click it. If not, print error "Apply button not visible"
        Then I expect is displayed check "jobaApplicationFormPage_uploadCV_button". If not, print error "Upload CV not visible"
        Given The click on "jobaApplicationFormPage_nameSurname_textBox" element. Write "Abdurrahman DEMIRCI" in the relevant field
        Given The click on "jobaApplicationFormPage_email_textBox" element. Write "abdurrahmandemirci@teknasyon.com" in the relevant field
        Given The load file "./src/support/uploadFile/AbdurrahmanDEMİRCİ--CV.pdf" into element "jobaApplicationFormPage_uploadCV2_button"
        Given The click on "jobaApplicationFormPage_obligationToInform_checkBox" element
        Given The click on "jobaApplicationFormPage_notifyMeDifferentPositions_checkBox" element
        Given The click on "jobaApplicationFormPage_notifyMeTeknasyonGroup_checkBox" element
        # When Switch to existing frame "jobaApplicationFormPage_recaptcha_checkBox" and click
        # When Switch to parent frame
        # Then I expect is displayed check "jobaApplicationFormPage_allWarningMessages_text". If not, print error "Warning messages visible"
        Given The click on "jobaApplicationFormPage_applyForJob_button" element
        # Then I expect that search for "jobApplicationFormSuccessPage_applicationReceived_text" value in element "Başvurunuz alınmıştır." If not, print error "Message content is not correct"