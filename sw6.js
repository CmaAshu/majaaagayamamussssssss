// --- DATA: Term-wise MCQ Sets from CMA Financial Accounting (2017-2025) ---
const quizSets = [
    {
        setName: "June 2017",
        questions: [
            { q: "1. Creditors ledger adjustment account is opened in", o: ["General Ledger", "Debtors Ledger", "Creditors Ledger", "Either (B) or (C)"], c: "General Ledger" },
            { q: "2. Receipts and Payments account is a", o: ["Nominal Account", "Real Account", "Personal Account", "Artificial Personal Account"], c: "Real Account" },
            { q: "3. A resource owned by the business with purpose of using it for generating future profit, is known as", o: ["Capital", "Asset", "Liability", "Surplus"], c: "Asset" },
            { q: "4. Outward Invoice issued is a source document of", o: ["Purchase Book", "Sales Book", "Return Inward Book", "Return Outward Book"], c: "Sales Book" },
            { q: "5. Which of the following is of capital nature?", o: ["Commission on purchases", "Cost of repairs", "Rent of factory", "Wages paid for installation of machinery"], c: "Wages paid for installation of machinery" },
            { q: "6. If any stock is taken by a co-venturer, it will be treated as", o: ["an income of the joint venture", "an expense of the joint venture", "to be ignored from joint venture", "it will be treated in the personal books of the co-venturer"], c: "an income of the joint venture" },
            { q: "7. Contingent liability would appear", o: ["on the liability side of the Balance Sheet", "on the assets side of the Balance Sheet", "do not shown in the books of accounts", "as a note in Balance Sheet"], c: "as a note in Balance Sheet" },
            { q: "8. Income statement of a Charitable Institution is known as", o: ["Statement of profit and loss", "Receipts and Payments Account", "Income and Expenditure Account", "Profit and Loss Account"], c: "Income and Expenditure Account" },
            { q: "9. Which of the following account is mainly prepared at the time of dissolution of the firm", o: ["Revaluation A/c", "Goodwill A/c", "Realization A/c", "Memorandum Revaluation A/c"], c: "Realization A/c" },
            { q: "10. Advertisement expenses are apportioned among departments in the proportion of", o: ["sales of each department", "purchases of each department", "no. of units sold by each department", "cost of sales of each department"], c: "sales of each department" }
        ]
    },
    {
        setName: "December 2017",
        questions: [
            { q: "1. If an employee of the business files a legal suit on business, it is considered in the books as a", o: ["Legal Expense", "Liability", "Contingent Asset", "Contingent Liability"], c: "Contingent Liability" },
            { q: "2. At the end of the accounting year the capital expenditures are shown in the", o: ["assets side of the Balance Sheet", "liabilities side of the Balance Sheet", "debit side of the Profit and Loss A/c", "credit side of the Profit and Loss A/c"], c: "assets side of the Balance Sheet" },
            { q: "3. Which of the following is not a method of charging depreciation?", o: ["Sinking Fund Method", "Sum of years Digit Method", "Working hours Method", "Asset's Life-cycle Method"], c: "Asset's Life-cycle Method" },
            { q: "4. If average inventory is ₹1,25,000 and closing inventory is ₹10,000 less than opening inventory then the value of closing inventory will be", o: ["₹1,35,000", "₹1,15,000", "₹1,30,000", "₹1,20,000"], c: "₹1,20,000" },
            { q: "5. The Accommodation bill is drawn", o: ["to finance actual purchase or sale of goods", "to facilitate trade transmission", "when both parties are in need of funds", "None of the above"], c: "when both parties are in need of funds" },
            { q: "6. Balance of X's account in creditors ledger is transferred to X's account in debtors ledger, in this case", o: ["X's account in debtors ledger will be debited", "X's account in creditors ledger will be debited", "Suspense account will be debited", "None of the above"], c: "X's account in creditors ledger will be debited" },
            { q: "7. Ground rent or surface rent means", o: ["Minimum rent", "Maximum royalty payable", "Minimum royalty payable", "Fixed rent payable in addition to minimum rent"], c: "Fixed rent payable in addition to minimum rent" },
            { q: "8. Accounting standard in India are issued by", o: ["Government of India", "Reserve Bank of India", "The Institute of Chartered Accountants of India", "The Institute of Accounting Standard of India"], c: "The Institute of Chartered Accountants of India" },
            { q: "9. As on 31st March, 2017 debtors; and additional bad debts are ₹8,00,000 and ₹10,000 respectively. If the provision for bad debts is made at 5% on debtors then amount of such provision will be", o: ["₹40,000", "₹50,000", "₹39,500", "₹40,500"], c: "₹39,500" },
            { q: "10. Income and Expenditure Account is a", o: ["Nominal Account", "Real Account", "Personal Account", "Artificial Personal Account"], c: "Nominal Account" }
        ]
    },
    {
        setName: "June 2018",
        questions: [
            { q: "1. Which of the following is not a Qualitative Characteristics of Financial Statement?", o: ["Cost Principle", "Understandability", "Relevance", "Reliability"], c: "Cost Principle" },
            { q: "2. Name the book in which, entries are recorded on the basis of credit notes issued.", o: ["Sales Book", "Purchase Book", "Sales Return Book", "Purchase Return Book"], c: "Sales Return Book" },
            { q: "3. Exception to consistency principle is", o: ["Cost Principle", "Going Concern Principle", "Matching Principle", "Prudence Principle"], c: "Prudence Principle" },
            { q: "4. Interest charged by vendor in Hire Purchase System, is calculated on the basis of", o: ["Outstanding hire purchase price", "Outstanding cash price", "Instalment amount", "Cost price of the asset"], c: "Outstanding cash price" },
            { q: "5. The balance in consignment account shows", o: ["Amount receivable from consignee", "Amount payable to consignee", "Profit/loss on consignment", "Closing stock with consignee"], c: "Profit/loss on consignment" },
            { q: "6. Provision for bad debts is", o: ["Real Account", "Nominal account", "Personal account", "None of the above"], c: "Personal account" },
            { q: "7. The business is treated as distinct and separate from its owners on the basis of the", o: ["Going concern concept", "Conservatism concept", "Matching concept", "Business entity concept"], c: "Business entity concept" },
            { q: "8. Due to retrospective effect on revision of salary of employees, the arrears of salary relating to past years, payable in current year is", o: ["Prior period item", "Extraordinary item", "Ordinary item requiring separate disclosure", "Contingent item"], c: "Ordinary item requiring separate disclosure" },
            { q: "9. Discount given in the Sales - Invoice itself is", o: ["Cash discount", "Trade discount", "Rebate", "Allowance"], c: "Trade discount" },
            { q: "10. Canteen expenses are apportioned among departments in the proportion of", o: ["Departmental floor space", "Departmental direct wages", "Departmental sales", "Departmental No. of employees"], c: "Departmental No. of employees" }
        ]
    },
    {
        setName: "December 2018",
        questions: [
            { q: "1. Both cash and credit transactions are recorded, on the basis of", o: ["Accounting Period Concept", "Going Concern Concept", "Business Entity Concept", "Accrual Concept"], c: "Accrual Concept" },
            { q: "2. Which of the following book is both a journal and a ledger?", o: ["Cash Book", "Sales Day Book", "Bills Receivable Book", "Journal Proper"], c: "Cash Book" },
            { q: "3. Interest received in advance account is a", o: ["Nominal Account", "Real Account", "Artificial Personal Account", "Representative Personal Account"], c: "Representative Personal Account" },
            { q: "4. Shiva draws a bill on Sanat on 25th October, 2018 for 90 days, the maturity date of the bill will be", o: ["27th January, 2019", "26th January, 2019", "25th January, 2019", "28th January, 2019"], c: "25th January, 2019" },
            { q: "5. Peeru and Simu are entered in the business of buy and sale of food grain for a period of one year and sharing the profit in the ratio of 3: 2, this agreement is a", o: ["Partnership", "Consignment", "Joint-venture", "Lease"], c: "Joint-venture" },
            { q: "6. At the end of the year 2017-18, Prepaid Insurance Premium ₹7,500 appeared in the Trial Balance, it will be shown", o: ["only in Profit & Loss Account", "only in Balance Sheet", "both in Profit & Loss Account and in Balance Sheet", "not in Both in Profit & Loss Account and in Balance Sheet"], c: "only in Balance Sheet" },
            { q: "7. Contingent Liability would appear", o: ["on the liabilities side of the Balance Sheet", "on the assets side of the Balance Sheet", "as a note in the Balance Sheet", "None of the above"], c: "as a note in the Balance Sheet" },
            { q: "8. Debtors Ledger Adjustment Account is opened in the", o: ["Debtors Ledger", "Creditors Ledger", "General Ledger", "Both Creditors Ledger and General Ledger"], c: "General Ledger" },
            { q: "9. Generally sacrifice ratio is concerned with the situation of", o: ["Admission of a new partner", "Retirement of a partner", "Dissolution of firm", "Conversion of firm into company"], c: "Admission of a new partner" },
            { q: "10. KCS purchased a machine from JPS on hire purchase system, whose cash price was 8,64,000. ₹2,16,000 being paid on delivery and balance in three annual instalments of 2,88,000 each. The amount of interest included in first installment would be", o: ["₹72,000", "₹57,600", "₹1,08,000", "₹36,000"], c: "₹1,08,000" }
        ]
    },
    {
        setName: "June 2019",
        questions: [
            { q: "1. Which of the following is a resource owned by the business with the purpose of using it for generating future profits?", o: ["Loan from Bank", "Owner's Capital", "Trade Mark", "All of the above"], c: "Trade Mark" },
            { q: "2. Chandu & Co.'s Account is a", o: ["Real Account", "Nominal Account", "Representative Personal Account", "Artificial Personal Accounts"], c: "Artificial Personal Accounts" },
            { q: "3. Purchase of a laptop for office use wrongly debited to Purchase Account. It is an error of", o: ["Omission", "Commission", "Principle", "Misposting"], c: "Principle" },
            { q: "4. Which of the following term is most suitable for writing off Patent?", o: ["Depletion", "Amortization", "Depreciation", "All of the above"], c: "Amortization" },
            { q: "5. Memorandum Joint Venture Account is prepared when", o: ["the separate set of books is maintained for Joint Venture", "the each Co-venturer keeps records of all transactions", "the each Co-venturer keeps records of their own transactions only", "All of the above cases"], c: "the each Co-venturer keeps records of their own transactions only" },
            { q: "6. Which of the following commission is allowed by the consignor to the consignee to encourage the consignee for putting-up hard work in introducing new product in the market?", o: ["Del-credere Commission", "Over-riding Commission", "Hard work Commission", "Ordinary Commission"], c: "Over-riding Commission" },
            { q: "7. If Ram's acceptance which was endorsed by us in favour of Saleem is dishonoured, then the amount will be debited in our books to", o: ["Saleem", "Ram", "Bills Receivable Account", "None of the above"], c: "Ram" },
            { q: "8. In case of a Club, the excess of expenditure over income is called as", o: ["Surplus", "Deficit", "Capital Fund", "Investment in Fixed Assets"], c: "Deficit" },
            { q: "9. A Charitable Institution has 250 members with a annual subscription of ₹5,000 each. The subscription received during 2018-19 were ₹11,25,000, which include ₹65,000 and 25,000 for the years of 2017-18 and 2019-20 respectively. Amount of outstanding subscription for the 2018-19 will be", o: ["₹90,000", "₹1,25,000", "₹2,15,000", "₹1,90,000"], c: "₹2,15,000" },
            { q: "10. Items - Historical Cost (Lakh) / Net Realisable Value (Lakh): A: 30/27, B: 15/18, C: 35/35, D: 40/45. The value of Closing Stock will be", o: ["120 Lakh", "125 Lakh", "117 Lakh", "128 Lakh"], c: "117 Lakh" }
        ]
    },
    {
        setName: "December 2019",
        questions: [
            { q: "1. When stock is valued at cost in one accounting period and at lower of cost and Net realizable value in another accounting period", o: ["Prudence Principle conflicts with Consistency Principle", "Matching Principle conflicts with Consistency principle", "Consistency Principle conflicts with Accounting Period Assumption", "None of the above"], c: "Prudence Principle conflicts with Consistency Principle" },
            { q: "2. Materiality Principle is an exception to the", o: ["Consistency principle", "Full disclosure Principle", "Accounting Period Assumption", "Prudence Principle"], c: "Full disclosure Principle" },
            { q: "3. In a Cash Book Debit balance of ₹112 brought forward as credit balance of 121, while preparing a Bank Reconciliation Statement taking the balance as per Cash Book as the starting point:", o: ["₹112 to be added", "121 to be added", "233 to be added", "112 to be subtracted"], c: "233 to be added" },
            { q: "4. ________ represents a potential obligation that could be created depending on the outcome of an event.", o: ["Internal Liability", "Current Liability", "Contingent Liability", "Non-current Liability"], c: "Contingent Liability" },
            { q: "5. Opening Debtors, Collection from Debtors and Discount Allowed were 3,15,000; 18,30,000 and ₹35,000 respectively. If the closing debtors were 20% of credit sales of the period then closing debtors and credit sales would be", o: ["₹3,51,667 and 17,58,333", "₹3,63,333 and ₹18,16,667", "₹3,87,500 and ₹19,37,500", "₹3,10,000 and ₹15,50,000"], c: "₹3,87,500 and ₹19,37,500" },
            { q: "6. Opening Stock ₹2,13,000, Purchase 16,55,000, Sales ₹21,32,000, Carriage Inwards 32,500, Carriage Outwards 38,600, Return Inwards 38,000. If the rate of gross profit is 25% on cost then value of closing stock will be", o: ["₹2,57,800", "₹1,94,900", "₹2,25,300", "₹3,30,000"], c: "₹2,25,300" },
            { q: "7. Provision for Doubtful Debt on 1st April, 2018 was 21,500. During the year 2018-19 the Bad-debt and Recovery of Bad-debt were ₹10,500 and ₹2,100 respectively. Sundry Debtors on 31st March, 2019 were ₹2,25,000. Provision @ 5% on Debtors. Additional Bad-debt of ₹2,500. Provision for doubtful-debt will be", o: ["debited to Profit & Loss Account by 11,250", "debited to Profit & Loss Account by ₹2,625", "debited to Profit & Loss Account by ₹3,000", "debited to Profit & Loss Account by ₹900"], c: "debited to Profit & Loss Account by ₹2,625" },
            { q: "8. A and B enter into joint venture (3:2). A purchased goods ₹2,00,000. B sold 95% for 2,50,000. A's commission 1% on purchase, B's commission 5% on sales. Bill drawn by A on B for 80% of cost, discounted at 1,50,000. What is A's share of profit?", o: ["₹15,300", "₹21,300", "18,900", "None of the above"], c: "₹21,300" },
            { q: "9. Subscription ₹6,25,000 in I&E A/c for year ending 31st March, 2019. O/S: 31-Mar-2018: 55,000, 31-Mar-2019: ₹72,000. Advance: 31-Mar-2018: 31,000, 31-Mar-2019: ₹37,000. Subscription received during 2018-19 was", o: ["₹6,36,000", "₹6,02,000", "₹6,14,000", "₹6,48,000"], c: "₹6,14,000" },
            { q: "10. X and Y are partners with capital of ₹50,000 and ₹30,000. Int. on Capital 10% p.a. Profits earned ₹4,800. Interest on Capital for X and Y will be:", o: ["₹5,000 and ₹3,000", "₹3,000 and ₹1,800", "No interest will be paid to the partners", "None of the above"], c: "₹3,000 and ₹1,800" }
        ]
    },
    {
        setName: "December 2021",
        questions: [
            { q: "1. In hire purchase System, cash price plus interest is known as", o: ["Hire purchase charges", "Capital value of asset", "Hire purchase price of assets", "Book value of asset"], c: "Hire purchase price of assets" },
            { q: "2. Depreciation is calculated from the date of ________.", o: ["Assets put to use", "Purchase of assets", "Assets installed", "Receipts of assets at business premises"], c: "Assets put to use" },
            { q: "3. Debit balance in the cash book is equivalent to ________.", o: ["Overdraft as per cash book", "None of these", "Credit balance as per Passbook", "Overdraft as per passbook"], c: "Overdraft as per passbook" },
            { q: "4. Main elements of the accounting equation are:", o: ["Cash, stock and debtors", "Bank balance, Investments and bills receivable", "Assets, liabilities and capital", "Capital, creditors and bills payable"], c: "Assets, liabilities and capital" },
            { q: "5. A Bill of Exchange cannot be", o: ["Endorsed", "Crossed", "None of these", "Accepted"], c: "None of these" },
            { q: "6. Spent amount on unsuccessful promotion policy is", o: ["Capital expenditure", "Expenses", "Revenue expenditure", "Deferred revenue expenditure"], c: "Revenue expenditure" },
            { q: "7. Convention of Conservatism takes into account:", o: ["All future profits and not losses", "Neither profits nor losses of the future", "All future losses and not profits", "All future profits and losses"], c: "All future losses and not profits" },
            { q: "8. Balance Sheet is prepared with the balances of which of the following?", o: ["All balances in the Ledger", "Balances of real accounts", "Balances of personal accounts", "Balances of personal and real accounts"], c: "Balances of personal and real accounts" },
            { q: "9. Which of these terms/concepts are not relevant to a joint venture?", o: ["Co venturers", "Temporary partnership", "Principal and agent relationship", "Sharing profit and loss of joint ventures"], c: "Principal and agent relationship" },
            { q: "10. Excess of minimum rent over royalty payable is known as", o: ["Minimum royalty payable", "Deficiency of actual royalty", "Excess working", "Short working"], c: "Short working" },
            { q: "11. Sold goods list price ₹8000 at 10% trade discount and 2% cash discount. 25% received. Amount posted to discount account will be:", o: ["₹144 on credit side", "36 on debit side", "144 on debit side", "₹40 on credit side"], c: "144 on debit side" },
            { q: "12. Revenue from ________ is recognised as per AS-9", o: ["Construction contract", "Lease agreement", "Insurance contract", "Rendering the services"], c: "Rendering the services" },
            { q: "13. Bills payable honoured during the year, will be debited to ________.", o: ["None of these", "Creditors account", "Bills payable account", "Cash account"], c: "Creditors account" },
            { q: "14. Which of the following is not an essential feature of a partnership firm?", o: ["Mutual agency", "Existence of business", "Association of two or more people", "Compulsory registration"], c: "Compulsory registration" },
            { q: "15. Sacrificing ratio is ________.", o: ["New Profit sharing ratio - old profit sharing ratio", "Equal to old profit sharing ratio", "Equal", "Old profit sharing ratio - new profit sharing ratio"], c: "Old profit sharing ratio - new profit sharing ratio" },
            { q: "16. Which of the following statements is not correct?", o: ["Bad debts can be less than the amount of provision for doubtful debts", "Bad debts can be more than the amount of provision for doubtful debts", "Provision for doubtful debts account is the amount payable to debtors", "Provision for doubtful debts is shown in the balance sheet"], c: "Provision for doubtful debts account is the amount payable to debtors" },
            { q: "17. Errors are:", o: ["Frauds", "Undetected mistake", "Intentional mistake", "Unintentional mistake"], c: "Unintentional mistake" },
            { q: "18. Choose the correct statement.", o: ["Financial statements need not take into consideration any statutory requirement", "Only credit transactions are recorded in books of accounts", "Financial statements prepared by two different accountants will always show identical results", "Financial accounts, of an enterprise, are treated as evidence in the Court of Law"], c: "Financial accounts, of an enterprise, are treated as evidence in the Court of Law" },
            { q: "19. Which of the following are not the advantages of pre packaged accounting software?", o: ["Report generated", "Simple backup procedure", "Easy to use", "Easy to install"], c: "Report generated" },
            { q: "20. Which of these is/are one of the methods of stock taking?", o: ["Periodic inventory", "Perpetual inventory", "Both", "None"], c: "Both" }
        ]
    },
    {
        setName: "June 2022",
        questions: [
            { q: "1. Select the correct statement:", o: ["Keeping systematic recording of business transaction is not the function of Financial Accounting", "Accounting is concerned with monetary transactions", "Accounting is concerned with past as well as future events", "Business and Businessmen are the same identity from accounting point of view"], c: "Accounting is concerned with monetary transactions" },
            { q: "2. Going concern concept is not followed ________.", o: ["by Bank", "by Cooperative Societies", "Joint Venture Accounting", "Depreciation Accounting"], c: "Joint Venture Accounting" },
            { q: "3. Rectification of which type of errors requires opening of Suspense Account", o: ["Errors of Principle", "Complete Omission", "Partial Omission", "Errors of Commission"], c: "Partial Omission" },
            { q: "4. A buyer returning goods on the ground of poor quality sent a note stating no payment would be made, the return note is called", o: ["Debit note", "Credit note", "Refund note", "Return note"], c: "Debit note" },
            { q: "5. Which of these expenses is/are not included in valuation of abnormal loss?", o: ["Godown Rent", "Freight and Insurance incurred by Consignor", "Transit Insurance incurred by Consignee", "Loading and Unloading expenses incurred by Consignor"], c: "Godown Rent" },
            { q: "6. Goods sold by other co-venturer is debited to", o: ["Joint Venture Account", "Other Co-venturer's Personal Account", "Joint Bank Account", "None of the above"], c: "Other Co-venturer's Personal Account" },
            { q: "7. Sale is recognised as revenue", o: ["when the contract for sale is entered into", "at the point of sale or performance of service", "after the expiry of credit period allowed to Debtors", "after the money collected from the customers"], c: "at the point of sale or performance of service" },
            { q: "8. A and B are partners (3:2). C admitted 1st April 2021. New ratio 4:3:3. W.C.R. ₹90,000. No other info. Capital A/cs will be:", o: ["Cr. A's Capital A/c with ₹60,000 and B's Capital A/c with ₹30,000", "Cr. A's Capital A/c with 54,000 and B's Capital A/c with ₹36,000", "Dr. A's Capital A/c with ₹54,000 and B's Capital A/c with ₹36,000", "Cr. A's Capital A/c with ₹36,000 and B's Capital A/c with 27,000 and C's Capital A/c with 27,000"], c: "Cr. A's Capital A/c with 54,000 and B's Capital A/c with ₹36,000" },
            { q: "9. Case (continued): If a claim for Workmen Compensation is estimated at ₹60,000:", o: ["Cr. A's Capital A/c with 20,000 and B's Capital A/c with ₹10,000", "Dr. A's Capital A/c with 18,000 and B's Capital A/c with ₹12,000", "Cr. A's Capital A/c with ₹18,000 and B's Capital A/c with 12,000", "Cr. A's Capital A/c with 12,000 and B's Capital A/c with ₹9,000 and C's Capital A/c with ₹9,000"], c: "Cr. A's Capital A/c with ₹18,000 and B's Capital A/c with 12,000" },
            { q: "10. Case (continued): If a claim for Workmen Compensation is estimated at 1,50,000:", o: ["Dr. C's Capital with ₹60,000", "Dr. C's Capital A/c with ₹18,000", "Dr. Workmen Compensation Reserve A/c with ₹90,000 and Revaluation A/c with ₹60,000", "Dr. Revaluation A/c with ₹60,000"], c: "Dr. Workmen Compensation Reserve A/c with ₹90,000 and Revaluation A/c with ₹60,000" }
        ]
    },
    {
        setName: "June 2023",
        questions: [
            { q: "1. Which of the following is not a qualitative characteristics of accounting information?", o: ["Reliability", "Materiality", "Comparability", "Understandability"], c: "Materiality" },
            { q: "2. IND-AS are ________.", o: ["rule based accounting standard", "principle based accounting standard", "partially rule based and partially principle based accounting standard", "None of the above"], c: "principle based accounting standard" },
            { q: "3. An increase in which of the following Account will be recorded on the debit side?", o: ["Rent Received Account", "Building Account", "Bills Payable Account", "Capital Account"], c: "Building Account" },
            { q: "4. Trade Discount allowed is deducted from the gross sales. Sale is recorded in the Books of Account at ________.", o: ["gross sales and trade discount separately", "net sales invoice", "None of the above", "Any of (A) or (B)"], c: "Any of (A) or (B)" },
            { q: "5. Rebate is calculated for the period between date of ________.", o: ["payment and maturity date", "drawing and payment of bill", "drawing and maturity date", "None of the above"], c: "drawing and maturity date" },
            { q: "6. Which of the following is not an error of Principle?", o: ["purchase of machinery debited to purchase Account", "sale of old furniture credited to Sales Account", "repairs on the overhauling of existing machinery debited to Machinery Account", "cash received from Rana posted to Jana"], c: "cash received from Rana posted to Jana" },
            { q: "7. Income tax paid by a sole trader is shown ________.", o: ["on the debit side of the Trading Account", "on the debit side of Profit & Loss Account", "as deduction from Capital in the Balance Sheet", "as addition to Capital in the Balance Sheet"], c: "as deduction from Capital in the Balance Sheet" },
            { q: "8. A lease which is generally not cancealable and cover full economic life of the asset is known as ________.", o: ["Sale and lease back", "Operating lease", "Finance lease", "Economic lease"], c: "Finance lease" },
            { q: "9. A charitable Institution has 250 members with an annual subscription of ₹5,000 each. Received ₹11,25,000 (includes 65k for 19-20 and 25k for 21-22). O/S for 20-21 will be:", o: ["₹90,000", "₹1,25,000", "₹2,15,000", "₹1,90,000"], c: "₹2,15,000" },
            { q: "10. X and Y partners (50k/30k). Int. on Cap 10%. Profits ₹4,800. Interest for X and Y will be:", o: ["₹5,000, ₹3,000", "₹3,000, ₹1,800", "No interest will be paid to the partners", "None of the above"], c: "₹3,000, ₹1,800" },
            { q: "11. Which class of account is Consignment Account?", o: ["Personal Account", "Real Account", "Representative Personal Account", "Nominal Account"], c: "Nominal Account" },
            { q: "12. Memorandum Joint Venture Account is prepared when ________.", o: ["the seperate set of books is maintained for Joint Venture", "the each co-venturer keeps records of all transactions", "the each co-venturer keeps records of their own transaction only", "All of the above cases"], c: "the each co-venturer keeps records of their own transaction only" }
        ]
    },
    {
        setName: "December 2023 (Paper 6)",
        questions: [
            { q: "1. Factory building cost 56.5L. Huts for storing materials 45k. Insurance premium 56.5k. Capital and revenue expenditure are:", o: ["Capital Expenditure 57,51,500 and Revenue Expenditure nil", "Capital Expenditure ₹56,95,000 and Revenue Expenditure ₹56,500", "Capital Expenditure ₹56,50,000 and Revenue Expenditure ₹1,01,500", "Capital Expenditure ₹57,23,250 and Revenue Expenditure ₹28,250"], c: "Capital Expenditure ₹56,95,000 and Revenue Expenditure ₹56,500" },
            { q: "2. If a receipt of ₹21,500 for interest has been recorded as payment of 12,500, the profits would show-", o: ["an increase of ₹9,000", "an increase of ₹34,000", "a decrease of ₹9,000", "a decrease of ₹34,000"], c: "a decrease of ₹34,000" },
            { q: "3. Shiva received a bill for ₹58,550 and endorsed to Makkhu. Maturity dishonour, noting charges ₹450 paid by holder. Shiva will debit", o: ["Vijay by ₹58,550", "Vijay by ₹58,100", "Vijay by ₹59,000", "Noting charges account by ₹450"], c: "Vijay by ₹59,000" },
            { q: "4. Joint Venture with XYZ Account, is opened ________.", o: ["when separate set of books is maintained", "when every Co-venturer keeps record his own transactions only", "when every Co-venturer keeps complete record of all transactions", "In all the above situations"], c: "when every Co-venturer keeps record his own transactions only" },
            { q: "5. Debtors ₹6,20,000 before bad debts ₹15,000. Provision for bad debts 5%, provision for discount 2%. Amount of provision for discount on debtors is", o: ["₹12,400", "12,100", "11,495", "11,780"], c: "11,495" },
            { q: "6. Salaries paid ₹4,70,000. O/S on 01.04.22: ₹65,000. O/S for 3 months on 31.03.23. Amount in I&E A/c will be-", o: ["₹5,35,000", "₹4,00,000", "₹5,40,000", "₹4,05,000"], c: "₹5,40,000" },
            { q: "7. Profit before interest and commission: 4,25,250. Interest on loan: 42,000. Manager commission 5% on net profit after charging such commission. Commission will be-", o: ["₹20,250", "21,262.50", "19,162.50", "18,250"], c: "18,250" },
            { q: "8. At the end of the accounting year, advances from customers are ________.", o: ["debited to Profit and Loss account", "credited to Profit and Loss account", "shown in the Balance Sheet as assets", "shown in Balance Sheet as liabilities"], c: "shown in Balance Sheet as liabilities" },
            { q: "9. Debtors ₹7,50,000 before bad debts ₹25,000. Provision for bad debts 5%, provision for discount 2%. Net debtors in balance sheet will be", o: ["₹6,74,250", "₹6,74,975", "₹6,98,250", "₹6,97,500"], c: "₹6,74,975" },
            { q: "10. Salaries O/S and paid in advance info. Paid during year ₹3,30,000. Amount in I&E A/c will be", o: ["₹3,46,500", "₹2,91,500", "₹3,13,500", "₹3,68,500"], c: "₹3,46,500" },
            { q: "11. Stock and sales info provided. Rate of gross profit is 25% on cost. Gross profit will be-", o: ["₹6,05,000", "₹4,75,000", "₹4,84,000", "₹5,93,750"], c: "₹4,75,000" },
            { q: "12. Only items of revenue nature pertaining to the period of accounts are shown in the", o: ["Receipts and Payments Account", "Income and Expenditure Account", "Both (A) and (B)", "Balance Sheet"], c: "Income and Expenditure Account" },
            { q: "13. Excess of Hire-purchase price over the cash price is known as ________.", o: ["Depreciation", "Penalty", "Interest", "Instalment"], c: "Interest" },
            { q: "14. AS-10 is applicable to which one of the following assets?", o: ["Construction Contracts", "Live stock", "Plantation", "Property, Plant and Equipment"], c: "Property, Plant and Equipment" },
            { q: "15. Goods costing ₹2,34,000 sent to Branch at invoice price ₹3,12,000. Loading on Invoice price is ________.", o: ["20%", "25%", "33.33%", "28%"], c: "25%" }
        ]
    },
    {
        setName: "December 2023 (Paper 5)",
        questions: [
            { q: "1. ________ represents a potential obligation that could be created depending on the outcome of an event.", o: ["Internal Liability", "Current Liability", "Contingent Liability", "Non-current Liability"], c: "Contingent Liability" },
            { q: "2. Business is assumed to exist for an indefinite period on the basis of ________.", o: ["Business Entity Concept", "Going Concern Concept", "The Accounting Period Concept", "The Concept of Consistency"], c: "Going Concern Concept" },
            { q: "3. Accounting events can be ________.", o: ["Internal", "External", "Either Internal or External", "Neither Internal nor External"], c: "Either Internal or External" },
            { q: "4. Loss of profit policy calculation. Additional expenses 85k reduced turnover loss of 3.5L. Admissible amount for claim is:", o: ["₹85,000", "₹77,917", "21,250", "₹87,500"], c: "₹77,917" },
            { q: "5. Provision for doubtful debts calculation. Bad debt 10.5k, recovery 2.1k. Debtors 2.25L. Provision 5%. Provision will be:", o: ["debited to Profit and Loss Account by 11,250", "debited to Profit and Loss Account by ₹2,625", "debited to Profit and Loss Account by ₹3,000", "debited to Profit and Loss Account by ₹900"], c: "debited to Profit and Loss Account by ₹2,625" },
            { q: "6. Stock calculation. GP 25% on cost. Value of closing stock will be ________.", o: ["₹2,57,800", "₹1,94,900", "₹3,30,000", "₹2,25,300"], c: "₹2,25,300" },
            { q: "7. Subscription received calculation for 2022-23 based on I&E A/c shown 6.25L.", o: ["₹6,14,000", "₹6,36,000", "₹6,02,000", "₹6,48,000"], c: "₹6,14,000" },
            { q: "8. Debtors and credit sales calculation based on collection 18.3L and closing debtors 20% of sales.", o: ["₹3,51,667 & 17,58,333", "₹3,63,333 & 18,16,667", "₹3,87,500 & 19,37,500", "₹3,10,000 & ₹15,50,000"], c: "₹3,87,500 & 19,37,500" },
            { q: "9. Retirement of B. Unsettled capital 18.5L. Net profit 2.08L. B is entitled to (Sec 37):", o: ["₹1,07,917", "₹69,375", "₹46,250", "₹74,000"], c: "₹74,000" },
            { q: "10. Departmental transfer from A to B at 25% profit on cost. Unrealised profit provision for stock price 25k:", o: ["₹6,250", "₹5,000", "17,000", "None of the above"], c: "₹5,000" }
        ]
    },
    {
        setName: "June 2024",
        questions: [
            { q: "1. Select the correct equation:", o: ["Owners Equity = Assets + Liabilities", "Owners Equity + Outside Liabilities = Total Assets", "Assets + Owner Equity = Outside Liabilities", "Outside Equity + Profit = Total Assets"], c: "Owners Equity + Outside Liabilities = Total Assets" },
            { q: "2. Cash In Hand A/c may have ________.", o: ["Only debit balance", "Only credit balance", "Debt or Credit balance", "All of the above"], c: "Only debit balance" },
            { q: "3. Fundamental accounting assumptions are ________.", o: ["going concern, consistency and accrual", "going concern, money measurement and prudence", "going concern, business entity and accounting period", "going concern, matching and consistency"], c: "going concern, consistency and accrual" },
            { q: "4. Choose the correct statement:", o: ["Errors of principle do not affect agreement of trial balance", "Compensating errors affect trial balance", "One side error does not affect trial balance", "Error of casting is an error of principle"], c: "Errors of principle do not affect agreement of trial balance" },
            { q: "5. Calculate sales: Op. Stock 4k, COGS 30k, Cl. Stock 2k, Dir. Exp 5k, GP 1.5k", o: ["₹28,000", "₹31,500", "₹32,000", "₹33,000"], c: "₹31,500" },
            { q: "6. B.R.S. Cheques issued 15k, presented 10k. How much added to Cash Book balance?", o: ["15,000", "₹10,000", "₹5,000", "₹7,500"], c: "₹5,000" },
            { q: "7. Car 2.5L cost, sold 1L after 2 yrs. Dep 20% WDV. Profit or loss is:", o: ["Profit ₹28,000", "Profit ₹60,000", "Loss ₹60,000", "Loss ₹28,000"], c: "Loss ₹60,000" },
            { q: "8. Fresh bill amount after renewal of 20k bill with 12% interest for 3 months:", o: ["₹20,600", "₹22,400", "21,200", "20,300"], c: "₹20,600" },
            { q: "9. Choose the odd one:", o: ["Premium method", "Revaluation method", "Without raising goodwill account", "Revaluation of unrecorded asset"], c: "Revaluation of unrecorded asset" },
            { q: "10. Operating lease is a ________.", o: ["Revocable Contract", "Non-Revocable Contract", "Operating Contract", "None of the above"], c: "Revocable Contract" },
            { q: "11. State which of the following statement is false:", o: ["Salvage of stock means stock saved during accident", "Unusual items and defective items are separate under insurance claim", "Defective items means goods which cannot fetch the usual rate of gross profit", "Average clause is applicable in case of under insurance"], c: "Unusual items and defective items are separate under insurance claim" },
            { q: "12. A, B, C partners (3:2:1). B retires. Gaining ratio of remaining partners is:", o: ["3:1", "1:2", "2:1", "1:3"], c: "3:1" },
            { q: "13. Dept X to Y at 33.33% profit on cost. Cl. stock of Y is 18k. Stock reserve is:", o: ["₹6,000", "₹4,500", "₹9,000", "None of the above"], c: "₹4,500" },
            { q: "14. Income statement of a Charitable Institution is known as ________.", o: ["Profit and Loss Account", "Receipts & Payments Account", "Income & Expenditure A/c", "Statements of Affairs"], c: "Income & Expenditure A/c" },
            { q: "15. Contingent Liabilities would appear ________.", o: ["on the Liabilities Side", "on the Assets Side", "as a note to Balance Sheet", "None of the above"], c: "as a note to Balance Sheet" }
        ]
    },
    {
        setName: "December 2024",
        questions: [
            { q: "1. A Company is a going concern if ________.", o: ["its Balance Sheet shows a strong Financial Position", "its Income Statement for the current year shows huge Profit", "there is no evidence that it will or will have to cease operations", "its a Public Limited company"], c: "there is no evidence that it will or will have to cease operations" },
            { q: "2. Which errors are not part of Bank reconciliation process?", o: ["Wrong totalling of Bank column of cash book", "Wrong totalling of cash column of cash book", "Posting wrong amount in Bank column", "Omission to carry forward Bank column balance"], c: "Wrong totalling of cash column of cash book" },
            { q: "3. About financial statements: (a) summary of Accounts (b) recorded facts.", o: ["Statement (a) is correct", "Statement (b) is correct", "Both (a) and (b) are correct", "None of the above"], c: "Both (a) and (b) are correct" },
            { q: "4. Accommodation bill 1.8L (2:1). X discounted for 1.69L, remitted 1/3 to Y. Money remitted by X to Y at maturity to honour bill:", o: ["₹1,20,000", "₹1,15,200", "₹1,16,800", "₹1,20,400"], c: "₹1,20,000" },
            { q: "5. Beg. Cap 1L. End Assets 1.5L, Liab 70k. Withdrawals 30k. Net profit/loss was:", o: ["₹10,000 Profit", "₹20,000 Loss", "₹50,000 Loss", "₹10,000 Loss"], c: "₹10,000 Profit" },
            { q: "6. Dep in I&E 8L, u/s 32 is 20L. Prelim exp 1.5L. Tax rate 40%. Deferred tax is:", o: ["Deferred Tax Assets ₹4,20,000", "Deferred Tax Liabilities ₹4,20,000", "Deferred Tax Liabilities 4,80,000", "Deferred Tax Assets ₹4,80,000"], c: "Deferred Tax Liabilities ₹4,20,000" },
            { q: "7. Provision for doubtful debt calculation. Bad debts 19.5k. Debtors 3.25L. Additional bad debt 2.5k. Provision debit to P&L:", o: ["Debited to Profit and Loss Account by ₹16,125", "Debited to Profit and Loss Account by 14,125", "Debited to Profit and Loss Account by ₹18,125", "Debited to Profit and Loss Account by ₹2,000"], c: "Debited to Profit and Loss Account by 14,125" },
            { q: "8. Cost 60k, life 5 yrs, Dep 10k (SLM). Scrap value will be ________.", o: ["₹60,000", "₹10,000", "₹50,000", "₹70,000"], c: "₹10,000" },
            { q: "9. Closing stock valuation for 3 items (X, Y, Z) based on lower of cost or NRV:", o: ["44", "42", "₹38", "None of the above"], c: "₹38" },
            { q: "10. In case of a club, the excess of expenditure over Income is called as ________.", o: ["Surplus", "Deficit", "Capital Fund", "Investment in Fixed Assets"], c: "Deficit" },
            { q: "11. Which statement is not true?", o: ["Acc. P&L / Reserves transferred to old partners", "Memorandum Revaluation for old values", "Profit on Revaluation transferred in equal ratio", "Revaluation Account is a Nominal Account"], c: "Profit on Revaluation transferred in equal ratio" },
            { q: "12. Consignment stock valuation at invoice price for 200 bags (1000 bags sent at 500 each, 800 sold):", o: ["₹1,01,000", "₹1,01,800", "₹1,01,400", "₹1,02,000"], c: "₹1,01,000" },
            { q: "13. Joint venture issue for 2L shares. 90% subscribed, Y took remaining. Sold at 40 premium. Shares taken by Y:", o: ["20,000", "25,000", "18,000", "30,000"], c: "20,000" },
            { q: "14. Match the column: (I) IND AS16, (II) AS 10, (III) AS 12, (IV) IND AS 23", o: ["I-d, II-c, III-a, IV-b", "I-a, II-b, III-c, IV-d", "I-c, II-d, III-b, IV-a", "I-b, II-a, III-d, IV-c"], c: "I-d, II-c, III-a, IV-b" },
            { q: "15. State which of the following statements is correct.", o: ["Stock Debtors System used for independent branch", "Buyer gets possession but not ownership under Installment Payment", "Unusual items and defective items are separate", "Operation lease is a Revocable contract"], c: "Operation lease is a Revocable contract" }
        ]
    },
    {
        setName: "June 2025",
        questions: [
            { q: "1. Which of the following statements is correct?", o: ["Financial accounts are treated as evidence in court", "Results will always be identical between accountants", "Financial statements ignore statutory requirements", "Only credit transactions are recorded"], c: "Financial accounts are treated as evidence in court" },
            { q: "2. When closing stock is shown in trial balance, the closing entry required is:", o: ["Closing Stock A/c Dr. To Trading A/c", "Trading A/c Dr. To Closing Stock A/c", "Either (A) or (B)", "Entry not required"], c: "Entry not required" },
            { q: "3. Classification of foreign currency transactions includes:", o: ["Buying or selling goods priced in foreign currency", "Lending or borrowing in foreign currency", "Acquisition or disposition of fixed assets", "All of the above"], c: "All of the above" },
            { q: "4. Which of the following is not an accounting convention?", o: ["Business entity", "Disclosure", "Conservatism", "Materiality"], c: "Business entity" },
            { q: "5. Bad debts 12.2k, Prov. 7.5k. Further bad debt 1.8k. New provision 5% on 2L debtors. Provision in Balance Sheet will be:", o: ["₹9,910", "₹4,210", "₹12,000", "None of the above"], c: "₹9,910" },
            { q: "6. End Cap 80k, Intro 60k, Drawings 40k, Loss 1.2L. Beginning capital was:", o: ["₹1,80,000", "₹1,60,000", "₹1,40,000", "₹20,000"], c: "₹1,80,000" },
            { q: "7. State which of the following statements is true.", o: ["A joint venture has a definite life", "Financial statements are not comparable", "Sales book is a part of ledger", "Owners Equity = Assets + Liabilities"], c: "A joint venture has a definite life" },
            { q: "8. Consignment unsold stock valuation at invoice price (3/4th sold, 20% above cost 1.32L):", o: ["₹66,000", "₹162,400", "₹1,54,400", "₹40,600"], c: "₹40,600" },
            { q: "9. Fresh bill amount after renewal of 20k bill with noting charges 100 at 12% interest:", o: ["₹20,700", "₹20,703", "₹20,600", "21,000"], c: "₹20,703" },
            { q: "10. State which of the following statements is not true relating to AS 10:", o: ["Excludes accounting for real estate developers", "No recognition criteria for fixed assets", "Recognises revaluation of fixed assets", "Does not deal with jointly owned assets"], c: "Does not deal with jointly owned assets" },
            { q: "11. B & C Joint Venture. B sent 2L. C exported 1.75L cost for 2.1L. Remaining stock value at same GP rate:", o: ["₹25,000", "₹30,000", "₹22,500", "27,500"], c: "₹30,000" },
            { q: "12. State which of the following statements is true.", o: ["Buyer gets immediate possession but not ownership under installment system", "Marine policy covers loss", "For independent branch, incorporation of trial balance is required", "Short-term lease is Leverage lease"], c: "For independent branch, incorporation of trial balance is required" },
            { q: "13. Assertion (A): Goodwill is an intangible asset but not a fictitious asset. Reason (R): Goodwill does not have any physical existence. Fictitious assets are not realisable whereas goodwill can be purchased/sold.", o: ["Both (A) and (R) are not correct", "Reason correct, Assertion not", "Both correct, Reason not correct explanation", "Both correct, Reason is correct explanation"], c: "Both correct, Reason is correct explanation" },
            { q: "14. D, E, F partners (1:1:1). New ratio (2:3:5). Goodwill 1.8L. F's Capital Account will be:", o: ["credited by 24,000", "credited by ₹6,000", "credited by ₹60,000", "debited by ₹30,000"], c: "debited by ₹30,000" },
            { q: "15. Admission of Ranabir (1/2 share). Old cap 45k. (1) Amount brought by new partner? (2) If he brings 20k, total capital?", o: ["₹15,000, ₹80,000", "₹11,250, ₹65,000", "₹12,250, ₹56,000", "₹10,000, ₹60,000"], c: "₹15,000, ₹80,000" }
        ]
    }
];
