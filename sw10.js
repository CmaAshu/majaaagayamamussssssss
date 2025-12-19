// --- DATA: 15 Questions Per Set (Extracted from 10.md) ---
const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "1. The first Auditor of a Company shall be appointed by the Board of Directors within:", o: ["30 days from the date of registration", "90 days from the date of registration", "30 days from the date of first AGM", "1 year from the date of registration"], c: "30 days from the date of registration" },
            { q: "2. Authorization for Government Audit is given by:", o: ["BOD", "Audit committee", "CAG", "None of the above"], c: "CAG (Comptroller and Auditor General)" },
            { q: "3. Maximum term of Individual Auditor:", o: ["1 term of 5 years", "2 terms of 5 years", "3 terms of 5 years", "None of the above"], c: "1 term of 5 years" },
            { q: "4. In case of a company other than a Government Company, any casual vacancy in the post of auditor is to be filled by the:", o: ["Board of Directors", "Managing Director", "Comptroller and Auditor General (CAG)", "Shareholders"], c: "Board of Directors" },
            { q: "5. An Audit Committee should have a minimum of __________ number of directors:", o: ["4", "3", "5", "6"], c: "3" },
            { q: "6. Unpaid dividend standing at the credit of Unpaid Dividend AC should be transferred to Investor Education and Protection Fund after __________ years of its remaining unpaid:", o: ["six", "eight", "seven", "five"], c: "seven" },
            { q: "7. Appointment of auditor for government company is done by:", o: ["BOD", "Audit committee", "Managing Director", "CAG"], c: "CAG" },
            { q: "8. Statutory Auditor is appointed by the shareholder in the:", o: ["General Meeting", "Statutory Meeting", "EGM", "Board Meeting"], c: "General Meeting" },
            { q: "9. Statutory Auditor can be removed by the:", o: ["Shareholders", "Audit committee", "BOD", "None of the above"], c: "Shareholders" },
            { q: "10. An individual auditor who has completed his term shall not be eligible for reappointment as auditor in the same company for:", o: ["Next 3 Years", "Next 5 Years", "Next 7 Years", "Next 8 Years"], c: "Next 5 Years" },
            { q: "11. Section 146 of the Companies Act, 2013 deals with:", o: ["Auditor not to render certain services", "Auditor to sign Audit Reports", "Auditor to attend general meeting", "Punishment for contravention"], c: "Auditor not to render certain services" },
            { q: "12. Remuneration of Auditors is covered under the following section of Companies Act, 2013:", o: ["Section 142", "Section 148", "Section 139", "Section 143"], c: "Section 142" },
            { q: "13. Any fraud to involve an amount of __________ is to be reported to the Central government:", o: ["₹5 crore or above", "₹100 crore or above", "₹1 crore or above", "₹10 crore or above"], c: "₹1 crore or above" },
            { q: "14. Auditor not to render certain services under section:", o: ["139", "144", "142", "145"], c: "144" },
            { q: "15. Any casual vacancy in a government company is filled by CAG within __________ days:", o: ["15 days", "30 days", "45 days", "60 days"], c: "30 days" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "16. The company shall inform the auditor concerned of his or its appointment, and also file a notice of such appointment with the Registrar within fifteen days in Form:", o: ["ADT-1", "ADT-2", "ADT-3", "None of these"], c: "ADT-1" },
            { q: "17. A Cost Auditor submits his report to:", o: ["Board of Directors", "Government", "Shareholders", "Statutory Auditor"], c: "Board of Directors" },
            { q: "18. Form for maintenance of Cost Records by the Company is:", o: ["CRA-1", "CRA-2", "CRA-3", "CRA-4"], c: "CRA-1" },
            { q: "19. Cost Audit can be done by the:", o: ["Employee of the organization", "Cost Auditor", "Secretarial Auditor", "None of the above"], c: "Cost Auditor" },
            { q: "20. Secretarial Audit can be done by:", o: ["Employee of the organization", "Cost Auditor", "Secretarial Auditor", "None of the above"], c: "Secretarial Auditor" },
            { q: "21. Cost Audit Report is submitted to Board of Directors in Form No.:", o: ["CRA-1", "CRA-2", "CRA-3", "CRA-4"], c: "CRA-3" },
            { q: "22. Cost Auditor is appointed by:", o: ["Audit Committee", "Board of Directors", "Board of Directors on recommendation from Audit Committee", "None of the above"], c: "Board of Directors on recommendation from Audit Committee" },
            { q: "23. Secretarial Audit is covered under Section __________ of Companies Act, 2013:", o: ["Section 204", "Section 148", "Section 139", "None of the above"], c: "Section 204" },
            { q: "24. Secretarial Audit is applicable to the public sector company having the turnover of:", o: ["100 crores", "200 crores", "250 crores", "300 crores"], c: "250 crores" },
            { q: "25. Form for Secretarial Audit Report is:", o: ["MR-2", "MR-3", "MR-4", "MR-5"], c: "MR-3" },
            { q: "26. Which of the following is NOT an audit risk?", o: ["Inherent Risk", "Detection Risk", "Control Risk", "Omission Risk"], c: "Omission Risk" },
            { q: "27. Dividend cannot be paid out of:", o: ["Current year's profit after providing depreciation", "Undistributed profits for any previous financial year or years after providing for depreciation", "Profit on revaluation of any fixed assets", "Money provided by the Central Government or a State Government"], c: "Profit on revaluation of any fixed assets" },
            { q: "28. Permanent Audit File does NOT contain:", o: ["A record of study and evaluation of internal control system", "Significant audit observations of earlier years", "Copies of management letters", "Analysis of significant ratios and trends"], c: "Copies of management letters" },
            { q: "29. Audit Procedures to obtain audit evidences include:", o: ["Compliance Procedure", "Substantive Procedure", "Both A and B", "Neither A nor B"], c: "Both A and B" },
            { q: "30. The __________ is also expected to provide the resources needed and select staff members to accompany the auditors:", o: ["Auditor", "Client", "Internal auditor", "Auditee"], c: "Auditee" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "31. SA 230 stands for:", o: ["Quality control for an audit of financial Statements", "Agreeing the terms of Audit engagements", "Audit Documentation", "Responsibility of Joint Auditor"], c: "Audit Documentation" },
            { q: "32. SA 300 stands for:", o: ["Responsibility of Joint Auditor", "Overall planning of audit", "Audit Planning", "None of the above"], c: "Audit Planning" },
            { q: "33. SA 530 stands for:", o: ["Audit Documentation", "Audit Sampling", "Responsibility of Joint Auditor", "Agreeing the terms of Audit Engagements"], c: "Audit Sampling" },
            { q: "34. An auditor is required to retain the books of accounts for how long?", o: ["1 year", "5 years", "7 years", "None of the above"], c: "7 years" },
            { q: "35. As per SQC 1, Audit working papers should be retained for a period of:", o: ["2 years", "5 years", "7 years", "10 years"], c: "7 years" },
            { q: "36. Which of the following services CANNOT be rendered by an auditor as per Companies Act 2013?", o: ["Vouching", "Verification of assets and liabilities", "Issuing certificates on relevant matters", "Providing investment advisory services"], c: "Providing investment advisory services" },
            { q: "37. Various types of quality audits are:", o: ["Product", "Process", "Management system", "All of the above"], c: "All of the above" },
            { q: "38. When the auditor is an employee of the organization being audited, the audit is classified as a __________ Quality audit:", o: ["Internal", "External", "Compliance", "Both A and B"], c: "Internal" },
            { q: "39. The most comprehensive type of audit is the __________ system audit, which examines suitability and effectiveness of the system as a whole:", o: ["Quantity", "Quality", "Preliminary", "Sequential"], c: "Quality" },
            { q: "40. Audit is a fact-finding process that compares actual results with:", o: ["Specified standards and plans", "Expected results", "Premature results", "Preliminary results"], c: "Specified standards and plans" },
            { q: "41. CAAT stands for:", o: ["Cornwall Air Ambulance Trust", "Children Air Ambulance Trust", "Center for alternatives to Animal Testing", "Computer Assisted Auditing Technique"], c: "Computer Assisted Auditing Technique" },
            { q: "42. Chartered Accountants have to retain the working papers for:", o: ["2 years", "3 years", "5 years", "7 years"], c: "7 years" },
            { q: "43. SA 210 stands for:", o: ["Quality control for an audit of financial Statements", "Agreeing the terms of Audit engagements", "Audit Documentation", "Responsibility of Joint Auditor"], c: "Agreeing the terms of Audit engagements" },
            { q: "44. Current Audit file contains:", o: ["AOA and MOA of the company", "Analysis of significant ratios and trends", "Notes regarding significant accounting policies", "Audit programme"], c: "Audit programme" },
            { q: "45. The purpose of Internal audit is to detect the error in the:", o: ["Accounting records", "Employees records", "Cash records", "Bank records"], c: "Accounting records" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "46. The function of internal audit is meant for:", o: ["Dearth of Staff", "Dearth of time", "Dearth of time and funds", "Dearth of funds"], c: "Dearth of time and funds" },
            { q: "47. Check list contains the instruction to be followed by the:", o: ["Internal Auditor", "External Auditor", "Audit Assistants", "Employee of the organization"], c: "Audit Assistants" },
            { q: "48. The __________ shall act as the secretary of the Audit Committee:", o: ["Employee", "Auditor", "Company Secretary", "Chairman"], c: "Company Secretary" },
            { q: "49. A nomination and remuneration committee should have __________ directors:", o: ["3", "2", "1", "4"], c: "3" },
            { q: "50. If the Debentures are issued as collateral security either to Banks or Creditors the Auditor needs to ensure that such issue is approved by:", o: ["Shareholders", "Board of Directors", "Debenture Trustee", "Audit Committee"], c: "Board of Directors" },
            { q: "51. Which of the following is an audit risk?", o: ["Financial Risk", "Operational Risk", "Control Risk", "Systematic Risk"], c: "Control Risk" },
            { q: "52. Internal Auditor is appointed by:", o: ["The Management", "The Shareholders", "The Government", "The Statutory Body"], c: "The Management" },
            { q: "53. The work of one clerk is automatically check by another clerk is called:", o: ["Internal control", "Internal check", "Internal audit", "None of the above"], c: "Internal check" },
            { q: "54. An internal control includes:", o: ["Internal Audit", "Internal Check", "Both A and B", "None of the above"], c: "Both A and B" },
            { q: "55. The most important objective of internal audit is:", o: ["Early detection of errors and fraud", "Facilitating final audit", "Early finalization of annual account", "Ensuring systematic accounting"], c: "Early detection of errors and fraud" },
            { q: "56. Cut-off testing is performed during audit of sales to address the following assertion:", o: ["Occurrence", "Measurement", "Cut-off", "All of these"], c: "Cut-off" },
            { q: "57. Test checking reduces the:", o: ["Power of an auditor", "Expenses of auditor", "Work of an auditor", "Liability of an auditor"], c: "Work of an auditor" },
            { q: "58. A flow chart, made by the auditor, of an entity's internal control system is a graphic representation that depicts the auditor's:", o: ["Understanding of the system", "Understanding of fraud risk factors", "Documentation of assessment of control risk", "Both 1 and 3"], c: "Understanding of the system" },
            { q: "59. Benefits of Audit Sampling are:", o: ["It reduces the workload of the auditor", "It saves time and cost", "It gives dependable result as it is based on statistical sampling methods", "All of these"], c: "All of these" },
            { q: "60. Which of the following isare method to obtain Audit Evidence:", o: ["Observation", "Computation", "Analytical Review", "All of the above"], c: "All of the above" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "61. SA-700 stands for:", o: ["Audit Planning", "Joint Auditor", "Forming an opinion and reporting on Financial Statement", "None of the above"], c: "Forming an opinion and reporting on Financial Statement" },
            { q: "62. An auditor should submit a Disclaimer of Opinion when:", o: ["He is satisfied with the truth and fairness of financial statements", "He has certain reservations as to the presentation of truth and fairness in financial statements", "Some material information is not available", "The effect of any disagreement with the management is not so material"], c: "Some material information is not available" },
            { q: "63. Objective of an Audit is to formulate an overall opinion on:", o: ["Cost Statement", "Financial Statement", "Books of Accounts", "None of these"], c: "Financial Statement" },
            { q: "64. An audit report is the __________ product of audit:", o: ["Main", "Final", "Semi final", "None of the above"], c: "Final" },
            { q: "65. The audit report where an Auditor gives an opinion on the truth and fairness of financial statements, subject to certain reservations, is known as:", o: ["Unqualified Audit Report", "Qualified Audit Report", "Adverse Audit Report", "Disclaimer of Opinion"], c: "Qualified Audit Report" },
            { q: "66. Which of the following statements is true?", o: ["Internal check is an independent appraisal", "Internal check is an allocation of duties among the staff in such a way that it eliminates the chances of any duplicity of work", "Internal check is an alternative to internal audit", "Internal check is a reactive process"], c: "Internal check is an allocation of duties among the staff in such a way that it eliminates the chances of any duplicity of work" },
            { q: "67. Which of the following is NOT a basic principle of governing an audit as per SA 200?", o: ["Integrity", "Confidentiality", "Subjectivity", "Audit evidence"], c: "Subjectivity" },
            { q: "68. Audit working paper is the property of the:", o: ["Auditor", "Government", "Client", "Registrar of Companies"], c: "Auditor" },
            { q: "69. Which of the following is a part of functional classification of audit?", o: ["Continuous audit", "Internal audit", "Cost audit", "Tax audit"], c: "Internal audit" },
            { q: "70. Which of the following isare step s of environmental audit?", o: ["Selection and scheduling of facility to audit", "Assessment of Internal control", "production of draft report", "All of the above"], c: "All of the above" },
            { q: "71. Underwriting Agreements are of:", o: ["One type", "Two types", "Three types", "Four types"], c: "Two types" },
            { q: "72. Segment Reporting is covered under:", o: ["AS 16", "AS 17", "AS 18", "AS 19"], c: "AS 17" },
            { q: "73. On redemption of Debentures, the amount lying in Debenture Redemption Reserve, which is no longer necessary to be retained, should be transferred to:", o: ["Revaluation Reserve", "Securities Premium Account", "Capital Reserve", "General Reserve"], c: "General Reserve" },
            { q: "74. Rate of provisioning by a Bank for Advances doubtful for more than 1 year but less than 3 years is:", o: ["25%", "40%", "60%", "100%"], c: "40%" },
            { q: "75. Balance of Interest Accrued on Security Deposit AC of an Electricity company should be shown:", o: ["Under Current Liability", "Under Non-current Liability", "Under Current Asset", "Under Non-current Asset"], c: "Under Non-current Liability" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "76. Which of the following items is NOT a part of cash flow from operating activities?", o: ["Collection from customers", "Payment of outstanding wages", "Payment to suppliers of machinery", "Advances to foreign suppliers for raw materials"], c: "Payment to suppliers of machinery" },
            { q: "77. Which of the following is NOT an audit risk?", o: ["Inherent Risk", "Detection Risk", "Control Risk", "Omission Risk"], c: "Omission Risk" },
            { q: "78. Responsibility of Joint Auditor is covered under:", o: ["SA 230", "SA 250", "SA 299", "SA 300"], c: "SA 299" },
            { q: "79. Audit Documentation is related to:", o: ["SA 220", "SA 230", "SA 250", "SA 310"], c: "SA 230" },
            { q: "80. SA 530 stands for:", o: ["Audit Documentation", "Audit Sampling", "Responsibility of Joint Auditor", "Agreeing the terms of Audit Engagements"], c: "Audit Sampling" },
            { q: "81. An auditor should submit a Disclaimer of Opinion when:", o: ["He is satisfied with the truth and fairness of financial statements", "He has certain reservations as to the presentation of truth and fairness in financial statements", "Some material information is not available", "The effect of any disagreement with the management is not so material"], c: "Some material information is not available" },
            { q: "82. In case of a company other than a Government Company, any casual vacancy in the post of auditor is to be filled by the:", o: ["Board of Directors", "Managing Director", "Comptroller and Auditor General (CAG)", "Shareholders"], c: "Board of Directors" },
            { q: "83. An Audit Committee should have a minimum of __________ directors:", o: ["4", "3", "5", "6"], c: "3" },
            { q: "84. SA 530 stands for:", o: ["Audit Documentation", "Audit Sampling", "Responsibility of Joint Auditor", "Agreeing the terms of Audit Engagements"], c: "Audit Sampling" },
            { q: "85. Unpaid dividend standing at the credit of Unpaid Dividend AC should be transferred to Investor Education and Protection Fund after __________ years of its remaining unpaid:", o: ["six", "eight", "seven", "five"], c: "seven" },
            { q: "86. Which of the following services CANNOT be rendered by an auditor as per Companies Act, 2013?", o: ["Vouching", "Verification of assets and liabilities", "Issuing certificates on relevant matters", "Providing investment advisory services"], c: "Providing investment advisory services" },
            { q: "87. The first Auditor of a Company shall be appointed by the Board of Directors within:", o: ["30 days from the date of registration", "90 days from the date of registration", "30 days from the date of first AGM", "1 year from the date of registration"], c: "30 days from the date of registration" },
            { q: "88. Cost Audit Report is submitted to Board of Directors in Form No.:", o: ["CRA-1", "CRA-2", "CRA-3", "CRA-4"], c: "CRA-3" },
            { q: "89. Form for Secretarial Audit Report is:", o: ["MR-2", "MR-3", "MR-4", "MR-5"], c: "MR-3" },
            { q: "90. Audit of debenture is covered under section:", o: ["70", "71", "72", "73"], c: "71" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "91. Premium on redemption of redeemable preference shares can be paid out of:", o: ["Capital Redemption Reserve Account", "Existing Shares Premium Account", "Proceed of fresh issue of shares", "All of the above"], c: "All of the above" },
            { q: "92. Which of the following is NOT a component of Cash Flow Statement?", o: ["Cash payments to suppliers for goods and services", "Charging of Depreciation", "Cash advances and loans made to third parties", "Cash repayments of amounts borrowed"], c: "Charging of Depreciation" },
            { q: "93. The Electricity Act, 2003 replaced which of the following three existing legislations?", o: ["The Indian Electricity Act, 1910", "The Electricity Supply Act, 1948", "The Electricity Regulatory Commissions Act, 1998", "All of the above"], c: "All of the above" },
            { q: "94. General Ledger of a Banking Company does NOT contain:", o: ["Control Accounts of all personal ledgers", "Assets Accounts", "Contra Accounts", "Balance Sheet"], c: "Balance Sheet" },
            { q: "95. Which of the following is a principle of insurance?", o: ["Principle of indemnity", "Insurable interest", "Principle of uberrimae fidei", "All of the above"], c: "All of the above" },
            { q: "96. Underwriting commission payable on the shares taken up by the promoters is:", o: ["2.5%", "2%", "5%", "Nil"], c: "Nil" },
            { q: "97. If the Debentures are issued as collateral security either to Banks or Creditors the Auditor needs to ensure that such issue is approved by:", o: ["Shareholders", "Board of Directors", "Debenture Trustee", "Audit Committee"], c: "Board of Directors" },
            { q: "98. As per SQC 1, Audit working papers should be retained for a period of:", o: ["2 years", "5 years", "7 years", "10 years"], c: "7 years" },
            { q: "99. Current Audit files contains:", o: ["Articles of Association and Memorandum of Association", "Analysis of significant ratios and trends", "Notes regarding significant Accounting policies", "Audit Programme"], c: "Audit Programme" },
            { q: "100. Form for maintenance of Cost Records of a Company is:", o: ["CRA-1", "CRA-2", "CRA-3", "CRA-4"], c: "CRA-1" },
            { q: "101. Which of the following reserves CANNOT be used for the purpose of issuing bonus shares?", o: ["Revaluation Reserve", "Dividend Equalization Reserve", "Capital Redemption Reserve", "General Reserve"], c: "Revaluation Reserve" },
            { q: "102. In Case of Life Insurance Business, Bonus may be of:", o: ["One type", "Two types", "Three types", "Four types"], c: "Three types" },
            { q: "103. Instalment of principal amount of long-term loan payable within next 12 months is shown under Balance Sheet of a company under the heading:", o: ["Non-current Assets", "Non-current Liabilities", "Current Assets", "Current Liabilities"], c: "Current Liabilities" },
            { q: "104. Which of the following is NOT a condition of buy-back of securities?", o: ["Both fully and partly paid-up securities can be bought back", "Buy-back must be authorised by the Articles of Association", "Buy-back must be authorised by passing a special resolution in general meeting", "Buy-back should be completed within 1 year from the date of passing of special resolution"], c: "Both fully and partly paid-up securities can be bought back" },
            { q: "105. A banking company is required to maintain unsecured portion of doubtful advances. provision on:", o: ["25%", "40%", "50%", "100%"], c: "100%" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "106. Which of the following is correct?", o: ["Debenture carries a fixed rate of dividend", "A company limited by shares may issue irredeemable preference shares", "Unmarked applications are those applications that bear the stamp of the underwriter", "Except as provided in Section 54, a company shall not issue shares at a discount"], c: "Except as provided in Section 54, a company shall not issue shares at a discount" },
            { q: "107. Permanent Audit file contains:", o: ["Copies of management letters", "Audit programme", "Analysis of transaction and balances", "Analysis of significant ratios and trends"], c: "Analysis of significant ratios and trends" },
            { q: "108. Audit of debenture is covered under section:", o: ["70", "71", "72", "73"], c: "71" },
            { q: "109. Internal Auditor is appointed by:", o: ["Audit Committee", "Shareholders in General Meeting", "Extraordinary General Meeting", "Board of Directors"], c: "Board of Directors" },
            { q: "110. Form for Secretarial Audit Report is:", o: ["MR-2", "MR-3", "MR-4", "MR-5"], c: "MR-3" },
            { q: "111. Profit on forfeiture and re-issue of equity shares is credited to:", o: ["Dividend Equalization Reserve", "General Reserve", "Capital Reserve", "Securities Premium"], c: "Capital Reserve" },
            { q: "112. In a Balance Sheet prepared under Schedule III of Companies Act, 2013, Share application money pending allotment shall be shown:", o: ["Under Shareholders Fund", "Under Non-current Liabilities", "Under Current Liabilities", "As a separate line item"], c: "As a separate line item" },
            { q: "113. In case of Cash Flow Statement prepared under Direct Method, decrease in current liabilities is:", o: ["Added to cash flow from operating activities", "Deducted to cash flow from operating activities", "Added to cash flow from investing activities", "None of the above"], c: "Deducted to cash flow from operating activities" },
            { q: "114. For calculation of depreciation, Central Electricity Regulatory Commission has recommended:", o: ["Straight Line Method", "Optimized Depreciated Replacement Cost Method", "Written Down Value Method", "Both a and b"], c: "Both a and b" },
            { q: "115. In case of Electricity Company while calculating depreciation for the purpose of tariff as per Regulation 21, the salvage value of the Asset shall be considered as:", o: ["3%", "5%", "10%", "None of the above"], c: "10%" },
            { q: "116. As per Section 52 of Companies Act 2013, Securities Premium AC CANNOT be used:", o: ["To issue fully paid up bonus shares", "To pay interim dividend", "To write off the discount on issue of debentures", "To write off the premium on redemption of preference shares"], c: "To pay interim dividend" },
            { q: "117. A nomination and remuneration committee should have __________ directors:", o: ["5", "10", "2", "3"], c: "3" },
            { q: "118. An individual auditor who has completed his term shall not be eligible for reappointment as auditor in the same company for:", o: ["Next 3 Years", "Next 5 Years", "Next 7 Years", "Next 8 Years"], c: "Next 5 Years" },
            { q: "119. Proving the truth means vouching of:", o: ["Payment", "Expenses", "Assets", "Liabilities"], c: "Expenses" },
            { q: "120. Secretarial Audit is applicable to the Public Company having the paid-up share capital of:", o: ["50 crore", "75 crore", "100 crore", "200 crore"], c: "100 crore" }
        ]
    }
];