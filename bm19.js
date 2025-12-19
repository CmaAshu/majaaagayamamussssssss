/**
 * Senior Data Analyst & JS Developer Extraction
 * Task: PDF to Structured JSON (JavaScript File)
 * Source: MCQBank-Paper19.pdf
 * Total Questions: 179
 */

const quizSets = [
    {
        setName: "Set 1",
        questions: [
            { q: "Goods within the meaning of supply does not includes:", o: ["Movable property", "Money and securities", "Actionable claim other than specified actionable claims", "All of the above"], c: "Money and securities" },
            { q: "Items out of the purview of supply are provided in:", o: ["Schedule I", "Schedule II", "Schedule III", "None of the above"], c: "Schedule III" },
            { q: "M/s R. Associates of Chennai received certain consultancy services from A Inc. of USA. Both are not related person. The services received is without any consideration. Does the same classify as supply?", o: ["Yes. Being import of services in the course of business", "No. Since, party to the contract are not related", "On the prior approval of the Government", "None of the above"], c: "No. Since, party to the contract are not related" },
            { q: "X Ltd. Transferred certain assets forming part of business assets. The same was transferred free of cost without any consideration as a part of corporate social responsibility (CSR). What shall be the classification of such supply? X Ltd. Not availed Input Tax Credit on such assets.", o: ["Supply of goods", "Supply of services", "Does not qualify as supply", "Supply of goods and services or both"], c: "Does not qualify as supply" },
            { q: "While repairing the factory shed, few goods were also supplied along with the labour service. Whether it is:", o: ["Composite supply", "Mixed supply", "Individual supply", "Any of the above"], c: "Composite supply" },
            { q: "Which of the following is naturally bundled for supply?", o: ["Stay in hotel with breakfast", "A gift pack containing chocolates and fruit juice", "Machine with installation services", "Both (a) and (c)"], c: "Both (a) and (c)" },
            { q: "A registered person who is an Electronic Commerce Operator (ECO) is required to:", o: ["Collect tax at source (TCS)", "Deduct tax at source (TDS)", "Pay tax under reverse charge", "None of the above"], c: "Collect tax at source (TCS)" },
            { q: "The threshold limit for registration for a person supplying only services in the State of Maharashtra is:", o: ["₹ 10 lakhs", "₹ 20 lakhs", "₹ 40 lakhs", "₹ 50 lakhs"], c: "₹ 20 lakhs" },
            { q: "Input Tax Credit (ITC) can be claimed on:", o: ["Goods used for personal consumption", "Goods used for business purposes", "Goods lost or destroyed", "Membership of a club"], c: "Goods used for business purposes" },
            { q: "What is the time limit for issuing a tax invoice for the supply of services?", o: ["Within 30 days from the date of supply", "Within 45 days for banking companies", "Before or at the time of supply", "Both (a) and (b)"], c: "Both (a) and (b)" },
            { q: "A person opting for the Composition Scheme under Section 10 can:", o: ["Collect tax from customers", "Claim Input Tax Credit", "Supply goods inter-state", "None of the above"], c: "None of the above" },
            { q: "The maximum rate of CGST that can be levied is:", o: ["14%", "20%", "28%", "40%"], c: "20%" },
            { q: "Which of the following services are taxable under Reverse Charge Mechanism (RCM)?", o: ["Services by an individual Advocate to a business entity", "Services by a Director to the company", "Services by a Goods Transport Agency (GTA)", "All of the above"], c: "All of the above" },
            { q: "What is the validity period of an E-way bill for a distance up to 200 km (other than Over Dimensional Cargo)?", o: ["1 day", "2 days", "3 days", "5 days"], c: "1 day" },
            { q: "The due date for filing GSTR-1 for a monthly filer is:", o: ["10th of the next month", "11th of the next month", "20th of the next month", "Last day of the month"], c: "11th of the next month" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "Anti-profiteering measure is provided under which section of the CGST Act?", o: ["Section 161", "Section 171", "Section 151", "Section 141"], c: "Section 171" },
            { q: "Zero-rated supply includes:", o: ["Export of goods or services", "Supply of goods or services to SEZ unit", "Supply of goods or services by SEZ unit", "Both (a) and (b)"], c: "Both (a) and (b)" },
            { q: "Place of supply of services by way of admission to a cultural, artistic, or sporting event is:", o: ["Location of the recipient", "Location of the supplier", "Place where the event is actually held", "Registered office of the organizer"], c: "Place where the event is actually held" },
            { q: "Refund of unutilized ITC is allowed in case of:", o: ["Zero-rated supplies made without payment of tax", "Inverted duty structure", "Exempt supplies", "Both (a) and (b)"], c: "Both (a) and (b)" },
            { q: "The 'Aggregate Turnover' for GST registration includes:", o: ["Taxable supplies", "Exempt supplies", "Exports", "All of the above"], c: "All of the above" },
            { q: "Which of the following is NOT a requirement for a valid Tax Invoice?", o: ["GSTIN of the supplier", "Date of its issue", "HSN code of goods", "Photograph of the recipient"], c: "Photograph of the recipient" },
            { q: "Job work refers to:", o: ["Treatment or process undertaken by a person on goods belonging to another registered person", "Outsourcing of management services", "Repair of machinery", "None of the above"], c: "Treatment or process undertaken by a person on goods belonging to another registered person" },
            { q: "Tax deduction at source (TDS) u/s 51 is applicable to:", o: ["Private companies", "A department or establishment of the Central or State Government", "All registered persons", "Only ECOs"], c: "A department or establishment of the Central or State Government" },
            { q: "The time of supply of goods under forward charge is:", o: ["Date of issue of invoice", "Last date on which invoice should have been issued", "Date of receipt of payment", "Earlier of (a) or (b)"], c: "Earlier of (a) or (b)" },
            { q: "Input Tax Credit is NOT available on:", o: ["Motor vehicles for transportation of persons (with certain exceptions)", "Plant and machinery", "Raw materials", "Telecommunication towers"], c: "Motor vehicles for transportation of persons (with certain exceptions)" },
            { q: "The 'Place of Supply' for inter-state supply of goods is:", o: ["Location of the supplier", "Location of the goods at the time at which the movement of goods terminates for delivery", "Location of the registered office of the buyer", "None of the above"], c: "Location of the goods at the time at which the movement of goods terminates for delivery" },
            { q: "GSTR-3B is a:", o: ["Monthly summary return", "Annual return", "Final return", "Quarterly return"], c: "Monthly summary return" },
            { q: "Credit note is issued by the supplier when:", o: ["Taxable value in invoice exceeds actual taxable value", "Tax charged in invoice is less than actual tax payable", "Goods are returned by the recipient", "Both (a) and (c)"], c: "Both (a) and (c)" },
            { q: "The threshold for issuing an E-way bill for inter-state movement of goods is generally:", o: ["₹ 10,000", "₹ 25,000", "₹ 50,000", "₹ 1,00,000"], c: "₹ 50,000" },
            { q: "Which of the following is a 'Non-taxable supply'?", o: ["Alcoholic liquor for human consumption", "Supply of books", "Supply of agricultural produce", "Supply to SEZ"], c: "Alcoholic liquor for human consumption" }
        ]
    },
    {
        setName: "Set 3",
        questions: [
            { q: "The IGST Act deals with:", o: ["Intra-state supply", "Inter-state supply", "Supply within Union Territory", "None of the above"], c: "Inter-state supply" },
            { q: "GST Council is constituted under Article:", o: ["246A", "269A", "279A", "280"], c: "279A" },
            { q: "Mixed supply is taxable at the rate of:", o: ["The supply having the lowest rate", "The supply having the highest rate", "Average rate", "Fixed 18%"], c: "The supply having the highest rate" },
            { q: "Self-assessment of tax is done under section:", o: ["Section 59", "Section 60", "Section 61", "Section 62"], c: "Section 59" },
            { q: "Section 129 of the CGST Act deals with:", o: ["Confiscation of goods", "Detention, seizure and release of goods and conveyances in transit", "Appeals", "Refunds"], c: "Detention, seizure and release of goods and conveyances in transit" },
            { q: "The maximum amount of late fee for delayed filing of GSTR-1/GSTR-3B for a NIL return is:", o: ["₹ 500", "₹ 1,000", "₹ 5,000", "₹ 10,000"], c: "₹ 500" },
            { q: "Input Service Distributor (ISD) is an office of:", o: ["Supplier of goods", "Recipient of services", "Supplier of goods or services or both", "Government"], c: "Supplier of goods or services or both" },
            { q: "The limit of 180 days for payment to the supplier for claiming ITC does not apply to:", o: ["Supplies under RCM", "Deemed supplies without consideration", "Both (a) and (b)", "Normal supplies"], c: "Both (a) and (b)" },
            { q: "Assessable Value under Customs is determined based on:", o: ["CIF Value", "FOB Value", "Transaction Value", "Market Value"], c: "Transaction Value" },
            { q: "The rate of exchange for valuation of imported goods is the rate notified by:", o: ["RBI", "CBIC", "FEDAI", "Ministry of Commerce"], c: "CBIC" },
            { q: "Which of the following is NOT included in the Customs 'Assessable Value'?", o: ["Freight up to port of entry", "Insurance", "Buying Commission", "Unloading charges at port of entry"], c: "Buying Commission" },
            { q: "Social Welfare Surcharge (SWS) is calculated as a percentage of:", o: ["Assessable Value", "Aggregate Value", "Basic Customs Duty (BCD)", "IGST"], c: "Basic Customs Duty (BCD)" },
            { q: "Export duty is levied on goods listed in:", o: ["First Schedule to Customs Tariff Act", "Second Schedule to Customs Tariff Act", "Customs Act, 1962", "Foreign Trade Policy"], c: "Second Schedule to Customs Tariff Act" },
            { q: "The term 'India' under Customs Act includes territorial waters up to:", o: ["12 nautical miles", "24 nautical miles", "200 nautical miles", "50 nautical miles"], c: "12 nautical miles" },
            { q: "Bill of Entry for home consumption is filed in:", o: ["Form I", "Form II", "Form III", "None of the above"], c: "Form I" }
        ]
    },
    {
        setName: "Set 4",
        questions: [
            { q: "The date of determination of rate of duty for imported goods cleared for home consumption is:", o: ["Date of arrival of vessel", "Date of presentation of Bill of Entry", "Date of payment of duty", "Earlier of (a) or (b)"], c: "Date of presentation of Bill of Entry" },
            { q: "Safeguard Duty is imposed to:", o: ["Counteract subsidies", "Prevent injury to domestic industry from surge in imports", "Prevent dumping", "Increase revenue"], c: "Prevent injury to domestic industry from surge in imports" },
            { q: "Anti-dumping duty is applicable when:", o: ["Export price < Normal value", "Export price > Normal value", "Export price = Normal value", "None of the above"], c: "Export price < Normal value" },
            { q: "Duty Drawback u/s 75 is allowed on:", o: ["Imported goods used in manufacture of export goods", "Imported goods re-exported as such", "Damaged goods", "None of the above"], c: "Imported goods used in manufacture of export goods" },
            { q: "What is the time limit for re-exporting goods to claim 98% drawback u/s 74?", o: ["6 months", "1 year", "2 years", "5 years"], c: "2 years" },
            { q: "The 'De minimis' limit for Duty Drawback (below which no drawback is allowed) is:", o: ["₹ 50", "₹ 100", "₹ 500", "₹ 1,000"], c: "₹ 50" },
            { q: "Customs 'Baggage' rules apply to:", o: ["Cargo", "Personal effects of a passenger", "Trade samples", "Gifts by post"], c: "Personal effects of a passenger" },
            { q: "The standard rate of duty for baggage (other than specific items) is:", o: ["10%", "20%", "35%", "50%"], c: "35%" },
            { q: "Import of 'Gold and Silver' as baggage is allowed to:", o: ["Any passenger", "Passenger of Indian origin or holding Indian passport coming after 6 months stay", "Only NRIs", "Tourist only"], c: "Passenger of Indian origin or holding Indian passport coming after 6 months stay" },
            { q: "Which of the following is 'Prohibited' for import into India?", o: ["Narcotic drugs", "Counterfeit currency", "Wild animal skins", "All of the above"], c: "All of the above" },
            { q: "Project Import scheme allows import of goods for a project at:", o: ["Zero duty", "A single concessional rate of duty", "Highest rate of duty", "Standard rates"], c: "A single concessional rate of duty" },
            { q: "The 'Proper Officer' for assessment of Bill of Entry is generally:", o: ["Commissioner", "Deputy/Assistant Commissioner", "Superintendent", "Inspector"], c: "Deputy/Assistant Commissioner" },
            { q: "The 'Interest' on delayed payment of customs duty is @:", o: ["12% p.a.", "15% p.a.", "18% p.a.", "24% p.a."], c: "15% p.a." },
            { q: "A 'Letter of Undertaking' (LUT) in GST is used for:", o: ["Paying tax later", "Export without payment of IGST", "Import without BCD", "Domestic sales"], c: "Export without payment of IGST" },
            { q: "Annual Return in GST is filed in Form:", o: ["GSTR-1", "GSTR-3B", "GSTR-9", "GSTR-10"], c: "GSTR-9" }
        ]
    },
    {
        setName: "Set 5",
        questions: [
            { q: "In case of death of a taxable person, the GST liability shall be paid by:", o: ["No one", "Legal representative", "The Government", "Creditors"], c: "Legal representative" },
            { q: "The 'Electronic Cash Ledger' can be used to pay:", o: ["Tax", "Interest", "Penalty", "All of the above"], c: "All of the above" },
            { q: "Rule 86B of CGST Rules restricts use of ITC to ...... of output tax liability (for certain persons).", o: ["50%", "90%", "99%", "100%"], c: "99%" },
            { q: "The 'Principal-Agent' relationship for supply is defined in:", o: ["Schedule I", "Schedule II", "Schedule III", "Section 7"], c: "Schedule I" },
            { q: "Place of supply for passenger transportation service to a registered person is:", o: ["Location of the supplier", "Location of the recipient", "Place where passenger embarks", "Place where journey ends"], c: "Location of the recipient" },
            { q: "Maximum penalty for 'Profiteering' is:", o: ["₹ 10,000", "10% of profiteered amount", "100% of profiteered amount", "None"], c: "10% of profiteered amount" },
            { q: "Appeal to GSTAT must be filed within ...... months from the date of communication of the order.", o: ["1", "3", "6", "12"], c: "3" },
            { q: "Section 130 of the CGST Act deals with:", o: ["Refunds", "Confiscation of goods and conveyances", "Search", "Arrest"], c: "Confiscation of goods and conveyances" },
            { q: "The 'Taxable Event' in GST is:", o: ["Sale of goods", "Manufacture of goods", "Supply of goods or services", "Import of goods"], c: "Supply of goods or services" },
            { q: "The 'GSTN' is a:", o: ["Government Department", "Section 8 Company", "Statutory Body", "Private Limited Company"], c: "Section 8 Company" },
            { q: "The 'Value of Supply' includes:", o: ["Subsidies from Central Government", "Interest for late payment", "Trade discounts shown in invoice", "None of the above"], c: "Interest for late payment" },
            { q: "Supply of 'Omani' services (Online Information and Database Access or Retrieval Services) to a non-taxable person in India is:", o: ["Taxable in hands of recipient (RCM)", "Taxable in hands of supplier", "Exempt", "Non-taxable"], c: "Taxable in hands of supplier" },
            { q: "A person whose registration is cancelled can apply for revocation within ...... days.", o: ["30", "60", "90", "180"], c: "30" },
            { q: "Verification of registration application is done by the officer within ...... working days.", o: ["3", "7", "15", "30"], c: "7" },
            { q: "The 'Common Portal' for GST is:", o: ["www.gst.gov.in", "www.incometax.gov.in", "www.cbic.gov.in", "www.icegate.gov.in"], c: "www.gst.gov.in" }
        ]
    },
    {
        setName: "Set 6",
        questions: [
            { q: "The 'Tax Invoice' in case of 'Continuous Supply of Goods' should be issued:", o: ["At the time of each statement", "At the time of each payment", "Earlier of (a) or (b)", "At the end of the year"], c: "Earlier of (a) or (b)" },
            { q: "A 'Receipt Voucher' is issued when:", o: ["Advance is received for supply", "Payment is made to supplier", "Goods are received", "Invoice is issued"], c: "Advance is received for supply" },
            { q: "Matching of ITC is done using:", o: ["GSTR-1 and GSTR-2B", "GSTR-3B only", "GSTR-9", "Manually"], c: "GSTR-1 and GSTR-2B" },
            { q: "The 'Electronic Liability Register' is maintained in Form:", o: ["GST PMT-01", "GST PMT-02", "GST PMT-03", "GST PMT-05"], c: "GST PMT-01" },
            { q: "The rate of tax on 'Lottery' (run by State Government or authorized) is:", o: ["12%", "18%", "28%", "Exempt"], c: "28%" },
            { q: "Export of goods is a:", o: ["Taxable supply", "Exempt supply", "Zero-rated supply", "Non-GST supply"], c: "Zero-rated supply" },
            { q: "The 'Bonded Warehouse' concept allows:", o: ["Import without BCD", "Deferment of customs duty till clearance", "Export without duty", "None"], c: "Deferment of customs duty till clearance" },
            { q: "The 'Temporary Importation' of goods is governed by:", o: ["Section 20", "Section 25", "Section 32", "None"], c: "Section 25" },
            { q: "Import of 'Software' on a physical medium is treated as:", o: ["Goods", "Services", "Both", "None"], c: "Goods" },
            { q: "The 'Dutiable Goods' are those which are:", o: ["Imported", "Exported", "Liable to duty and not yet cleared", "All of the above"], c: "Liable to duty and not yet cleared" },
            { q: "The 'General Exemptions' from customs duty are issued under:", o: ["Section 11", "Section 25", "Section 45", "Section 75"], c: "Section 25" },
            { q: "A 'Show Cause Notice' (SCN) for demand of duty is issued under:", o: ["Section 17", "Section 28", "Section 124", "Both (b) and (c)"], c: "Both (b) and (c)" },
            { q: "The time limit for SCN u/s 28 in case of 'Fraud' is:", o: ["1 year", "2 years", "5 years", "10 years"], c: "5 years" },
            { q: "Section 149 of the Customs Act allows:", o: ["Refund", "Amendment of documents", "Confiscation", "Search"], c: "Amendment of documents" },
            { q: "The 'Import Manifest' is filed by:", o: ["Importer", "Person-in-charge of conveyance", "Customs Broker", "Exporter"], c: "Person-in-charge of conveyance" }
        ]
    },
    {
        setName: "Set 2",
        questions: [
            { q: "The 'Entry Inward' order is given for:", o: ["Vessel", "Aircraft", "Vehicle", "Train"], c: "Vessel" },
            { q: "The 'Free Baggage Allowance' for an Indian resident coming from any country (other than Nepal/Bhutan) is:", o: ["₹ 15,000", "₹ 25,000", "₹ 50,000", "₹ 1,00,000"], c: "₹ 50,000" },
            { q: "Under Section 22 of the Customs Act, 'Abatement' of duty is allowed for:", o: ["Damaged goods", "Deteriorated goods", "Lost goods", "Both (a) and (b)"], c: "Both (a) and (b)" },
            { q: "The 'Remission' of duty on lost or destroyed goods is allowed:", o: ["After clearance", "Before the goods are cleared for home consumption", "At any time", "None"], c: "Before the goods are cleared for home consumption" },
            { q: "If remission is rejected, the importer can:", o: ["File appeal to the Commissioner (Appeals)", "File writ in High Court", "Apply to PMO", "None"], c: "File appeal to the Commissioner (Appeals)" },
            { q: "Which of the following documents is essential for claiming remission of customs duty?", o: ["Invoice", "Chartered Engineer's Certificate confirming destruction", "Packing list", "Bill of lading"], c: "Chartered Engineer's Certificate confirming destruction" },
            { q: "Time limit for filing refund claim under Section 27 of the Customs Act, 1962 is:", o: ["6 months", "1 year from the relevant date", "2 years", "Indefinite"], c: "1 year from the relevant date" },
            { q: "Under unjust enrichment principle, refund will be:", o: ["Paid to importer", "Credited to Consumer Welfare Fund if incidence passed on", "Ignored", "Taxed"], c: "Credited to Consumer Welfare Fund if incidence passed on" },
            { q: "Refund of customs duty can be claimed by:", o: ["Any person who has paid the duty and borne the incidence", "Only importer", "Only exporter", "None"], c: "Any person who has paid the duty and borne the incidence" },
            { q: "The Export Promotion Capital Goods (EPCG) scheme allows import of capital goods at:", o: ["5% duty", "Zero customs duty with an export obligation", "Standard rates", "2% duty"], c: "Zero customs duty with an export obligation" },
            { q: "Merchandise Exports from India Scheme (MEIS) benefits are given in the form of:", o: ["Cash", "Duty Credit Scrips", "Tax exemption", "Subsidies"], c: "Duty Credit Scrips" },
            { q: "Which of the following is not a condition for availing benefits under EPCG scheme?", o: ["Actual user condition", "Export obligation", "Goods imported must be used within 1 year from import", "None"], c: "Goods imported must be used within 1 year from import" },
            { q: "Export Promotion Capital Goods license can be transferred to another company:", o: ["Freely", "Only with DGFT approval", "Only within same group", "Cannot be transferred"], c: "Only with DGFT approval" },
            { q: "The 'Common Portal' for Customs electronic filing is:", o: ["www.gst.gov.in", "www.icegate.gov.in", "www.cbic.gov.in", "www.dgft.gov.in"], c: "www.icegate.gov.in" }
        ]
    }
];