import type { Module } from "../lib/types";

export const module6: Module = {
  id: 6,
  slug: "key-metrics",
  title: "Key Metrics",
  subtitle: "The numbers that drive PE investment decisions",
  estimatedMinutes: 25,
  content: [
    {
      heading: "IRR: The Primary PE Return Metric",
      body: `<strong>Internal Rate of Return (IRR)</strong> is the annualized return on an investment, accounting for the timing of cash flows. It is the discount rate at which the net present value (NPV) of all cash flows (both inflows and outflows) equals zero. IRR is the single most important return metric in private equity.<br/><br/>Why does PE care so much about IRR? Because PE funds have a limited life (typically 10 years) and LPs expect returns that compensate for illiquidity and risk. IRR captures not just how much money you made, but how quickly you made it. A deal that doubles your money in two years (~41% IRR) is far more attractive than one that doubles your money in six years (~12% IRR), even though the absolute return is the same.<br/><br/>Most PE funds target a <strong>gross IRR</strong> (before fees) of 20-30% and a <strong>net IRR</strong> (after management fees and carried interest) of 15-20%+. The difference between gross and net can be 500-800 basis points, which is why LPs focus on net returns.<br/><br/>IRR has limitations. It can be gamed by timing cash flows (e.g., using a subscription credit facility to delay capital calls inflates IRR without improving actual returns to LPs). It also assumes intermediate cash flows can be reinvested at the IRR itself, which is often unrealistic for high-return investments. Despite these flaws, IRR remains the industry standard because it allows comparison across investments with different hold periods and cash flow profiles.`,
      keyTerms: [
        { term: "IRR", definition: "Internal Rate of Return. The annualized rate of return that makes the NPV of all investment cash flows equal to zero. The primary return metric in PE." },
        { term: "Gross IRR", definition: "IRR calculated before deducting management fees and carried interest. Reflects the deal-level return." },
        { term: "Net IRR", definition: "IRR calculated after all fees and carry. Reflects what LPs actually earn." },
        { term: "Subscription Credit Facility", definition: "A line of credit used by PE funds to delay capital calls from LPs, which can artificially inflate IRR." },
      ],
    },
    {
      heading: "MOIC / MoM: The Absolute Return Multiple",
      body: `<strong>Multiple on Invested Capital (MOIC)</strong>, also called <strong>Money-on-Money (MoM)</strong>, measures total return as a simple multiple of the original equity investment. If a PE firm invests $100M of equity and receives $300M back (including all dividends and the exit proceeds), the MOIC is 3.0x.<br/><br/>MOIC = Total Cash Received / Total Cash Invested<br/><br/>Unlike IRR, MOIC ignores the time dimension entirely. A 3.0x return is a 3.0x return whether it took three years or seven years. This makes MOIC a useful complement to IRR, because it tells you the absolute magnitude of the return.<br/><br/>In practice, PE professionals always look at IRR and MOIC together. A deal with a 40% IRR but only 1.5x MOIC was a quick, small win. A deal with a 15% IRR but 3.5x MOIC was a slow compounder. Both have value, but they represent very different types of investments.<br/><br/>Typical return targets for buyout funds:<br/>- <strong>Top-quartile deals</strong>: 2.5x+ MOIC, 25%+ IRR<br/>- <strong>Solid deals</strong>: 2.0-2.5x MOIC, 18-25% IRR<br/>- <strong>Acceptable deals</strong>: 1.5-2.0x MOIC, 12-18% IRR<br/>- <strong>Below 1.0x</strong>: You lost money. This happens more often than the marketing materials suggest.`,
      keyTerms: [
        { term: "MOIC", definition: "Multiple on Invested Capital. Total cash returned divided by total equity invested. A 2.5x MOIC means $2.50 returned for every $1 invested." },
        { term: "MoM", definition: "Money-on-Money. Another name for MOIC, used interchangeably in the industry." },
      ],
      numericalExample: {
        title: "IRR vs MOIC: Same Multiple, Different IRRs",
        rows: [
          ["", "Deal A", "Deal B"],
          ["Equity Invested", "$100M", "$100M"],
          ["Total Cash Returned", "$250M", "$250M"],
          ["MOIC", "2.5x", "2.5x"],
          ["Hold Period", "3 years", "6 years"],
          ["IRR", "~36%", "~16%"],
          ["Takeaway", "Quick compounder", "Slow grind to same multiple"],
        ],
      },
    },
    {
      heading: "EBITDA: The PE Earnings Metric",
      body: `<strong>EBITDA</strong> stands for Earnings Before Interest, Taxes, Depreciation, and Amortization. It is the single most used earnings metric in PE, and virtually every valuation, leverage ratio, and credit document in the industry references EBITDA rather than net income.<br/><br/>Why EBITDA over net income? Several reasons:<br/><br/><strong>Capital structure neutrality.</strong> Net income is reduced by interest expense, which varies depending on how much debt a company carries. Since PE firms choose how much leverage to put on a company, they want a profit metric that is independent of financing decisions. EBITDA strips out interest, so it reflects operating performance regardless of capital structure.<br/><br/><strong>Tax structure neutrality.</strong> Tax rates vary by jurisdiction, entity structure, and tax strategy. EBITDA removes taxes so you can compare companies across different tax regimes.<br/><br/><strong>Non-cash charge neutrality.</strong> Depreciation and amortization are non-cash accounting charges that reduce reported net income but do not represent actual cash leaving the business (the cash was spent when the asset was originally purchased). EBITDA adds these back, making it a closer approximation to operating cash flow. That said, EBITDA is not a perfect cash flow proxy because it ignores capital expenditures, changes in working capital, and other cash items.<br/><br/>In PE, you will almost always see <strong>Adjusted EBITDA</strong>, which takes reported EBITDA and further adjusts for non-recurring items (one-time legal costs, restructuring charges, M&A transaction fees) and normalizations (above-market owner compensation, run-rate cost savings from recent initiatives). The QoE report produced during due diligence is where adjusted EBITDA is formally established.`,
      keyTerms: [
        { term: "EBITDA", definition: "Earnings Before Interest, Taxes, Depreciation, and Amortization. The standard earnings metric in PE because it is neutral to capital structure, tax regime, and non-cash accounting charges." },
        { term: "Adjusted EBITDA", definition: "EBITDA further modified for non-recurring items and normalizations. Established during QoE diligence and used as the basis for valuation." },
      ],
    },
    {
      heading: "Enterprise Value vs. Equity Value",
      body: `Understanding the difference between <strong>Enterprise Value (EV)</strong> and <strong>Equity Value</strong> is one of the most important concepts for any PE analyst. They are not interchangeable, and confusing them is a fast way to lose credibility.<br/><br/><strong>Enterprise Value</strong> represents the total value of a business to all capital providers (both debt holders and equity holders). Think of it as the price you would pay to acquire the entire business, assuming you take on its debt and receive its cash.<br/><br/><strong>Equity Value</strong> represents the value attributable only to the equity holders (the PE fund, in our case). It is what the PE firm actually pays out of its fund for its ownership stake.<br/><br/>The relationship between them is called the <strong>EV bridge</strong>:<br/><br/>Enterprise Value = Equity Value + Net Debt<br/><br/>Or equivalently:<br/><br/>Equity Value = Enterprise Value - Net Debt<br/><br/>Where <strong>Net Debt</strong> = Total Funded Debt - Cash and Cash Equivalents.<br/><br/>In a PE context, this matters because the PE firm's equity check (the amount of money it writes from its fund) equals the equity value, not the enterprise value. If you buy a company at an EV of $500M and put $350M of debt on it, the equity check is $150M (plus any transaction fees and expenses). When you sell the company later, your return is based on the equity value at exit, not the enterprise value.`,
      keyTerms: [
        { term: "Enterprise Value (EV)", definition: "The total value of a business to all capital providers (debt + equity). Equals equity value plus net debt." },
        { term: "Equity Value", definition: "The value of a business attributable only to equity holders. In PE, this is the amount the fund invests (the 'equity check')." },
        { term: "Net Debt", definition: "Total funded debt minus cash and cash equivalents. The bridge between enterprise value and equity value." },
        { term: "EV Bridge", definition: "The formula connecting EV and equity value: EV = Equity Value + Net Debt." },
      ],
      numericalExample: {
        title: "Enterprise Value Bridge Calculation",
        rows: [
          ["Component", "Amount"],
          ["Enterprise Value (EV)", "$500M"],
          ["Less: Cash on Balance Sheet", "($20M)"],
          ["Plus: Total Funded Debt", "$270M"],
          ["= Net Debt", "$250M"],
          ["Equity Value = EV - Net Debt", "$500M - $250M = $250M"],
          ["PE Firm's Equity Check", "$250M"],
        ],
      },
    },
    {
      heading: "Leverage Multiples",
      body: `<strong>Leverage multiples</strong> express a company's debt burden relative to its EBITDA. They are the standard way to measure how much debt a company carries in PE and leveraged finance.<br/><br/>The two main leverage multiples are:<br/><br/><strong>Senior Debt / EBITDA</strong>: This includes only senior secured debt (term loans and revolving credit facilities). Typical range for a PE buyout: 3.0x - 5.0x.<br/><br/><strong>Total Debt / EBITDA</strong>: This includes all funded debt (senior debt plus any subordinated, mezzanine, or high-yield bonds). Typical range: 4.0x - 7.0x for a buyout.<br/><br/>Lenders use these multiples to determine how much they are willing to lend. A company with $50M of EBITDA at 5.0x total leverage would carry $250M of total debt. Credit agreements include <strong>leverage covenants</strong> that require the company to maintain its debt/EBITDA ratio below a specified threshold, tested quarterly.<br/><br/>Leverage multiples have trended higher over time. In the early 2000s, 4.0x-5.0x total leverage was typical for a large buyout. By 2019-2021, 6.0x-7.0x+ was common, driven by low interest rates and aggressive lending markets. Higher leverage amplifies equity returns in good outcomes but also increases the risk of financial distress if the business underperforms.<br/><br/>As a PE analyst, you will build LBO models that test different leverage levels. A key output is the <strong>debt paydown schedule</strong>, which shows how quickly the company can repay debt using its free cash flow. Faster deleveraging reduces risk and is a source of equity value creation, because every dollar of debt repaid increases the equity value dollar-for-dollar.`,
      keyTerms: [
        { term: "Senior Debt / EBITDA", definition: "A leverage multiple measuring only senior secured debt relative to EBITDA. Typical PE buyout range: 3.0x - 5.0x." },
        { term: "Total Debt / EBITDA", definition: "A leverage multiple measuring all funded debt relative to EBITDA. Typical PE buyout range: 4.0x - 7.0x." },
        { term: "Leverage Covenant", definition: "A contractual requirement in credit agreements that the company maintain its debt/EBITDA ratio below a specified level, tested quarterly." },
      ],
    },
    {
      heading: "Entry and Exit Multiples",
      body: `<strong>Entry multiple</strong> is the EV/EBITDA multiple at which the PE firm acquires a company. <strong>Exit multiple</strong> is the EV/EBITDA multiple at which it sells. The difference between the two is a major driver of investment returns.<br/><br/>For example, if a PE firm buys a company for 8.0x EBITDA and sells it five years later at 10.0x EBITDA, that 2.0x turn of <strong>multiple expansion</strong> generates significant additional return on top of whatever EBITDA growth occurred during the hold period.<br/><br/>The sources of multiple expansion include:<br/>- <strong>Improved growth profile</strong>: A company growing at 15% commands a higher multiple than one growing at 5%.<br/>- <strong>Increased scale</strong>: Larger companies generally trade at higher multiples because they are perceived as lower risk and more liquid.<br/>- <strong>Sector re-rating</strong>: If the broader market or the specific sector becomes more favorably valued.<br/>- <strong>Better business quality</strong>: Improving margins, diversifying the customer base, or reducing cyclicality.<br/><br/>In LBO modeling, the standard assumption is to use the same exit multiple as the entry multiple (zero multiple expansion). This is conservative and tests whether the deal can generate acceptable returns from operational improvement and debt paydown alone. If a deal only works with significant multiple expansion baked in, that is a risky bet.<br/><br/>Typical buyout entry multiples vary widely by sector and size. Large-cap software companies might trade at 15-25x EV/EBITDA. Industrial businesses trade at 7-10x. Healthcare services at 10-15x. As a general rule, higher-growth, higher-margin, more recurring-revenue businesses command higher multiples.`,
      keyTerms: [
        { term: "Entry Multiple", definition: "The EV/EBITDA multiple at which a PE firm acquires a company. A lower entry multiple is generally preferable." },
        { term: "Exit Multiple", definition: "The EV/EBITDA multiple at which a PE firm sells a company. Selling at a higher multiple than entry drives additional returns." },
        { term: "Multiple Expansion", definition: "The difference between exit and entry multiples. A deal bought at 8x and sold at 10x experienced 2 turns of multiple expansion." },
      ],
    },
    {
      heading: "LTM vs. NTM Multiples",
      body: `Valuation multiples can be calculated using historical or projected earnings. The two standard timeframes are:<br/><br/><strong>LTM (Last Twelve Months)</strong>, also called <strong>TTM (Trailing Twelve Months)</strong>: This uses the most recent twelve months of actual, reported EBITDA. LTM multiples are grounded in reality because they use numbers that have already been audited or at least reported. In PE transactions, the LTM EBITDA used is almost always the adjusted figure from the QoE report, not the raw reported number.<br/><br/><strong>NTM (Next Twelve Months)</strong>, also called <strong>forward multiples</strong>: This uses projected EBITDA for the coming twelve months. NTM multiples are lower than LTM multiples for growing companies (because you are dividing by a larger projected EBITDA number), which can make a company appear cheaper than it really is.<br/><br/>In practice, PE transactions are typically priced on LTM adjusted EBITDA because it is based on actual results. However, if the company has a strong growth trajectory or is expected to benefit from a recent initiative that has not yet fully run through the financials, the buyer and seller may negotiate based on a blended or forward figure.<br/><br/>Public market valuations, by contrast, more commonly reference NTM multiples because equity analysts focus on forward earnings. This can create confusion when comparing private transaction multiples to public trading multiples. A company trading at "12x" in the public market (NTM) might look comparable to a private deal at "14x" (LTM), but these are not apples-to-apples. Always check which EBITDA figure (LTM vs. NTM, adjusted vs. reported) is being used before drawing comparisons.`,
      keyTerms: [
        { term: "LTM", definition: "Last Twelve Months. Actual EBITDA from the most recent twelve-month period. The standard basis for PE transaction pricing." },
        { term: "NTM", definition: "Next Twelve Months. Projected EBITDA for the coming twelve months. More common in public market valuations." },
        { term: "Forward Multiple", definition: "A valuation multiple calculated using projected (rather than historical) earnings. Another name for NTM-based multiples." },
      ],
    },
  ],
  quiz: [
    {
      question:
        "A PE firm invests $200M of equity and exits for total proceeds of $500M after 4 years. What is the MOIC?",
      options: ["1.5x", "2.0x", "2.5x", "3.0x"],
      correctIndex: 2,
      explanation:
        "MOIC = Total Cash Received / Total Cash Invested = $500M / $200M = 2.5x. The hold period does not affect MOIC, only IRR.",
    },
    {
      question:
        "If a company has an enterprise value of $400M, total debt of $280M, and cash of $30M, what is the equity value?",
      options: ["$120M", "$150M", "$170M", "$130M"],
      correctIndex: 1,
      explanation:
        "Net Debt = Total Debt - Cash = $280M - $30M = $250M. Equity Value = EV - Net Debt = $400M - $250M = $150M.",
    },
    {
      question:
        "Why does PE use EBITDA rather than net income as its primary earnings metric?",
      options: [
        "EBITDA is always higher than net income, making companies look more profitable",
        "Net income is too difficult to calculate for private companies",
        "EBITDA is neutral to capital structure, tax regime, and non-cash accounting charges, enabling cleaner comparisons",
        "Accounting standards require PE firms to report EBITDA",
      ],
      correctIndex: 2,
      explanation:
        "EBITDA strips out interest (capital structure), taxes (tax regime), and depreciation/amortization (non-cash charges). This allows PE professionals to compare the operating performance of companies regardless of how they are financed, where they are domiciled, or how old their assets are.",
    },
    {
      question:
        "Two deals both return 3.0x MOIC. Deal A achieves this in 3 years, Deal B in 7 years. Which statement is correct?",
      options: [
        "Both deals have the same IRR because the MOIC is identical",
        "Deal A has a higher IRR because the same multiple was achieved in a shorter time period",
        "Deal B has a higher IRR because it compounded over a longer period",
        "IRR cannot be determined without knowing the debt levels",
      ],
      correctIndex: 1,
      explanation:
        "IRR is a time-weighted measure. Achieving the same MOIC in fewer years means a higher annualized return. Deal A's 3.0x in 3 years is approximately a 44% IRR, while Deal B's 3.0x in 7 years is approximately a 17% IRR.",
    },
    {
      question:
        "A company has $75M of EBITDA and total debt of $375M. What is its total leverage multiple?",
      options: ["3.0x", "4.0x", "5.0x", "6.0x"],
      correctIndex: 2,
      explanation:
        "Total Leverage = Total Debt / EBITDA = $375M / $75M = 5.0x. This means the company carries five turns of debt relative to its annual earnings.",
    },
  ],
};
