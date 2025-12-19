/**
 * Senior Data Analyst & JS Developer Extraction
 * Task: PDF to Structured JSON (JavaScript File)
 * Source: MCQBank_Paper14.pdf
 * Total Questions: 239
 */

const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "Relevant cost analysis or relevant costing is used for various managerial decisions, like", o: ["Make or buy decision", "Accepting or rejecting a special order", "Both 1 and 2", "Deciding sale quantity"], c: "Both 1 and 2" },
            { q: "Average Rate of Return (ARR) =", o: ["(Average Annual Profit after Tax/Average Investment) x 100", "(Average Annual Profit after Tax/Opening Investment) x 100", "(Average Annual Profit before Tax/Average Investment) x 100", "(Average Annual Profit after Tax/Net Sales) x 100"], c: "(Average Annual Profit after Tax/Average Investment) x 100" },
            { q: "A project with an initial investment of ₹ 50 Lakh and life of 10 years, generates CFAT of ₹ 10 Lakh per annum. Calculate the Payback Reciprocal.", o: ["10%", "20%", "100%", "None of these"], c: "20%" },
            { q: "A project requires an initial investment of ₹ 3,00,000. It yields annual cash inflow of ₹ 60,000 for 8 years. You are required to find out the pay-back period of the project.", o: ["8 years", "1 year", "5 years", "2 months"], c: "5 years" },
            { q: "A project requires an initial investment of ₹ 5,00,000. It yields annual cash inflow of ₹ 1,00,000 for 8 years. You are required to find out the pay-back period of the project.", o: ["8 years", "5 years", "1 year", "2 months"], c: "5 years" },
            { q: "Capital budgeting is a process of -", o: ["identifying, evaluating and selecting a long-term project", "identifying, evaluating and selecting a short-term project", "identifying, evaluating and selecting a project", "None of the above"], c: "identifying, evaluating and selecting a long-term project" },
            { q: "While evaluating a capital budgeting project, which of the following is not relevant?", o: ["Incremental cash flows", "Sunk costs", "Opportunity costs", "Inflation"], c: "Sunk costs" },
            { q: "While evaluating a project, the following are to be considered:", o: ["Cash flows", "Accounting profit", "Relevant costs", "Only 1 and 3"], c: "Only 1 and 3" },
            { q: "A project with an initial investment of ₹ 100 lakh and life of 10 years, generates CFAT of ₹ 25 Lakh per annum. Calculate the Payback Period.", o: ["4 years", "10 years", "25 years", "None of these"], c: "4 years" },
            { q: "Discounting technique includes-", o: ["NPV", "Internal Rate of Return (IRR)", "Profitability Index (PI)", "All of the above"], c: "All of the above" },
            { q: "Traditional method of capital budgeting includes-", o: ["Pay-back period", "ARR", "Both (1) and (2)", "NPV"], c: "Both (1) and (2)" },
            { q: "Pay-back period refers to-", o: ["Period within which total investment is recovered", "Period within which profit starts", "Life of the project", "none of the above"], c: "Period within which total investment is recovered" },
            { q: "The capital budgeting project is accepted if NPV is-", o: ["greater than zero", "less than zero", "equal to zero", "not defined"], c: "greater than zero" },
            { q: "Under Profitability Index, the project is accepted if PI is-", o: ["greater than 1", "less than 1", "equal to 1", "not defined"], c: "greater than 1" },
            { q: "Discounted pay-back period is-", o: ["Better than pay-back period", "Takes into consideration time value of money", "Both 1 and 2", "none of the above"], c: "Both 1 and 2" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "Internal Rate of Return is a rate at which-", o: ["NPV is zero", "NPV is one", "Total cash inflow is equal to initial investment", "both (1) and (3)"], c: "both (1) and (3)" },
            { q: "Profitability Index (PI) =", o: ["PV of cash inflow/Initial investment", "Initial investment/PV of cash inflow", "PV of cash inflow - Initial investment", "Initial investment - PV of cash inflow"], c: "PV of cash inflow/Initial investment" },
            { q: "While evaluating the project, if there is a conflict between NPV and IRR, generally priority is given to-", o: ["NPV", "IRR", "Depends on project", "None of the above"], c: "NPV" },
            { q: "Risk in capital budgeting project is due to-", o: ["uncertainty of future cash flows", "capital rationing", "time value of money", "all of the above"], c: "uncertainty of future cash flows" },
            { q: "Technique of evaluation of risk includes-", o: ["Sensitivity analysis", "Probability approach", "Standard Deviation", "All of the above"], c: "All of the above" },
            { q: "The decision of the company to limit the capital expenditure is known as-", o: ["Capital rationing", "Capital budgeting", "Profitability Index", "Internal Rate of Return"], c: "Capital rationing" },
            { q: "What is the Payback Reciprocal if the Payback Period is 4 years?", o: ["25%", "40%", "10%", "None of these"], c: "25%" },
            { q: "Opportunity cost refers to-", o: ["Value of the next best alternative", "Value of the project", "Variable cost of the project", "fixed cost of the project"], c: "Value of the next best alternative" },
            { q: "Which of the following describes the situation where a company has more acceptable projects than the funds it has available to invest?", o: ["Capital rationing", "Capital budgeting", "Asset management", "None of these"], c: "Capital rationing" },
            { q: "Which of the following techniques does not take into account the time value of money?", o: ["NPV", "Internal Rate of Return (IRR)", "Profitability Index (PI)", "ARR"], c: "ARR" },
            { q: "Inflation in evaluation of project results in-", o: ["Higher discount rate", "Lower discount rate", "No change in discount rate", "None of the above"], c: "Higher discount rate" },
            { q: "Under Sensitivity Analysis, we study-", o: ["impact on NPV due to change in one factor", "impact on NPV due to change in all factors", "probability of the project", "None of the above"], c: "impact on NPV due to change in one factor" },
            { q: "The value of a project is-", o: ["PV of its future cash flows", "total of its future cash flows", "total of its initial investment", "None of the above"], c: "PV of its future cash flows" },
            { q: "The formula for Net Present Value (NPV) is-", o: ["PV of cash inflows - Initial investment", "Initial investment - PV of cash inflows", "Initial investment/PV of cash inflows", "PV of cash inflows/Initial investment"], c: "PV of cash inflows - Initial investment" },
            { q: "Probability of the project refers to-", o: ["Likelihood of occurrence of a future event", "Certainty of the project", "Life of the project", "None of the above"], c: "Likelihood of occurrence of a future event" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "Cost of capital refers to-", o: ["Expected rate of return of the investors", "Minimum rate of return of the company", "Both (1) and (2)", "Interest rate of the bank"], c: "Both (1) and (2)" },
            { q: "Cost of debt capital (before tax) =", o: ["Interest/(Net proceeds or Face value)", "Net proceeds/Interest", "Interest x (1 - Tax rate)", "None of the above"], c: "Interest/(Net proceeds or Face value)" },
            { q: "Cost of debt capital (after tax) =", o: ["Interest x (1 - Tax rate)/Net proceeds", "Interest/Net proceeds", "Interest/(1 - Tax rate)", "None of the above"], c: "Interest x (1 - Tax rate)/Net proceeds" },
            { q: "Generally, the cost of equity is -", o: ["More than the cost of debt", "Less than the cost of debt", "Equal to the cost of debt", "None of the above"], c: "More than the cost of equity is more than the cost of debt" },
            { q: "The weighted average cost of capital (WACC) is calculated using-", o: ["Specific cost of each source of capital", "Weight of each source of capital", "Both (1) and (2)", "Only cost of equity"], c: "Both (1) and (2)" },
            { q: "Cost of preference shares (Kp) =", o: ["Preference dividend/Net proceeds", "Interest/Net proceeds", "Profit/Net proceeds", "None of the above"], c: "Preference dividend/Net proceeds" },
            { q: "Growth rate in Dividend Discount Model (DDM) is calculated as-", o: ["g = b x r", "g = b/r", "g = b + r", "g = b - r"], c: "g = b x r" },
            { q: "The CAPM (Capital Asset Pricing Model) for calculating cost of equity is-", o: ["Ke = Rf + β(Rm - Rf)", "Ke = Rf - β(Rm - Rf)", "Ke = Rf + β(Rm + Rf)", "Ke = Rf x β(Rm - Rf)"], c: "Ke = Rf + β(Rm - Rf)" },
            { q: "Risk-free rate (Rf) is-", o: ["Return on government securities", "Return on equity shares", "Return on debentures", "None of the above"], c: "Return on government securities" },
            { q: "Beta (β) in CAPM measures-", o: ["Systematic risk", "Unsystematic risk", "Total risk", "None of the above"], c: "Systematic risk" },
            { q: "Flotation cost refers to-", o: ["Cost of issuing new securities", "Cost of production", "Cost of management", "None of the above"], c: "Cost of issuing new securities" },
            { q: "The cost of retained earnings is-", o: ["Equal to cost of equity", "Less than cost of equity", "More than cost of equity", "Zero"], c: "Equal to cost of equity" },
            { q: "Which of the following is not a component of cost of capital?", o: ["Cost of debt", "Cost of equity", "Cost of preference shares", "Cost of sales"], c: "Cost of sales" },
            { q: "Market value weights are-", o: ["Better than book value weights", "Worse than book value weights", "Equal to book value weights", "None of the above"], c: "Better than book value weights" },
            { q: "Implicit cost of capital refers to-", o: ["Opportunity cost", "Actual cost", "Fixed cost", "Variable cost"], c: "Opportunity cost" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "A company has ₹ 10,00,000, 10% Debentures. Tax rate is 30%. Calculate the cost of debt (after tax).", o: ["7%", "10%", "3%", "13%"], c: "7%" },
            { q: "The Dividend Discount Model (DDM) with constant growth is-", o: ["Ke = (D1/P0) + g", "Ke = (D1/P0) - g", "Ke = (D1 x P0) + g", "Ke = (P0/D1) + g"], c: "Ke = (D1/P0) + g" },
            { q: "A company has a Beta (β) of 1.2, Risk-free rate (Rf) is 6%, and Market return (Rm) is 12%. Calculate Ke using CAPM.", o: ["13.20%", "12.00%", "18.00%", "7.20%"], c: "13.20%" },
            { q: "Retained earnings is-", o: ["Internal source of finance", "External source of finance", "Hybrid source of finance", "None of the above"], c: "Internal source of finance" },
            { q: "Financial leverage is-", o: ["Use of fixed interest bearing securities in capital structure", "Use of variable interest bearing securities", "Use of equity only", "None of the above"], c: "Use of fixed interest bearing securities in capital structure" },
            { q: "Operating leverage is calculated as-", o: ["Contribution/EBIT", "EBIT/Contribution", "EBIT/EBT", "EBT/EBIT"], c: "Contribution/EBIT" },
            { q: "Combined leverage is-", o: ["Operating leverage x Financial leverage", "Operating leverage + Financial leverage", "Operating leverage/Financial leverage", "None of the above"], c: "Operating leverage x Financial leverage" },
            { q: "Degree of Financial Leverage (DFL) =", o: ["EBIT/EBT", "EBT/EBIT", "Contribution/EBIT", "EBIT/Contribution"], c: "EBIT/EBT" },
            { q: "Financial break-even point is a level of EBIT where-", o: ["EPS is zero", "EBIT is zero", "Contribution is zero", "None of the above"], c: "EPS is zero" },
            { q: "Point of indifference refers to a level of EBIT where-", o: ["EPS is same for two different capital structures", "EPS is zero", "EBIT is zero", "None of the above"], c: "EPS is same for two different capital structures" },
            { q: "Operating risk is associated with-", o: ["Operating leverage", "Financial leverage", "Combined leverage", "None of the above"], c: "Operating leverage" },
            { q: "Financial risk is associated with-", o: ["Financial leverage", "Operating leverage", "Combined leverage", "None of the above"], c: "Financial leverage" },
            { q: "Capital structure refers to-", o: ["Mix of debt and equity", "Mix of assets", "Mix of sales", "None of the above"], c: "Mix of debt and equity" },
            { q: "Trading on equity is-", o: ["Use of debt to increase return on equity", "Use of equity to increase return on debt", "Selling of shares", "None of the above"], c: "Use of debt to increase return on equity" },
            { q: "Optimum capital structure is one which-", o: ["Minimizes WACC and maximizes value of firm", "Maximizes WACC", "Minimizes value of firm", "None of the above"], c: "Minimizes WACC and maximizes value of firm" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "Modigliani-Miller (MM) hypothesis (without tax) suggests-", o: ["Capital structure is irrelevant to value of firm", "Capital structure is relevant to value of firm", "Debt is better than equity", "Equity is better than debt"], c: "Capital structure is irrelevant to value of firm" },
            { q: "Net Income (NI) approach suggests-", o: ["Use of debt increases value of firm", "Use of debt decreases value of firm", "Capital structure is irrelevant", "None of the above"], c: "Use of debt increases value of firm" },
            { q: "Net Operating Income (NOI) approach suggests-", o: ["Capital structure is irrelevant to value of firm", "Capital structure is relevant", "WACC increases with debt", "None of the above"], c: "Capital structure is irrelevant to value of firm" },
            { q: "EBIT stands for-", o: ["Earnings Before Interest and Tax", "Earnings Before Income Tax", "Earnings Between Interest and Tax", "None of the above"], c: "Earnings Before Interest and Tax" },
            { q: "EBT stands for-", o: ["Earnings Before Tax", "Earnings Before Total", "Earnings By Tax", "None of the above"], c: "Earnings Before Tax" },
            { q: "EPS stands for-", o: ["Earnings Per Share", "Earnings Per Stock", "Earnings Per Stake", "None of the above"], c: "Earnings Per Share" },
            { q: "A company has EBIT of ₹ 10,00,000 and Interest of ₹ 2,00,000. Calculate DFL.", o: ["1.25", "5", "0.8", "2"], c: "1.25" },
            { q: "Dividend policy refers to-", o: ["Decision regarding distribution of profit", "Decision regarding investment", "Decision regarding production", "None of the above"], c: "Decision regarding distribution of profit" },
            { q: "Walter's model suggests that dividend policy is relevant if-", o: ["r is not equal to Ke", "r = Ke", "r < Ke", "None of the above"], c: "r is not equal to Ke" },
            { q: "Gordon's model is a-", o: ["Relevant theory of dividend", "Irrelevant theory of dividend", "Both 1 and 2", "None of the above"], c: "Relevant theory of dividend" },
            { q: "According to MM hypothesis, dividend policy is-", o: ["Irrelevant to value of firm", "Relevant to value of firm", "Depends on tax rate", "None of the above"], c: "Irrelevant to value of firm" },
            { q: "Bird-in-the-hand argument is associated with-", o: ["Gordon's model", "MM hypothesis", "Walter's model", "None of the above"], c: "Gordon's model" },
            { q: "Dividend payout ratio =", o: ["DPS/EPS", "EPS/DPS", "Dividend/Net profit", "Both 1 and 3"], c: "Both 1 and 3" },
            { q: "Retention ratio =", o: ["1 - Dividend payout ratio", "1 + Dividend payout ratio", "Dividend payout ratio - 1", "None of the above"], c: "1 - Dividend payout ratio" },
            { q: "Bonus shares are-", o: ["Free shares issued to existing shareholders", "Shares issued at a discount", "Shares issued for cash", "None of the above"], c: "Free shares issued to existing shareholders" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "Stock split results in-", o: ["Increase in number of shares and decrease in face value", "Decrease in number of shares", "Increase in face value", "None of the above"], c: "Increase in number of shares and decrease in face value" },
            { q: "Interim dividend is-", o: ["Dividend declared between two AGMs", "Dividend declared at the end of the year", "Dividend declared by the board", "Both 1 and 3"], c: "Both 1 and 3" },
            { q: "Ex-dividend date is-", o: ["Date on which share trades without dividend", "Date on which dividend is paid", "Date of AGM", "None of the above"], c: "Date on which share trades without dividend" },
            { q: "Record date is-", o: ["Date on which company identifies shareholders for dividend", "Date of payment", "Date of declaration", "None of the above"], c: "Date on which company identifies shareholders for dividend" },
            { q: "Working capital refers to-", o: ["Funds required for day-to-day operations", "Funds required for long-term investment", "Capital structure", "None of the above"], c: "Funds required for day-to-day operations" },
            { q: "Gross working capital =", o: ["Total Current Assets", "Total Current Assets - Total Current Liabilities", "Total Assets", "None of the above"], c: "Total Current Assets" },
            { q: "Net working capital =", o: ["Current Assets - Current Liabilities", "Current Assets + Current Liabilities", "Total Assets - Total Liabilities", "None of the above"], c: "Current Assets - Current Liabilities" },
            { q: "Operating cycle is-", o: ["Time taken to convert cash into inventory and back into cash", "Time taken for production", "Time taken for sales", "None of the above"], c: "Time taken to convert cash into inventory and back into cash" },
            { q: "Current ratio =", o: ["Current Assets/Current Liabilities", "Current Liabilities/Current Assets", "Total Assets/Total Liabilities", "None of the above"], c: "Current Assets/Current Liabilities" },
            { q: "Quick ratio (Acid test ratio) =", o: ["(Current Assets - Inventory - Prepaid expenses)/Current Liabilities", "Current Assets/Current Liabilities", "Cash/Current Liabilities", "None of the above"], c: "(Current Assets - Inventory - Prepaid expenses)/Current Liabilities" },
            { q: "Inventory turnover ratio =", o: ["COGS/Average Inventory", "Sales/Average Inventory", "Average Inventory/COGS", "None of the above"], c: "COGS/Average Inventory" },
            { q: "Receivables (Debtors) turnover ratio =", o: ["Credit Sales/Average Receivables", "Total Sales/Average Receivables", "Average Receivables/Credit Sales", "None of the above"], c: "Credit Sales/Average Receivables" },
            { q: "Cash management includes-", o: ["Management of cash inflows and outflows", "Optimizing cash balance", "Both (1) and (2)", "Only 1"], c: "Both (1) and (2)" },
            { q: "Baumol's model of cash management is based on-", o: ["Inventory management (EOQ model)", "Probability theory", "Linear programming", "None of the above"], c: "Inventory management (EOQ model)" },
            { q: "Miller-Orr model of cash management considers-", o: ["Uncertainty in cash flows", "Certainty in cash flows", "Fixed cash flows", "None of the above"], c: "Uncertainty in cash flows" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "Marketable securities are-", o: ["Highly liquid short-term investments", "Long-term investments", "Fixed assets", "None of the above"], c: "Highly liquid short-term investments" },
            { q: "Overtrading occurs when-", o: ["A company has too much turnover for its working capital", "A company has too much working capital", "A company has no turnover", "None of the above"], c: "A company has too much turnover for its working capital" },
            { q: "Factoring is-", o: ["Managing and collecting receivables through an agent (factor)", "Management of inventory", "Management of cash", "None of the above"], c: "Managing and collecting receivables through an agent (factor)" },
            { q: "Ageing schedule of debtors is-", o: ["Classification of debtors based on age of outstanding", "List of all debtors", "Total of debtors", "None of the above"], c: "Classification of debtors based on age of outstanding" },
            { q: "ABC analysis of inventory is based on-", o: ["Value and quantity of items", "Alphabetical order", "Production process", "None of the above"], c: "Value and quantity of items" },
            { q: "Economic Order Quantity (EOQ) =", o: ["√(2AO/C)", "√(AO/2C)", "2AO/C", "√(2AC/O)"], c: "√(2AO/C)" },
            { q: "In EOQ formula, 'O' stands for-", o: ["Ordering cost per order", "Carrying cost per unit", "Annual consumption", "None of the above"], c: "Ordering cost per order" },
            { q: "In EOQ formula, 'C' stands for-", o: ["Carrying cost per unit per annum", "Ordering cost", "Annual consumption", "None of the above"], c: "Carrying cost per unit per annum" },
            { q: "Safety stock is-", o: ["Stock held to avoid stock-out risk", "Stock held for sale", "Maximum stock", "None of the above"], c: "Stock held to avoid stock-out risk" },
            { q: "Re-order level =", o: ["Maximum usage x Maximum lead time", "Minimum usage x Minimum lead time", "Average usage x Average lead time", "None of the above"], c: "Maximum usage x Maximum lead time" },
            { q: "Lease financing is-", o: ["A contract for use of an asset for a periodic payment", "Buying an asset", "Selling an asset", "None of the above"], c: "A contract for use of an asset for a periodic payment" },
            { q: "Operating lease is-", o: ["Short-term and cancelable lease", "Long-term lease", "Hire purchase", "None of the above"], c: "Short-term and cancelable lease" },
            { q: "Financial lease is-", o: ["Long-term and generally non-cancelable lease", "Short-term lease", "Operating lease", "None of the above"], c: "Long-term and generally non-cancelable lease" },
            { q: "Sale and lease back occurs when-", o: ["An owner sells an asset and takes it back on lease", "A lessee sells an asset", "A lessor buys an asset", "None of the above"], c: "An owner sells an asset and takes it back on lease" },
            { q: "Capital structure theories include-", o: ["Net Income approach", "Net Operating Income approach", "MM hypothesis", "All of the above"], c: "All of the above" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "Derivatives include-", o: ["Forwards", "Futures", "Options", "All of the above"], c: "All of the above" },
            { q: "A forward contract is-", o: ["An agreement to buy/sell at a future date at a price agreed today", "Contract on a stock exchange", "Option to buy", "None of the above"], c: "An agreement to buy/sell at a future date at a price agreed today" },
            { q: "A future contract is-", o: ["Standardized forward contract traded on an exchange", "Private contract", "Non-standardized", "None of the above"], c: "Standardized forward contract traded on an exchange" },
            { q: "A call option gives the holder-", o: ["Right to buy", "Right to sell", "Obligation to buy", "Obligation to sell"], c: "Right to buy" },
            { q: "A put option gives the holder-", o: ["Right to sell", "Right to buy", "Obligation to buy", "Obligation to sell"], c: "Right to sell" },
            { q: "Premium is paid by-", o: ["Buyer of an option", "Seller of an option", "Both", "None"], c: "Buyer of an option" },
            { q: "In-the-money call option is one where-", o: ["Market price > Strike price", "Market price < Strike price", "Market price = Strike price", "None of the above"], c: "Market price > Strike price" },
            { q: "At-the-money option is one where-", o: ["Market price = Strike price", "Market price > Strike price", "Market price < Strike price", "None of the above"], c: "Market price = Strike price" },
            { q: "Hedging refers to-", o: ["Reducing risk", "Increasing risk", "Trading in shares", "None of the above"], c: "Reducing risk" },
            { q: "Arbitrage refers to-", o: ["Profiting from price difference in two different markets", "Buying and holding", "Speculation", "None of the above"], c: "Profiting from price difference in two different markets" },
            { q: "American option can be exercised-", o: ["Any time before or on expiry", "Only on expiry", "After expiry", "None of the above"], c: "Any time before or on expiry" },
            { q: "European option can be exercised-", o: ["Only on expiry", "Any time before expiry", "After expiry", "None of the above"], c: "Only on expiry" },
            { q: "Writer of an option is-", o: ["Seller of the option", "Buyer of the option", "Broker", "None of the above"], c: "Seller of the option" },
            { q: "Intrinsic value of a call option =", o: ["Max(0, MP - SP)", "Max(0, SP - MP)", "MP - SP", "SP - MP"], c: "Max(0, MP - SP)" },
            { q: "Beta (β) of a market portfolio is-", o: ["1", "0", "Greater than 1", "Less than 1"], c: "1" }
        ]
    },
    {
        setName: "Set 9",
        questions: [
            { q: "A risk-neutral investor is-", o: ["Indifferent to risk", "Risk-averse", "Risk-seeker", "None of the above"], c: "Indifferent to risk" },
            { q: "Portfolio diversification reduces-", o: ["Unsystematic risk", "Systematic risk", "Total risk to zero", "None of the above"], c: "Unsystematic risk" },
            { q: "Markowitz model is associated with-", o: ["Modern Portfolio Theory", "Capital Budgeting", "Working Capital", "None of the above"], c: "Modern Portfolio Theory" },
            { q: "Efficient frontier represents-", o: ["Portfolios with maximum return for a given level of risk", "Portfolios with minimum return", "Portfolios with highest risk", "None of the above"], c: "Portfolios with maximum return for a given level of risk" },
            { q: "Capital Asset Pricing Model (CAPM) relates-", o: ["Risk and expected return", "Cost and sales", "Debt and equity", "None of the above"], c: "Risk and expected return" },
            { q: "Arbitrage Pricing Theory (APT) is based on-", o: ["Multiple factors", "Single factor (Beta)", "Risk-free rate only", "None of the above"], c: "Multiple factors" },
            { q: "Sharpe ratio measures-", o: ["Excess return per unit of total risk (Standard Deviation)", "Excess return per unit of systematic risk (Beta)", "Return only", "None of the above"], c: "Excess return per unit of total risk (Standard Deviation)" },
            { q: "Treynor ratio measures-", o: ["Excess return per unit of systematic risk (Beta)", "Excess return per unit of total risk", "Return only", "None of the above"], c: "Excess return per unit of systematic risk (Beta)" },
            { q: "Jensen's Alpha measures-", o: ["Abnormal return of a portfolio over CAPM return", "Total return", "Risk of portfolio", "None of the above"], c: "Abnormal return of a portfolio over CAPM return" },
            { q: "Systematic risk is also called-", o: ["Market risk or non-diversifiable risk", "Specific risk", "Unique risk", "None of the above"], c: "Market risk or non-diversifiable risk" },
            { q: "Unsystematic risk is also called-", o: ["Specific risk or diversifiable risk", "Market risk", "General risk", "None of the above"], c: "Specific risk or diversifiable risk" },
            { q: "Correlation coefficient ranges from-", o: ["-1 to +1", "0 to 1", "-1 to 0", "None of the above"], c: "-1 to +1" },
            { q: "Perfect negative correlation (-1) between two assets-", o: ["Can reduce risk to zero", "Increases risk", "No change in risk", "None of the above"], c: "Can reduce risk to zero" },
            { q: "Standard deviation measures-", o: ["Total risk (volatility)", "Systematic risk", "Average return", "None of the above"], c: "Total risk (volatility)" },
            { q: "Covariance measures-", o: ["How two assets move together", "Return of an asset", "Risk of an asset", "None of the above"], c: "How two assets move together" }
        ]
    },
    {
        setName: "Set 10",
        questions: [
            { q: "Capital Market Line (CML) relates-", o: ["Return and total risk of efficient portfolios", "Return and Beta", "Risk and cost", "None of the above"], c: "Return and total risk of efficient portfolios" },
            { q: "Security Market Line (SML) relates-", o: ["Return and systematic risk (Beta)", "Return and total risk", "Risk and cost", "None of the above"], c: "Return and systematic risk (Beta)" },
            { q: "Financial risk includes-", o: ["Foreign exchange risk", "Interest rate risk", "Credit risk", "All of the above"], c: "All of the above" },
            { q: "Value at Risk (VaR) measures-", o: ["Maximum potential loss over a period at a given confidence level", "Average loss", "Total risk", "None of the above"], c: "Maximum potential loss over a period at a given confidence level" },
            { q: "Foreign exchange market is-", o: ["Market for buying and selling currencies", "Stock market", "Commodity market", "None of the above"], c: "Market for buying and selling currencies" },
            { q: "Spot rate is-", o: ["Exchange rate for immediate delivery", "Rate for future delivery", "Fixed rate", "None of the above"], c: "Exchange rate for immediate delivery" },
            { q: "Direct quote is-", o: ["Price of 1 unit of foreign currency in domestic currency", "Price of 1 unit of domestic currency in foreign currency", "Indirect quote", "None of the above"], c: "Price of 1 unit of foreign currency in domestic currency" },
            { q: "Indirect quote is-", o: ["Price of 1 unit of domestic currency in foreign currency", "Price of 1 unit of foreign currency in domestic currency", "Direct quote", "None of the above"], c: "Price of 1 unit of domestic currency in foreign currency" },
            { q: "Bid rate is-", o: ["Rate at which bank buys currency", "Rate at which bank sells currency", "Mid-rate", "None of the above"], c: "Rate at which bank buys currency" },
            { q: "Ask rate is-", o: ["Rate at which bank sells currency", "Rate at which bank buys currency", "Bid rate", "None of the above"], c: "Rate at which bank sells currency" },
            { q: "Bid-Ask spread refers to-", o: ["Difference between Ask and Bid rate", "Total of Bid and Ask rate", "Average rate", "None of the above"], c: "Difference between Ask and Bid rate" },
            { q: "Purchasing Power Parity (PPP) relates-", o: ["Exchange rates and inflation", "Exchange rates and interest rates", "Risk and return", "None of the above"], c: "Exchange rates and inflation" },
            { q: "Interest Rate Parity (IRP) relates-", o: ["Exchange rates and interest rates", "Exchange rates and inflation", "Risk and return", "None of the above"], c: "Exchange rates and interest rates" },
            { q: "Nostro account is-", o: ["Our account with you (foreign bank)", "Your account with us", "Personal account", "None of the above"], c: "Our account with you (foreign bank)" },
            { q: "Vostro account is-", o: ["Your account with us (foreign bank's account with domestic bank)", "Our account with you", "Joint account", "None of the above"], c: "Your account with us (foreign bank's account with domestic bank)" }
        ]
    },
    {
        setName: "Set 11",
        questions: [
            { q: "Loro account is-", o: ["Their account with you", "Our account", "Your account", "None of the above"], c: "Their account with you" },
            { q: "Foreign exchange risk includes-", o: ["Transaction exposure", "Translation exposure", "Economic exposure", "All of the above"], c: "All of the above" },
            { q: "Transaction exposure refers to-", o: ["Risk in actual cash flows due to exchange rate change", "Risk in accounting values", "Risk in competitive position", "None of the above"], c: "Risk in actual cash flows due to exchange rate change" },
            { q: "Translation (Accounting) exposure refers to-", o: ["Risk of change in value of consolidated financial statements", "Risk in cash flows", "Risk in sales", "None of the above"], c: "Risk of change in value of consolidated financial statements" },
            { q: "Economic exposure refers to-", o: ["Risk in long-term competitive position of firm", "Risk in cash flows", "Risk in accounting", "None of the above"], c: "Risk in long-term competitive position of firm" },
            { q: "Currency swap is-", o: ["Exchange of principal and interest in one currency for another", "Buying currency", "Selling currency", "None of the above"], c: "Exchange of principal and interest in one currency for another" },
            { q: "International Fisher Effect (IFE) relates-", o: ["Exchange rates and nominal interest rates", "Exchange rates and inflation", "Risk and return", "None of the above"], c: "Exchange rates and nominal interest rates" },
            { q: "Interest rate swap is-", o: ["Exchange of interest rate obligations (e.g. Fixed for Floating)", "Exchange of principal", "Exchange of currencies", "None of the above"], c: "Exchange of interest rate obligations (e.g. Fixed for Floating)" },
            { q: "Plain vanilla swap is-", o: ["Standard fixed-for-floating interest rate swap", "Currency swap", "Commodity swap", "None of the above"], c: "Standard fixed-for-floating interest rate swap" },
            { q: "ADR stands for-", o: ["American Depository Receipt", "American Deposit Rate", "American Debt Receipt", "None of the above"], c: "American Depository Receipt" },
            { q: "GDR stands for-", o: ["Global Depository Receipt", "Global Deposit Rate", "Global Debt Receipt", "None of the above"], c: "Global Depository Receipt" },
            { q: "FDI stands for-", o: ["Foreign Direct Investment", "Foreign Debt Investment", "Foreign Deposit Investment", "None of the above"], c: "Foreign Direct Investment" },
            { q: "FII stands for-", o: ["Foreign Institutional Investor", "Foreign Indirect Investment", "Foreign Investment Institute", "None of the above"], c: "Foreign Institutional Investor" },
            { q: "A cross rate is-", o: ["Exchange rate between two currencies calculated from a third currency", "Direct rate", "Spot rate", "None of the above"], c: "Exchange rate between two currencies calculated from a third currency" },
            { q: "Euro-currency is-", o: ["Currency held in banks outside its home country", "Currency of Europe", "Euro only", "None of the above"], c: "Currency held in banks outside its home country" }
        ]
    },
    {
        setName: "Set 12",
        questions: [
            { q: "LIBOR stands for-", o: ["London Inter-Bank Offered Rate", "London Inter-Bank Option Rate", "London International Bank Rate", "None of the above"], c: "London Inter-Bank Offered Rate" },
            { q: "MIBOR stands for-", o: ["Mumbai Inter-Bank Offered Rate", "Mumbai Inter-Bank Option Rate", "Mumbai International Bank Rate", "None of the above"], c: "Mumbai Inter-Bank Offered Rate" },
            { q: "Venture capital is-", o: ["Financing for start-up and small businesses with high growth potential", "Bank loan", "Public issue", "None of the above"], c: "Financing for start-up and small businesses with high growth potential" },
            { q: "Angel investor is-", o: ["An individual providing capital for start-up", "Institutional investor", "Venture capitalist", "None of the above"], c: "An individual providing capital for start-up" },
            { q: "Lease vs Buy decision is made by comparing-", o: ["NPV of leasing vs NPV of buying", "Total cost", "Only interest", "None of the above"], c: "NPV of leasing vs NPV of buying" },
            { q: "Financial engineering refers to-", o: ["Creating new financial instruments and processes", "Designing buildings", "Auditing", "None of the above"], c: "Creating new financial instruments and processes" },
            { q: "Capital structure irrelevance is associated with-", o: ["MM hypothesis (without tax)", "NI approach", "Walter model", "None of the above"], c: "MM hypothesis (without tax)" },
            { q: "Dividend irrelevance is associated with-", o: ["MM hypothesis", "Walter's model", "Gordon's model", "None of the above"], c: "MM hypothesis" },
            { q: "Over-capitalization occurs when-", o: ["A company has more capital than it can employ profitably", "A company has less capital", "Capital is zero", "None of the above"], c: "A company has more capital than it can employ profitably" },
            { q: "Under-capitalization occurs when-", o: ["A company has less capital than required for its operations", "A company has more capital", "Capital is zero", "None of the above"], c: "A company has less capital than required for its operations" },
            { q: "Credit rating is-", o: ["An assessment of the creditworthiness of a borrower", "Audit", "Financial statement", "None of the above"], c: "An assessment of the creditworthiness of a borrower" },
            { q: "Credit rating agencies in India include-", o: ["CRISIL, ICRA, CARE", "SEBI", "RBI", "None of the above"], c: "CRISIL, ICRA, CARE" },
            { q: "Commercial paper is-", o: ["Unsecured short-term money market instrument", "Secured loan", "Long-term debt", "None of the above"], c: "Unsecured short-term money market instrument" },
            { q: "Certificate of Deposit (CD) is-", o: ["A negotiable money market instrument issued by banks", "Unsecured loan", "Share certificate", "None of the above"], c: "A negotiable money market instrument issued by banks" },
            { q: "Bridge finance is-", o: ["Short-term loan to bridge the gap until long-term funds are raised", "Permanent loan", "Equity", "None of the above"], c: "Short-term loan to bridge the gap until long-term funds are raised" }
        ]
    },
    {
        setName: "Set 13",
        questions: [
            { q: "Corporate social responsibility (CSR) refers to-", o: ["Company's commitment to social and environmental wellbeing", "Maximizing profit only", "Paying tax", "None of the above"], c: "Company's commitment to social and environmental wellbeing" },
            { q: "Strategic financial management involves-", o: ["Managing finances to achieve long-term strategic goals", "Day-to-day accounting", "Auditing", "None of the above"], c: "Managing finances to achieve long-term strategic goals" },
            { q: "Mergers and acquisitions (M&A) are-", o: ["Corporate strategy for growth and diversification", "Liquidation", "Insolvency", "None of the above"], c: "Corporate strategy for growth and diversification" },
            { q: "Synergy in merger refers to-", o: ["Combined value > Sum of individual values (2 + 2 = 5)", "Combined value < Sum", "No change", "None of the above"], c: "Combined value > Sum of individual values (2 + 2 = 5)" },
            { q: "Horizontal merger is-", o: ["Merger between companies in the same industry", "Merger between companies in different industries", "Merger with supplier", "None of the above"], c: "Merger between companies in the same industry" },
            { q: "Vertical merger is-", o: ["Merger between companies in different stages of production (supplier/customer)", "Merger in same industry", "Conglomerate", "None of the above"], c: "Merger between companies in different stages of production (supplier/customer)" },
            { q: "Conglomerate merger is-", o: ["Merger between companies in unrelated businesses", "Merger in same industry", "Vertical merger", "None of the above"], c: "Merger between companies in unrelated businesses" },
            { q: "Hostile takeover is-", o: ["Acquiring a company against the wishes of its management", "Friendly merger", "Joint venture", "None of the above"], c: "Acquiring a company against the wishes of its management" },
            { q: "White knight is-", o: ["A friendly acquirer in a hostile takeover situation", "Hostile bidder", "Broker", "None of the above"], c: "A friendly acquirer in a hostile takeover situation" },
            { q: "Poison pill is-", o: ["A strategy to make a company unattractive to a hostile bidder", "Growth strategy", "Dividend policy", "None of the above"], c: "A strategy to make a company unattractive to a hostile bidder" },
            { q: "De-merger is-", o: ["Splitting a company into two or more entities", "Merger", "Acquisition", "None of the above"], c: "Splitting a company into two or more entities" },
            { q: "Spin-off is-", o: ["Creating a new independent company by distributing shares to existing shareholders", "Merger", "Liquidation", "None of the above"], c: "Creating a new independent company by distributing shares to existing shareholders" },
            { q: "Buyback of shares is-", o: ["Company buying its own shares from market", "Issuing new shares", "Stock split", "None of the above"], c: "Company buying its own shares from market" },
            { q: "LBO (Leveraged Buyout) is-", o: ["Acquisition using a significant amount of borrowed money", "Cash acquisition", "Equity swap", "None of the above"], c: "Acquisition using a significant amount of borrowed money" },
            { q: "Financial distress refers to-", o: ["Difficulty in meeting financial obligations", "High profit", "High sales", "None of the above"], c: "Difficulty in meeting financial obligations" }
        ]
    },
    {
        setName: "Set 14",
        questions: [
            { q: "Insolvency refers to-", o: ["Inability to pay debts as they fall due", "Bankruptcy", "Both 1 and 2", "None of the above"], c: "Both 1 and 2" },
            { q: "Corporate governance refers to-", o: ["System of rules, practices and processes by which a company is directed and controlled", "Managing employees", "Government control", "None of the above"], c: "System of rules, practices and processes by which a company is directed and controlled" },
            { q: "Agency problem arises due to-", o: ["Conflict of interest between managers and shareholders", "Conflict between employees", "Conflict with government", "None of the above"], c: "Conflict of interest between managers and shareholders" },
            { q: "Zero-base budgeting starts-", o: ["From scratch (zero balance)", "From previous year's budget", "From sales only", "None of the above"], c: "From scratch (zero balance)" },
            { q: "Capital structure relevance is associated with-", o: ["NI approach", "Traditional approach", "MM with tax", "All of the above"], c: "All of the above" },
            { q: "Gordon's growth model assumes-", o: ["Retention ratio is constant", "Cost of equity > Growth rate", "All equity firm", "All of the above"], c: "All of the above" },
            { q: "WACC is also known as-", o: ["Hurdle rate or cut-off rate", "IRR", "Accounting rate", "None of the above"], c: "Hurdle rate or cut-off rate" },
            { q: "A company has a WACC of 12% and a project has an IRR of 15%. Should the project be accepted?", o: ["Yes", "No", "Depends", "None"], c: "Yes" },
            { q: "Marginal cost of capital refers to-", o: ["Cost of the last rupee of new capital raised", "WACC", "Total cost", "None of the above"], c: "Cost of the last rupee of new capital raised" },
            { q: "Capital gearing ratio =", o: ["(Fixed interest bearing securities + Preference shares)/Equity shareholders' funds", "Equity/Debt", "Debt/Equity", "None of the above"], c: "(Fixed interest bearing securities + Preference shares)/Equity shareholders' funds" },
            { q: "Proprietary ratio =", o: ["Shareholders' funds/Total Assets", "Total Assets/Shareholders' funds", "Debt/Equity", "None of the above"], c: "Shareholders' funds/Total Assets" },
            { q: "Over-leveraged company has-", o: ["High debt in capital structure", "Low debt", "No debt", "None of the above"], c: "High debt in capital structure" },
            { q: "Debt-service coverage ratio (DSCR) measures-", o: ["Ability to pay interest and principal of debt", "Ability to pay dividend", "Profitability", "None of the above"], c: "Ability to pay interest and principal of debt" },
            { q: "Interest coverage ratio =", o: ["EBIT/Interest", "Interest/EBIT", "EBT/Interest", "None of the above"], c: "EBIT/Interest" },
            { q: "Cost of Preference Shares is calculated as:", o: ["Dividend/Net proceeds", "EBIT/Net Proceeds", "Interest/Net Proceeds", "None of these"], c: "Dividend/Net proceeds" }
        ]
    },
    {
        setName: "Set 15",
        questions: [
            { q: "Expected Return of a portfolio is the weighted average of expected returns of individual assets.", o: ["True", "False", "Sometimes", "Depends"], c: "True" },
            { q: "What is the beta of a risk-free asset?", o: ["0", "1", "-1", "0.5"], c: "0" },
            { q: "Which of the following describes the time taken to convert raw materials into cash from sales?", o: ["Operating Cycle", "Production Cycle", "Cash Cycle", "Business Cycle"], c: "Operating Cycle" },
            { q: "Which of the following is NOT an advantage of ABC analysis in inventory management?", o: ["Simplifies inventory tracking", "Focuses on high-value items", "Better control over resources", "Uniform control over all items"], c: "Uniform control over all items" },
            { q: "The cost of capital of a firm is the...", o: ["Internal Rate of Return", "Minimum rate of return required to maintain market value of the firm", "Dividend yield", "Cost of equity only"], c: "Minimum rate of return required to maintain market value of the firm" },
            { q: "Weighted Average Cost of Capital (WACC) is also called...", o: ["Overall cost of capital", "Marginal cost", "Composite cost", "Both 1 and 3"], c: "Both 1 and 3" },
            { q: "If the firm's growth rate is zero, then Ke =", o: ["D/P", "D/(P+g)", "P/D", "None"], c: "D/P" },
            { q: "Which of the following is an external source of finance?", o: ["Retained earnings", "Depreciation fund", "Equity shares", "None of these"], c: "Equity shares" },
            { q: "Financial leverage measures the relationship between...", o: ["EBIT and EPS", "Sales and EBIT", "Sales and EPS", "None"], c: "EBIT and EPS" },
            { q: "Which of the following is NOT a characteristic of a financial lease?", o: ["Non-cancelable", "Long-term", "Lessor bears the risk of obsolescence", "Full payout lease"], c: "Lessor bears the risk of obsolescence" },
            { q: "In a hire purchase, the ownership of the asset is transferred to the hirer...", o: ["At the time of signing the contract", "At the time of payment of the first installment", "At the time of payment of the last installment", "Never"], c: "At the time of payment of the last installment" },
            { q: "The term 'underwriting' in capital markets refers to...", o: ["Guaranteeing the sale of a new issue of securities", "Buying shares for long-term", "Auditing the accounts", "None"], c: "Guaranteeing the sale of a new issue of securities" },
            { q: "Which of the following is a Money Market instrument?", o: ["Equity shares", "Debentures", "Treasury bills", "Preference shares"], c: "Treasury bills" },
            { q: "Commercial Paper is generally issued by...", o: ["Small companies", "Highly rated large companies", "Government", "RBI"], c: "Highly rated large companies" },
            { q: "A 'Mutual Fund' is a...", o: ["Trust that pools money from investors", "Bank", "Stock exchange", "Insurance company"], c: "Trust that pools money from investors" }
        ]
    },
    {
        setName: "Set 16",
        questions: [
            { q: "Which of the following is a type of equity derivative?", o: ["Future", "Option", "Forward", "All of these"], c: "All of these" },
            { q: "The 'Strike Price' of an option is the...", o: ["Price at which the option is exercised", "Current market price", "Future expected price", "None"], c: "Price at which the option is exercised" },
            { q: "What is 'Mark-to-Market' in future contracts?", o: ["Daily settlement of profit and loss", "Settlement at expiry", "No settlement", "None"], c: "Daily settlement of profit and loss" },
            { q: "A 'Currency Forward' is used to...", o: ["Hedge exchange rate risk", "Speculate", "Both 1 and 2", "None"], c: "Both 1 and 2" },
            { q: "Which of the following is a 'Direct Quote' in India?", o: ["₹ 80 = $ 1", "$ 1 = ₹ 80", "₹ 1 = $ 0.0125", "None"], c: "₹ 80 = $ 1" },
            { q: "If the inflation rate in India is higher than in the USA, according to PPP, the Rupee should...", o: ["Depreciate against Dollar", "Appreciate against Dollar", "Remain unchanged", "None"], c: "Depreciate against Dollar" },
            { q: "Which of the following is an example of 'Systematic Risk'?", o: ["Change in interest rate", "Strike in a company", "Change in management", "New competitor in market"], c: "Change in interest rate" },
            { q: "The 'Efficient Market Hypothesis' (EMH) states that...", o: ["Market prices reflect all available information", "Markets are always wrong", "Investors are always rational", "None"], c: "Market prices reflect all available information" },
            { q: "In the 'Semi-strong form' of EMH, market prices reflect...", o: ["All past information", "All public information", "All private information", "None"], c: "All public information" },
            { q: "A 'Credit Default Swap' (CDS) is a...", o: ["Financial derivative for credit risk", "Currency swap", "Interest rate swap", "None"], c: "Financial derivative for credit risk" },
            { q: "The 'Dividend Payout Ratio' of a firm that pays no dividend is...", o: ["0%", "100%", "50%", "Not defined"], c: "0%" },
            { q: "Which of the following is a component of 'Inventory Carrying Cost'?", o: ["Storage cost", "Insurance cost", "Opportunity cost of funds", "All of these"], c: "All of these" },
            { q: "The 'Optimal Cash Balance' according to Baumol's model is where...", o: ["Transaction cost = Opportunity cost", "Total cost is maximum", "Transaction cost is zero", "None"], c: "Transaction cost = Opportunity cost" },
            { q: "A 'Euro Bond' is a bond issued in...", o: ["A currency other than the currency of the country where it is issued", "Euro only", "Europe only", "None"], c: "A currency other than the currency of the country where it is issued" },
            { q: "Which of the following is a type of foreign exchange exposure?", o: ["Transaction", "Translation", "Economic", "All of these"], c: "All of these" }
        ]
    }
];