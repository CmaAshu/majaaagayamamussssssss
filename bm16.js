/**
 * Senior Data Analyst & JS Developer Extraction
 * Task: PDF to Structured JSON (JavaScript File)
 * Source: MCQBank-Paper16.pdf
 * Total Questions: 281
 */

const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "Which of the following is not a primary activity of Value Chain?", o: ["Inbound Logistics", "Operations", "Service", "Infrastructure"], c: "Infrastructure" },
            { q: "Which of the following is not a secondary activity of Value Chain?", o: ["Procurement", "Human Resource Development", "Service", "Technology Development"], c: "Service" },
            { q: "Which of the following is not a term normally used in value analysis?", o: ["Resale value", "Use value", "Esteem value", "Cost value"], c: "Resale value" },
            { q: "A company has forecast sales and cost of goods sold for the coming year as ₹ 25 lakhs and ₹ 18 lakhs respectively. The inventory turnover has been taken as 9 times per year. In case the inventory turnover increases to 12 times and the short-term interest rate on working capital is taken as 10%, what will be the saving in cost?", o: ["₹ 10,000", "₹ 20,000", "₹ 15,000", "₹ 5,000"], c: "₹ 5,000" },
            { q: "Which of the following important pillars of Strategic Cost Management determines the company's comparative position in the industry in terms of performance?", o: ["Cost Driver Analysis", "Value Chain Analysis", "Strategic Positioning Analysis", "Competitive Value Analysis"], c: "Strategic Positioning Analysis" },
            { q: "Which of the following describes the situation where there are more potential investments than funds available?", o: ["Capital Rationing", "Capital Budgeting", "Asset Management", "Portfolio Management"], c: "Capital Rationing" },
            { q: "Traditional cost management system focuses on", o: ["Internal activities", "External activities", "Both 1 and 2", "Competitive activities"], c: "Internal activities" },
            { q: "The primary objective of Value Engineering is to", o: ["Reduce cost without affecting performance", "Increase price", "Maximize production", "Reduce quality"], c: "Reduce cost without affecting performance" },
            { q: "In Value Chain Analysis, the focus is on", o: ["Total cost", "Value added at each stage", "Unit cost", "Administrative cost"], c: "Value added at each stage" },
            { q: "Value analysis is most effective when applied at the", o: ["Design stage", "Production stage", "Marketing stage", "Distribution stage"], c: "Design stage" },
            { q: "Supply Chain Management includes", o: ["Supplier management", "Inventory management", "Distribution management", "All of the above"], c: "All of the above" },
            { q: "The term 'Benchmarking' refers to", o: ["Setting standards based on internal past performance", "Comparing performance with the best in the industry", "Increasing price based on competitors", "Reducing costs randomly"], c: "Comparing performance with the best in the industry" },
            { q: "Which of the following is a cost driver in Activity Based Costing?", o: ["Direct Labor", "Number of Setups", "Factory Rent", "Total Assets"], c: "Number of Setups" },
            { q: "Lean production focuses on", o: ["Mass production", "Waste elimination", "High inventory", "Complex processes"], c: "Waste elimination" },
            { q: "JIT (Just-in-Time) is a system intended to", o: ["Increase inventory", "Eliminate waste and reduce inventory", "Maximize batch size", "Focus on buffer stocks"], c: "Eliminate waste and reduce inventory" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "The theory of constraints (TOC) focuses on", o: ["Managing bottlenecks", "Increasing overheads", "Reducing variable costs", "Maximizing labor productivity"], c: "Managing bottlenecks" },
            { q: "Throughput accounting is based on the concept of", o: ["Absorption costing", "Marginal costing", "Theory of Constraints", "Standard costing"], c: "Theory of Constraints" },
            { q: "A 'Bottleneck' activity is one where", o: ["Capacity exceeds demand", "Demand exceeds capacity", "Efficiency is highest", "Cost is lowest"], c: "Demand exceeds capacity" },
            { q: "In throughput accounting, 'Throughput' is defined as", o: ["Sales - All variable costs", "Sales - Material costs", "Sales - Conversion costs", "Sales - Overhead costs"], c: "Sales - Material costs" },
            { q: "Total Productive Maintenance (TPM) aims at", o: ["Zero defects", "Zero accidents", "Zero breakdowns", "All of the above"], c: "All of the above" },
            { q: "Life cycle costing includes", o: ["Production costs only", "Design and development costs only", "All costs from inception to abandonment", "Marketing and distribution costs only"], c: "All costs from inception to abandonment" },
            { q: "Target costing is a system of", o: ["Cost reduction during design", "Cost addition after production", "Setting prices based on cost", "Fixed markup pricing"], c: "Cost reduction during design" },
            { q: "Target Cost =", o: ["Target Selling Price - Target Profit", "Actual Cost + Target Profit", "Target Selling Price + Margin", "Standard Cost - Variance"], c: "Target Selling Price - Target Profit" },
            { q: "Kaizen costing focuses on", o: ["Continuous small improvements", "Large one-time changes", "Design changes", "Standardization only"], c: "Continuous small improvements" },
            { q: "Which of the following is a component of 'Quality Costs'?", o: ["Prevention costs", "Appraisal costs", "Failure costs", "All of the above"], c: "All of the above" },
            { q: "Prevention costs include", o: ["Inspection", "Testing", "Training and quality planning", "Repairs"], c: "Training and quality planning" },
            { q: "Appraisal costs include", o: ["Product testing and inspection", "Scrap", "Warranty claims", "Equipment maintenance"], c: "Product testing and inspection" },
            { q: "Internal failure costs occur", o: ["Before delivery to customer", "After delivery to customer", "During the design phase", "During training"], c: "Before delivery to customer" },
            { q: "External failure costs include", o: ["Scrap", "Rework", "Warranty claims and lost sales", "Process audits"], c: "Warranty claims and lost sales" },
            { q: "The concept of 'Zero Defects' was popularized by", o: ["Philip Crosby", "Edward Deming", "Joseph Juran", "Taiichi Ohno"], c: "Philip Crosby" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "In Activity Based Costing, cost pools are", o: ["Total costs of a department", "Costs related to a specific activity", "Unit costs", "Variable costs"], c: "Costs related to a specific activity" },
            { q: "Value-added activities are those which", o: ["Increase the price of the product", "Increase the customer's perceived value", "Increase the production volume", "Decrease the inventory levels"], c: "Increase the customer's perceived value" },
            { q: "Non-value-added activities include", o: ["Storage and moving", "Processing", "Design", "Packaging"], c: "Storage and moving" },
            { q: "Business Process Re-engineering (BPR) involves", o: ["Incremental change", "Radical redesign of processes", "Minor adjustments", "Standardization"], c: "Radical redesign of processes" },
            { q: "The Balanced Scorecard was developed by", o: ["Kaplan and Norton", "Porter", "Drucker", "Mintzberg"], c: "Kaplan and Norton" },
            { q: "The four perspectives of the Balanced Scorecard include", o: ["Financial, Customer, Internal Process, Learning and Growth", "Sales, Marketing, HR, Finance", "Planning, Organizing, Leading, Controlling", "Assets, Liabilities, Equity, Revenue"], c: "Financial, Customer, Internal Process, Learning and Growth" },
            { q: "Learning and Growth perspective in Balanced Scorecard focuses on", o: ["Employee skills and culture", "Return on Investment", "Cycle time", "Market share"], c: "Employee skills and culture" },
            { q: "Which of the following is a financial measure in the Balanced Scorecard?", o: ["Customer satisfaction", "Return on Capital Employed (ROCE)", "Employee turnover", "New product lead time"], c: "Return on Capital Employed (ROCE)" },
            { q: "Six Sigma aims for a defect rate of", o: ["3.4 defects per million opportunities", "10 defects per million", "1 defect per hundred", "5% defect rate"], c: "3.4 defects per million opportunities" },
            { q: "DMAIC in Six Sigma stands for", o: ["Define, Measure, Analyze, Improve, Control", "Design, Manage, Act, Integrate, Check", "Develop, Model, Apply, Inspect, Correct", "Data, Metrics, Analysis, Input, Cost"], c: "Define, Measure, Analyze, Improve, Control" },
            { q: "The 'Triple Bottom Line' focuses on", o: ["Profit, People, Planet", "Sales, Expenses, Profit", "Assets, Liabilities, Capital", "Product, Price, Promotion"], c: "Profit, People, Planet" },
            { q: "Environmental Management Accounting (EMA) helps in", o: ["Identifying environmental costs", "Improving environmental performance", "Integrating environmental data into decision making", "All of the above"], c: "All of the above" },
            { q: "The 'Learning Curve' theory suggests that", o: ["Time per unit increases as volume increases", "Time per unit decreases as cumulative production doubles", "Cost per unit is constant", "Labor efficiency decreases over time"], c: "Time per unit decreases as cumulative production doubles" },
            { q: "If the learning rate is 80% and the first unit takes 100 hours, the cumulative average time for 2 units will be", o: ["100 hours", "90 hours", "80 hours", "160 hours"], c: "80 hours" },
            { q: "The learning curve effect is most likely to be high in", o: ["Automated processes", "Labor-intensive complex tasks", "Simple repetitive tasks", "Mass production of standardized goods"], c: "Labor-intensive complex tasks" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "Transfer pricing is used for", o: ["Setting prices for external customers", "Internal transactions between departments/divisions", "Government audits", "Retail sales"], c: "Internal transactions between departments/divisions" },
            { q: "The primary objective of transfer pricing is", o: ["Tax evasion", "Goal congruence and performance evaluation", "Increasing division losses", "Reducing total company profit"], c: "Goal congruence and performance evaluation" },
            { q: "Market-based transfer price is used when", o: ["There is a perfectly competitive external market", "No external market exists", "Internal costs are very high", "The company is in a monopoly"], c: "There is a perfectly competitive external market" },
            { q: "Negotiated transfer pricing occurs when", o: ["Managers of buying and selling divisions agree on a price", "The CEO sets the price", "The market sets the price", "The cost auditor sets the price"], c: "Managers of buying and selling divisions agree on a price" },
            { q: "Goal congruence means", o: ["Divisional goals align with corporate goals", "All divisions have the same budget", "Prices are kept constant", "Sales targets are achieved"], c: "Divisional goals align with corporate goals" },
            { q: "Standard costing is used to", o: ["Calculate actual cost", "Measure variances and control costs", "Record historical data only", "Set retail prices"], c: "Measure variances and control costs" },
            { q: "Material Price Variance =", o: ["(Standard Price - Actual Price) x Actual Quantity", "(Standard Price - Actual Price) x Standard Quantity", "(Standard Quantity - Actual Quantity) x Standard Price", "None of the above"], c: "(Standard Price - Actual Price) x Actual Quantity" },
            { q: "Labor Efficiency Variance =", o: ["(Standard Hours - Actual Hours) x Standard Rate", "(Standard Hours - Actual Hours) x Actual Rate", "(Standard Rate - Actual Rate) x Actual Hours", "None of the above"], c: "(Standard Hours - Actual Hours) x Standard Rate" },
            { q: "A favorable variance occurs when", o: ["Actual cost > Standard cost", "Actual cost < Standard cost", "Actual sales < Budgeted sales", "Actual profit < Budgeted profit"], c: "Actual cost < Standard cost" },
            { q: "Variable Overhead Expenditure Variance =", o: ["(Standard Rate - Actual Rate) x Actual Hours", "(Standard Hours - Actual Hours) x Standard Rate", "(Budgeted Hours - Actual Hours) x Standard Rate", "None of the above"], c: "(Standard Rate - Actual Rate) x Actual Hours" },
            { q: "Fixed Overhead Volume Variance =", o: ["(Actual Output - Budgeted Output) x Standard Rate", "(Standard Hours - Actual Hours) x Standard Rate", "Actual Overhead - Budgeted Overhead", "None of the above"], c: "(Actual Output - Budgeted Output) x Standard Rate" },
            { q: "A 'Mixed' or 'Joint' variance refers to", o: ["The combination of price and quantity effects", "Budgeted vs Actual", "Variable vs Fixed", "None of the above"], c: "The combination of price and quantity effects" },
            { q: "Strategic Positioning Analysis involves", o: ["Cost leadership and Differentiation", "Only cost reduction", "Only price increase", "Mass marketing"], c: "Cost leadership and Differentiation" },
            { q: "Cost leadership strategy aims at", o: ["High quality high price", "Lowest cost in the industry", "Niche marketing", "Product innovation"], c: "Lowest cost in the industry" },
            { q: "Differentiation strategy aims at", o: ["Lowest price", "Unique product features valued by customers", "Standardized products", "High volume low margin"], c: "Unique product features valued by customers" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "Economic Value Added (EVA) =", o: ["Net Operating Profit After Tax (NOPAT) - Capital Charge", "Net Profit - Tax", "Sales - Cost", "Assets - Liabilities"], c: "Net Operating Profit After Tax (NOPAT) - Capital Charge" },
            { q: "Capital Charge in EVA is calculated as", o: ["Capital Employed x WACC", "Total Debt x Interest", "Equity x Dividend", "Assets x Inflation Rate"], c: "Capital Employed x WACC" },
            { q: "Market Value Added (MVA) represents", o: ["Total Market Value - Total Capital Contributed", "Stock Price - Book Value", "Net Income - WACC", "None of the above"], c: "Total Market Value - Total Capital Contributed" },
            { q: "Operational Performance Measurement focuses on", o: ["Efficiency and Effectiveness", "Long term strategy only", "External environment only", "Shareholder wealth only"], c: "Efficiency and Effectiveness" },
            { q: "Cycle time refers to", o: ["Time taken from order to delivery", "Time taken for one production process", "Idle time", "Setup time"], c: "Time taken from order to delivery" },
            { q: "Throughput Contribution per unit of bottleneck resource =", o: ["(Selling Price - Material Cost) / Time in bottleneck", "Sales / Total Hours", "Profit / Assets", "Contribution / Variable Cost"], c: "(Selling Price - Material Cost) / Time in bottleneck" },
            { q: "Total Quality Management (TQM) is", o: ["Continuous organization-wide effort to improve quality", "A department specific task", "Checking products at the end", "Reducing labor cost"], c: "Continuous organization-wide effort to improve quality" },
            { q: "The 'Customer Perspective' in Balanced Scorecard includes", o: ["Market share and customer satisfaction", "ROCE", "Employee turnover", "Manufacturing cycle time"], c: "Market share and customer satisfaction" },
            { q: "A 'Strategic Map' is used to", o: ["Identify competitors", "Visualize the cause-and-effect relationship in Balanced Scorecard", "Set budgets", "Record actual costs"], c: "Visualize the cause-and-effect relationship in Balanced Scorecard" },
            { q: "Value-based management (VBM) focuses on", o: ["Short term profit", "Maximizing shareholder value", "Increasing sales volume", "Reducing staff"], c: "Maximizing shareholder value" },
            { q: "Benchmarking is a", o: ["One-time exercise", "Continuous process", "Legal requirement", "Internal audit task"], c: "Continuous process" },
            { q: "Pareto Analysis (80/20 rule) in cost management suggests", o: ["80% of costs come from 20% of activities", "All activities are equally important", "Costs should be reduced by 80%", "Inventory should be 20% of sales"], c: "80% of costs come from 20% of activities" },
            { q: "Total Productive Maintenance (TPM) was developed in", o: ["USA", "Japan", "Germany", "UK"], c: "Japan" },
            { q: "The goal of Six Sigma is to achieve", o: ["99.99966% defect-free products", "90% accuracy", "Zero cost", "Highest sales"], c: "99.99966% defect-free products" },
            { q: "In Target Costing, if the estimated cost is higher than the target cost, the difference is called", o: ["Cost Gap", "Profit Margin", "Standard Variance", "Opportunity Cost"], c: "Cost Gap" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "Which of the following is an internal failure cost?", o: ["Warranty repairs", "Product design review", "Scrap and Rework", "Final inspection"], c: "Scrap and Rework" },
            { q: "Which of the following is an external failure cost?", o: ["Training", "Inspection of incoming materials", "Product recalls", "Maintenance of equipment"], c: "Product recalls" },
            { q: "Activity Based Management (ABM) uses ABC data to", o: ["Improve decision making and efficiency", "Calculate taxes", "Report to shareholders", "Only value inventory"], c: "Improve decision making and efficiency" },
            { q: "Synchronous manufacturing is associated with", o: ["JIT", "Theory of Constraints", "Mass production", "Standard costing"], c: "Theory of Constraints" },
            { q: "The term 'Kaizen' means", o: ["Sudden change", "Change for the better (Continuous improvement)", "Static standard", "Zero inventory"], c: "Change for the better (Continuous improvement)" },
            { q: "Strategic Cost Management differs from traditional cost accounting as it", o: ["Has a long-term focus", "Considers external competitive factors", "Links cost with strategy", "All of the above"], c: "All of the above" },
            { q: "In Value Chain Analysis, 'Inbound Logistics' includes", o: ["Receiving, storing and distributing inputs", "Transforming inputs into products", "Marketing", "After-sales service"], c: "Receiving, storing and distributing inputs" },
            { q: "A 'Value Shop' model is applicable to", o: ["Service organizations (like hospitals, consulting)", "Manufacturing units", "Retailers", "Logistics providers"], c: "Service organizations (like hospitals, consulting)" },
            { q: "Supply Chain Management focuses on", o: ["The flow of goods and information from supplier to customer", "Internal manufacturing only", "Unit labor cost", "Financial reporting"], c: "The flow of goods and information from supplier to customer" },
            { q: "The concept of 'Critical Success Factors' (CSF) helps in", o: ["Identifying areas where high performance is essential", "Reducing total assets", "Increasing debt", "Standardizing all tasks"], c: "Identifying areas where high performance is essential" },
            { q: "Performance Prism includes the following facets:", o: ["Stakeholder satisfaction, Strategies, Processes, Capabilities, Stakeholder contribution", "Profit, Sales, Market share", "Cost, Price, Quality", "Planning, Execution, Control"], c: "Stakeholder satisfaction, Strategies, Processes, Capabilities, Stakeholder contribution" },
            { q: "Building a 'Balanced Scorecard' begins with", o: ["The company's strategy and vision", "The previous year's financial statements", "Competitor prices", "Government regulations"], c: "The company's strategy and vision" },
            { q: "A 'Lead' indicator in Balanced Scorecard is", o: ["A predictive measure (e.g. training hours)", "A historical measure (e.g. profit)", "A static measure", "None of the above"], c: "A predictive measure (e.g. training hours)" },
            { q: "A 'Lag' indicator in Balanced Scorecard is", o: ["A predictive measure", "A historical measure (e.g. Return on Investment)", "An internal measure only", "None of the above"], c: "A historical measure (e.g. Return on Investment)" },
            { q: "The Theory of Constraints identifies the bottleneck as", o: ["The weakest link in the chain", "The most expensive activity", "The activity with highest demand", "None of the above"], c: "The weakest link in the chain" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "Value added efficiency ratio in JIT environment =", o: ["Value added time / Total cycle time", "Actual time / Standard time", "Sales / Cost", "Profit / Capital"], c: "Value added time / Total cycle time" },
            { q: "Environmental costs can be categorized into", o: ["Prevention, Appraisal, Internal Failure, External Failure", "Fixed and Variable", "Direct and Indirect", "None of the above"], c: "Prevention, Appraisal, Internal Failure, External Failure" },
            { q: "An example of an external environmental failure cost is", o: ["Restoring land after damage", "Environmental audits", "Waste treatment", "Cleaning equipment"], c: "Restoring land after damage" },
            { q: "Life cycle costing is used for", o: ["Evaluating profitability over product life", "Pricing decisions", "Long term planning", "All of the above"], c: "All of the above" },
            { q: "The five 'S' in TPM includes", o: ["Sort, Set in order, Shine, Standardize, Sustain", "Sales, Service, Support, Stability, Speed", "Standards, Systems, Stocks, Staff, Success", "None of the above"], c: "Sort, Set in order, Shine, Standardize, Sustain" },
            { q: "In Six Sigma, 'Black Belts' are", o: ["Project leaders dedicating full time to improvement", "Part time team members", "Senior executives", "Suppliers"], c: "Project leaders dedicating full time to improvement" },
            { q: "The 'Cost of Quality' is also known as", o: ["Poor Quality Cost", "Standard Cost", "Normal Cost", "None of the above"], c: "Poor Quality Cost" },
            { q: "Total Cycle Time =", o: ["Processing Time + Inspection Time + Moving Time + Waiting Time", "Processing Time only", "Order to Cash time", "None of the above"], c: "Processing Time + Inspection Time + Moving Time + Waiting Time" },
            { q: "Non-financial performance measures are", o: ["More timely than financial measures", "Helpful in identifying operational problems", "Complementary to financial measures", "All of the above"], c: "All of the above" },
            { q: "Market Price Method of Transfer Pricing is most appropriate when", o: ["There is an external market", "There is no external market", "Capacity is idle", "Inter-divisional transfers are small"], c: "There is an external market" },
            { q: "The 'Minimum' transfer price should be", o: ["Variable cost + Opportunity cost", "Full cost", "Market price", "Total cost"], c: "Variable cost + Opportunity cost" },
            { q: "If a selling division has idle capacity, the opportunity cost for internal transfer is", o: ["Zero", "Full contribution", "Selling price", "Fixed cost"], c: "Zero" },
            { q: "The 'Dual Pricing' system in transfer pricing uses", o: ["Different prices for buying and selling divisions", "Fixed and variable rates", "Market and cost rates", "None of the above"], c: "Different prices for buying and selling divisions" },
            { q: "One major drawback of cost-based transfer pricing is", o: ["It may transfer inefficiencies of selling division to buying division", "It is difficult to calculate", "It is always higher than market price", "None of the above"], c: "It may transfer inefficiencies of selling division to buying division" },
            { q: "In ABC, 'Unit Level' activities are performed", o: ["For each unit of product", "For each batch", "For each product line", "For the whole plant"], c: "For each unit of product" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "In ABC, 'Batch Level' activities include", o: ["Machine setups", "Building maintenance", "Product design", "Security"], c: "Machine setups" },
            { q: "In ABC, 'Product Sustaining' activities include", o: ["Product design and engineering", "Direct labor", "Power", "Rent"], c: "Product design and engineering" },
            { q: "In ABC, 'Facility Sustaining' activities include", o: ["General administration and security", "Setups", "Inspection", "Direct materials"], c: "General administration and security" },
            { q: "The objective of Strategic Positioning Analysis is to", o: ["Identify competitive advantage", "Decrease tax", "Maximize short term liquidity", "None of the above"], c: "Identify competitive advantage" },
            { q: "Strategic Cost Management (SCM) is the", o: ["Proactive use of cost information to develop and implement strategy", "Recording of costs", "Auditing of books", "Payment of vendors"], c: "Proactive use of cost information to develop and implement strategy" },
            { q: "A 'Value Chain' is a series of", o: ["Value-creating activities", "Accounting ledgers", "Production machines", "None of the above"], c: "Value-creating activities" },
            { q: "Value analysis is also known as", o: ["Value Engineering", "Cost Accounting", "Management Audit", "None of the above"], c: "Value Engineering" },
            { q: "The primary focus of Lean management is on", o: ["Customer value and waste elimination", "Mass production", "High inventory levels", "Labor cost increase"], c: "Customer value and waste elimination" },
            { q: "Continuous improvement is a key feature of", o: ["TQM and Kaizen", "Traditional budget only", "Standard costing only", "None of the above"], c: "TQM and Kaizen" },
            { q: "Business Process Re-engineering is usually applied to", o: ["Failing processes requiring radical change", "Stable efficient processes", "Minor tasks", "None of the above"], c: "Failing processes requiring radical change" },
            { q: "Target costing is common in the", o: ["Automotive and electronics industries", "Monopoly industries", "Service industries with no competition", "Government departments"], c: "Automotive and electronics industries" },
            { q: "Price-led costing refers to", o: ["Target Costing", "Standard Costing", "Marginal Costing", "Direct Costing"], c: "Target Costing" },
            { q: "The concept of 'Cost Drivers' belongs to", o: ["Activity Based Costing", "Marginal Costing", "Absorption Costing", "None of the above"], c: "Activity Based Costing" },
            { q: "Benchmarking against the world's best companies in any industry is called", o: ["Generic Benchmarking", "Internal Benchmarking", "Competitive Benchmarking", "None of the above"], c: "Generic Benchmarking" },
            { q: "Comparing performance between different branches of the same organization is", o: ["Internal Benchmarking", "External Benchmarking", "Strategic Benchmarking", "None of the above"], c: "Internal Benchmarking" }
        ]
    },
    {
        setName: "Set 9",
        questions: [
            { q: "Which of the following is a non-financial measure of quality?", o: ["Customer complaints", "Scrap value", "Warranty costs", "Inspection labor cost"], c: "Customer complaints" },
            { q: "The 'Economic Linkages' in value chain analysis refers to", o: ["Interdependencies between activities", "Total sales", "Bank interest rate", "None of the above"], c: "Interdependencies between activities" },
            { q: "Cost Driver Analysis involves identifying", o: ["Factors that cause costs to change", "The total cost", "Unit labor cost", "Fixed overheads"], c: "Factors that cause costs to change" },
            { q: "The 'Learning Curve' is also called the", o: ["Experience Curve", "Standard Curve", "Normal Curve", "None of the above"], c: "Experience Curve" },
            { q: "The 'Learning Curve' model is expressed as", o: ["$Y = aX^b$", "$Y = a+bX$", "$Y = a/X$", "None of the above"], c: "$Y = aX^b$" },
            { q: "In the learning curve equation $Y = aX^b$, '$Y$' stands for", o: ["Average time per unit", "Total time", "Standard time", "Actual time"], c: "Average time per unit" },
            { q: "Target profit in target costing is determined based on", o: ["Required Return on Sales or Assets", "Actual previous profit", "Manager's intuition", "Competitor's dividend"], c: "Required Return on Sales or Assets" },
            { q: "Which of the following is a 'Structural' cost driver?", o: ["Scale of operations", "Complexity", "Technology", "All of the above"], c: "All of the above" },
            { q: "Which of the following is an 'Executional' cost driver?", o: ["Capacity utilization", "Quality management", "Workforce involvement", "All of the above"], c: "All of the above" },
            { q: "Throughput accounting assumes that", o: ["Only material costs are variable", "Labor is always variable", "Overheads are avoidable", "Inventory is an asset"], c: "Only material costs are variable" },
            { q: "Total Quality Management (TQM) emphasizes", o: ["Customer satisfaction and employee participation", "Highest price", "Lowest labor hours only", "Mass production"], c: "Customer satisfaction and employee participation" },
            { q: "A 'Pareto Chart' is used in quality control to", o: ["Identify most frequent causes of defects", "Set prices", "Calculate interest", "None of the above"], c: "Identify most frequent causes of defects" },
            { q: "Six Sigma methodology focuses on", o: ["Reducing variation in processes", "Increasing variation", "Increasing cost", "None of the above"], c: "Reducing variation in processes" },
            { q: "The primary benefit of JIT is", o: ["Reduced working capital requirements", "Increased storage space needed", "Higher buffer stocks", "None of the above"], c: "Reduced working capital requirements" },
            { q: "Just-in-Time (JIT) is a", o: ["Pull system", "Push system", "Mass production system", "None of the above"], c: "Pull system" }
        ]
    },
    {
        setName: "Set 10",
        questions: [
            { q: "Which of the following is a cost of 'External Failure'?", o: ["Processing customer complaints", "Product quality audits", "Field testing", "Quality training"], c: "Processing customer complaints" },
            { q: "The 'Hidden Factory' refers to", o: ["Activities involved in reworking defects", "Underground production", "Secret research", "None of the above"], c: "Activities involved in reworking defects" },
            { q: "Cost of Quality is minimized when", o: ["Prevention and appraisal costs equal failure costs", "Failure costs are zero", "Prevention costs are zero", "None of the above"], c: "Prevention and appraisal costs equal failure costs" },
            { q: "The 'Internal Business Process' perspective in Balanced Scorecard measures", o: ["Process efficiency and innovation", "Brand awareness", "Cash flow", "Training hours"], c: "Process efficiency and innovation" },
            { q: "Supply Chain Management (SCM) aims at", o: ["Enhancing responsiveness and efficiency", "Increasing cost of supply", "Reducing transparency", "None of the above"], c: "Enhancing responsiveness and efficiency" },
            { q: "Global supply chain management involves", o: ["Managing across international borders", "Only local suppliers", "Only internal logistics", "None of the above"], c: "Managing across international borders" },
            { q: "A 'Bottleneck' in a process limits the", o: ["Throughput of the entire system", "Variable cost", "Profit of one item", "None of the above"], c: "Throughput of the entire system" },
            { q: "Which cost is NOT typically included in EMA (Environmental Management Accounting)?", o: ["Direct labor in main production", "Waste treatment costs", "Environmental permit fees", "Compliance costs"], c: "Direct labor in main production" },
            { q: "Life cycle costing is critical for products with", o: ["Short lives and high development costs", "Infinite lives", "No development costs", "Low competition"], c: "Short lives and high development costs" },
            { q: "Value engineering is", o: ["A systematic approach to provide required functions at lowest cost", "Building expensive products", "Ignoring costs", "None of the above"], c: "A systematic approach to provide required functions at lowest cost" },
            { q: "The 'Target Cost' approach is also known as", o: ["Design-to-Cost", "Historical Costing", "Absorption Costing", "None of the above"], c: "Design-to-Cost" },
            { q: "Benchmarking helps an organization to", o: ["Discover new ideas and improve standards", "Stagnate", "Increase secrecy", "None of the above"], c: "Discover new ideas and improve standards" },
            { q: "Total Productive Maintenance (TPM) requires", o: ["Operator involvement in maintenance", "Hiring external experts only", "Only senior management work", "None of the above"], c: "Operator involvement in maintenance" },
            { q: "An 'OEE' (Overall Equipment Effectiveness) of 100% means", o: ["No downtime, no defects, maximum speed", "Zero labor", "High profit", "None of the above"], c: "No downtime, no defects, maximum speed" },
            { q: "Activity Based Costing is more accurate than traditional costing when", o: ["Overheads are a large part of total cost", "Product range is complex", "Non-volume based cost drivers exist", "All of the above"], c: "All of the above" }
        ]
    },
    {
        setName: "Set 11",
        questions: [
            { q: "A 'Cost Pool' is used to", o: ["Accumulate costs related to a specific activity", "Pay salaries", "Record sales", "None of the above"], c: "Accumulate costs related to a specific activity" },
            { q: "In ABC, 'Cost Drivers' are used to", o: ["Assign costs from pools to products", "Calculate tax", "Identify customers", "None of the above"], c: "Assign costs from pools to products" },
            { q: "Strategic analysis of costs requires", o: ["Focus on external value chain", "Long term orientation", "Emphasis on cost drivers", "All of the above"], c: "All of the above" },
            { q: "Value Chain Analysis was first introduced by", o: ["Michael Porter", "Peter Drucker", "Igor Ansoff", "None of the above"], c: "Michael Porter" },
            { q: "Which activity is a 'Support Activity' in value chain?", o: ["Human Resource Management", "Operations", "Sales", "Inbound Logistics"], c: "Human Resource Management" },
            { q: "The 'Primary Activities' in a value chain are", o: ["Directly involved in creating and delivering product", "Accounting and Legal", "Management training", "None of the above"], c: "Directly involved in creating and delivering product" },
            { q: "Total Quality Management (TQM) is based on the idea of", o: ["Continuous improvement and customer focus", "Once-a-year review", "Increasing prices", "Reducing quality checks"], c: "Continuous improvement and customer focus" },
            { q: "Kaizen means", o: ["Continuous improvement", "Standardization", "Fixed budget", "None of the above"], c: "Continuous improvement" },
            { q: "JIT II (Just-in-Time II) involves", o: ["Placing supplier employees in the customer's facility", "Double the inventory", "No suppliers", "None of the above"], c: "Placing supplier employees in the customer's facility" },
            { q: "Supply Chain Management integrates", o: ["Planning and management of all sourcing and procurement", "Internal accounting", "External auditing", "Only marketing"], c: "Planning and management of all sourcing and procurement" },
            { q: "Throughput accounting ratio (TPAR) =", o: ["Throughput contribution per hour / Factory cost per hour", "Sales / Cost", "Profit / Capital", "None of the above"], c: "Throughput contribution per hour / Factory cost per hour" },
            { q: "A TPAR (Throughput Accounting Ratio) greater than 1 indicates", o: ["The product is profitable", "The product is losing money", "Production should stop", "None of the above"], c: "The product is profitable" },
            { q: "The Theory of Constraints (TOC) consists of", o: ["Five steps of continuous improvement", "Three steps", "One step", "None of the above"], c: "Five steps of continuous improvement" },
            { q: "The 'Drum' in TOC represents", o: ["The constraint", "The inventory", "The sales team", "None of the above"], c: "The constraint" },
            { q: "The 'Buffer' in TOC is used to", o: ["Protect the bottleneck from disruptions", "Increase storage cost", "Delay sales", "None of the above"], c: "Protect the bottleneck from disruptions" }
        ]
    },
    {
        setName: "Set 12",
        questions: [
            { q: "Lean Six Sigma combines", o: ["Lean manufacturing and Six Sigma", "Standard and marginal costing", "Budget and actual", "None of the above"], c: "Lean manufacturing and Six Sigma" },
            { q: "Lean Six Sigma focuses on", o: ["Waste reduction and variation reduction", "Increasing cost", "Complexity", "None of the above"], c: "Waste reduction and variation reduction" },
            { q: "Quality auditing is a part of", o: ["Appraisal Costs", "Prevention Costs", "Failure Costs", "None of the above"], c: "Appraisal Costs" },
            { q: "Product liability insurance is a", o: ["External Failure Cost", "Prevention Cost", "Internal Failure Cost", "None of the above"], c: "External Failure Cost" },
            { q: "Balanced Scorecard is a", o: ["Performance management tool", "Tax report", "Balance sheet", "None of the above"], c: "Performance management tool" },
            { q: "The focus of 'Differentiation' is on", o: ["High customer value", "Lowest cost", "Mass market", "None of the above"], c: "High customer value" },
            { q: "Target pricing is based on", o: ["Customer value and competitor prices", "Cost + Markup", "Historical cost", "None of the above"], c: "Customer value and competitor prices" },
            { q: "Value Engineering should ideally occur", o: ["During the product design phase", "During production", "After sales", "None of the above"], c: "During the product design phase" },
            { q: "Total Productive Maintenance (TPM) aims at 'Six Big Losses' including", o: ["Breakdown and Setup time", "Idling and minor stoppages", "Reduced speed and quality defects", "All of the above"], c: "All of the above" },
            { q: "Business Process Re-engineering (BPR) is most suitable for", o: ["Broken processes in highly competitive environments", "New processes", "Minor improvements", "None of the above"], c: "Broken processes in highly competitive environments" },
            { q: "Pareto Analysis is also known as", o: ["ABC Analysis", "Value Analysis", "Target Costing", "None of the above"], c: "ABC Analysis" },
            { q: "In Six Sigma, the Greek letter 'Sigma' refers to", o: ["Standard Deviation", "Mean", "Median", "Mode"], c: "Standard Deviation" },
            { q: "Strategic Cost Management helps in", o: ["Achieving sustainable competitive advantage", "Calculating unit labor cost only", "Recording journals", "None of the above"], c: "Achieving sustainable competitive advantage" },
            { q: "Value added by an activity is measured by", o: ["What the customer is willing to pay", "The cost incurred", "The time taken", "None of the above"], c: "What the customer is willing to pay" },
            { q: "Supply Chain Management helps in reducing", o: ["Total system costs", "Inventory levels", "Lead times", "All of the above"], c: "All of the above" }
        ]
    },
    {
        setName: "Set 13",
        questions: [
            { q: "Competitive Benchmarking involves", o: ["Comparing with direct competitors", "Comparing with internal units", "Comparing with world class leaders in other industries", "None of the above"], c: "Comparing with direct competitors" },
            { q: "The 'Rope' in TOC synchronizes", o: ["Production rate with bottleneck rate", "Sales with profit", "Assets with liabilities", "None of the above"], c: "Production rate with bottleneck rate" },
            { q: "A firm with an 80% learning curve finds that the second unit takes 80 hours. The first unit must have taken", o: ["100 hours", "80 hours", "64 hours", "None of the above"], c: "100 hours" },
            { q: "If the learning curve is 100%, it means", o: ["There is no learning (time remains constant)", "Time reduces to zero", "Infinite learning", "None of the above"], c: "There is no learning (time remains constant)" },
            { q: "Environmental Management Accounting (EMA) includes", o: ["Physical and monetary environmental info", "Sales data only", "Employee data only", "None of the above"], c: "Physical and monetary environmental info" },
            { q: "Greenhouse gas emissions measurement is part of", o: ["Environmental accounting", "Financial accounting", "Tax accounting", "None of the above"], c: "Environmental accounting" },
            { q: "Transfer pricing affects", o: ["Divisional profits but not total corporate profit", "Total corporate profit", "Only tax payments", "None of the above"], c: "Divisional profits but not total corporate profit" },
            { q: "Opportunity cost of internal transfer is", o: ["The contribution lost by not selling externally", "The fixed cost", "The variable cost", "None of the above"], c: "The contribution lost by not selling externally" },
            { q: "In a 'Negotiated' transfer price, the range is typically", o: ["Variable cost to Market price", "Fixed cost to Market price", "Total cost only", "None of the above"], c: "Variable cost to Market price" },
            { q: "Standard costing is effective for", o: ["Planning and Control", "Performance Evaluation", "Inventory Valuation", "All of the above"], c: "All of the above" },
            { q: "Sales Volume Variance =", o: ["(Actual Volume - Budgeted Volume) x Standard Margin", "Actual Price - Standard Price", "Budgeted Sales - Actual Sales", "None of the above"], c: "(Actual Volume - Budgeted Volume) x Standard Margin" },
            { q: "Which of the following is a drawback of traditional performance measures?", o: ["Short term focus", "Emphasis on financial data only", "May lead to sub-optimization", "All of the above"], c: "All of the above" },
            { q: "Key Success Factors (KSFs) are", o: ["Crucial areas for business success", "Irrelevant factors", "Legal requirements", "None of the above"], c: "Crucial areas for business success" },
            { q: "Lean management emphasizes", o: ["Flow and Value", "Batch production", "High stock", "Complex hierarchy"], c: "Flow and Value" },
            { q: "Strategic Cost Management is", o: ["Continuous and forward looking", "Historical and static", "Mandatory by law", "None of the above"], c: "Continuous and forward looking" }
        ]
    },
    {
        setName: "Set 14",
        questions: [
            { q: "A 'Profit Centre' manager is responsible for", o: ["Both revenues and costs", "Only costs", "Only revenues", "Investments"], c: "Both revenues and costs" },
            { q: "An 'Investment Centre' manager is responsible for", o: ["Revenues, costs and investment", "Revenues only", "Costs only", "None of the above"], c: "Revenues, costs and investment" },
            { q: "Residual Income (RI) =", o: ["NOPAT - (Capital x WACC)", "Sales - Expenses", "Profit / Capital", "None of the above"], c: "NOPAT - (Capital x WACC)" },
            { q: "ROCE (Return on Capital Employed) =", o: ["Profit / Capital Employed", "Profit / Sales", "Sales / Assets", "None of the above"], c: "Profit / Capital Employed" },
            { q: "Value addition occurs when", o: ["Output value > Input value", "Output value = Input value", "Output value < Input value", "None of the above"], c: "Output value > Input value" },
            { q: "Benchmarking provides a", o: ["Target for improvement", "Legal shield", "Reason for failure", "None of the above"], c: "Target for improvement" },
            { q: "Kaizen costing involves", o: ["Employees at all levels", "Only CEO", "Only external consultants", "None of the above"], c: "Employees at all levels" },
            { q: "Target Costing is", o: ["Market driven", "Cost driven", "Regulation driven", "None of the above"], c: "Market driven" },
            { q: "The 'Learning Curve' is applicable to", o: ["Complex assembly work", "Standard machine work", "Automated packing", "None of the above"], c: "Complex assembly work" },
            { q: "Internal Benchmarking is", o: ["Comparing within the same company", "Comparing with competitors", "Comparing with best-in-class in other sectors", "None of the above"], c: "Comparing within the same company" },
            { q: "Activity Based Costing helps in", o: ["Accurate product costing", "Identifying non-value added costs", "Profitability analysis", "All of the above"], c: "All of the above" },
            { q: "A 'Balanced Scorecard' should contain", o: ["A mix of financial and non-financial measures", "Only profit data", "Only sales data", "None of the above"], c: "A mix of financial and non-financial measures" },
            { q: "Strategic Positioning depends on", o: ["Industry structure and competitive advantage", "Fixed assets only", "Employees only", "None of the above"], c: "Industry structure and competitive advantage" },
            { q: "Lean production aims at", o: ["Delivering exactly what is needed, when needed", "Delivering early", "Delivering late", "None of the above"], c: "Delivering exactly what is needed, when needed" },
            { q: "Six Sigma projects follow", o: ["DMAIC or DMADV", "ABC", "JIT", "None of the above"], c: "DMAIC or DMADV" }
        ]
    },
    {
        setName: "Set 15",
        questions: [
            { q: "Which of the following is a 'Failure Cost'?", o: ["Warranty claims", "Inspection", "Training", "Audits"], c: "Warranty claims" },
            { q: "Appraisal costs are incurred to", o: ["Detect quality problems", "Prevent problems", "Fix defects", "None of the above"], c: "Detect quality problems" },
            { q: "The Theory of Constraints (TOC) identifies", o: ["Global constraints of the organization", "Local constraints only", "Financial constraints only", "None of the above"], c: "Global constraints of the organization" },
            { q: "In Throughput Accounting, inventory is valued at", o: ["Material cost only", "Full cost", "Market value", "None of the above"], c: "Material cost only" },
            { q: "Target costing requires", o: ["Cross-functional teams", "Only accounting team", "Only marketing team", "None of the above"], c: "Cross-functional teams" },
            { q: "Life cycle costing is useful for", o: ["Capital budgeting and pricing", "Only for tax", "Only for inventory", "None of the above"], c: "Capital budgeting and pricing" },
            { q: "Strategic Cost Management integrates", o: ["Strategy, Value Chain, Cost Drivers", "Sales and Expenses only", "Assets and Liabilities only", "None of the above"], c: "Strategy, Value Chain, Cost Drivers" },
            { q: "Cost of Quality analysis is used to", o: ["Improve quality and reduce cost", "Increase price", "Maximize volume", "None of the above"], c: "Improve quality and reduce cost" },
            { q: "Balanced Scorecard connects", o: ["Mission to actions", "Ledgers to journals", "Debits to credits", "None of the above"], c: "Mission to actions" },
            { q: "Throughput accounting focuses on", o: ["Speed of conversion into cash", "Absorption of overheads", "Labor efficiency only", "None of the above"], c: "Speed of conversion into cash" },
            { q: "Kaizen focuses on", o: ["Continuous improvement in manufacturing and business", "One-time re-engineering", "Cost addition", "None of the above"], c: "Continuous improvement in manufacturing and business" },
            { q: "The primary purpose of ABC is to", o: ["Understand overhead costs and their causes", "Maximize tax liability", "Ignore indirect costs", "None of the above"], c: "Understand overhead costs and their causes" },
            { q: "Value Chain Analysis identifies", o: ["Competitive advantages and disadvantages", "Total assets", "Bank balance", "None of the above"], c: "Competitive advantages and disadvantages" },
            { q: "Which of the following is a cost driver?", o: ["Number of orders", "Number of employees", "Machine hours", "All of the above"], c: "All of the above" },
            { q: "Target Costing is applied", o: ["In competitive markets", "In monopoly markets", "Only in government", "None of the above"], c: "In competitive markets" }
        ]
    },
    {
        setName: "Set 16",
        questions: [
            { q: "Benchmarking is based on the philosophy of", o: ["Continuous learning", "Static performance", "Secretiveness", "None of the above"], c: "Continuous learning" },
            { q: "Six Sigma methodology reduces", o: ["Process variability", "Labor cost only", "Material cost only", "None of the above"], c: "Process variability" },
            { q: "Total Productive Maintenance (TPM) goals include", o: ["Zero unplanned downtime", "Maximum throughput", "Perfect quality", "All of the above"], c: "All of the above" },
            { q: "Supply chain management enhances", o: ["Customer service and profitability", "Internal conflicts", "Cost of production", "None of the above"], c: "Customer service and profitability" },
            { q: "Transfer pricing should be", o: ["Fair and equitable to both divisions", "Mandated by buying division", "Fixed by selling division", "None of the above"], c: "Fair and equitable to both divisions" },
            { q: "A 'Constraint' is also called a", o: ["Bottleneck", "Buffer", "Drum", "None of the above"], c: "Bottleneck" },
            { q: "Value based management is a", o: ["Holistic approach to creating shareholder value", "Single measure", "Accounting standard", "None of the above"], c: "Holistic approach to creating shareholder value" },
            { q: "Lead Indicators are", o: ["Forward looking", "Backward looking", "Historical", "None of the above"], c: "Forward looking" },
            { q: "Lag Indicators are", o: ["Backward looking", "Forward looking", "Predictive", "None of the above"], c: "Backward looking" },
            { q: "Balanced Scorecard measures", o: ["Strategic performance", "Operational tasks only", "Financial data only", "None of the above"], c: "Strategic performance" },
            { q: "Kaizen is a", o: ["Bottom-up approach", "Top-down only", "Side approach", "None of the above"], c: "Bottom-up approach" },
            { q: "Target costing starts with the", o: ["Customer", "Accountant", "Machine", "None of the above"], c: "Customer" },
            { q: "JIT requires", o: ["High quality and reliable suppliers", "High buffer stocks", "Unskilled labor", "None of the above"], c: "High quality and reliable suppliers" },
            { q: "Value added efficiency improves with", o: ["Reduction in non-value added time", "Increase in idle time", "Increase in storage", "None of the above"], c: "Reduction in non-value added time" },
            { q: "Strategic Positioning analysis helps in", o: ["Long term success", "Short term gain only", "Increasing complexity", "None of the above"], c: "Long term success" }
        ]
    },
    {
        setName: "Set 17",
        questions: [
            { q: "Throughput accounting ratio TPAR > 1 means", o: ["Product is creating value", "Product is destroying value", "Indifference", "None of the above"], c: "Product is creating value" },
            { q: "Life cycle costing avoids", o: ["Short sightedness in product planning", "Profit", "Loss", "None of the above"], c: "Short sightedness in product planning" },
            { q: "Environmental Management Accounting integrates", o: ["Economics and Environment", "Sales and Marketing", "Finance and HR", "None of the above"], c: "Economics and Environment" },
            { q: "Strategic Cost Management is a", o: ["Mindset and set of tools", "Single ledger", "Physical asset", "None of the above"], c: "Mindset and set of tools" },
            { q: "Value analysis seeks to", o: ["Eliminate unnecessary features", "Add more features always", "Increase cost", "None of the above"], c: "Eliminate unnecessary features" },
            { q: "Pareto Analysis is a", o: ["Decision making tool", "Tax software", "Physical tool", "None of the above"], c: "Decision making tool" },
            { q: "ABC costing provides", o: ["Insights into cost drivers", "Only total cost", "Only sales data", "None of the above"], c: "Insights into cost drivers" },
            { q: "Supply chain management covers", o: ["End-to-end flow", "Internal flow only", "Supplier flow only", "None of the above"], c: "End-to-end flow" },
            { q: "Strategic benchmarking looks at", o: ["Long term strategies of winners", "Short term tasks", "Internal data only", "None of the above"], c: "Long term strategies of winners" },
            { q: "Quality is defined as", o: ["Conformance to requirements", "High price", "Brand name only", "None of the above"], c: "Conformance to requirements" },
            { q: "Throughput accounting is a", o: ["Management accounting technique", "Financial reporting technique", "Legal requirement", "None of the above"], c: "Management accounting technique" },
            { q: "Kaizen requires", o: ["Culture of continuous improvement", "Fixed mindset", "Secrecy", "None of the above"], c: "Culture of continuous improvement" },
            { q: "Six Sigma is", o: ["Data driven", "Guesswork", "Random", "None of the above"], c: "Data driven" },
            { q: "JIT helps in", o: ["Cash flow improvement", "Inventory accumulation", "Increasing waste", "None of the above"], c: "Cash flow improvement" },
            { q: "Balanced Scorecard is", o: ["Multidimensional", "Unidimensional", "Financial only", "None of the above"], c: "Multidimensional" }
        ]
    },
    {
        setName: "Set 18",
        questions: [
            { q: "Strategic Positioning Analysis determines", o: ["Company's comparative position", "Bank balance", "Tax", "None of the above"], c: "Company's comparative position" },
            { q: "Value Chain Analysis is", o: ["External and internal", "Internal only", "External only", "None of the above"], c: "External and internal" },
            { q: "Cost driver analysis is", o: ["Essential for ABC", "Irrelevant for ABC", "Only for mass production", "None of the above"], c: "Essential for ABC" },
            { q: "Strategic Cost Management aims for", o: ["Customer value", "Internal focus only", "Short term gain", "None of the above"], c: "Customer value" },
            { q: "Benchmarking should lead to", o: ["Better performance", "Same performance", "Worse performance", "None of the above"], c: "Better performance" },
            { q: "Total Productive Maintenance includes", o: ["Planned maintenance", "Breakdown only", "Random maintenance", "None of the above"], c: "Planned maintenance" },
            { q: "Six Sigma improves", o: ["Yield", "Defect rate", "Variance", "All of the above"], c: "All of the above" },
            { q: "Supply chain management reduction in", o: ["Bullwhip effect", "Sales", "Customers", "None of the above"], c: "Bullwhip effect" },
            { q: "Transfer pricing should support", o: ["Goal congruence", "Divisional conflicts", "Secrecy", "None of the above"], c: "Goal congruence" },
            { q: "Theory of Constraints optimizes", o: ["System as a whole", "Parts only", "Fixed cost only", "None of the above"], c: "System as a whole" },
            { q: "Throughput contribution is", o: ["Sales - Truly variable cost", "Sales - Fixed cost", "Total cost", "None of the above"], c: "Sales - Truly variable cost" },
            { q: "Life cycle costing looks at", o: ["Whole product life", "One month", "One year", "None of the above"], c: "Whole product life" },
            { q: "Kaizen aims for", o: ["Eliminating waste", "Increasing speed", "Better quality", "All of the above"], c: "All of the above" },
            { q: "Activity based management is", o: ["Management of activities to improve value", "Management of people", "Management of assets", "None of the above"], c: "Management of activities to improve value" },
            { q: "Strategic Cost Management is an", o: ["Evolving field", "Old field", "Static field", "None of the above"], c: "Evolving field" }
        ]
    },
    {
        setName: "Set 19",
        questions: [
            { q: "Which one of the following is true for Blue Ocean Strategy?", o: ["Focus on existing customers", "Beat the competition", "Make the competition irrelevant", "Exploit existing demand"], c: "Make the competition irrelevant" },
            { q: "The objective of cost management is to", o: ["Reduce cost", "Increase cost", "Manage cost strategically", "None of the above"], c: "Manage cost strategically" },
            { q: "Value chain analysis is used to", o: ["Analyze competitive advantage", "Set prices", "Audit", "None of the above"], c: "Analyze competitive advantage" },
            { q: "Strategic Cost Management integrates", o: ["Strategy and Costing", "Sales and Profit", "Assets and Liabilities", "None of the above"], c: "Strategy and Costing" },
            { q: "Benchmarking is", o: ["Standard setting", "Target setting", "Improvement setting", "All of the above"], c: "All of the above" },
            { q: "Total Productive Maintenance is", o: ["Operator based", "Specialist based", "Manager based", "None of the above"], c: "Operator based" },
            { q: "Six Sigma is", o: ["Process improvement", "Cost reduction", "Waste elimination", "All of the above"], c: "All of the above" },
            { q: "Supply chain management is", o: ["End to end", "Internal", "External", "None of the above"], c: "End to end" },
            { q: "Transfer pricing is", o: ["Internal pricing", "External pricing", "Both", "None of the above"], c: "Internal pricing" },
            { q: "Theory of Constraints is", o: ["System optimization", "Individual machine optimization", "Profit optimization", "None of the above"], c: "System optimization" },
            { q: "Throughput accounting is", o: ["Bottleneck based", "Standard based", "Absorption based", "None of the above"], c: "Bottleneck based" }
        ]
    }
];