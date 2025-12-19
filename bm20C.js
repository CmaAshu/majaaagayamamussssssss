/**
 * Senior Data Analyst & JS Developer Extraction
 * Task: PDF to Structured JSON (JavaScript File)
 * Source: MCQBank-Paper20C.pdf
 * Total Questions: 263
 */

const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "Barriers to entrepreneurship are:", o: ["Lack of technical knowhow", "Lack of business knowledge", "Lack of motivation", "All of the above"], c: "All of the above" },
            { q: "Characteristics of an entrepreneur:", o: ["Assumes all the risk associated with a venture", "Have the perseverance", "Positive thinker", "All of the above"], c: "All of the above" },
            { q: "The Law of Patience and Perseverance is applicable for", o: ["Managing projects", "Navigating change", "Mastering a skill", "All of the above"], c: "All of the above" },
            { q: "Entrepreneurs can follow the rules:", o: ["Accept failure and take it as a lesson for future moves.", "Stick to something and stay on course despite difficulties.", "Both (a) and (b)", "None of the above"], c: "Both (a) and (b)" },
            { q: "A good decision maker should not be -", o: ["Objective and practical", "Systematic and logical", "Vague and indecisive", "Quick and confident"], c: "Vague and indecisive" },
            { q: "Which of the following factors affect the capital structure?", o: ["Company life cycle", "Cost of capital", "Market condition", "All of the above"], c: "All of the above" },
            { q: "The pillar of inbound marketing is -", o: ["Content", "Social", "Video", "All of the above"], c: "All of the above" },
            { q: "When platforms like Facebook, Instagram and LinkedIn are used for marketing it is known as?", o: ["Social Media Marketing", "Video Marketing", "Direct Marketing", "Search Engine Marketing"], c: "Social Media Marketing" },
            { q: "Entrepreneurship involves -", o: ["Decision making", "Innovation", "Risk taking", "All of the above"], c: "All of the above" },
            { q: "Entrepreneurship is a -", o: ["Dynamic process", "Risky process", "Continuous process", "All of the above"], c: "All of the above" },
            { q: "Entrepreneurship involves a", o: ["Fusion of capital", "Technology", "Business and HR", "All of the above"], c: "All of the above" },
            { q: "Entrepreneurship is equally applicable to -", o: ["Big businesses", "Economic and non-economic activities", "Small businesses", "None of the above"], c: "Economic and non-economic activities" },
            { q: "The term entrepreneur was first used in context of", o: ["French", "English", "German", "Latin"], c: "French" },
            { q: "Richard Cantillon defined an entrepreneur as a", o: ["Risk bearer", "Manager", "Innovator", "Employee"], c: "Risk bearer" },
            { q: "According to Joseph Schumpeter, an entrepreneur is an", o: ["Innovator", "Imitator", "Investor", "Administrator"], c: "Innovator" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "The process of entrepreneurship includes", o: ["Opportunity identification", "Resource gathering", "Launch and management", "All of the above"], c: "All of the above" },
            { q: "Internal locus of control means", o: ["Belief that success depends on luck", "Belief that one can influence events and outcomes", "Control by government", "Management by others"], c: "Belief that one can influence events and outcomes" },
            { q: "Need for achievement (n-Ach) was proposed by", o: ["David McClelland", "Maslow", "Herzberg", "Vroom"], c: "David McClelland" },
            { q: "A 'Fabian' entrepreneur is one who", o: ["Is very aggressive", "Follows change with caution and skepticism", "Does not follow any change", "Always leads the market"], c: "Follows change with caution and skepticism" },
            { q: "An 'Imitative' entrepreneur is one who", o: ["Introduces new products", "Adopts technology and methods developed by others", "Refuses to change", "Liquidates the firm"], c: "Adopts technology and methods developed by others" },
            { q: "Entrepreneurial motivation includes", o: ["Financial gain", "Desire for independence", "Self-actualization", "All of the above"], c: "All of the above" },
            { q: "Which of the following is an external environmental factor?", o: ["Company culture", "Government policies", "Employee skills", "Financial resources"], c: "Government policies" },
            { q: "SWOT analysis stands for", o: ["Sales, Wealth, Options, Trends", "Strengths, Weaknesses, Opportunities, Threats", "Sustainability, Work, Output, Time", "None of the above"], c: "Strengths, Weaknesses, Opportunities, Threats" },
            { q: "PESTEL analysis looks at", o: ["Internal factors", "Political, Economic, Social, Technological, Environmental, Legal factors", "Individual performance", "Product quality"], c: "Political, Economic, Social, Technological, Environmental, Legal factors" },
            { q: "Business idea generation techniques include", o: ["Brainstorming", "Focus groups", "Surveys", "All of the above"], c: "All of the above" },
            { q: "A feasibility study evaluates", o: ["Technical viability", "Financial viability", "Market viability", "All of the above"], c: "All of the above" },
            { q: "Venture Capital is", o: ["Interest-free loan", "Equity investment in high-growth potential startups", "Bank overdraft", "Government grant"], c: "Equity investment in high-growth potential startups" },
            { q: "Angel investors are", o: ["Wealthy individuals providing seed capital", "Banks", "Insurance companies", "Stock exchanges"], c: "Wealthy individuals providing seed capital" },
            { q: "Bootstrapping means", o: ["Borrowing from banks", "Funding a startup through personal savings and revenue", "Getting government subsidy", "Merger with a big firm"], c: "Funding a startup through personal savings and revenue" },
            { q: "A 'Business Plan' is", o: ["A roadmap for the venture", "A legal contract", "A daily log", "A marketing brochure"], c: "A roadmap for the venture" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "Lean Startup methodology emphasizes", o: ["Massive upfront planning", "Build-Measure-Learn feedback loop", "High inventory", "Complex hierarchy"], c: "Build-Measure-Learn feedback loop" },
            { q: "Minimum Viable Product (MVP) is", o: ["The final product", "A version of a new product which allows a team to collect the maximum amount of validated learning", "A prototype that doesn't work", "A cheap copy of a competitor"], c: "A version of a new product which allows a team to collect the maximum amount of validated learning" },
            { q: "Pivot in startup context means", o: ["Closing the business", "A structured course correction to test a new hypothesis", "Selling the company", "Hiring a new CEO"], c: "A structured course correction to test a new hypothesis" },
            { q: "Burn rate is", o: ["The speed at which a startup spends its capital", "The profit rate", "The interest rate", "The tax rate"], c: "The speed at which a startup spends its capital" },
            { q: "Scalability refers to", o: ["Size of the office", "Ability of a business to handle growing amount of work/sales profitably", "Number of employees", "Weight of the product"], c: "Ability of a business to handle growing amount of work/sales profitably" },
            { q: "Incubators help startups by providing", o: ["Office space", "Mentorship", "Networking opportunities", "All of the above"], c: "All of the above" },
            { q: "Accelerators focus on", o: ["Slow growth", "Rapid growth through intensive short-term programs", "Long term research", "Liquidation"], c: "Rapid growth through intensive short-term programs" },
            { q: "Intellectual Property Rights (IPR) include", o: ["Patents", "Trademarks", "Copyrights", "All of the above"], c: "All of the above" },
            { q: "Patent is granted for", o: ["Brand name", "Inventions", "Literary work", "Logo"], c: "Inventions" },
            { q: "Trademark protects", o: ["Inventions", "Symbols, names and logos used in commerce", "Software code", "Secrets"], c: "Symbols, names and logos used in commerce" },
            { q: "Copyright is for", o: ["Inventions", "Original works of authorship (books, music, etc.)", "Process design", "Chemical formula"], c: "Original works of authorship (books, music, etc.)" },
            { q: "Crowdfunding is", o: ["Raising money from a large number of people via internet", "Bank loan", "IPO", "Private placement"], c: "Raising money from a large number of people via internet" },
            { q: "Exit strategy for an entrepreneur includes", o: ["IPO", "Acquisition", "Buyback", "All of the above"], c: "All of the above" },
            { q: "Seed capital is", o: ["Late stage funding", "Initial capital used to start a business", "Working capital", "Debt"], c: "Initial capital used to start a business" },
            { q: "Startup India scheme was launched in", o: ["2014", "2015", "2016", "2017"], c: "2016" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "Which of the following is a component of the Marketing Mix?", o: ["Product", "Price", "Place", "All of the above"], c: "All of the above" },
            { q: "Digital marketing includes", o: ["SEO", "Content marketing", "Email marketing", "All of the above"], c: "All of the above" },
            { q: "Search Engine Optimization (SEO) aims to", o: ["Increase visibility in organic search results", "Pay for ads", "Send spam emails", "None of the above"], c: "Increase visibility in organic search results" },
            { q: "B2B stands for", o: ["Business to Bank", "Business to Business", "Back to Business", "Bank to Business"], c: "Business to Business" },
            { q: "B2C stands for", o: ["Business to Customer", "Business to Corporate", "Bank to Customer", "None of the above"], c: "Business to Customer" },
            { q: "Social entrepreneurship aims to", o: ["Maximize profit only", "Address social problems through business models", "Avoid taxes", "Only do charity"], c: "Address social problems through business models" },
            { q: "Intrapreneurship means", o: ["Starting a firm outside", "Entrepreneurship within an existing organization", "A small business", "None of the above"], c: "Entrepreneurship within an existing organization" },
            { q: "Equity dilution occurs when", o: ["New shares are issued reducing the percentage ownership of existing shareholders", "Shares are bought back", "Face value increases", "Profit decreases"], c: "New shares are issued reducing the percentage ownership of existing shareholders" },
            { q: "Term sheet is a", o: ["Final contract", "Non-binding agreement setting forth basic terms and conditions of investment", "List of employees", "Audit report"], c: "Non-binding agreement setting forth basic terms and conditions of investment" },
            { q: "Due diligence is", o: ["An investigation/audit of a potential investment", "Paying tax", "Hiring a clerk", "None of the above"], c: "An investigation/audit of a potential investment" },
            { q: "Pre-money valuation is value of company", o: ["After investment", "Before investment", "At liquidation", "At IPO"], c: "Before investment" },
            { q: "Post-money valuation =", o: ["Pre-money valuation + Investment amount", "Pre-money valuation - Investment", "Only investment", "None of the above"], c: "Pre-money valuation + Investment amount" },
            { q: "Unicorn startup is one with valuation over", o: ["$ 1 million", "$ 1 billion", "$ 10 billion", "₹ 100 crore"], c: "$ 1 billion" },
            { q: "Series A funding usually follows", o: ["Series B", "Seed round", "IPO", "Acquisition"], c: "Seed round" },
            { q: "Market segmentation involves", o: ["Dividing market into distinct groups of buyers", "Closing branches", "Reducing price", "None of the above"], c: "Dividing market into distinct groups of buyers" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "Unique Selling Proposition (USP) is", o: ["Lowest price", "The factor that makes a product different and better than competitors", "Standard product", "None of the above"], c: "The factor that makes a product different and better than competitors" },
            { q: "Supply chain management is", o: ["Internal production only", "Management of the flow of goods and services from origin to consumption", "Only shipping", "None of the above"], c: "Management of the flow of goods and services from origin to consumption" },
            { q: "Inventory turnover ratio measures", o: ["Profit", "Efficiency in managing inventory", "Total assets", "Liabilities"], c: "Efficiency in managing inventory" },
            { q: "Customer Relationship Management (CRM) helps in", o: ["Reducing staff", "Retaining customers and improving loyalty", "Ignoring complaints", "None of the above"], c: "Retaining customers and improving loyalty" },
            { q: "E-commerce refers to", o: ["Buying and selling goods/services over internet", "Physical stores", "Door to door sales", "None of the above"], c: "Buying and selling goods/services over internet" },
            { q: "Startup ecosystem includes", o: ["Startups", "Investors", "Mentors", "All of the above"], c: "All of the above" },
            { q: "Design thinking process includes", o: ["Empathize", "Define", "Ideate", "All of the above"], c: "All of the above" },
            { q: "Prototyping is a part of", o: ["Sales", "Product development", "Auditing", "Accounting"], c: "Product development" },
            { q: "Pitch deck is used for", o: ["Daily operations", "Presenting business to potential investors", "Internal filing", "Tax report"], c: "Presenting business to potential investors" },
            { q: "Break-even point is where", o: ["Profit is maximum", "Total Revenue = Total Cost", "Sales are zero", "Fixed costs are zero"], c: "Total Revenue = Total Cost" },
            { q: "Fixed costs", o: ["Vary with production", "Remain constant regardless of production level", "Are always zero", "None of the above"], c: "Remain constant regardless of production level" },
            { q: "Variable costs", o: ["Remain constant", "Vary with the level of production", "Are only for management", "None of the above"], c: "Vary with the level of production" },
            { q: "Contribution margin =", o: ["Sales - Fixed Cost", "Sales - Variable Cost", "Sales - Total Cost", "None of the above"], c: "Sales - Variable Cost" },
            { q: "Cash flow statement tracks", o: ["Profit only", "Inflow and outflow of cash", "Assets", "Liabilities"], c: "Inflow and outflow of cash" },
            { q: "Net income is", o: ["Gross profit", "Revenue minus all expenses and taxes", "Total sales", "None of the above"], c: "Revenue minus all expenses and taxes" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "Working capital =", o: ["Fixed Assets - Liabilities", "Current Assets - Current Liabilities", "Total Assets - Debt", "None of the above"], c: "Current Assets - Current Liabilities" },
            { q: "Solvency refers to", o: ["Short term liquidity", "Long term ability to meet obligations", "Sales volume", "Number of employees"], c: "Long term ability to meet obligations" },
            { q: "Liquidity refers to", o: ["Ability to convert assets into cash quickly to meet short term needs", "Long term debt", "Profitability", "None of the above"], c: "Ability to convert assets into cash quickly to meet short term needs" },
            { q: "The Companies Act 2013 governs", o: ["Partnerships", "Incorporated companies in India", "Sole proprietorships", "None of the above"], c: "Incorporated companies in India" },
            { q: "A One Person Company (OPC) is", o: ["A partnership", "A company with only one member", "An NGO", "None of the above"], c: "A company with only one member" },
            { q: "Private limited company can have a maximum of", o: ["50 members", "200 members", "Unlimited members", "10 members"], c: "200 members" },
            { q: "Public limited company must have at least", o: ["2 directors", "3 directors", "1 director", "5 directors"], c: "3 directors" },
            { q: "MSME stands for", o: ["Mini, Small, Medium Enterprises", "Micro, Small and Medium Enterprises", "Macro, Small, Medium Enterprises", "None of the above"], c: "Micro, Small and Medium Enterprises" },
            { q: "Udyam registration is for", o: ["Big corporates", "MSMEs", "Banks", "Foreign firms"], c: "MSMEs" },
            { q: "Corporate governance is about", o: ["Accountability and transparency in managing a company", "Only increasing sales", "Reducing staff", "None of the above"], c: "Accountability and transparency in managing a company" },
            { q: "Risk assessment involves", o: ["Ignoring risk", "Identifying and analyzing potential risks", "Taking no risk", "None of the above"], c: "Identifying and analyzing potential risks" },
            { q: "Risk mitigation strategy includes", o: ["Transfer (insurance)", "Avoidance", "Reduction", "All of the above"], c: "All of the above" },
            { q: "Business ethics helps in", o: ["Building reputation and trust", "Reducing taxes illegally", "Cheating customers", "None of the above"], c: "Building reputation and trust" },
            { q: "Strategic planning is for", o: ["Day to day tasks", "Long term organizational goals", "Only sales", "None of the above"], c: "Long term organizational goals" },
            { q: "Mission statement describes", o: ["Future vision", "The fundamental purpose of an organization", "Profit target", "None of the above"], c: "The fundamental purpose of an organization" }
        ]
    },
    {
        setName: "Set 7",
        questions: [
            { q: "Vision statement describes", o: ["Current status", "The desired future position of the organization", "Past history", "None of the above"], c: "The desired future position of the organization" },
            { q: "Benchmarking is", o: ["Setting low standards", "Comparing performance with best-in-class", "Ignoring competitors", "None of the above"], c: "Comparing performance with best-in-class" },
            { q: "TQM stands for", o: ["Total Quality Management", "Technical Quality Method", "Total Quantity Management", "None of the above"], c: "Total Quality Management" },
            { q: "Six Sigma methodology is used for", o: ["Process improvement and variation reduction", "Increasing cost", "Complex design only", "None of the above"], c: "Process improvement and variation reduction" },
            { q: "Kanban is a", o: ["Japanese word for sign", "Visual system for managing work as it moves through a process", "Method of accounting", "Both (a) and (b)"], c: "Both (a) and (b)" },
            { q: "Kaizen means", o: ["Sudden change", "Continuous improvement", "Fixed standard", "None of the above"], c: "Continuous improvement" },
            { q: "Value chain analysis identifies", o: ["Value-creating activities", "Non-value creating activities", "Competitive advantage", "All of the above"], c: "All of the above" },
            { q: "Inbound logistics includes", o: ["Manufacturing", "Receiving, storing and distributing inputs", "Marketing", "After sales service"], c: "Receiving, storing and distributing inputs" },
            { q: "Outbound logistics includes", o: ["Raw material storage", "Collecting, storing and distributing products to buyers", "Manufacturing", "Hiring"], c: "Collecting, storing and distributing products to buyers" },
            { q: "Porter's Five Forces model analyzes", o: ["Internal staff", "Industry competition and attractiveness", "Global weather", "None of the above"], c: "Industry competition and attractiveness" },
            { q: "Threat of new entrants is one of", o: ["SWOT", "Porter's Five Forces", "PESTEL", "None of the above"], c: "Porter's Five Forces" },
            { q: "Bargaining power of suppliers is high if", o: ["There are many suppliers", "There are few suppliers and no substitutes", "The buyer is very big", "None of the above"], c: "There are few suppliers and no substitutes" },
            { q: "Threat of substitutes affects", o: ["Profitability", "Product price", "Demand", "All of the above"], c: "All of the above" },
            { q: "A 'Niche' market is a", o: ["Mass market", "Specialized segment of a larger market", "Global market", "None of the above"], c: "Specialized segment of a larger market" },
            { q: "Target marketing focuses on", o: ["Everyone", "Specific group of customers", "Only government", "None of the above"], c: "Specific group of customers" }
        ]
    },
    {
        setName: "Set 8",
        questions: [
            { q: "A 'Value Proposition' is", o: ["Price list", "Promise of value to be delivered to customer", "Discount offer", "None of the above"], c: "Promise of value to be delivered to customer" },
            { q: "Viral marketing uses", o: ["Traditional TV ads", "Social networks to spread information about a product rapidly", "Door to door sales", "None of the above"], c: "Social networks to spread information about a product rapidly" },
            { q: "Influencer marketing involves", o: ["Using famous people to promote products", "Cold calling", "Billboard ads", "None of the above"], c: "Using famous people to promote products" },
            { q: "Guerilla marketing is", o: ["Massive budget campaign", "Unconventional and low-cost marketing strategy", "Government marketing", "None of the above"], c: "Unconventional and low-cost marketing strategy" },
            { q: "Brand equity is", o: ["Price of the product", "Value of the brand name in the market", "Number of stores", "None of the above"], c: "Value of the brand name in the market" },
            { q: "Market share is", o: ["Total profit", "Percentage of total sales in an industry generated by a specific company", "Stock price", "None of the above"], c: "Percentage of total sales in an industry generated by a specific company" },
            { q: "Price skimming is", o: ["Setting low price initially", "Setting high price initially and then lowering it", "Fixed price", "None of the above"], c: "Setting high price initially and then lowering it" },
            { q: "Penetration pricing is", o: ["Setting high price", "Setting low price to gain market share rapidly", "Premium pricing", "None of the above"], c: "Setting low price to gain market share rapidly" },
            { q: "Freemium model offers", o: ["Only paid services", "Basic services for free and advanced features for a fee", "Everything for free", "None of the above"], c: "Basic services for free and advanced features for a fee" },
            { q: "SaaS stands for", o: ["Software as a Service", "System as a Service", "Service as a Software", "None of the above"], c: "Software as a Service" },
            { q: "Fintech refers to", o: ["Financial Technology", "Film Technology", "Fitness Technology", "None of the above"], c: "Financial Technology" },
            { q: "Edtech refers to", o: ["Educational Technology", "Editing Technology", "Economy Technology", "None of the above"], c: "Educational Technology" },
            { q: "Healthtech refers to", o: ["Healthy Technology", "Healthcare Technology", "Heating Technology", "None of the above"], c: "Healthcare Technology" },
            { q: "Agritech refers to", o: ["Agricultural Technology", "Agreement Technology", "Age Technology", "None of the above"], c: "Agricultural Technology" },
            { q: "Startup ecosystem enablers include", o: ["Policy makers", "Academic institutions", "Media", "All of the above"], c: "All of the above" }
        ]
    },
    {
        setName: "Set 9",
        questions: [
            { q: "Incubators focus on", o: ["Late stage startups", "Early stage startups/ideation", "Liquidating firms", "None of the above"], c: "Early stage startups / ideation" },
            { q: "Accelerators provide", o: ["Fixed capital", "Seed investment and mentoring in a time-bound program", "Long term loans", "None of the above"], c: "Seed investment and mentoring in a time-bound program" },
            { q: "Co-working spaces offer", o: ["Shared office environment", "Isolation", "Only virtual presence", "None of the above"], c: "Shared office environment" },
            { q: "Demo Day is when", o: ["Startups close", "Startups pitch their businesses to a large audience of investors", "Employees strike", "None of the above"], c: "Startups pitch their businesses to a large audience of investors" },
            { q: "A 'Hustler' in a startup team is", o: ["The coder", "The business and sales lead", "The designer", "The lawyer"], c: "The business and sales lead" },
            { q: "A 'Hacker' in a startup team is", o: ["The thief", "The technical lead/developer", "The manager", "None of the above"], c: "The technical lead / developer" },
            { q: "A 'Hipster' in a startup team is", o: ["The designer and user experience lead", "The technical lead", "The business lead", "None of the above"], c: "The designer and user experience lead" },
            { q: "Burn rate calculation: (Starting Balance - Ending Balance) / Number of Months", o: ["True", "False", "Partially true", "None of these"], c: "True" },
            { q: "Cash runway = Cash Balance / ......", o: ["Profit", "Monthly Burn Rate", "Sales", "Assets"], c: "Monthly Burn Rate" },
            { q: "Customer Acquisition Cost (CAC) =", o: ["Total Marketing Spend / Number of New Customers Acquired", "Sales / Employees", "Profit / Capital", "None of the above"], c: "Total Marketing Spend / Number of New Customers Acquired" },
            { q: "Lifetime Value (LTV) of a customer is", o: ["One month's revenue", "Total revenue expected from a customer during the entire relationship", "Cost of acquiring customer", "None of the above"], c: "Total revenue expected from a customer during the entire relationship" },
            { q: "LTV/CAC ratio is used to measure", o: ["Marketing efficiency and business viability", "Weight of the product", "Office area", "None of the above"], c: "Marketing efficiency and business viability" },
            { q: "Churn rate is", o: ["Speed of growth", "Rate at which customers stop doing business with an entity", "Profit rate", "None of the above"], c: "Rate at which customers stop doing business with an entity" },
            { q: "Stickiness refers to", o: ["Low usage", "How frequently users return to a product/app", "Cost of raw material", "None of the above"], c: "How frequently users return to a product / app" },
            { q: "Gamification involves", o: ["Closing games", "Applying game-design elements and principles in non-game contexts", "Only playing games", "None of the above"], c: "Applying game-design elements and principles in non-game contexts" }
        ]
    },
    {
        setName: "Set 10",
        questions: [
            { q: "A 'Pivot' can be", o: ["Customer segment pivot", "Platform pivot", "Technology pivot", "All of the above"], c: "All of the above" },
            { q: "Validated learning is", o: ["Reading books", "Learning through empirical data collected from real customers", "Guessing", "None of the above"], c: "Learning through empirical data collected from real customers" },
            { q: "Build-Measure-Learn feedback loop is the core of", o: ["Traditional management", "Lean Startup", "Accounting", "Legal"], c: "Lean Startup" },
            { q: "A startup is a ...... organization designed to create a new product or service under conditions of extreme uncertainty.", o: ["Fixed", "Human", "Mechanical", "Static"], c: "Human" },
            { q: "Entrepreneurs should focus on 'Vanity metrics' like total registered users.", o: ["True", "False (Focus on actionable metrics)", "Partially true", "None of these"], c: "False (Focus on actionable metrics)" },
            { q: "Innovation accounting helps in", o: ["Tracking tax", "Measuring progress and setting milestones for startups", "Counting desks", "None of the above"], c: "Measuring progress and setting milestones for startups" },
            { q: "Early adopters are", o: ["People who buy late", "First group of customers to use a new product", "People who hate technology", "None of the above"], c: "First group of customers to use a new product" },
            { q: "Crossing the Chasm refers to", o: ["Failing early", "Moving from early adopters to mainstream market", "Closing the office", "None of the above"], c: "Moving from early adopters to mainstream market" },
            { q: "Disruptive innovation", o: ["Improves existing market", "Creates new market and value network, displacing established market leaders", "Is always small", "None of the above"], c: "Creates new market and value network, displacing established market leaders" },
            { q: "Blue Ocean Strategy focuses on", o: ["Competing in existing space", "Creating uncontested market space", "Fighting for share", "None of the above"], c: "Creating uncontested market space" },
            { q: "Red Ocean represents", o: ["New markets", "Existing industries with intense competition", "Empty space", "None of the above"], c: "Existing industries with intense competition" },
            { q: "First mover advantage refers to", o: ["Buying first", "Competitive advantage gained by the first significant occupant of a market segment", "Selling last", "None of the above"], c: "Competitive advantage gained by the first significant occupant of a market segment" },
            { q: "Network effect occurs when", o: ["A product becomes more valuable as more people use it", "Network fails", "Cost increases", "None of the above"], c: "A product becomes more valuable as more people use it" },
            { q: "A 'Moat' in business refers to", o: ["A physical ditch", "A sustainable competitive advantage that protects a firm from competitors", "Profit", "None of the above"], c: "A sustainable competitive advantage that protects a firm from competitors" },
            { q: "Venture debt is", o: ["Equity", "Loan provided to venture-backed startups", "Grant", "Gift"], c: "Loan provided to venture-backed startups" }
        ]
    },
    {
        setName: "Set 11",
        questions: [
            { q: "Convertible note is", o: ["Cash payment", "Short-term debt that converts into equity during a future financing round", "Fixed deposit", "None of the above"], c: "Short-term debt that converts into equity during a future financing round" },
            { q: "SAFE stands for", o: ["Simple Agreement for Future Equity", "Secure Agreement for Finance and Equity", "Standard Asset for Future Entry", "None of the above"], c: "Simple Agreement for Future Equity" },
            { q: "Cap table shows", o: ["The office layout", "Ownership of the company and equity dilution", "List of machines", "Daily sales"], c: "Ownership of the company and equity dilution" },
            { q: "Cliff in ESOP refers to", o: ["The end of the job", "A period before which no shares are vested", "A high price", "None of the above"], c: "A period before which no shares are vested" },
            { q: "Vesting period is the time", o: ["To hire staff", "Over which an employee earns the right to their stock options", "To close business", "None of the above"], c: "Over which an employee earns the right to their stock options" },
            { q: "ESOP stands for", o: ["Employee Stock Ownership Plan", "Employee Safety Option Plan", "Economic Stock Option Plan", "None of the above"], c: "Employee Stock Ownership Plan" },
            { q: "Sweat equity shares are issued for", o: ["Cash only", "Providing know-how or making available intellectual property rights", "Loan repayment", "None of the above"], c: "Providing know-how or making available intellectual property rights" },
            { q: "A 'Term Sheet' usually covers", o: ["Valuation", "Control rights", "Liquidation preference", "All of the above"], c: "All of the above" },
            { q: "Drag-along rights allow", o: ["Minority to block sale", "Majority shareholders to force minority shareholders to join in the sale of a company", "No one to sell", "None of the above"], c: "Majority shareholders to force minority shareholders to join in the sale of a company" },
            { q: "Tag-along rights protect", o: ["Majority shareholders", "Minority shareholders by allowing them to join a transaction where majority is selling", "Investors only", "None of the above"], c: "Minority shareholders by allowing them to join a transaction where majority is selling" },
            { q: "Right of First Refusal (ROFR) gives", o: ["Right to say no", "A party the right to purchase shares before they are offered to a third party", "Right to close business", "None of the above"], c: "A party the right to purchase shares before they are offered to a third party" },
            { q: "Anti-dilution provision protects", o: ["Employees", "Investors from equity dilution in case of a 'Down Round'", "Government", "None of the above"], c: "Investors from equity dilution in case of a 'Down Round'" },
            { q: "A 'Down Round' is when", o: ["Stock price goes up", "Valuation of a company is lower than the previous round", "Profit is high", "None of the above"], c: "Valuation of a company is lower than the previous round" },
            { q: "Board of Directors is responsible for", o: ["Directing and supervising the management of a company", "Only selling goods", "Cleaning the office", "None of the above"], c: "Directing and supervising the management of a company" },
            { q: "Quorum for a board meeting is usually", o: ["All directors", "1/3rd of total strength or 2 directors, whichever is higher", "Only 1", "None of the above"], c: "1/3rd of total strength or 2 directors, whichever is higher" }
        ]
    },
    {
        setName: "Set 12",
        questions: [
            { q: "Memorandum of Association (MOA) contains", o: ["Rules for daily management", "The fundamental conditions under which a company is incorporated", "Employee list", "Audit report"], c: "The fundamental conditions under which a company is incorporated" },
            { q: "Articles of Association (AOA) contains", o: ["External objectives", "Rules and regulations for the internal management of a company", "Capital structure only", "None of the above"], c: "Rules and regulations for the internal management of a company" },
            { q: "Certificate of Incorporation is", o: ["A simple paper", "Conclusive evidence that the company is duly registered", "A tax bill", "None of the above"], c: "Conclusive evidence that the company is duly registered" },
            { q: "Company is a 'Separate Legal Entity' means", o: ["Owner and company are one", "The company has its own rights and liabilities separate from its members", "The company cannot own assets", "None of the above"], c: "The company has its own rights and liabilities separate from its members" },
            { q: "Perpetual succession means", o: ["Company dies with owner", "The company's existence is not affected by death or exit of members", "Temporary existence", "None of the above"], c: "The company's existence is not affected by death or exit of members" },
            { q: "Limited liability means", o: ["Members are liable for all debts", "Members' liability is limited to the unpaid amount on their shares", "Liability is zero", "None of the above"], c: "Members' liability is limited to the unpaid amount on their shares" },
            { q: "Ultra vires act is", o: ["Within the powers of company", "Beyond the powers of the company as per its MOA", "A legal act", "None of the above"], c: "Beyond the powers of the company as per its MOA" },
            { q: "Doctrine of Constructive Notice implies", o: ["No one knows public documents", "The public is presumed to have knowledge of the MOA and AOA", "Only internal staff knows", "None of the above"], c: "The public is presumed to have knowledge of the MOA and AOA" },
            { q: "Doctrine of Indoor Management protects", o: ["The company", "Outsiders dealing with the company against internal irregularities", "The government", "None of the above"], c: "Outsiders dealing with the company against internal irregularities" },
            { q: "Lifting the Corporate Veil means", o: ["Closing the company", "Disregarding the separate personality of the company to find real persons behind fraud", "Changing the name", "None of the above"], c: "Disregarding the separate personality of the company to find real persons behind fraud" },
            { q: "The term 'Entrepreneurship' is derived from a French word meaning:", o: ["To take a risk", "To undertake", "To invent", "To manage"], c: "To undertake" },
            { q: "Who among the following has a high 'need for power' besides achievement?", o: ["Intrapreneur", "Manager", "Traditional Entrepreneur", "None of the above"], c: "Manager" },
            { q: "Social entrepreneurship creates:", o: ["Economic Value", "Social Value", "Both Economic and Social Value", "None of the above"], c: "Both Economic and Social Value" },
            { q: "A 'Lifestyle' entrepreneur is one who:", o: ["Wants to build a unicorn", "Builds a business to support a certain level of income and quality of life", "Works for a large firm", "None of the above"], c: "Builds a business to support a certain level of income and quality of life" },
            { q: "The 'Pervasiveness' of entrepreneurship means it is found in:", o: ["Private sector", "Public sector", "Non-profit sector", "All sectors of economy"], c: "All sectors of economy" }
        ]
    },
    {
        setName: "Set 13",
        questions: [
            { q: "Creative destruction is a term associated with:", o: ["Joseph Schumpeter", "Adam Smith", "Karl Marx", "None of the above"], c: "Joseph Schumpeter" },
            { q: "Environmental scanning involves monitoring:", o: ["Internal strengths only", "External opportunities and threats", "Global weather", "None of the above"], c: "External opportunities and threats" },
            { q: "Market gap analysis helps in identifying:", o: ["The distance between shops", "Unmet customer needs in the market", "Total number of employees", "None of the above"], c: "Unmet customer needs in the market" },
            { q: "Brainstorming is used for:", o: ["Generating creative ideas", "Reducing costs", "Firing employees", "None of the above"], c: "Generating creative ideas" },
            { q: "A prototype is a:", o: ["Final product", "Preliminary model of a product", "Theoretical design", "None of the above"], c: "Preliminary model of a product" },
            { q: "The 'Executive Summary' of a business plan is:", o: ["The longest part", "A concise overview of the entire plan", "The list of assets", "None of the above"], c: "A concise overview of the entire plan" },
            { q: "Financial projections in a business plan usually cover:", o: ["1 month", "3-5 years", "10 years", "None of the above"], c: "3-5 years" },
            { q: "An 'Elevator Pitch' should last approximately:", o: ["30-60 seconds", "1 hour", "10 minutes", "None of the above"], c: "30-60 seconds" },
            { q: "SBA in context of entrepreneurship stands for:", o: ["Small Business Administration", "State Business Authority", "Small Business Account", "None of the above"], c: "Small Business Administration" },
            { q: "SIDBI helps in:", o: ["Small Industries Development Bank of India", "Promoting, financing and developing MSMEs", "Managing large scale firms", "None of the above"], c: "Promoting, financing and developing MSMEs" },
            { q: "Mudra loans are provided to:", o: ["Micro enterprises", "Big corporates", "Foreign investors", "None of the above"], c: "Micro enterprises" },
            { q: "In the context of startups, 'Unmet Demand' represents:", o: ["Opportunity", "Threat", "Weakness", "Strength"], c: "Opportunity" },
            { q: "Entrepreneurial 'Mindset' involves:", o: ["Resilience", "Tolerance for ambiguity", "Opportunity seeking", "All of the above"], c: "All of the above" },
            { q: "Venture capitalists look for:", o: ["Low growth", "High growth potential and high risk", "Government guarantee", "None of the above"], c: "High growth potential and high risk" },
            { q: "Pre-seed funding comes from:", o: ["Big VCs", "Founders, friends and family", "Banks", "None of the above"], c: "Founders, friends and family" }
        ]
    },
    {
        setName: "Set 14",
        questions: [
            { q: "The 'A' in SMART goals stands for:", o: ["Actionable", "Achievable", "Actual", "Any"], c: "Achievable" },
            { q: "The 'T' in SMART goals stands for:", o: ["Total", "Technical", "Time-bound", "True"], c: "Time-bound" },
            { q: "Market pull strategy is driven by:", o: ["Technology", "Customer demand", "Production capacity", "None of the above"], c: "Customer demand" },
            { q: "Technology push strategy is driven by:", o: ["Customers", "R&D and new technological capabilities", "Government", "None of the above"], c: "R&D and new technological capabilities" },
            { q: "Iterative process means:", o: ["Doing something once", "Repeating a process to refine outcomes", "Linear movement", "None of the above"], c: "Repeating a process to refine outcomes" },
            { q: "Startup 'Exit' can happen through:", o: ["Merger", "Acquisition", "IPO", "All of the above"], c: "All of the above" },
            { q: "Acqui-hiring is when:", o: ["A company is bought only for its talent/team", "A company is bought for its product", "Hiring a clerk", "None of the above"], c: "A company is bought only for its talent / team" },
            { q: "A 'Zombie' startup is one that:", o: ["Is growing fast", "Has no growth but enough revenue to survive (slow death)", "Is dead", "None of the above"], c: "Has no growth but enough revenue to survive (slow death)" },
            { q: "Business Model Canvas (BMC) has how many building blocks?", o: ["5", "7", "9", "12"], c: "9" },
            { q: "One of the blocks in BMC is:", o: ["Value Propositions", "Employee Salary", "Office Color", "None of the above"], c: "Value Propositions" },
            { q: "Customer Segments is a part of:", o: ["BMC", "Audit", "Law", "None of the above"], c: "BMC" },
            { q: "Revenue Streams describes:", o: ["Costs", "How a company makes money from each customer segment", "Loans", "None of the above"], c: "How a company makes money from each customer segment" },
            { q: "Key Resources in BMC include:", o: ["Physical", "Intellectual", "Human", "All of the above"], c: "All of the above" },
            { q: "Cost Structure identifies:", o: ["Sales", "All costs incurred to operate a business model", "Profit", "None of the above"], c: "All costs incurred to operate a business model" },
            { q: "Channels in BMC refers to:", o: ["TV channels", "Touch points through which a company communicates with and reaches customers", "Radio", "None of the above"], c: "Touch points through which a company communicates with and reaches customers" }
        ]
    },
    {
        setName: "Set 15",
        questions: [
            { q: "Sustainable development meets the needs of present without compromising future generations.", o: ["True", "False", "Partially true", "None of these"], c: "True" },
            { q: "Triple Bottom Line focuses on People, Planet and:", o: ["Product", "Profit", "Place", "Purpose"], c: "Profit" },
            { q: "Green entrepreneurship focuses on:", o: ["Eco-friendly products and processes", "Only profit", "Cheating", "None of the above"], c: "Eco-friendly products and processes" },
            { q: "CSR is mandatory for companies in India with net profit over:", o: ["₹ 1 crore", "₹ 5 crore", "₹ 100 crore", "₹ 500 crore"], c: "₹ 5 crore" },
            { q: "Which of the following is not a primary activity in Value Chain?", o: ["Operations", "Inbound Logistics", "Firm Infrastructure", "Marketing"], c: "Firm Infrastructure" },
            { q: "Support activities in Value Chain include:", o: ["Procurement", "Service", "Sales", "None of the above"], c: "Procurement" },
            { q: "Technology development is a:", o: ["Primary activity", "Support activity", "Non-value activity", "None of the above"], c: "Support activity" },
            { q: "HR management is a:", o: ["Primary activity", "Support activity", "Direct activity", "None of the above"], c: "Support activity" },
            { q: "Margin in value chain represents:", o: ["Total cost", "Difference between total value and total cost", "Sales only", "None of the above"], c: "Difference between total value and total cost" },
            { q: "Customer satisfaction is a:", o: ["Lag indicator", "Lead indicator", "Both", "None"], c: "Lag indicator" },
            { q: "Employee training is a:", o: ["Lag indicator", "Lead indicator", "Static indicator", "None"], c: "Lead indicator" },
            { q: "Churn rate is a:", o: ["Lag indicator", "Lead indicator", "Profit measure", "None"], c: "Lag indicator" },
            { q: "NPS stands for:", o: ["Net Profit Score", "Net Promoter Score", "National Payment System", "None of the above"], c: "Net Promoter Score" },
            { q: "A high NPS indicates:", o: ["Customer dissatisfaction", "Customer loyalty and willingness to recommend", "High cost", "None of the above"], c: "Customer loyalty and willingness to recommend" },
            { q: "Unit economics looks at:", o: ["Total company profit", "Direct revenues and costs of a single unit/customer", "Global economy", "None of the above"], c: "Direct revenues and costs of a single unit / customer" }
        ]
    },
    {
        setName: "Set 16",
        questions: [
            { q: "The term 'Outbound Marketing' includes:", o: ["SEO", "TV commercials, Radio ads, Billboards", "Content marketing", "None of the above"], c: "TV commercials, Radio ads, Billboards" },
            { q: "Inbound marketing attracts customers through:", o: ["Cold calling", "Creating valuable content and experiences tailored to them", "Spam", "None of the above"], c: "Creating valuable content and experiences tailored to them" },
            { q: "Permission marketing requires:", o: ["Government permission", "Getting customer's consent before sending marketing info", "No permission", "None of the above"], c: "Getting customer's consent before sending marketing info" },
            { q: "A 'Funnel' in marketing tracks:", o: ["The customer journey from awareness to purchase", "Water flow", "Employees", "None of the above"], c: "The customer journey from awareness to purchase" },
            { q: "Top of the Funnel (TOFU) focuses on:", o: ["Closing sale", "Awareness", "Retention", "None of the above"], c: "Awareness" },
            { q: "Middle of the Funnel (MOFU) focuses on:", o: ["Consideration and evaluation", "First contact", "Final payment", "None of the above"], c: "Consideration and evaluation" },
            { q: "Bottom of the Funnel (BOFU) focuses on:", o: ["Conversion/Purchase", "Awareness", "None of the above", "Both awareness and evaluation"], c: "Conversion / Purchase" },
            { q: "Content marketing is a pillar of:", o: ["Outbound Marketing", "Inbound Marketing", "Direct Marketing", "None of the above"], c: "Inbound Marketing" },
            { q: "Which type of marketing involves promoting products to consumers without them knowing they are being marketed to?", o: ["Direct Marketing", "Search Engine Marketing", "Stealth Marketing", "Outbound Marketing"], c: "Stealth Marketing" },
            { q: "An athlete wearing a specific brand's clothing without directly advertising it is an example of:", o: ["Video Marketing", "Influencer Marketing", "Stealth Marketing", "Inbound Marketing"], c: "Stealth Marketing" },
            { q: "What is the main focus of Word-of-Mouth Marketing?", o: ["TV Ads", "Creating viral content and referral chains", "Newspaper Ads", "Email Spam"], c: "Creating viral content and referral chains" },
            { q: "Under the Companies Act 2013, how many persons are required to form a Public Company?", o: ["Two or more", "One or more", "Seven or more", "Ten or more"], c: "Seven or more" },
            { q: "Which business form is most suitable for a single individual who wants full control and minimal regulation?", o: ["Partnership", "Private Company", "Sole Proprietorship", "Statutory Company"], c: "Sole Proprietorship" },
            { q: "A Private Company under the Companies Act 2013 must have at least:", o: ["One person", "Seven or more persons", "Two or more persons", "Unlimited persons"], c: "Two or more persons" },
            { q: "Which of the following companies is formed by a special act of Parliament or state assembly?", o: ["Private Company", "Public Company", "Statutory Company", "LLP"], c: "Statutory Company" }
        ]
    },
    {
        setName: "Set 17",
        questions: [
            { q: "Which of the following is an example of a Statutory Company?", o: ["Reliance Industries", "Infosys", "Reserve Bank of India", "Tata Motors"], c: "Reserve Bank of India" },
            { q: "Under a company limited by guarantee, when is a member liable to pay?", o: ["Immediately", "Every month", "Only during loss or winding up", "Never"], c: "Only during loss or winding up" },
            { q: "What is DPIN in the context of LLP registration?", o: ["Direct Partner Info Number", "Designated Partner Identification Number", "Digital Partner Identification Number", "None of the above"], c: "Designated Partner Identification Number" },
            { q: "Which form is used for the reservation of name of the proposed LLP?", o: ["Form-2", "Form-3", "Form-1", "Form-4"], c: "Form-1" },
            { q: "How many name choices can be proposed for an LLP registration?", o: ["One", "Three", "Two", "Unlimited"], c: "Two" },
            { q: "Limited Liability Partnership combines features of:", o: ["Sole proprietorship and company", "Partnership and Company", "Trust and NGO", "None of the above"], c: "Partnership and Company" },
            { q: "The liability of partners in an LLP is:", o: ["Unlimited", "Limited to their contribution", "Joint and several without limit", "None of the above"], c: "Limited to their contribution" },
            { q: "Startup 'Incubation' provides support for:", o: ["10 years", "Usually 1-3 years during early stage", "Only after IPO", "None of the above"], c: "Usually 1-3 years during early stage" }
        ]
    }
];