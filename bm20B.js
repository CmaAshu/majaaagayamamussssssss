/**
 * Senior Data Analyst & JS Developer Extraction
 * Task: PDF to Structured JSON (JavaScript File)
 * Source: MCQBank-Paper20B.pdf
 * Total Questions: 181
 */

const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "When the risk of losses in on- or off-balance sheet positions arising from movement in market prices, it is called as", o: ["Operational Risk", "Market Risk", "Liquidity Risk", "Account Risk"], c: "Market Risk" },
            { q: "The risk that arises from the possibility of non-payment of loans by the borrowers is known as-", o: ["Credit Risks", "Market Risks.", "Moral Hazard", "Business Risk"], c: "Credit Risks" },
            { q: "The major component of Market risk is", o: ["Interest rate risk", "Equity risk", "Commodity risk", "All of the above"], c: "All of the above" },
            { q: "When a bank's image and public standing is in doubt and leads to the public's loss of confidence in a bank, it is called as", o: ["Reputational risk", "Moral Hazard", "Operational risk", "None of the above"], c: "Reputational risk" },
            { q: "Legal Risk is known as", o: ["When the actions can lead to the entire financial system coming to a standstill.", "When there is a financial loss to the bank arising from legal suits filed against the bank or by a bank for applying a law wrongly.", "When a bank chooses the wrong strategy or follows a long-term business strategy which might lead to its failure.", "All of the above"], c: "When there is a financial loss to the bank arising from legal suits filed against the bank or by a bank for applying a law wrongly." },
            { q: "Bonds Are", o: ["Fixed Income Securities.", "Permanent Income Securities.", "Variable Income Securities.", "Hybrid Securities."], c: "Fixed Income Securities." },
            { q: "A bond's price and its yield are ....... related.", o: ["Positively", "Inversely", "Not", "Partially"], c: "Inversely" },
            { q: "The process of reducing the risk of a price change in an asset by taking an offsetting position in a related security is called", o: ["Arbitrage", "Hedging", "Speculation", "Diversification"], c: "Hedging" },
            { q: "Asset Liability Management (ALM) is a mechanism to manage", o: ["Risk", "Market Risk", "Liquidity Risk", "All of the above"], c: "All of the above" },
            { q: "A ...... is a contract to buy or sell an underlying asset at a specified price on a specified future date.", o: ["Call Option", "Put Option", "Futures Contract", "Swap"], c: "Futures Contract" },
            { q: "The Basel Committee on Banking Supervision (BCBS) is located in", o: ["London", "New York", "Basel, Switzerland", "Paris"], c: "Basel, Switzerland" },
            { q: "Basel III standards are primarily aimed at", o: ["Increasing bank profits", "Enhancing the bank's ability to absorb shocks", "Reducing government oversight", "Expanding international trade"], c: "Enhancing the bank's ability to absorb shocks" },
            { q: "Which of the following is not a component of Tier 1 Capital?", o: ["Paid-up Equity Capital", "Statutory Reserves", "Revaluation Reserves", "Disclosed Free Reserves"], c: "Revaluation Reserves" },
            { q: "The 'Lending' function of a bank is primarily associated with", o: ["Market Risk", "Liquidity Risk", "Credit Risk", "Strategic Risk"], c: "Credit Risk" },
            { q: "Credit Risk Management involves", o: ["Identifying risky borrowers", "Collateral assessment", "Credit scoring", "All of the above"], c: "All of the above" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "The acronym 'CAMELS' in banking supervision stands for", o: ["Capital, Assets, Management, Earnings, Liquidity, Sensitivity", "Cash, Assets, Money, Expenses, Loans, Securities", "Capital, Account, Management, Efficiency, Liability, Standards", "None of the above"], c: "Capital, Assets, Management, Earnings, Liquidity, Sensitivity" },
            { q: "Interest Rate Risk (IRR) falls under the category of", o: ["Operational Risk", "Market Risk", "Credit Risk", "Legal Risk"], c: "Market Risk" },
            { q: "When a bank faces difficulty in meeting its short-term obligations, it is experiencing", o: ["Market Risk", "Liquidity Risk", "Business Risk", "Systemic Risk"], c: "Liquidity Risk" },
            { q: "A 'Derivative' instrument derives its value from", o: ["The bank's profit", "An underlying asset", "The government", "A physical warehouse"], c: "An underlying asset" },
            { q: "The 'Duration' of a bond measures its", o: ["Maturity period", "Interest rate sensitivity", "Default risk", "Coupon rate"], c: "Interest rate sensitivity" },
            { q: "NPA stands for", o: ["Net Profit Account", "Non-Performing Asset", "Non-Periodic Asset", "National Product Agency"], c: "Non-Performing Asset" },
            { q: "Stress testing in banking helps to", o: ["Evaluate the bank under extreme but plausible scenarios", "Calculate daily profit", "Promote employees", "Buy new software"], c: "Evaluate the bank under extreme but plausible scenarios" },
            { q: "Systemic risk refers to", o: ["The risk of failure of a single small branch", "The risk that the failure of one firm may cause the collapse of the entire system", "The risk of poor computer systems", "None of the above"], c: "The risk that the failure of one firm may cause the collapse of the entire system" },
            { q: "Value at Risk (VaR) is used to estimate", o: ["Total bank assets", "Maximum potential loss over a given time horizon at a specific confidence level", "The CEO's salary", "Loan interest rates"], c: "Maximum potential loss over a given time horizon at a specific confidence level" },
            { q: "Gap analysis in ALM helps in managing", o: ["Operational risk", "Interest Rate Risk", "Legal risk", "HR risk"], c: "Interest Rate Risk" },
            { q: "Which of the following is a type of 'Operational Risk'?", o: ["Frauds", "System failures", "Human errors", "All of the above"], c: "All of the above" },
            { q: "The 'L' in ALM stands for", o: ["Loan", "Liability", "Legal", "Lease"], c: "Liability" },
            { q: "Reinsurance is used by", o: ["Banks to manage credit", "Insurance companies to manage their own risk", "Customers to get double claims", "None of the above"], c: "Insurance companies to manage their own risk" },
            { q: "The principle of 'Indemnity' means", o: ["Insured should profit from insurance", "Insured is restored to the same financial position as before the loss", "Insured gets 50% of the claim", "Insurance is a gamble"], c: "Insured is restored to the same financial position as before the loss" },
            { q: "U/s 64VB of Insurance Act, 1938, cover can be granted only if", o: ["Policy is signed", "Premium is received in advance", "Agent is present", "Loss has already occurred"], c: "Premium is received in advance" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "The 'Solvency Margin' for an insurance company is", o: ["The difference between assets and liabilities", "The total sales volume", "The profit after tax", "The number of policies sold"], c: "The difference between assets and liabilities" },
            { q: "An 'Actuary' is a professional who", o: ["Sells insurance policies", "Applies mathematical and statistical methods to assess risk", "Manages the bank's cash", "Audits financial statements"], c: "Applies mathematical and statistical methods to assess risk" },
            { q: "IRDAI stands for", o: ["Insurance Regulatory and Development Authority of India", "Indian Risk Development and Analysis Institute", "Insurance Resource and Data Authority of India", "None of the above"], c: "Insurance Regulatory and Development Authority of India" },
            { q: "In life insurance, 'Insurable Interest' must exist at", o: ["The time of taking the policy", "The time of death", "Both (a) and (b)", "At the time of claim only"], c: "The time of taking the policy" },
            { q: "A 'Mutual Fund' is an example of", o: ["Indirect Investment", "Direct Investment", "No Investment", "Insurance"], c: "Indirect Investment" },
            { q: "The 'NAV' of a mutual fund scheme is", o: ["Net Assets of the scheme / Number of units outstanding", "Total profit / Assets", "Sales / Units", "None of the above"], c: "Net Assets of the scheme / Number of units outstanding" },
            { q: "Which of the following is NOT a type of risk?", o: ["Financial Risk", "Social Risk", "Pure Risk", "Speculative Risk"], c: "Social Risk" },
            { q: "A 'Pure Risk' is a situation where", o: ["There is a chance of loss or no loss", "There is a chance of profit", "There is only a chance of gain", "None of the above"], c: "There is a chance of loss or no loss" },
            { q: "Insurance is a tool for", o: ["Risk avoidance", "Risk transfer", "Risk retention", "Risk reduction"], c: "Risk transfer" },
            { q: "The 'Principle of Utmost Good Faith' is also known as", o: ["Caveat Emptor", "Uberrimae Fidei", "Res Ipsa Loquitur", "Subrogation"], c: "Uberrimae Fidei" },
            { q: "Subrogation allows the insurer to", o: ["Pay less claim", "Step into the shoes of the insured to recover from a third party", "Cancel the policy", "Double the premium"], c: "Step into the shoes of the insured to recover from a third party" },
            { q: "A 'Hazard' is", o: ["The cause of loss", "A condition that increases the frequency or severity of loss", "The loss itself", "The insurance company"], c: "A condition that increases the frequency or severity of loss" },
            { q: "A 'Peril' is", o: ["A condition increasing risk", "The cause of loss (e.g., fire, earthquake)", "The premium paid", "A policy benefit"], c: "The cause of loss (e.g., fire, earthquake)" },
            { q: "In insurance, 'Underwriting' is the process of", o: ["Calculating daily sales", "Selecting and classifying risks for insurance", "Promoting products", "Hiring agents"], c: "Selecting and classifying risks for insurance" },
            { q: "Life Insurance is a contract of", o: ["Indemnity", "Guarantee", "Assurance", "Wagering"], c: "Assurance" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "General Insurance (Non-life) is usually a contract of", o: ["Indemnity", "Guarantee", "Assurance", "Wagering"], c: "Indemnity" },
            { q: "Proximate Cause in insurance means", o: ["The distant cause", "The immediate or effective cause of loss", "The smallest cause", "None of the above"], c: "The immediate or effective cause of loss" },
            { q: "The maximum amount that can be recovered under an insurance policy is limited by the", o: ["Sum Insured", "Market Value", "Actual Loss", "Lowest of all above"], c: "Lowest of all above" },
            { q: "Credit default swap (CDS) is used to hedge", o: ["Market risk", "Credit risk", "Operational risk", "Interest rate risk"], c: "Credit risk" },
            { q: "Which of the following is a 'Speculative Risk'?", o: ["Fire in warehouse", "Investing in stock market", "Death of a person", "Sickness"], c: "Investing in stock market" },
            { q: "Risk Management process includes", o: ["Risk identification", "Risk evaluation", "Risk control", "All of the above"], c: "All of the above" },
            { q: "Moral Hazard arises when", o: ["Insured becomes careless because they have insurance", "Insurer goes bankrupt", "Premium is high", "Policy is cancelled"], c: "Insured becomes careless because they have insurance" },
            { q: "A 'Policyholder' is the person who", o: ["Sells the policy", "Owns the insurance policy", "Investigates claims", "Registers the company"], c: "Owns the insurance policy" },
            { q: "An 'Endowment' policy provides benefits", o: ["Only on death", "Only on survival till maturity", "Either on death or survival till maturity", "None of the above"], c: "Either on death or survival till maturity" },
            { q: "Third-party insurance is mandatory in India for", o: ["Life", "Health", "Motor vehicles", "Travel"], c: "Motor vehicles" },
            { q: "KYC in banking means", o: ["Know Your Credit", "Know Your Customer", "Keep Your Cash", "None of the above"], c: "Know Your Customer" },
            { q: "Money Laundering is the process of", o: ["Cleaning dirty currency notes", "Making illegal money appear legal", "Donating to charity", "Borrowing from banks"], c: "Making illegal money appear legal" },
            { q: "The 'Pillar 1' of Basel II deals with", o: ["Supervisory review", "Market discipline", "Minimum capital requirements", "Operational efficiency"], c: "Minimum capital requirements" },
            { q: "The 'Pillar 2' of Basel II deals with", o: ["Supervisory review", "Market discipline", "Capital requirements", "Risk transfer"], c: "Supervisory review" },
            { q: "The 'Pillar 3' of Basel II deals with", o: ["Market discipline (Disclosures)", "Supervisory review", "Capital requirements", "IT systems"], c: "Market discipline (Disclosures)" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "Capital Adequacy Ratio (CAR) = (Tier 1 + Tier 2 Capital) / ......", o: ["Total Assets", "Risk Weighted Assets", "Total Deposits", "Total Loans"], c: "Risk Weighted Assets" },
            { q: "A 'Floating Rate' loan has an interest rate that", o: ["Remains constant", "Changes with market benchmarks", "Is always zero", "Decreases over time"], c: "Changes with market benchmarks" },
            { q: "Foreign Exchange Risk (Forex Risk) is the risk of", o: ["Default by foreign buyer", "Loss due to exchange rate fluctuations", "High interest rates", "Poor quality of goods"], c: "Loss due to exchange rate fluctuations" },
            { q: "Hedging using 'Options' gives the holder the", o: ["Obligation to trade", "Right but not the obligation to trade", "Guarantee of profit", "None of the above"], c: "Right but not the obligation to trade" },
            { q: "The 'Strike Price' in an option is", o: ["The price at which the asset can be bought/sold", "The current market price", "The premium amount", "The profit amount"], c: "The price at which the asset can be bought / sold" },
            { q: "An 'Audit' in risk management is used to", o: ["Verify if risk policies are being followed", "Calculate daily sales", "Hire new staff", "Promote products"], c: "Verify if risk policies are being followed" },
            { q: "Loss Frequency refers to", o: ["The number of losses in a period", "The size of a single loss", "The probability of no loss", "The premium amount"], c: "The number of losses in a period" },
            { q: "Loss Severity refers to", o: ["The number of losses", "The financial impact of a loss", "The cause of loss", "None of the above"], c: "The financial impact of a loss" },
            { q: "A 'Captive Insurer' is an insurance company", o: ["Owned by its parent for insuring the parent's risks", "Owned by the government", "That insures only individuals", "That is in prison"], c: "Owned by its parent for insuring the parent's risks" },
            { q: "Diversification helps in reducing", o: ["Systematic Risk", "Unsystematic Risk", "Total Risk to Zero", "Market Risk"], c: "Unsystematic Risk" },
            { q: "Beta ($\beta$) in finance measures", o: ["Total Risk", "Systematic Risk", "Unsystematic Risk", "Accounting Risk"], c: "Systematic Risk" },
            { q: "Risk retention means", o: ["Transferring risk to an insurer", "Avoiding the activity", "Accepting and funding the loss yourself", "Reducing the chance of loss"], c: "Accepting and funding the loss yourself" },
            { q: "Internal Rating Based (IRB) approach is used for", o: ["Operational risk", "Market risk", "Credit risk", "Legal risk"], c: "Credit risk" },
            { q: "A 'Default' occurs when a borrower", o: ["Pays on time", "Fails to meet the legal obligations of a loan", "Borrows more", "Opens a savings account"], c: "Fails to meet the legal obligations of a loan" },
            { q: "In banking, 'Spread' is the difference between", o: ["Assets and Liabilities", "Interest earned and interest paid", "Loans and Deposits", "Profit and Tax"], c: "Interest earned and interest paid" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "Credit Rating agencies assess the", o: ["Physical health of directors", "Creditworthiness of an entity", "Market share of a product", "Number of employees"], c: "Creditworthiness of an entity" },
            { q: "Market risk includes", o: ["Stock price risk", "Interest rate risk", "Currency risk", "All of the above"], c: "All of the above" },
            { q: "An 'Off-Balance Sheet' item is", o: ["An asset shown on the front page", "A liability not yet incurred (contingent)", "A finalized sale", "None of the above"], c: "A liability not yet incurred (contingent)" },
            { q: "Asset Quality in banks is checked by looking at", o: ["The size of the building", "The level of NPAs", "The number of ATMs", "The CEO's experience"], c: "The level of NPAs" },
            { q: "Financial Inclusion aims at", o: ["Excluding poor people", "Providing affordable financial services to all", "Maximizing fees", "Only serving big companies"], c: "Providing affordable financial services to all" },
            { q: "The 'Ombudsman' in banking/insurance helps in", o: ["Setting interest rates", "Redressing customer grievances", "Marketing", "Auditing"], c: "Redressing customer grievances" },
            { q: "Standard Deviation measures", o: ["Total risk (volatility)", "Systematic risk", "Profitability", "Maturity"], c: "Total risk (volatility)" },
            { q: "Value based management focuses on", o: ["Short term profit", "Maximizing shareholder value", "Increasing staff", "Reducing quality"], c: "Maximizing shareholder value" },
            { q: "Enterprise Risk Management (ERM) is", o: ["A departmental approach", "A holistic organization-wide approach to managing risk", "Only for financial firms", "Only for IT"], c: "A holistic organization-wide approach to managing risk" },
            { q: "Risk Appetite is the", o: ["Amount of risk a firm is willing to accept", "Total risk in the market", "Amount of profit desired", "None of the above"], c: "Amount of risk a firm is willing to accept" },
            { q: "Solvency II is the regulatory framework for", o: ["Banks in USA", "Insurance companies in Europe", "Mutual funds in India", "None of the above"], c: "Insurance companies in Europe" },
            { q: "Micro-insurance provides insurance to", o: ["Large corporates", "Low-income people", "Rich individuals", "Governments"], c: "Low-income people" },
            { q: "Health insurance covers", o: ["Death only", "Medical expenses due to illness or injury", "Loss of property", "Travel delay"], c: "Medical expenses due to illness or injury" },
            { q: "A 'Wait Period' in health insurance is", o: ["The time before you buy policy", "The time during which certain illnesses are not covered", "The time to get a claim", "None of the above"], c: "The time during which certain illnesses are not covered" },
            { q: "The 'Cashless' facility in health insurance allows", o: ["Insured to pay and get refund", "Insurer to pay hospital directly", "No insurance", "Free treatment"], c: "Insurer to pay hospital directly" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "A 'Rider' in an insurance policy is", o: ["A person who drives", "An add-on benefit to the main policy", "The insurance agent", "The policy document"], c: "An add-on benefit to the main policy" },
            { q: "Reinstatement in insurance means", o: ["Cancelling the policy", "Restoring a lapsed policy", "Increasing premium", "None of the above"], c: "Restoring a lapsed policy" },
            { q: "A 'Surrender Value' is the amount", o: ["Paid to the insurer", "Payable to the policyholder if they cancel the policy before maturity", "The sum insured", "None of the above"], c: "Payable to the policyholder if they cancel the policy before maturity" },
            { q: "In marine insurance, 'General Average' refers to", o: ["Standard loss", "A loss shared by all parties in a sea venture to save the whole", "A partial loss of one item", "None of the above"], c: "A loss shared by all parties in a sea venture to save the whole" },
            { q: "Which of the following is a type of 'Bonds'?", o: ["Government Bonds", "Corporate Bonds", "Municipal Bonds", "All of the above"], c: "All of the above" },
            { q: "The 'Yield to Maturity' (YTM) of a bond is", o: ["The coupon rate", "The total return expected if the bond is held till maturity", "The face value", "None of the above"], c: "The total return expected if the bond is held till maturity" },
            { q: "Zero-coupon bonds are issued at", o: ["Face value", "Premium", "Discount and pay no interest", "Variable rate"], c: "Discount and pay no interest" },
            { q: "The primary risk for a bondholder is", o: ["Interest rate risk", "Credit risk", "Inflation risk", "All of the above"], c: "All of the above" },
            { q: "A 'Convertible' bond can be", o: ["Exchanged for cash only", "Exchanged for a specified number of common shares", "Cancelled by the issuer", "None of the above"], c: "Exchanged for a specified number of common shares" },
            { q: "Hedging with 'Futures' helps in", o: ["Fixing the price today for a future transaction", "Increasing profit", "Avoiding all taxes", "None of the above"], c: "Fixing the price today for a future transaction" },
            { q: "Credit Scoring models help in", o: ["Predicting the probability of default", "Calculating staff bonus", "Designing branch layout", "None of the above"], c: "Predicting the probability of default" },
            { q: "The 'Recovery Rate' is", o: ["The rate of getting a new job", "The percentage of the loan amount recovered after default", "The speed of bank computers", "None of the above"], c: "The percentage of the loan amount recovered after default" },
            { q: "Expected Loss (EL) = PD $times$ LGD $times$ ......", o: ["EAD (Exposure at Default)", "Sales", "Profit", "WACC"], c: "EAD (Exposure at Default)" },
            { q: "PD in credit risk stands for", o: ["Periodic Deposit", "Probability of Default", "Partial Default", "None of the above"], c: "Probability of Default" },
            { q: "LGD in credit risk stands for", o: ["Loss Given Default", "Loan Growth Data", "Legal Grant Dept", "None of the above"], c: "Loss Given Default" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "The 'Herstatt Risk' is a type of", o: ["Credit risk", "Settlement risk (Cross-currency)", "Operational risk", "Legal risk"], c: "Settlement risk (Cross-currency)" },
            { q: "A 'Basis Point' (bps) is", o: ["1.00%", "0.10%", "0.01%", "10.00%"], c: "0.01%" },
            { q: "Asset securitization is the process of", o: ["Selling the building", "Pooling and repackaging assets into interest-bearing securities", "Buying gold", "None of the above"], c: "Pooling and repackaging assets into interest-bearing securities" },
            { q: "Special Purpose Vehicle (SPV) is used in", o: ["Normal banking", "Securitization", "Staff training", "None of the above"], c: "Securitization" },
            { q: "The 'Originator' in securitization is the", o: ["Investor", "Entity that originally owns the assets", "The SPV", "The Regulator"], c: "Entity that originally owns the assets" },
            { q: "Credit enhancement in securitization helps in", o: ["Reducing interest", "Improving the credit rating of the securities", "Increasing tax", "None of the above"], c: "Improving the credit rating of the securities" },
            { q: "A 'Waterfall' structure in finance refers to", o: ["A physical fountain", "Priority of payments to different classes of investors", "A fast audit", "None of the above"], c: "Priority of payments to different classes of investors" },
            { q: "The 'Tranche' system divides securities into", o: ["Different risk/return categories (Senior, Mezzanine, Junior)", "Equal parts", "Monthly portions", "None of the above"], c: "Different risk / return categories (Senior, Mezzanine, Junior)" },
            { q: "A 'Default Correlation' measures how", o: ["Fast a loan is paid", "The likelihood of multiple borrowers defaulting at the same time", "Profit is shared", "None of the above"], c: "The likelihood of multiple borrowers defaulting at the same time" },
            { q: "Stress testing 'Liquidity' involves", o: ["Counting cash daily", "Testing the impact of a sudden mass withdrawal of deposits", "Promoting sales", "None of the above"], c: "Testing the impact of a sudden mass withdrawal of deposits" },
            { q: "An 'Unsecured' loan is", o: ["A loan with no collateral", "A loan for security staff", "A risky investment", "None of the above"], c: "A loan with no collateral" },
            { q: "A 'Collateral' is", o: ["A type of bank staff", "An asset pledged as security for a loan", "The loan interest", "A bank branch"], c: "An asset pledged as security for a loan" },
            { q: "A 'Guarantee' is a", o: ["Promise by a third party to pay if the borrower defaults", "Fixed deposit", "Profit share", "None of the above"], c: "Promise by a third party to pay if the borrower defaults" },
            { q: "The 'Loan-to-Value' (LTV) ratio is", o: ["Loan amount / Value of collateral", "Value of collateral / Loan amount", "Profit / Loan", "None of the above"], c: "Loan amount / Value of collateral" },
            { q: "A 'Covenant' in a loan agreement is", o: ["A physical office", "A condition or restriction on the borrower", "The loan period", "The interest rate"], c: "A condition or restriction on the borrower" }
        ]
    },
    {
        setName: "Set 9",
        questions: [
            { q: "Financial contagion is the", o: ["Spread of financial distress from one institution or market to others", "A computer virus", "A medical condition", "None of the above"], c: "Spread of financial distress from one institution or market to others" },
            { q: "The 'Too Big to Fail' (TBTF) concept applies to", o: ["Small startups", "Systemically important financial institutions", "Retail shops", "Government departments"], c: "Systemically important financial institutions" },
            { q: "A 'Bank Run' occurs when", o: ["The bank wins a race", "Many customers withdraw their deposits simultaneously", "The bank opens new branches", "The bank changes its name"], c: "Many customers withdraw their deposits simultaneously" },
            { q: "Deposit Insurance helps in", o: ["Increasing interest", "Protecting depositors and preventing bank runs", "Reducing tax", "None of the above"], c: "Protecting depositors and preventing bank runs" },
            { q: "DICGC in India provides", o: ["Loan insurance", "Deposit insurance", "Health insurance", "Life insurance"], c: "Deposit insurance" },
            { q: "The current limit of deposit insurance in India is ₹ ....... per depositor per bank.", o: ["1 Lakh", "5 Lakh", "10 Lakh", "No limit"], c: "5 Lakh" },
            { q: "Credit risk is also known as", o: ["Default risk", "Market risk", "Social risk", "Legal risk"], c: "Default risk" },
            { q: "Operating risk is", o: ["Market risk", "Non-financial risk", "Credit risk", "None"], c: "Non-financial risk" },
            { q: "Market risk is", o: ["Internal", "External", "Neutral", "Avoidable"], c: "External" },
            { q: "Business risk refers to", o: ["Risk of lower profits or loss", "Risk of fire", "Risk of earthquake", "None"], c: "Risk of lower profits or loss" },
            { q: "A 'Sovereign Risk' is the risk that", o: ["A private firm defaults", "A government defaults on its obligations", "The CEO resigns", "None of the above"], c: "A government defaults on its obligations" },
            { q: "Political risk is the risk to a firm's", o: ["Assets only", "Operations and profitability due to political changes", "Staff only", "None of the above"], c: "Operations and profitability due to political changes" },
            { q: "Reputational risk can be caused by", o: ["Poor customer service", "Unethical behavior", "Regulatory failures", "All of the above"], c: "All of the above" },
            { q: "Risk Mitigation means", o: ["Increasing risk", "Reducing the impact or probability of risk", "Ignoring risk", "None of the above"], c: "Reducing the impact or probability of risk" },
            { q: "Risk Mapping is used to", o: ["Find the office", "Visualize risks based on impact and frequency", "Design a website", "None of the above"], c: "Visualize risks based on impact and frequency" }
        ]
    },
    {
        setName: "Set 10",
        questions: [
            { q: "A 'Risk Matrix' typically has", o: ["Impact on one axis and Probability on the other", "Sales and Profit", "Assets and Liabilities", "None of the above"], c: "Impact on one axis and Probability on the other" },
            { q: "High impact, high probability risks should be", o: ["Ignored", "Transferred or avoided", "Accepted", "None of the above"], c: "Transferred or avoided" },
            { q: "Low impact, low probability risks can often be", o: ["Avoided", "Accepted/Retained", "Insured", "None of the above"], c: "Accepted / Retained" },
            { q: "Internal control environment is set by the", o: ["Clerks", "Board of Directors and senior management", "General public", "Competitors"], c: "Board of Directors and senior management" },
            { q: "Whistleblowing policy allows employees to", o: ["Play music", "Report unethical behavior without fear of retaliation", "Get higher salary", "None of the above"], c: "Report unethical behavior without fear of retaliation" },
            { q: "Cyber risk in banking includes", o: ["Phishing", "Malware", "Ransomware", "All of the above"], c: "All of the above" },
            { q: "Business Continuity Planning (BCP) ensures", o: ["Profit growth", "The organization can continue operating after a disaster", "No tax", "None of the above"], c: "The organization can continue operating after a disaster" },
            { q: "A 'Disaster Recovery' (DR) site is a", o: ["Hospital", "Secondary location for IT infrastructure", "Main office", "Bank branch"], c: "Secondary location for IT infrastructure" },
            { q: "Risk reporting to the Board should be", o: ["Vague", "Timely, accurate and actionable", "Once in 5 years", "None of the above"], c: "Timely, accurate and actionable" },
            { q: "The Chief Risk Officer (CRO) is responsible for", o: ["Sales", "Overall risk management function", "IT only", "None of the above"], c: "Overall risk management function" },
            { q: "Regulatory compliance risk is the risk of", o: ["High sales", "Legal or regulatory sanctions", "Low profit", "None of the above"], c: "Legal or regulatory sanctions" },
            { q: "Social Responsibility and Governance are part of", o: ["ESG", "TQM", "BPR", "ABC"], c: "ESG" },
            { q: "Integrated reporting combines", o: ["Financial and non-financial performance", "Sales and Profit", "Debit and Credit", "None of the above"], c: "Financial and non-financial performance" },
            { q: "The 'Sustainability' of a firm depends on its", o: ["Profit only", "Social, environmental and economic impact", "Only physical assets", "None of the above"], c: "Social, environmental and economic impact" },
            { q: "Ethical behavior in risk management helps in", o: ["Reducing transparency", "Building trust and long-term value", "Increasing fraud", "None of the above"], c: "Building trust and long-term value" }
        ]
    },
    {
        setName: "Set 11",
        questions: [
            { q: "What is the primary objective of Risk-Management?", o: ["To Increase Profits", "To identify, assess and prioritize risks followed by coordinated and economical application of resources to minimize, monitor, and control the probability or impact of unfortunate events.", "To Eliminate all Risks", "To ensure compliance with all laws"], c: "To identify, assess and prioritize risks followed by coordinated and economical application of resources to minimize, monitor, and control the probability or impact of unfortunate events." },
            { q: "Explain the Concept of Risk-Appetite.", o: ["The total risk a company faces.", "The level of risk an organization is prepared to accept, in pursuit of its objectives.", "The risk remaining after controls.", "The risk of financial loss."], c: "The level of risk an organization is prepared to accept, in pursuit of its objectives." },
            { q: "Describe the Role of the Board of Directors in Risk-Management.", o: ["Executing daily risk activities.", "To provide oversight, and set the overall risk-appetite and strategy.", "Auditing the accounts.", "Selling products."], c: "To provide oversight, and set the overall risk-appetite and strategy." },
            { q: "Identify the Key Components of an ERM Framework.", o: ["Sales, Marketing, HR.", "Risk-Identification, Assessment, Response, and Monitoring.", "Assets, Liabilities, Equity.", "None of the Above."], c: "Risk-Identification, Assessment, Response, and Monitoring." },
            { q: "Explain the difference between Inherent-Risk and Residual-Risk.", o: ["They are the same.", "Inherent-Risk is before controls; Residual-Risk is after controls.", "Residual is before; Inherent is after.", "None of the Above."], c: "Inherent-Risk is before controls; Residual-Risk is after controls." },
            { q: "State the Purpose of a Risk-Register.", o: ["To list all employees.", "To document and track identified risks, their assessment, and mitigation-plans.", "To record daily sales.", "To maintain bank balance."], c: "To document and track identified risks, their assessment, and mitigation-plans." },
            { q: "Illustrate the concept of Risk-Transfer.", o: ["Accepting the risk.", "Shifting the risk to another party (e.g., through Insurance).", "Avoiding the risk.", "Reducing the risk."], c: "Shifting the risk to another party (e.g., through Insurance)." },
            { q: "Explain the Importance of Stress-Testing.", o: ["To check employee health.", "To evaluate the potential impact of extreme but plausible scenarios on an organization's financial-health.", "To increase production.", "To decrease tax."], c: "To evaluate the potential impact of extreme but plausible scenarios on an organization's financial-health." },
            { q: "Describe the Three-Lines-of-Defense Model.", o: ["Sales, Marketing, Finance.", "1st: Business-Ops; 2nd: Risk & Compliance; 3rd: Internal-Audit.", "1st: CEO; 2nd: Board; 3rd: Shareholders.", "None of the Above."], c: "1st: Business-Ops; 2nd: Risk & Compliance; 3rd: Internal-Audit." },
            { q: "Identify common types of Market-Risk.", o: ["Frauds.", "Interest-Rate, Equity, Currency, and Commodity-Risks.", "System-failures.", "All of the Above."], c: "Interest-Rate, Equity, Currency, and Commodity-Risks." },
            { q: "Explain the Impact of Liquidity-Risk on Banks.", o: ["Higher profits.", "Inability to meet short-term obligations, potentially leading to a bank-run or insolvency.", "Increased market share.", "None of the Above."], c: "Inability to meet short-term obligations, potentially leading to a bank-run or insolvency." },
            { q: "Describe the concept of Operational-Risk.", o: ["Market price changes.", "Risk of loss resulting from inadequate or failed internal processes, people, and systems, or from external events.", "Non-payment by borrowers.", "None of the Above."], c: "Risk of loss resulting from inadequate or failed internal processes, people, and systems, or from external events." },
            { q: "State the Significance of Credit-Risk Assessment.", o: ["To calculate tax.", "To evaluate the creditworthiness of borrowers and minimize defaults.", "To design new products.", "None of the Above."], c: "To evaluate the creditworthiness of borrowers and minimize defaults." },
            { q: "Explain the role of Internal-Controls in mitigating risks.", o: ["To eliminate all risks.", "To provide reasonable assurance regarding the achievement of objectives in effectiveness, efficiency, and compliance.", "To increase sales.", "None of the Above."], c: "To provide reasonable assurance regarding the achievement of objectives in effectiveness, efficiency, and compliance." },
            { q: "Describe the importance of Risk-Communication.", o: ["To hide information.", "Ensuring that risk-information is shared across the organization to support informed decision-making.", "To confuse competitors.", "None of the Above."], c: "Ensuring that risk-information is shared across the organization to support informed decision-making." }
        ]
    },
    {
        setName: "Set 12",
        questions: [
            { q: "Explain the Concept of Diversification, in Risk-Management.", o: ["Focusing on one asset.", "Spreading investments across different assets to reduce unsystematic risk.", "Increasing risk.", "None of the Above."], c: "Spreading investments across different assets to reduce unsystematic risk." },
            { q: "Identify the Characteristics of a Good Risk-Report.", o: ["Very long and complex.", "Timely, accurate, actionable, and tailored to the audience.", "Only financial data.", "None of the Above."], c: "Timely, accurate, actionable, and tailored to the audience." },
            { q: "State the Purpose of a Business-Continuity-Plan (BCP).", o: ["To maximize profit.", "To ensure that critical business-functions can continue or be restored quickly after a disaster.", "To hire more staff.", "To decrease taxes."], c: "To ensure that critical business-functions can continue or be restored quickly after a disaster." },
            { q: "Describe the Role of the Chief-Risk-Officer (CRO).", o: ["Selling bank products.", "Leading the overall risk-management function and reporting to the Board/CEO.", "Auditing the books.", "None of the Above."], c: "Leading the overall risk-management function and reporting to the Board / CEO." },
            { q: "Explain the significance of Basel-Accords in Banking.", o: ["Increasing interest rates.", "Providing international standards for capital-adequacy, risk-management, and supervision.", "Eliminating all banks.", "None of the Above."], c: "Providing international standards for capital-adequacy, risk-management, and supervision." },
            { q: "Identify common types of Operational-Risk, in Insurance.", o: ["Market fluctuations.", "Policy-issuance errors, claims-processing delays, and frauds.", "Investment losses.", "None of the Above."], c: "Policy-issuance errors, claims-processing delays, and frauds." },
            { q: "Describe the Impact of Reputational-Risk on a Financial-Institution.", o: ["Higher profits.", "Loss of customer confidence, reduced business, and potential regulatory-scrutiny.", "Increased market share.", "None of the Above."], c: "Loss of customer confidence, reduced business, and potential regulatory-scrutiny." },
            { q: "State the Importance of Compliance-Risk Management.", o: ["To ignore laws.", "To ensure the organization adheres to all relevant laws, regulations, and ethical standards.", "To increase fees.", "None of the Above."], c: "To ensure the organization adheres to all relevant laws, regulations, and ethical standards." },
            { q: "What is the Grace-Period in a Life-Insurance Policy? Choose the Most Appropriate Option.", o: ["A period after the premium-due-date, during which the policy remains in-force.", "A period before the policy starts.", "A period to cancel the policy.", "None of the Above."], c: "A period after the premium-due-date, during which the policy remains in-force." },
            { q: "Which One of the Following Alterations, will be permitted, by an Insurance Company?", o: ["Changing the gender of insured.", "Splitting-Up of the Policy into Two or More Policies.", "Changing the date of death.", "None of the Above."], c: "Splitting-Up of the Policy into Two or More Policies." },
            { q: "Explain the Concept of Surrender-Value.", o: ["The sum insured.", "Cash-Value, associated with the Policy, in Case, the Premiums have been Paid, for 3 Years, at least.", "The total premium paid.", "None of the Above."], c: "Cash-Value, associated with the Policy, in Case, the Premiums have been Paid, for 3 Years, at least." },
            { q: "How Many Persons can be nominated under a Policy? Choose the Most Appropriate Option", o: ["Only one.", "One or More Than One", "None.", "Maximum three."], c: "One or More Than One" },
            { q: "Describe the Purpose of Nomination.", o: ["To transfer ownership.", "To Appoint a Person, to Receive the Policy-Monies, in the Event of the Life-Assured's Death.", "To pay premium.", "None of the Above."], c: "To Appoint a Person, to Receive the Policy-Monies, in the Event of the Life-Assured's Death." },
            { q: "Describe the Purpose of Assignment.", o: ["To appoint a nominee.", "To Transfer the Rights of the Policy", "To pay claims.", "To increase sum insured."], c: "To Transfer the Rights of the Policy" },
            { q: "Illustrate the Process involved in Ordinary Revival of Policy.", o: ["Payment of Arrears, With Interest.", "Buying a new policy.", "Cancelling the policy.", "None of the Above."], c: "Payment of Arrears, With Interest." }
        ]
    },
    {
        setName: "Set 13",
        questions: [
            { q: "Non-Life Insurers must ensure that they do not insure the Assets that are--", o: ["Privately owned.", "Bought Out of Public Money", "Insured elsewhere.", "None of the Above."], c: "Bought Out of Public Money" },
            { q: "How is the Claim calculated, in Case of Fire Insurance?", o: ["Replacement cost.", "Depreciated Value of Assets,", "Historical cost.", "Market value."], c: "Depreciated Value of Assets," },
            { q: "Subrogation follows from the principle of --", o: ["Utmost Good Faith", "Indemnity", "Insurable Interest", "Contribution"], c: "Indemnity" },
            { q: "---is the Process, an Insurance Company uses, to recover the Claim-Amounts, paid to a Policy-Holder, from a Negligent Third-Party.", o: ["Assignment", "Nomination", "Subrogation", "Indemnity"], c: "Subrogation" },
            { q: "can also be defined as Surrender of Rights, by the Insured, to the Insurer.", o: ["Assignment", "Subrogation", "Nomination", "Indemnity"], c: "Subrogation" },
            { q: "The Standard Length of the Grace-Period is", o: ["15 Days", "1 Month or 31 Days", "1 Week", "None"], c: "1 Month or 31 Days" }
        ]
    }
];