// --- DATA: 15 Questions Per Set (Extracted from 8.md) ---
const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "1. In process, conversion cost means", o: ["Cost of direct materials, direct labour, direct expenses", "Direct labour, direct expenses, indirect material, indirect labour, indirect expenses", "Prime cost plus factory overheads", "All costs up to the product reaching the consumer, less direct material costs"], c: "Prime cost plus factory overheads" },
            { q: "2. At the economic ordering quantity level, the following is true", o: ["The ordering cost is minimum", "The carrying cost is minimum", "The ordering cost is equal to the carrying cost", "The purchase price is minimum"], c: "The ordering cost is equal to the carrying cost" },
            { q: "3. When a direct worker is paid on a monthly fixed salary basis, the following is true", o: ["There is no idle time lost", "There is no idle time cost", "Idle time cost is separated and treated as overhead", "The salary is fully treated as factory overhead cost"], c: "There is no idle time cost" },
            { q: "4. The following is an example of direct expenses as per CAS-10", o: ["Special raw material which is a substantial part of the prime cost", "Travelling expenses to site", "Overtime charges paid to direct worker to complete work before time", "Catalogue of prices of finished products"], c: "Travelling expenses to site" },
            { q: "5. The following is not treated as a manufacturing overhead", o: ["Lubricants", "Cotton waste", "Apportioned administration overheads", "Night shift allowance paid to a factory worker due to general work pressure"], c: "Night shift allowance paid to a factory worker due to general work pressure" },
            { q: "6. When you attempt a reconciliation of profits as per Financial Accounts and Cost Accounts, the following is done", o: ["Add the under absorption of overheads in Cost Accounts if you start from the profits as per Financial Accounts", "Add the under absorption of overheads in Cost Accounts if you start from the profits as per Cost Accounts", "Add the over absorption of overheads in Cost Accounts if you start from the profits as per Financial Accounts", "Add the over absorption of overheads in Cost Accounts if you start from the profits as per Cost Accounts"], c: "Add the under absorption of overheads in Cost Accounts if you start from the profits as per Financial Accounts" },
            { q: "7. Batch Costing is applied effectively in the following situation", o: ["Paper manufacturing", "Drug manufacturing", "Designer clothes manufacturing", "Oil refining"], c: "Drug manufacturing" },
            { q: "8. In the context of Contract Accounting, work completed and not yet certified will be shown", o: ["At cost plus 2/3rd of the notional profit under Completed Work", "At cost plus notional profit less retention money under Completed Work", "At cost under Completed Work", "At cost under WIP Account"], c: "At cost under WIP Account" },
            { q: "9. A certain process needed standard labour of 24 skilled labour hours and 30 unskilled labour hours at ₹60 and ₹40 respectively as the standard labour rates. Actually, 20 and 25 labour hours were used at ₹50 and ₹50 respectively. Then, the labour mix variance will be", o: ["Adverse", "Favourable", "Zero", "Favourable for skilled and unfavourable for unskilled"], c: "Zero" },
            { q: "10. If an organization has all the resources it needs for production, then the principal budget factor is most likely to be", o: ["Non-existing", "Sales demand", "Raw materials", "Labour supply"], c: "Sales demand" },
            { q: "11. Variable overheads are absorbed by products based on level of capacity utilization", o: ["Actual capacity", "Normal capacity", "Theoretical capacity", "Practical capacity"], c: "Actual capacity (as per the highest principle)" },
            { q: "12. In a textile factory, yarn is starched before it is made into textile. The cost of starch is ____ (give the element of cost)", o: ["Direct material", "Indirect material", "Direct labour", "Factory overhead"], c: "Direct material" },
            { q: "13. The actual capacity of a manufacturing unit based on temporary sales expectancy is 10,000 units due to lack of orders. The practical capacity is 1,500 units. Then, 1,500 units is ____ capacity", o: ["Normal", "Theoretical", "Idle", "Standard"], c: "Idle" },
            { q: "14. In process, conversion cost means", o: ["Cost of direct materials, direct labour, direct expenses", "Direct labour, direct expenses, indirect material, indirect labour, indirect expenses", "Prime cost plus factory overheads", "All costs up to the product reaching the consumer, less direct material costs"], c: "Prime cost plus factory overheads" },
            { q: "15. At the economic ordering quantity level, the following is true", o: ["The ordering cost is minimum", "The carrying cost is minimum", "The ordering cost is equal to the carrying cost", "The purchase price is minimum"], c: "The ordering cost is equal to the carrying cost" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "16. When a direct worker is paid on a monthly fixed salary basis, the following is true", o: ["There is no idle time lost", "There is no idle time cost", "Idle time cost is separated and treated as overhead", "The salary is fully treated as factory overhead cost"], c: "There is no idle time cost" },
            { q: "17. The following is an example of direct expenses as per CAS-10", o: ["Special raw material which is a substantial part of the prime cost", "Travelling expenses to site", "Overtime charges paid to direct worker to complete work before time", "Catalogue of prices of finished products"], c: "Travelling expenses to site" },
            { q: "18. The following is not treated as a manufacturing overhead", o: ["Lubricants", "Cotton waste", "Apportioned administration overheads", "Night shift allowance paid to a factory worker due to general work pressure"], c: "Night shift allowance paid to a factory worker due to general work pressure" },
            { q: "19. When you attempt a reconciliation of profits as per Financial Accounts and Cost Accounts, the following is done", o: ["Add the under absorption of overheads in Cost Accounts if you start from the profits as per Financial Accounts", "Add the under absorption of overheads in Cost Accounts if you start from the profits as per Cost Accounts", "Add the over absorption of overheads in Cost Accounts if you start from the profits as per Financial Accounts", "Add the over absorption of overheads in Cost Accounts if you start from the profits as per Cost Accounts"], c: "Add the under absorption of overheads in Cost Accounts if you start from the profits as per Financial Accounts" },
            { q: "20. Batch Costing is applied effectively in the following situation", o: ["Paper manufacturing", "Drug manufacturing", "Designer clothes manufacturing", "Oil refining"], c: "Drug manufacturing" },
            { q: "21. In the context of Contract Accounting, work completed and not yet certified will be shown", o: ["At cost plus 2/3rd of the notional profit under Completed Work", "At cost plus notional profit less retention money under Completed Work", "At cost under Completed Work", "At cost under WIP Account"], c: "At cost under WIP Account" },
            { q: "22. A certain process needed standard labour of 24 skilled labour hours and 30 unskilled labour hours at ₹60 and ₹40 respectively as the standard labour rates. Actually, 20 and 25 labour hours were used at ₹50 and ₹50 respectively. Then, the labour mix variance will be", o: ["Adverse", "Favourable", "Zero", "Favourable for skilled and unfavourable for unskilled"], c: "Zero" },
            { q: "23. If an organization has all the resources it needs for production, then the principal budget factor is most likely to be", o: ["Non-existing", "Sales demand", "Raw materials", "Labour supply"], c: "Sales demand" },
            { q: "24. Cost of idle time arising due to non-availability of raw material is", o: ["Recovered by inflating the raw material rate", "Recovered by inflating the wage rate", "Charged to factory overheads", "Charged to costing profit and loss account"], c: "Charged to factory overheads" },
            { q: "25. Selling and distribution overheads are absorbed on the basis of", o: ["Rate per unit", "Percentage on works cost", "Percentage on selling price of each unit", "Any of the above"], c: "Any of the above" },
            { q: "26. What entry will be passed under integrated system for purchase of stores on credit?", o: ["Dr. Stores Cr. Creditors", "Dr. Purchases Cr. Creditors", "Dr. Stores Ledger Control Account Cr. Creditors", "Dr. Stores Ledger Control Account Cr. General Ledger Adjustment Account"], c: "Dr. Stores Ledger Control Account Cr. General Ledger Adjustment Account" },
            { q: "27. In a process 800 units are introduced during 2016-17. 5% of input is normal loss. Closing work-in-progress 60% complete is 100 units. 660 completed units are transferred to next process. Equivalent production for the period is", o: ["760 units", "744 units", "540 units", "720 units"], c: "744 units" },
            { q: "28. ________ deals with the principles and methods of determining the production or operation overheads", o: ["CAS-3", "CAS-5", "CAS-9", "CAS-16"], c: "CAS-5" },
            { q: "29. There is a loss as per financial accounts ₹10,600, donations not shown in cost accounts ₹6,000. What would be the profit or loss as per cost accounts?", o: ["Loss ₹16,600", "Profit ₹16,600", "Loss ₹4,600", "Profit ₹4,600"], c: "Profit ₹4,600" },
            { q: "30. A hotel having 100 rooms of which 80 are normally occupied in summer and 25 in winter. Period of summer and winter be taken as 6 months each and normal days in a month be assumed to be 30. The total occupied room days will be", o: ["1,525 Room days", "18,900 Room days", "36,000 Room days", "None of the above"], c: "18,900 Room days" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "31. A firm has fixed expenses ₹90,000, sales ₹3,00,000 and profit ₹60,000. The P/V ratio of the firm is", o: ["10", "20", "30", "50"], c: "20" },
            { q: "32. Marginal costing technique follows the following basis of classification", o: ["Element-wise", "Function-wise", "Behaviour-wise", "Identifiability-wise"], c: "Behaviour-wise" },
            { q: "33. Which of the following is not a potential benefit of using a budget?", o: ["More motivated managers", "Enhanced co-ordination of firm activities", "Improved inter-departmental communication", "More accurate external financial statements"], c: "More accurate external financial statements" },
            { q: "34. Batch costing is suitable for", o: ["Oil Industry", "Sugar Industry", "Chemical Industry", "Pharmaceutical Industry"], c: "Pharmaceutical Industry" },
            { q: "35. Idle time is", o: ["Time spent by workers in office", "Time spent by workers in factory", "Time spent by workers off their work", "Time spent by workers on their job"], c: "Time spent by workers off their work" },
            { q: "36. Warehouse expense is an example of", o: ["Production overhead", "Administration overhead", "Selling and distribution overhead", "Marketing overhead"], c: "Selling and distribution overhead" },
            { q: "37. In a job cost system, costs are accumulated", o: ["On a monthly basis", "By specific job", "By department or process", "By kind of material used"], c: "By specific job" },
            { q: "38. In a process 6,000 units are introduced during a period. 5% of input is normal loss. Closing work-in-process 60% complete is 800 units. 4,900 completed units are transferred to next process. Equivalent production for the period is", o: ["6,800 units", "5,700 units", "5,680 units", "5,380 units"], c: "5,680 units" },
            { q: "39. Which of the following best describes a fixed cost?", o: ["It may change in total where such change is unrelated to changes in production", "It may change in total where such change is related to changes in production", "It is constant per unit of change in production", "It may change in total where such change depends on production within the relevant range"], c: "It may change in total where such change is unrelated to changes in production" },
            { q: "40. Z Ltd. is planning to sell 1,00,000 units of product A for ₹12.00 per unit. The fixed costs are ₹2,80,000. In order to realize a profit of ₹2,00,000, what would the variable costs be?", o: ["₹4,80,000", "₹7,20,000", "₹9,00,000", "₹9,20,000"], c: "₹9,00,000" },
            { q: "41. Sales budget is an example of", o: ["Expenditure budget", "Functional budget", "Capital budget", "Master budget"], c: "Functional budget" },
            { q: "42. Factory overhead cost applied to a job is usually based on", o: ["Historical rate", "Actual rate", "Predetermined rate", "Standard rate"], c: "Predetermined rate" },
            { q: "43. CAS-19 deals with the principles and methods of determining", o: ["Cost of service cost centre", "Manufacturing cost of excisable goods", "Material cost", "Labour cost"], c: "Manufacturing cost of excisable goods" },
            { q: "44. Joint Cost is suitable for", o: ["Oil Industry", "Fertilizer Industry", "Ornament Industry", "Infrastructure Industry"], c: "Oil Industry" },
            { q: "45. Cost of idle time arising due to non-availability of raw materials is", o: ["Recovered by inflating the raw materials cost", "Recovered by inflating the wage rate", "Charged to factory overheads", "Charged to costing profit and loss account"], c: "Charged to factory overheads" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "46. Charging to a cost center those overheads that result solely for the existence of that cost center is known as", o: ["Allotment", "Allocation", "Absorption", "Apportionment"], c: "Allocation" },
            { q: "47. ________ standard deals with the cost of service cost center is", o: ["CAS-9", "CAS-13", "CAS-16", "CAS-22"], c: "CAS-13" },
            { q: "48. In Reconciliation Statement income shown only in financial accounts is", o: ["Added to financial profit", "Deducted from financial profit", "Ignored", "Deducted from costing profit"], c: "Deducted from financial profit" },
            { q: "49. The most suitable cost system where the products differ in type of material and work performed is", o: ["Process Costing", "Batch Costing", "Job Costing", "Operating Costing"], c: "Job Costing" },
            { q: "50. In a process 10,000 units are introduced during a period. 10% of input is normal loss. Closing work-in-process 70% complete is 1,500 units. 7,500 completed units are transferred to next process. Equivalent production for the period is", o: ["9,550 units", "9,000 units", "8,550 units", "8,500 units"], c: "8,550 units" },
            { q: "51. The sales and profit of a firm for the year 2016 are ₹1,50,000 and ₹20,000 and for the year 2017 are ₹1,70,000 and ₹25,000 respectively. The P/V Ratio of the firm is", o: ["15", "20", "25", "30"], c: "25" },
            { q: "52. Standard quantity of material for one unit output is 10 kg @ ₹8 per kg. Actual output during a given period is 600 units. The standard quantity of material for actual output is", o: ["1,200 kg", "6,000 kg", "4,800 kg", "48,000 kg"], c: "6,000 kg" },
            { q: "53. Which of the following is a long-term Budget?", o: ["Master Budget", "Production Budget", "Flexible Budget", "Capital Budget"], c: "Capital Budget" },
            { q: "54. The main purpose of Cost Accounting is", o: ["To maximise profit", "To help in inventory valuation", "To help in the fixation of selling price", "To provide information to management for decision making"], c: "To provide information to management for decision making" },
            { q: "55. Which of the following is considered to be a normal loss of material?", o: ["Loss due to accident", "Pilferage", "Loss due to breaking the bulk", "Loss due to careless handling of material"], c: "Loss due to breaking the bulk" },
            { q: "56. In Reconciliation Statement expenses shown only in financial accounts are", o: ["Added to financial profit", "Added to costing profit", "Ignored", "Deducted from financial profit"], c: "Deducted from financial profit" },
            { q: "57. Which of the following is a service department?", o: ["Refining department", "Machining department", "Receiving department", "Finishing department"], c: "Receiving department" },
            { q: "58. Which of the following items is not included in preparation of cost sheet?", o: ["Purchase returns", "Carriage inwards", "Sales commission", "Interest paid"], c: "Sales commission" },
            { q: "59. In job costing to record the issue of direct materials to a job which of the following document is used?", o: ["Purchase order", "Goods receipt note", "Material requisition", "Purchase requisition"], c: "Material requisition" },
            { q: "60. In a process 4000 units are introduced during a period. 5% of input is normal loss. Closing work-in-progress 60% complete is 500 units. 3300 completed units are transferred to next process. Equivalent production for the period is", o: ["3550 units", "3600 units", "3800 units", "3950 units"], c: "3600 units" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "61. Product A generates a contribution to sales ratio of 40%. Fixed cost directly attributable to A amount ₹60,000. The sales revenue required to achieve a profit of ₹15,000 is", o: ["₹2,00,000", "₹1,85,000", "₹1,87,500", "₹2,10,000"], c: "₹1,87,500" },
            { q: "62. During a period 13600 labour hours were worked at a standard rate of ₹8 per hour. The direct labour efficiency variance was ₹8,800 Adverse. How many standard hours were produced?", o: ["12000 hours", "12500 hours", "13000 hours", "13500 hours"], c: "12500 hours" },
            { q: "63. Cash Budget of ABC Ltd. forewarns of a short-term surplus. Which of the following would be appropriate action to be taken in such a situation?", o: ["Purchase new fixed assets", "Repay long-term loans", "Write off preliminary expenses", "Pay creditors early to obtain a cash discount"], c: "Pay creditors early to obtain a cash discount" },
            { q: "64. Costs which are ascertained after they have been incurred are known as", o: ["Historical costs", "Predetermined costs", "Standard costs", "Budgeted costs"], c: "Historical costs" },
            { q: "65. In which of the following methods, issue of materials are priced at pre-determined rate?", o: ["Specific price method", "Standard price method", "Inflated price method", "Replacement price method"], c: "Standard price method" },
            { q: "66. For reducing the labour cost per unit, which of the following factors is the most important?", o: ["Low wage rates", "Longer hours of work", "Higher input-output ratio", "Strict control and supervision"], c: "Higher input-output ratio" },
            { q: "67. Maximum possible productive capacity of a plant when no operating time is lost is its", o: ["Normal capacity", "Practical capacity", "Theoretical capacity", "Capacity based on sales expectancy"], c: "Theoretical capacity" },
            { q: "68. In job costing, which of the following documents is used to record the issue of direct materials to a job?", o: ["Goods Receipt Note", "Purchase Order", "Purchase Requisition Note", "Material Requisition Note"], c: "Material Requisition Note" },
            { q: "69. The main purpose of accounting of joint products and by-products is to", o: ["Determine the profit/loss on each product line", "Determine the selling price", "Comply with the statutory requirements", "Identify the cost and load it on the main product"], c: "Determine the profit/loss on each product line" },
            { q: "70. During a period 2560 labour hours were worked at a standard rate of ₹7.50 per hour. The direct labour efficiency variance was ₹825 Adverse. How many standard hours were produced?", o: ["2400", "2450", "2500", "2550"], c: "2450" },
            { q: "71. PQR Ltd. manufactures a single product which it sells for ₹40 per unit. Fixed cost is ₹60,000 per year. The contribution to sales ratio is 40%. PQR Ltd.'s Break Even Point in units is", o: ["3500", "3700", "3750", "4000"], c: "3750" },
            { q: "72. The fixed-variable cost classification has a special significance in the preparation of", o: ["Cash budget", "Master budget", "Flexible budget", "Capital budget"], c: "Flexible budget" },
            { q: "73. CAS-8 deals with the principles and methods of determining", o: ["Material cost", "Labour cost", "Overhead cost", "Direct expenses"], c: "Direct expenses" },
            { q: "74. Cost units of Automobile Industry is - Which word(s) according to you appropriately fills in above blank?", o: ["Cubic meter", "Number of vehicle", "Bed Night", "Number of call"], c: "Number of vehicle" },
            { q: "75. Cost units used in power sector is called", o: ["Number of hours", "Kilometer (K.M)", "Number of electric points", "Kilowatt-hour (KWH)"], c: "Kilowatt-hour (KWH)" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "76. Which of the following most appropriately defines Idle time?", o: ["Time spent by workers in factory", "Time spent by workers in office", "Time spent by workers off their work", "Time spent by workers on their job"], c: "Time spent by workers off their work" },
            { q: "77. The allotment of whole items of cost of centers or cost unit is called", o: ["Overhead absorption", "Cost allocation", "None of these", "Cost apportionment"], c: "Cost allocation" },
            { q: "78. If an organization has all the resources it needs for production, then the principal budget factor is most likely to be", o: ["Labour supply", "Sales demand", "Raw materials", "Non-existing"], c: "Sales demand" },
            { q: "79. Time and motion study is conducted by the", o: ["Time-keeping department", "Payroll department", "Personnel department", "Engineering department"], c: "Engineering department" },
            { q: "80. Sales budget is an example of", o: ["Functional budget", "Master budget", "Expenditure budget", "Capital budget"], c: "Functional budget" },
            { q: "81. Absolute Tonne-km is an example of", o: ["Composite unit in power sector", "Composite unit for oil and natural gas", "Composite unit for bus operation", "Composite unit of transport sector"], c: "Composite unit of transport sector" },
            { q: "82. Which of the following is not an element of master budget?", o: ["Capital Expenditure Budget", "Production Schedule", "Operating Expenses Budget", "All of these"], c: "Production Schedule" },
            { q: "83. Selling and distribution overheads are absorbed on the basis of", o: ["Rate per unit", "Percentage on selling price of each unit", "Percentage on works cost", "Any of these"], c: "Any of these" },
            { q: "84. Standards deals with the principles and methods of determining depreciation and amortization cost", o: ["CAS 12", "CAS 9", "CAS 16", "CAS 15"], c: "CAS 16" },
            { q: "85. Which of the following is a service department?", o: ["Machining department", "Finishing department", "Refining department", "Receiving department"], c: "Receiving department" },
            { q: "86. Batch Costing is a type of", o: ["Direct Costing", "Process Costing", "Job costing", "Differential Costing"], c: "Job costing" },
            { q: "87. Audit fees paid to cost auditors is part of", o: ["Administration Cost", "None of these", "Selling Distribution cost", "Production cost"], c: "Administration Cost" },
            { q: "88. Which of the following is not an element of works overhead?", o: ["Sales managers salary", "Factory repairmans wages", "Product inspectors salary", "Plant managers salary"], c: "Sales managers salary" },
            { q: "89. In Reconciliation Statement expenses shown only in cost accounts are", o: ["Deducted from financial profit", "Ignored", "Added to financial profit", "Deducted from costing profit"], c: "Deducted from financial profit" },
            { q: "90. From cost control point of view the standard most commonly used is", o: ["Theoretical standard", "Expected standard", "Normal standard", "Basic standard"], c: "Expected standard" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "91. Which of the following is generally a long term budget?", o: ["Sales budget", "Cash budget", "Research and Development budget", "Capital expenditure budget"], c: "Capital expenditure budget" },
            { q: "92. Which method of absorption of factory overheads do you suggest in a concern which Produces only one uniform type of product?", o: ["Direct labour rate", "Percentage of direct wages basis", "Machine hour rate", "A rate per units of output"], c: "A rate per units of output" },
            { q: "93. In the context of Contract ac, work completed and not yet certified will be shown", o: ["At cost under Completed Work", "At cost under WIP ac", "At cost plus notional profit less retention money under Completed Work", "At cost plus 2/3rd of the notional profit under Completed Work"], c: "At cost under WIP ac" },
            { q: "94. The primary purpose of cost accounting is", o: ["To maximize profits only", "To provide information for management decision-making", "To ensure compliance with accounting standards", "To prepare financial statements"], c: "To provide information for management decision-making" },
            { q: "95. In a process 5,000 units are introduced. 8% normal loss. Closing WIP 50% complete is 400 units. 4,200 units transferred. Equivalent production is", o: ["4,600 units", "4,680 units", "4,750 units", "4,800 units"], c: "4,680 units" },
            { q: "96. A firm has fixed cost ₹80,000, selling price ₹10 per unit, variable cost ₹6 per unit. Break-even point in units is", o: ["8,000 units", "10,000 units", "13,333 units", "20,000 units"], c: "20,000 units" },
            { q: "97. If carrying cost is ₹2 per unit per annum, ordering cost is ₹100 per order and annual demand is 10,000 units, Economic Order Quantity is", o: ["500 units", "707 units", "1,000 units", "1,225 units"], c: "707 units" },
            { q: "98. Sales ₹5,00,000, Variable cost ₹3,00,000, Fixed cost ₹1,00,000. Profit/Volume Ratio is", o: ["25%", "40%", "60%", "75%"], c: "40%" },
            { q: "99. A cost unit is", o: ["A department or function in an organization", "A unit of product or service in relation to which costs are ascertained", "A center to which costs are allocated", "A method of accumulating costs"], c: "A unit of product or service in relation to which costs are ascertained" },
            { q: "100. Prime cost includes", o: ["Direct material + Direct labour", "Direct material + Direct labour + Direct expenses", "Direct material + Factory overhead", "All operating costs"], c: "Direct material + Direct labour + Direct expenses" },
            { q: "101. In absorption costing, fixed overheads are", o: ["Treated as period cost", "Allocated to cost units", "Excluded from product cost", "Expensed immediately"], c: "Allocated to cost units" },
            { q: "102. A by-product is", o: ["The main output of production process", "A secondary product that has relatively small value", "Material wasted in production", "Goods returned by customers"], c: "A secondary product that has relatively small value" },
            { q: "103. Standard costing is primarily used for", o: ["Historical cost determination", "Cost control and performance evaluation", "Final statement preparation", "Statutory compliance"], c: "Cost control and performance evaluation" },
            { q: "104. A flexible budget is", o: ["A budget for a specific level of activity", "A budget that adjusts to actual level of activity", "A budget prepared without standards", "An approximate budget"], c: "A budget that adjusts to actual level of activity" },
            { q: "105. A cost centre is", o: ["A production unit only", "An activity to which costs are assigned", "The final stage of production", "A management decision point"], c: "An activity to which costs are assigned" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "106. Material price variance measures", o: ["Difference in quantity of material used", "Difference in price of material purchased", "Difference in quality of material", "Difference in material handling"], c: "Difference in price of material purchased" },
            { q: "107. Normal capacity is based on", o: ["Average expected utilization over multiple periods", "Maximum possible capacity", "Current year's expected demand", "Historical average"], c: "Average expected utilization over multiple periods" },
            { q: "108. The most appropriate overhead absorption method when production is uniform is", o: ["Machine hour rate", "Direct labour hour rate", "Per unit rate", "Percentage of direct material cost"], c: "Per unit rate" }
        ]
    }
];