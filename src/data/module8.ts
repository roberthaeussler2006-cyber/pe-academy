import type { Module } from "../lib/types";

export const module8: Module = {
  id: 8,
  slug: "interview-prep",
  title: "Interview Prep",
  subtitle: "Model answers and frameworks for PE interview questions",
  estimatedMinutes: 30,
  content: [
    {
      heading: "Walk me through an LBO",
      body: "This is the most common PE interview question. You need to walk through it cleanly in 60-90 seconds. Here is the framework:<br/><br/><strong>Step 1: Acquisition.</strong> A PE fund acquires a company for a purchase price based on an EBITDA multiple. Say the company has $100M EBITDA and you buy it at 10x, so enterprise value is $1 billion. The fund finances this with a mix of debt and equity. If you use 60% leverage, that is $600M of debt and $400M of equity from the fund.<br/><br/><strong>Step 2: Operations during the hold period.</strong> Over 5 years, the company grows EBITDA through revenue growth, margin expansion, or both. Management (often with PE firm guidance) cuts costs, improves pricing, enters new markets, or makes add-on acquisitions. Suppose EBITDA grows from $100M to $140M.<br/><br/><strong>Step 3: Debt paydown.</strong> The company uses free cash flow to pay down debt. If you pay down $200M of the original $600M in debt, you now owe $400M. Every dollar of debt repaid increases the equity value dollar-for-dollar because enterprise value minus net debt equals equity value.<br/><br/><strong>Step 4: Exit.</strong> The fund sells the company, ideally at the same or higher multiple. If you exit at 10x the new $140M EBITDA, enterprise value is $1.4 billion. Subtract $400M of remaining debt and equity is worth $1 billion. You invested $400M and got back $1 billion, that is a 2.5x return, roughly a 20% IRR over 5 years.<br/><br/><strong>Step 5: Sources of return.</strong> Wrap up by noting where the return came from: EBITDA growth ($100M to $140M), debt paydown ($200M), and in this case no multiple expansion. Being able to decompose returns shows you understand the mechanics, not just the math.",
      keyTerms: [
        { term: "Paper LBO", definition: "A simplified LBO model done on paper or verbally during an interview. Tests whether you understand the basic mechanics of leveraged buyouts without a spreadsheet." },
        { term: "Returns attribution", definition: "Breaking down an LBO's total return into its components: EBITDA growth, multiple expansion, and debt paydown. Shows where value was actually created." }
      ],
      numericalExample: {
        title: "Paper LBO walkthrough",
        rows: [
          ["Entry EBITDA", "$100M"],
          ["Entry multiple", "10.0x"],
          ["Enterprise value at entry", "$1,000M"],
          ["Debt (60% leverage)", "$600M"],
          ["Equity at entry", "$400M"],
          ["Exit EBITDA (after 5 years)", "$140M"],
          ["Exit multiple", "10.0x"],
          ["Enterprise value at exit", "$1,400M"],
          ["Debt remaining (after $200M paydown)", "$400M"],
          ["Equity at exit", "$1,000M"],
          ["MOIC", "2.5x ($1,000M / $400M)"],
          ["Approximate IRR", "~20% over 5 years"],
        ],
      },
    },
    {
      heading: "Why private equity?",
      body: "Interviewers ask this to see whether you actually understand what the job involves and whether your motivations are genuine. Generic answers about 'wanting to work with great companies' will not cut it. Here is a framework for a strong answer:<br/><br/><strong>Start with your background.</strong> Connect your prior experience (banking, consulting, or whatever it is) to PE. If you are in banking, talk about how you have seen the deal process from the advisory side and want to be on the principal side making investment decisions. Be specific: mention a deal you worked on where you thought about what you would do differently as an owner.<br/><br/><strong>Explain what excites you about the work itself.</strong> PE is three things: (1) evaluating businesses and deciding what to buy, (2) working with management teams to improve operations post-acquisition, and (3) eventually exiting for a return. Talk about which of these resonates most with you and why. The best answers show genuine intellectual curiosity about businesses.<br/><br/><strong>Demonstrate you know what the job actually looks like day-to-day.</strong> At the junior level, you are building models, doing due diligence, writing investment memos, and monitoring portfolio companies. Show you understand this and are excited about it, not just the glamorous parts.<br/><br/><strong>Tie it to the specific firm.</strong> Research the firm's strategy, sector focus, recent deals, and fund size. Explain why their approach specifically appeals to you. If they are a healthcare-focused mid-market fund, talk about why healthcare and why that part of the market.<br/><br/>What to avoid: do not say you want PE for the money, the prestige, or the exit opportunities. Do not say 'I want to invest' without explaining what about investing appeals to you specifically. Do not be generic.",
      keyTerms: [
        { term: "Principal investing", definition: "Investing your own firm's capital (or your fund's capital) as opposed to advising others on transactions. PE professionals are principals; bankers are advisors." },
        { term: "Investment memo", definition: "A written document presenting the investment thesis, financial analysis, risks, and recommendation for a potential deal. Junior PE professionals spend significant time drafting these." }
      ],
    },
    {
      heading: "What makes a good LBO candidate?",
      body: "This question tests whether you can think like an investor. The answer needs to be structured and specific. Here are the characteristics, in order of importance:<br/><br/><strong>Stable, predictable cash flows.</strong> This is number one because the entire LBO structure depends on the company servicing debt. Businesses with recurring revenue, long-term contracts, or subscription models are ideal. A company whose revenue swings 30% year to year is a bad LBO candidate because a down year could mean you cannot make debt payments.<br/><br/><strong>Defensible market position.</strong> You need the business to still be healthy in 5 years when you exit. Companies with strong brands, regulatory moats, high switching costs, or niche market leadership are more likely to maintain their competitive position. If a competitor can easily undercut the company on price, the cash flows you underwrote may not materialize.<br/><br/><strong>Tangible asset base or strong collateral.</strong> Lenders need something to secure their loans against. Companies with real estate, equipment, inventory, or valuable IP can support more debt. Asset-light businesses can still be good LBO candidates if the cash flows are strong enough, but the leverage will typically be lower.<br/><br/><strong>Margin expansion opportunity.</strong> You need a credible plan to grow EBITDA. This could come from cutting redundant costs, improving procurement, raising prices, or entering adjacent markets. The best candidates have obvious operational improvement opportunities that the current owner has not pursued.<br/><br/><strong>Low capex requirements.</strong> Free cash flow is what pays down debt. If the company needs to reinvest 80% of its EBITDA in capital expenditures, there is not much left for debt service. Ideal LBO candidates convert a high percentage of EBITDA into free cash flow.<br/><br/><strong>Proven management team (or a clear plan to upgrade).</strong> PE firms do not run the company day-to-day. You need a management team that can execute the value creation plan. If the current team is weak, you need confidence you can recruit better operators.<br/><br/>If you can name these characteristics and give a real-world example of a company that fits (or does not fit), you will stand out.",
      keyTerms: [
        { term: "Recurring revenue", definition: "Revenue that repeats predictably, such as subscriptions, maintenance contracts, or licensing fees. Highly valued in LBO underwriting because it reduces cash flow uncertainty." },
        { term: "FCF conversion", definition: "The percentage of EBITDA that converts into free cash flow after capex, working capital changes, and taxes. Higher conversion means more cash available for debt paydown." }
      ],
    },
    {
      heading: "Walk me through how you would value a company",
      body: "In a PE context, valuation is not just an academic exercise. You are trying to determine what price you can pay and still hit your target return. Here is how to frame it:<br/><br/><strong>Start with the LBO model.</strong> In PE, the primary valuation tool is the LBO model, not a DCF. You build the model backwards: given a target IRR (say 20%) and assumptions about exit multiple, EBITDA growth, and leverage, what is the maximum price you can pay today? This is your offer price ceiling. If the seller wants more than this, the deal does not work for your fund.<br/><br/><strong>Comparable company analysis.</strong> Look at publicly traded companies in the same industry. What multiples are they trading at (EV/EBITDA, EV/Revenue, P/E)? This gives you a sense of what the market thinks similar businesses are worth. Apply a discount for illiquidity since your target is private and cannot be sold as easily as a public stock.<br/><br/><strong>Precedent transactions.</strong> Look at recent M&A deals in the sector. What multiples did acquirers pay? This tells you what buyers have actually been willing to pay, which may differ from where public markets trade. Pay attention to the context: were those buyers strategic (willing to pay for synergies) or financial (PE firms paying based on standalone economics)?<br/><br/><strong>DCF as a sanity check.</strong> You can build a discounted cash flow model, but in PE it is secondary to the LBO analysis. The DCF tells you intrinsic value based on projected cash flows discounted at WACC. If your LBO analysis says you can pay 10x and the DCF says the company is worth 12x, that is a good sign. If the DCF says 7x, you need to scrutinize your assumptions.<br/><br/><strong>Tie it together.</strong> Tell the interviewer that you would triangulate across methods but that the LBO model is the primary tool because it directly answers the question PE cares about: can we generate our target return at this price?",
      keyTerms: [
        { term: "LBO model", definition: "A financial model that determines the return a PE fund would earn on an acquisition at a given price, incorporating leverage, cash flows, and exit assumptions. The primary valuation tool in PE." },
        { term: "Illiquidity discount", definition: "A reduction applied to private company valuations because their shares cannot be easily sold on a public market. Typically 15-30%." },
        { term: "Precedent transactions", definition: "Past M&A deals in the same sector used as valuation benchmarks. Shows what acquirers have actually paid, not just what the market implies." }
      ],
    },
    {
      heading: "How does leverage amplify returns?",
      body: "This is a mechanics question. Interviewers want to see that you understand the math and can explain it clearly, ideally with numbers.<br/><br/>The core concept is simple: when you use debt to finance an acquisition, you are buying a large asset with a small amount of equity. If the asset appreciates, the gain accrues entirely to the equity holder because the debt balance stays fixed. This magnifies the percentage return on equity.<br/><br/><strong>Walk through a quick example.</strong> You buy a company for $100. In Scenario A, you use all equity ($100 of your own money). In Scenario B, you use $60 of debt and $40 of equity. After 5 years, the company is worth $150.<br/><br/>Scenario A (all equity): You invested $100 and now have $150. That is a 1.5x return, about 8.4% IRR.<br/><br/>Scenario B (with leverage): You invested $40 of equity plus $60 of debt. After repaying the $60 of debt, you have $90 of equity value ($150 - $60). That is a 2.25x return on your $40, about 17.6% IRR.<br/><br/>Same asset, same appreciation, but leverage more than doubled the IRR. The catch: leverage works both ways. If the company's value drops to $70, the all-equity investor loses 30% but the levered investor loses 75% (only $10 of equity left after repaying $60 of debt).<br/><br/>Also mention debt paydown. In a real LBO, the company generates cash flow that pays down debt during the hold period. This means equity value grows even if the enterprise value stays flat, because you are replacing debt with equity. Debt paydown is a return driver that exists only because of leverage.",
      keyTerms: [
        { term: "Equity cushion", definition: "The amount of equity value that must be wiped out before debt holders take losses. Higher leverage means a thinner equity cushion." },
        { term: "Leverage amplification", definition: "The effect where using debt financing magnifies both gains and losses on equity. Works in the investor's favor when asset values rise, against them when values fall." }
      ],
      numericalExample: {
        title: "Leverage amplification comparison",
        rows: [
          ["Purchase price", "$100"],
          ["", "All Equity | With Leverage"],
          ["Equity invested", "$100 | $40"],
          ["Debt", "$0 | $60"],
          ["Exit value (up case: $150)", "", ""],
          ["Equity value at exit", "$150 | $90 ($150 - $60)"],
          ["MOIC", "1.5x | 2.25x"],
          ["IRR (5 years)", "~8.4% | ~17.6%"],
          ["Exit value (down case: $70)", "", ""],
          ["Equity value at exit", "$70 | $10 ($70 - $60)"],
          ["MOIC", "0.7x | 0.25x"],
          ["Loss", "-30% | -75%"],
        ],
      },
    },
    {
      heading: "What are the key drivers of IRR?",
      body: "IRR in an LBO comes from five levers. You should be able to name all five and explain which ones are most within the PE firm's control.<br/><br/><strong>1. EBITDA growth.</strong> This is the most important driver and the one that creates the most sustainable value. If you grow EBITDA from $100M to $150M over your hold period, the company is worth more at exit regardless of what happens to multiples or leverage. EBITDA grows through revenue growth (organic or via acquisitions) and margin expansion (cost reduction, pricing improvements, mix shift). This is where PE firms spend most of their time post-acquisition.<br/><br/><strong>2. Multiple expansion.</strong> If you buy at 8x EBITDA and sell at 10x, that 2-turn expansion adds directly to returns. Multiple expansion can come from improving the company's growth profile, reducing risk, moving it to a more favorable sector classification, or simply buying at a discount during a downturn and selling during a recovery. This driver is partly within your control (you can improve the company's profile) and partly market-driven (overall M&A sentiment and interest rates affect multiples).<br/><br/><strong>3. Debt paydown.</strong> As the company generates free cash flow and pays down debt, equity value increases dollar-for-dollar. This is mechanical and relatively reliable if your cash flow projections are accurate. In a typical LBO, debt paydown accounts for 20-30% of total equity return.<br/><br/><strong>4. Leverage (entry capital structure).</strong> More debt at entry means less equity at risk, which amplifies returns if things go well. But this is a one-time decision made at closing. You cannot add more leverage mid-hold without refinancing (and potentially triggering covenants). Higher leverage also increases risk, so this is not a free lunch.<br/><br/><strong>5. Hold period.</strong> Shorter hold periods boost IRR because you are earning the same dollar return over fewer years. A 2.5x return in 3 years is a 36% IRR; the same 2.5x over 5 years is 20%. PE firms that can execute value creation plans faster generate better IRRs, which is why some firms specialize in quick-turn situations.<br/><br/>In an interview, emphasize that the best PE firms focus on #1 (EBITDA growth) because it is the most controllable and most defensible. Relying on #2 (multiple expansion) or #4 (leverage) alone is a fragile strategy.",
      keyTerms: [
        { term: "Multiple expansion", definition: "Selling a company at a higher EV/EBITDA multiple than the purchase multiple. Can result from improved growth, reduced risk, or a more favorable market environment." },
        { term: "Returns bridge", definition: "A chart or analysis decomposing total return into EBITDA growth, multiple expansion, and debt paydown. A standard PE reporting tool." }
      ],
    },
    {
      heading: "Tell me about a deal you have followed",
      body: "Almost every PE interview includes this question. You need to have 2-3 deals prepared in detail. Here is the framework for discussing one:<br/><br/><strong>Overview (15 seconds).</strong> Name the deal, the buyer, the seller, the approximate size, and when it happened. Example: 'I followed Firm X's acquisition of Company Y from Seller Z for approximately $N billion in Q3 2024.'<br/><br/><strong>Why it is interesting to you (15 seconds).</strong> Do not just say it was a big deal. Say something specific: you found the industry dynamics interesting, the valuation was unusual, the value creation thesis was creative, or the deal structure had an interesting wrinkle.<br/><br/><strong>The investment thesis (30 seconds).</strong> Why did the buyer want this company? What was the value creation plan? This is where you show commercial thinking. Think about: Was there organic growth potential? An opportunity to consolidate a fragmented market? Margins that could be improved? A technology platform that could be scaled?<br/><br/><strong>Key risks and your view (30 seconds).</strong> What could go wrong? Every deal has risks. Naming them shows maturity. Maybe the company has customer concentration, regulatory risk, or a competitive threat. Then give your view: do you think the buyer paid a fair price? Is the thesis credible? Would you have done the deal?<br/><br/><strong>How it has played out (15 seconds, if applicable).</strong> If the deal happened a while ago, comment on how it has gone. Did the thesis play out? Were there surprises?<br/><br/>What makes a great answer: you have an opinion. You are not just reciting facts from a press release. You have thought about the deal the way an investor would. Pick deals that let you show analytical thinking, not just the biggest headlines.",
      keyTerms: [
        { term: "Investment thesis", definition: "The core argument for why an acquisition will generate attractive returns. Includes the value creation plan, key assumptions, and expected exit outcome." },
        { term: "Customer concentration", definition: "Risk that a large share of revenue depends on a small number of customers. If one large customer leaves, the financial impact can be severe." }
      ],
    },
    {
      heading: "How do PE firms create value?",
      body: "This is a framework question. The classic answer is three levers, but a strong answer goes deeper than the textbook version.<br/><br/><strong>Lever 1: Revenue growth.</strong> This can be organic (selling more to existing customers, entering new markets, launching new products) or inorganic (acquiring competitors or adjacent businesses). PE firms support revenue growth by funding R&D, hiring sales teams, expanding geographically, or executing buy-and-build strategies. Organic growth is more valuable because it is cheaper and more sustainable. Inorganic growth through add-on acquisitions is common in PE because you can often buy smaller competitors at lower multiples than you paid for the platform, creating arbitrage on the multiple.<br/><br/><strong>Lever 2: Margin expansion.</strong> Cost reduction and operational efficiency. This includes renegotiating supplier contracts, eliminating redundant overhead, professionalizing management, implementing better technology, optimizing pricing, and improving procurement. PE firms often bring in operating partners or consultants to identify these opportunities. The first 12-18 months after acquisition are typically when the biggest cost savings happen. The stereotype of PE as 'cost cutters' comes from this lever, but smart PE firms focus on sustainable efficiency, not just headcount reductions.<br/><br/><strong>Lever 3: Financial engineering.</strong> This covers the capital structure: how much leverage, what type of debt, dividend recapitalizations, and optimizing the tax structure. It also includes the buy-and-build strategy from a financial perspective (buying at 6x, integrating, and exiting the combined platform at 9x). This lever is real but less respected by sophisticated investors. The best firms rely primarily on Levers 1 and 2 and use Lever 3 as a complement, not a crutch.<br/><br/><strong>Bonus: governance and talent.</strong> Mention that PE firms also create value by improving corporate governance (active board involvement, clearer KPIs, better incentive alignment) and upgrading management talent. This is an underappreciated lever. Replacing a mediocre CFO with a strong one can transform a company's trajectory.",
      keyTerms: [
        { term: "Buy-and-build", definition: "A PE strategy where you acquire a platform company and then bolt on smaller acquisitions to create a larger, more valuable combined entity." },
        { term: "Multiple arbitrage", definition: "Buying a company at a low multiple and selling at a higher one. Can result from increasing the company's scale, improving growth, or shifting market sentiment." },
        { term: "Operating partner", definition: "A senior professional at a PE firm, often a former CEO or industry executive, who works directly with portfolio companies to improve operations." }
      ],
    },
    {
      heading: "What questions should you ask the interviewer?",
      body: "The questions you ask at the end of an interview matter more than most candidates realize. They signal what you care about and how you think. Here are strong options:<br/><br/><strong>About the firm's approach:</strong><br/>- 'How does the firm's value creation process typically work in the first 100 days after closing a deal?'<br/>- 'Can you walk me through a deal that did not go as planned and what you learned from it?'<br/>- 'What does the sourcing process look like? How much proprietary deal flow does the firm generate versus relying on auctions?'<br/><br/>These questions show you understand that PE is about post-acquisition value creation, not just buying things. Asking about failures shows intellectual honesty. Asking about sourcing shows you understand that access to deals is a competitive advantage.<br/><br/><strong>About the role and team:</strong><br/>- 'What does a typical week look like for someone at my level? How is time split between new deals and portfolio monitoring?'<br/>- 'How much interaction do junior team members have with portfolio company management?'<br/>- 'What separates the associates who are most successful here from those who are average?'<br/><br/>These demonstrate you are serious about doing the job well, not just getting the title. The last question in particular forces the interviewer to tell you what they value, which gives you useful information for the rest of the process.<br/><br/><strong>About a specific deal:</strong><br/>- 'I read about your firm's acquisition of [Company X]. What was the thesis there, and how has it played out?'<br/><br/>This shows you did your homework. Interviewers love talking about their own deals. Make sure you have actually read about it and can ask an intelligent follow-up.<br/><br/><strong>What NOT to ask:</strong> compensation, hours, vacation policy, or anything you could find on the website. Do not ask questions that make it sound like you are already planning your exit to a hedge fund.",
    },
    {
      heading: "What interviewers are really testing",
      body: "Understanding what is being evaluated helps you prepare more effectively. PE interviews test four things, and every question maps back to one or more of them.<br/><br/><strong>Analytical thinking.</strong> Can you structure a problem, work through numbers, and reach a logical conclusion? This is tested through LBO modeling questions, valuation discussions, case studies, and brain teasers. They do not expect perfection. They expect a clear, structured thought process. When you get stuck, talk through your logic out loud rather than freezing.<br/><br/><strong>Commercial awareness.</strong> Do you understand how businesses work? Can you think about an investment the way an owner would? This is tested through deal discussions, 'tell me about a company' questions, and industry questions. Read the Financial Times, Wall Street Journal, and PE trade publications (Pitchbook, PE Hub, Buyouts Insider) regularly. Have opinions about deals and be able to defend them.<br/><br/><strong>Cultural fit.</strong> PE teams are small (often 15-30 investment professionals), and you will work closely with the same people for years. They need to like you, trust you, and want to spend long hours in a room with you. Be genuine, be curious, ask good questions, and do not be arrogant. The best PE professionals are intellectually humble: confident in their analysis but open to being wrong.<br/><br/><strong>Work ethic and resilience.</strong> The job involves long hours, tight deadlines, and high stakes. Interviewers look for signals that you can handle the workload and stay sharp under pressure. This is assessed indirectly: how prepared are you for the interview itself? How do you handle tough questions? Do you stay calm and structured when the math gets hard, or do you fall apart?<br/><br/>One last thing: PE interviews are a two-way evaluation. Pay attention to how the team interacts, how they talk about their portfolio companies, and how they treat junior members of the team. These things tell you a lot about what working there will actually feel like.",
      keyTerms: [
        { term: "Case study", definition: "A common PE interview format where you receive information about a company and must evaluate it as a potential investment, often building a simple model and presenting a recommendation." },
        { term: "Cultural fit", definition: "Whether your personality, work style, and values align with the firm's team and culture. In small PE teams, this factor carries significant weight in hiring decisions." }
      ],
    },
  ],
  quiz: [
    {
      question: "In a paper LBO, if you buy a company at 10x EBITDA with 60% leverage and EBITDA grows 40% over 5 years with no multiple change and $200M of debt paydown, what is the approximate MOIC?",
      options: ["1.5x", "2.0x", "2.5x", "3.0x"],
      correctIndex: 2,
      explanation: "Entry: $1B EV (10x on $100M EBITDA), $600M debt, $400M equity. Exit: $1.4B EV (10x on $140M EBITDA), $400M remaining debt ($600M - $200M paydown), equity = $1.4B - $400M = $1B. MOIC = $1B / $400M = 2.5x.",
    },
    {
      question: "Which of the following is NOT a characteristic of a good LBO candidate?",
      options: [
        "Stable, predictable cash flows with recurring revenue",
        "High capital expenditure requirements consuming most of EBITDA",
        "Defensible market position with high switching costs",
        "Opportunities for margin expansion through operational improvements",
      ],
      correctIndex: 1,
      explanation: "High capex requirements are a negative for LBO candidates. Free cash flow (EBITDA minus capex) is what services and pays down debt. If capex consumes most of EBITDA, there is little cash left for debt repayment, making the leveraged structure risky.",
    },
    {
      question: "What are the three primary levers PE firms use to create value?",
      options: [
        "Revenue growth, margin expansion, and financial engineering",
        "Cost cutting, layoffs, and asset stripping",
        "Multiple expansion, dividend recaps, and IPOs",
        "Market timing, leverage maximization, and quick flips",
      ],
      correctIndex: 0,
      explanation: "The three levers are revenue growth (organic and inorganic), margin expansion (operational improvements and cost efficiency), and financial engineering (leverage, capital structure optimization, buy-and-build multiple arbitrage). The best firms focus primarily on the first two.",
    },
    {
      question: "Why is the LBO model, rather than the DCF, the primary valuation tool in PE?",
      options: [
        "Because DCF models are too complex for PE professionals to build",
        "Because the LBO model directly answers what price produces the fund's target IRR, which is the decision PE firms actually need to make",
        "Because DCF models always produce lower valuations than LBO models",
        "Because PE firms are not allowed to use DCF analysis by their fund agreements",
      ],
      correctIndex: 1,
      explanation: "PE firms care about one question: at what price can we acquire this company and still generate our target return (typically 20%+ IRR)? The LBO model answers this directly by working backwards from the return target. A DCF tells you intrinsic value but does not incorporate the leveraged return dynamics that drive PE decision-making.",
    },
    {
      question: "When asked 'tell me about a deal you have followed' in a PE interview, what differentiates a strong answer from a weak one?",
      options: [
        "Choosing the largest, most well-known deal you can find and reciting the headline details",
        "Having a clear opinion on the investment thesis, identifying key risks, and explaining whether you would have done the deal",
        "Memorizing the exact purchase price and all financial details down to the decimal",
        "Discussing as many deals as possible to show broad market awareness",
      ],
      correctIndex: 1,
      explanation: "Interviewers want to see investor-like thinking, not information recall. A strong answer includes the deal overview, why you find it interesting, the investment thesis, key risks, and your personal view on whether the price was fair and the thesis was credible. This shows commercial awareness and analytical judgment.",
    },
  ],
};
