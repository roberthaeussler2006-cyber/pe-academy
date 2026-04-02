import type { Module } from "../lib/types";

export const module1: Module = {
  id: 1,
  slug: "what-is-private-equity",
  title: "What is Private Equity",
  subtitle: "Fund structure, economics, and the GP/LP relationship",
  estimatedMinutes: 20,
  content: [
    {
      heading: "The Private Equity Fund Structure",
      body: `A <strong>private equity fund</strong> is a pooled investment vehicle, typically organized as a limited partnership, that acquires equity stakes in private companies (or takes public companies private). The fund itself is not a company you can buy stock in. It is a contractual arrangement governed by a <strong>Limited Partnership Agreement (LPA)</strong>, which spells out every economic term, from fees to profit splits to what happens if the GP gets hit by a bus.<br/><br/>The fund's legal structure matters because it creates two distinct classes of participants with very different risk profiles, rights, and economics. Understanding this split is the foundation of everything else in PE.`,
      keyTerms: [
        {
          term: "Limited Partnership Agreement (LPA)",
          definition:
            "The governing legal document of a PE fund that defines the economic terms, rights, and obligations of GPs and LPs.",
        },
        {
          term: "Private Equity Fund",
          definition:
            "A pooled investment vehicle structured as a limited partnership that raises capital from institutional investors to acquire equity ownership in companies.",
        },
      ],
    },
    {
      heading: "GPs and LPs: Who Does What",
      body: `The <strong>General Partner (GP)</strong> is the fund manager. The GP sources deals, performs due diligence, negotiates acquisitions, sits on portfolio company boards, drives operational improvements, and ultimately decides when and how to exit. The GP has unlimited liability for the fund's obligations (though in practice, GP entities are structured to limit this exposure). The GP typically commits 1-5% of total fund capital, which matters because it creates alignment: the GP has real money at risk alongside LPs.<br/><br/>The <strong>Limited Partners (LPs)</strong> are the capital providers. They write the checks but have no say in day-to-day investment decisions. LPs are "limited" in two senses: their liability is capped at their committed capital, and their governance rights are deliberately restricted. Typical LPs include pension funds (CalPERS, Ontario Teachers'), sovereign wealth funds (GIC, ADIA), endowments (Yale, Harvard), insurance companies, and fund-of-funds. LPs commit capital but do not transfer it all upfront. Instead, the GP issues <strong>capital calls</strong> (also called drawdowns) over the investment period, typically the first 3-5 years, as deals are identified.<br/><br/>This "commit now, pay later" structure is important. It means LPs need liquidity management, since they cannot predict exactly when the GP will call capital. It also means the GP is investing capital that has been promised but not yet collected, which adds an operational layer to fund management.`,
      keyTerms: [
        {
          term: "General Partner (GP)",
          definition:
            "The fund manager responsible for sourcing, executing, and managing investments. Has unlimited liability and typically commits 1-5% of fund capital.",
        },
        {
          term: "Limited Partner (LP)",
          definition:
            "A passive investor in the fund whose liability is limited to their committed capital. LPs have no role in investment decisions.",
        },
        {
          term: "Capital Call (Drawdown)",
          definition:
            "A notice from the GP to LPs requiring them to transfer a portion of their committed capital to fund an investment or pay expenses.",
        },
      ],
    },
    {
      heading: "Fund Economics: Management Fees and Carried Interest",
      body: `PE fund economics follow the <strong>"2 and 20" model</strong>, though the actual numbers vary by fund size, vintage, and GP track record.<br/><br/><strong>Management fees</strong> are typically 1.5-2.0% of committed capital during the investment period (usually years 1-5), then step down to 1.5-2.0% of invested capital (or net invested capital) during the harvest period. The distinction matters enormously. Charging on committed capital means the GP earns fees on money that hasn't even been called yet. On a $1B fund at 2%, that is $20M per year regardless of whether a single deal has been done. These fees pay for salaries, office space, travel, and the other operating costs of running a fund. Critics argue this creates a perverse incentive to raise ever-larger funds, since management fees scale with AUM, not performance.<br/><br/><strong>Carried interest</strong> ("carry") is the GP's share of profits, typically 20% of gains above a <strong>preferred return</strong> (or <strong>hurdle rate</strong>), usually set at 8% IRR. The hurdle rate exists to ensure LPs earn a minimum return on their capital before the GP participates in profits. Once the hurdle is cleared, the GP receives carry on all profits above that threshold.<br/><br/>Most funds use a <strong>catch-up provision</strong> (or GP catch-up), which works as follows: after LPs receive their preferred return, 100% of incremental profits go to the GP until the GP has received 20% of total profits. After the catch-up, remaining profits are split 80/20. This is called the <strong>European waterfall</strong> (fund-level, or whole-fund carry) versus the <strong>American waterfall</strong> (deal-by-deal carry), and the distinction is a frequent source of LP/GP negotiation.<br/><br/>A <strong>clawback provision</strong> protects LPs in the event that early winners are followed by later losers. If the GP received carry on early exits but the overall fund underperforms, the GP must return excess carry to LPs. In practice, clawbacks are messy and sometimes litigated.`,
      keyTerms: [
        {
          term: "Management Fee",
          definition:
            "An annual fee (typically 1.5-2%) charged by the GP to cover operating expenses. Calculated on committed capital during the investment period and often on invested capital thereafter.",
        },
        {
          term: "Carried Interest (Carry)",
          definition:
            "The GP's share of fund profits (typically 20%), earned only after LPs receive their preferred return.",
        },
        {
          term: "Hurdle Rate (Preferred Return)",
          definition:
            "The minimum annualized return (typically 8% IRR) that LPs must receive before the GP earns carried interest.",
        },
        {
          term: "Clawback Provision",
          definition:
            "A contractual obligation requiring the GP to return excess carry to LPs if later fund losses reduce overall returns below the preferred return threshold.",
        },
      ],
      numericalExample: {
        title: "Fund Economics: $1B Fund with 2% Fee and 20% Carry over 8% Hurdle",
        rows: [
          ["Fund Size (Committed Capital)", "$1,000M"],
          ["GP Commitment (2%)", "$20M"],
          ["LP Commitment (98%)", "$980M"],
          ["Annual Management Fee (2% of committed)", "$20M/year"],
          ["Total Mgmt Fees over 5-Year Investment Period", "$100M"],
          ["---", "---"],
          ["Assume: Total Distributions to LPs + GP", "$2,200M"],
          ["Total Profit (Distributions - Committed Capital)", "$1,200M"],
          ["LP Preferred Return (8% IRR on $980M over 5 yrs)", "~$461M"],
          ["Profit Above Hurdle", "$1,200M - $461M = $739M"],
          ["GP Catch-Up (100% to GP until 20% of total profit)", "$240M (20% of $1,200M)"],
          ["Remaining Profit Split 80/20", "$499M x 80% = $399M to LPs"],
          ["", "$499M x 20% = $100M to GP"],
          ["---", "---"],
          ["Total GP Carry", "$340M"],
          ["Total LP Net Profit", "$860M"],
          ["GP Total Economics (Carry + Mgmt Fees)", "$340M + $100M = $440M"],
        ],
      },
    },
    {
      heading: "The Fund Lifecycle",
      body: `A typical PE fund has a 10-year life (plus possible 1-2 year extensions), divided into distinct phases:<br/><br/><strong>Fundraising (6-18 months before fund close):</strong> The GP markets the fund to prospective LPs, typically through a Private Placement Memorandum (PPM). The GP will hold a "first close" once minimum commitments are met, then a "final close" after the fundraising period ends. LPs who commit at the first close sometimes receive fee discounts or other preferential terms as an incentive.<br/><br/><strong>Investment Period (Years 1-5):</strong> The GP deploys capital into new acquisitions. This is when capital calls are heaviest. The GP is sourcing deals, running diligence, and closing transactions. A typical fund targets 10-15 portfolio companies, deploying $50-150M of equity per deal (depending on fund size). During this period, the fund is a net cash consumer: money flows from LPs to the fund, and then out to portfolio companies.<br/><br/><strong>Harvest Period (Years 5-10):</strong> The focus shifts from buying to building value and exiting. The GP works on operational improvements, add-on acquisitions, and margin expansion, then exits via sale to a strategic buyer, sale to another PE fund (secondary buyout), IPO, or dividend recapitalization. Distributions flow back to LPs during this period. The fund is now a net cash distributor.<br/><br/>Two concepts worth knowing: <strong>Blind pool</strong> means LPs commit capital without knowing which specific companies the fund will acquire. They are betting on the GP's judgment, track record, and strategy, not on a pre-identified set of targets. <strong>Dry powder</strong> refers to committed but uncalled capital, i.e., money that LPs have promised but the GP has not yet invested. Industry-wide dry powder is tracked as a measure of how much PE capital is sitting on the sidelines waiting to be deployed. High dry powder levels often lead to increased deal competition and higher valuations.`,
      keyTerms: [
        {
          term: "Blind Pool",
          definition:
            "A fund structure where LPs commit capital before specific investments have been identified. LPs rely on the GP's discretion to select deals.",
        },
        {
          term: "Dry Powder",
          definition:
            "Committed but uncalled capital available for future investments. Represents the GP's remaining purchasing power.",
        },
        {
          term: "Investment Period",
          definition:
            "Typically the first 3-5 years of a fund's life during which the GP actively deploys capital into new acquisitions.",
        },
        {
          term: "Harvest Period",
          definition:
            "The latter half of a fund's life (years 5-10) focused on creating value in portfolio companies and executing exits.",
        },
      ],
    },
  ],
  quiz: [
    {
      question:
        "A $2B PE fund charges a 2% management fee on committed capital during its 5-year investment period. After the investment period, the fee steps down to 1.5% on $1.2B of invested capital. What are total management fees over a 10-year fund life?",
      options: [
        "$200M + $90M = $290M",
        "$200M + $60M = $260M",
        "$100M + $90M = $190M",
        "$200M + $90M = $380M",
      ],
      correctIndex: 0,
      explanation:
        "During the investment period (years 1-5): 2% x $2B = $40M/year x 5 = $200M. During the harvest period (years 6-10): 1.5% x $1.2B = $18M/year x 5 = $90M. Total = $290M. The key insight is that fees during the investment period are calculated on committed capital (the full $2B), not invested capital.",
    },
    {
      question:
        "An LP commits $100M to a fund with an 8% preferred return (compounded annually) and 20% carry with a full GP catch-up. After 5 years, the fund returns $180M to this LP. How much carry does the GP earn on this LP's share?",
      options: ["$16.0M", "$12.1M", "$10.1M", "$0 - the hurdle was not met"],
      correctIndex: 2,
      explanation:
        "The LP's preferred return at 8% compounded over 5 years: $100M x (1.08^5 - 1) = $46.9M. Total profit is $80M ($180M - $100M). Profit above the hurdle: $80M - $46.9M = $33.1M. But with a full catch-up, the GP receives 20% of total profit = $16M... wait. Actually, under a European waterfall with catch-up: LPs first receive $146.9M (capital + preferred return). Remaining $33.1M: GP catch-up takes 100% until GP has 20% of total $80M profit = $16M. But $33.1M > $16M, so GP gets $16M catch-up. Remaining $17.1M split 80/20 = $13.7M to LP, $3.4M to GP. Total GP carry = $16M + $3.4M... This actually comes to about $16M total since the catch-up plus the 80/20 split means GP gets 20% of total profits = 20% x $80M = $16M. However, the technically correct answer with a standard European waterfall is that total GP carry equals 20% of total profit = $16.0M. The answer is $16.0M. (Note: this question tests whether you understand that with a full catch-up provision, the GP effectively receives 20% of ALL profits once the hurdle is cleared, not just profits above the hurdle.)",
    },
    {
      question:
        "Which of the following best explains why LPs accept the blind pool structure in private equity?",
      options: [
        "LPs receive detailed information about every potential investment before capital is called",
        "The LPA gives LPs veto rights over individual deals they disagree with",
        "LPs underwrite the GP's track record, strategy, and team rather than specific assets, and the LPA constrains the GP through investment restrictions",
        "Blind pool risk is mitigated because LPs can withdraw their commitment at any time before capital is called",
      ],
      correctIndex: 2,
      explanation:
        "LPs accept blind pool risk because they are primarily betting on the GP, not on specific assets. The LPA includes investment restrictions (concentration limits, sector focus, leverage caps, geographic constraints) that constrain GP discretion. LPs cannot withdraw commitments (that would defeat the purpose), do not get veto rights over individual deals, and do not receive pre-approval rights on transactions.",
    },
    {
      question:
        "A GP raises Fund IV at $3B, up from Fund III at $1.5B. Assuming 2% management fees on committed capital, which statement is most accurate about GP incentives?",
      options: [
        "The GP's management fee income doubled, but so did the performance pressure from LPs",
        "The larger fund size only benefits the GP if carried interest is also earned",
        "Management fees are irrelevant because carry is where GPs make real money",
        "The GP's annual management fee income doubled from $30M to $60M, creating a potential misalignment since the GP profits from AUM growth regardless of investment performance",
      ],
      correctIndex: 3,
      explanation:
        "This tests understanding of the management fee critique. At 2% on $3B, annual fees are $60M vs $30M on $1.5B. This fee income is earned regardless of returns, creating a well-documented incentive for GPs to raise larger and larger funds. While carry is the bigger payout on successful funds, management fees provide guaranteed economics. Option A is partially correct but less precise. The best answer identifies both the math and the misalignment.",
    },
    {
      question:
        "In Q4 2023, global PE dry powder exceeded $2 trillion. Which of the following is the most likely consequence of record-high dry powder levels?",
      options: [
        "Lower management fees because GPs have less capital to invest",
        "Higher entry multiples on new deals due to increased competition for a limited number of quality assets",
        "Faster fund deployment as GPs rush to invest before the commitment period expires",
        "Reduced fundraising by GPs since they already have sufficient capital",
      ],
      correctIndex: 1,
      explanation:
        "High dry powder means a large amount of committed capital is chasing deals. Basic supply and demand: more capital pursuing a finite number of quality targets pushes purchase price multiples higher. This compresses returns. GPs may also deploy faster (option C has some merit), but the primary and most widely observed effect is entry multiple inflation. Management fees are unaffected by dry powder levels, and GPs continue fundraising for new vintages regardless of current fund deployment.",
    },
  ],
};
