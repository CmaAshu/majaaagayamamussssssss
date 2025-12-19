// --- DATA: 15 Questions Per Set (Extracted from 11.md) ---
const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "1. ₹25,000 is being invested at the beginning of every year. At the end of year II, considering a 10% interest rate, what is today's value of the annual investments from year I till and including year V? (Take discount factors: 0.909, 0.826, 0.751, 0.683, 0.621, 0.564 for years 1-6)", o: [], c: "₹1,25,000" },
            { q: "2. Perpetual 15% debentures of ₹1,000 are sold at a premium of 10% with no floatation costs. Taking corporate tax rate at 35%, the after-tax cost of capital will be:", o: ["6.88%", "7.88%", "8.86%", "10.73%"], c: "8.86%" },
            { q: "3. In 2011-12, XYZ Pharma Ltd. had a profit margin of 20% and asset turnover of 3 times. At the end of 2012-13, the profit margin decreases by 5% and asset turnover increased to 4 times. The return on investment for 2012-13 will be:", o: ["80%", "60%", "50%", "70%"], c: "60%" },
            { q: "4. Given that Sales = ₹50,000, Variable Cost = ₹30,000, Fixed Cost = ₹12,000, the operating leverage will be:", o: ["2.2", "2.0", "2.5", "3.0"], c: "2.50" },
            { q: "5. Companies P and Q are competitors for product PQ. Company P has a higher degree of operating leverage than Q. If demand for PQ decreases:", o: ["True", "False"], c: "True" },
            { q: "6. The Internal Rate of Return (IRR) assumes that cash flows are reinvested at:", o: ["True", "False"], c: "False" },
            { q: "7. If dividends grow at rate g p.a. and cost of equity is k, the current market price of a share is determined by a geometric progression with common ratio (1+g)/(1+k):", o: ["True", "False"], c: "True" },
            { q: "8. The MM Hypothesis assumes that the overall cost of capital is independent of the capital structure:", o: ["True", "False"], c: "True" },
            { q: "9. Which of the following is the main objective of financial management?", o: ["Revenue Maximisation", "Profit Maximisation", "Wealth Maximisation", "Cost Minimisation"], c: "Wealth Maximisation" },
            { q: "10. Which one of the following activities is outside the purview of financing decision in financial management?", o: ["Identification of the source of funds", "Measurement of the cost of funds", "Deciding on the time of raising the funds", "Deciding on the utilization of the funds"], c: "Deciding on the utilization of the funds" },
            { q: "11. A firm has capital of ₹10 lakhs, sales of ₹5 lakhs, gross profit of ₹2 lakhs and expenses of ₹1 lakh. The Net Profit Ratio is:", o: ["50%", "40%", "20%", "10%"], c: "20%" },
            { q: "12. Which of the following forms of equity financing is especially designed for funding High Risk High Reward projects?", o: ["ADR", "GDR", "FCCB", "Venture Capital"], c: "Venture Capital" },
            { q: "13. A process through which loans and other receivables are underwritten and sold in the form of an asset is known as:", o: ["Factoring", "Forfeiting", "Securitisation", "Bill Discounting"], c: "Securitisation" },
            { q: "14. In Net Profit Ratio, the denominator is:", o: ["Credit Sales", "Net Sales", "Cost of Sales", "Cost of Goods Sold"], c: "Net Sales" },
            { q: "15. ROI (Return on Investment) can be decomposed into the following ratios:", o: ["Overall Turnover Ratio and Current Ratio", "Net Profit Ratio and Fixed Assets Turnover", "Working Capital Turnover Ratio and Net Profit Ratio", "Net Profit Ratio and Overall Turnover Ratio"], c: "Net Profit Ratio and Overall Turnover Ratio" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "16. Which one of the following activities is outside the purview of dividend decision in financial management?", o: ["Identification of the profit after taxes", "Measurement of the cost of funds", "Deciding on the pay-out ratio", "Considering issue of bonus shares to equity shareholders"], c: "Measurement of the cost of funds" },
            { q: "17. Which of the following does NOT help to increase Current Ratio?", o: ["Issue of Debentures to buy Stock", "Issue of Debentures to pay Creditors", "Sale of Investment to pay Creditors", "Avail Bank Overdraft to buy Machine"], c: "Avail Bank Overdraft to buy Machine" },
            { q: "18. Which of the following statements is correct?", o: ["A higher Receivable Turnover is not desirable", "Interest Coverage Ratio depends upon Tax Rate", "Increase in Net Profit Ratio means increase in Sales", "Lower Debt-Equity Ratio means lower Financial Risk"], c: "Lower Debt-Equity Ratio means lower Financial Risk" },
            { q: "19. Shareholders' wealth in a firm is reflected by:", o: ["The number of people employed in the firm", "The book value of the firm's assets less the book value of its liabilities", "The amount of salary paid to its employees", "The market price per share of the firm"], c: "The market price per share of the firm" },
            { q: "20. The excess of Current Assets over Current Liabilities is called:", o: ["Net Current Assets", "Net Working Capital", "Working Capital", "All of the above"], c: "All of the above" },
            { q: "21. Which of the following is a Profitability Ratio?", o: ["Proprietary Ratio", "Debt-Equity Ratio", "Price-Earning Ratio", "Fixed Assets Ratio"], c: "Price-Earning Ratio" },
            { q: "22. Which of the following is NOT a source of fund?", o: ["Issue of Capital", "Issue of Debenture", "Decrease in Working Capital", "Increase in Working Capital"], c: "Increase in Working Capital" },
            { q: "23. A Depository Receipt in the US market is called:", o: ["Divisible Risk", "Financial Risk", "American Depository Receipt (ADR)", "None of the above"], c: "American Depository Receipt (ADR)" },
            { q: "24. Beta of a security measures:", o: ["Systematic Risk", "Unsystematic Risk", "Total Risk", "None of the above"], c: "Systematic Risk" },
            { q: "25. Net Present Value method cannot serve as the best decision criteria for selection of projects when they are:", o: ["Independent", "Dependent", "Mutually exclusive", "Mutually inclusive"], c: "Mutually exclusive" },
            { q: "26. If EBIT = ₹1,00,000, Fixed Assets = ₹2,00,000, Sales = ₹10,00,000 and Variable Cost = ₹7,00,000, the Operating Leverage will be:", o: ["2", "1.5", "3", "6"], c: "2" },
            { q: "27. Which of the following does NOT help to increase Current Ratio?", o: ["Issue of Debentures to buy Stock", "Issue of Debentures to pay Creditors", "Sale of Investment to pay Creditors", "Avail Bank Overdraft to buy Machine"], c: "Avail Bank Overdraft to buy Machine" },
            { q: "28. Which of the following is NOT considered while preparing cash budget?", o: ["Accrual Principal", "Difference in Capital and Revenue items", "Conservation Principle", "All of the above"], c: "Conservation Principle" },
            { q: "29. Cost of capital may be defined as:", o: ["Weighted Average cost of all debts", "Rate of Return expected by Equity Shareholders", "Average IRR of the Projects of the firm", "Minimum Rate of Return that the firm should earn"], c: "Minimum Rate of Return that the firm should earn" },
            { q: "30. At Indifference level of EBIT, different capitals have:", o: ["Same EBIT", "Same EPS", "Same PAT", "Same PBT"], c: "Same EPS" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "31. ABC Analysis is used in:", o: ["Inventory Management", "Receivables Management", "Accounting Policies", "Corporate Governance"], c: "Inventory Management" },
            { q: "32. Which of the following is NOT incorporated in Capital Budgeting?", o: ["Tax-Effect", "Time Value of Money", "Required Rate of Return", "Rate of Cash Discount"], c: "Rate of Cash Discount" },
            { q: "33. Objective of Financial Management is:", o: ["Management of Liquidity", "Maximization of Profit", "Maximization of Shareholders' Wealth", "Management of Fixed Assets"], c: "Maximization of Shareholders' Wealth" },
            { q: "34. Which of the following variables is NOT known in Internal Rate of Return?", o: ["Initial Cash Flows", "Discount Rate", "Terminal Inflows", "Life of the Project"], c: "Discount Rate" },
            { q: "35. Cost of Capital refers to:", o: ["Floatation Cost", "Dividend", "Required Rate of Return", "None of the above"], c: "Required Rate of Return" },
            { q: "36. Working Capital Management involves financing and management of:", o: ["Fixed Assets", "All Current Assets", "All Current Liabilities", "None of the above"], c: "All Current Assets" },
            { q: "37. Debt-Equity Ratio helps to study:", o: ["Solvency", "Liquidity", "Profitability", "Turnover"], c: "Solvency" },
            { q: "38. Fund Flow Statement is a tool for analysis of:", o: ["Liquidity and Profitability", "Solvency and Profitability", "Liquidity and Solvency", "Turnover and Efficiency"], c: "Liquidity and Solvency" },
            { q: "39. ROI is composed of the product of which two ratios?", o: ["Overall Turnover Ratio and Current Ratio", "Net Profit Ratio and Fixed Assets Turnover", "Working Capital Turnover Ratio and Net Profit Ratio", "Net Profit Ratio and Overall Turnover Ratio"], c: "Net Profit Ratio and Overall Turnover Ratio" },
            { q: "40. A firm determines the shareholders' wealth by taking:", o: ["The number of people employed in the firm", "The book value of the firm's assets less the book value of its liabilities", "The amount of salary paid to its employees", "The market price per share of the firm"], c: "The market price per share of the firm" },
            { q: "41. Capital Budgeting techniques which considers the time value of money is based on:", o: ["Cash Flows of the organisation", "Accounting Profit of the organisation", "Interest Rate on Borrowings", "Last Dividend Paid"], c: "Cash Flows of the organisation" },
            { q: "42. Debt Financing is a cheaper source of finance because of:", o: ["Time Value of Money", "Rate of Interest", "Tax-deductibility of Interest", "Dividends not Payable to lenders"], c: "Tax-deductibility of Interest" },
            { q: "43. What should be the optimum Dividend payout ratio, when r = 12% and Ke = 10%?", o: ["Zero%", "50%", "12%", "100%"], c: "100%" },
            { q: "44. The term Float is used in:", o: ["Receivable Management", "Cash Management", "Inventory Management", "Payable Management"], c: "Cash Management" },
            { q: "45. ROI (Return on Investment) can be decomposed into:", o: ["Overall Turnover Ratio and Current Ratio", "Working Capital Turnover Ratio and Net Profit Ratio", "Net Profit Ratio and Fixed Assets Turnover", "Net Profit Ratio and Overall Turnover Ratio"], c: "Net Profit Ratio and Overall Turnover Ratio" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "46. Which of the following would be consistent with a more aggressive approach to financing working capital?", o: ["Financing permanent inventory build up with long-term debt", "Financing short-term needs with short-term funds", "Financing some long-term needs with short-term funds", "Financing seasonal needs with short-term funds"], c: "Financing some long-term needs with short-term funds" },
            { q: "47. Profitability and Liquidity ratios are used for:", o: ["Normative purposes only", "Predictive purposes only", "Both Normative and Predictive purposes", "None of these"], c: "Both Normative and Predictive purposes" },
            { q: "48. Internal Rate of return is the discounting factor which:", o: ["Ensures that the present value of Net Cash Inflow is the Net Cash Outflow", "Ensures that the present value of Net Cash Inflow equals the Net Cash Outflow", "None of these", "Equates the present value of Net Cash Inflow to the Net Cash Outflow"], c: "Equates the present value of Net Cash Inflow to the Net Cash Outflow" },
            { q: "49. The degree of operating Leverage and degree of financial Leverage of VIM Ltd. are 2 and 1.5 respectively. If the Sale increases by 10%, what will be the percentage change in EPS?", o: ["15% increase", "20% increase", "10% increase", "30% increase"], c: "30% increase" },
            { q: "50. EBIT-EPS chart is used for which of the following purpose?", o: ["Determining the Price-Earning ratio", "Showing changes of EPS overtime", "Getting EPS levels for varying levels of EBIT", "Impact of sales on EBIT"], c: "Getting EPS levels for varying levels of EBIT" },
            { q: "51. Which statement about factoring is TRUE?", o: ["The client is able to get 100% of total invoice as credit facility", "Factoring is the purchase of the invoice of the client", "Factoring is employed to finance domestic business only", "Factoring is used for medium term financing at a fixed rate of interest"], c: "Factoring is the purchase of the invoice of the client" },
            { q: "52. Corporate financing instruments which have an unlimited life, voting right and right to receive dividends are known as:", o: ["Non-Redeemable Preference Shares", "Redeemable Preference Shares", "Equity Shares", "Debentures"], c: "Equity Shares" },
            { q: "53. The total Asset-turnover ratio and total Asset to net-worth of GIN Ltd are 1.80 and 2.50 respectively. If the net-profit margin of the company is 8%, what will be its Return on Equity (ROE)?", o: [], c: "36%" },
            { q: "54. UBI Ltd. has EBIT of ₹1,00,000. The Company uses both Debt and Equity Capital. The Company has 10% debentures of ₹4,00,000. If the Company's equity capitalization rate is 15%, what will be the value of UBI Ltd.?", o: ["₹4,00,000", "₹7,00,000", "₹8,00,000", "₹6,00,000"], c: "₹8,00,000" },
            { q: "55. The current market price of an equity share of a company is ₹80. The current dividend per share is ₹4. In case the dividends are expected to grow at the rate of 7%, the cost of equity capital will be:", o: [], c: "12.00%" },
            { q: "56. Which item in Column B is an appropriate match for the item in Column A? Item A: Upper Control and Lower Control Limit for Cash balances determined by", o: [], c: "Miller-Orr Model" },
            { q: "57. If the Fixed Cost is 50% of EBIT, then Operating Leverage would be:", o: ["2", "2.5", "3", "3.5"], c: "2.5" },
            { q: "58. If Annual Growth Rate is 50% of the Cost of Equity and the Dividend Yield is 9%, then the Cost of Equity would be:", o: ["18%", "20%", "22%", "25%"], c: "18%" },
            { q: "59. Which among the following is NOT an assumption of the Net Operating Income Approach?", o: ["Value of the Firm remains the same", "Cost of Debt remains the same", "Cost of Capital remains the same", "Cost of Equity remains the same"], c: "Cost of Equity remains the same" },
            { q: "60. Calculate the Risk-Free rate of return if the value of beta is 1.5, Market return is 13% and Cost of Equity is 16%.", o: ["5.5%", "6.25%", "6.75%", "7%"], c: "7%" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "61. Agency Costs do NOT include:", o: ["Indirect costs", "Monitoring costs", "Bonding costs", "Direct costs"], c: "Indirect costs" },
            { q: "62. GDRs (Global Depository Receipts) do NOT have:", o: ["Dividend rights", "Redemption rights", "Voting rights", "Conversion rights"], c: "Voting rights" },
            { q: "63. When β = 0, then security under consideration:", o: ["Is very risky", "Is less risky", "Is not risky", "Has same risk as market"], c: "Is not risky" },
            { q: "64. If A = Annual Consumption of Input in Units, O = Ordering Cost per order and C = Carrying Cost per unit per annum, calculate the Ordering Cost per Annum at the Order Size of EOQ:", o: ["AOC", "2AOC", "√(2AO/C)", "2AOC/C"], c: "AOC" },
            { q: "65. In Cash Budget, Interest on Fixed Deposits made in a Bank with a maturity period of 3 years is:", o: ["Cash Flows from Operating Activity", "Cash Flows from Investing Activity", "Cash Flows from Financing Activity", "None of the above"], c: "Cash Flows from Financing Activity" },
            { q: "66. Gordon's Constant Growth Model matches with:", o: [], c: "Myron J Gordon" },
            { q: "67. Which one of the following statements is correct concerning the weighted average cost of capital (WACC) of any firm?", o: ["The WACC may decrease as a firm's debt-equity ratio increases", "In the computation of WACC, weight assigned to the preferred stock is based on the coupon rate multiplied by the par value of the stock", "A firm's WACC will increase as the corporate tax rate increases", "The WACC does not consider redeemable preference shares of the firm"], c: "The WACC may decrease as a firm's debt-equity ratio increases" },
            { q: "68. X Ltd. is considering an investment proposal involving an initial cash outlay of ₹20,00,000. The proposal has an expected life of 7 years and zero salvage value. At a required rate of return of 12%, the proposal has a profitability index of 1.182. Calculate the present value of cash inflows. (PV annuity factor at 12% for 7 years = 4.5638)", o: ["₹22,64,000", "₹23,70,000", "₹23,64,000", "₹22,70,000"], c: "₹23,64,000" },
            { q: "69. The signs of large inventory build-up in anticipation of price increase in future can be best diagnosed from:", o: ["Asset turnover ratio", "Working Capital turnover ratio", "Inventory turnover ratio", "Current ratio"], c: "Inventory turnover ratio" },
            { q: "70. MJ Ltd. has issued 5,000, 10% Debentures of ₹100 each. The rate of inflation is 6%. Calculate the real cost of debt.", o: ["3.77%", "3.90%", "4.10%", "4.57%"], c: "3.90%" },
            { q: "71. A commercial paper of the face value of ₹10,00,000 is issued at ₹9,60,000 for a maturity period of 120 days. The annual financing cost of the commercial paper is:", o: ["25%", "14.5%", "12.7%", "4%"], c: "12.7%" },
            { q: "72. If the cost of the project is ₹22,84,000, the useful life is 5 years and the annual annuity is ₹8,00,000, then the Pay-Back Period is:", o: ["3 years", "2 years 11 months", "2 years 9 months", "2 years 8 months"], c: "2 years 11 months" },
            { q: "73. If the Annual demand of raw materials is 20,000 units, the price per unit is ₹2, the ordering cost per order is ₹2,000 and the carrying cost percentage of average inventory is 10%, then the number of orders based on EOQ will be:", o: ["3 orders", "2 orders", "1 order", "4 orders"], c: "3 orders" },
            { q: "74. If the average receivables are ₹3,25,000, the cash sales are ₹2,50,000 and the average collection period is 2 months, then the amount of sales is:", o: ["₹20,00,000", "₹22,00,000", "₹19,50,000", "₹21,50,000"], c: "₹22,00,000" },
            { q: "75. The Piotroski F-Score which measures a stock's financial condition is based on:", o: ["Binary scoring system based on nine parameters", "A scaled scoring system based on nine parameters", "Binary scoring system based on ten parameters", "A scaled scoring system based on ten parameters"], c: "Binary scoring system based on nine parameters" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "76. The constant dividend growth model is useful for:", o: ["Seasonal Industry", "Mature Industry", "Capital Oriented Industry", "Growth Oriented Industry"], c: "Mature Industry" },
            { q: "77. The capital structure of X Ltd. consists of 40% Equity Share Capital, 40% Preference Capital and 20% Debt. The after-tax cost of Preference Capital and Debt are 18% and 9% respectively. The weighted average cost is 19%. X Ltd. paid currently a dividend of ₹13 per share. The current market price of its equity share is ₹112. Find the growth rate:", o: ["9%", "10%", "11%", "12%"], c: "11%" },
            { q: "78. What will be the present value of a perpetuity of ₹10,000 payable at the beginning of each period and growing 5% p.a. and the interest rate is 10% p.a.?", o: ["₹2,00,000", "₹2,10,000", "₹2,20,000", "₹2,30,000"], c: "₹2,10,000" },
            { q: "79. Compute the beta of Security X from the following: Standard Deviation of X = 15%, Standard Deviation of Market = 12%, Correlation = 0.80:", o: ["1.00", "1.25", "0.80", "1.50"], c: "1.25" },
            { q: "80. During the Book Building process, if the floor of the Price Band is ₹150 then the cap of the Price Band can at maximum be:", o: ["₹175", "₹180", "₹200", "₹225"], c: "₹180" },
            { q: "81. Quarterly demand of Product ZED = 16,250 units; 2.5 units from one unit of raw material; Opening Stock = 14,000 units; Closing Stock = 20% more than opening stock. Handling cost = ₹10 + freight ₹65 per order; Storage cost = ₹0.50/unit/month; Interest cost = 10% p.a.; Obsolescence = 2% p.a.; Purchase price = ₹50/unit. How frequently should orders be placed?", o: ["3 days", "6 days", "7.5 days", "15 days"], c: "7.5 days" },
            { q: "82. Selling shares without owning them, to buy them back at a future date at a lower price in expectation that price will drop is known as:", o: ["Call option", "Put option", "Long position", "Selling short"], c: "Selling short" },
            { q: "83. A 91-day Treasury Bill with face value of ₹100 is issued at ₹98. The annualized yield on the same would be (Assume 365 days a year):", o: ["3.09%", "8.18%", "14.09%", "13.09%"], c: "8.18%" },
            { q: "84. __________ shows that the current dividend depends partly on current earnings and partly on previous year's dividend:", o: ["Gordon's Model", "M.M. Model", "Dividend Discount Model", "Lintner Model"], c: "Lintner Model" },
            { q: "85. Rajesh Polymers Ltd. issued ₹4,00,000, 9% perpetual debentures at a premium of 10%. The costs of floatation are 2%. The tax rate is 50%. What is the after-tax cost of debt?", o: ["4.15%", "4.17%", "14.17%", "4.20%"], c: "4.17%" },
            { q: "86. The pecking order theory has emerged as an alternative theory to:", o: ["Trade off theory", "The traditional approach", "Net income approach", "Net operating income approach"], c: "Trade off theory" },
            { q: "87. How long will it take for ₹1,00,000 to double at a compound rate of interest of 12% per annum approximately?", o: ["Five years", "Six years", "Seven years", "Eight years"], c: "Six years" },
            { q: "88. Which of the following is NOT an objective of Digitalization?", o: ["Wide spread access of data", "Preservation of data", "Large Group of users", "Large physical storage space"], c: "Large physical storage space" },
            { q: "89. Following information from Balance Sheet: 8% debentures payable = ₹15 Lakh; 12% preference shares = ₹15 Lakh; ordinary shareholders equity = ₹40 Lakh. Calculate the capital gearing ratio:", o: ["42%", "43%", "47%", "49%"], c: "49%" },
            { q: "90. Cluster analysis is the process of assigning a set of data to subsets so that observations can be made. Cluster analysis is part of:", o: ["Supervised Learning", "Unsupervised Learning", "Semi Supervised Learning", "Reinforcement Learning"], c: "Unsupervised Learning" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "91. Systematic risk of the firm is 1.5; 182 days treasury bills currently yield 9%; expected yield on the market portfolio of assets is 14%. Determine the cost of equity capital based on the given data:", o: ["15%", "15.5%", "16%", "16.5%"], c: "16%" },
            { q: "92. Which of the following is a widely used graph for Data Visualisation?", o: ["Bar chart", "Pie chart", "Histogram", "All of the above"], c: "All of the above" },
            { q: "93. If the operating leverage is 1.22, the sales for the year is ₹75 lakhs, the variable cost is ₹42 lakhs, then the EBIT is equal to:", o: ["₹32 lakhs", "₹27 lakhs", "₹31 lakhs", "₹31.5 lakhs"], c: "₹31 lakhs" },
            { q: "94. Operating leverage arises because of:", o: ["Fixed Cost of Production", "Fixed Interest Cost", "Variable Cost", "Step Cost"], c: "Fixed Cost of Production" },
            { q: "95. Suppliers and Creditors of a firm are primarily interested in:", o: ["Profitability Position", "Liquidity Position", "Market Share Position", "Debt Position"], c: "Liquidity Position" },
            { q: "96. Which of the following does NOT help to increase Current Ratio?", o: ["Issue of Debentures to buy Stock", "Issue of Debentures to pay Creditors", "Sale of Investment to pay Creditors", "Avail Bank Overdraft to buy Machine"], c: "Avail Bank Overdraft to buy Machine" },
            { q: "97. Which of the following statements is correct?", o: ["A higher Receivable Turnover is not desirable", "Interest Coverage Ratio depends upon Tax Rate", "Increase in Net Profit Ratio means increase in Sales", "Lower Debt-Equity Ratio means lower Financial Risk"], c: "Lower Debt-Equity Ratio means lower Financial Risk" },
            { q: "98. A firm has EBIT of ₹50,000. Market value of debt is ₹80,000 and overall capitalization rate is 20%. Market value of firm under NOI Approach is:", o: ["₹2,50,000", "₹1,70,000", "₹30,000", "₹1,30,000"], c: "₹2,50,000" },
            { q: "99. Which one of the following is NOT a feature of Certificate of Deposits?", o: ["The minimum lock-in period for CDs is 30 days", "The minimum issue size of CDs are ₹1,00,000", "CDs are transferable by endorsement and delivery", "CDs attract stamp duty as applicable to negotiable instruments"], c: "CDs attract stamp duty" },
            { q: "100. Which one of the following is NOT applied in determining the credit policy of a firm?", o: ["Credit period or duration of credit", "Level of credit sales to optimize profits", "Collection policy", "Cost of goods sold"], c: "Cost of goods sold" },
            { q: "101. A company has two capital structures: Plan A: 100% equity with 10,000 shares at ₹100 each; Plan B: 50% debt (₹5,00,000 at 10%) and 50% equity (5,000 shares at ₹100 each). If EBIT = ₹1,50,000 and tax rate = 30%, what is the EPS under Plan B?", o: ["₹14", "₹17", "₹20", "₹18"], c: "₹18" },
            { q: "102. Given: risk-free rate = 6%, market return = 11%, cost of equity = 15%, the value of beta is:", o: ["1.9", "1.8", "2.0", "2.2"], c: "1.8" },
            { q: "103. The procedure that organises data into a meaningful order to make it simpler to comprehend, analyse and visualise, is called:", o: ["Data validation", "Data sorting", "Data aggregation", "Data analysis"], c: "Data sorting" },
            { q: "104. Which of the following are the types of cloud computing?", o: ["Private cloud", "Public cloud", "Hybrid cloud", "All of the above"], c: "All of the above" },
            { q: "105. If the company's DP ratio is 60% and ROI is 15%, what should be the growth rate under Gordon model?", o: ["5.5%", "7.2%", "6.0%", "9.6%"], c: "6.0%" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "106. Which financial metric is crucial for understanding a firm's Cash Management efficiency?", o: ["Gross Profit Margin", "Cash Conversion Cycle", "Operating Profit", "Return on Capital Employed"], c: "Cash Conversion Cycle" }
        ]
    }
];