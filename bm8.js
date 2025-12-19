/**
 * Senior Data Analyst & JS Developer Extraction
 * Task: PDF to Structured JSON (JavaScript File)
 * Source: MCQBank_Paper8.pdf
 * Total Questions: 392
 */

const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "Prime Cost is:", o: ["All costs incurred in manufacturing a product", "the total of direct costs", "the material cost of a product", "the cost of operating a department"], c: "the total of direct costs" },
            { q: "A company employs three drivers to deliver goods to its customers. The salaries paid to these drivers are:", o: ["a part of prime cost", "a direct production expense", "a production overhead", "a selling & distribution overhead"], c: "a selling & distribution overhead" },
            { q: "A company has to pay a Rs. 1 per unit royalty to the designer of a product which it manufactures and sells. The royalty charge would be classified in the company's accounts as a", o: ["Direct expense", "Production overhead", "Administrative overhead", "Selling overhead"], c: "Direct expense" },
            { q: "is a method of dealing with overheads which involves spreading common costs over cost centers on the basis of benefit received.", o: ["overhead absorption", "overhead apportionment", "overhead allocation", "overhead analysis"], c: "overhead apportionment" },
            { q: "Which of the following classification is meant for distinction between direct cost and indirect cost?", o: ["Function", "Element", "Variability", "Controllability"], c: "Element" },
            { q: "Which of the following is applicable for Cost Control?", o: ["It is related with the future", "It is a corrective function", "It ends when the targets are achieved", "It challenges the standards set"], c: "It ends when the targets are achieved" },
            { q: "is anything for which a separate measurement of cost is required", o: ["Cost driver", "Profit centre", "Cost unit", "Cost object"], c: "Cost object" },
            { q: "Ticket counter in a Metro Station is an example of", o: ["Profit centre", "Investment centre", "Cost centre", "Revenue centre"], c: "Revenue centre" },
            { q: "Absorption costing is also referred as", o: ["Historical costing", "Traditional costing", "Full costing", "All of the above terms"], c: "All of the above terms" },
            { q: "the main purpose of cost accounting is", o: ["to maintain profit", "to help in inventory valuation", "to enter into price War with competitive firms", "to provide information to management for decision-making"], c: "to provide information to management for decision-making" },
            { q: "is anything for which a separate measurement is required", o: ["cost unit", "cost object", "cost driver", "cost sentre"], c: "cost object" },
            { q: "Which of the following is true about Cost Control", o: ["It is a corrective function", "It challenges the set standards", "It ends when targets achieved", "is concerned with future"], c: "It ends when targets achieved" },
            { q: "Cost Units used in Power Sector is:", o: ["Kilo-meter (K.M.)", "Kilo-Watt-Hour (kWh)", "Number of Electric Points", "Machine Hours"], c: "Kilo-Watt-Hour (kWh)" },
            { q: "Process Costing method is suitable for:", o: ["Transport Sector", "Chemical Industries", "Dam Construction", "Furniture-making"], c: "Chemical Industries" },
            { q: "distinction between Direct Cost and Indirect Cost is an example of classification.", o: ["By element", "By Function", "By controllability", "By Variability"], c: "By element" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "The advantage of using IT in Cost Accounting does not include", o: ["Single point data entry", "stock needs to be reconciled with goods received note", "reduction in multiplicity of documents", "integration of various functions"], c: "stock needs to be reconciled with goods received note" },
            { q: "A taxi provider charges minimum Rs. 80 thereafter Rs. 12 per kilometer of distance travelled, the behaviour of conveyance Cost is", o: ["fixed cost", "semi-variable", "variable", "administrative cost"], c: "semi-variable" },
            { q: "A Ltd. Has three Production Departments, and each department has machines, which of the following cannot be treated as Cost Centre for cost allocation:", o: ["Machines under the production Production Department", "Pruction Departments", "Both Production Department and Machines", "A Ltd."], c: "A Ltd." },
            { q: "Which of the following is an example of functional classification of cost?", o: ["Semi-variable costs", "Fixed Cost", "Administrative overhead", "indirect Overheads"], c: "Administrative overhead" },
            { q: "Cost which are ascertained after they have been incurred are known as", o: ["sunk costs", "Imputed Costs", "Historical Costs", "Oppurtunity Costs"], c: "Historical Costs" },
            { q: "Generally, for the purpose of Cost sheet preparation, costs are classified on the basis of -", o: ["Functions", "variablity", "relevance", "nature"], c: "Functions" },
            { q: "What is prime cost", o: ["Total direct cost only", "Total Indirect Costs only", "Total Non-Production Costs", "Total Production Costs"], c: "Total direct cost only" },
            { q: "Which of the following does not form part of prime cost", o: ["Cost of Packing", "cost of transportation paid to bring materials to factory", "GST paid on Raw materials (where input credit cannot be claimed)", "overtime premium paid to workers"], c: "Cost of Packing" },
            { q: "Which of these is not an objective of Cost Accounting?", o: ["Ascertainment of Cost", "Determination of Selling Price", "Cost Control and Cost reduction", "Assisting Shareholders in decision making"], c: "Assisting Shareholders in decision making" },
            { q: "Which of the following are direct expenses? (1) Cost of Special Designs drawings or layout, (2) Hire of Tools or Equipment for a particular job, (3) Salesman's wages, (4) Rent, rates and Insurance of a factory,", o: ["(1) and (2)", "(1) and (3)", "(2) and (3)", "(3) and (4)"], c: "(1) and (2)" },
            { q: "Salary paid to plant Supervisor is a part of", o: ["Direct expenses", "Factory Overheads", "Quality Control Cost", "administrative cost"], c: "Factory Overheads" },
            { q: "Depreciation of Director's Laptop is treated as a part of:", o: ["Administration Overheads", "Factory Overheads", "IT infrastructure Cost", "Research & Development Cost"], c: "Administration Overheads" },
            { q: "A manufacturing Company has set-up a lab for testing of products for compliance with standards. Salary of this Lab Staff are part of:", o: ["Works Overheads", "Quality Control Cost", "Direct Expenses", "Reearch & Development Cost"], c: "Quality Control Cost" },
            { q: "Audit fees paid to external Statutory Auditors is part of", o: ["Administration Cost", "Production Cost", "Selling & distribution Costs", "Quality Costrol Cost"], c: "Administration Cost" },
            { q: "Salary paid to factory stores is a part of", o: ["Factory Overheads", "Production Cost", "Direct Employee Cost", "Direct Material Cost"], c: "Factory Overheads" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "Canteen Expenses for factory workers are part of -", o: ["Factory Overheads", "Administration cost", "marketing cost", "direct expenses"], c: "Factory Overheads" },
            { q: "A company pays Royalty to State Government on the basis of production, it is treated as:", o: ["Direct material cost", "Quality Control Cost", "Direct Expenses", "Administrative Overhead"], c: "Direct Expenses" },
            { q: "Which of the following is not an element of Works Overhead?", o: ["Store Keeper's Salary", "Plant Manager's salary", "Sales Manager's Salary", "Product Inspector's Salary"], c: "Sales Manager's Salary" },
            { q: "A profit centre is a centre", o: ["Where the manager has the responsibility of generating and maximising profits", "Which is concerned with earning an adequate Return on Investment", "Both of the above", "Which manages cost"], c: "Where the manager has the responsibility of generating and maximising profits" },
            { q: "Responsibility Centre can be categorised into:", o: ["Cost Centres only", "Profit Centres only", "Investment Centres only", "Cost Centres, Profit Centres and Investment Centres"], c: "Cost Centres, Profit Centres and Investment Centres" },
            { q: "Cost Unit is defined as:", o: ["Unit of quantity of product, service or time in relation to which costs may be ascertained or expressed", "A location, person or an item of equipment or a group of these for which costs are ascertained and used for cost control.", "Centres having the responsibility of generating and maximising profits", "Centres concerned with earning an adequate return on investment"], c: "Unit of quantity of product, service or time in relation to which costs may be ascertained or expressed" },
            { q: "Fixed cost is a cost:", o: ["Which changes in total in proportion to changes in output", "which is partly fixed and partly variable in relation to output", "Which do not change in total during a given period despise changes in output", "which remains same for each unit of output"], c: "Which do not change in total during a given period despise changes in output" },
            { q: "Uncontrollable costs are the costs which be influenced by the action of a specified member of an undertaking.", o: ["can not", "can", "may or may not", "must"], c: "can not" },
            { q: "Element/s of Cost of a product are:", o: ["Material only", "Labour only", "Expenses only", "Material, Labour and expenses"], c: "Material, Labour and expenses" },
            { q: "Abnormal cost is the cost:", o: ["Cost normally incurred at a given level of output", "Cost not normally incurred at a given level of output", "Cost which is charged to customer", "Cost which is included in the cost of the product"], c: "Cost not normally incurred at a given level of output" },
            { q: "Conversion cost includes cost of converting..........into........", o: ["Raw material, WIP", "Raw material, Finished goods", "WIP, Finished goods", "Finished goods, Saleable goods"], c: "Raw material, Finished goods" },
            { q: "Sunk costs are:", o: ["relevant for decision making", "Not relevant for decision making", "cost to be incurred in future", "future costs"], c: "Not relevant for decision making" },
            { q: "Calculate the prime cost from the following information: Direct material purchased: Rs. 1,00,000; Direct material consumed: Rs. 90,000; Direct labour: Rs. 60,000; Direct expenses: Rs. 20.000; Manufacturing overheads: Rs. 30,000", o: ["Rs. 1,80,000", "Rs. 2,00,000", "Rs. 1,70,000", "Rs. 2,10,000"], c: "Rs. 1,70,000" },
            { q: "Total cost of a product: Rs. 10,000; Profit: 25% on Selling Price; Profit is:", o: ["Rs. 2,500", "Rs. 3,000", "Rs. 3,333", "Rs. 2,000"], c: "Rs. 3,333" },
            { q: "Calculate cost of sales from the following: Net Works cost: Rs. 2,00,000; Office & Administration Overheads: Rs. 1,00,000; Opening stock of WIP: Rs. 10,000; Closing Stock of WIP: Rs. 20,000; Closing stock of finished goods: Rs. 30,000; Selling overheads: Rs. 10,000. (No opening stock of finished goods)", o: ["Rs. 2,70,000", "Rs. 2,80,000", "Rs. 3.00.000", "Rs. 3,20,000"], c: "Rs. 2,80,000" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "Which of the following is considered as normal loss of material?", o: ["Pilferage", "Loss due to accident", "Loss due to careless handling of material", "None of these"], c: "Loss due to careless handling of material" },
            { q: "The most important element of cost is-", o: ["Material", "Labour", "Overheads", "All of these"], c: "Material" },
            { q: "Direct material is a", o: ["Adiministration Cost", "Selling and Distribution cost", "All of these", "None of these"], c: "None of these" },
            { q: "Which of the following is considered as accounting record?", o: ["Bin Card", "Bill of material", "Store Ledger", "None of these"], c: "Store Ledger" },
            { q: "Direct material can be classified as:", o: ["Fixec cost", "Semi-Variable cost", "Vaiable Cost", "Prime cost"], c: "Vaiable Cost" },
            { q: "In which of the following methods of pricing, costs lag behind the current economic values?", o: ["Replacement price method", "Last in first out price method", "First in first out price method", "Weighted average price method"], c: "First in first out price method" },
            { q: "In which of the following methods, issues of materials are priced at pre-determined rate?", o: ["Replacement price method", "Inflated price method", "Specific price method", "Standard price method"], c: "Standard price method" },
            { q: "Which of the following methods smoothes out the effect of fluctuations when material prices fluctuate widely?", o: ["FIFO", "Simple Average", "LIFO", "Weighted average"], c: "Weighted average" },
            { q: "In which of the following incentive plan of payment, wages on time basis are not Guaranteed?", o: ["Halsey plan", "Rowan plan", "Taylor's differential piece rate system", "Gantt's task and bonus system"], c: "Taylor's differential piece rate system" },
            { q: "Cost of idle time arising due to non-availability of raw material is:", o: ["Charged to costing profit and loss A/c", "Charged to factory overheads", "Recovered by inflating the wage rate", "Ignored"], c: "Charged to costing profit and loss A/c" },
            { q: "When overtime is required for meeting urgent orders, overtime premium should be", o: ["Charged to costing profit and loss A/c", "Charged to overhead costs", "Charged to respective jobs", "Ignored"], c: "Charged to overhead costs" },
            { q: "Labour turnover is measured by", o: ["Number of workers replaced average number of workers", "Number of workers left/number in the beginning plus number at the end", "Number of workers joining/number in the beginning of the period", "All of these"], c: "Number of workers replaced average number of workers" },
            { q: "Idle time is", o: ["Time spent by workers in factory", "Time spent by workers in office", "Time spent by workers off their work", "Time spent by workers on their job"], c: "Time spent by workers off their work" },
            { q: "Over time is:", o: ["Actual hours being more than normal time", "Actual hours being more than standard time", "Standard hours being more than actual hours", "Actual hours being less than standard time"], c: "Actual hours being more than normal time" },
            { q: "Labour productivity is measured by comparing", o: ["Total output with total man-hours", "Added value for the product with total wage cost", "Actual time and standard time", "All of the above"], c: "All of the above" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "If the time saved is less than 50% of the standard time, then the wages under Rowan and Halsey premium plan on comparison gives:", o: ["Equal wages under two plans", "More wages to workers under Halsey Plan than Rowan Plan", "More wages to workers under Rowan Plan than Halsey Plan", "None of the above"], c: "More wages to workers under Rowan Plan than Halsey Plan" },
            { q: "Under Taylor's differential piece rate scheme, if a worker fails to complete the task within the standard time, then he is paid", o: ["83% of the piece work rate", "175% of the piece work rate", "67% of the piece work rate", "125% of the piece work rate"], c: "83% of the piece work rate" },
            { q: "Direct Expenses includes imputed cost.", o: ["Shall", "Shall not", "Shall be", "None of these"], c: "Shall not" },
            { q: "Direct Expenses that does not meet the test of materiality can be part of overhead.", o: ["Treated", "Not treated", "All of the these", "None of these"], c: "Treated" },
            { q: "Example of Direct Expenses.", o: ["Rent", "Royalty charged on production", "Bonus to employee", "None of these"], c: "Royalty charged on production" },
            { q: "The allotment of whole items of cost centres or cost unit is called:", o: ["Cost allocation", "Cost apportionment", "Overhead absorption", "None of the above"], c: "Cost allocation" },
            { q: "Directors remuneration and expenses form a part of:", o: ["Production overhead", "Administration overhead", "Selling overhead", "Distribution overhead"], c: "Administration overhead" },
            { q: "Charging to a cost center those overheads that result solely for the existence of that cost Center is known as", o: ["Allocation", "Apportionment", "Absorption", "Allotment"], c: "Allocation" },
            { q: "Absorption means:", o: ["Charging of overheads to cost centres", "Charging of overhead to cost units", "Charging of overheads to cost centres or cost units", "None of the above"], c: "Charging of overhead to cost units" },
            { q: "When the amount of under or over absorption is significant, it should be disposed of by:", o: ["Transferring to costing profit and loss account", "The use of supplementary rates", "Carrying over as a deferred charge to the next accounting year", "None of the above"], c: "The use of supplementary rates" },
            { q: "Selling and distribution overheads are absorbed on the basis of:", o: ["rate per unit.", "percentage on works cost.", "percentage on selling price of each unit.", "Any of the above"], c: "Any of the above" },
            { q: "Primary packing cost is a part of:", o: ["Direct material cost", "Distribution overhead", "Selling overhead", "Production cost"], c: "Production cost" },
            { q: "Normal capacity of a plant refers to the difference between:", o: ["Maximum capacity and practical capacity", "Maximum capacity and actual capacity", "Practical capacity and estimated idle capacity as revealed by long term sales trend", "Practical capacity and normal capacity"], c: "Practical capacity and estimated idle capacity as revealed by long term sales trend" },
            { q: "When the amount of overhead absorbed is less than the amount of overhead incurred, it is called:", o: ["Under absorption of overhead", "Over absorption of overhead", "Proper absorption of overhead", "None of the above"], c: "Under absorption of overhead" },
            { q: "is a scientific and accurate method of factory overhead absorption.", o: ["Percentage of prime cost method", "Machine hour rate method", "Percentage of direct material cost method", "Percentage of direct labour cost method"], c: "Machine hour rate method" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "Which of these is not a Material control technique:", o: ["ABC Analysis", "Fixation of raw material levels", "Maintaining stores ledger", "Control over slow moving and non moving items"], c: "Maintaining stores ledger" },
            { q: "Out of the following, what is not the work of purchase department:", o: ["Receiving purchase requisition", "Exploring the sources of material supply", "Preparation and execution of purchase orders", "Accounting for material received"], c: "Accounting for material received" },
            { q: "Bin Card is a:", o: ["Quantitative as well as value wise records of material received. issued and balance:", "Quantitative record of material received, issued and balance", "Value wise records of material received, issued and balance", "a record of labour attendance"], c: "Quantitative record of material received, issued and balance" },
            { q: "Stores Ledger is a:", o: ["Quantitative as well as value wise records of material received, issued and balance:", "Quantitative record of material received, issued and balance", "Value wise records of material received, issued and balance", "a record of labour attendance"], c: "Quantitative as well as value wise records of material received, issued and balance:" },
            { q: "Re-order level is calculated as:", o: ["Maximum consumption x Maximum re-order period", "Minimum consumption x Minimum re-order period", "1/2 of (Minimum + Maximum consumption)", "Maximum level - Minimum level"], c: "Maximum consumption x Maximum re-order period" },
            { q: "Economic order quantity is that quantity at which cost of holding and carrying inventory is", o: ["Maximum and equal", "Minimum and equal", "It can be maximum or minimum depending upon case to case.", "Minimum and unequal"], c: "Minimum and equal" },
            { q: "ABC analysis is an inventory control technique in which:", o: ["Inventory levels are maintained", "Inventory is classified into A, B and C category with A being the highest quantity, lowest value.", "Inventory is classified into A, B and C Category with A being the lowest quantity, highest value", "Either b or c."], c: "Inventory is classified into A, B and C Category with A being the lowest quantity, highest value" },
            { q: "Which one out of the following is not an inventory valuation method?", o: ["FIFO", "LIFO", "Weighted Average", "EOQ"], c: "EOQ" },
            { q: "In case of rising prices (inflation), FIFO method will:", o: ["provide lowest value of closing stock and profit", "provide highest value of closing stock and profit", "provide highest value of closing stock but lowest value of profit", "provide highest value of profit but lowest value of closing stock"], c: "provide highest value of closing stock and profit" },
            { q: "In case of rising prices (inflation), LIFO will:", o: ["provide lowest value of closing stock and profit", "provide highest value of closing stock and profit", "provide highest value of closing stock but lowest value of profit", "provide highest value of profit but lowest value of closing stock"], c: "provide lowest value of closing stock and profit" },
            { q: "Calculate Re-order level from the following: Consumption per week: 100-200 units Delivery period: 14-28 days", o: ["5600 units", "800 units", "1400 units", "200 units"], c: "800 units" },
            { q: "Calculate EOQ (approx.) from the following details: Annual Consumption: 24000 units; Ordering cost: Rs. 10 per order; Purchase price: Rs. 100 per unit; Carrying cost: 5%", o: ["310", "400", "290", "300"], c: "310" },
            { q: "Calculate the value of closing stock using FIFO method from: Jan 1 Opening: 50 units @ Rs. 4; Receipts: Jan 5 100 units @ Rs. 5, Jan 12 200 units @ Rs. 4.50; Issues: Jan 2 30 units, Jan 18 150 units", o: ["Rs. 765", "Rs. 805", "Rs. 786", "Rs. 700"], c: "Rs. 765" },
            { q: "Calculate the value of closing stock using LIFO method from the same data as above:", o: ["Rs. 765", "Rs. 805", "Rs. 786", "Rs. 700"], c: "Rs. 805" },
            { q: "Calculate the value of closing stock using Weighted Average method from the same data as above:", o: ["Rs. 765", "Rs. 805", "Rs. 786", "Rs. 700"], c: "Rs. 786" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "Cost of abnormal wastage is:", o: ["Charged to the product cost", "Charged to the profit & loss account", "charged partly to the product and partly profit & loss account", "not charged at all."], c: "Charged to the profit & loss account" },
            { q: "Calculate re-order level from the following: Safety stock: 1000 units; Consumption per week: 500 units; It takes 12 weeks to reach material from the date of ordering.", o: ["1000 units", "6000 units", "3000 units", "7000 units"], c: "7000 units" },
            { q: "From the following information, calculate the extra cost of material by following EOQ: Annual consumption: $45000$ units; Ordering cost per order: Rs. 10; Carrying cost per unit per annum: Rs. 10; Purchase price per unit: Rs. 50; Re-order quantity at present: 45000 units; discount of 10% in bulk.", o: ["No saving", "Rs. 2,00,000", "Rs. 2,22,010", "Rs. 2,990"], c: "Rs. 2,990" },
            { q: "Which of the following is an abnormal cause of Idle time:", o: ["Time taken by workers to travel between gate and workplace", "Time lost between the finish of one job and starting of next job", "Time spent to meet personal needs like taking lunch, tea etc", "Machine break downs"], c: "Machine break downs" },
            { q: "If overtime is resorted to at the desire of the customer, then the overtime premium:", o: ["should be charged to costing profit and loss account;", "should not be charged at all", "should be charged to the job directly", "should be charged to the highest profit making department"], c: "should be charged to the job directly" },
            { q: "Labour turnover means:", o: ["Turnover generated by labour", "Rate of change in composition of labour force during a specified period", "Either of the above", "Both of the above"], c: "Rate of change in composition of labour force during a specified period" },
            { q: "Which of the following is not an avoidable cause of labour turnover:", o: ["Dissatisfaction with Job", "Lack of training facilities", "Low wages and allowances", "Disability, making a worker unfit for work"], c: "Disability, making a worker unfit for work" },
            { q: "Costs associated with the labour turnover can be categorised into:", o: ["Preventive Costs only", "Replacement costs only", "Both of the above", "Machine costs"], c: "Both of the above" },
            { q: "Calculate workers left and discharged from the following: Labour turnover rates are 20%, 10% and 6% (Flux, Replacement, Separation); No. of workers replaced is 80.", o: ["112", "80", "48", "64"], c: "48" },
            { q: "Calculate workers recruited and joined from the same data as above (Q99):", o: ["112", "80", "48", "64"], c: "112" },
            { q: "Calculate the labour turnover rate (replacement method): payroll start: 500; end: 600; 5 left, 20 discharged, 75 recruited (10 in vacancies, rest expansion).", o: ["4.55%", "1.82%", "6%", "3%"], c: "1.82%" },
            { q: "Calculate the labour turnover rate (Separation method) from the same data as above (Q101):", o: ["4.55%", "1.82%", "6%", "3%"], c: "4.55%" },
            { q: "A worker is allowed 60 hours to complete the job (Rs. 10/hr). Under Rowan, gets Rs. 12/hr. For same saving, what will he get under Halsey?", o: ["Rs.720", "Rs.540", "Rs.600", "Rs.900"], c: "Rs.540" },
            { q: "Overhead refers to:", o: ["Direct or Prime Cost", "All Indirect costs", "only Factory indirect costs", "Only indirect expenses"], c: "All Indirect costs" },
            { q: "Allotment of whole item of cost to a cost centre or cost unit is known as:", o: ["Cost Apportionment", "Cost Allocation", "Cost Absorption", "Machine hour rate"], c: "Cost Allocation" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "Which of the following is not a method of cost absorption?", o: ["Percentage of direct material cost", "Machine hour rate", "Labour hour rate", "Repeated distribution method"], c: "Repeated distribution method" },
            { q: "Service departments costs should be allocated to:", o: ["Only Service departments", "Only Production departments", "Both Production and service departments", "None of the production and service departments"], c: "Both Production and service departments" },
            { q: "Most suitable basis for apportioning insurance of machine would be:", o: ["Floor Area", "Value of Machines", "No. of Workers", "No. of Machines"], c: "Value of Machines" },
            { q: "Blanket overhead rate is:", o: ["One single overhead absorption rate for the whole factory", "Rate which is blank or nil rate", "rate in which multiple overhead rates are calculated for each production department", "Always a machine hour rate"], c: "One single overhead absorption rate for the whole factory" },
            { q: "AT Co requires 2kg material per unit; 5,000 units to produce; Opening: 800kg; Budgets to increase ending inventory by 20%. Material usage budget is:", o: ["8,000 Kg", "9,840 kg", "10,000 Kg", "10,160 Kg"], c: "10,000 Kg" },
            { q: "In 17,500 hours (standard cost Rs. 6.50/hr), labour efficiency variance was Rs. 7,800 favourable. Standard hours produced?", o: ["1200", "16300", "17500", "18700"], c: "18700" },
            { q: "In most of the manufacturing industries, the most important element of cost is", o: ["material", "Labour", "overheads", "None of the above"], c: "material" },
            { q: "Which of the following is NOT considered to be Normal loss of Materials?", o: ["Loss due to accidents", "Pilferage", "Loss due to breaking the bulk", "Loss due to transferring liquids"], c: "Loss due to breaking the bulk" },
            { q: "Which of following is NOT considered as Normal loss of material?", o: ["Loss due to evaporation", "Loss due to pilferage", "Loss due to breaking the bulk", "Loss due to transferring liquids"], c: "Loss due to pilferage" },
            { q: "At the economic ordering quantity level, the following is true on an annual basis:", o: ["Ordering Cost is minimum", "Carrying Cost is minimum", "Ordering Cost is equal to the Carrying Cost", "Purchase Price is minimum"], c: "Ordering Cost is equal to the Carrying Cost" },
            { q: "Continuous Stock Taking is a part of:", o: ["Annual Stock Taking", "Perpetual Inventory", "ABC Analysis", "Bin Cards"], c: "Perpetual Inventory" },
            { q: "In which of the following methods, issues of materials are priced at pre-determined rate?", o: ["Inflated Price Method", "Standard price method", "Replacement Price Method", "Market Price Method"], c: "Standard price method" },
            { q: "When Material prices Fluctuate widely, the method of pricing that gives absurd results is -", o: ["Simple Average Price", "Weighted Average price", "Moving Average Price", "Inflated Price"], c: "Simple Average Price" },
            { q: "When prices fluctuate widely, the method that will smooth out the effect of fluctuations is", o: ["Simple Average Price", "Weighted Average price", "FIFO", "LIFO"], c: "Weighted Average price" },
            { q: "Under the FSN system of Inventory Control, Inventory is Classified on the basis of:", o: ["Volumne of materail consumption", "Frequently of usage of items of inventory", "Criticality of the item", "Value of Items of Inventory"], c: "Frequently of usage of items of inventory" }
        ]
    },
    {
        setName: "Set 9",
        questions: [
            { q: "Form used for making a formal request to the Purchasing Department to purchase materials is a-", o: ["material transfer note", "Purchase Requisition Note", "Bill of materials", "Material requisition note"], c: "Purchase Requisition Note" },
            { q: "Classification of Materials on the basis of their Importance in Value is called:", o: ["EOQ Analysis", "Stock level analysis", "ABC Analysis", "Value analysis"], c: "ABC Analysis" },
            { q: "For Return of Excess Materials from Production Department to stores, the document used is:", o: ["Material return note", "Stores debit note", "Shop Credit Note", "All the above (same)"], c: "All the above (same)" },
            { q: "Which of the following is NOT related to a standard list of materials and components?", o: ["Consumption Statement", "bill of materials", "Material specification list", "Material list"], c: "Consumption Statement" },
            { q: "Which of the following is NOT recorded on a Bin card?", o: ["material received from supplier", "material issued to production depts", "Inter department transfers", "Loss of materials"], c: "Inter department transfers" },
            { q: "What is the formula for Re-order level?", o: ["Minimum Usage x minimum lead time", "Minimum Usage x maximum lead time", "Maximum Usage x minimum lead time", "Maximum Usage x maximum lead time"], c: "Maximum Usage x maximum lead time" },
            { q: "($ROL+ROQ (-)$ minimum usage x minimum lead time) is the computation formula for....", o: ["Maximum level", "Minimum level", "Average level", "danger level"], c: "Maximum level" },
            { q: "Inventory turnover ratio is expressed in", o: ["Rupees", "Percentage", "times", "Any of the above"], c: "times" },
            { q: "Generally, a High T/o and less days Average Inventory held is preferable", o: ["High, less", "Low, high", "Low low", "high, high"], c: "High, less" },
            { q: "Pricing of Materials in the order in which they are purchased is method called", o: ["Specific Identification", "FIFO", "LIFO", "Orderly"], c: "FIFO" },
            { q: "Landed cost of materials does not include.....", o: ["Cost of Containers", "Carriage Inwards", "Stock Insurance", "Unloading Charges"], c: "Stock Insurance" },
            { q: "Cost of abnormal loss of materials is", o: ["Debited to costing P & L", "Credited to Costing P&L", "InCluded In Landed Cost", "Included in OH"], c: "Debited to costing P & L" },
            { q: "Idle time is the time under which", o: ["Full wages are paid to workers", "No output is produced by the workers", "Both (a) and (b)", "None of the above"], c: "Both (a) and (b)" },
            { q: "When a direct Worker is paid on a monthly fixed salary basis, the following is true:", o: ["There is no idle time lost", "There is no idle time cost", "Idle time cost is separated and treated as overhead", "salari is fully treated as factory overhead cost"], c: "There is no idle time cost" },
            { q: "Time and Motion study is conducted by", o: ["Time Keeping Department", "Personnel Department", "Payroll Department", "Engineering Department"], c: "Engineering Department" }
        ]
    },
    {
        setName: "Set 10",
        questions: [
            { q: "Wages sheet is generally prepared by-", o: ["Time Keeping Department", "Personnel Department", "Payroll Department", "Engineering Department"], c: "Payroll Department" },
            { q: "For reducing the labour cost per unit, which of the following factors is most important?", o: ["Low wage rate", "Longer hours of work", "Higher Productivity or Efficiency", "Strict control and supervison"], c: "Higher Productivity or Efficiency" },
            { q: "Time Booking refers to a method wherein of an employees is recorded", o: ["Attendance", "book keeping details", "Health Status", "Time spent on a particulars job"], c: "Time spent on a particulars job" },
            { q: "Employee Cost includes", o: ["wages and salaries", "Allowances and incentives", "Payment for Overtime", "All of the above"], c: "All of the above" },
            { q: "Standard Time of a job is 60 hours and guaranteed time rate is rs 90 per hour. What is the amount of wages under Rowan plan if job is completed in 48 hours?", o: ["rs 1620", "rs 1728", "rs 1800", "rs 1440"], c: "rs 1728" },
            { q: "Standard Time of a job is 60 hours and guaranteed time rate is rs 90 per hour. What is the amount of wages under Halsey plan if job is completed in 48 hours?", o: ["rs 1620", "rs 1440", "rs 180", "rs 1728"], c: "rs 180" },
            { q: "If Overtime is required for meeting urgent orders, the Overtime premium should be charged as -", o: ["Respective job", "Over head Cost", "Costing P& L a/c", "None of above"], c: "Respective job" },
            { q: "Keeping a rocord of total time spent by the worker inside the factory is called", o: ["Time keeping", "Time Booking", "Time Managing", "Time Recording"], c: "Time keeping" },
            { q: "Wages attributable to Normal idle Time is treated as", o: ["Direct Wages", "Producction OH", "Either of the above", "None of the above"], c: "Either of the above" },
            { q: "In the context of Labour Turnover Number of Workers left and discharged is called-", o: ["Accession", "Replacement", "new replacement", "Separation"], c: "Separation" },
            { q: "(Hours worked X Rate per hour) is the computation of wages under", o: ["Incentive System", "Piece rate System", "Attendance System", "Time rate System"], c: "Time rate System" },
            { q: "Under Halsey System generally Bonus is computed as x (Time Saved x Rate per hour)", o: ["30%", "50%", "70%", "Actual Hrs/Std. Hrs"], c: "50%" },
            { q: "A worker will earn wages under Halsey and Rowan System, if time Saved equals", o: ["50% of Std Time", "50% of Actual Time", "1/2 of Total Time", "1/2 of Lost time"], c: "50% of Std Time" },
            { q: "Labour Efficiency (based on time) is given by the Formula", o: ["Std Time/Actual Time", "Actual time/std time", "Idle Time/Std time", "Idle Time/Actual Time"], c: "Std Time/Actual Time" },
            { q: "If wages per day of 8 hours is rs 500, std outputis 100 units, Actual Output is 120, piece rate wages-", o: ["rs 500", "rs 600", "rs 62.5", "rs 5"], c: "rs 600" }
        ]
    },
    {
        setName: "Set 11",
        questions: [
            { q: "If Std Time is 8 hours, Actual time is 6 hours, rate per hour is Rs. 100, Rwan Wages =", o: ["Rs. 600", "Rs. 150.", "Rs. 750", "Rs. 700"], c: "Rs. 750" },
            { q: "If Actual Output in 8 hours is 700 units, Standard Output is 90 units per hour, Efficiency Ratio is", o: ["97.22%", "102.86%", "100%", "77.78%"], c: "97.22%" },
            { q: "Fixed over costs are not effected in monetary terms during a fiven period by a change in Output. But this statement is valid provided", o: ["Increase in Output is not Substantial", "Increase in Output is substantial", "Both (a) and (b)", "None of the above"], c: "Increase in Output is not Substantial" },
            { q: "Capacity is defined as actually utilised capacity of a plant.", o: ["theoretical", "Installed", "Practical", "Idle"], c: "Practical" },
            { q: "Maximum Possible Productive Capacity of a plant when no operating time is lost is its:", o: ["Normal Capacity", "Practical Capacity", "Theoretical Capacity", "Capacity based on Sales Expectancy"], c: "Theoretical Capacity" },
            { q: "Charging of common Overheads cost to various cost centres, using appropriate bases is known as -", o: ["Allocation", "Apportionment", "Absorption", "Re- Apportionment"], c: "Apportionment" },
            { q: "Distribution of service Department Overheads Cost to production Departments using different assumptions and methods is known as", o: ["Allocation", "Apportionment", "Absorption", "Re- Apportionment"], c: "Re- Apportionment" },
            { q: "packing Cost is part of", o: ["Production cost", "Selling cost", "Distribution cost", "It may be any of the above"], c: "It may be any of the above" },
            { q: "Which of the following is not treated as a Manufacturing Overhead ?", o: ["Lubricants", "Cotton Waste", "apportioned administration overheads", "Night Shift allowance paid to a factory Worker due to general work pressure"], c: "Night Shift allowance paid to a factory Worker due to general work pressure" },
            { q: "The difference between Actual Factory Overhead and Absorbed Factory Overhead will be usually at the minimum level, provided pre-determined overhead rate is based on:", o: ["Maximum capacity", "Direct Labour Hours", "Machine Hours", "Normal Capacity"], c: "Normal Capacity" },
            { q: "When Absorbed Overhead is Higher than the amount of Overhead incurred, it is called.", o: ["Under absorption of overhead", "Over absorption of overhead", "Proper absorption of overhead.", "reabsorption of overhead"], c: "Over absorption of overhead" },
            { q: "Which of the following overhead cost may not be apportioned on the basis of Direct Wages?", o: ["Worker's Holiday pay", "Perquisites to workers", "ESI Contribution", "Managerial Salaries"], c: "Managerial Salaries" },
            { q: "The following is an example of direct expenses as per CAS-10:", o: ["Special raw material which is a substantial part of the prime cost", "Travelling expenses to site.", "Overtime charges paid to direct worker to complete work before time.", "Catalogue of prices of finished products."], c: "Travelling expenses to site." },
            { q: "CAS 21 stands for:", o: ["Capacity Determination", "Joint Cost", "Direct Expenses", "None of these"], c: "None of these" },
            { q: "Standard deals with the cost of service cost center is:", o: ["CAS-9", "CAS-13", "CAS-16", "CAS-22"], c: "CAS-13" }
        ]
    },
    {
        setName: "Set 12",
        questions: [
            { q: "Which standards deals with the principles and methods of determining depreciation and amortization cost?", o: ["CAS 9", "CAS 12", "CAS 15", "CAS 16"], c: "CAS 16" },
            { q: "Which standards deals with determination of averages/equalized transportation cost?", o: ["CAS 5", "CAS 6", "CAS 9", "None of these"], c: "CAS 5" },
            { q: "Which standard deals with the principles and methods of determining the manufacturing Cost of excisable goods?", o: ["CAS 2", "CAS 12", "CAS 15", "CAS 22"], c: "CAS 22" },
            { q: "deals with the principles and methods of determining the production or operation overheads.", o: ["CAS-3", "CAS-5", "CAS-9", "CAS"], c: "CAS-3" },
            { q: "CAS 13 stands for:", o: ["Joint Cost", "Interest and financing charges", "Employee Cost", "Cost of Service cost centre"], c: "Cost of Service cost centre" },
            { q: "Which of the following items is not included in preparation of cost sheet?", o: ["Carriage inward", "Purchase returns", "Sales Commission", "Interest paid"], c: "Interest paid" },
            { q: "Which of the following items is not excluded while preparing a cost sheet?", o: ["Goodwill written off", "Provision for taxation", "Property tax on Factory building", "Transfer to reserves"], c: "Property tax on Factory building" },
            { q: "Which of the following are direct expenses?(1) The cost of special designs, drawings or layouts, (2) The hire of tools or equipment for a particular job. (3) Salesman's wages, (4) Rent, rates and insurance of a factory", o: ["(1) and (2)", "(1) and (3)", "(1) and (4)", "(3) and (4)"], c: "(1) and (2)" },
            { q: "What is prime cost?", o: ["Total direct cost only", "Total indirect costs only", "Total non-production costs", "Total production costs"], c: "Total direct cost only" },
            { q: "Which of the following is not an element of works overhead?", o: ["Sales manager's salary", "Plant manager's salary", "Factory repairman's wages", "Product inspector's salary"], c: "Sales manager's salary" },
            { q: "For the purpose of Cost Sheet preparation, costs are classified based on:", o: ["Functions", "Relevance", "Variability", "Nature"], c: "Functions" },
            { q: "Salary paid to an office supervisor is a part of:", o: ["Direct expenses", "Administration cost", "Quality control cost", "Factory overheads"], c: "Administration cost" },
            { q: "Audit fees paid to cost auditors is part of", o: ["Selling and distribution cost", "Production cost", "Administration cost", "Not recorded in the cost sheet"], c: "Administration cost" },
            { q: "A company has set up a laboratory for testing of products for compliance with standards. Salary of this laboratory stuffs are part of:", o: ["Direct expenses", "Quality control cost", "Works overheads", "Research and development cost"], c: "Quality control cost" },
            { q: "Canteen expenses for factory workers are part of:", o: ["Administration cost", "Factory overhead", "Marketing cost", "None of the above"], c: "Factory overhead" }
        ]
    },
    {
        setName: "Set 13",
        questions: [
            { q: "Which of the following does not form part of prime cost?", o: ["GST paid on raw materials (input credit can be claimed)", "Cost of transportation paid to bring materials to factory", "Cost of packing", "Overtime premium paid to workers"], c: "Overtime premium paid to workers" },
            { q: "A company pays royalty to State Government on the basis of production, it is treated as:", o: ["Direct expenses", "Factory overheads", "Direct Material Cost", "Administration Cost"], c: "Direct expenses" },
            { q: "In Reconciliation Statements, expenses shown only in financial accounts are:", o: ["Added to financial profit", "Deducted from financial profit", "Ignored", "Added to costing profit"], c: "Added to financial profit" },
            { q: "In Reconciliation Statement, expenses shown only in cost accounts are:", o: ["Added to financial profit", "Deducted from financial profit", "Ignored", "Deducted from costing profit"], c: "Deducted from financial profit" },
            { q: "In Reconciliation Statement, transfers to reserves are:", o: ["Added to financial profit", "Deducted from financial profit", "Ignored", "Added to costing profit"], c: "Added to financial profit" },
            { q: "In Reconciliation Statement, incomes shown only in financial accounts are:", o: ["Added to financial profit", "Deducted from financial profit", "Ignored", "Deducted from costing profit"], c: "Deducted from financial profit" },
            { q: "In Reconciliation Statement, Closing Stock undervalued in Financial Accounts is", o: ["Added to financial profit", "Deducted from financial profit", "Ignored", "Added to costing profit"], c: "Added to financial profit" },
            { q: "Under non-integrated accounting system:", o: ["Separate ledgers are maintained for cost and financial accounts", "Same ledger is maintained for cost and financial accounts", "(A) and (B) both", "None of the above"], c: "Separate ledgers are maintained for cost and financial accounts." },
            { q: "Under non-integrated system of accounting, purchase of raw material is debited to:", o: ["Purchase account", "Material control account/stores ledger control account", "General ledger adjustment account", "None of the above"], c: "Material control account/stores ledger control account" },
            { q: "When costing loss is Rs. 5,600, administrative overhead under-absorbed being Rs. 600, the loss as per financial accounts should be", o: ["Rs.5000", "Rs.5600", "Rs.6200", "None of the above"], c: "Rs.6200" },
            { q: "Which of the following items should be added to costing profit to arrive at financial profit?", o: ["Income tax paid", "Over absorption of works overhead", "Interest paid on debentures", "All of the above"], c: "Over absorption of works overhead" },
            { q: "Integral accounts eliminate the necessity of operating", o: ["Cost Ledger control accoun", "Store Ledger control account", "Overhead adjustment account", "None of the above"], c: "Cost Ledger control accoun" },
            { q: "Under Non-integrated accounting system, the amount made to complete double entry is:", o: ["Finished goods control account", "Work in progress control account", "stores ledger control accounts", "General ledger adjustment account"], c: "General ledger adjustment account" },
            { q: "Under the Non-Integrated Accounting System -", o: ["Same ledger is maintained for Cost and financial Accounts", "Separate ledgers are maintained for Cost and Financial Accounts", "All transactions relating to assets and liabilities are recorded", "Product-wise information is not maintained"], c: "Separate ledgers are maintained for Cost and Financial Accounts" },
            { q: "Notional Costs -", o: ["May be included in Integrated Accounts", "may be Included in Non - Integrated accounts", "Cannot Be included in Non-intergrated Accounts", "are not accounted at all in Ingrated or Non-integrated Accounts"], c: "may be Included in Non - Integrated accounts" }
        ]
    },
    {
        setName: "Set 14",
        questions: [
            { q: "Which account is to be debited if materials worth rs 500 are returned to vendor under Non-Ingrated Accounts", o: ["Cost Ledger control account", "finished goods control Account", "WIP Control Account", "General ledger adjustment account"], c: "General ledger adjustment account" },
            { q: "What is the journal Entry under Integrated System for recording Sales made?", o: ["No entry", "Dr sales, Cr General Ledger Adjustment", "Dr. cash or bank Cr. Sales", "Dr. General Ledger Adjsutment, Cr sales"], c: "Dr. General Ledger Adjsutment, Cr sales" },
            { q: "Which of the following items is most likely to be included in Cost Accounts?", o: ["Notional Rent", "Donations", "Transfer to General Reserve", "Receivable"], c: "Notional Rent" },
            { q: "Job costing is used in:", o: ["Furniture making", "Repair shops", "Printing press", "All of the above"], c: "All of the above" },
            { q: "In a job cost system, costs are accumulated", o: ["On a monthly basis", "By specific job", "By department or process", "By kind of material used"], c: "By specific job" },
            { q: "The most suitable cost system where the products differ in type of material and work performed is:", o: ["Operating Costing", "Job costing", "Process costing", "All of these."], c: "Job costing" },
            { q: "Cost Price is not fixed in case of:", o: ["Cost plus contracts", "Escalation clause", "De escalation clause", "Rent"], c: "Cost plus contracts" },
            { q: "Most of the expenses are direct in:", o: ["Job costing", "Batch costing", "Contact costing", "All"], c: "Contact costing" },
            { q: "Cost plus contract is usually entered into those cases where", o: ["Cost can be easily estimated", "Escalation clause", "Cost of certified and uncertified work", "Determination of contract cost with reasonable accuracy is not possible"], c: "Determination of contract cost with reasonable accuracy is not possible" },
            { q: "In order to determine cost of the products or services, different business firms follow:", o: ["Different techniques of costing", "Uniform costing", "Different methods of costing", "None of the above"], c: "Different methods of costing" },
            { q: "In case product produced or jobs undertaken are of diverse system, the system of costing to be used should be:", o: ["Operating Costing", "Process Costing", "Job Costing", "None of the above"], c: "Job Costing" },
            { q: "Job Costing is:", o: ["Suitable where similar products are produced on mass scale", "Methods of costing used for non-standard and non-repetitive products", "Technique of costing", "Applicable to all industries regardless of the products or services provided"], c: "Methods of costing used for non-standard and non-repetitive products" },
            { q: "Batch costing is a type of:", o: ["Direct Costing", "Process Costing", "job Costing", "Differential Costing"], c: "job Costing" },
            { q: "Batch costing is similar to that under job costing except with the difference that:", o: ["Process becomes a cost unit", "Job becomes a cost unit", "Batch become the cost unit instead of a job", "None of the above"], c: "Batch become the cost unit instead of a job" },
            { q: "Economic batch quantity is that size of the batch of production where:", o: ["Carrying cost is minimum", "Set-up cost of machine is minimum", "Average cost is minimum", "Both A. and B."], c: "Both A. and B" }
        ]
    },
    {
        setName: "Set 15",
        questions: [
            { q: "Which of the following documents are used in job costing to record the issue of direct materials to a job?", o: ["Purchase order", "Purchase requisition", "Goods received note", "Material requisition"], c: "Material requisition" },
            { q: "Which of the following statements is true?", o: ["Batch costing is a variant of jobs costing", "Job cost sheet may be used for estimating profit of jobs", "Job costing cannot be used in conjunction with marginal costing", "In cost plus contracts, the contractor runs a risk of incurring a loss"], c: "Job cost sheet may be used for estimating profit of jobs" },
            { q: "Which of the statement is true?", o: ["Job costing can be suitably used for concerns producing any specific product uniformly", "Job costing cannot be used in companies applying standard costing", "Job cost sheet may be prepared to facilitate routing and scheduling of the job", "Neither A, nor B, nor C"], c: "Neither A, nor B, nor C" },
            { q: "The type of process loss that should not be allowed to affect the cost of good units is called:", o: ["Standard Loss", "Normal Loss", "Abnormal Loss", "Seasonal Loss"], c: "Abnormal Loss" },
            { q: "Spoilage that occurs under inefficient operating conditions and is generally controllable is called", o: ["Normal defectives", "Abnormal spoilage", "Normal spoilage", "None of the above"], c: "Abnormal spoilage" },
            { q: "In which of the following situations an abnormal gain in a process occurs:", o: ["When normal loss is equal to actual loss", "When the actual output is greater than the planned output", "When actual loss is more than the expected", "When actual loss is less than the expected loss"], c: "When the actual output is greater than the planned output" },
            { q: "The value of abnormal loss is equal to:", o: ["Total cost of materials", "Total process cost less cost of scrap", "Total process cost less realisable value of normal loss less value of transferred out goods", "Total process cost less realisable value of normal loss"], c: "Total process cost less realisable value of normal loss" },
            { q: "A process account is debited by abnormal gain, the value is determined as:", o: ["Equal to the value of good units less closing stock", "Equal to the value of normal loss", "Cost of good units less realisable value of normal loss", "Cost of good unit less realisable value of actual loss"], c: "Cost of good units less realisable value of normal loss" },
            { q: "In sugar manufacturing industry molasses is also produced along with sugar. Molasses may be of small value as compared with the value of sugar and is known as:", o: ["Joint product", "Common product", "By-product", "None of them"], c: "By-product" },
            { q: "Method of apportioning joint costs on the basis of output of each joint product at the point of split-offs is known as:", o: ["Physical unit method", "Sales value method", "Average cost method", "Marginal cost and contribution method"], c: "Physical unit method" },
            { q: "The main purposes of accounting of joint products and by-products is to:", o: ["Determine the replacement cost", "Determine the opportunity cost", "Determine profit or loss on each product line", "None of the above"], c: "Determine profit or loss on each product line" },
            { q: "Under net realisable value method of apportioning joint costs to joint products, the selling & distribution cost is:", o: ["Ignored", "Deducted from sales value", "Deducted from further processing cost", "Added to joint cost"], c: "Deducted from sales value" },
            { q: "Which of the following is an example of by-product:", o: ["Mustard seeds and mustard oil", "Diesel and Petrol in an oil refinery", "Edible oils and oil cakes", "Curd and butter in a diary"], c: "Edible oils and oil cakes" },
            { q: "Which of following methods can be used when the joint products are of unequal quantity and used for captive consumption:", o: ["Physical units method", "Net realisable value method", "Technical estimates, using market value of similar goods", "Market value at spit-off method"], c: "Technical estimates, using market value of similar goods" },
            { q: "Cost of a particular service under operating costing is ascertained by preparing:", o: ["Cost sheet", "Process account", "Job cost sheet", "Production account"], c: "Job cost sheet" }
        ]
    },
    {
        setName: "Set 16",
        questions: [
            { q: "Operating costing is applicable to:", o: ["Hospitals", "Cinemas", "Transport undertaking", "All of the above"], c: "All of the above" },
            { q: "Composite cost unit for a hospital is:", o: ["Per day", "Per bed", "Per patient day", "Per patient"], c: "Per patient day" },
            { q: "Cost units used in power sector is called:", o: ["Number of hours", "Number of electric points", "Kilowatt-hour (KWH)", "Kilo meter (K.Μ.)"], c: "Kilowatt-hour (KWH)" },
            { q: "Absolute Tonne-Km is an example of:", o: ["Composite unit for bus operation", "Composite unit of transport sector", "Composite unit for oil and natural gas", "Composite unit in power sector"], c: "Composite unit of transport sector" },
            { q: "In process costing, a joint product is", o: ["a product which is later divided into many parts", "a product which is produced simultaneously with other products and is of similar value to at least one of the other products.", "A product which is produced simultaneously with other products but which is of a greater value than any of the other products.", "a product produced jointly with another organization"], c: "a product which is produced simultaneously with other products and is of similar value to at least one of the other products.." },
            { q: "Process B units: 13,500 units in (Rs. 4.50). Add Mat Rs. 1.25. Labour/OH Rs. 6.25 completed, Rs. 2.50 incomplete. 11,750 completed out. Closing inventory?", o: ["Rs. 6562.50", "Rs. 12,250.00", "Rs. 14,437.50", "Rs. 25,375.00"], c: "Rs. 14,437.50" },
            { q: "Process J: Input 3,500Kg (Rs. 20), Labour 2,750 hrs (Rs. 25). Normal loss 20% (scrap Rs. 5). Output 2,950 Kg. Output value?", o: ["Rs. 142,485", "Rs. 146,183", "Rs. 149,746", "Rs. 152,986"], c: "Rs. 142.485" },
            { q: "In process costing, if an abnormal loss arises, the process account is generally", o: ["Debited with the scrap value", "Debited with full production cost", "Credited with the scrap value", "Credited with the full production cost"], c: "Credited with the full production cost of the abnormal loss units" },
            { q: "Which are correct? (1) Mat req note for specific job, (2) Job cost has actual mat/lab/OH + non-prod OH %, (3) Job costing in batches.", o: ["(1) only", "(1) and (2) only", "(1) and (3) only", "(2) and (3) only"], c: "(1) and (3) only" },
            { q: "Job budget: 3,300 productive hours after 25% idle time. Total cost Rs. 36,300. Labour cost per hour?", o: ["Rs. 8.25", "Rs. 8.80", "Rs. 11.00", "Rs. 14.67"], c: "Rs. 8.25" },
            { q: "Job sold for Rs. 1690, OH Rs. 694, Profit 30% of total costs. Prime cost?", o: ["Rs. 489", "Rs. 606", "Rs. 996", "Rs. 1300"], c: "Rs. 606" },
            { q: "Service costing characteristics: (1) High indirect cost prop, (2) Composite cost units, (3) Equivalent units.", o: ["(1) only", "(1) and (2) only", "(2) only", "(2) and (3) only"], c: "(1) and (2) only" },
            { q: "Which organisation should not be advised to use service costing?", o: ["Distribution service", "Hospital", "Maintenance division of factory", "A light engineering company"], c: "Maintenance division of a manufacturing company" },
            { q: "Joint products A, B, C total 60,000kg. A produces 30,000kg. Total Joint Costs Rs. 3,60,000. Costs allocated to A (Physical Quantity):", o: ["Rs. 1,20,000", "Rs. 60,000", "Rs. 1,80,000", "None of the these"], c: "Rs. 1,80,000" },
            { q: "5 buses, 50km apart, capacity 50, carry 75%, all days, 1 round trip per day. Passenger kms:", o: ["2,81,250", "1,87,500", "5,62,500", "None of the above"], c: "5,62,500" }
        ]
    },
    {
        setName: "Set 17",
        questions: [
            { q: "The cost of a product under marginal costing system includes:", o: ["Prime cost plus variable overhead", "Prime cost plus fixed overhead", "Prime cost plus factory overhead", "Only prime cost"], c: "Prime cost plus variable overhead" },
            { q: "The difference between absorption costing and marginal costing is in regard to the treatment of:", o: ["Direct materials", "Fixed overhead", "Prime cost", "Variable overhead"], c: "Fixed overhead" },
            { q: "Fixed costs are treated as:", o: ["Overhead costs", "Prime costs", "Period costs", "Conversion costs."], c: "Period costs" },
            { q: "When sales and production (in units) are same then profits under:", o: ["Marginal costing is lower", "Marginal costing is higher", "Marginal costing is equal", "None of the above"], c: "Marginal costing is equal to that of absorption costing" },
            { q: "When sales exceeds production (in units) then profit under:", o: ["Marginal costing is higher", "Marginal costing is equal", "Marginal costing is lower", "None of the above"], c: "Marginal costing is higher than that of absorption costing" },
            { q: "which of the following factors responsible for change in the break even point?", o: ["change in selling price", "change in variable cost", "change in fixed cost", "all of the above"], c: "all of the above" },
            { q: "Variable cost-", o: ["Remains fixed in total", "Remains fixed per unit", "Varies per unit", "Nor increase or decrease"], c: "Remains fixed per unit" },
            { q: "Marginal Costing technique follows the following basic of classification:", o: ["Element wise", "Function Wise", "Behaviour wise", "Identifiability wise"], c: "Behaviour wise" },
            { q: "P/V ratio will increase if the:", o: ["decrease in fixed cost", "increase in fixed cost", "decrease in selling price", "decrease in variable cost per unit."], c: "There is a decrease in variable cost per unit." },
            { q: "The technique of differential cost is adopted when:", o: ["To ascertain P/V ratio", "To ascertain marginal cost", "To ascertain cost per unit", "To make choice between two or more alternative courses of action"], c: "To make choice between two or more alternative courses of action" },
            { q: "Which of the following would not be used to estimate standard direct material prices?", o: ["bulk purchase discounts", "Purchase contracts agreed", "forecast movement of prices", "Performance standards in operation"], c: "Performance standards in operation" },
            { q: "What is an attainable standard?", o: ["level under perfect operating conditions", "level under efficient operating conditions", "based on currently attainable conditions", "standard kept unchanged for trend"], c: "A standard which includes some allowance for losses, waste and inefficiencies. It represents the level of performance which is attainable under efficient operating conditions" },
            { q: "Budgets are shown in-Terms:", o: ["Qualitative", "Quantitative", "Materialistic", "both (b) and (c)"], c: "both (b) and (c)" },
            { q: "Which of the following is not an element of master budget?", o: ["Capital Expenditure Budget", "Production Schedule", "Operating Expenses Budget", "All above the above"], c: "Production Schedule" },
            { q: "Which of the following is not a potential benefit of using a budget?", o: ["Enhanced coordination", "More motivated managers", "Improved communication", "More accurate external financial statements"], c: "More accurate external financial statements" }
        ]
    },
    {
        setName: "Set 18",
        questions: [
            { q: "Which of the following is a long-term budget?", o: ["Master Budget", "Flexible Budget", "Cash Budget", "Capital Budget"], c: "Capital Budget" },
            { q: "Materials become key factor, if", o: ["quota restrictions exist", "insufficient advertisement", "low demand", "no problem with supplies"], c: "quota restrictions exist" },
            { q: "The difference between fixed cost and variable cost assumes significance in the preparation of the following budget:", o: ["Master Budget", "Flexible Budget", "Cash Budget", "Capital Budget"], c: "Flexible Budget" },
            { q: "The budget that is prepared first of all is", o: ["Master budget", "Sales budget assuming key factor", "Cash Budget", "Capital expenditure budget"], c: "Sales budget assuming that it is the key factor" },
            { q: "Sales budget is a", o: ["expenditure budget", "functional budget", "master budget", "None of these"], c: "functional budget" },
            { q: "Estimated costs directly derived from estimates of activity levels results in which budget?", o: ["Flexible budget", "Fixed budget", "Master budget", "R & D budget"], c: "Flexible budget" },
            { q: "Which of the following budgets facilitates classification of fixed and variable costs:", o: ["Capital expenditure budget", "Flexible budget", "Cash budget", "Raw materials budget"], c: "Flexible budget" },
            { q: "The entire budget organisation is controlled and headed by a senior executive known as:", o: ["General Manager", "Accountant", "Budget Controller", "None of the above"], c: "Budget Controller" },
            { q: "A flexible budget requires a careful study of", o: ["Fixed, semi-fixed and variable expenses", "Past and current expenses", "Overheads, selling and administrative expenses", "None of these."], c: "Fixed, semi-fixed and variable expenses" },
            { q: "The basic difference between a fixed budget and flexible budget is that a fixed budget", o: ["concerned with single level of activity", "concerned with fixed costs", "is fixed while flexible changes", "None of these"], c: "is concerned with a single level of activity, while flexible budget is prepared for different levels of activity" },
            { q: "Which of the following is not a reason for an idle time variance?", o: ["Wage rate increase", "Machine breakdown", "Illness or injury to worker", "Non- availability of material"], c: "Wage rate increase" },
            { q: "300 labour hours cost Rs. 4800. Variable OH expenditure variance Rs. 600 (A). Standard cost per labour hour?", o: ["Rs. 14", "Rs. 16.50", "Rs. 17.50", "Rs. 18"], c: "Rs. 14" },
            { q: "Which would explain adverse variable production overhead efficiency variance? (1) Lower skill, (2) Machine breakdown idle time, (3) Poor material.", o: ["(1), (2) and (3)", "(1) and (2)", "(2) and (3)", "(1) and (3)"], c: "(1) and (3)" },
            { q: "Sales 18,000. 10% scrap. Opening 15,000, closing 11,400. Production budget in units:", o: ["12960", "14400", "15840", "16000"], c: "16000" },
            { q: "200 units. Each unit 6 hours. 20% idle time anticipated. Paid Rs. 7/hr. Labour cost budget:", o: ["Rs. 6,720", "Rs. 8,400", "Rs. 10.080", "Rs. 10,500"], c: "Rs. 10,500" }
        ]
    },
    {
        setName: "Set 19",
        questions: [
            { q: "Which item would not be included in the cash budget?", o: ["Capital cost of vehicle", "Depreciation of machinery", "Operatives wages", "Fuel for vehicles"], c: "Depreciation of the machinery" },
            { q: "Output 162,500. Actual fixed costs Rs. 87000. Actual exp Rs. 300,000 was Rs. 18,000 over budget. Budget variable cost per unit?", o: ["Rs. 1.20", "Rs. 1.31", "Rs. 1.42", "Rs. 1.50"], c: "Rs. 1.20" },
            { q: "Budget order sequence: (1) Sales, (2) Cash, (3) Production, (4) Purchase, (5) FG inventory.", o: ["(2), (3), (4), (5), (1)", "(1), (5), (3), (4), (2)", "(1), (4), (5), (3), (2)", "(4), (5), (3), (1), (2)"], c: "(1), (5), (3), (4), (2)" },
            { q: "SP Rs. 28, VC Rs. 16, FC Rs. 4 (at 25k units). SP and VC increase by 10% and 8%. Sales volume change to achieve original profit?", o: ["10.1% decrease", "11.2% decrease", "13.3% decrease", "16.0% decrease"], c: "11.2% decrease" },
            { q: "FC Rs. 30,000. VC Rs. 5, SP Rs. 15. Demand 7,000 units. Breakeven point:", o: ["2,000 units", "3,000 units", "4,000 units", "6,000 units"], c: "3,000 units" },
            { q: "SP Rs. 12, VC Rs. 8, FC Rs. 98,000. Budgeted sales 30,000 units. Margin of safety %:", o: ["20%", "25%", "72%", "125%"], c: "18.33% (Closest 20% by Key)" }, // Key says 1
            { q: "BEP 6,000 units. SP Rs. 90, VC Rs. 40. Annual fixed costs?", o: ["Rs. 120", "Rs. 2,40,000", "Rs. 3,00,000", "Rs. 5,40,000"], c: "Rs. 3,00,000" },
            { q: "Supplier P Rs. 2.20/unit, Q Rs. 2.10/unit + Rs. 2,000 fixed. Quantity for same price:", o: ["22,000 units", "20,000 units", "21,000 units", "None of the above."], c: "20.000 units" },
            { q: "Cost Rs. 160 (75% variable) at 10k units. At 12,500 units, cost per unit is:", o: ["Rs. 145", "Rs. 150", "Rs. 152", "Rs. 140"], c: "Rs. 152" },
            { q: "In 'make or buy' decision, buy if supplier price is below:", o: ["Fixed Cost", "Variable Cost", "Total Cost", "Prime Cost"], c: "Variable Cost" },
            { q: "Budget prepared to give cost for any level of activity is:", o: ["Master budget", "Zero base budget", "Functional budget", "Flexible budget"], c: "Flexible budget" },
            { q: "is a summary of all functional budgets in a capsule form.", o: ["Functional Budget", "Master Budget", "Long Period Budget", "Flexible Budget"], c: "Master Budget" },
            { q: "is a detailed budget of cash receipts and cash expenditure incorporating revenue and capital.", o: ["Cash Budget", "Capital Expenditure Budget", "Sales Budget", "Overhead Budget"], c: "Cash Budget" },
            { q: "FC Rs. 5,00,000, VC Rs. 10, SP Rs. 15, Output 1,50,000. Profit earned (marginal costing)?", o: ["Rs. 2,50,000", "Rs. 10,00,000", "Rs. 5,00,000", "Rs. 17,50,000"], c: "Rs. 2,50,000" },
            { q: "P/V ratio 50%, Margin of safety 40%. Sales Rs. 30,00,000. BEP in Rs. is:", o: ["Rs. 9,00,000", "Rs. 18,00,000", "Rs. 5,00,000", "None of the above"], c: "Rs. 18,00,000" }
        ]
    },
    {
        setName: "Set 20",
        questions: [
            { q: "4,000 in process, 3,800 output, 10% normal wastage (Rs. 2.50 scrap). Cost Rs. 46,000. Abnormal gain to P&L:", o: ["Rs. 2,500", "Rs. 2.000", "Rs. 4,000", "Rs. 3.500"], c: "Rs. 2,500" },
            { q: "In element-wise classification of overheads, which is not included:", o: ["Fixed overheads", "Indirect labour", "Indirect materials", "Indirect expenditure."], c: "Fixed overheads" },
            { q: "Sales increase Rs. 40k to 60k, profit increases Rs. 5k. P/V ratio:", o: ["20%", "30%", "25%", "40%"], c: "25%" },
            { q: "In ABC, accumulated activity amounts are called -", o: ["Cost drivers", "Cost objects", "Cost pools", "Cost Benefits Analysis"], c: "Cost pools" },
            { q: "Steps in ABC include:", o: ["Identification of activities", "Identification of cost drivers", "Allocation of overhead to products", "all of the above"], c: "all of the above" },
            { q: "Which is not a benefit of ABC?", o: ["Accurate cost allocation", "Improved decision making", "Better control on activity", "reduction of prime cost"], c: "reduction of prime cost" },
            { q: "The key elements of Activity Based Budgeting are-", o: ["Type of Activity", "Quantity of activity", "Cost of activity", "all of the above"], c: "all of the above" },
            { q: "The primary objective of Cost Accounting is to:", o: ["Prepare financial statements", "Determine economic stability", "Ascertain cost of products", "Audit financial records"], c: "Ascertain the cost of products and services" },
            { q: "Difference between cost control and cost reduction:", o: ["Control is preventive, reduction is corrective", "Control is corrective, reduction is preventive", "Both identical", "Control focuses on sales"], c: "Cost control is preventive; cost reduction is corrective" },
            { q: "In manufacturing, normal loss is treated as:", o: ["Abnormal cost", "Charged to specific job", "Included in cost of good output", "Ignored"], c: "Included in the cost of good output" },
            { q: "When preparing cost sheet, excluded from prime cost:", o: ["Direct materials", "Direct labour", "Direct expenses", "Factory overheads"], c: "Factory overheads" },
            { q: "Which is NOT considered in marginal costing?", o: ["Variable cost", "Fixed cost", "Direct material cost", "Direct labor cost"], c: "Fixed cost" },
            { q: "The purpose of CAS is to:", o: ["Ensure uniform cost practices", "Reduce financial fraud", "Set global accounting standards", "Determine tax liability"], c: "Ensure uniform cost accounting practices" },
            { q: "CAS-18 deals with:", o: ["Transport Cost", "Research and Development Cost", "Sales Promotion Cost", "Packing Cost"], c: "Research and Development Cost" },
            { q: "Cost Accounting Records include:", o: ["Cost ledgers only", "Job sheets, ledgers, memorandum", "Cost sheet only", "Budget reports only"], c: "Job cost sheets, cost ledgers, cost memorandum" }
        ]
    },
    {
        setName: "Set 21",
        questions: [
            { q: "Which is not covered under CAS-1 Classification of Cost?", o: ["Cost by nature", "Cost by behavior", "Cost by traceability", "Cost by ownership"], c: "Cost by ownership" },
            { q: "Joint costs incurred before separation point are dealt under:", o: ["CAS-19", "CAS-22", "CAS-6", "CAS-9"], c: "CAS-19" },
            { q: "Material ₹1,00,000, Freight 25,000, handling ₹2,000. CAS-6 material cost is:", o: ["₹1,00,000", "₹1,05,000", "1,07,000", "1,02,000"], c: "1,07,000" },
            { q: "Which is a direct material cost as per CAS-6?", o: ["Wages of procurement staff", "Freight paid for raw materials", "Insurance of factory", "Depreciation on trucks"], c: "Freight paid for raw materials" },
            { q: "Which should NOT be included in Employee Cost (CAS-7)?", o: ["Salary & wages", "Retirement benefits", "Travel reimbursement", "Dividend paid as shareholders"], c: "Dividend paid to employees as shareholders" },
            { q: "5,000 units. Ordering cost 200. Carrying cost 25. EOQ is:", o: ["100 units", "1,000 units", "2,000 units", "632 units"], c: "632 units" },
            { q: "Min stock 500, lead time 10 days, usage 100/day. Reorder level:", o: ["1,500 units", "500 units", "1,000 units", "2,000 units"], c: "1.500 units" },
            { q: "Inventory has slow moving material not used for year, what to do?", o: ["Keep at cost", "Mark down to NRV or write off", "Transfer to scrap", "Treat as non-current asset"], c: "Mark down to NRV or write off partly" },
            { q: "In inventory control, 'Danger level' indicates:", o: ["Level where storage costs shoot up", "Level below which emergency purchase needed", "Level to trigger regular orders", "Level equal to min + reorder"], c: "Stock level below which emergency purchase is needed" },
            { q: "Sequence of levels from highest to lowest:", o: ["Danger > ROL > Max", "Max > ROL > Min", "ROL > Max > Danger", "Safety > Max > ROL"], c: "Maximum level > Re-order level > Minimum level" },
            { q: "ROL 1,500; ROQ 1,200; Min usage 80; Max usage 120; Lead time 10-15 days. Max Level is:", o: ["2,100 units", "3,900 units", "1,900 units", "3,000 units"], c: "1,900 units." },
            { q: "Which is NOT a part of employee cost?", o: ["Wages", "Bonus", "Interest on capital", "Provident fund"], c: "Interest on capital" },
            { q: "Std 10h, actual 8h, rate 250/h. Bonus under Halsey:", o: ["50", "75", "100", "125"], c: "₹50" },
            { q: "1,200 start, 1,400 end. 50 left, 30 discharged, 100 recruited (40 replacements). Separation Ratio:", o: ["6.15%", "7.14%", "6.25%", "8%"], c: "6.15%" },
            { q: "Rowan Plan: Std 20h, Taken 16h, Rate ₹50/h. Total earnings:", o: ["850", "1,050", "950", "960"], c: "960" }
        ]
    },
    {
        setName: "Set 22",
        questions: [
            { q: "Which plan shares wages based on time saved, with fixed percentage to worker?", o: ["Halsey Plan", "Rowan Plan", "Taylor Plan", "Gantt Plan"], c: "Halsey Plan" },
            { q: "In Rowan Plan, the bonus is calculated based on:", o: ["Proportion of time saved to standard time", "Fixed percentage of wages", "Total output produced", "Total hours worked"], c: "Proportion of time saved to standard time" },
            { q: "If direct expense is abnormally high due to emergency, how is it treated?", o: ["Charged to COGS", "Included in direct expenses", "Ignored", "Transferred to Costing P&L"], c: "Transferred to Costing Profit & Loss A/c" },
            { q: "Fee of 25,000 to use patented method for a single job is:", o: ["Indirect Expense", "General overhead", "Direct Expense", "Capitalized"], c: "Direct Expense" },
            { q: "Budget OH 1,50,000. Budget hours 30k; Actual hours 28k; Actual OH 1,35,000. OH was:", o: ["Over-absorbed 10k", "Under-absorbed 25k", "Over-absorbed 5k", "Under-absorbed 10k"], c: "Over-absorbed by ₹5,000" },
            { q: "Dept A (60/hr), Dept B (50/hr). Actual OH: A 3L, B 2.5L. Actual hours: A 4,500, B 4,800. Total absorption status:", o: ["Under-absorbed 40k", "Over-absorbed 20k", "Under-absorbed 10k", "Over-absorbed 10k"], c: "Under-absorbed by ₹40,000" },
            { q: "Most appropriate base for OH in labour-intensive industry:", o: ["Machine hours", "Direct material cost", "Direct labour hours", "Units produced"], c: "Direct labour hours" },
            { q: "Appropriate basis for apportioning canteen expenses:", o: ["Floor area", "Number of employees", "Machine hours", "Value of output"], c: "Number of employees" },
            { q: "In non-integral costing system, which is true?", o: ["No financial books", "Books merged", "Separate books + reconciliation", "CLCA not required"], c: "Separate cost books are maintained, and reconciliation is done with financial books" },
            { q: "TRUE about reconciliation between cost and financial accounts:", o: ["Only timing adjusted", "Only valuation adjusted", "Both adjusted", "No adjustments if integral"], c: "Both timing and valuation differences are adjusted" },
            { q: "Under absorption of overhead means:", o: ["Actual > Absorbed", "Actual < Absorbed", "Equal", "No effect on profit"], c: "Actual overhead > Absorbed overhead" },
            { q: "The purpose of preparing a cost reconciliation statement is to:", o: ["Find errors", "Adjust financial to costing", "Show difference and explain it", "Omit abnormal items"], c: "Show the difference between financial profit and costing profit and explain it" },
            { q: "Cost dep 10% on 2L, financial dep 15%. Difference in profit:", o: ["10k higher in cost", "10k lower in cost", "20k higher in financial", "No difference"], c: "₹10,000 higher in cost accounts" },
            { q: "Cost closing stock 80k, financial 90k. Cost profit 1L, financial profit is:", o: ["1,10,000", "90,000", "1,20,000", "80,000"], c: "₹1,10,000" },
            { q: "Margin of safety represents:", o: ["Fixed costs", "Diff between actual and BEP sales", "Variable costs", "Profit margin"], c: "The difference between actual sales and break-even sales" }
        ]
    },
    {
        setName: "Set 23",
        questions: [
            { q: "Sales 5L, COGS 3.6L, S&D overheads 40k. Find profit.", o: ["1,00,000", "1,20,000", "90,000", "80,000"], c: "₹1,00,000" },
            { q: "The Cost Ledger Control Account (CLCA) is used to:", o: ["Record cost entries only", "Reconcile cost ledger with financial", "Replace general ledger", "Record revenue"], c: "Reconcile cost ledger with the financial ledger" },
            { q: "In cost accounts, idle time compensation is usually:", o: ["Included in direct labour", "Charged to production cost", "Treated as overhead", "Omitted"], c: "Treated as overhead" },
            { q: "Job costing is most suitable for:", o: ["Cement", "Oil refining", "Construction of bridges", "Chemical industry"], c: "Construction of bridges" },
            { q: "Job #251: Mat ₹50,000 Lab ₹30,000. OH absorbed at 80% of labour. Cost of Job is:", o: ["74,000", "80,000", "1,04,000", "96,000"], c: "1,04,000" },
            { q: "In job costing, indirect costs are charged using:", o: ["Direct allocation", "Overhead absorption rate", "Actual expenditure", "Historical cost"], c: "Overhead absorption rate" },
            { q: "Job cost sheet is primarily prepared for:", o: ["Recording only OH", "Ascertaining cost of a specific job", "Financial reporting", "Cost control"], c: "Ascertaining cost of a specific job" },
            { q: "Which is NOT a feature of job costing?", o: ["Costs by jobs", "Distinct identity", "Mass production homogeneous units", "Job cost sheet"], c: "Mass production of homogeneous units" },
            { q: "In job costing, each job is treated as:", o: ["A separate cost unit", "A process account", "A service department", "A factory unit"], c: "A separate cost unit" },
            { q: "Batch costing is most suitable for:", o: ["Ship building", "Oil refinery", "Bridge construction", "Pharmaceutical industry"], c: "Pharmaceutical industry" },
            { q: "Batch: 2,000h @ Rs. 250/h. Mat ₹60,000. OH Rs. 200/h. Batch size 1,000 units. Cost per unit?", o: ["560", "280", "310", "250"], c: "₹560" },
            { q: "Batch: Mat 18,000, Lab Rs. 12,000. OH 50% of Prime Cost. Batch 600 units. Cost per unit?", o: ["70", "80", "75", "85"], c: "75" },
            { q: "Total cost per unit decreases as batch size increases due to:", o: ["Decrease in material cost", "Decrease in lab rate", "Decrease in set-up cost per unit", "Decrease in selling cost"], c: "Decrease in set-up cost per unit" },
            { q: "Batch costing is a variant of:", o: ["Job Costing", "Process Costing", "Contract Costing", "Operating Costing"], c: "Job Costing" },
            { q: "In batch costing, abnormal loss is:", o: ["Added to cost", "Excluded from cost", "Transferred to costing P&L", "Charged to next batch"], c: "Transferred to costing P&L" }
        ]
    },
    {
        setName: "Set 24",
        questions: [
            { q: "Cost to date 2,00,000, Work certified 2,50,000, Work uncertified 20,000. Notional profit?", o: ["70,000", "50,000", "80,000", "30,000"], c: "70,000" },
            { q: "Which cost is not normally debited to the Contract Account?", o: ["Direct wages", "Depreciation of site plant", "Architects fees", "Interest on capital of contractor"], c: "Interest on capital of contractor" },
            { q: "Clause providing price increase if costs rise is:", o: ["Price variation clause", "Escalation clause", "Cost plus clause", "Contingency clause"], c: "Escalation clause" },
            { q: "VC 40%, FC 6,000. BEP sales:", o: ["15,000", "10,000", "14,000", "2,400"], c: "₹ 10,000" },
            { q: "When is 2/3 of notional profit transferred to P&L?", o: ["Completion > 50%", "Completion < 50%", "Always", "Never"], c: "Completion > 50%" },
            { q: "Cost to date 3,00,000, Est to complete 1,00,000, Contract price 5,00,000. Est profit?", o: ["50,000", "1,50,000", "2,00,000", "1,00,000"], c: "1,00,000" },
            { q: "Which is not a feature of process costing?", o: ["Continuous production", "Separate costing for each unit", "Standardized operations", "Accumulation of costs by process"], c: "Separate costing for each unit" },
            { q: "Proc I transfers 5,000 units. Proc II loses 2% normal. Good output expected?", o: ["4,900 units", "4,400 units", "5,900 units", "8,300 units"], c: "4,900 units" },
            { q: "Processes 5,000 units. Normal 10%. Actual output 4,300. Abnormal loss units?", o: ["500", "700", "200", "300"], c: "200" },
            { q: "Normal loss is expected and is:", o: ["Charged to costing P&L", "Ignored", "Spread over good units", "Added to abnormal"], c: "Spread over good units" },
            { q: "Abnormal loss units are valued at:", o: ["Cost per equivalent unit", "Scrap value", "Zero", "Sales price"], c: "Cost per equivalent unit" },
            { q: "Process costing is used in:", o: ["Construction", "Hospitals", "Sugar industry", "Automobile"], c: "Sugar industry" },
            { q: "Bus 80km (40 pass), return 60km (20 pass). Total passenger-km:", o: ["4,400", "3,200", "2,000", "5,600"], c: "4,400" },
            { q: "Hotel 40 rooms, 75% occ. Cost 12,00,000. Cost per room-day?", o: ["1,000", "1,200", "1,333", "1,100"], c: "1,333" },
            { q: "Truck 100km daily, 5-tonne out, empty return. 25 days. Total tonne-km:", o: ["5,000", "12,500", "25,000", "15,000"], c: "12,500" }
        ]
    },
    {
        setName: "Set 25",
        questions: [
            { q: "Operating costing is most suitable for:", o: ["Construction", "Transport companies", "Manufacturing", "Auditing"], c: "Transport companies" },
            { q: "Characteristic of operating costing:", o: ["Applied to goods", "Used for uniform services", "One-time contracts", "No overheads"], c: "Used for uniform services" },
            { q: "Not a component of operating cost for transport:", o: ["Diesel cost", "Driver's salary", "Factory rent", "Depreciation"], c: "Factory rent" },
            { q: "Composite cost units are used when:", o: ["One service offered", "Metric is one", "Multiple elements affect service", "Costing not needed"], c: "Multiple elements affect service" },
            { q: "In marginal costing, fixed costs are treated as:", o: ["Product cost", "Partially variable", "Period cost", "Avoidable cost"], c: "Period cost" },
            { q: "If selling price per unit increases, BEP will:", o: ["Increase", "Decrease", "Unchanged", "Cannot say"], c: "Decrease" },
            { q: "When marginal cost and average cost are equal:", o: ["Avg increasing", "Avg decreasing", "Avg constant", "Fixed zero"], c: "Average cost is constant" },
            { q: "P/V Ratio improves when:", o: ["VC increases", "FC increases", "SP decreases", "VC decreases"], c: "Variable cost decreases" },
            { q: "SP Rs. 50, VC Rs. 30, FC Rs. 40,000. BEP sales units:", o: ["2,000", "1,333", "1,500", "800"], c: "2,000" },
            { q: "Sales increase Rs. 25,000, P/V 40%. Profit increase?", o: ["10,000", "15,000", "5,000", "12,500"], c: "10,000" },
            { q: "Margin of safety Rs. 1,20,000; P/V 30%. Profit?", o: ["36,000", "40,000", "24,000", "30,000"], c: "36,000" },
            { q: "SP 100, VC 60, FC 1,60,000. Desired Profit 40k. Required sales?", o: ["4L", "5L", "6L", "3L"], c: "₹5,00,000" },
            { q: "Capacity 60% to 80%, FC same. BEP will:", o: ["Increase", "Decrease", "Remain unchanged", "Become irrelevant"], c: "Remain unchanged" },
            { q: "Sales 1,00,000, VC 60,000, FC 40,000. P/V ratio:", o: ["60%", "40%", "50%", "30%"], c: "40%" },
            { q: "Which is NOT a component of material cost variance?", o: ["Price variance", "Usage variance", "Mix variance", "Production variance"], c: "Material production variance" }
        ]
    },
    {
        setName: "Set 26",
        questions: [
            { q: "Actual usage 2,100kg, std 2,000kg, SP Rs. 25. Usage variance:", o: ["2,500 (A)", "2,500 (F)", "1,500 (A)", "1,500 (F)"], c: "₹2,500 (A)" },
            { q: "Paying higher wage rate leads to:", o: ["Efficiency variance", "Rate variance", "Idle time variance", "Mix variance"], c: "Labour rate variance" },
            { q: "Std price 20, Std Q 500, actual Q 520, actual price 22. MCV:", o: ["1,000 (A)", "1,000 (F)", "1,440 (A)", "1,040 (F)"], c: "1,440 (A)" },
            { q: "Std mix: A=60%, B=40% of 1,000kg. Std prices: A 10, B 5. Actual: A 550, B 450. Mix Variance:", o: ["250 (F)", "250 (A)", "200 (F)", "200 (A)"], c: "2250(F)" }, // Matched Key code 1
            { q: "Std rate 50/h, Std time 1,000h, actual rate 52/h, actual time 1,050h. LCV:", o: ["4,600 (A)", "2,000 (F)", "1,500 (A)", "1,500 (F)"], c: "4,600 (A)" },
            { q: "Std rate 55/h, actual rate 60/h, actual hours 900. LRV:", o: ["4,500 (A)", "4,500 (F)", "5,000 (A)", "5,000 (F)"], c: "₹4,500 (A)" },
            { q: "Budget Output 1,000, Std OH Rate 8/unit, actual Output 950, actual OH 7,800. OH Cost Variance:", o: ["200 (F)", "200 (A)", "400 (A)", "400 (F)"], c: "200 (A)" },
            { q: "Master budget usually comprises:", o: ["Sales only", "Production schedule", "All functional budgets + financial statements", "Cash budget"], c: "All functional budgets + budgeted financial statements" },
            { q: "Flexible budget is useful when:", o: ["Activity fixed", "Actual output differs from budget level", "All costs fixed", "No variance exists"], c: "Actual output differs from the level assumed in the budget" },
            { q: "A static budget is one which:", o: ["Changes with output", "Remains unchanged", "Too flexible", "Govt only"], c: "Remains unchanged despite output changes" },
            { q: "Flexible budget 12,000 units: VC Rs. 5/unit, FC 20k. Actual VC 63k, actual FC 22k. Total cost variance:", o: ["5,000 (A)", "25,000 (F)", "3,000 (A)", "22,000 (A)"], c: "₹5,000 (A)" },
            { q: "Zero-base budgeting means:", o: ["Build from scratch", "Zero profit", "First year", "Zero idle capacity"], c: "Build budget from scratch" },
            { q: "Budget that adjusts to activity level & cost behaviour:", o: ["Fixed", "Flexible", "Sales", "Production"], c: "Flexible budget" },
            { q: "Planned sales 8,000, Opening stock 500, closing 1,000. Production budget:", o: ["7,000", "7,500", "8,500", "8,000"], c: "8,500 units" },
            { q: "Cash budget: Opening 5,000, Receipts 25,000, Payments 30,000. Closing balance:", o: ["0", "5,000", "10,000", "15,000"], c: "₹0" }
        ]
    },
    {
        setName: "Set 27",
        questions: [
            { q: "Budgetary slack means:", o: ["Understating revenue overstating cost", "Overstating revenue", "Estimation error", "Fraud"], c: "Understating revenue / overstating cost" },
            { q: "Standard usage 4 kg/unit. Expected production 2,000 units. Material usage budget:", o: ["8,000 kg", "6,000 kg", "10,000 kg", "12,000 kg"], c: "8,000 kg" }
        ]
    }
];