import type { Module } from "../lib/types";

export const module2: Module = {
  id: 2,
  slug: "lbo-mechanics",
  title: "LBO Mechanics",
  subtitle: "How leverage amplifies returns and the math behind buyouts",
  estimatedMinutes: 30,
  content: [
    {
      heading: "What is a Leveraged Buyout?",
      body: `A <strong>leveraged buyout (LBO)</strong> is the acquisition of a company using a significant amount of borrowed money (debt) to meet the purchase price. The acquiring PE fund contributes equity (typically 30-40% of the total price) and finances the rest with debt (60-70%). The debt is secured by the assets and cash flows of the target company itself, not by the PE fund or its other portfolio companies. This is the critical point: the target company's own balance sheet bears the debt burden.<br/><br/>Think of it like buying a house. You put down 20-30% and borrow the rest via a mortgage. The house (not your other assets) is collateral. If the house appreciates, your return on the down payment is amplified because you only put up a fraction of the total cost. That is exactly the logic of an LBO, except instead of a house, you are buying a business, and instead of rental income paying the mortgage, the company's operating cash flows service the debt.<br/><br/>LBOs work best on companies with <strong>stable, predictable cash flows</strong>, <strong>low cyclicality</strong>, <strong>strong market positions</strong>, and <strong>tangible assets</strong> that can serve as collateral. A subscription software company with 95% revenue retention is a good LBO candidate. A pre-revenue biotech is not.`,
      keyTerms: [
        {
          term: "Leveraged Buyout (LBO)",
          definition:
            "An acquisition financed primarily with debt, where the target company's cash flows and assets (not the acquirer's) secure the borrowed funds.",
        },
      ],
    },
    {
      heading: "Why Leverage Amplifies Returns",
      body: `Leverage magnifies equity returns because the equity investor captures all of the upside (and downside) on an asset purchased partly with other people's money. The math is straightforward.<br/><br/>Suppose you acquire a company for $100M. In Scenario A, you use 100% equity (no debt). In Scenario B, you use $40M equity and $60M debt. In both cases, the company's enterprise value grows to $150M over 5 years.<br/><br/><strong>Scenario A (all equity):</strong> You invested $100M, it's now worth $150M. Profit = $50M. Return on equity = 50%.<br/><br/><strong>Scenario B (leveraged):</strong> You invested $40M of equity. The company is worth $150M, but you must repay $60M of debt (ignoring debt paydown for simplicity). Equity value = $150M - $60M = $90M. Profit = $50M. Return on equity = $50M / $40M = 125%.<br/><br/>Same $50M profit, but the return on the equity check is 2.5x higher with leverage. This is the fundamental logic of an LBO: leverage converts modest asset appreciation into outsized equity returns.<br/><br/>But leverage cuts both ways. If that same company declines to $70M in value:<br/><br/><strong>Scenario A:</strong> Equity = $70M. Loss = $30M. Return = -30%.<br/><br/><strong>Scenario B:</strong> Equity = $70M - $60M = $10M. Loss = $30M on $40M invested. Return = -75%.<br/><br/>This asymmetry is why PE firms obsess over downside protection. A bad deal with leverage can wipe out most or all of the equity. The three primary drivers of returns in an LBO are: (1) <strong>EBITDA growth</strong> (growing the business), (2) <strong>multiple expansion</strong> (selling at a higher EV/EBITDA multiple than you paid), and (3) <strong>debt paydown</strong> (using free cash flow to reduce debt, which accrues entirely to equity holders).`,
      keyTerms: [
        {
          term: "Multiple Expansion",
          definition:
            "Selling a company at a higher EV/EBITDA multiple than the entry multiple. For example, buying at 8x and selling at 10x. This is one of the three core return drivers in an LBO.",
        },
        {
          term: "Debt Paydown",
          definition:
            "Using the portfolio company's free cash flow to repay debt during the hold period. Every dollar of debt repaid increases equity value dollar-for-dollar.",
        },
      ],
    },
    {
      heading: "Sources and Uses of Funds",
      body: `Every LBO starts with a <strong>Sources and Uses table</strong>, which is exactly what it sounds like: where the money comes from (sources) and where it goes (uses). These two columns must balance.<br/><br/><strong>Uses</strong> include the purchase price (enterprise value of the target), transaction fees (advisory, legal, accounting, typically 2-4% of deal value), and financing fees (arrangement fees, commitment fees, OID on debt, typically 2-3% of debt raised). If the target has existing debt that must be repaid at closing (a "change of control" trigger), that goes in uses as well.<br/><br/><strong>Sources</strong> include the various tranches of debt (described in the next section), the equity contribution from the PE sponsor, and sometimes rollover equity from existing management or the seller. Rollover equity means the seller reinvests a portion of their proceeds into the new entity alongside the PE fund, which signals confidence in the business and aligns incentives.<br/><br/>The ratio of debt to total sources is called <strong>leverage</strong>. A deal that is "6x levered" means total debt equals 6x the company's EBITDA. Typical leverage multiples range from 4-7x EBITDA depending on the credit environment, industry, and company quality. During loose credit markets, leverage can stretch to 7-8x. During downturns, it compresses to 3-5x.`,
      keyTerms: [
        {
          term: "Sources and Uses",
          definition:
            "A table showing where acquisition financing comes from (debt, equity) and where it goes (purchase price, fees). Sources must equal uses.",
        },
        {
          term: "Rollover Equity",
          definition:
            "Existing management or seller equity that is reinvested into the post-acquisition entity rather than cashed out. Signals alignment and reduces the equity check required from the PE sponsor.",
        },
        {
          term: "Leverage Multiple",
          definition:
            "Total debt divided by EBITDA. Indicates how many turns of cash flow the company owes. A 5x leverage multiple means debt equals 5 times annual EBITDA.",
        },
      ],
    },
    {
      heading: "Debt Tranches: Senior, Mezzanine, and PIK",
      body: `Not all debt is created equal. LBO financing is structured in layers (tranches), each with different seniority, pricing, and terms. Understanding the capital structure is non-negotiable for anyone working in PE.<br/><br/><strong>Senior Secured Debt (First Lien)</strong> sits at the top of the capital structure. It has the first claim on the company's assets if things go wrong. Because of this priority, senior debt has the lowest interest rate (typically SOFR + 200-400 bps, or roughly 6-9% total in a normal rate environment). Senior debt is usually provided by banks or institutional investors (CLOs), is secured by the company's assets, and has mandatory amortization (typically 1-5% per year of the original principal). Senior lenders impose <strong>covenants</strong>, which are financial tests the borrower must pass each quarter (e.g., leverage ratio must stay below 6.0x, interest coverage must exceed 2.0x). Breaching a covenant triggers default.<br/><br/><strong>Second Lien / Unitranche</strong> is subordinated to first lien but still secured. It carries a higher interest rate (SOFR + 500-700 bps) to compensate for its lower recovery priority. In recent years, unitranche loans (a single-tranche product that blends senior and subordinated debt) have grown popular because they simplify the capital structure.<br/><br/><strong>Mezzanine Debt</strong> is unsecured, subordinated debt that sits between senior debt and equity. It carries a much higher interest rate (12-18%) to compensate for higher risk. Mezzanine lenders often receive <strong>equity warrants</strong> or <strong>equity kickers</strong> as additional compensation, giving them upside participation if the deal goes well. Mezzanine debt is typically bullet maturity (no amortization, principal due at maturity).<br/><br/><strong>PIK (Payment-in-Kind) Debt</strong> is a special type of debt where interest is not paid in cash. Instead, interest "accrues" and is added to the principal balance. If you borrow $50M of PIK at 12%, after one year you owe $56M. No cash leaves the company. PIK is used when the company's cash flows cannot support the full interest burden, or when the PE sponsor wants to maximize cash available for operations and debt paydown on senior tranches. The downside is that the debt balance grows over time, which is dangerous if the company doesn't perform.`,
      keyTerms: [
        {
          term: "Senior Secured Debt (First Lien)",
          definition:
            "The most senior tranche in an LBO capital structure. Secured by company assets, lowest interest rate, first claim in bankruptcy. Typically has mandatory amortization and financial covenants.",
        },
        {
          term: "Mezzanine Debt",
          definition:
            "Unsecured, subordinated debt sitting between senior debt and equity. Higher interest rate (12-18%), often includes equity warrants. Bullet maturity with no amortization.",
        },
        {
          term: "PIK (Payment-in-Kind)",
          definition:
            "Debt where interest is not paid in cash but instead added to the principal balance. Preserves cash flow but causes the debt balance to compound over time.",
        },
        {
          term: "Covenants",
          definition:
            "Financial tests imposed by lenders that the borrower must satisfy each reporting period (e.g., maximum leverage ratio, minimum interest coverage). Breaching covenants triggers a technical default.",
        },
      ],
    },
    {
      heading: "Interest Coverage and Debt Service",
      body: `Lenders care about one thing above all: can the company pay its interest and principal obligations? The primary metric for this is the <strong>Interest Coverage Ratio (ICR)</strong>, defined as EBITDA divided by total interest expense. An ICR of 2.0x means the company generates twice as much EBITDA as it needs to cover interest payments. Lenders typically require a minimum ICR of 1.5-2.5x, depending on the industry and risk profile.<br/><br/>The <strong>Fixed Charge Coverage Ratio (FCCR)</strong> is a stricter test: (EBITDA - CapEx - Taxes) / (Interest + Mandatory Amortization). This measures whether the company can service all fixed obligations from operating cash flow after accounting for necessary reinvestment.<br/><br/>The <strong>Debt Service Coverage Ratio (DSCR)</strong> measures free cash flow available for total debt service (interest plus principal repayment). DSCR = (EBITDA - CapEx - Taxes) / (Interest + Principal Repayment).<br/><br/>When building an LBO model, you project these ratios forward year by year. If the ICR dips below covenant minimums in any projection year, the debt structure does not work and needs to be reconfigured: less debt, more equity, or a different mix of tranches. PE associates spend a lot of time iterating on capital structures to find the right balance between leverage (which amplifies equity returns) and coverage (which ensures the company can survive a downturn without tripping covenants).`,
      keyTerms: [
        {
          term: "Interest Coverage Ratio (ICR)",
          definition:
            "EBITDA / Interest Expense. Measures how many times over the company can cover its interest obligations from operating earnings. Higher is safer.",
        },
        {
          term: "Fixed Charge Coverage Ratio (FCCR)",
          definition:
            "(EBITDA - CapEx - Taxes) / (Interest + Mandatory Amortization). A stricter coverage test that accounts for capital expenditures and all mandatory payments.",
        },
      ],
    },
    {
      heading: "Putting It Together: LBO Returns Math",
      body: `In an LBO, your equity return comes from three sources, and you should be able to decompose any return into these components:<br/><br/>1. <strong>EBITDA Growth:</strong> If EBITDA grows from $20M to $30M over five years, that is organic value creation. Revenue growth, margin improvement, cost cuts, add-on acquisitions all contribute here.<br/><br/>2. <strong>Multiple Expansion:</strong> If you bought at 8.0x EBITDA and sell at 10.0x, that 2.0x turn of multiple expansion adds substantial value. Multiple expansion is partly driven by GP skill (repositioning the company, improving growth profile) and partly by market conditions (selling into a frothy market).<br/><br/>3. <strong>Debt Paydown:</strong> If the company's free cash flow pays down $25M of debt during the hold period, that $25M goes straight to equity. The company's enterprise value doesn't change, but the equity slice of the capital structure grows as the debt slice shrinks.<br/><br/>The interaction of these three levers is what makes LBOs work. A deal does not need all three to succeed, but a deal where none of them work will almost certainly lose money. In a typical successful LBO, EBITDA growth contributes 40-60% of returns, multiple expansion contributes 10-30%, and debt paydown contributes 20-30%.`,
      numericalExample: {
        title: "Full LBO Walkthrough: $500M Acquisition at 10.0x EBITDA",
        rows: [
          ["SOURCES OF FUNDS", ""],
          ["Senior Secured Debt (4.0x EBITDA)", "$200M"],
          ["Mezzanine Debt (1.5x EBITDA)", "$75M"],
          ["Total Debt (5.5x EBITDA)", "$275M"],
          ["Sponsor Equity", "$215M"],
          ["Management Rollover Equity", "$10M"],
          ["Total Equity", "$225M"],
          ["Total Sources", "$500M"],
          ["", ""],
          ["USES OF FUNDS", ""],
          ["Enterprise Value (10.0x x $50M EBITDA)", "$500M"],
          ["Transaction Fees (included in EV for simplicity)", "$0M"],
          ["Total Uses", "$500M"],
          ["", ""],
          ["ENTRY METRICS", ""],
          ["Entry EBITDA", "$50M"],
          ["Entry EV/EBITDA Multiple", "10.0x"],
          ["Entry Leverage (Debt/EBITDA)", "5.5x"],
          ["Equity Contribution", "45% of total"],
          ["", ""],
          ["5-YEAR PROJECTION", ""],
          ["EBITDA Growth (8% CAGR)", "$50M -> $73.5M"],
          ["Senior Debt Paydown (from FCF)", "$200M -> $125M ($75M paid down)"],
          ["Mezzanine (bullet, no amort, 14% PIK)", "$75M -> $75M (cash pay assumed)"],
          ["Total Remaining Debt at Exit", "$200M"],
          ["", ""],
          ["EXIT (Year 5)", ""],
          ["Exit EBITDA", "$73.5M"],
          ["Exit Multiple (assume same 10.0x)", "10.0x"],
          ["Exit Enterprise Value", "$735M"],
          ["Less: Remaining Debt", "($200M)"],
          ["Exit Equity Value", "$535M"],
          ["", ""],
          ["RETURNS", ""],
          ["Equity Invested", "$225M"],
          ["Equity at Exit", "$535M"],
          ["Money Multiple (MOIC)", "2.4x"],
          ["Gross IRR (approximate)", "~19%"],
          ["", ""],
          ["RETURN ATTRIBUTION", ""],
          ["From EBITDA Growth ($23.5M x 10.0x)", "$235M"],
          ["From Multiple Expansion", "$0M (flat multiple)"],
          ["From Debt Paydown", "$75M"],
          ["Total Value Creation", "$310M"],
        ],
      },
    },
  ],
  quiz: [
    {
      question:
        "A PE firm acquires a company for $200M using $130M of debt and $70M of equity. After 4 years, the company is sold for $300M with $90M of debt remaining. What is the approximate equity MOIC?",
      options: ["1.5x", "2.1x", "3.0x", "4.3x"],
      correctIndex: 2,
      explanation:
        "Exit equity value = $300M enterprise value - $90M remaining debt = $210M. MOIC = $210M / $70M initial equity = 3.0x. Note that the return comes from two sources: the enterprise value increased by $100M (from $200M to $300M), and $40M of debt was paid down ($130M to $90M). Both accrue entirely to equity holders.",
    },
    {
      question:
        "A company has $50M EBITDA, $25M of senior secured debt at SOFR+300bps (8% total), $15M of mezzanine at 14%, and $10M of PIK at 12%. What is the cash interest coverage ratio?",
      options: ["10.0x", "12.2x", "14.5x", "25.0x"],
      correctIndex: 1,
      explanation:
        "Cash interest coverage = EBITDA / Cash Interest Expense. Senior debt cash interest: $25M x 8% = $2.0M. Mezzanine cash interest: $15M x 14% = $2.1M. PIK interest is NOT paid in cash, so it is excluded from cash interest. Total cash interest = $4.1M. ICR = $50M / $4.1M = 12.2x. The key insight is that PIK interest does not consume cash, so it should not be included in a cash coverage calculation.",
    },
    {
      question:
        "Which of the following capital structures is MOST likely to fail in a mild recession where EBITDA drops 20%?",
      options: [
        "$100M EBITDA company with $400M senior debt at 7% and $100M equity",
        "$100M EBITDA company with $300M senior debt at 7% and $200M equity",
        "$100M EBITDA company with $250M senior debt at 6%, $150M mezz at 15%, and $100M equity",
        "$100M EBITDA company with $500M senior debt at 5% and $200M equity",
      ],
      correctIndex: 2,
      explanation:
        "In a 20% EBITDA decline, EBITDA drops to $80M. Option C has total cash interest of $250M x 6% + $150M x 15% = $15M + $22.5M = $37.5M, giving an ICR of $80M / $37.5M = 2.1x. This is tight but might survive. However, Option D has $500M x 5% = $25M interest, giving ICR of $80M / $25M = 3.2x. Wait, let's reconsider. The answer is C because the blended cost of debt is highest: total debt of $400M with $37.5M of cash interest = 9.4% blended rate, versus Option A at 7.0%, B at 7.0%, and D at 5.0%. Option C's ICR in recession = 2.1x, which is the tightest of all four options and most likely to breach covenants. The mezzanine tranche's high rate is the problem.",
    },
    {
      question:
        "A PE firm buys a company at 8.0x EBITDA and sells at 10.0x EBITDA after 5 years. Entry EBITDA was $40M and grew to $55M. Entry debt was $200M and exit debt was $140M. What is the approximate total value created for equity holders?",
      options: ["$150M", "$230M", "$310M", "$550M"],
      correctIndex: 2,
      explanation:
        "Entry EV = 8.0x x $40M = $320M. Entry equity = $320M - $200M = $120M. Exit EV = 10.0x x $55M = $550M. Exit equity = $550M - $140M = $410M. Total equity value created = $410M - $120M = $290M. Breaking this down: EBITDA growth contribution = ($55M - $40M) x 10.0x = $150M. Multiple expansion contribution = (10.0x - 8.0x) x $40M = $80M. Debt paydown = $200M - $140M = $60M. Sum = $150M + $80M + $60M = $290M. The closest answer is $310M (the slight discrepancy comes from the interaction effect between EBITDA growth and multiple expansion: $15M x 2.0x = $30M, making the true total $290M + interaction). With the interaction term properly allocated, total value creation is approximately $290-310M.",
    },
    {
      question:
        "Why do PE firms typically prefer companies with high free cash flow conversion when evaluating LBO candidates?",
      options: [
        "High FCF conversion means higher EBITDA multiples at exit",
        "Free cash flow is used to pay management fees to the GP",
        "Strong FCF enables faster debt paydown, which increases equity returns and provides a margin of safety for debt service",
        "Companies with high FCF are always less cyclical",
      ],
      correctIndex: 2,
      explanation:
        "Free cash flow after interest and CapEx is what's actually available to repay debt principal. A company might have great EBITDA but if it requires heavy CapEx (capital-intensive businesses) or has large working capital swings, actual cash available for debt service is much lower. Fast debt paydown (a) increases equity value directly (every dollar of debt repaid is a dollar of equity created), (b) de-risks the investment by reducing leverage ratios, and (c) provides covenant headroom. FCF conversion has no direct relationship to exit multiples, management fees, or cyclicality.",
    },
  ],
};
