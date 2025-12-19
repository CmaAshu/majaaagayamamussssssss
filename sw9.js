// --- DATA: 15 Questions Per Set (Extracted from 9.md) ---
const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "1. Which of the following is typically found wherever a particular bottleneck machine exists in the process of manufacturing?", o: ["Load control", "Block control", "Flow control", "Order control"], c: "Load control" },
            { q: "2. Given the following alternatives, Linear Programming is a technique used in", o: ["Manufacturing Sequence", "Product Mix", "Production Programme", "Plant Layout"], c: "Production Programme" },
            { q: "3. State which of the following does not affect the Production Design:", o: ["Cost-Price Ratio", "Process Capability", "Reliability", "Product Quality"], c: "Reliability" },
            { q: "4. The time study of a machinery operation recorded cycle times of 7.0, 9.0, 10.0 and 10.0 minutes. The analyst rated the observed worker as 90%. The firm uses a 0.15 allowance fraction. What is the standard time?", o: ["8.1 minutes", "10.35 minutes", "9.53 minutes", "9.0 minutes"], c: "8.1 minutes" },
            { q: "5. If a firm sells 7,000 units, its loss is ₹40,000. But if it sells 10,000 units, its profit is ₹20,000. Calculate Fixed Cost:", o: ["₹2,00,000", "₹1,80,000", "₹1,60,000", "₹1,75,000"], c: "₹1,80,000" },
            { q: "6. Being part of operations function, __________ involves the shipping of goods to warehouses, retail outlets or final customers.", o: [], c: "Distribution" },
            { q: "7. Expand TPM:", o: [], c: "Total Productive Maintenance" },
            { q: "8. In applications of queuing theory in maintenance, the machine breakdowns are __________ in the queue and they may have their own __________ distribution.", o: [], c: "arrivals, frequency" },
            { q: "9. __________ Efficiency is a ratio of the actual output of a process relative to some standard capacity.", o: [], c: "Technical (or Operational)" },
            { q: "10. The __________ is the sum of the setup time and run time for a batch of parts that are run on a machine.", o: [], c: "Cycle time (or Batch time)" },
            { q: "11. Regular spares are also called __________ spares.", o: [], c: "Rotable" },
            { q: "12. The role of the corrective maintenance department is almost __________ (active/passive).", o: [], c: "passive" },
            { q: "13. The __________ statement of a company answers the question 'What it stands for' i.e., what broad products or services it intends to offer to its customers.", o: [], c: "Mission" },
            { q: "14. BPR aims to help organizations fundamentally __________ how they should do their work in order to dramatically improve customer services, cut operational costs and become world-class competitors.", o: [], c: "rethink / re-think" },
            { q: "15. In BCG Matrix, products with low market share but __________ growth potential are referred to as Dogs.", o: [], c: "limited" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "16. Addition of Broad Band to the existing Telephone Services facility by BSNL is an example of:", o: ["Concentratic diversification", "Unrelated diversification", "Merger diversification", "Acquisition diversification"], c: "Concentratic diversification" },
            { q: "17. Jio by Reliance Jio Infocomm Limited (RJIL) provides interesting example to fit in the BCG Matrix as a:", o: ["Star", "Question Mark", "Cash Cow", "Dog"], c: "Star" },
            { q: "18. Out of the following trends in production/operations management, which one is sometimes called as agile manufacturing?", o: ["Re-engineering", "Supply-Chain Management", "Lean Production", "Flexibility"], c: "Flexibility" },
            { q: "19. Out of the following factors that are affecting Capacity Planning, which one is Less Controllable?", o: ["Machine break-downs", "Amount of labour employed", "Facilities installed", "Shifts of work per day"], c: "Machine break-downs" },
            { q: "20. Which of the following stages of Product Life Cycle does attribute beginning of substantial increase in Sales and Profits?", o: ["Introduction", "Planning", "Growth", "Decline"], c: "Growth" },
            { q: "21. The lead time is:", o: ["Time for placeholders for materials", "Time of receiving materials", "Time between receipt of material and using materials", "Time between placing the order and receiving the materials"], c: "Time between placing the order and receiving the materials" },
            { q: "22. This aims at finding the best and most efficient way of using the available resources-men, materials, money and machinery:", o: ["Time Study", "Work Study", "Method Study", "Job Evaluation"], c: "Work Study" },
            { q: "23. The time by which an activity can be rescheduled without affecting the other activities-preceding or succeeding is called as:", o: ["Slack", "Independent Float", "Free Float", "Total Float"], c: "Free Float" },
            { q: "24. Reliability and per unit cost of which of the following spares are less?", o: ["Regular spares", "Insurance spares", "Capital spares", "Rotable spares"], c: "Regular spares" },
            { q: "25. For a marketing manager, the sales forecast is:", o: ["Estimate of the amount of unit sales for a specified future period", "Arranging the salesmen to different segments of the market", "To distribute the goods through transport to satisfy the market demand", "To plan the sales methods"], c: "Estimate of the amount of unit sales for a specified future period" },
            { q: "26. The activity of specifying when to start the job and when to end the job is known as:", o: ["Scheduling", "Planning", "Timing", "Follow-up"], c: "Scheduling" },
            { q: "27. Value Analysis matches with:", o: ["Machine Shop", "Brainstorming", "Forgings", "Tools"], c: "Brainstorming" },
            { q: "28. Cost of idle time arising due to non-availability of raw material is:", o: ["Recovered by inflating the raw material rate", "Recovered by inflating the wage rate", "Charged to factory overheads", "Charged to costing profit and loss account"], c: "Charged to factory overheads" },
            { q: "29. Selling and distribution overheads are absorbed on the basis of:", o: ["Rate per unit", "Percentage on works cost", "Percentage on selling price of each unit", "Any of the above"], c: "Any of the above" },
            { q: "30. What entry will be passed under integrated system for purchase of stores on credit?", o: ["Dr. Stores Cr. Creditors", "Dr. Purchases Cr. Creditors", "Dr. Stores Ledger Control Account Cr. Creditors", "Dr. Stores Ledger Control Account Cr. General Ledger Adjustment Account"], c: "Dr. Stores Ledger Control Account Cr. General Ledger Adjustment Account" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "31. In a process 800 units are introduced during 2016-17. 5% of input is normal loss. Closing work-in-progress 60% complete is 100 units. 660 completed units are transferred to next process. Equivalent production for the period is:", o: ["760 units", "744 units", "540 units", "720 units"], c: "744 units" },
            { q: "32. __________ deals with the principles and methods of determining the production or operation overheads.", o: ["CAS-3", "CAS-5", "CAS-9", "CAS-16"], c: "CAS-5" },
            { q: "33. There is a loss as per financial accounts ₹10,600, donations not shown in cost accounts ₹6,000. What would be the profit or loss as per cost accounts?", o: ["Loss ₹16,600", "Profit ₹16,600", "Loss ₹4,600", "Profit ₹4,600"], c: "Profit ₹4,600" },
            { q: "34. A hotel having 100 rooms of which 80 are normally occupied in summer and 25 in winter. Period of summer and winter be taken as 6 months each and normal days in a month be assumed to be 30. The total occupied room days will be:", o: ["1,525 Room days", "18,900 Room days", "36,000 Room days", "None of the above"], c: "18,900 Room days" },
            { q: "35. A firm has fixed expenses ₹90,000, sales ₹3,00,000 and profit ₹60,000. The P/V ratio of the firm is:", o: ["10", "20", "30", "50"], c: "20" },
            { q: "36. Marginal costing technique follows the following basis of classification:", o: ["Element-wise", "Function-wise", "Behaviour-wise", "Identifiability-wise"], c: "Behaviour-wise" },
            { q: "37. Which of the following is not a potential benefit of using a budget?", o: ["More motivated managers", "Enhanced co-ordination of firm activities", "Improved inter-departmental communication", "More accurate external financial statements"], c: "More accurate external financial statements" },
            { q: "38. Batch costing is suitable for:", o: ["Oil Industry", "Sugar Industry", "Chemical Industry", "Pharmaceutical Industry"], c: "Pharmaceutical Industry" },
            { q: "39. Idle time is:", o: ["Time spent by workers in office", "Time spent by workers in factory", "Time spent by workers off their work", "Time spent by workers on their job"], c: "Time spent by workers off their work" },
            { q: "40. Warehouse expense is an example of:", o: ["Production overhead", "Administration overhead", "Selling and distribution overhead", "Marketing overhead"], c: "Selling and distribution overhead" },
            { q: "41. In a job cost system, costs are accumulated:", o: ["On a monthly basis", "By specific job", "By department or process", "By kind of material used"], c: "By specific job" },
            { q: "42. In a process 6,000 units are introduced during a period. 5% of input is normal loss. Closing work-in-process 60% complete is 800 units. 4,900 completed units are transferred to next process. Equivalent production for the period is:", o: ["6,800 units", "5,700 units", "5,680 units", "5,380 units"], c: "5,680 units" },
            { q: "43. Which of the following best describes a fixed cost?", o: ["It may change in total where such change is unrelated to changes in production", "It may change in total where such change is related to changes in production", "It is constant per unit of change in production", "It may change in total where such change depends on production within the relevant range"], c: "It may change in total where such change is unrelated to changes in production" },
            { q: "44. Z Ltd. is planning to sell 1,00,000 units of product A for ₹12.00 per unit. The fixed costs are ₹2,80,000. In order to realize a profit of ₹2,00,000, what would the variable costs be?", o: ["₹4,80,000", "₹7,20,000", "₹9,00,000", "₹9,20,000"], c: "₹9,00,000" },
            { q: "45. Sales budget is an example of:", o: ["Expenditure budget", "Functional budget", "Capital budget", "Master budget"], c: "Functional budget" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "46. Factory overhead cost applied to a job is usually based on:", o: ["Historical rate", "Actual rate", "Predetermined rate", "Standard rate"], c: "Predetermined rate" },
            { q: "47. CAS-19 deals with the principles and methods of determining:", o: ["Cost of service cost centre", "Manufacturing cost of excisable goods", "Material cost", "Labour cost"], c: "Manufacturing cost of excisable goods" },
            { q: "48. Joint Cost is suitable for:", o: ["Oil Industry", "Fertilizer Industry", "Ornament Industry", "Infrastructure Industry"], c: "Oil Industry" },
            { q: "49. Cost of idle time arising due to non-availability of raw materials is:", o: ["Recovered by inflating the raw materials cost", "Recovered by inflating the wage rate", "Charged to factory overheads", "Charged to costing profit and loss account"], c: "Charged to factory overheads" },
            { q: "50. Charging to a cost center those overheads that result solely for the existence of that cost center is known as:", o: ["Allotment", "Allocation", "Absorption", "Apportionment"], c: "Allocation" },
            { q: "51. __________ standard deals with the cost of service cost center.", o: ["CAS-9", "CAS-13", "CAS-16", "CAS-22"], c: "CAS-13" },
            { q: "52. In Reconciliation Statement income shown only in financial accounts is:", o: ["Added to financial profit", "Deducted from financial profit", "Ignored", "Deducted from costing profit"], c: "Deducted from financial profit" },
            { q: "53. The most suitable cost system where the products differ in type of material and work performed is:", o: ["Process Costing", "Batch Costing", "Job Costing", "Operating Costing"], c: "Job Costing" },
            { q: "54. In a process 10,000 units are introduced during a period. 10% of input is normal loss. Closing work-in-process 70% complete is 1,500 units. 7,500 completed units are transferred to next process. Equivalent production for the period is:", o: ["9,550 units", "9,000 units", "8,550 units", "8,500 units"], c: "8,550 units" },
            { q: "55. The sales and profit of a firm for the year 2016 are ₹1,50,000 and ₹20,000 and for the year 2017 are ₹1,70,000 and ₹25,000 respectively. The P/V Ratio of the firm is:", o: ["15", "20", "25", "30"], c: "25" },
            { q: "56. Standard quantity of material for one unit output is 10 kg @ ₹8 per kg. Actual output during a given period is 600 units. The standard quantity of material for actual output is:", o: ["1,200 kg", "6,000 kg", "4,800 kg", "48,000 kg"], c: "6,000 kg" },
            { q: "57. Which of the following is a long-term Budget?", o: ["Master Budget", "Production Budget", "Flexible Budget", "Capital Budget"], c: "Capital Budget" },
            { q: "58. The main purpose of Cost Accounting is:", o: ["To maximise profit", "To help in inventory valuation", "To help in the fixation of selling price", "To provide information to management for decision making"], c: "To provide information to management for decision making" },
            { q: "59. Which of the following is considered to be a normal loss of material?", o: ["Loss due to accident", "Pilferage", "Loss due to breaking the bulk", "Loss due to careless handling of material"], c: "Loss due to breaking the bulk" },
            { q: "60. In Reconciliation Statement expenses shown only in financial accounts are:", o: ["Added to financial profit", "Added to costing profit", "Ignored", "Deducted from financial profit"], c: "Deducted from financial profit" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "61. Which of the following is a service department?", o: ["Refining department", "Machining department", "Receiving department", "Finishing department"], c: "Receiving department" },
            { q: "62. Which of the following items is not included in preparation of cost sheet?", o: ["Purchase returns", "Carriage inwards", "Sales commission", "Interest paid"], c: "Sales commission" },
            { q: "63. In job costing to record the issue of direct materials to a job which of the following document is used?", o: ["Purchase order", "Goods receipt note", "Material requisition", "Purchase requisition"], c: "Material requisition" },
            { q: "64. In a process 4000 units are introduced during a period. 5% of input is normal loss. Closing work-in-progress 60% complete is 500 units. 3300 completed units are transferred to next process. Equivalent production for the period is:", o: ["3550 units", "3600 units", "3800 units", "3950 units"], c: "3600 units" },
            { q: "65. Product A generates a contribution to sales ratio of 40%. Fixed cost directly attributable to A amount ₹60,000. The sales revenue required to achieve a profit of ₹15,000 is:", o: ["₹2,00,000", "₹1,85,000", "₹1,87,500", "₹2,10,000"], c: "₹1,87,500" },
            { q: "66. During a period 13600 labour hours were worked at a standard rate of ₹8 per hour. The direct labour efficiency variance was ₹8,800 Adverse. How many standard hours were produced?", o: ["12000 hours", "12500 hours", "13000 hours", "13500 hours"], c: "12500 hours" },
            { q: "67. Cash Budget of ABC Ltd. forewarns of a short-term surplus. Which of the following would be appropriate action to be taken in such a situation?", o: ["Purchase new fixed assets", "Repay long-term loans", "Write off preliminary expenses", "Pay creditors early to obtain a cash discount"], c: "Pay creditors early to obtain a cash discount" },
            { q: "68. Costs which are ascertained after they have been incurred are known as:", o: ["Historical costs", "Predetermined costs", "Standard costs", "Budgeted costs"], c: "Historical costs" },
            { q: "69. In which of the following methods, issue of materials are priced at pre-determined rate?", o: ["Specific price method", "Standard price method", "Inflated price method", "Replacement price method"], c: "Standard price method" },
            { q: "70. For reducing the labour cost per unit, which of the following factors is the most important?", o: ["Low wage rates", "Longer hours of work", "Higher input-output ratio", "Strict control and supervision"], c: "Higher input-output ratio" },
            { q: "71. Maximum possible productive capacity of a plant when no operating time is lost is its:", o: ["Normal capacity", "Practical capacity", "Theoretical capacity", "Capacity based on sales expectancy"], c: "Theoretical capacity" },
            { q: "72. In job costing, which of the following documents is used to record the issue of direct materials to a job?", o: ["Goods Receipt Note", "Purchase Order", "Purchase Requisition Note", "Material Requisition Note"], c: "Material Requisition Note" },
            { q: "73. The main purpose of accounting of joint products and by-products is to:", o: ["Determine the profit/loss on each product line", "Determine the selling price", "Comply with the statutory requirements", "Identify the cost and load it on the main product"], c: "Determine the profit/loss on each product line" },
            { q: "74. During a period 2560 labour hours were worked at a standard rate of ₹7.50 per hour. The direct labour efficiency variance was ₹825 Adverse. How many standard hours were produced?", o: ["2400", "2450", "2500", "2550"], c: "2450" },
            { q: "75. PQR Ltd. manufactures a single product which it sells for ₹40 per unit. Fixed cost is ₹60,000 per year. The contribution to sales ratio is 40%. PQR Ltd.'s Break Even Point in units is:", o: ["3500", "3700", "3750", "4000"], c: "3750" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "76. The fixed-variable cost classification has a special significance in the preparation of:", o: ["Cash budget", "Master budget", "Flexible budget", "Capital budget"], c: "Flexible budget" },
            { q: "77. CAS-8 deals with the principles and methods of determining:", o: ["Material cost", "Labour cost", "Overhead cost", "Direct expenses"], c: "Direct expenses" },
            { q: "78. The best way of improving the productivity of capital is:", o: ["Purchase automatic machines", "Effective Labour control", "Productivity of capital is to be increased through effective materials management", "To use good financial management"], c: "Productivity of capital is to be increased through effective materials management" },
            { q: "79. The PEST Analysis looks at the external factors and is primarily used for market research. Is this statement correct?", o: [], c: "Yes" },
            { q: "80. Routing and Scheduling becomes relatively complicated in __________ production.", o: ["Flow production", "Batch production", "Mass production", "Job production"], c: "Batch production" },
            { q: "81. MRP stands for:", o: ["Material Recording Procedure", "Material Requirement Planning", "Material Requisition Procedure", "Material Reordering Planning"], c: "Material Requirement Planning" },
            { q: "82. Desired states or outcomes are objectives. Is this correct?", o: [], c: "Yes" },
            { q: "83. In Production by disintegration the material undergoes:", o: ["Change in economic value only", "Change in physical and chemical characteristics", "Change in technology only", "None of these"], c: "Change in physical and chemical characteristics" },
            { q: "84. The time horizon selected for forecasting depends on:", o: ["Time required for production cycle", "The salability of the product", "The selling capacity of Salesman", "Purpose for which forecast is made"], c: "Purpose for which forecast is made" },
            { q: "85. Production strategy plays crucial role in shaping the ultimate success of a firm. Is this correct?", o: [], c: "Yes" },
            { q: "86. JIT stands for:", o: ["Just in time order the material", "Just in time purchase", "Just in time use of materials", "Just in time production"], c: "Just in time production" },
            { q: "87. Production control concerned with:", o: ["Good materials management", "Good product design", "Strict control on labours", "Passive assessment of plant performance"], c: "Good materials management" },
            { q: "88. One of the important charts used in Programme control is:", o: ["Material chart", "Route chart", "Gantt chart", "Inspection chart"], c: "Gantt chart" },
            { q: "89. Most suitable layout for Job production is:", o: ["Process layout", "Line layout", "Matrix layout", "Product layout"], c: "Process layout" },
            { q: "90. In general number of product varieties that can be manufactured in Flow production is:", o: ["Five only", "Ten to twenty varieties", "One only", "Large varieties"], c: "One only" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "91. Strategy is likely to be concerned with the short-term direction of an organization. Is this correct?", o: [], c: "No" },
            { q: "92. For a marketing manager, the sales forecast is:", o: ["To plan the sales methods", "Arranging the sales men to different segments of the market", "Estimate of the amount of unit sales for a specified future period", "To distribute the goods through transport to satisfy the market demand"], c: "Estimate of the amount of unit sales for a specified future period" },
            { q: "93. Production planning deals with:", o: ["What should be the demand for the product in future?", "What production facilities are required and how these facilities should be laid out in space available?", "What to produce and when to produce and where to sell?", "What is the life of the product?"], c: "What production facilities are required and how these facilities should be laid out in space available?" },
            { q: "94. Conversion of inputs into outputs is known as:", o: [], c: "Operations management" },
            { q: "95. The starting point of Production cycle is:", o: ["Market research", "Routing", "Product design", "Production Planning"], c: "Market research" },
            { q: "96. For production planning:", o: ["Shot term forecasting is useful", "Medium term forecasting is useful", "Forecasting is not useful", "Long term forecasting is useful"], c: "Shot term forecasting is useful" },
            { q: "97. Scheduling deals with:", o: ["Number of machine tools used to do a job", "Fixing up starting and finishing times of each operation in doing a job", "Number of jobs to be done on a machine", "Different materials used in the product"], c: "Fixing up starting and finishing times of each operation in doing a job" },
            { q: "98. Strategic Management can be defined as:", o: ["The direction and scope of an organization over the long run", "A stream of decisions and actions which leads to the development of an effective strategy or strategies to help achieve objectives", "The statement of the future", "A statement of the activities or steps needed to support a strategy"], c: "A stream of decisions and actions which leads to the development of an effective strategy or strategies to help achieve objectives" },
            { q: "99. PEST analysis refers to the following factors:", o: ["Political, environmental, structural and technical", "Political, economical, social and technological", "Purchase, economic, supply and transportation", "Political, economical, social and technological"], c: "Political, economical, social and technological" },
            { q: "100. Business Process Re-engineering could be applied to companies that confront problems such as:", o: ["Low operational costs", "High performance of middle level managers", "Appropriate distribution of resources and jobs in order to achieve maximum performance etc.", "Low quality offered to customers"], c: "Low quality offered to customers" },
            { q: "101. Vision is associated with:", o: ["Types of markets", "Customer need or requirement", "Road map to Company's future", "Distinctive competencies"], c: "Road map to Company's future" },
            { q: "102. KAIZEN is matched with:", o: [], c: "Change for the better" },
            { q: "103. Short-term planning deals with: i. Day-to-day work, ii. Scheduling and sometimes inventories problems", o: [], c: "True" },
            { q: "104. The term Operations Management is more used for a system where tangible goods are produced.", o: [], c: "False" },
            { q: "105. Simulation is an optimizing technique.", o: [], c: "False" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "106. There are essentially four standards associated with the ISO 9000 series.", o: [], c: "False (Actually there are more than four)" },
            { q: "107. CPM Technique is designed for repetitive projects.", o: [], c: "False (PERT is for repetitive, CPM is for non-repetitive)" },
            { q: "108. Operations management is concerned essentially with the utilization of __________.", o: [], c: "Resources" },
            { q: "109. A __________ can be considered as a means of graphically depicting all the operations involved in a Project.", o: [], c: "Network (or Network Diagram)" },
            { q: "110. The two types of maintenance costs need to be balanced - Cost of premature replacement and Cost of __________.", o: [], c: "Breakdown" },
            { q: "111. Which one of the following provides the standards for performance appraisal?", o: ["Mission", "Vision", "Objectives", "Values"], c: "Objectives" },
            { q: "112. Any metric that measures whether an organization is meeting certain __________ objectives and goals that are set to help the organization succeed is called:", o: ["Key Result Areas", "Key Performance Areas"], c: "Key Result Areas" },
            { q: "113. Which one of the following provides the broad data from which to identify key drivers of change?", o: ["BCG matrix", "PESTEL analysis", "SWOT analysis", "Critical Success Factors"], c: "PESTEL analysis" },
            { q: "114. The advantages of JIT system is that it enables a company to maintain buffer stock of Inventory.", o: [], c: "False" },
            { q: "115. Organizational behaviour is about how people may be motivated to work together in more effective ways.", o: [], c: "True" },
            { q: "116. The term threats can also been seen as challenges.", o: [], c: "True" },
            { q: "117. A shared, immutable ledger that facilities the process of recording transactions and tracking assets in a business network is referred to as:", o: ["Artificial Intelligence", "Virtual Machine", "Machine Language", "Blockchain"], c: "Blockchain" },
            { q: "118. With reference to the operations of a manufacturing company, one of the important decisions 'How to reach the products to the customers?' is related to which one?", o: ["Quality Management", "Inventory Management", "Maintenance Management", "Distribution"], c: "Distribution" },
            { q: "119. Which one of the following is associated with the question 'How much space and capacity does each economic activity centre need?'", o: ["Facility location", "Facility layout", "Capacity Planning", "MRP"], c: "Facility layout" },
            { q: "120. The non-linear iterative process that seeks to understand users needs, challenge assumptions, redefine problems and create innovative solutions to prototype and test, is called:", o: ["Product design", "Product Mix", "Design thinking", "Product Life Cycle"], c: "Design thinking" }
        ]
    },
    {
        setName: "Set 9",
        questions: [
            { q: "121. Any solution that also satisfies the non-negative restrictions of the general linear programming problem is called:", o: ["Basic Solution", "Feasible Solution", "Basic Feasible solution", "Optimal feasible solution"], c: "Feasible Solution" },
            { q: "122. ISO Standards are reviewed every:", o: ["Year", "2 Years", "5 Years", "10 Years"], c: "5 Years" },
            { q: "123. ABS Ltd., a manufacturing Company has a production line consisting of five work centers in series. The actual output of the line is 270 units per shift. Work Centre capacities: P=350, Q=320, R=360, S=325, T=300. Identify the bottleneck centre:", o: ["Work Centre P", "Work Centre R", "Work Centre T", "Work Centre S"], c: "Work Centre T" },
            { q: "124. Under Maintenance management, two types of costs need to be balanced - one is cost of premature replacement, the other is cost of:", o: ["Purchase of Raw Materials", "Breakdown", "Purchase of finished goods", "None of the above"], c: "Breakdown" },
            { q: "125. The technique which involves developing a model of real phenomenon and then performing experiments on the model evolved, is referred to as:", o: ["Transportation", "Assignment", "Simulation", "Queuing"], c: "Simulation" },
            { q: "126. Which one of the following refers to the job-specific goals of each individual employee?", o: ["Performance Objectives", "Personal Objectives", "Professional Objectives", "Organization Genomics"], c: "Performance Objectives" },
            { q: "127. Which one of the following is related to a situation when consumers have a preference for the products of established companies?", o: ["Economics of Scale", "Brand Loyalty", "Customer switching costs", "Absolute cost advantages"], c: "Brand Loyalty" },
            { q: "128. The fundamental rethinking and radical redesign of business processes to achieve dramatic improvements in critical contemporary measures of performance such as cost, quality, service and speed is called:", o: ["Transformation", "Reprocessing", "Total Quality Management", "Business Process Re-engineering (BPR)"], c: "Business Process Re-engineering (BPR)" },
            { q: "129. A collection of data that is huge in volume and is growing exponentially with time is called:", o: ["Big data", "Huge data", "Block Chain", "Cloud data"], c: "Big data" },
            { q: "130. The expected time for an activity of project B is 7 days. If the optimistic and pessimistic time are 3 days and 15 days respectively, what will be the most likely time of the activity?", o: ["10 days", "6 days", "12 days", "None of these"], c: "6 days" },
            { q: "131. In SWOTC Analysis, the Letter C denotes:", o: ["Champions", "Characteristics", "Challenges", "Core Values"], c: "Challenges" },
            { q: "132. While developing KRAs (Key Result Areas), which of the following can be hurdles?", o: ["Lack of clarity", "Distractions", "Top-Down Imposition", "All of the above"], c: "All of the above" },
            { q: "133. With reference to the operations of a manufacturing company, one of the important decisions 'How to reach the products to the customers?' is related to which one?", o: ["Quality Management", "Inventory Management", "Maintenance Management", "Distribution"], c: "Distribution" },
            { q: "134. Which one of the following is associated with the question 'How much space and capacity does each economic activity centre need?'", o: ["Facility location", "Facility layout", "Capacity Planning", "MRP"], c: "Facility layout" },
            { q: "135. The non-linear iterative process that seeks to understand users needs, challenge assumptions, redefine problems and create innovative solutions to prototype and test, is called:", o: ["Product design", "Product Mix", "Design thinking", "Product Life Cycle"], c: "Design thinking" }
        ]
    },
    {
        setName: "Set 10",
        questions: [
            { q: "136. Any solution that also satisfies the non-negative restrictions of the general linear programming problem is called:", o: ["Basic Solution", "Feasible Solution", "Basic Feasible solution", "Optimal feasible solution"], c: "Feasible Solution" },
            { q: "137. ISO Standards are reviewed every:", o: ["Year", "2 Years", "5 Years", "10 Years"], c: "5 Years" },
            { q: "138. ABS Ltd., a manufacturing Company has a production line consisting of five work centers in series with individual capacity in units per shift. The actual output of the line is 270 units per shift. Work Centre P=350, Q=320, R=360, S=325, T=300. Identify the bottleneck centre:", o: ["Work Centre P", "Work Centre R", "Work Centre T", "Work Centre S"], c: "Work Centre T" },
            { q: "139. Under Maintenance management, two types of costs need to be balanced - one is cost of premature replacement, the other is cost of:", o: ["Purchase of Raw Materials", "Breakdown", "Purchase of finished goods", "None of the above"], c: "Breakdown" },
            { q: "140. The technique which involves developing a model of real phenomenon and then performing experiments on the model evolved, is referred to as:", o: ["Transportation", "Assignment", "Simulation", "Queuing"], c: "Simulation" },
            { q: "141. Which one of the following refers to the job-specific goals of each individual employee?", o: ["Performance Objectives", "Personal Objectives", "Professional Objectives", "Organization Genomics"], c: "Performance Objectives" },
            { q: "142. Which one of the following is related to a situation when consumers have a preference for the products of established companies?", o: ["Economics of Scale", "Brand Loyalty", "Customer switching costs", "Absolute cost advantages"], c: "Brand Loyalty" },
            { q: "143. The fundamental rethinking and radical redesign of business processes to achieve dramatic improvements in critical contemporary measures of performance such as cost, quality, service and speed is called:", o: ["Transformation", "Reprocessing", "Total Quality Management", "Business Process Re-engineering (BPR)"], c: "Business Process Re-engineering (BPR)" },
            { q: "144. A collection of data that is huge in volume and is growing exponentially with time is called:", o: ["Big data", "Huge data", "Block Chain", "Cloud data"], c: "Big data" },
            { q: "145. The expected time for an activity of project B is 7 days. If the optimistic and pessimistic time are 3 days and 15 days respectively, what will be the most likely time of the activity?", o: ["10 days", "6 days", "12 days", "None of these"], c: "6 days" },
            { q: "146. In SWOTC Analysis, the Letter C denotes:", o: ["Champions", "Characteristics", "Challenges", "Core Values"], c: "Challenges" },
            { q: "147. While developing KRAs (Key Result Areas), which of the following can be hurdles?", o: ["Lack of clarity", "Distractions", "Top-Down Imposition", "All of the above"], c: "All of the above" },
            { q: "148. Let's consider an example of a product manufacturing company, who is aware that it needs to produce the products. One of the important aspects involved in the operational planning which is related to the question 'How much to produce?' is known as:", o: ["Process Selection Layout", "Aggregate Planning", "Demand Forecasting", "Quality Management"], c: "Aggregate Planning" },
            { q: "149. __________ of a plant is the maximum rate of output goods or services the plant can produce.", o: ["Production", "Potential", "Demand", "Capacity"], c: "Capacity" },
            { q: "150. Which one of the following basic process types is used when a very highly standardized product is desired in high volumes?", o: ["Batch Process", "Continuous Process", "Job Shop Process", "Project Process"], c: "Continuous Process" }
        ]
    },
    {
        setName: "Set 11",
        questions: [
            { q: "151. Which one of the following production controls is typically found whenever a particular bottleneck machine exists in the process of Manufacturing?", o: ["Load Control", "Batch Control", "Block Control", "Flow Control"], c: "Load Control" },
            { q: "152. Which one of the following ISO Standards evaluates the Management of the entire manufacturing process, from purchasing to design, to training?", o: ["ISO 9004", "ISO 9003", "ISO 9000", "ISO 9001"], c: "ISO 9001" },
            { q: "153. A Zinc Plant of ZOS Ltd., manufactures product Z of 30 units per shift of 8 hours. If the Standard time per unit is 12 minutes, what is the productivity per shift of 8 hours?", o: ["60", "75", "80", "90"], c: "60" },
            { q: "154. Which one of the following design Tests asks whether a proposed Structure will set up links between parts of the organizations that are important but bound to be strained?", o: ["The People Test", "The Feasibility Test", "The Difficult Links Test", "The Flexibility Test"], c: "The Difficult Links Test" },
            { q: "155. RON Ltd., a manufacturer of ball bearings provides the following items that is being managed using a fixed order Quantity Model with Safety Stock: Annual Demand D=24,000 Units, Order Quantity QO=3,600 Units, Safety Stock S=400 Units. What is the average Inventory Level?", o: ["2,500 units", "2,400 units", "2,200 units", "None of a, b and c"], c: "2,400 units" },
            { q: "156. The Slack Time of the Tail event and Slack time of Head event of an activity M are 15 days and 2 days respectively. If the total Float of Activity M is 16 days, Free Float will be:", o: ["13 days", "14 days", "15 days", "18 days"], c: "13 days" },
            { q: "157. Which one of the following Digital Marketing Strategies is a form of paid Advertising that allows Marketing Teams to essentially purchase traffic to their website?", o: ["Email Marketing", "Mobile Marketing", "Pay-per-click (PPC)", "Affiliate Marketing"], c: "Pay-per-click (PPC)" },
            { q: "158. Which of the following is/are true for a Blue Ocean Strategy?", o: ["Create and Capture New Demand", "Beat the Competition", "Exploit Existing Demand", "Compete in Existing Markets"], c: "Create and Capture New Demand" },
            { q: "159. Which one of the following sorts of business defined by the Market growth-market share axes of BCG Matrix, is a business unit with high market share in a matured market?", o: ["Cash Cow", "Dog", "Star", "Question Mark or Problem Child"], c: "Cash Cow" },
            { q: "160. __________ is the science of using mathematical calculations and logic to generate time effective sequence of tasks considering any resource and cost constraints.", o: ["Scheduling", "Plan", "Milestone", "Work-in-Progress"], c: "Scheduling" },
            { q: "161. Which one of the following announces what the company is providing to society, either a service or a product?", o: ["Mission", "Vision", "Values", "Objectives"], c: "Mission" },
            { q: "162. Which one of the following types of Cloud computing is a distribution model that delivers software applications over the Internet; these applications are often called web services?", o: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Amazon Web Services (AWS)"], c: "Software as a Service (SaaS)" },
            { q: "163. The ability to adapt quickly to changes in volume of demand, in the product mix demanded, and in product design or in delivery schedules, is sometimes referred to as:", o: ["Re-Engineering", "Business Process Restructuring", "Agile Manufacturing", "Right Sizing"], c: "Agile Manufacturing" },
            { q: "164. Which one of the following is associated with the configuration of departments, work centres and equipment and machinery, with focus on the flow of materials or work through the production system?", o: ["Facility Location", "Facility Layout", "Capacity Planning", "Process Design"], c: "Facility Layout" },
            { q: "165. In which one of the following phases of the product life cycle, organisations get engaged in aggressive promotional and pricing program?", o: ["Introduction", "Growth", "Maturity", "Decline"], c: "Growth" }
        ]
    },
    {
        setName: "Set 12",
        questions: [
            { q: "166. The Annual Carrying Cost of Material ZB is ₹3.60 per unit and its Total Carrying Cost is ₹9,000 per annum. If there is no Safety Stock of Material ZB, what will be the Economic Order Quantity (EOQ) for Material ZB?", o: ["5000 units", "6000 units", "6500 units", "4000 units"], c: "5000 units" },
            { q: "167. ZOOS Ltd., a manufacturing firm, has four Work Centres A, B, C, D in series with individual capacities in units per day: A=380, B=360, C=340, D=400. Actual Output=300. What is the System Efficiency?", o: ["75.25", "80.33", "99", "88.23"], c: "75.25" },
            { q: "168. A cement factory of SITON C Ltd., works 7 days a week in 3 shifts per day having maintenance in the first shift of around 2 hours. It has roughly 100 workers and produces around 2500 tonnes of PPC per month. What will be productivity per worker?", o: ["20 tonnes", "30 tonnes", "25 tonnes", "15 tonnes"], c: "25 tonnes" },
            { q: "169. For Quality Assurance in Design, Production, Installation and Servicing the __________ Model is used.", o: ["ISO 9002", "ISO 9001", "ISO 9003", "None of the above options"], c: "ISO 9001" },
            { q: "170. This provides the broad DATA, from which to identify key drivers of change.", o: ["SWOT Analysis", "BCG Matrix", "PESTEL Analysis", "Critical Success Factors"], c: "PESTEL Analysis" },
            { q: "171. Which one of the following cannot be closely associated with the Red Ocean Strategy?", o: ["Beat the Competition", "Make the Value-Cost trade-off", "Make the Competition irrelevant", "Exploit Existing Demand"], c: "Make the Competition irrelevant" },
            { q: "172. The process of __________ requires co-ordination across the entire organization and involves business culture changes.", o: ["Digital Strategy", "Digitization", "Digital Transformation", "Data Aggregation"], c: "Digital Transformation" },
            { q: "173. Forecasting the weather is an example of:", o: ["Narrow AI", "General AI (Human-Level)", "Super AI", "Deep-Learning"], c: "Narrow AI" },
            { q: "174. Which type of Production Control is most prominently applied in industries like textiles, and book magazine printing?", o: ["Batch Control", "Load Control", "Order Control", "Block Control"], c: "Batch Control" },
            { q: "175. The Work Breakdown Structure is typically developed in which one of the following phases of the project management life cycle?", o: ["Project Initiation Phase", "Project Planning Phase", "Project Quality Management Phase", "Execution Phase"], c: "Project Planning Phase" },
            { q: "176. Strategy Formulation is characterized by:", o: ["The focus is on effectiveness", "It requires motivation and leadership skills", "It involves managing forces during action", "It is primarily an operational process"], c: "The focus is on effectiveness" },
            { q: "177. Which one of the following activities involves receiving, storing and distributing inputs to the production process?", o: ["Inbound Logistics", "Operations", "Marketing & Sales", "Outbound Logistics"], c: "Inbound Logistics" },
            { q: "178. With reference to the operations of a manufacturing company, one of the important decisions is 'Are we producing right things?' Which one of the following is related to this?", o: ["Quality Management", "Inventory Management", "Maintenance Management", "Delivery Planning"], c: "Quality Management" },
            { q: "179. Which one of the following is associated with the question 'Where should each centre be located?'", o: ["Process layout", "Facility layout", "Product Layout", "Plant Layout"], c: "Product Layout" },
            { q: "180. Application of technology or process to the raw material to add use value is known as:", o: ["Product", "Production", "Application of Technology", "Combination of Technology and Process"], c: "Production" }
        ]
    },
    {
        setName: "Set 13",
        questions: [
            { q: "181. A steel plant has a design capacity of 50,000 tons of steel per day, effective capacity of 40,000 tons per day, and actual output of 36,000 tons per day. Compute the efficiency of the plant.", o: ["90", "72", "80", "110"], c: "72" },
            { q: "182. The following item is being managed using a fixed time period model with safety stock: Weekly demand=50 units, Review Cycle T=3 weeks, Safety Stock SS=30 units. What is the average inventory turns for the item in 1 year (52 weeks)?", o: ["84.20 turns per year", "24.76 turns per year", "80.50 turns per year", "None of the above"], c: "24.76 turns per year" },
            { q: "183. The Quality Circles and use of work teams or quality improvement teams are examples of:", o: ["Time Reduction", "Lean Production", "Worker Involvement", "Re-Engineering"], c: "Worker Involvement" },
            { q: "184. The over capacity is preferred when:", o: ["The cost of creating the capacity is prohibitively high", "Fixed cost of the capacity is not very high", "Shortage of products does not affect the company", "The technology changes fast"], c: "Fixed cost of the capacity is not very high" },
            { q: "185. __________ is about how people may be motivated to work together in more effective ways.", o: ["Organisational behavior", "Strategic Leadership", "Emotional Intelligence", "Organisational Change"], c: "Organisational behavior" },
            { q: "186. A __________ is a business unit in a growing market, but not yet with high market share.", o: ["Cash Cow", "Dog", "Question Mark", "Star"], c: "Question Mark" },
            { q: "187. __________ is a form of paid advertising that allows marketing teams to essentially purchase traffic to their website.", o: ["Influencer Marketing", "Affiliate Marketing", "Pay-per-click", "Content Marketing"], c: "Pay-per-click" },
            { q: "188. In which one of the following stages of Design Thinking, the aim is to identify the best possible solution for each problem found?", o: ["Prototype", "Define", "Test", "Ideate"], c: "Prototype" },
            { q: "189. In the scheduling function, if the Critical Ratio for a job is greater than 1, it implies that:", o: ["The job is behind the schedule", "The job is ahead of schedule", "The job is not started yet", "The job is exactly on schedule"], c: "The job is ahead of schedule" },
            { q: "190. The ISO Standard associated with the Quality Assurance in Production and Installation is:", o: ["ISO 9001", "ISO 9002", "ISO 9003", "ISO 9004"], c: "ISO 9002" },
            { q: "191. Which one of the following cannot be called a valid Type of Big Data?", o: ["Structured Data", "Unstructured Data", "Meta Data", "Semi-Structured Data"], c: "Meta Data" },
            { q: "192. The 4 __________ refers to a set of managerial decisions and actions that determines the long-term performance of an organization.", o: ["Organisational culture", "Strategic management", "Vision", "Mission"], c: "Strategic management" },
            { q: "193. Quality Management is related to:", o: ["Producing right things", "Producing efficiently", "Producing economically", "Producing fast"], c: "Producing right things" },
            { q: "194. Which of the following is associated with 'Where should each centre be located?'", o: ["Product Layout", "Process Layout", "Fixed Position Layout", "Cellular Layout"], c: "Product Layout" },
            { q: "195. Production is:", o: ["Application of technology or process to raw material to add use value", "Buying raw material", "Selling finished goods", "Storing goods"], c: "Application of technology or process to raw material to add use value" }
        ]
    },
    {
        setName: "Set 14",
        questions: [
            { q: "196. Efficiency of a plant is calculated as:", o: ["(Actual output / Effective capacity) * 100", "(Actual output / Design capacity) * 100", "(Effective capacity / Design capacity) * 100", "(Design capacity / Actual output) * 100"], c: "(Actual output / Effective capacity) * 100" },
            { q: "197. Average inventory turns is calculated as:", o: ["Annual Demand / Average Inventory", "Average Inventory / Annual Demand", "Annual Demand / Order Quantity", "Order Quantity / Annual Demand"], c: "Annual Demand / Average Inventory" },
            { q: "198. Quality Circles are examples of:", o: ["Worker Involvement", "Management Control", "Customer Feedback", "Supplier Relationship"], c: "Worker Involvement" },
            { q: "199. Over capacity is preferred when:", o: ["Fixed cost of capacity is not very high", "Variable cost is high", "Demand is stable", "Technology is static"], c: "Fixed cost of capacity is not very high" },
            { q: "200. Organisational behaviour is about:", o: ["How people may be motivated to work together in more effective ways", "Managing finances", "Designing products", "Marketing strategies"], c: "How people may be motivated to work together in more effective ways" },
            { q: "201. A Question Mark in BCG Matrix is:", o: ["Business unit in a growing market, but not yet with high market share", "High market share in slow growth market", "Low market share in slow growth market", "High market share in high growth market"], c: "Business unit in a growing market, but not yet with high market share" },
            { q: "202. Pay-per-click is:", o: ["A form of paid advertising that allows marketing teams to purchase traffic", "Free advertising", "Social media posting", "Email marketing"], c: "A form of paid advertising that allows marketing teams to purchase traffic" },
            { q: "203. In Design Thinking, Prototype stage aims to:", o: ["Identify the best possible solution for each problem found", "Define the problem", "Test the solution", "Generate ideas"], c: "Identify the best possible solution for each problem found" },
            { q: "204. Critical Ratio > 1 implies:", o: ["The job is ahead of schedule", "The job is behind schedule", "The job is on schedule", "The job is cancelled"], c: "The job is ahead of schedule" },
            { q: "205. ISO 9002 is associated with:", o: ["Quality Assurance in Production and Installation", "Quality Assurance in Design", "Quality Assurance in Inspection", "Quality Management Guidelines"], c: "Quality Assurance in Production and Installation" },
            { q: "206. Which is NOT a valid Type of Big Data?", o: ["Meta Data", "Structured Data", "Unstructured Data", "Semi-Structured Data"], c: "Meta Data" },
            { q: "207. Strategic management refers to:", o: ["Set of managerial decisions and actions that determines long-term performance", "Day to day operations", "Financial accounting", "Human resource management"], c: "Set of managerial decisions and actions that determines long-term performance" },
            { q: "208. Which is related to 'Producing right things'?", o: ["Quality Management", "Cost Management", "Time Management", "Human Resource Management"], c: "Quality Management" },
            { q: "209. Product Layout answers:", o: ["Where should each centre be located?", "How much space is needed?", "What equipment is needed?", "Who will work where?"], c: "Where should each centre be located?" },
            { q: "210. Application of technology to raw material to add use value is called:", o: ["Production", "Procurement", "Planning", "Promotion"], c: "Production" }
        ]
    },
    {
        setName: "Set 15",
        questions: [
            { q: "211. Plant efficiency formula:", o: ["(Actual Output / Effective Capacity) * 100", "(Actual Output / Design Capacity) * 100", "(Effective Capacity / Actual Output) * 100", "(Design Capacity / Effective Capacity) * 100"], c: "(Actual Output / Effective Capacity) * 100" },
            { q: "212. Average inventory turns formula:", o: ["Annual Demand / Average Inventory", "Average Inventory / Annual Demand", "Annual Demand * Unit Price", "Average Inventory * Holding Cost"], c: "Annual Demand / Average Inventory" },
            { q: "213. Worker Involvement example:", o: ["Quality Circles", "Time Cards", "Job Descriptions", "Performance Reviews"], c: "Quality Circles" },
            { q: "214. Preference for Over Capacity:", o: ["When fixed cost of capacity is low", "When variable cost is high", "When demand is falling", "When competition is high"], c: "When fixed cost of capacity is low" },
            { q: "215. Organisational behaviour focus:", o: ["Motivation and working together effectively", "Profit maximization", "Cost reduction", "Market expansion"], c: "Motivation and working together effectively" },
            { q: "216. BCG Question Mark definition:", o: ["Growing market, low market share", "Mature market, high market share", "Declining market, low market share", "Growing market, high market share"], c: "Growing market, low market share" },
            { q: "217. Pay-per-click definition:", o: ["Paid advertising to purchase traffic", "Organic search traffic", "Direct traffic", "Referral traffic"], c: "Paid advertising to purchase traffic" },
            { q: "218. Prototype stage aim:", o: ["Identify best possible solution", "Brainstorm ideas", "Launch product", "Analyze market"], c: "Identify best possible solution" },
            { q: "219. Meaning of Critical Ratio > 1:", o: ["Job is ahead of schedule", "Job is late", "Job is on time", "Job is suspended"], c: "Job is ahead of schedule" },
            { q: "220. ISO 9002 focus:", o: ["Production and Installation", "Design and Development", "Final Inspection", "Servicing"], c: "Production and Installation" },
            { q: "221. Invalid Big Data type:", o: ["Meta Data", "Structured", "Unstructured", "Semi-Structured"], c: "Meta Data" },
            { q: "222. Strategic management involves:", o: ["Decisions determining long-term performance", "Short-term planning", "Operational control", "Routine administration"], c: "Decisions determining long-term performance" }
        ]
    }
];