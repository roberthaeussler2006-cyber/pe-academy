import type { Module } from "../lib/types";

export const module5: Module = {
  id: 5,
  slug: "deal-process",
  title: "Deal Process",
  subtitle: "From sourcing to exit: the full lifecycle of a PE transaction",
  estimatedMinutes: 25,
  content: [
    {
      heading: "Deal Sourcing and Screening",
      body: `The deal process starts with <strong>sourcing</strong>, which is how a PE fund finds potential investments. There are two broad channels:<br/><br/><strong>Proprietary (or direct) sourcing</strong> means the PE firm identifies and approaches a target company on its own, without competition from other buyers. This can happen through the firm's existing network, industry conferences, cold outreach by the business development team, or referrals from operating partners and portfolio company executives. Proprietary deals are highly prized because they avoid competitive auction dynamics and typically result in lower purchase prices.<br/><br/><strong>Auction (or intermediated) sourcing</strong> means an investment bank or M&A advisor is running a structured sale process on behalf of the seller. Auctions can be <strong>broad auctions</strong> (dozens of potential buyers contacted) or <strong>targeted/limited auctions</strong> (a handful of pre-selected buyers). Most middle-market and large-cap PE deals go through some form of auction.<br/><br/>Within these channels, deal flow is also categorized as <strong>inbound</strong> (opportunities that come to the firm, e.g., a banker sends a teaser) versus <strong>outbound</strong> (the firm proactively identifies and pursues targets). Senior PE professionals spend significant time cultivating relationships with bankers, lawyers, and management teams to build a steady pipeline of both inbound and outbound opportunities.<br/><br/>Once a deal enters the pipeline, the team runs a quick <strong>screening</strong> process. This typically involves checking whether the company fits the fund's investment criteria: sector focus, size (revenue/EBITDA range), geography, growth profile, and margin characteristics. Most firms screen hundreds of opportunities per year and only pursue a handful seriously.`,
      keyTerms: [
        { term: "Proprietary Deal", definition: "A transaction sourced directly by the PE firm without a competitive auction process, often leading to more favorable pricing." },
        { term: "Broad Auction", definition: "A sale process run by an investment bank where dozens of potential buyers are contacted, creating maximum competition." },
        { term: "Targeted Auction", definition: "A limited sale process where only a small number of pre-selected, likely buyers are invited to participate." },
        { term: "Deal Flow", definition: "The pipeline of potential investment opportunities that a PE firm reviews over a given period." },
      ],
    },
    {
      heading: "The CIM (Confidential Information Memorandum)",
      body: `After a buyer signs a <strong>non-disclosure agreement (NDA)</strong> with the seller, they receive a <strong>Confidential Information Memorandum</strong>, commonly called a CIM (pronounced "sim") or sometimes an "Information Memorandum" (IM). This is the primary marketing document for the company being sold.<br/><br/>A typical CIM is 50-80 pages and is prepared by the sell-side investment bank. It contains:<br/><br/>- <strong>Executive Summary</strong>: Company overview, investment highlights, and key financial metrics.<br/>- <strong>Company Overview</strong>: History, organizational structure, locations, and number of employees.<br/>- <strong>Products and Services</strong>: Detailed description of what the company sells, its value proposition, and competitive positioning.<br/>- <strong>Industry Overview</strong>: Market size, growth trends, competitive landscape, and regulatory environment.<br/>- <strong>Growth Opportunities</strong>: The sell-side's view on how a buyer could accelerate revenue or margin expansion (organic growth, M&A, new geographies, etc.).<br/>- <strong>Management Team</strong>: Bios of senior executives and key employees.<br/>- <strong>Financial Information</strong>: 3-5 years of historical financial statements, plus management projections. This section usually includes revenue breakdowns, EBITDA reconciliations, capital expenditure history, and working capital trends.<br/><br/>The CIM is deliberately optimistic. It is a sales document. As a PE analyst, your job when reading a CIM is to identify what the banker is emphasizing and, more importantly, what they are not mentioning. Missing customer concentration data, vague margin explanations, or sparse capex details are all red flags worth flagging to your deal team.`,
      keyTerms: [
        { term: "CIM", definition: "Confidential Information Memorandum. A detailed marketing document (50-80 pages) prepared by the sell-side bank to present a company to prospective buyers." },
        { term: "NDA", definition: "Non-Disclosure Agreement. A legal contract signed before receiving confidential company information, preventing the buyer from sharing it." },
      ],
    },
    {
      heading: "IOI and LOI: Expressing Interest",
      body: `After reviewing the CIM, a PE firm that wants to proceed submits an <strong>Indication of Interest (IOI)</strong>. This is a short document (typically 1-3 pages) that communicates the buyer's preliminary interest and a valuation range. The IOI is <strong>non-binding</strong>, meaning neither party has any legal obligation to proceed.<br/><br/>A typical IOI includes:<br/>- A proposed valuation range (e.g., enterprise value of $350M - $400M)<br/>- Sources of financing (equity from the fund, committed debt financing)<br/>- A brief description of the buyer and why they are a good fit<br/>- Any key conditions or assumptions<br/><br/>The seller and their bank review all IOIs received, narrow the field to a shortlist of 3-5 bidders, and invite those bidders into a more detailed due diligence process, often granting access to a <strong>virtual data room (VDR)</strong>.<br/><br/>After conducting further diligence, the remaining bidders submit a <strong>Letter of Intent (LOI)</strong>, also called a "term sheet" in some contexts. The LOI is more detailed and more serious than the IOI. While most of the LOI is still non-binding, it typically contains one binding provision: an <strong>exclusivity (or "no-shop") clause</strong> that gives the winning bidder a period of 30-60 days during which the seller cannot negotiate with other buyers.<br/><br/>The LOI includes:<br/>- A specific purchase price (not a range)<br/>- Proposed deal structure (asset purchase vs. stock purchase, treatment of existing debt)<br/>- Key terms: indemnification, escrow amounts, non-compete provisions<br/>- Financing details and timeline to close<br/>- The exclusivity period<br/><br/>The difference between IOI and LOI is sometimes confusing for first-year analysts. Think of it this way: the IOI says "we are interested and here is roughly what we would pay." The LOI says "we want to buy this company at this specific price, here are our terms, and we want exclusive negotiations."`,
      keyTerms: [
        { term: "IOI", definition: "Indication of Interest. A non-binding, preliminary expression of interest with a valuation range, submitted after reviewing the CIM." },
        { term: "LOI", definition: "Letter of Intent. A more detailed, mostly non-binding offer with a specific price and key deal terms. Usually includes a binding exclusivity clause." },
        { term: "Exclusivity Clause", definition: "A binding provision in the LOI giving the buyer a 30-60 day window during which the seller cannot negotiate with other parties." },
        { term: "Virtual Data Room (VDR)", definition: "A secure online repository where the seller uploads detailed company documents for prospective buyers to review during diligence." },
      ],
    },
    {
      heading: "Due Diligence",
      body: `<strong>Due diligence</strong> is the detailed investigation a buyer conducts before committing to a transaction. In PE, this is extensive, expensive (often $2M-$10M+ in advisor fees for a large deal), and covers multiple workstreams running in parallel.<br/><br/><strong>Commercial Due Diligence</strong> answers the question: "Is this a good business?" A consulting firm (often Bain, McKinsey, BCG, or a specialist like L.E.K.) evaluates market size, growth drivers, competitive dynamics, customer retention, and the sustainability of the company's competitive advantages. They will typically interview customers, suppliers, and industry experts. The commercial DD report is often the single most important diligence document for the investment committee.<br/><br/><strong>Financial Due Diligence / Quality of Earnings (QoE)</strong> answers: "Are the financials real?" An accounting firm (Big Four or specialized firms like Alvarez & Marsal) scrubs the company's reported EBITDA to identify non-recurring items, aggressive accounting policies, or earnings that are not sustainable. The <strong>Quality of Earnings</strong> report is the definitive document for adjusted EBITDA, which becomes the basis for the purchase price. Common adjustments include removing one-time legal settlements, normalizing owner compensation, adding back non-recurring restructuring costs, and adjusting for revenue recognition timing.<br/><br/><strong>Legal Due Diligence</strong> covers contracts, litigation, intellectual property, regulatory compliance, employment law, and environmental liabilities. The buyer's law firm reviews every material contract, pending lawsuit, and regulatory filing. They produce a legal diligence report highlighting risks that may need to be addressed through representations and warranties in the purchase agreement.<br/><br/><strong>Management Due Diligence</strong> involves the PE deal team (and sometimes an outside consultant) spending time with the company's senior leadership. The goal is to assess whether the current management team can execute the value creation plan, or whether the PE firm will need to bring in new executives post-close. This typically includes formal presentations, informal dinners, and reference calls with former colleagues.`,
      keyTerms: [
        { term: "Quality of Earnings (QoE)", definition: "A financial diligence report that scrubs reported EBITDA for non-recurring, non-cash, and unsustainable items to arrive at a true 'adjusted EBITDA' figure." },
        { term: "Commercial Due Diligence", definition: "An assessment of the target's market, competitive position, and growth outlook, typically conducted by a strategy consulting firm." },
        { term: "Adjusted EBITDA", definition: "EBITDA after removing one-time or non-recurring items, forming the basis for valuation and the purchase price." },
      ],
    },
    {
      heading: "SPA, Signing, and Closing",
      body: `Once diligence is substantially complete, the buyer and seller negotiate the <strong>Stock Purchase Agreement (SPA)</strong> or, in some cases, an Asset Purchase Agreement (APA). The SPA is the definitive legal document governing the transaction. It is typically 80-150+ pages and covers:<br/><br/>- <strong>Purchase price</strong> and the mechanism for calculating it (including working capital adjustments)<br/>- <strong>Representations and warranties ("reps and warranties")</strong>: Statements by the seller about the condition of the business (e.g., "there is no pending litigation," "financial statements are accurate"). If any rep turns out to be false, the buyer may have a claim for indemnification.<br/>- <strong>Indemnification provisions</strong>: Who is responsible for losses if reps are breached, and what the caps and baskets are (e.g., the seller indemnifies the buyer for losses above a $500K basket up to a $10M cap).<br/>- <strong>Closing conditions</strong>: What must happen before the deal can close (regulatory approvals, third-party consents, no material adverse change).<br/>- <strong>Covenants</strong>: Rules governing how the seller must operate the business between signing and closing (e.g., no major capital expenditures, no new debt, continue operating in the ordinary course).<br/><br/>There is often a gap between <strong>signing</strong> (when both parties execute the SPA) and <strong>closing</strong> (when cash changes hands and ownership transfers). This gap can be days or months, depending on whether regulatory approvals (antitrust review, industry-specific licenses) are needed. During this gap, the seller operates the business under the covenants agreed in the SPA. A <strong>Material Adverse Change (MAC) clause</strong> gives the buyer the right to walk away if something catastrophic happens to the business between signing and closing, though invoking a MAC clause is rare and heavily litigated.`,
      keyTerms: [
        { term: "SPA", definition: "Stock Purchase Agreement. The definitive legal document governing a transaction, containing the purchase price, reps and warranties, indemnification, and closing conditions." },
        { term: "Reps and Warranties", definition: "Factual statements by the seller about the condition of the business. If proven false, the buyer may be entitled to indemnification." },
        { term: "MAC Clause", definition: "Material Adverse Change clause. Allows the buyer to terminate the deal if a catastrophic event materially harms the target between signing and closing." },
        { term: "Working Capital Adjustment", definition: "A mechanism in the SPA that adjusts the purchase price based on the actual working capital at closing versus an agreed-upon target." },
      ],
    },
    {
      heading: "Post-Close: The 100-Day Plan and Value Creation",
      body: `The day the deal closes, the PE firm becomes the owner. The first 100 days are considered the most important period for setting the trajectory of the investment. Most PE firms prepare a <strong>100-day plan</strong> during diligence, well before closing.<br/><br/>The 100-day plan typically covers:<br/>- <strong>Organizational changes</strong>: New hires for key positions (CFO, VP Sales, etc.), any planned departures, and restructuring of reporting lines.<br/>- <strong>Quick wins</strong>: Immediate cost savings (renegotiating supplier contracts, eliminating redundant spend) and revenue initiatives (pricing adjustments, cross-selling into existing accounts).<br/>- <strong>Systems and reporting</strong>: Implementing PE-grade financial reporting, dashboards, and KPIs. Many founder-led businesses do not have the financial infrastructure a PE owner requires.<br/>- <strong>Strategic priorities</strong>: The 3-5 major initiatives that will drive value over the hold period (e.g., launch a new product line, expand into Europe, execute a bolt-on acquisition strategy).<br/><br/>The typical PE <strong>hold period</strong> is 3-7 years, with 4-5 years being the most common. During this time, the PE firm works with management to execute the value creation plan. The firm's involvement varies: some PE firms are highly operational (placing executives, running procurement projects), while others are more governance-oriented (quarterly board meetings, annual strategy reviews).<br/><br/>Value creation in PE comes from three sources: <strong>revenue growth</strong> (organic and through add-on acquisitions), <strong>margin expansion</strong> (cost reduction, pricing, operational efficiency), and <strong>multiple expansion</strong> (selling at a higher EV/EBITDA multiple than the entry multiple, which can be driven by scale, improved growth profile, or favorable market conditions).`,
      keyTerms: [
        { term: "100-Day Plan", definition: "A detailed operational roadmap prepared before closing that outlines organizational changes, quick wins, and strategic priorities for the first 100 days of ownership." },
        { term: "Hold Period", definition: "The duration a PE firm owns a portfolio company, typically 3-7 years." },
        { term: "Multiple Expansion", definition: "Selling a company at a higher EV/EBITDA multiple than the entry multiple, increasing returns beyond what operational improvement alone would deliver." },
      ],
    },
    {
      heading: "Exit Routes",
      body: `A PE fund eventually needs to sell its portfolio companies to return capital to its LPs. The main exit routes are:<br/><br/><strong>Strategic Sale (Trade Sale)</strong>: Selling to a corporate buyer, often a larger company in the same or an adjacent industry. Strategic buyers can typically pay higher prices because they can realize synergies (cost savings from combining operations, revenue synergies from cross-selling). This is the most common exit route.<br/><br/><strong>Secondary Buyout (SBO)</strong>: Selling to another PE firm. This is also called a "sponsor-to-sponsor" deal. SBOs have become increasingly common, representing roughly 30-40% of PE exits in recent years. Critics argue that passing a company between PE firms does not create real value, but proponents point out that different PE firms bring different capabilities: one firm might specialize in early-stage professionalization, while the next focuses on international expansion.<br/><br/><strong>Initial Public Offering (IPO)</strong>: Taking the company public by listing shares on a stock exchange. IPOs are the most prestigious exit but also the least common, as they require significant scale, predictable earnings, a compelling equity story, and favorable market conditions. The PE firm typically does not sell all its shares at IPO but rather exits gradually over 12-24 months through secondary offerings.<br/><br/><strong>Dividend Recapitalization</strong>: This is not technically an exit but a partial return of capital. The portfolio company takes on additional debt and uses the proceeds to pay a special dividend to the PE owner. This allows the PE firm to return cash to LPs while still owning the company. Dividend recaps are controversial because they increase leverage on the company, but they can be sensible if the company has strong, stable cash flows and the additional debt is manageable.`,
      keyTerms: [
        { term: "Strategic Sale", definition: "Selling a portfolio company to a corporate buyer that can realize synergies. The most common PE exit route." },
        { term: "Secondary Buyout (SBO)", definition: "Selling a portfolio company to another PE firm. Also called a sponsor-to-sponsor deal." },
        { term: "Dividend Recapitalization", definition: "The portfolio company borrows additional debt and pays a special dividend to the PE owner, providing a partial return of capital without selling the company." },
        { term: "IPO", definition: "Initial Public Offering. Listing a portfolio company's shares on a public stock exchange. Prestigious but relatively uncommon as a PE exit." },
      ],
    },
  ],
  quiz: [
    {
      question: "What is the primary difference between an IOI and an LOI?",
      options: [
        "An IOI is binding; an LOI is non-binding",
        "An IOI provides a valuation range and is fully non-binding; an LOI provides a specific price and typically includes a binding exclusivity clause",
        "An IOI is submitted after due diligence; an LOI is submitted before the CIM",
        "There is no meaningful difference; they are interchangeable terms",
      ],
      correctIndex: 1,
      explanation:
        "An IOI is a preliminary, fully non-binding expression of interest that includes a valuation range. An LOI is more detailed, includes a specific purchase price, and typically contains a binding exclusivity (no-shop) clause giving the buyer 30-60 days of exclusive negotiations.",
    },
    {
      question: "What does a Quality of Earnings (QoE) report primarily assess?",
      options: [
        "The company's market position and competitive advantages",
        "Whether the company's management team is capable of executing the business plan",
        "Whether the company's reported EBITDA is sustainable and free of non-recurring or aggressive items",
        "The legal risks associated with the company's contracts and litigation",
      ],
      correctIndex: 2,
      explanation:
        "A QoE report is prepared during financial due diligence (usually by an accounting firm) and scrubs the company's reported EBITDA to identify non-recurring items, aggressive accounting, and earnings that may not be sustainable. The resulting 'adjusted EBITDA' becomes the basis for the purchase price.",
    },
    {
      question:
        "A PE firm acquires a company and sells it to a larger corporation in the same industry four years later. What type of exit is this?",
      options: [
        "Secondary buyout",
        "Dividend recapitalization",
        "IPO",
        "Strategic sale",
      ],
      correctIndex: 3,
      explanation:
        "A strategic sale (or trade sale) is the sale of a portfolio company to a corporate buyer, typically in the same or an adjacent industry. Selling to another PE firm would be a secondary buyout.",
    },
    {
      question: "What is the purpose of the exclusivity (no-shop) clause in an LOI?",
      options: [
        "It requires the buyer to complete the acquisition within 30 days",
        "It prevents the seller from negotiating with other potential buyers during a specified period",
        "It guarantees the purchase price will not change during due diligence",
        "It obligates the buyer's lenders to provide financing",
      ],
      correctIndex: 1,
      explanation:
        "The exclusivity clause is one of the few binding provisions in an LOI. It gives the buyer a window (typically 30-60 days) during which the seller cannot solicit or entertain offers from other bidders, allowing the buyer to complete due diligence without fear of being outbid.",
    },
    {
      question: "Which of the following best describes a dividend recapitalization?",
      options: [
        "The PE firm sells a minority stake in the portfolio company to a strategic investor",
        "The portfolio company issues new equity to pay down existing debt",
        "The portfolio company takes on additional debt and uses the proceeds to pay a dividend to the PE owner",
        "The PE firm returns capital to LPs by selling shares in an IPO",
      ],
      correctIndex: 2,
      explanation:
        "In a dividend recapitalization, the portfolio company borrows additional debt and uses those proceeds to pay a special dividend to the PE owner. This provides a partial return of capital to the fund's LPs without requiring a full sale or IPO. The PE firm retains ownership of the company.",
    },
  ],
};
