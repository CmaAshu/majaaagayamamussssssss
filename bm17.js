/**
 * Senior Data Analyst & JS Developer Extraction
 * Task: PDF to Structured JSON (JavaScript File)
 * Source: MCQ_Bank_Paper_17.pdf
 * Total Questions: 249
 */

const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "Cost Audit was first introduced in the year", o: ["1959", "1965", "1949", "1975"], c: "1965" },
            { q: "Cost Audit was first introduced for industry", o: ["Cement", "Iron & Steel", "Jute", "Sugar"], c: "Sugar" },
            { q: "Govt. of India has issued order with respect to introduction of mandatory Cost Audit of Cost Records maintained by the Companies in the year", o: ["2008", "2009", "2011", "2014"], c: "2011" },
            { q: "The report on the audit of cost records is submitted by the cost auditor to", o: ["Managing Director", "Finance Director", "Audit Committee", "Board of Directors"], c: "Board of Directors" },
            { q: "The cost auditor of the company who is in default in compliance with section 148 shall be punishable in the manner as provided in", o: ["Section 139 of Companies Act, 2013", "sub-sections (1) to (3) of section 148 of Companies Act, 2013", "Section 143 of Companies Act, 2013", "sub-sections (2) to (5) of section 147 of Companies Act, 2013"], c: "sub-sections (2) to (5) of section 147 of Companies Act, 2013" },
            { q: "Cost Audit represents true and fair view of the of any product.", o: ["Cost of sale", "Cost of raw material consumption", "Cost of production", "Profitability"], c: "Cost of production" },
            { q: "The Companies (Cost Records and Audit) Rules, 2014 were issued by the Central Government on", o: ["30th June, 2014", "31st March, 2014", "1st April, 2014", "1st January, 2014"], c: "30th June, 2014" },
            { q: "Maintenance of Cost Records is mandatory for companies belonging to sectors as per Rule 3.", o: ["Regulated Sectors only", "Non-Regulated Sectors only", "Both Regulated and Non-Regulated Sectors", "Public Sector Undertakings only"], c: "Both Regulated and Non-Regulated Sectors" },
            { q: "As per Rule 4, Cost Audit is mandatory for a Regulated Sector company if the overall annual turnover of the company is ₹ ...... or more.", o: ["25 crore", "50 crore", "100 crore", "35 crore"], c: "50 crore" },
            { q: "As per Rule 4, Cost Audit is mandatory for a Non-Regulated Sector company if the overall annual turnover of the company is ₹ ...... or more.", o: ["50 crore", "100 crore", "35 crore", "25 crore"], c: "100 crore" },
            { q: "The Cost Auditor shall be appointed within ...... days of the commencement of every financial year.", o: ["30", "60", "90", "180"], c: "180" },
            { q: "The Company shall inform the Cost Auditor of his appointment and file a notice with the Central Government in Form", o: ["CRA-1", "CRA-2", "CRA-3", "CRA-4"], c: "CRA-2" },
            { q: "The Cost Auditor shall submit the Cost Audit Report to the Board of Directors in Form", o: ["CRA-1", "CRA-2", "CRA-3", "CRA-4"], c: "CRA-3" },
            { q: "A copy of the Cost Audit Report is to be filed by the company with the Central Government in Form", o: ["CRA-1", "CRA-2", "CRA-3", "CRA-4"], c: "CRA-4" },
            { q: "Cost Accounting Standard (CAS) 1 deals with", o: ["Capacity Determination", "Classification of Cost", "Overheads", "Material Cost"], c: "Classification of Cost" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "CAS-2 deals with", o: ["Classification of Cost", "Capacity Determination", "Overheads", "Employee Cost"], c: "Capacity Determination" },
            { q: "CAS-3 deals with", o: ["Classification of Cost", "Capacity Determination", "Overheads", "Material Cost"], c: "Overheads" },
            { q: "CAS-4 deals with cost of production for", o: ["Direct Sales", "Export Sales", "Captive Consumption", "Online Sales"], c: "Captive Consumption" },
            { q: "CAS-5 deals with", o: ["Material Cost", "Employee Cost", "Average (equalized) Cost of Transportation", "Utilities"], c: "Average (equalized) Cost of Transportation" },
            { q: "CAS-6 deals with", o: ["Material Cost", "Employee Cost", "Utilities", "Direct Expenses"], c: "Material Cost" },
            { q: "CAS-7 deals with", o: ["Employee Cost", "Material Cost", "Utilities", "Direct Expenses"], c: "Employee Cost" },
            { q: "CAS-8 deals with", o: ["Employee Cost", "Material Cost", "Cost of Utilities", "Direct Expenses"], c: "Cost of Utilities" },
            { q: "CAS-9 deals with", o: ["Packing Material Cost", "Direct Material Cost", "Direct Labor Cost", "Overhead Cost"], c: "Packing Material Cost" },
            { q: "CAS-10 deals with", o: ["Direct Material Cost", "Direct Employee Cost", "Direct Expenses", "Overhead Cost"], c: "Direct Expenses" },
            { q: "The Cost Auditor is appointed by the", o: ["Shareholders", "Central Government", "Board of Directors", "Registrar of Companies"], c: "Board of Directors" },
            { q: "A Cost Auditor shall be a", o: ["Chartered Accountant", "Company Secretary", "Cost Accountant in Practice", "Advocate"], c: "Cost Accountant in Practice" },
            { q: "Internal Audit in a company is governed by Section ...... of the Companies Act, 2013.", o: ["138", "139", "148", "143"], c: "138" },
            { q: "Cost Audit is a audit.", o: ["Statutory", "Voluntary", "Internal", "Management"], c: "Statutory" },
            { q: "Propriety Audit is concerned with", o: ["Accounting Accuracy", "Legal Compliance", "Economy, Efficiency and Appropriateness of Expenditure", "Arithmetical accuracy"], c: "Economy, Efficiency and Appropriateness of Expenditure" },
            { q: "Performance Audit is basically an audit of", o: ["Historical events", "Financial transactions", "Achievement of objectives and optimum resource utilization", "Profit and loss account"], c: "Achievement of objectives and optimum resource utilization" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "Social Audit focuses on the company's performance towards", o: ["Shareholders", "Society and Environment", "Employees only", "Vendors"], c: "Society and Environment" },
            { q: "Management Audit is a ...... looking process.", o: ["Backward", "Forward", "Lateral", "Historical"], c: "Forward" },
            { q: "The primary objective of Management Audit is to", o: ["Detect fraud", "Verify cost records", "Help management improve effectiveness and efficiency", "Calculate ROI"], c: "Help management improve effectiveness and efficiency" },
            { q: "Audit of 'Efficiency' is a component of", o: ["Financial Audit", "Operational Audit", "Tax Audit", "Legal Audit"], c: "Operational Audit" },
            { q: "Environmental Audit is also known as", o: ["Green Audit", "Energy Audit", "Safety Audit", "Waste Audit"], c: "Green Audit" },
            { q: "Energy Audit is mandatory for intensive industries under the Energy Conservation Act, 2001.", o: ["Regulated", "Waste", "SME", "Energy"], c: "Energy" },
            { q: "The scope of Cost Audit is determined by the", o: ["Cost Auditor", "Central Government", "Shareholders", "Audit Committee"], c: "Central Government" },
            { q: "Casual vacancy in the office of Cost Auditor shall be filled by the Board within ...... days.", o: ["15", "30", "45", "60"], c: "30" },
            { q: "A company must file intimation of casual vacancy to Central Government in Form", o: ["CRA-1", "CRA-2", "CRA-3", "CRA-4"], c: "CRA-2" },
            { q: "Which of the following is NOT a cost auditing standard (GACAP)?", o: ["CAS-24", "SCAM-1", "SCA-101", "GACAP-1"], c: "SCAM-1" },
            { q: "Internal Auditor of a company cannot be its", o: ["Employee", "External Consultant", "Statutory Auditor", "Cost Auditor"], c: "Statutory Auditor" },
            { q: "Cost Audit is applicable to foreign companies having in India.", o: ["Only Sales", "A Liaison Office", "A Place of Business", "No presence"], c: "A Place of Business" },
            { q: "The limit for maintenance of cost records is based on the turnover of the ...... financial year.", o: ["Current", "Immediately Preceding", "Next", "Average of 3 years"], c: "Immediately Preceding" },
            { q: "Form CRA-1 specifies the for maintenance of cost records.", o: ["Principles", "Final Results", "Salary details", "Audit report format"], c: "Principles" },
            { q: "Cost Auditor must be a member of", o: ["ICAI", "ICSI", "ICMAI", "Bar Council"], c: "ICMAI" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "Professional Ethics for Cost Accountants are issued by", o: ["MCA", "SEBI", "ICMAI", "RBI"], c: "ICMAI" },
            { q: "Audit evidence should be", o: ["Sufficient and Appropriate", "Subjective", "Oral only", "Ignoring risks"], c: "Sufficient and Appropriate" },
            { q: "A 'Management Representation Letter' is obtained from", o: ["Customers", "Vendors", "Company Management", "Audit Committee"], c: "Company Management" },
            { q: "Audit Working Papers are the property of", o: ["The Company", "The Auditor", "The Central Government", "The Shareholders"], c: "The Auditor" },
            { q: "Inventory valuation for cost audit should be as per", o: ["AS-2", "CAS-1", "CAS-6", "GACAP"], c: "AS-2" },
            { q: "Depreciation for cost audit should be calculated as per", o: ["Companies Act Schedule II", "Income Tax Act", "Management's estimate", "None"], c: "Companies Act Schedule II" },
            { q: "Cost Audit documentation must be preserved for at least ...... years.", o: ["5", "8", "10", "Permanently"], c: "8" },
            { q: "Subsequent discovery of facts after the date of audit report requires", o: ["Ignoring facts", "Informing the Board/Management", "Resignation", "Destroying papers"], c: "Informing the Board/Management" },
            { q: "Propriety Audit was first applied in India to", o: ["Private Sector", "Government Expenditure/Public Sector", "NGOs", "Hospitals"], c: "Government Expenditure/Public Sector" },
            { q: "The concept of 'Vetting' refers to", o: ["Calculating profit", "Critical evaluation of a document/proposal", "Tax planning", "Selling assets"], c: "Critical evaluation of a document/proposal" },
            { q: "Operational Audit starts where ...... Audit ends.", o: ["Tax", "Financial", "Legal", "Secretarial"], c: "Financial" },
            { q: "Management Audit deals with the of management.", o: ["Personal life", "Policies and performance", "Voter ID", "Religion"], c: "Policies and performance" },
            { q: "Social Responsibility Audit measures the difference between", o: ["Sales and Cost", "Social benefit and Social cost", "Assets and Liabilities", "Tax paid and Tax saved"], c: "Social benefit and Social cost" },
            { q: "Audit Risk is a combination of", o: ["Inherent, Control and Detection Risk", "Profit and Loss Risk", "Market and Credit Risk", "None"], c: "Inherent, Control and Detection Risk" },
            { q: "Detection Risk is the risk that", o: ["Fraud exists", "Internal controls fail", "Auditor fails to detect misstatements", "Company goes bankrupt"], c: "Auditor fails to detect misstatements" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "Control Risk is the risk that", o: ["Auditor is biased", "Internal controls will not prevent or detect misstatements", "Market price falls", "Supply chain breaks"], c: "Internal controls will not prevent or detect misstatements" },
            { q: "Inherent Risk is the risk of misstatement", o: ["Due to poor audit", "Due to failure of controls", "Assuming no related internal controls", "Due to tax rates"], c: "Assuming no related internal controls" },
            { q: "Audit Sampling involves testing ...... than 100% of the population.", o: ["More", "Less", "Exactly", "None"], c: "Less" },
            { q: "A 'Qualified Opinion' is given when", o: ["Audit is perfect", "Auditor disagrees with some items but not pervasive", "Financials are totally wrong", "Auditor cannot conduct audit"], c: "Auditor disagrees with some items but not pervasive" },
            { q: "An 'Adverse Opinion' is given when", o: ["Records are perfect", "Auditor finds pervasive misstatements", "Auditor is happy", "Auditor is ill"], c: "Auditor finds pervasive misstatements" },
            { q: "A 'Disclaimer of Opinion' is given when", o: ["Profit is high", "Auditor is unable to obtain sufficient evidence", "Auditor is new", "Audit is voluntary"], c: "Auditor is unable to obtain sufficient evidence" },
            { q: "Compliance Audit verifies adherence to", o: ["Only Sales policy", "Laws, regulations and procedures", "Competitor strategy", "Employee mood"], c: "Laws, regulations and procedures" },
            { q: "Corporate Governance Audit ensures", o: ["High sales", "Compliance with governance standards/Best practices", "Lowest tax", "Highest salary"], c: "Compliance with governance standards/Best practices" },
            { q: "Audit of 'Abnormal Losses' is part of", o: ["Financial Audit", "Cost Audit", "Statutory Audit", "Tax Audit"], c: "Cost Audit" },
            { q: "Wastage of raw materials is a ...... cost driver.", o: ["Positive", "Negative", "Neutral", "Irrelevant"], c: "Negative" },
            { q: "Cost Audit helps in determining ...... prices.", o: ["Share", "Fair/Transfer", "Black market", "Arbitrary"], c: "Fair/Transfer" },
            { q: "The 'Scope' of Cost Audit includes", o: ["Only direct material", "Verification of cost records and audit report", "Only HR records", "Only office rent"], c: "Verification of cost records and audit report" },
            { q: "Audit of Corporate Social Responsibility (CSR) is", o: ["Mandatory u/s 135 for certain companies", "Never audited", "Only for small shops", "Prohibited"], c: "Mandatory u/s 135 for certain companies" },
            { q: "Information System (IS) Audit focuses on", o: ["Building structure", "Security, integrity and availability of data", "Employee cafeteria", "Legal notices"], c: "Security, integrity and availability of data" },
            { q: "Forensic Audit involves", o: ["Normal accounting", "Detecting and investigating financial crimes/frauds", "Setting standards", "Calculating WACC"], c: "Detecting and investigating financial crimes/frauds" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "The term 'Big Data' in auditing refers to", o: ["One large ledger", "Large and complex datasets analyzed for insights", "Large paper files", "None"], c: "Large and complex datasets analyzed for insights" },
            { q: "Data Analytics helps auditors in", o: ["Risk assessment and anomaly detection", "Decreasing salary", "Manual entry", "Ignoring data"], c: "Risk assessment and anomaly detection" },
            { q: "Continuous Auditing uses", o: ["One audit per decade", "Technology to perform audit activities on a real-time basis", "Manual calculators", "Only oral evidence"], c: "Technology to perform audit activities on a real-time basis" },
            { q: "Blockchain technology provides a ...... ledger.", o: ["Hidden", "Immutable and decentralized", "Erasable", "Centralized"], c: "Immutable and decentralized" },
            { q: "Cyber Security Audit evaluates", o: ["Office lighting", "Protection against digital threats and attacks", "Employee dress code", "Car parking"], c: "Protection against digital threats and attacks" },
            { q: "ESG Audit stands for Audit of", o: ["Economy, Sales, Growth", "Environmental, Social and Governance", "Employee, Safety, Gain", "None"], c: "Environmental, Social and Governance" },
            { q: "The primary purpose of ESG Audit is to assess", o: ["Direct labor", "Sustainability and ethical impact", "Unit cost only", "Cash balance"], c: "Sustainability and ethical impact" },
            { q: "Materiality in auditing is a matter of", o: ["Mathematical formula only", "Professional Judgment", "Size of paper", "None"], c: "Professional Judgment" },
            { q: "Which section of the Companies Act, 2013 deals with the powers and duties of auditors?", o: ["139", "143", "148", "128"], c: "143" },
            { q: "Cost Audit Report is signed by the", o: ["CFO", "MD", "Cost Auditor", "Board Chairman"], c: "Cost Auditor" },
            { q: "Annexure to the Cost Audit Report is part of", o: ["CRA-1", "CRA-2", "CRA-3", "CRA-4"], c: "CRA-3" },
            { q: "The 'Cost Audit Rules' 2014 exclude ...... companies.", o: ["Micro and Small", "All private", "All public", "All manufacturing"], c: "Micro and Small" },
            { q: "Internal Control System is the responsibility of", o: ["Auditor", "Management", "Shareholders", "Government"], c: "Management" },
            { q: "Internal Check is a part of", o: ["Statutory Audit", "Internal Control", "External Audit", "None"], c: "Internal Control" },
            { q: "Propriety Audit helps in checking", o: ["Only math", "Reasonableness of management decisions", "Only dates", "Color of files"], c: "Reasonableness of management decisions" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "The term 'Auditing by Exception' means", o: ["Auditing everything", "Focusing on significant deviations from standards/norms", "No auditing", "Auditing randomly"], c: "Focusing on significant deviations from standards/norms" },
            { q: "Vouching is the essence of", o: ["Audit", "Management", "Sales", "HR"], c: "Audit" },
            { q: "Audit of 'Idle Capacity' cost is important in", o: ["Cost Audit", "Tax Audit", "Legal Audit", "None"], c: "Cost Audit" },
            { q: "Cost Audit under Section 148 is", o: ["Product-wise", "Company-wide financial only", "Department-wise only", "None"], c: "Product-wise" },
            { q: "The Cost Auditor's report includes an opinion on", o: ["Stock market trends", "True and fair view of cost of production", "Director's health", "Employee morale"], c: "True and fair view of cost of production" },
            { q: "Which of the following is a 'Direct Expense' for cost audit?", o: ["Salary of CEO", "Royalty on production", "Office electricity", "Factory rent"], c: "Royalty on production" },
            { q: "CAS-11 deals with", o: ["Employee Cost", "Administrative Overheads", "Selling Overheads", "Direct Expenses"], c: "Administrative Overheads" },
            { q: "CAS-12 deals with", o: ["Administrative Overheads", "Repairs and Maintenance Cost", "Direct Expenses", "Utilities"], c: "Repairs and Maintenance Cost" },
            { q: "CAS-13 deals with", o: ["Employee Cost", "Cost of Service Cost Centre", "Direct Expenses", "Material Cost"], c: "Cost of Service Cost Centre" },
            { q: "CAS-14 deals with", o: ["Material Cost", "Pollution Control Cost", "Selling Overheads", "Packing Cost"], c: "Pollution Control Cost" },
            { q: "CAS-15 deals with", o: ["Administrative Overheads", "Selling and Distribution Overheads", "Repairs", "Utilities"], c: "Selling and Distribution Overheads" },
            { q: "CAS-16 deals with", o: ["Interest Cost", "Depreciation and Amortisation", "Direct Expenses", "Overheads"], c: "Depreciation and Amortisation" },
            { q: "CAS-17 deals with", o: ["Depreciation", "Interest and Financing Charges", "Repairs", "Selling"], c: "Interest and Financing Charges" },
            { q: "CAS-18 deals with", o: ["Interest", "Research and Development Costs", "Repairs", "Packing"], c: "Research and Development Costs" },
            { q: "CAS-19 deals with", o: ["Research", "Joint Costs", "Material", "Labor"], c: "Joint Costs" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "CAS-20 deals with", o: ["Joint Costs", "Royalty and Technical Know-how Fee", "Repairs", "Utilities"], c: "Royalty and Technical Know-how Fee" },
            { q: "CAS-21 deals with", o: ["Royalty", "Quality Control Cost", "Selling", "Admin"], c: "Quality Control Cost" },
            { q: "CAS-22 deals with", o: ["Quality Control", "Manufacturing Cost", "Joint Costs", "R&D"], c: "Manufacturing Cost" },
            { q: "CAS-23 deals with", o: ["Manufacturing Cost", "Overburden Removal Cost", "Quality Control", "Depreciation"], c: "Overburden Removal Cost" },
            { q: "CAS-24 deals with", o: ["Manufacturing Cost", "Treatment of Revenue in Cost Statements", "Joint Costs", "None"], c: "Treatment of Revenue in Cost Statements" },
            { q: "The main purpose of a 'Cost Sheet' is to", o: ["Find net profit", "Calculate cost per unit", "Calculate tax", "Prepare balance sheet"], c: "Calculate cost per unit" },
            { q: "Audit of 'Transfer Pricing' involves", o: ["Checking retail price", "Verifying arm's length price for inter-company transactions", "Ignoring costs", "Fixing prices arbitrarily"], c: "Verifying arm's length price for inter-company transactions" },
            { q: "The 'Triple Bottom Line' approach includes", o: ["Profit, People, Planet", "Sales, Marketing, HR", "Assets, Liabilities, Equity", "None"], c: "Profit, People, Planet" },
            { q: "A 'Performance Prism' model focuses on", o: ["Only financial goals", "Stakeholder satisfaction and contribution", "Only labor cost", "None"], c: "Stakeholder satisfaction and contribution" },
            { q: "Which of the following is a qualitative factor in management audit?", o: ["Net profit", "Leadership quality and employee morale", "Quick ratio", "Inventory turnover"], c: "Leadership quality and employee morale" },
            { q: "The term 'Internal Audit' is derived from", o: ["Latin word 'Audire'", "French word 'Audit'", "Greek word 'Logos'", "None"], c: "Latin word 'Audire'" },
            { q: "Audit of 'Scrap' and 'Spoilage' is part of", o: ["Statutory Audit", "Cost Audit", "Tax Audit", "Legal Audit"], c: "Cost Audit" },
            { q: "Efficiency Audit aims to find whether", o: ["Profit is high", "Resources are utilized in the most efficient manner", "Company has many employees", "None"], c: "Resources are utilized in the most efficient manner" },
            { q: "Management Audit report is primarily for the use of", o: ["General public", "The Board and top management", "Income tax department", "Competitors"], c: "The Board and top management" },
            { q: "Internal controls are evaluated periodically to", o: ["Increase tax", "Assess efficiency and identify weaknesses", "Replace all staff", "None"], c: "Assess efficiency and identify weaknesses" }
        ]
    },
    {
        setName: "Set 9",
        questions: [
            { q: "A key difference between internal and external audit is", o: ["Names are different", "Internal audit is management-oriented; external audit is shareholder-oriented", "Only external audit uses math", "None"], c: "Internal audit is management-oriented; external audit is shareholder-oriented" },
            { q: "A CMA conducting operational audit in a manufacturing company may review", o: ["Only office files", "Machine utilisation and production planning", "Only the CEO's car", "None"], c: "Machine utilisation and production planning" },
            { q: "The primary objective of forensic audit is to", o: ["Calculate tax", "Detect, investigate, and prevent fraud or financial misconduct", "Set product price", "Verify factory rent"], c: "Detect, investigate, and prevent fraud or financial misconduct" },
            { q: "The primary objective of anti-money laundering regulations is to", o: ["Increase bank fees", "Prevent the conversion of illegal funds into legal assets", "Print more money", "None"], c: "Prevent the conversion of illegal funds into legal assets" },
            { q: "The three stages of money laundering are", o: ["Earning, Spending, Saving", "Placement, Layering, Integration", "Buying, Selling, Trading", "None"], c: "Placement, Layering, Integration" },
            { q: "Audit of 'Productivity' is a part of", o: ["Tax Audit", "Operational Audit", "Secretarial Audit", "None"], c: "Operational Audit" },
            { q: "Financial Audit is mainly concerned with", o: ["Cost records", "True and fair view of financial statements", "Management quality", "Environment"], c: "True and fair view of financial statements" },
            { q: "In most of the manufacturing industries, the most important element of cost is", o: ["Material", "Labor", "Overheads", "None"], c: "Material" },
            { q: "Abnormal gain in a process occurs when", o: ["Actual loss is more than expected", "Actual output is greater than planned output", "Scrap price is high", "None"], c: "Actual output is greater than planned output" },
            { q: "Joint products are those which are produced", o: ["One after another", "Simultaneously from the same process/raw material", "In different factories", "None"], c: "Simultaneously from the same process/raw material" },
            { q: "The 'Split-off' point is the point where", o: ["Production starts", "Joint products become separately identifiable", "Production ends", "Sales happen"], c: "Joint products become separately identifiable" },
            { q: "By-products are products of", o: ["High value", "Relatively small value produced incidentally", "No value", "Main interest"], c: "Relatively small value produced incidentally" },
            { q: "Life Cycle Costing includes", o: ["Only production cost", "All costs from inception to abandonment", "Only research cost", "None"], c: "All costs from inception to abandonment" },
            { q: "Target Cost =", o: ["Actual Cost + Profit", "Target Selling Price - Target Profit", "Standard Cost - Variance", "None"], c: "Target Selling Price - Target Profit" },
            { q: "Kaizen Costing focuses on", o: ["Massive changes", "Continuous small improvements", "Design phase only", "None"], c: "Continuous small improvements" }
        ]
    },
    {
        setName: "Set 10",
        questions: [
            { q: "Six Sigma aims at achieving", o: ["90% quality", "99.99966% defect-free products", "Zero cost", "None"], c: "99.99966% defect-free products" },
            { q: "The Balanced Scorecardperspective that focuses on customer satisfaction is", o: ["Financial", "Customer", "Internal Process", "Learning and Growth"], c: "Customer" },
            { q: "The 'Internal Process' perspective in Balanced Scorecard measures", o: ["Profit", "Cycle time and quality", "Employee skills", "Brand image"], c: "Cycle time and quality" },
            { q: "Economic Value Added (EVA) measures", o: ["Total sales", "Profitability after deducting cost of all capital", "Cash in bank", "None"], c: "Profitability after deducting cost of all capital" },
            { q: "Just-in-Time (JIT) philosophy aims to", o: ["Maximize inventory", "Eliminate waste and reduce inventory", "Increase production time", "None"], c: "Eliminate waste and reduce inventory" },
            { q: "The Theory of Constraints (TOC) identifies", o: ["All assets", "The bottleneck limiting throughput", "Labor rates", "None"], c: "The bottleneck limiting throughput" },
            { q: "Throughput Accounting is based on", o: ["Absorption costing", "Theory of Constraints", "Standard costing", "None"], c: "Theory of Constraints" },
            { q: "Activity Based Costing (ABC) assigns costs based on", o: ["Direct labor only", "Activities consuming resources", "Volume of sales", "None"], c: "Activities consuming resources" },
            { q: "Environmental Management Accounting (EMA) helps in", o: ["Calculating only tax", "Identifying and managing environmental costs and performance", "Only selling goods", "None"], c: "Identifying and managing environmental costs and performance" },
            { q: "The 'Triple Bottom Line' focuses on", o: ["Profit, People, Planet", "Sales, Expenses, Tax", "Assets, Liabilities, Equity", "None"], c: "Profit, People, Planet" },
            { q: "Internal audit is an", o: ["Independent appraisal function", "Part of sales", "Accounting entry", "None"], c: "Independent appraisal function" },
            { q: "Audit of 'Fixed Assets' in cost audit includes", o: ["Color of machines", "Verifying existence and utilization", "CEO's home", "None"], c: "Verifying existence and utilization" },
            { q: "Cost auditor shall report any fraud to", o: ["News", "Central Government (as per Section 143)", "Competitors", "None"], c: "Central Government (as per Section 143)" },
            { q: "CRA-2 is filed for", o: ["Audit report", "Notice of appointment of cost auditor", "Resignation", "None"], c: "Notice of appointment of cost auditor" },
            { q: "Audit of 'Labor' involves checking", o: ["Efficiency and idle time", "Only office staff", "Only CEO", "None"], c: "Efficiency and idle time" }
        ]
    },
    {
        setName: "Set 11",
        questions: [
            { q: "Audit of 'Overheads' involves", o: ["Ignoring indirect costs", "Verifying basis of apportionment and absorption", "Only counting machines", "None"], c: "Verifying basis of apportionment and absorption" },
            { q: "Propriety audit is more concerned with", o: ["Substance over form", "Form over substance", "Only math", "None"], c: "Substance over form" },
            { q: "Operational audit helps in", o: ["Fixing price", "Improving organizational efficiency", "Counting chairs", "None"], c: "Improving organizational efficiency" },
            { q: "Management audit evaluates", o: ["Only the accountant", "The entire management process and performance", "Only the factory", "None"], c: "The entire management process and performance" },
            { q: "Forensic audit uses", o: ["Normal calculators", "Investigative techniques and data analytics", "Only paper ledgers", "None"], c: "Investigative techniques and data analytics" },
            { q: "Information Technology (IT) audit assesses", o: ["Software only", "Information system controls and security", "Hardware only", "None"], c: "Information system controls and security" },
            { q: "CSR Audit checks", o: ["Only profit", "Compliance with mandatory CSR spending and activities", "Only sales", "None"], c: "Compliance with mandatory CSR spending and activities" },
            { q: "Environmental audit assesses", o: ["Only smoke", "Environmental impact and compliance with laws", "Only trees", "None"], c: "Environmental impact and compliance with laws" },
            { q: "Audit risk should be kept at", o: ["Maximum", "Acceptably low level", "Zero", "None"], c: "Acceptably low level" },
            { q: "Materiality is a", o: ["Absolute concept", "Relative concept", "Irrelevant concept", "None"], c: "Relative concept" },
            { q: "Audit evidence must be", o: ["Subjective", "Relevant and reliable", "Only oral", "None"], c: "Relevant and reliable" },
            { q: "The cost auditor's independence is", o: ["Optional", "Essential", "Prohibited", "None"], c: "Essential" },
            { q: "The term 'Professional Skepticism' means", o: ["Trusting everyone", "A questioning mind and critical assessment of evidence", "Being biased", "None"], c: "A questioning mind and critical assessment of evidence" },
            { q: "Internal audit report is submitted to the", o: ["General public", "Management/Board", "Tax office", "None"], c: "Management/Board" },
            { q: "Compliance audit ensures", o: ["Legal adherence", "Only sales", "Only math", "None"], c: "Legal adherence" }
        ]
    },
    {
        setName: "Set 12",
        questions: [
            { q: "Performance audit evaluates", o: ["Only past", "Economy, efficiency and effectiveness", "Only cost", "None"], c: "Economy, efficiency and effectiveness" },
            { q: "ESG audit is related to", o: ["Sustainability", "Only math", "Only law", "None"], c: "Sustainability" },
            { q: "ESG performance is often disclosed through", o: ["Newspapers", "Integrated reporting or sustainability report", "Billboards", "None"], c: "Integrated reporting or sustainability report" },
            { q: "A good CSR strategy contributes to corporate image because", o: ["It sounds good", "It improves brand credibility", "It reduces tax only", "None"], c: "It improves brand credibility" },
            { q: "Cyber security focuses on", o: ["Internet only", "Protecting digital assets from unauthorized access and attacks", "Office building", "None"], c: "Protecting digital assets from unauthorized access and attacks" },
            { q: "A key responsibility of IS/IT auditors in banks is to", o: ["Count cash", "Monitor access controls and compliance with regulations", "Clean the servers", "None"], c: "Monitor access controls and compliance with regulations" },
            { q: "Audit of Corporate Governance ensures", o: ["Highest tax", "Compliance with best practices and laws for stakeholders", "Only profit", "None"], c: "Compliance with best practices and laws for stakeholders" },
            { q: "Internal control system evaluation helps in", o: ["Fixing price", "Determining audit scope and detecting weaknesses", "Only counting staff", "None"], c: "Determining audit scope and detecting weaknesses" },
            { q: "The term 'Vetting' in contracts means", o: ["Signing only", "Thorough examination and verification", "Writing text", "None"], c: "Thorough examination and verification" },
            { q: "Operational audit is", o: ["Narrow", "Wide and covers all business functions", "Only financial", "None"], c: "Wide and covers all business functions" },
            { q: "Forensic audit helps in", o: ["Only profit", "Legal proceedings by providing evidence of fraud", "Counting inventory", "None"], c: "Legal proceedings by providing evidence of fraud" },
            { q: "Social audit includes", o: ["Only cost", "Impact on stakeholders and environment", "Only sales", "None"], c: "Impact on stakeholders and environment" },
            { q: "Energy audit targets", o: ["Only light", "Optimizing energy consumption and efficiency", "Only heat", "None"], c: "Optimizing energy consumption and efficiency" },
            { q: "The goal of TQM is", o: ["Only profit", "Continuous improvement and customer satisfaction", "Only sales", "None"], c: "Continuous improvement and customer satisfaction" },
            { q: "Activity based costing helps in", o: ["Arbitrary allocation", "Accurate identification of cost drivers and activity costs", "Only labor", "None"], c: "Accurate identification of cost drivers and activity costs" }
        ]
    },
    {
        setName: "Set 13",
        questions: [
            { q: "Just-in-time leads to", o: ["High stock", "Lower inventory carrying costs and waste reduction", "More storage", "None"], c: "Lower inventory carrying costs and waste reduction" },
            { q: "Target costing is", o: ["Reactive", "Proactive cost management during design", "Only math", "None"], c: "Proactive cost management during design" },
            { q: "Life cycle costing provides", o: ["Short term view", "Comprehensive profitability analysis over product life", "Only cost", "None"], c: "Comprehensive profitability analysis over product life" },
            { q: "Cost of quality includes", o: ["Only scrap", "Prevention, appraisal and failure costs", "Only labor", "None"], c: "Prevention, appraisal and failure costs" },
            { q: "Lean production focuses on", o: ["Mass", "Flow and value creation by eliminating waste", "Stock", "None"], c: "Flow and value creation by eliminating waste" },
            { q: "Six sigma projects follow", o: ["Random steps", "DMAIC/DMADV methodology", "One step", "None"], c: "DMAIC/DMADV methodology" },
            { q: "The Balanced Scorecard perspectives are", o: ["Two", "Four (Financial, Customer, Process, Learning)", "Ten", "None"], c: "Four (Financial, Customer, Process, Learning)" },
            { q: "EVA measures", o: ["Net profit only", "Residual wealth by deducting cost of capital from operating profit", "Only cash", "None"], c: "Residual wealth by deducting cost of capital from operating profit" },
            { q: "TOC assumes", o: ["No constraints", "The system is limited by its bottleneck", "Labor is fixed", "None"], c: "The system is limited by its bottleneck" },
            { q: "Environmental audit ensures", o: ["Highest price", "Sustainable practices and legal compliance", "Only color", "None"], c: "Sustainable practices and legal compliance" },
            { q: "Propriety audit checks", o: ["Only logic", "Wisdom and economy of expenditure", "Only form", "None"], c: "Wisdom and economy of expenditure" },
            { q: "Internal auditor should be", o: ["Biased", "Independent and objective", "Part of sales", "None"], c: "Independent and objective" },
            { q: "Cost audit report is filed in", o: ["CRA-1", "CRA-3", "CRA-4", "None"], c: "CRA-3" },
            { q: "CRA-4 is filed with", o: ["News", "Central Government", "Vendors", "None"], c: "Central Government" },
            { q: "Cost audit helps in", o: ["Increasing waste", "Improving cost efficiency and control", "Only math", "None"], c: "Improving cost efficiency and control" }
        ]
    },
    {
        setName: "Set 14",
        questions: [
            { q: "The term 'Green Audit' is related to", o: ["Money", "Environment", "Plants only", "None"], c: "Environment" },
            { q: "Forensic audit requires", o: ["Only files", "Specialized skills in accounting and investigation", "Only math", "None"], c: "Specialized skills in accounting and investigation" },
            { q: "Information System Audit evaluates", o: ["Computers only", "Confidentiality, Integrity, and Availability (CIA)", "Only speed", "None"], c: "Confidentiality, Integrity, and Availability (CIA)" },
            { q: "Social audit assesses", o: ["Only profit", "Company's contribution to society", "Only sales", "None"], c: "Company's contribution to society" },
            { q: "Propriety audit is associated with", o: ["Only math", "Public interest and appropriateness", "Only legal", "None"], c: "Public interest and appropriateness" },
            { q: "Operational audit measures", o: ["Only cost", "Performance against set targets/standards", "Only HR", "None"], c: "Performance against set targets/standards" },
            { q: "Internal audit is part of", o: ["Outside", "Internal Control Mechanism", "Only sales", "None"], c: "Internal Control Mechanism" },
            { q: "Management audit focus is on", o: ["Past mistakes only", "Strategy and future potential", "Only labor", "None"], c: "Strategy and future potential" },
            { q: "Compliance audit is", o: ["Voluntary", "Mandatory where specified by law", "Random", "None"], c: "Mandatory where specified by law" },
            { q: "Cost auditor is appointed for", o: ["One month", "One financial year", "Life", "None"], c: "One financial year" },
            { q: "GACAP stands for", o: ["Generally Accepted Cost Accounting Principles", "General Audit Cost and Profit", "Green Audit Cost and Principles", "None"], c: "Generally Accepted Cost Accounting Principles" },
            { q: "The goal of 5S in TPM is", o: ["Sales", "Workplace organization and standardization", "Safety only", "None"], c: "Workplace organization and standardization" },
            { q: "Throughput is", o: ["Sales only", "Rate at which system generates money through sales", "Only cost", "None"], c: "Rate at which system generates money through sales" },
            { q: "Activity based management aims to", o: ["Increase activities", "Optimize activities to improve customer value", "Only labor", "None"], c: "Optimize activities to improve customer value" },
            { q: "Life cycle costing is used in", o: ["Only design", "Strategic decision making", "Only tax", "None"], c: "Strategic decision making" }
        ]
    },
    {
        setName: "Set 15",
        questions: [
            { q: "The objective of cost audit is", o: ["Verify math only", "Verify cost of production and efficiency", "Only counting inventory", "None"], c: "Verify cost of production and efficiency" },
            { q: "CRA-1 provides", o: ["Audit report", "Rules for maintenance of cost records", "Only salary", "None"], c: "Rules for maintenance of cost records" },
            { q: "Casual vacancy is filled by", o: ["Audit committee", "Board of Directors", "Shareholders", "None"], c: "Board of Directors" },
            { q: "Internal audit is", o: ["Required for all shops", "Required for certain companies u/s 138", "Only for banks", "None"], c: "Required for certain companies u/s 138" },
            { q: "Propriety audit is a", o: ["Mathematical audit", "Quality of expenditure audit", "Legal audit only", "None"], c: "Quality of expenditure audit" },
            { q: "Operational audit provides", o: ["Only profit", "Insights into operational bottlenecks", "Only sales", "None"], c: "Insights into operational bottlenecks" },
            { q: "Management audit is", o: ["Narrow", "Interdisciplinary", "Only math", "None"], c: "Interdisciplinary" },
            { q: "Forensic audit helps in", o: ["Only profit", "Investigating white collar crimes", "Only HR", "None"], c: "Investigating white collar crimes" },
            { q: "IS audit evaluates", o: ["Only hardware", "Information security risk", "Only price", "None"], c: "Information security risk" },
            { q: "CSR Audit is related to", o: ["Sales only", "Corporate citizenship", "Only profit", "None"], c: "Corporate citizenship" },
            { q: "Environmental audit targets", o: ["Only smoke", "Ecological sustainability", "Only labor", "None"], c: "Ecological sustainability" },
            { q: "Audit risk includes", o: ["Only math risk", "Sampling and non-sampling risk", "Only sales risk", "None"], c: "Sampling and non-sampling risk" },
            { q: "Materiality depends on", o: ["Only size", "Size and nature of item", "Only color", "None"], c: "Size and nature of item" },
            { q: "Audit evidence is", o: ["Subjective", "Objective basis for audit opinion", "Only paper", "None"], c: "Objective basis for audit opinion" },
            { q: "Audit report is", o: ["Oral", "Written document conveying audit findings", "Only profit", "None"], c: "Written document conveying audit findings" }
        ]
    },
    {
        setName: "Set 16",
        questions: [
            { q: "Professional skepticism is", o: ["Optional", "Mandatory for auditors", "Prohibited", "None"], c: "Mandatory for auditors" },
            { q: "Internal audit should be", o: ["Part of accounting", "Separate from accounting and line functions", "Only sales", "None"], c: "Separate from accounting and line functions" },
            { q: "Cost audit report CRA-3 contains", o: ["Only math", "Cost auditor's observations and findings", "Only tax", "None"], c: "Cost auditor's observations and findings" },
            { q: "CRA-4 filing is", o: ["Mandatory for all", "Mandatory for companies under cost audit", "Voluntary", "None"], c: "Mandatory for companies under cost audit" },
            { q: "Audit of 'Raw Materials' involves", o: ["Counting chairs", "Verifying procurement and consumption records", "Only office staff", "None"], c: "Verifying procurement and consumption records" },
            { q: "Efficiency audit checks", o: ["Only math", "Resource conversion efficiency", "Only sales", "None"], c: "Resource conversion efficiency" },
            { q: "Performance audit results in", o: ["Only math", "Better resource utilization", "Only labor", "None"], c: "Better resource utilization" },
            { q: "ESG audit includes", o: ["Only math", "Sustainability assessment", "Only law", "None"], c: "Sustainability assessment" },
            { q: "Digital audit uses", o: ["Only paper", "CAATs and electronic evidence", "Only oral", "None"], c: "CAATs and electronic evidence" },
            { q: "The three pillars of sustainability are", o: ["Sales, Cost, Tax", "Economic, Environmental, Social", "Assets, Liabilities, Equity", "None"], c: "Economic, Environmental, Social" },
            { q: "Forensic audit reports are used in", o: ["Newspapers", "Courts of Law", "Only office", "None"], c: "Courts of Law" },
            { q: "IS audit includes", o: ["Only price", "IT governance review", "Only labor", "None"], c: "IT governance review" },
            { q: "CSR audit verify", o: ["Only profit", "Expenditure as per Schedule VII", "Only sales", "None"], c: "Expenditure as per Schedule VII" },
            { q: "Environmental compliance is part of", o: ["Tax audit", "Environmental audit", "Legal audit", "None"], c: "Environmental audit" },
            { q: "Cost audit ensures", o: ["Highest price", "Consumer protection through fair cost", "Only math", "None"], c: "Consumer protection through fair cost" }
        ]
    },
    {
        setName: "Set 17",
        questions: [
            { q: "Internal controls evaluation is", o: ["Optional", "Key part of audit planning", "Prohibited", "None"], c: "Key part of audit planning" },
            { q: "Audit of 'Work in Progress' involves", o: ["Ignoring WIP", "Verifying completion stage and valuation", "Only office", "None"], c: "Verifying completion stage and valuation" },
            { q: "Operational audit report contains", o: ["Only math", "Recommendations for improvement", "Only tax", "None"], c: "Recommendations for improvement" },
            { q: "Management audit is a", o: ["Static process", "Dynamic and continuous appraisal", "Only law", "None"], c: "Dynamic and continuous appraisal" },
            { q: "Forensic auditor is a", o: ["Normal accountant", "Financial detective", "Part of sales", "None"], c: "Financial detective" },
            { q: "IS audit objectives include", o: ["Only math", "Data security and system reliability", "Only hardware", "None"], c: "Data security and system reliability" },
            { q: "Social responsibility is", o: ["Optional", "Integral part of modern corporate strategy", "Prohibited", "None"], c: "Integral part of modern corporate strategy" },
            { q: "Propriety audit prevents", o: ["Profit", "Frivolous and wasteful expenditure", "Only labor", "None"], c: "Frivolous and wasteful expenditure" },
            { q: "Audit of 'Employee Benefits' is part of", o: ["Tax audit", "Labor/HR audit", "Only sales", "None"], c: "Labor/HR audit" }
        ]
    }
];