/**
 * Senior Data Analyst & JS Developer Extraction
 * Task: PDF to Structured JSON (JavaScript File)
 * Source: MCQ_Bank_Paper_15.pdf
 * Total Questions: 173
 */

const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "As per section 115JB, every taxpayer being a company is liable to pay MAT, if the Income tax payable on the total income, computed as per the provisions of the Income-tax Act in respect of any year is less than", o: ["15.50%", "18.00%", "15.00%", "20.00%"], c: "15.00%" },
            { q: "MAT shall not apply to any income accruing or arising to a company from:", o: ["Life insurance business", "Banking business", "Business of transmission of electricity", "All of the above"], c: "Life insurance business" },
            { q: "Book profit for the purposes of section 115JB means net profit as shown in the Statement of the Profit and Loss prepared in accordance with of the Companies Act as increased and decreased by certain items prescribed in this regard.", o: ["Schedule V", "Schedule IV", "Schedule III", "Schedule II"], c: "Schedule III" },
            { q: "Every company to whom the provisions of MAT apply is required to obtain a report from a chartered accountant in Form No. on or before the due date of filing the return of income.", o: ["29", "29A", "29B", "29C"], c: "29B" },
            { q: "While computing book profit u/s 115JB, one of the following is required to be reduced from the net profit:", o: ["The amount of income to which any of the provisions of section 10 apply", "The amount of income to which any of the provisions of section 11 apply", "The amount of income to which any of the provisions of section 12 apply", "All of the above"], c: "All of the above" },
            { q: "What is the due date of filling the return of income in case of a company who is required to furnish a report in Form No. 3CEB?", o: ["30th September", "31st October", "30th November", "31st December"], c: "30th November" },
            { q: "The provisions of MAT are not applicable to:", o: ["A foreign company which is a resident of a country with which India has a DTAA and such company does not have a PE in India", "A foreign company which is a resident of a country with which India does not have a DTAA and such company is not required to seek registration under the Companies Act", "Both of the above", "None of the above"], c: "Both of the above" },
            { q: "Which of the following items is added back to the net profit while computing book profit u/s 115JB?", o: ["Amount of income tax paid or payable and the provisions therefor", "Amount carried to any reserves, by whatever name called", "Amount or amounts set aside to provisions made for meeting liabilities, other than ascertained liabilities", "All of the above"], c: "All of the above" },
            { q: "The amount of MAT credit can be carried forward for a maximum period of:", o: ["8 assessment years", "10 assessment years", "15 assessment years", "Indefinitely"], c: "15 assessment years" },
            { q: "In case of a person being a unit of an International Financial Services Centre and deriving its income solely in convertible foreign exchange, the rate of MAT shall be:", o: ["9.00%", "15.00%", "12.00%", "18.50%"], c: "9.00%" },
            { q: "Under section 115JC, the rate of Alternate Minimum Tax (AMT) for individuals, HUF, AOP, BOI and artificial juridical person is:", o: ["15.00%", "18.50%", "12.00%", "20.00%"], c: "18.50%" },
            { q: "AMT is applicable to a non-corporate taxpayer if the adjusted total income exceeds:", o: ["₹ 10 lakhs", "₹ 20 lakhs", "₹ 50 lakhs", "₹ 1 crore"], c: "₹ 20 lakhs" },
            { q: "While computing 'Adjusted Total Income' for AMT, the following is added back to the total income:", o: ["Deduction claimed u/s 10AA", "Deductions claimed under Part C of Chapter VI-A (except 80JJAA)", "Deduction claimed u/s 35AD as reduced by depreciation allowable u/s 32", "All of the above"], c: "All of the above" },
            { q: "The rate of AMT for a cooperative society shall be:", o: ["15.00%", "18.50%", "9.00%", "12.00%"], c: "15.00%" },
            { q: "AMT credit can be carried forward for a maximum period of:", o: ["8 years", "10 years", "15 years", "20 years"], c: "15 years" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "A trust created for charitable or religious purposes is exempt from tax u/s 11 provided it spends at least of its income for such purposes in India.", o: ["50%", "75%", "85%", "100%"], c: "85%" },
            { q: "If a trust accumulates its income for a specific purpose, it must file Form No. 10 and the accumulation period should not exceed:", o: ["3 years", "5 years", "8 years", "10 years"], c: "5 years" },
            { q: "Anonymous donations received by a charitable trust (other than religious trust) are taxable @ 30% if they exceed:", o: ["5% of total donations", "₹ 1,00,000", "Higher of 5% of total donations or ₹ 1,00,000", "₹ 5,00,000"], c: "Higher of 5% of total donations or ₹ 1,00,000" },
            { q: "Voluntary contributions received by a trust with a specific direction that they shall form part of the corpus of the trust are:", o: ["Fully taxable", "Fully exempt u/s 11(1)(d)", "Taxable if not spent within 1 year", "None of the above"], c: "Fully exempt u/s 11(1)(d)" },
            { q: "Registration of a charitable trust is mandatory under section:", o: ["12A/12AB", "10(23C)", "80G", "11"], c: "12A/12AB" },
            { q: "Application for registration u/s 12AB should be made at least before the expiry of the period of provisional registration.", o: ["3 months", "6 months", "1 month", "9 months"], c: "6 months" },
            { q: "Tax on accreted income of a trust (Exit Tax) u/s 115TD is payable at:", o: ["30%", "Maximum Marginal Rate", "15%", "Corporate tax rate"], c: "Maximum Marginal Rate" },
            { q: "Section 115TD is triggered if a trust:", o: ["Is converted into a non-charitable form", "Merges with an entity having dissimilar objects", "Fails to apply for renewal of registration", "All of the above"], c: "All of the above" },
            { q: "Business income of a charitable trust is exempt only if the business is:", o: ["Incidental to the attainment of the objectives of the trust", "Separate books of account are maintained", "Both of the above", "Business income is never exempt"], c: "Both of the above" },
            { q: "For the purpose of charitable objects, 'Advancement of any other object of general public utility' shall not be a charitable purpose if receipts from commercial activity exceed of the total receipts.", o: ["10%", "20%", "25%", "50%"], c: "20%" },
            { q: "Dividend income received by a business trust from a special purpose vehicle (SPV) is:", o: ["Fully taxable in the hands of the trust", "Exempt in the hands of the trust", "Taxable in the hands of unit holders", "None of the above"], c: "Exempt in the hands of the trust" },
            { q: "Which of the following business trusts is regulated by SEBI?", o: ["Real Estate Investment Trust (REIT)", "Infrastructure Investment Trust (InvIT)", "Both REIT and InvIT", "Mutual Funds"], c: "Both REIT and InvIT" },
            { q: "In the context of REIT, the SPV must be an Indian company in which the business trust holds at least of the equity share capital.", o: ["26%", "50%", "51%", "100%"], c: "50%" },
            { q: "Interest income received by a non-resident unit holder from a business trust is taxable @:", o: ["5% u/s 115A", "10%", "20%", "Maximum Marginal Rate"], c: "5% u/s 115A" },
            { q: "Rental income from real estate assets owned directly by a REIT is:", o: ["Exempt in the hands of REIT and taxable in the hands of unit holders", "Taxable in the hands of REIT", "Exempt for both", "None of the above"], c: "Exempt in the hands of REIT and taxable in the hands of unit holders" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "A person is a 'Resident' in India if he stays in India for at least during the previous year.", o: ["60 days", "90 days", "182 days", "365 days"], c: "182 days" },
            { q: "An Indian citizen who leaves India for employment purposes becomes resident only if his stay is at least:", o: ["182 days", "60 days", "120 days", "150 days"], c: "182 days" },
            { q: "Section 6(1A) provides for 'Deemed Residency' for an Indian citizen if his total income (other than foreign sources) exceeds ₹ 15 lakhs and:", o: ["He is not liable to tax in any other country", "He stays in India for 120 days", "He is a person of Indian origin", "He has a house in India"], c: "He is not liable to tax in any other country" },
            { q: "Place of Effective Management (POEM) is a criterion to determine the residential status of:", o: ["An Individual", "A Company", "A Firm", "A Local Authority"], c: "A Company" },
            { q: "A company is said to be engaged in 'Active Business Outside India' (ABOI) if its passive income is not more than of its total income.", o: ["25%", "50%", "75%", "10%"], c: "50%" },
            { q: "Income is deemed to accrue or arise in India u/s 9(1)(i) if it is earned through or from any in India.", o: ["Business connection", "Property", "Asset or source of income", "All of the above"], c: "All of the above" },
            { q: "Salary earned for services rendered in India is deemed to accrue or arise in India:", o: ["Even if it is received outside India", "Only if it is received in India", "Only if paid by Government", "None of the above"], c: "Even if it is received outside India" },
            { q: "Interest, Royalty or Fees for Technical Services (FTS) payable by the Government is:", o: ["Deemed to accrue or arise in India", "Exempt from tax", "Taxable only on receipt basis", "None of the above"], c: "Deemed to accrue or arise in India" },
            { q: "Under the 'Significant Economic Presence' (SEP) rule, a non-resident has a business connection in India if transactions for goods/services exceed:", o: ["₹ 50 lakhs", "₹ 1 crore", "₹ 2 crores", "₹ 5 crores"], c: "₹ 2 crores" },
            { q: "The term 'Royalties' u/s 9(1)(vi) includes consideration for the use of:", o: ["Patent, invention, model", "Secret formula or process", "Copyright of literary, artistic or scientific work", "All of the above"], c: "All of the above" },
            { q: "Non-resident Indians (NRIs) can opt to be taxed under Chapter XII-A on investment income from specified assets @:", o: ["10%", "15%", "20%", "25%"], c: "20%" },
            { q: "Long-term capital gains on transfer of specified foreign exchange assets for an NRI is taxable @:", o: ["10%", "12.50%", "20%", "15%"], c: "10%" },
            { q: "Under section 115A, the rate of tax on dividend income (other than SPV dividend) for a non-resident is:", o: ["10%", "15%", "20%", "30%"], c: "20%" },
            { q: "Equalisation Levy @ 6% is applicable on payments made to a non-resident for:", o: ["Online advertisement", "Digital platform for supply of goods", "E-commerce supply or services", "Technical services"], c: "Online advertisement" },
            { q: "Equalisation Levy @ 2% is applicable on the amount of consideration received by an e-commerce operator if the annual turnover exceeds:", o: ["₹ 10 lakhs", "₹ 50 lakhs", "₹ 1 crore", "₹ 2 crores"], c: "₹ 2 crores" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "Transfer Pricing provisions are contained in sections of the Income-tax Act.", o: ["90 to 92", "92 to 92F", "94A to 94B", "115JB to 115JC"], c: "92 to 92F" },
            { q: "International transaction means a transaction between two or more , either or both of whom are non-residents.", o: ["Companies", "Associated Enterprises", "Relatives", "Partners"], c: "Associated Enterprises" },
            { q: "Two enterprises are associated if one enterprise holds shares carrying at least of the voting power in the other enterprise.", o: ["10%", "20%", "26%", "51%"], c: "26%" },
            { q: "The 'Arm's Length Price' (ALP) is determined using which of the following methods?", o: ["Comparable Uncontrolled Price (CUP) Method", "Resale Price Method (RPM)", "Cost Plus Method (CPM)", "All of the above"], c: "All of the above" },
            { q: "The 'Range Concept' for ALP determination is applicable only if there are at least comparable prices.", o: ["3", "5", "6", "10"], c: "6" },
            { q: "If the Range Concept is not applicable, ALP is the of all the comparable prices.", o: ["Arithmetic Mean", "Median", "Mode", "Weighted Average"], c: "Arithmetic Mean" },
            { q: "The tolerance limit for variation between ALP and actual transaction price (notified by Govt) for wholesale trading is:", o: ["1%", "2%", "3%", "5%"], c: "1%" },
            { q: "Secondary adjustment in transfer pricing is required if the primary adjustment exceeds:", o: ["₹ 50 lakhs", "₹ 1 crore", "₹ 2 crores", "₹ 5 crores"], c: "₹ 1 crore" },
            { q: "The time limit for repatriation of excess money to India in a secondary adjustment case is:", o: ["30 days", "60 days", "90 days", "180 days"], c: "90 days" },
            { q: "Safe Harbour Rules provide a for the determination of ALP to provide certainty to taxpayers.", o: ["Mathematical formula", "Range of prices", "Fixed percentage or margin", "None of the above"], c: "Fixed percentage or margin" },
            { q: "Advance Pricing Agreement (APA) is valid for a maximum period of:", o: ["3 years", "5 years", "10 years", "Indefinitely"], c: "5 years" },
            { q: "The 'Rollback' provision in an APA can cover up to previous years.", o: ["2", "4", "5", "10"], c: "4" },
            { q: "Thin Capitalisation rules u/s 94B restrict the deduction of interest paid to an AE to of EBITDA.", o: ["10%", "20%", "30%", "50%"], c: "30%" },
            { q: "Section 94B is applicable if the interest expenditure exceeds:", o: ["₹ 50 lakhs", "₹ 1 crore", "₹ 2 crores", "₹ 5 crores"], c: "₹ 1 crore" },
            { q: "Master File (Form 3CEAA) is required to be filed by a constituent entity of an international group if consolidated revenue exceeds:", o: ["₹ 100 crores", "₹ 500 crores", "₹ 250 crores", "₹ 1,000 crores"], c: "₹ 500 crores" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "Double Taxation Avoidance Agreement (DTAA) is entered into by the Central Government under section:", o: ["90", "91", "92", "44"], c: "90" },
            { q: "Unilateral relief from double taxation is provided to a resident in India under section:", o: ["90", "90A", "91", "10"], c: "91" },
            { q: "Tax Residency Certificate (TRC) is mandatory for a non-resident to claim DTAA benefits as per section:", o: ["90(4)", "92C", "195", "115A"], c: "90(4)" },
            { q: "The 'General Anti-Avoidance Rules' (GAAR) provisions are contained in Chapter of the Act.", o: ["X", "X-A", "XII", "XII-A"], c: "X-A" },
            { q: "GAAR is applicable if the main purpose of an arrangement is to obtain a 'Tax Benefit' and it exceeds:", o: ["₹ 1 crore", "₹ 3 crores", "₹ 5 crores", "₹ 10 crores"], c: "₹ 3 crores" },
            { q: "An arrangement is an 'Impermissible Tax Avoidance Arrangement' (ITAA) if it:", o: ["Creates rights not at arm's length", "Results in misuse or abuse of provisions", "Lacks commercial substance", "All of the above"], c: "All of the above" },
            { q: "The approving authority for GAAR is the:", o: ["Assessing Officer", "Principal Commissioner", "Approving Panel (headed by High Court Judge)", "CBDT"], c: "Approving Panel (headed by High Court Judge)" },
            { q: "The 'Dispute Resolution Panel' (DRP) consists of a collegium of three:", o: ["High Court Judges", "Commissioners of Income Tax", "Members of ITAT", "CBDT Members"], c: "Commissioners of Income Tax" },
            { q: "An eligible assessee can file objections before the DRP against the:", o: ["Final Assessment Order", "Draft Assessment Order", "Intimation u/s 143(1)", "Show cause notice"], c: "Draft Assessment Order" },
            { q: "DRP must issue directions for the guidance of the AO within from the end of the month in which the draft order was received.", o: ["6 months", "9 months", "12 months", "3 months"], c: "9 months" },
            { q: "Under the Black Money Act, 2015, undisclosed foreign assets are taxable @:", o: ["30%", "60%", "10%", "MMR"], c: "30%" },
            { q: "The penalty for non-disclosure of foreign assets under the Black Money Act is times the tax amount.", o: ["1", "2", "3", "5"], c: "3" },
            { q: "Authority for Advance Rulings (AAR) has been replaced by:", o: ["Dispute Resolution Committee", "Board for Advance Rulings", "Settlement Commission", "Income Tax Ombudsman"], c: "Board for Advance Rulings" },
            { q: "An advance ruling is binding on:", o: ["The applicant who sought it", "The Income-tax authorities in respect of the applicant", "Both of the above", "All taxpayers in India"], c: "Both of the above" },
            { q: "Section 115BAA provides for a concessional corporate tax rate (subject to conditions) of:", o: ["15%", "22%", "25%", "30%"], c: "22%" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "Under section 115BAB, a new domestic manufacturing company is taxable at a rate of:", o: ["15%", "22%", "25%", "10%"], c: "15%" },
            { q: "Surcharge @ 10% is applicable on the tax computed u/s 115BAA or 115BAB:", o: ["Mandatory", "If total income > ₹ 1 crore", "If total income > ₹ 10 crores", "None"], c: "Mandatory" },
            { q: "Tax on dividend received by a domestic company from a foreign company in which it holds 26% shareholding is taxable @:", o: ["15% u/s 115BBDA", "15% u/s 115BBD", "Taxable at normal rates", "Exempt"], c: "Taxable at normal rates" },
            { q: "The rate of tax on winnings from lotteries, crossword puzzles, etc. u/s 115BB is:", o: ["20%", "30%", "10%", "Normal slab rates"], c: "30%" },
            { q: "Tax on undisclosed income u/s 115BBE is payable at the rate of:", o: ["30%", "60%", "15%", "Maximum Marginal Rate"], c: "60%" },
            { q: "Surcharge on tax computed u/s 115BBE is applicable @:", o: ["10%", "15%", "25%", "37%"], c: "25%" },
            { q: "Section 115UB provides for the tax treatment of income of a:", o: ["Business Trust", "Securitisation Trust", "Investment Fund (Category I & II AIF)", "Real Estate Investment Trust"], c: "Investment Fund (Category I & II AIF)" },
            { q: "The income of an Investment Fund (other than PGBP) is:", o: ["Taxable in the hands of the Fund", "Exempt in the hands of the Fund and taxable in the hands of unit holders", "Exempt for both", "Taxable for both"], c: "Exempt in the hands of the Fund and taxable in the hands of unit holders" },
            { q: "Which section provides for the taxation of a Securitisation Trust?", o: ["115TA", "115UB", "115UA", "115TCA"], c: "115TA" },
            { q: "Income received by a unit holder from a securitisation trust is:", o: ["Taxable in the hands of the unit holder", "Exempt in the hands of the unit holder", "Taxable in the hands of the trust", "None"], c: "Taxable in the hands of the unit holder" },
            { q: "Section 115TD deals with tax on accreted income of certain trusts and institutions, often called:", o: ["Exit Tax", "Dividend Distribution Tax", "MAT", "Buyback Tax"], c: "Exit Tax" },
            { q: "The 'Principal Officer' of a company for the purpose of Income-tax includes:", o: ["Managing Director", "Secretary", "Any person connected with management whom AO serves notice", "All of the above"], c: "All of the above" },
            { q: "The time limit for filing a revised return u/s 139(5) is:", o: ["9 months from the end of assessment year", "3 months prior to the end of the relevant assessment year", "12 months from the end of previous year", "None"], c: "3 months prior to the end of the relevant assessment year" },
            { q: "Income tax return can be verified using:", o: ["Digital Signature", "Electronic Verification Code (EVC)", "Aadhar OTP", "All of the above"], c: "All of the above" },
            { q: "The maximum penalty for failure to furnish return of income u/s 234F is:", o: ["₹ 1,000", "₹ 5,000", "₹ 10,000", "5% of tax"], c: "₹ 5,000" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "The 'Faceless Assessment' scheme was introduced in the year:", o: ["2018", "2019", "2020", "2021"], c: "2019" },
            { q: "Section 147 allows the Assessing Officer to assess or reassess income if:", o: ["Assessee fails to file return", "Any income has escaped assessment", "Audit objection is raised", "Total income > ₹ 50 lakhs"], c: "Any income has escaped assessment" },
            { q: "Notice u/s 148 for reassessment can be issued only if there is:", o: ["A suspicion of tax evasion", "Information which suggests that income has escaped assessment", "Approval from CBDT", "A search u/s 132"], c: "Information which suggests that income has escaped assessment" },
            { q: "The time limit for issuing notice u/s 148 is generally years from the end of the relevant assessment year.", o: ["3", "4", "6", "10"], c: "3" },
            { q: "Notice u/s 148 can be issued up to 10 years if the escaped income exceeds:", o: ["₹ 10 lakhs", "₹ 50 lakhs", "₹ 1 crore", "₹ 5 crores"], c: "₹ 50 lakhs" },
            { q: "Before issuing notice u/s 148, the AO must provide an opportunity of being heard to the assessee as per section:", o: ["148A", "143(2)", "144", "154"], c: "148A" },
            { q: "The 'Search and Seizure' provisions are contained in section:", o: ["131", "132", "133A", "133B"], c: "132" },
            { q: "During a search u/s 132, the authorized officer can seize:", o: ["Unaccounted cash", "Jewellery", "Books of account", "All of the above"], c: "All of the above" },
            { q: "Which of the following cannot be seized during a search u/s 132?", o: ["Stock-in-trade of a business", "Cash found in locker", "Property title deeds", "Unexplained gold ornaments"], c: "Stock-in-trade of a business" },
            { q: "The Principal Commissioner or Commissioner can revise any order passed by an AO if it is prejudicial to the interests of the revenue u/s:", o: ["154", "263", "264", "147"], c: "263" },
            { q: "Revision u/s 264 is done by the Commissioner at the of the assessee.", o: ["Suo-moto discretion", "Request", "Both a and b", "None"], c: "Both a and b" },
            { q: "An appeal against the order of an Assessing Officer (AO) lies with the:", o: ["Commissioner (Appeals)", "ITAT", "High Court", "Supreme Court"], c: "Commissioner (Appeals)" },
            { q: "The time limit for filing an appeal before the Commissioner (Appeals) is from the date of service of notice of demand.", o: ["30 days", "45 days", "60 days", "90 days"], c: "30 days" },
            { q: "The 'Income Tax Appellate Tribunal' (ITAT) is the fact-finding authority.", o: ["First", "Second", "Final", "Only"], c: "Final" },
            { q: "An appeal to the High Court u/s 260A can be filed only if the case involves a:", o: ["Question of fact", "Substantial question of law", "Clerical error", "Penalty exceeding ₹ 10 lakhs"], c: "Substantial question of law" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "The time limit for filing an appeal before the ITAT is from the date of communication of the order.", o: ["30 days", "60 days", "90 days", "120 days"], c: "60 days" },
            { q: "Which of the following is an appealable order before the ITAT?", o: ["Order of CIT(A)", "Order of CIT u/s 263", "Order of CIT u/s 12AB regarding registration", "All of the above"], c: "All of the above" },
            { q: "Penalty for misreporting of income is of the amount of tax sought to be evaded.", o: ["50%", "100%", "200%", "300%"], c: "200%" },
            { q: "Penalty for under-reporting of income u/s 270A is of the tax amount.", o: ["50%", "100%", "200%", "None"], c: "50%" },
            { q: "Section 269SS prohibits taking or accepting a loan or deposit in cash if the amount is:", o: ["₹ 10,000 or more", "₹ 20,000 or more", "₹ 50,000 or more", "₹ 2,00,000 or more"], c: "₹ 20,000 or more" },
            { q: "Penalty for violation of section 269SS or 269T is:", o: ["10% of amount", "50% of amount", "Equal to the amount of loan/deposit", "₹ 10,000"], c: "Equal to the amount of loan/deposit" },
            { q: "Section 269ST prohibits receiving an amount in cash of or more in a day/transaction/event.", o: ["₹ 50,000", "₹ 1,00,000", "₹ 2,00,000", "₹ 5,00,000"], c: "₹ 2,00,000" },
            { q: "The monetary limit for filing an appeal by the Department before the ITAT is tax effect of:", o: ["₹ 20 lakhs", "₹ 50 lakhs", "₹ 1 crore", "₹ 2 crores"], c: "₹ 50 lakhs" },
            { q: "The monetary limit for the Department to file an appeal before the Supreme Court is tax effect exceeding:", o: ["₹ 50 lakhs", "₹ 1 crore", "₹ 2 crores", "₹ 5 crores"], c: "₹ 2 crores" },
            { q: "Which section deals with the 'TDS on Salaries'?", o: ["192", "193", "194", "195"], c: "192" },
            { q: "Rate of TDS on 'Winnings from Lotteries' u/s 194B is:", o: ["10%", "20%", "30%", "Normal slab rates"], c: "30%" },
            { q: "TDS u/s 194J (Fees for Professional Services) is generally deducted @:", o: ["1%", "2%", "5%", "10%"], c: "10%" },
            { q: "TDS @ 2% u/s 194J is applicable if the payment is for:", o: ["Technical Services", "Royalties in nature of sale/distribution of films", "Professional services", "Both a and b"], c: "Both a and b" },
            { q: "Section 194N provides for TDS on cash withdrawals exceeding in a year.", o: ["₹ 10 lakhs", "₹ 50 lakhs", "₹ 1 crore", "₹ 2 crores"], c: "₹ 1 crore" },
            { q: "Rate of TDS u/s 195 for payment of interest to a non-resident (other than foreign company) is:", o: ["10%", "20%", "30%", "Rates in force"], c: "Rates in force" }
        ]
    },
    {
        setName: "Set 9",
        questions: [
            { q: "Section 206AA requires the deductor to deduct tax at a higher rate if the payee fails to furnish:", o: ["Aadhar Card", "PAN", "Voter ID", "Passport"], c: "PAN" },
            { q: "The higher rate of TDS u/s 206AA is the higher of the specified rate or:", o: ["10%", "20%", "30%", "Maximum Marginal Rate"], c: "20%" },
            { q: "Section 206AB provides for a higher rate of TDS for 'Specified Persons' who have not filed:", o: ["PAN", "Income Tax Return for the previous year", "Audit Report", "Form 15G/H"], c: "Income Tax Return for the previous year" },
            { q: "TCS u/s 206C(1G) is applicable on 'Foreign Remittance' under LRS exceeding in a year.", o: ["₹ 1 lakh", "₹ 5 lakhs", "₹ 7 lakhs", "₹ 10 lakhs"], c: "₹ 7 lakhs" },
            { q: "Rate of TCS on 'Overseas Tour Program Package' u/s 206C(1G) is:", o: ["1%", "5%", "10%", "20%"], c: "5%" },
            { q: "Interest u/s 234A is charged for delay in:", o: ["Filing return of income", "Payment of advance tax", "Deferment of advance tax", "Self-assessment tax"], c: "Filing return of income" },
            { q: "Interest u/s 234B is charged if the advance tax paid is less than of the assessed tax.", o: ["50%", "75%", "90%", "100%"], c: "90%" },
            { q: "Rate of interest u/s 234A, 234B, and 234C is per month or part of a month.", o: ["0.50%", "1%", "1.50%", "2%"], c: "1%" },
            { q: "Which section deals with the 'Advance Tax' liability?", o: ["207", "208", "210", "211"], c: "208" },
            { q: "The first installment of advance tax (15%) for all assessees is due by:", o: ["15th June", "15th September", "15th December", "15th March"], c: "15th June" },
            { q: "A resident senior citizen not having any income from 'PGBP' is:", o: ["Liable for advance tax", "Not liable for advance tax", "Liable if total income > ₹ 10 lakhs", "None"], c: "Not liable for advance tax" },
            { q: "Section 115BBH provides for taxation of income from transfer of:", o: ["Virtual Digital Assets", "Bitcoins only", "NFTs only", "Listed shares"], c: "Virtual Digital Assets" },
            { q: "Income from Virtual Digital Assets (VDA) is taxable @:", o: ["10%", "20%", "30%", "Maximum Marginal Rate"], c: "30%" },
            { q: "While computing income from VDA, the only deduction allowed is:", o: ["Cost of acquisition", "Brokerage", "Interest on loan", "All of the above"], c: "Cost of acquisition" },
            { q: "Loss from transfer of VDA cannot be against any other income.", o: ["Set-off", "Carried forward", "Both a and b", "None"], c: "Both a and b" }
        ]
    },
    {
        setName: "Set 10",
        questions: [
            { q: "A 'Domestic Company' u/s 2(22A) means an Indian company or any other company which has made prescribed arrangements for:", o: ["Listing in India", "Declaration and payment of dividends in India", "Opening PE in India", "None"], c: "Declaration and payment of dividends in India" },
            { q: "Section 2(22)(e) deals with 'Deemed Dividend' in case of a loan to a shareholder having substantial interest in a:", o: ["Public Company", "Closely held company (Private company)", "Listed company", "Foreign company"], c: "Closely held company (Private company)" },
            { q: "Substantial interest for section 2(22)(e) means holding at least of the voting power.", o: ["10%", "20%", "26%", "51%"], c: "10%" },
            { q: "Deemed dividend u/s 2(22)(e) is taxable to the extent the company possesses:", o: ["Share capital", "Accumulated profits", "Reserves", "Cash balance"], c: "Accumulated profits" },
            { q: "Income of a 'Specified Person' is clubbed in the hands of an individual u/s:", o: ["60", "61", "64", "65"], c: "64" },
            { q: "Income of a minor child is clubbed in the hands of the parent whose total income is higher, with an exemption of per child.", o: ["₹ 1,000", "₹ 1,200", "₹ 1,500", "₹ 2,000"], c: "₹ 1,500" },
            { q: "Clubbing of minor's income is not applicable if the minor is suffering from disability u/s:", o: ["80C", "80D", "80U", "80DD"], c: "80U" },
            { q: "Income of a minor child earned through 'Manual Work' or 'Special Talent' is:", o: ["Clubbed", "Exempt", "Taxable in minor's own hands", "None"], c: "Taxable in minor's own hands" },
            { q: "Which section deals with the 'Set-off and Carry Forward' of losses?", o: ["70 to 80", "60 to 65", "80C to 80U", "115JB"], c: "70 to 80" },
            { q: "Loss from 'Speculation Business' can be set-off only against:", o: ["Salaries", "PGBP income", "Speculation profit", "Capital gains"], c: "Speculation profit" },
            { q: "Loss from 'Owning and Maintaining Race Horses' can be carried forward for years.", o: ["4", "8", "10", "Indefinitely"], c: "4" },
            { q: "Long-term capital loss can be set-off only against:", o: ["Short-term capital gain", "Long-term capital gain", "Both a and b", "Income from other sources"], c: "Long-term capital gain" },
            { q: "Unabsorbed depreciation u/s 32(2) can be carried forward:", o: ["For 8 years", "For 10 years", "Indefinitely", "None"], c: "Indefinitely" },
            { q: "Deduction u/s 80C is available up to a maximum limit of:", o: ["₹ 1,00,000", "₹ 1,50,000", "₹ 2,00,000", "₹ 50,000"], c: "₹ 1,50,000" },
            { q: "Deduction for medical insurance premium u/s 80D for self/spouse/children is limited to (for non-senior citizens):", o: ["₹ 15,000", "₹ 20,000", "₹ 25,000", "₹ 50,000"], c: "₹ 25,000" }
        ]
    },
    {
        setName: "Set 11",
        questions: [
            { q: "Deduction u/s 80D for medical insurance premium for parents (senior citizens) is up to:", o: ["₹ 25,000", "₹ 30,000", "₹ 50,000", "₹ 1,00,000"], c: "₹ 50,000" },
            { q: "Deduction u/s 80TTA for interest on 'Saving Account' with bank/post office is available up to:", o: ["₹ 5,000", "₹ 10,000", "₹ 15,000", "₹ 50,000"], c: "₹ 10,000" },
            { q: "Section 80TTB provides deduction on interest income to senior citizens up to:", o: ["₹ 10,000", "₹ 25,000", "₹ 50,000", "₹ 1,00,000"], c: "₹ 50,000" },
            { q: "Under section 80G, donations to the 'PM National Relief Fund' qualify for deduction @:", o: ["50% with limit", "100% with limit", "50% without limit", "100% without limit"], c: "100% without limit" },
            { q: "Under section 80G, donations to 'Jawaharlal Nehru Memorial Fund' qualify for deduction @:", o: ["100%", "50%", "25%", "Zero"], c: "50%" },
            { q: "Which of the following is not a 'Capital Asset' u/s 2(14)?", o: ["Jewellery", "Archaeological collections", "Personal effects (excluding jewellery)", "Shares"], c: "Personal effects (excluding jewellery)" },
            { q: "Urban agricultural land is a capital asset if it is situated within from the local limits of a municipality having population > 10,000.", o: ["2 kms", "6 kms", "8 kms", "All of the above depending on population"], c: "All of the above depending on population" },
            { q: "Cost inflation index (CII) is used for the purpose of computing:", o: ["Short-term capital gain", "Long-term capital gain", "Depreciation", "Business profit"], c: "Long-term capital gain" },
            { q: "Base year for Cost Inflation Index (CII) is:", o: ["1981-82", "2001-02", "2011-12", "1991-92"], c: "2001-02" },
            { q: "Section 50C deals with full value of consideration in case of transfer of land or building based on:", o: ["Fair Market Value", "Stamp Duty Value", "Valuation by registered valuer", "Circle rate only"], c: "Stamp Duty Value" },
            { q: "Section 54 exemption is available on capital gains from transfer of a residential house if the gain is invested in:", o: ["Another residential house in India", "Commercial property", "NHAI Bonds", "Shares"], c: "Another residential house in India" },
            { q: "Exemption u/s 54EC is available if the investment is made in specified bonds within of transfer.", o: ["3 months", "6 months", "1 year", "9 months"], c: "6 months" },
            { q: "The maximum amount of investment allowed u/s 54EC in a financial year is:", o: ["₹ 10 lakhs", "₹ 25 lakhs", "₹ 50 lakhs", "₹ 1 crore"], c: "₹ 50 lakhs" },
            { q: "Period of holding for 'Listed Shares' to be treated as long-term capital asset is more than:", o: ["12 months", "24 months", "36 months", "48 months"], c: "12 months" },
            { q: "Period of holding for 'Unlisted Shares' to be treated as long-term capital asset is more than:", o: ["12 months", "24 months", "36 months", "60 months"], c: "24 months" }
        ]
    },
    {
        setName: "Set 12",
        questions: [
            { q: "Mr. Arvind, Managing Director of Arvind Construction Private Ltd, holds 70% of its paid up capital of ₹ 20 lakhs. The balance as at 31.03.2025 in General Reserve was ₹ 7 lakhs. The company on 01.04.2025 gave an interest free loan of ₹ 8.50 lakhs to its Supervisor having salary of ₹ 15,500 p.m., who in turn on 25.04.2025, advanced the said amount of loan so taken from the company to Mr. Arvind. What amount would be treated as deemed dividend u/s 2(22)(e)?", o: ["₹ 8,50,000", "₹ 7,00,000", "₹ 20,00,000", "Nil"], c: "₹ 7,00,000" },
            { q: "Which of the following power is not vested with CBDT u/s 119(2) of the Act?", o: ["Relaxation of provisions in relation to set-off of losses", "Condonation of delay in filing claim for refund", "Relaxation of any requirement in Chapter IV or VI-A", "None"], c: "Relaxation of provisions in relation to set-off of losses" },
            { q: "Sec. 91 deals with:", o: ["Unilateral Relief", "Bilateral Relief", "Transfer Pricing", "MAT"], c: "Unilateral Relief" },
            { q: "If income is taxed twice in more than one country but in the hands of different tax payers is called:", o: ["Economic Double Taxation", "Juridical Double Taxation", "Triple Taxation", "None"], c: "Economic Double Taxation" },
            { q: "Which of the following orders is not appealable before Commissioner (Appeals)?", o: ["An order of assessment passed by the Assessing Officer in pursuance of directions of Dispute Resolution Panel", "An order of assessment u/s 143(3)", "An order u/s 154", "A penalty order"], c: "An order of assessment passed by the Assessing Officer in pursuance of directions of Dispute Resolution Panel" },
            { q: "Range concept principle is applied under Transfer Pricing if there is:", o: ["More than five reasonable prices", "At least two prices", "Exactly six prices", "No reasonable price"], c: "More than five reasonable prices" },
            { q: "ABC Co. Ltd. received ₹ 24 lakhs as dividend from its foreign subsidiary company. Which of the following is correct?", o: ["Taxable at normal rates", "Taxable @ 15% u/s 115BBD", "Taxable @ 10%", "Exempt"], c: "Taxable at normal rates" },
            { q: "Threshold for Specified Domestic Transaction (SDT) is:", o: ["₹ 5 crores", "₹ 10 crores", "₹ 20 crores", "₹ 50 crores"], c: "₹ 20 crores" },
            { q: "Section 115BBE applies to unexplained money, investment, etc. taxable @:", o: ["30%", "60%", "78%", "90%"], c: "60%" },
            { q: "The rate of tax on LTCG u/s 112A (on equity shares) exceeding ₹ 1 lakh is:", o: ["10%", "15%", "20%", "12.5%"], c: "12.5%" },
            { q: "The standard deduction for House Property income is:", o: ["20%", "30%", "40%", "Actual repairs"], c: "30%" },
            { q: "Maximum deduction for interest on housing loan for self-occupied property is:", o: ["₹ 1,50,000", "₹ 2,00,000", "₹ 30,000", "Full interest"], c: "₹ 2,00,000" },
            { q: "The rate of TDS on rent of building u/s 194-I is:", o: ["2%", "5%", "10%", "20%"], c: "10%" },
            { q: "Form 16 is the certificate of TDS issued for:", o: ["Interest", "Salary", "Contract payments", "Rent"], c: "Salary" },
            { q: "The financial year in India for income tax purposes is:", o: ["Jan to Dec", "April to March", "July to June", "None"], c: "April to March" }
        ]
    }
];