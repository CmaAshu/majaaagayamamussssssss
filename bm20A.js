/**
 * Senior Data Analyst & JS Developer Extraction
 * Task: PDF to Structured JSON (JavaScript File)
 * Source: MCQ_Bank_Paper_20A.pdf
 * Total Questions: 261
 */

const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "Performance management is a key concept in the field of", o: ["Human Resource Management", "Financial Management", "Technical Analysis", "Marketing Management"], c: "Human Resource Management" },
            { q: "The most important issues of performance management are", o: ["Operation management", "It is a continuous process", "Alignment with strategic goal", "None of the above"], c: "Alignment with strategic goal" },
            { q: "The ratios are used to compare financial statements of different size companies or the same company over different periods.", o: ["Common size", "DuPont", "Liquidity", "P/E"], c: "Common size" },
            { q: "Trend analysis is an important tool of financial statement analysis and is also known as", o: ["Horizontal analysis", "Vertical analysis", "Pyramid method", "None of the above"], c: "Horizontal analysis" },
            { q: "is an important aspect of well-defined Procure to Pay process.", o: ["Supply chain management", "Strategic management", "Operations management", "Vendor management"], c: "Vendor management" },
            { q: "Vendor relationship management is an extension of relationship.", o: ["Supply chain management", "Buyer-supplier", "Porter's value chain", "Value analysis"], c: "Buyer-supplier" },
            { q: "is also referred as the 'focal' company in supply chain management.", o: ["Original equipment manufacturer", "Original band manufacturer", "Both (a) and (b)", "None of the above"], c: "Original equipment manufacturer" },
            { q: "Reverse mapping is used for", o: ["Supply chain management", "Demand chain management", "Product design", "Both (a) and (b)"], c: "Demand chain management" },
            { q: "Supply chain management (SCM) is the process of managing the flow of", o: ["Goods", "Information", "Finance", "All of the above"], c: "All of the above" },
            { q: "The primary objective of supply chain management is to", o: ["Reduce cost", "Increase customer satisfaction", "Minimize inventory", "Maximize profit"], c: "Increase customer satisfaction" },
            { q: "is a systematic process of identifying, analyzing and responding to project risk.", o: ["Risk management", "Management audit", "Strategic planning", "Operational control"], c: "Risk management" },
            { q: "Which of the following is not a component of the Balanced Scorecard?", o: ["Financial perspective", "Customer perspective", "Internal process perspective", "External environment perspective"], c: "External environment perspective" },
            { q: "is the process of comparing a firm's performance with the best in the industry.", o: ["Benchmarking", "Gap analysis", "SWOT analysis", "Value chain analysis"], c: "Benchmarking" },
            { q: "The 'Economic Value Added' (EVA) concept was popularized by", o: ["Michael Porter", "Stern Stewart & Co.", "Kaplan and Norton", "Peter Drucker"], c: "Stern Stewart & Co." },
            { q: "EVA = NOPAT - (Capital Employed $times$ ......)", o: ["Cost of Equity", "Cost of Debt", "WACC", "Interest Rate"], c: "WACC" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "Market Value Added (MVA) is the difference between", o: ["Market value and book value of equity", "Total market value and total capital contributed", "Sales and cost of goods sold", "Total assets and total liabilities"], c: "Total market value and total capital contributed" },
            { q: "The term 'Lean' in management refers to", o: ["Reducing staff", "Maximizing production", "Waste elimination", "Increasing complexity"], c: "Waste elimination" },
            { q: "Six Sigma aims at achieving a defect-free rate of", o: ["95.00%", "99.00%", "99.99966%", "100.00%"], c: "99.99966%" },
            { q: "DMAIC in Six Sigma stands for", o: ["Design, Measure, Analyze, Improve, Control", "Define, Measure, Analyze, Improve, Control", "Data, Metrics, Analysis, Input, Cost", "Define, Model, Apply, Inspect, Check"], c: "Define, Measure, Analyze, Improve, Control" },
            { q: "Total Productive Maintenance (TPM) focuses on", o: ["Employee morale", "Machine efficiency and zero breakdowns", "Inventory reduction", "Sales growth"], c: "Machine efficiency and zero breakdowns" },
            { q: "is a philosophy of continuous improvement in small steps.", o: ["Kaizen", "BPR", "TQM", "JIT"], c: "Kaizen" },
            { q: "The 'Triple Bottom Line' approach considers", o: ["Profit, People, Planet", "Sales, Expenses, Tax", "Assets, Liabilities, Capital", "Product, Price, Place"], c: "Profit, People, Planet" },
            { q: "Business Process Re-engineering (BPR) involves redesign of processes.", o: ["Incremental", "Minor", "Radical", "Static"], c: "Radical" },
            { q: "In the context of SCM, 'Bullwhip Effect' refers to", o: ["High profit margins", "Fluctuation in orders increasing up the supply chain", "Reduced lead times", "Supplier dominance"], c: "Fluctuation in orders increasing up the supply chain" },
            { q: "The 'Customer Perspective' in Balanced Scorecard includes", o: ["ROCE", "Market share", "Cycle time", "Employee turnover"], c: "Market share" },
            { q: "Corporate Social Responsibility (CSR) in India is governed by Section ...... of Companies Act, 2013.", o: ["135", "138", "148", "128"], c: "135" },
            { q: "The 'Internal Business Process' perspective in Balanced Scorecard focuses on", o: ["Brand awareness", "Process efficiency and quality", "Cash flow", "Customer satisfaction"], c: "Process efficiency and quality" },
            { q: "Which of the following is a non-financial performance measure?", o: ["ROI", "EPS", "Customer retention rate", "Net Profit Margin"], c: "Customer retention rate" },
            { q: "The concept of 'Critical Success Factors' (CSF) was developed by", o: ["John Rockart", "Michael Porter", "Philip Kotler", "Peter Senge"], c: "John Rockart" },
            { q: "is a set of performance measures that provides a comprehensive view of the business.", o: ["Balance Sheet", "Balanced Scorecard", "Cost Sheet", "Cash Flow Statement"], c: "Balanced Scorecard" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "Risk reporting helps in", o: ["Reducing transparency", "Effective decision making and risk mitigation", "Ignoring future events", "Increasing liability"], c: "Effective decision making and risk mitigation" },
            { q: "The primary tool for monitoring financial distress is", o: ["Z-Score model", "SWOT analysis", "PESTLE", "Porter's 5 forces"], c: "Z-Score model" },
            { q: "Altman's Z-Score model uses how many financial ratios for manufacturing firms?", o: ["3", "4", "5", "6"], c: "5" },
            { q: "A Z-Score below 1.81 indicates", o: ["Safe zone", "Grey zone", "Distress zone", "None of the above"], c: "Distress zone" },
            { q: "In Z-Score model, $X1$ represents", o: ["Working Capital / Total Assets", "Retained Earnings / Total Assets", "EBIT / Total Assets", "Sales / Total Assets"], c: "Working Capital / Total Assets" },
            { q: "Economic value added (EVA) is a ...... measure of performance.", o: ["Financial", "Non-financial", "Qualitative", "Operational"], c: "Financial" },
            { q: "Which of the following is not a cost of quality?", o: ["Prevention cost", "Appraisal cost", "Failure cost", "Marketing cost"], c: "Marketing cost" },
            { q: "Scrap and Rework are examples of", o: ["Internal failure cost", "External failure cost", "Prevention cost", "Appraisal cost"], c: "Internal failure cost" },
            { q: "Warranty claims are examples of", o: ["Internal failure cost", "External failure cost", "Prevention cost", "Appraisal cost"], c: "External failure cost" },
            { q: "Training of employees for quality is a", o: ["Prevention cost", "Appraisal cost", "Failure cost", "Fixed cost"], c: "Prevention cost" },
            { q: "The primary goal of Business Valuation is to determine the", o: ["Historical cost of assets", "Fair market value of the business", "Liquidation value only", "Tax liability"], c: "Fair market value of the business" },
            { q: "Valuation is required in case of", o: ["Merger and Acquisition", "IPO", "Buyback of shares", "All of the above"], c: "All of the above" },
            { q: "The 'Asset Based' approach of valuation is also known as", o: ["Income approach", "Net Asset Value (NAV) approach", "Market approach", "Relative valuation"], c: "Net Asset Value (NAV) approach" },
            { q: "In NAV approach, Intangible assets like Goodwill are", o: ["Always ignored", "Valued separately and added", "Subtracted from assets", "None of the above"], c: "Valued separately and added" },
            { q: "Discounted Cash Flow (DCF) is a ...... based valuation method.", o: ["Asset", "Income", "Market", "Cost"], c: "Income" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "Free Cash Flow to Firm (FCFF) = NOPAT + Depreciation - ...... - Change in Working Capital", o: ["Dividends", "Interest", "Capital Expenditure", "Tax"], c: "Capital Expenditure" },
            { q: "The discount rate used in FCFF model is", o: ["Cost of Equity", "Cost of Debt", "WACC", "Risk free rate"], c: "WACC" },
            { q: "Free Cash Flow to Equity (FCFE) considers", o: ["Only debt", "Only equity", "Cash flows available to equity holders after all obligations", "Total sales"], c: "Cash flows available to equity holders after all obligations" },
            { q: "The discount rate used in FCFE model is", o: ["Cost of Equity", "WACC", "Cost of Debt", "Market rate"], c: "Cost of Equity" },
            { q: "The 'Capitalization of Earnings' method is suitable for", o: ["New companies", "Stable and mature companies", "Loss making companies", "Liquidating companies"], c: "Stable and mature companies" },
            { q: "Relative Valuation uses", o: ["Cash flow projections", "Multiples like P/E, EV/EBITDA", "Asset values only", "Zero discount rate"], c: "Multiples like P/E, EV/EBITDA" },
            { q: "P/E Ratio =", o: ["Market Price / EPS", "EPS / Market Price", "Sales / EPS", "Market Price / Dividend"], c: "Market Price / EPS" },
            { q: "Enterprise Value (EV) =", o: ["Market Cap + Debt - Cash", "Market Cap - Debt + Cash", "Total Assets - Liabilities", "Sales $times$ Multiplier"], c: "Market Cap + Debt - Cash" },
            { q: "The 'Dividend Discount Model' (DDM) values a share as the present value of", o: ["Future earnings", "Future dividends", "Future sales", "Book value"], c: "Future dividends" },
            { q: "Gordon's Growth Model: $P0 = D1 / (......)$", o: ["$Ke + g$", "$Ke - g$", "$Ke $times$ g$", "$Ke / g$"], c: "$Ke - g$" },
            { q: "Capital Asset Pricing Model (CAPM) for Ke: $Rf + \\beta(......)$", o: ["$Rm + Rf$", "$Rm - Rf$", "$Rm / Rf$", "$Rm $times$ Rf$"], c: "$Rm - Rf$" },
            { q: "$\beta$ (Beta) in CAPM measures", o: ["Systematic Risk", "Unsystematic Risk", "Total Risk", "Internal Risk"], c: "Systematic Risk" },
            { q: "A $\beta$ of 1.0 means the stock is", o: ["More volatile than market", "Less volatile than market", "As volatile as the market", "Risk free"], c: "As volatile as the market" },
            { q: "Valuation of Goodwill using 'Super Profit' method: Super Profit $times$ ......", o: ["Rate of return", "Number of years purchase", "WACC", "Profit Margin"], c: "Number of years purchase" },
            { q: "Super Profit = Average Maintainable Profit - ......", o: ["Actual Profit", "Normal Profit", "Operating Cost", "Tax"], c: "Normal Profit" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "Normal Profit = Capital Employed $times$ ......", o: ["WACC", "Normal Rate of Return (NRR)", "Cost of Debt", "Dividend Yield"], c: "Normal Rate of Return (NRR)" },
            { q: "Human Resource Accounting (HRA) involves", o: ["Calculating payroll only", "Valuing the human capital of an organization", "Hiring costs only", "Employee turnover"], c: "Valuing the human capital of an organization" },
            { q: "The 'Economic Value' of human resources as per Lev and Schwartz model is based on", o: ["Historical cost", "Present value of future earnings", "Replacement cost", "Opportunity cost"], c: "Present value of future earnings" },
            { q: "Intellectual Capital = Human Capital + Structural Capital + ......", o: ["Financial Capital", "Relational/Customer Capital", "Fixed Assets", "Working Capital"], c: "Relational/Customer Capital" },
            { q: "Brand Valuation is important for", o: ["Balance sheet recognition", "M&A decisions", "Brand licensing", "All of the above"], c: "All of the above" },
            { q: "The 'Interbrand' model of brand valuation uses", o: ["Cost approach", "Financial earnings and brand strength", "Sales volume only", "Replacement cost"], c: "Financial earnings and brand strength" },
            { q: "Valuation of Intangible assets is covered under", o: ["Ind AS 103", "Ind AS 38", "Ind AS 113", "All of the above"], c: "All of the above" },
            { q: "Synergy in mergers means", o: ["$1 + 1 = 2$", "$1 + 1 > 2$", "$1 + 1 < 2$", "$1 + 1 = 0$"], c: "$1 + 1 > 2$" },
            { q: "Financial synergy results in", o: ["Lower cost of capital", "Higher sales", "Better product quality", "Reduced staff"], c: "Lower cost of capital" },
            { q: "Swap Ratio is determined based on", o: ["Market price", "EPS", "Book value", "Any or all of the above"], c: "Any or all of the above" },
            { q: "In a 'Cash' acquisition, the cost to the acquirer is", o: ["The cash paid", "Cash paid - Synergy", "Cash paid + Debt", "None of the above"], c: "The cash paid" },
            { q: "LBO stands for", o: ["Limited Business Operation", "Leveraged Buyout", "Legal Business Obligation", "Long-term Business Option"], c: "Leveraged Buyout" },
            { q: "The 'Fair Value' of a share as per the court's direction is usually the average of", o: ["Market value and NAV", "Yield value and NAV", "Book value and Market value", "Face value and Market value"], c: "Yield value and NAV" },
            { q: "Valuation of loss-making companies is generally done using", o: ["Earnings multiplier", "NAV/Liquidation value", "DDM", "DCF with high growth"], c: "NAV / Liquidation value" },
            { q: "The 'Discount for Lack of Marketability' (DLOM) is applied to", o: ["Publicly traded shares", "Closely held/Private company shares", "Government bonds", "Large cap stocks"], c: "Closely held / Private company shares" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "Control Premium is the extra amount paid for", o: ["High quality assets", "Acquiring a controlling stake in a company", "Reducing tax", "Better brand name"], c: "Acquiring a controlling stake in a company" },
            { q: "The 'Terminal Value' in DCF model represents the value of the firm", o: ["At the end of year 1", "During the explicit forecast period", "Beyond the explicit forecast period", "Only at liquidation"], c: "Beyond the explicit forecast period" },
            { q: "Which of the following is an 'Asset Based' multiple?", o: ["P/E Ratio", "Price to Book (P/B) Ratio", "EV/EBITDA", "Dividend Yield"], c: "Price to Book (P/B) Ratio" },
            { q: "Equity Value = Enterprise Value - ......", o: ["Assets", "Debt + Minority Interest", "Sales", "Working Capital"], c: "Debt + Minority Interest" },
            { q: "Intrinsic Value is based on", o: ["Market perception", "Fundamental analysis of future cash flows and risks", "Past stock prices only", "Competitor prices"], c: "Fundamental analysis of future cash flows and risks" },
            { q: "Economic value added is an estimate of a firm's", o: ["Accounting profit", "Economic profit", "Gross profit", "Cash flow"], c: "Economic profit" },
            { q: "Corporate governance aims to protect the interests of", o: ["Directors only", "Majority shareholders only", "All stakeholders", "Only the government"], c: "All stakeholders" },
            { q: "Strategic performance management aligns individual goals with", o: ["Personal interests", "Departmental goals only", "Organizational strategy", "None of the above"], c: "Organizational strategy" },
            { q: "Balanced Scorecard was developed by", o: ["Porter and Lawler", "Kaplan and Norton", "Maslow and Herzberg", "Taylor and Fayol"], c: "Kaplan and Norton" },
            { q: "The perspective that measures 'How do customers see us?' is", o: ["Financial", "Customer", "Internal Process", "Learning and Growth"], c: "Customer" },
            { q: "Supply chain management is a ...... concept.", o: ["Cross-functional", "Uni-functional", "Legal", "Marketing only"], c: "Cross-functional" },
            { q: "CRM stands for", o: ["Customer Relationship Management", "Customer Resource Management", "Cost Reduction Management", "Customer Revenue Management"], c: "Customer Relationship Management" },
            { q: "Value Chain Analysis was introduced by", o: ["Peter Drucker", "Michael Porter", "Igor Ansoff", "Alfred Chandler"], c: "Michael Porter" },
            { q: "Performance Prism is a ...... framework.", o: ["One dimensional", "Multi-dimensional", "Static", "Historical"], c: "Multi-dimensional" },
            { q: "A 'Strategy Map' is a visual representation of", o: ["Competitor locations", "Cause-and-effect relationships among BSC objectives", "Production floor layout", "Sales territories"], c: "Cause-and-effect relationships among BSC objectives" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "Benchmarking against a competitor in the same industry is", o: ["Internal Benchmarking", "Competitive Benchmarking", "Functional Benchmarking", "Generic Benchmarking"], c: "Competitive Benchmarking" },
            { q: "A 'Profit Centre' manager is responsible for", o: ["Costs only", "Revenues only", "Both Costs and Revenues", "Investment decisions"], c: "Both Costs and Revenues" },
            { q: "The goal of TQM is", o: ["Zero defects", "Maximum price", "Minimum labor", "High inventory"], c: "Zero defects" },
            { q: "Which of the following is a 'Lag' indicator?", o: ["Training hours", "Cycle time", "Return on Equity (ROE)", "Number of new products"], c: "Return on Equity (ROE)" },
            { q: "Which of the following is a 'Lead' indicator?", o: ["Net Profit", "Customer satisfaction score", "Employee skill level", "EPS"], c: "Employee skill level" },
            { q: "Environmental Management Accounting focuses on", o: ["Only tax on smoke", "Identification and allocation of environmental costs", "Planting trees", "None of the above"], c: "Identification and allocation of environmental costs" },
            { q: "The 'Learning and Growth' perspective focuses on", o: ["ROI", "Intangible assets like people and systems", "Sales growth", "Operating margin"], c: "Intangible assets like people and systems" },
            { q: "Strategic performance measurement differs from traditional systems by", o: ["Focusing only on short term", "Using only financial measures", "Linking performance to strategy", "Ignoring the external environment"], c: "Linking performance to strategy" },
            { q: "Business Valuation is an art and science of estimating the", o: ["Accounting value", "Economic value", "Voter value", "Political value"], c: "Economic value" },
            { q: "Which approach is most suitable for a service company with few tangible assets?", o: ["Asset approach", "Income approach", "Liquidation approach", "Cost approach"], c: "Income approach" },
            { q: "In 'Fair Value' hierarchy (Ind AS 113), Level 1 inputs are", o: ["Quoted prices in active markets", "Inputs other than quoted prices", "Unobservable inputs", "None of the above"], c: "Quoted prices in active markets" },
            { q: "Relative valuation is based on the law of", o: ["Diminishing returns", "One price", "Supply and demand", "Gravity"], c: "One price" },
            { q: "A 'Control' stake usually values ...... than a minority stake.", o: ["Lower", "Higher", "Same", "Zero"], c: "Higher" },
            { q: "WACC = $(We $times$ Ke) + (Wd $times$ Kd $times$ (1-t))$. Here '$t$' is", o: ["Time", "Tax rate", "Total cost", "Term"], c: "Tax rate" },
            { q: "Goodwill is tested for impairment ............ as per Ind AS 36.", o: ["Every month", "Annually", "Every 5 years", "Never"], c: "Annually" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "Valuation of brands is a component of valuing", o: ["Fixed assets", "Intangible assets", "Current assets", "Liabilities"], c: "Intangible assets" },
            { q: "Market Capitalization = Number of shares $times$ ......", o: ["Book value", "Market Price per share", "Face value", "Earnings per share"], c: "Market Price per share" },
            { q: "Which of the following describes the situation when one company takes over another?", o: ["Amalgamation", "Acquisition", "Demerger", "Spin-off"], c: "Acquisition" },
            { q: "The 'Replacement Cost' method is a ...... approach.", o: ["Asset", "Income", "Market", "Profit"], c: "Asset" },
            { q: "Which model uses a scorecard to measure non-financial performance?", o: ["Altman's model", "Balanced Scorecard", "DuPont model", "EVA model"], c: "Balanced Scorecard" },
            { q: "The primary purpose of risk management is to", o: ["Eliminate all risk", "Manage risk within acceptable limits", "Maximize risk", "Ignore risk"], c: "Manage risk within acceptable limits" },
            { q: "Enterprise Risk Management (ERM) covers", o: ["Only financial risk", "Only operational risk", "All risks facing an organization", "Only legal risk"], c: "All risks facing an organization" },
            { q: "A 'Grey Zone' in Z-score for manufacturing firms is", o: ["$<$ 1.81", "1.81 to 2.99", "$>$ 2.99", "0 to 1.0"], c: "1.81 to 2.99" },
            { q: "A Z-score above 2.99 indicates", o: ["Distress", "Grey zone", "Safe zone", "Bankruptcy"], c: "Safe zone" },
            { q: "Financial distress often leads to", o: ["Higher credit rating", "Insolvency", "Increased sales", "Better liquidity"], c: "Insolvency" },
            { q: "The process of splitting a company into independent parts is", o: ["Merger", "Acquisition", "Demerger", "Amalgamation"], c: "Demerger" },
            { q: "Goodwill arising from acquisition is calculated as", o: ["Purchase price - Net assets fair value", "Net assets - Purchase price", "Sales - Costs", "Assets - Liabilities"], c: "Purchase price - Net assets fair value" },
            { q: "In a 'Share-for-Share' exchange, the cost is determined by the", o: ["Value of shares issued", "Cash paid", "Book value of assets", "Face value of shares"], c: "Value of shares issued" },
            { q: "Which of the following is not a 'Structural' cost driver?", o: ["Scale", "Scope", "Experience", "Capacity utilization"], c: "Capacity utilization" },
            { q: "Which of the following is an 'Executional' cost driver?", o: ["Technology", "Complexity", "Workforce involvement", "Plant layout"], c: "Workforce involvement" }
        ]
    },
    {
        setName: "Set 9",
        questions: [
            { q: "Target Costing is most effective during the ...... phase.", o: ["Production", "Design", "Marketing", "Distribution"], c: "Design" },
            { q: "Life cycle costing takes a ...... view of product profitability.", o: ["Short-term", "Long-term", "Quarterly", "Monthly"], c: "Long-term" },
            { q: "The 'Customer Value' is the difference between", o: ["Price and Cost", "Benefits received and sacrifice made", "Sales and Expenses", "Assets and Liabilities"], c: "Benefits received and sacrifice made" },
            { q: "Strategic management is about achieving", o: ["Short-term profit", "Sustainable competitive advantage", "Higher production", "Lower taxes"], c: "Sustainable competitive advantage" },
            { q: "Value engineering focuses on", o: ["Increasing features", "Reducing cost without reducing quality/functionality", "Reducing quality to save cost", "Increasing sales"], c: "Reducing cost without reducing quality / functionality" },
            { q: "Benchmarking is a ...... process.", o: ["One-time", "Continuous", "Legal", "Secret"], c: "Continuous" },
            { q: "The perspective that addresses 'To succeed financially, how should we appear to our shareholders?' is", o: ["Customer", "Internal Process", "Financial", "Learning and Growth"], c: "Financial" },
            { q: "Total Quality Management (TQM) requires the participation of", o: ["Management only", "Workers only", "All employees", "Customers only"], c: "All employees" },
            { q: "Supply chain management includes", o: ["Suppliers", "Manufacturers", "Distributors", "All of the above"], c: "All of the above" },
            { q: "Inventory turnover ratio measures the", o: ["Profitability of inventory", "Efficiency of inventory management", "Total cost of inventory", "Market value of inventory"], c: "Efficiency of inventory management" },
            { q: "Operating profit margin = ...... / Sales", o: ["Net Profit", "EBIT", "Gross Profit", "EBT"], c: "EBIT" },
            { q: "Return on Investment (ROI) = Profit / ......", o: ["Sales", "Investment", "Expenses", "Assets"], c: "Investment" },
            { q: "Debt-Equity ratio measures", o: ["Liquidity", "Solvency/Financial leverage", "Activity", "Profitability"], c: "Solvency / Financial leverage" },
            { q: "Current ratio measures", o: ["Long term solvency", "Short term liquidity", "Efficiency", "Profitability"], c: "Short term liquidity" },
            { q: "The 'DuPont' analysis breaks down ROE into", o: ["Sales and Cost", "Assets and Liabilities", "Profit margin, Asset turnover, and Equity multiplier", "Cash and Debt"], c: "Profit margin, Asset turnover, and Equity multiplier" }
        ]
    },
    {
        setName: "Set 10",
        questions: [
            { q: "Valuation of a company as a 'Going Concern' assumes", o: ["Immediate liquidation", "Continued operations for the foreseeable future", "Sale of all assets", "Bankruptcy"], c: "Continued operations for the foreseeable future" },
            { q: "The 'Price to Earnings' multiple is influenced by", o: ["Growth prospects", "Risk", "Payout ratio", "All of the above"], c: "All of the above" },
            { q: "Price to Book value multiple is commonly used for", o: ["IT companies", "Banks and financial institutions", "Retail shops", "Startups"], c: "Banks and financial institutions" },
            { q: "EV/Sales multiple is useful for", o: ["High profit companies", "Companies with negative earnings but high growth", "Old manufacturing firms", "Government bodies"], c: "Companies with negative earnings but high growth" },
            { q: "Dividend yield = DPS / ......", o: ["EPS", "Market Price", "Book Value", "Face Value"], c: "Market Price" },
            { q: "In DCF, 'WACC' represents the", o: ["Cost of equity only", "Average cost of all sources of capital", "Risk free rate", "Interest on debt"], c: "Average cost of all sources of capital" },
            { q: "The 'Discounting' process converts", o: ["Present value to future value", "Future value to present value", "Cost to profit", "Assets to cash"], c: "Future value to present value" },
            { q: "Beta ($\beta$) of market portfolio is assumed to be", o: ["0", "1", "0.5", "-1"], c: "1" },
            { q: "If $\beta$ is 1.5, the stock is ...... than the market.", o: ["50% more volatile", "50% less volatile", "Same volatility", "Risk free"], c: "50% more volatile" },
            { q: "Market Risk Premium = ......", o: ["$Rm - Rf$", "$Rm + Rf$", "$Rf - Rm$", "$Rm $times$ Rf$"], c: "$Rm - Rf$" },
            { q: "Net Operating Profit After Tax (NOPAT) is", o: ["PAT + Interest(1-t)", "PAT - Interest", "EBIT - Tax", "Gross Profit - Interest"], c: "PAT + Interest(1-t)" },
            { q: "Capital Charge = Capital Employed $times$ ......", o: ["Rate of inflation", "WACC", "Cost of equity", "Bank rate"], c: "WACC" },
            { q: "Positive EVA suggests that the company is", o: ["Destroying wealth", "Creating wealth for shareholders", "In financial distress", "Breaking even"], c: "Creating wealth for shareholders" },
            { q: "Intangible assets are", o: ["Physical assets", "Non-physical assets with value", "Liabilities", "Current assets"], c: "Non-physical assets with value" },
            { q: "Human capital refers to the", o: ["Buildings", "Skills, knowledge and experience of employees", "Cash balance", "Customer list"], c: "Skills, knowledge and experience of employees" }
        ]
    },
    {
        setName: "Set 11",
        questions: [
            { q: "The 'interbrand' brand valuation model considers", o: ["Only historical cost", "Brand strength and financial performance", "Only sales", "Replacement cost"], c: "Brand strength and financial performance" },
            { q: "Synergy value = Value of (A+B) - [Value(A) + Value(B)]", o: ["True", "False", "Partially true", "None of these"], c: "True" },
            { q: "Vertical merger involves companies in", o: ["Same industry same level", "Unrelated industries", "Different stages of the same supply chain", "Same country only"], c: "Different stages of the same supply chain" },
            { q: "Horizontal merger involves companies in", o: ["Same industry at the same stage", "Unrelated industries", "Different countries", "Parent and subsidiary"], c: "Same industry at the same stage" },
            { q: "Conglomerate merger involves companies in", o: ["Same industry", "Different stages of supply chain", "Unrelated industries", "Same group"], c: "Unrelated industries" },
            { q: "A 'Hostile' takeover is one where", o: ["Management agrees", "Management opposes", "Government mandates", "Shareholders oppose"], c: "Management opposes" },
            { q: "White Knight is a", o: ["Hostile bidder", "Friendly acquirer in a hostile takeover situation", "Court official", "Legal advisor"], c: "Friendly acquirer in a hostile takeover situation" },
            { q: "Poison pill is a strategy to", o: ["Increase dividends", "Make a company unattractive to a hostile bidder", "Merge with a competitor", "Liquidate"], c: "Make a company unattractive to a hostile bidder" },
            { q: "Spin-off results in", o: ["A new independent company", "Merged company", "Closed company", "Acquired company"], c: "A new independent company" },
            { q: "The valuation of a business is based on its future", o: ["Liabilities", "Earnings and cash flows", "Past mistakes", "History"], c: "Earnings and cash flows" },
            { q: "Fair Market Value is the price at which property would change hands between a", o: ["Related buyer and seller", "Willing buyer and willing seller", "Bank and borrower", "Government and citizen"], c: "Willing buyer and willing seller" },
            { q: "Intrinsic Value of a share = (Net Assets - ......) / Number of shares", o: ["Current Assets", "Preference Capital + External Liabilities", "Sales", "Cash"], c: "Preference Capital + External Liabilities" },
            { q: "Yield value is based on the", o: ["Asset value", "Profitability/Earnings", "Cost of assets", "Face value"], c: "Profitability / Earnings" },
            { q: "PESTEL analysis looks at", o: ["Internal factors", "External environmental factors", "Individual performance", "Product quality"], c: "External environmental factors" },
            { q: "SWOT analysis stands for", o: ["Sales, Wealth, Options, Trends", "Strengths, Weaknesses, Opportunities, Threats", "Stability, Work, Output, Time", "None of the above"], c: "Strengths, Weaknesses, Opportunities, Threats" }
        ]
    },
    {
        setName: "Set 12",
        questions: [
            { q: "The Z-score model for non-manufacturing/service firms uses how many variables?", o: ["5", "4", "3", "6"], c: "4" },
            { q: "Which of the following is a symptom of financial distress?", o: ["High liquidity", "Declining profitability and negative cash flows", "Increasing market share", "Low debt-equity ratio"], c: "Declining profitability and negative cash flows" },
            { q: "Strategic performance management helps in", o: ["Goal alignment", "Effective communication of strategy", "Resource allocation", "All of the above"], c: "All of the above" },
            { q: "Total Quality Management (TQM) is a ...... approach to quality.", o: ["Departmental", "Holistic/Organization-wide", "Historical", "Technical"], c: "Holistic / Organization-wide" },
            { q: "The process of Just-in-Time (JIT) helps in", o: ["Reducing inventory holding costs", "Increasing production time", "Accumulating stock", "None of the above"], c: "Reducing inventory holding costs" },
            { q: "The 'Value' in Value Chain means the amount", o: ["Paid to workers", "Customers are willing to pay for what a firm provides", "Spent on raw materials", "Charged by the government"], c: "Customers are willing to pay for what a firm provides" },
            { q: "Supply Chain Management seeks to optimize the ...... system.", o: ["Internal", "Total/End-to-end", "Accounting", "Legal"], c: "Total / End-to-end" },
            { q: "Which perspective in BSC asks: 'To achieve our vision, how will we sustain our ability to change and improve?'", o: ["Financial", "Customer", "Internal Process", "Learning and Growth"], c: "Learning and Growth" },
            { q: "EVA creates value if", o: ["EVA $> 0$", "EVA $< 0$", "EVA $= 0$", "Profit is high"], c: "EVA > 0" },
            { q: "Intangible assets are governed by", o: ["Ind AS 16", "Ind AS 38", "Ind AS 2", "Ind AS 7"], c: "Ind AS 38" },
            { q: "The 'Yield' of a stock is the", o: ["Total return (Dividend + Capital Gain)", "Dividend only", "Capital gain only", "Face value"], c: "Total return (Dividend + Capital Gain)" },
            { q: "Relative valuation multiples can be", o: ["Equity multiples", "Enterprise value multiples", "Both (a) and (b)", "None of the above"], c: "Both (a) and (b)" },
            { q: "DCF valuation is sensitive to", o: ["Forecast period", "Growth rate", "Discount rate", "All of the above"], c: "All of the above" },
            { q: "A 'Minority Discount' is applied when", o: ["Valuing a large stake", "Valuing a stake that lacks control", "Selling to government", "None of the above"], c: "Valuing a stake that lacks control" },
            { q: "Valuation is as much an ...... as it is a science.", o: ["Art", "History", "Game", "Conflict"], c: "Art" }
        ]
    },
    {
        setName: "Set 13",
        questions: [
            { q: "Which of the following is a step in the valuation process?", o: ["Understanding the business", "Analyzing financial information", "Selecting valuation method", "All of the above"], c: "All of the above" },
            { q: "Under Ind AS 113, 'Exit Price' is the price that would be", o: ["Paid to acquire an asset", "Received to sell an asset", "Paid to transfer a liability", "Both (b) and (c)"], c: "Both (b) and (c)" },
            { q: "Fair value assumes that the transaction takes place in the", o: ["Secondary market", "Principal market", "Local market", "Restricted market"], c: "Principal market" },
            { q: "Market participants are assumed to be", o: ["Related parties", "Independent and knowledgeable", "Forced sellers", "None of the above"], c: "Independent and knowledgeable" },
            { q: "Terminal growth rate should generally not exceed the", o: ["Inflation rate", "Economy's long-term growth rate", "Short-term sales growth", "None of the above"], c: "Economy's long-term growth rate" },
            { q: "Capital Employed = ......", o: ["Total Assets", "Total Assets - Current Liabilities", "Shareholders' funds + Long term debt", "Both (b) and (c)"], c: "Both (b) and (c)" },
            { q: "Residual Income model is similar to", o: ["EVA", "DCF", "NAV", "P/E"], c: "EVA" },
            { q: "Intellectual Property Rights (IPR) include", o: ["Patents", "Copyrights", "Trademarks", "All of the above"], c: "All of the above" },
            { q: "Customer capital represents the value of", o: ["Employee skills", "Relationships with customers", "Physical stores", "Inventory"], c: "Relationships with customers" },
            { q: "Structural capital includes", o: ["Individual expertise", "Organizational processes, databases and patents", "Cash in hand", "None of the above"], c: "Organizational processes, databases and patents" },
            { q: "Human resource value should ideally be", o: ["Expensed", "Disclosed in financial statements as a separate asset (for management use)", "Ignored", "Depreciated only"], c: "Disclosed in financial statements as a separate asset (for management use)" },
            { q: "Value of synergy belongs to the", o: ["Acquirer", "Target", "Combined entity", "None"], c: "Combined entity" },
            { q: "An 'Operating' synergy results in", o: ["Economies of scale", "Increased market power", "Higher prices", "Both (a) and (b)"], c: "Both (a) and (b)" },
            { q: "The 'Exchange Ratio' is the number of shares of", o: ["Target given to Acquirer", "Acquirer given for each share of Target", "Both", "None"], c: "Acquirer given for each share of Target" },
            { q: "Pre-merger EPS of A = ₹ 10, B = ₹ 5. If merger creates no synergy, post-merger EPS will be the", o: ["Sum of two", "Weighted average of two", "Maximum of two", "Minimum of two"], c: "Weighted average of two" }
        ]
    },
    {
        setName: "Set 14",
        questions: [
            { q: "A 'Financial' merger is motivated by", o: ["Product diversification", "Tax benefits and diversification of risk", "Increased production", "None of the above"], c: "Tax benefits and diversification of risk" },
            { q: "Brand equity is the", o: ["Value of the brand name in the market", "Total assets of company", "Cost of advertising", "None"], c: "Value of the brand name in the market" },
            { q: "Valuation of a startup often uses", o: ["Discounted cash flow (with high terminal value)", "Scorecard method", "Venture capital method", "All of the above"], c: "All of the above" },
            { q: "The 'Market' approach of valuation relies on", o: ["Internal costs", "Prices of comparable companies or transactions", "Discounted profits", "Book value"], c: "Prices of comparable companies or transactions" },
            { q: "Price to Sales multiple is useful for companies with", o: ["High profits", "Volatile or negative earnings", "Large assets", "None"], c: "Volatile or negative earnings" },
            { q: "EV/EBITDA multiple is", o: ["Capital structure dependent", "Capital structure neutral", "Based on equity only", "None"], c: "Capital structure neutral" },
            { q: "A 'Valuation Report' should clearly state the", o: ["Date of valuation", "Purpose of valuation", "Standard of value used", "All of the above"], c: "All of the above" },
            { q: "Under Ind AS 38, brands that are ...... are not recognized as assets.", o: ["Purchased", "Internally generated", "Acquired in merger", "Licensed"], c: "Internally generated" },
            { q: "The 'Relief from Royalty' method is used for valuing", o: ["Buildings", "Trademarks and Patents", "Inventory", "Labor"], c: "Trademarks and Patents" },
            { q: "Value of a business = Present Value of Cash Flows + ......", o: ["PV of Terminal Value", "Total Debt", "Accumulated Depreciation", "Sales"], c: "PV of Terminal Value" },
            { q: "Total Risk = Systematic Risk + ......", o: ["Financial Risk", "Unsystematic Risk", "Market Risk", "Business Risk"], c: "Unsystematic Risk" },
            { q: "Beta ($\beta$) is the slope of the", o: ["Security Market Line", "Capital Market Line", "Characteristic Line", "Regression Line"], c: "Characteristic Line" },
            { q: "Diversification reduces", o: ["Systematic Risk", "Unsystematic Risk", "Market Risk", "None"], c: "Unsystematic Risk" },
            { q: "WACC is the ...... rate for new projects in DCF.", o: ["Max", "Min/Hurdle", "Average", "Risk-free"], c: "Min / Hurdle" },
            { q: "In Z-score, a lower score indicates ...... risk of failure.", o: ["Lower", "Higher", "Zero", "No change"], c: "Higher" }
        ]
    },
    {
        setName: "Set 15",
        questions: [
            { q: "Performance management is a", o: ["One-time activity", "Continuous cycle", "Legal requirement only", "Accounting entry"], c: "Continuous cycle" },
            { q: "Key Performance Indicators (KPIs) should be", o: ["Vague", "Measurable and relevant to strategy", "Qualitative only", "Based on history only"], c: "Measurable and relevant to strategy" },
            { q: "Strategic performance management helps in 'Closing the ...' between strategy and execution.", o: ["Gap", "Balance", "Profit", "Cycle"], c: "Gap" },
            { q: "Supply chain integration leads to", o: ["Higher costs", "Improved efficiency and responsiveness", "Increased inventory", "None"], c: "Improved efficiency and responsiveness" },
            { q: "The 'Financial' perspective in BSC answers: 'To succeed financially, how should we appear to our ......?'", o: ["Employees", "Customers", "Shareholders", "Government"], c: "Shareholders" },
            { q: "EVA is a better measure than Net Profit because it considers the", o: ["Tax only", "Cost of equity capital", "Interest on debt only", "Sales volume"], c: "Cost of equity capital" },
            { q: "MVA measures the value ...... by management since inception.", o: ["Spent", "Created", "Lost", "None"], c: "Created" },
            { q: "In HRA, 'Replacement Cost' is the cost of", o: ["Acquiring an employee today", "Historical training", "Opportunity lost", "None"], c: "Acquiring an employee today" },
            { q: "Corporate social responsibility promotes", o: ["Sustainable development", "Short term gain", "Employee exploitation", "Tax evasion"], c: "Sustainable development" },
            { q: "Business ethics refers to", o: ["Legal rules only", "Moral principles that guide business behavior", "Maximizing profit at any cost", "None"], c: "Moral principles that guide business behavior" },
            { q: "Risk management is the responsibility of", o: ["Only the CEO", "The Board and Management", "Only the Auditor", "None"], c: "The Board and Management" },
            { q: "Financial ratios are tools for", o: ["Historical recording only", "Analysis and interpretation of financial data", "Zeroing out tax", "None"], c: "Analysis and interpretation of financial data" },
            { q: "Liquidity ratios measure the ability to meet ...... obligations.", o: ["Long term", "Short term", "Legal", "Social"], c: "Short term" },
            { q: "Solvency ratios measure the ability to meet ...... obligations.", o: ["Short term", "Long term", "Sales", "Employee"], c: "Long term" },
            { q: "Profitability ratios measure the ...... of the firm.", o: ["Size", "Health and performance", "Debt", "Compliance"], c: "Health and performance" }
        ]
    },
    {
        setName: "Set 16",
        questions: [
            { q: "Activity ratios measure how ...... a company uses its assets.", o: ["Quickly", "Efficiently", "Illegally", "Slowly"], c: "Efficiently" },
            { q: "Common size income statement expresses all items as a percentage of", o: ["Total Assets", "Sales/Revenue", "Total Equity", "Net Profit"], c: "Sales / Revenue" },
            { q: "Common size balance sheet expresses all items as a percentage of", o: ["Total Sales", "Total Assets/Liabilities", "Net Worth", "Cash"], c: "Total Assets / Liabilities" },
            { q: "Trend percentage = (Current Year / ......) $times$ 100", o: ["Previous Year", "Base Year", "Average Year", "Next Year"], c: "Base Year" },
            { q: "Valuation of a business is based on its ...... earning capacity.", o: ["Past", "Future", "Current", "No"], c: "Future" },
            { q: "The 'Discount Rate' incorporates both time value and", o: ["Sales", "Risk", "Cost", "History"], c: "Risk" },
            { q: "Enterprise value includes both ...... and debt holders' interests.", o: ["Customers", "Equity", "Vendors", "Employees"], c: "Equity" },
            { q: "Fair value measurement u/s 113 uses a ...... perspective.", o: ["Buyer's", "Seller's", "Market participant's", "Entity's"], c: "Market participant's" },
            { q: "Goodwill is an asset that is not", o: ["Identifiable separately", "Valuable", "Amortizable (under Ind AS)", "Both (a) and (c)"], c: "Both (a) and (c)" },
            { q: "Intellectual capital is the sum of all ...... in a company.", o: ["Cash", "Knowledge and intangible assets", "Machines", "Debts"], c: "Knowledge and intangible assets" },
            { q: "Brand value is driven by brand ...... and strength.", o: ["Color", "Earnings", "Location", "Size"], c: "Earnings" },
            { q: "Merger leads to ...... of two or more entities.", o: ["Separation", "Combination", "Dissolution", "Liquidation"], c: "Combination" },
            { q: "Synergy should be ...... in the valuation of the combined firm.", o: ["Ignored", "Added", "Subtracted", "Zeroed"], c: "Added" },
            { q: "The 'Pre-merger' value of a firm is its standalone value.", o: ["True", "False", "Sometimes", "Never"], c: "True" },
            { q: "A 'Reverse' merger is when a private company merges into a", o: ["Government body", "Public company", "Foreign body", "Individual"], c: "Public company" }
        ]
    },
    {
        setName: "Set 17",
        questions: [
            { q: "A 'Spin-off' is a form of", o: ["Merger", "Divestiture/Demerger", "Investment", "IPO"], c: "Divestiture / Demerger" },
            { q: "The 'Purchase Price' in a merger is the consideration paid to", o: ["Acquirer's shareholders", "Target's shareholders", "Debenture holders", "Government"], c: "Target's shareholders" },
            { q: "EPS of Acquirer = Total Earnings / (Original shares + ...... )", o: ["Target shares", "New shares issued for Target", "Bonus shares", "None"], c: "New shares issued for Target" },
            { q: "Market value of target = ₹ 100 cr, Acquirer pays ₹ 120 cr. Premium = ?", o: ["₹ 10 cr", "₹ 20 cr", "₹ 220 cr", "₹ 0"], c: "₹ 20 cr" },
            { q: "Business risk depends on the ...... environment.", o: ["Financial", "Operating", "Voter", "None"], c: "Operating" },
            { q: "Financial risk depends on the ...... structure.", o: ["Asset", "Capital/Debt", "Operating", "None"], c: "Capital / Debt" },
            { q: "Beta ($\beta$) of a risk-free asset is", o: ["1", "0", "0.5", "None"], c: "0" },
            { q: "In DCF, 'Free Cash Flow' is cash flow available to", o: ["Only debt holders", "All capital providers (debt and equity)", "Only employees", "Only government"], c: "All capital providers (debt and equity)" },
            { q: "Capitalization rate = ......", o: ["Cost of capital - Growth rate", "Cost of capital + Growth rate", "WACC $times$ 2", "None"], c: "Cost of capital - Growth rate" },
            { q: "Terminal value is often calculated using the ...... growth model.", o: ["Constant/Gordon", "Zero", "Linear", "None"], c: "Constant / Gordon" },
            { q: "Valuation of closely held companies involves more", o: ["Certainty", "Judgment and discounts", "Public data", "None"], c: "Judgment and discounts" },
            { q: "Non-operating assets should be valued separately and ...... to business value.", o: ["Added", "Subtracted", "Ignored", "None"], c: "Added" },
            { q: "Control allows the acquirer to change ...... and strategy.", o: ["Color of building", "Management", "Name only", "None"], c: "Management" },
            { q: "Relative valuation assumes markets are ...... on average.", o: ["Wrong", "Correct", "Static", "None"], c: "Correct" },
            { q: "Enterprise value is capital structure ...... .", o: ["Dependent", "Neutral", "Only debt", "None"], c: "Neutral" }
        ]
    },
    {
        setName: "Set 18",
        questions: [
            { q: "A firm will have constant FCF of ₹ 25 lakh for 7 years. The discount rate is 10%. $PV = ?$", o: ["150.7 lakh", "175.0 lakh", "121.7 lakh", "56.87 lakh"], c: "121.7 lakh" },
            { q: "A firm's debt = 120 crore, equity = ₹ 180 crore, cost of debt = 9%, cost of equity = 15%. $Tax = 30\\%$ $WACC = ?$", o: ["0.1152", "0.1260", "0.1080", "0.1320"], c: "0.1152" },
            { q: "A firm's intrinsic value per share (180) is higher than market price (150). This suggests:", o: ["Stock is overvalued", "Stock is undervalued", "Market is correct", "None"], c: "Stock is undervalued" },
            { q: "A company owns machinery with a book value of 50 lakh. Its market value is 65 lakh. For valuation purposes, the asset should be recorded at:", o: ["50 lakh", "65 lakh", "57.5 lakh", "Zero"], c: "65 lakh" },
            { q: "Land purchased for 30 lakh, replacement cost 50 lakh, accumulated depreciation = ₹ 10 lakh. Depreciated replacement $cost = ?$", o: ["20 lakh", "30 lakh", "40 lakh", "50 lakh"], c: "40 lakh" },
            { q: "A company has inventory costing 20 lakh. Replacement cost = 22 lakh. NRV = 19 lakh. Inventory value for balance sheet = ?", o: ["20 lakh", "22 lakh", "19 lakh", "21 lakh"], c: "19 lakh" }
        ]
    }
];