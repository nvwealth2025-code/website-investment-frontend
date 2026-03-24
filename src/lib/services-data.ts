export type ServiceContent = {
  slug: string;
  title: string;
  category:
    | "Investment Solutions"
    | "Wealth Management"
    | "Specialized Services";
  shortDescription: string;
  overview: string;
  idealFor: string;
  keyOfferings: string[];
  approach: string[];
  whyNvWealth: string[];
};

export const servicesData: ServiceContent[] = [
  {
    slug: "equity-advisory",
    title: "Equity Advisory",
    category: "Investment Solutions",
    shortDescription:
      "Strategic stock recommendations based on fundamental analysis, technical insights, and disciplined market evaluation.",
    overview:
      "Our equity advisory is built for investors who want research-backed participation in equity markets without impulsive decision-making. Recommendations are aligned to your risk profile and investment horizon.",
    idealFor:
      "Investors seeking long-term wealth creation through quality businesses and disciplined portfolio construction.",
    keyOfferings: [
      "Stock ideas backed by structured research",
      "Entry and exit discipline aligned to market conditions",
      "Risk-aware allocation across sectors and themes",
      "Periodic review and portfolio rebalancing guidance",
    ],
    approach: [
      "Understand your return expectations and risk comfort",
      "Build a focused equity watchlist with clear rationale",
      "Execute recommendations with defined allocation limits",
      "Review outcomes and rebalance for consistency",
    ],
    whyNvWealth: [
      "Research-first recommendation process",
      "Transparent communication of rationale and risks",
      "Disciplined long-term framework over short-term noise",
    ],
  },
  {
    slug: "mutual-funds",
    title: "Mutual Funds",
    category: "Investment Solutions",
    shortDescription:
      "Curated mutual fund portfolios designed around your goals, risk profile, and time horizon for steady wealth creation.",
    overview:
      "We help you select and monitor mutual funds using a goal-led process. From SIP planning to portfolio clean-up, every recommendation is made for clarity, suitability, and long-term consistency.",
    idealFor:
      "Investors who prefer diversified, professionally managed market exposure through SIP or lump sum investing.",
    keyOfferings: [
      "Goal-based fund selection and portfolio structuring",
      "SIP and STP planning for disciplined investing",
      "Tax-saving fund selection where relevant",
      "Portfolio overlap and underperformance review",
    ],
    approach: [
      "Map financial goals to realistic timelines",
      "Choose suitable fund categories and allocation",
      "Track performance and risk at portfolio level",
      "Refine fund mix as your goals evolve",
    ],
    whyNvWealth: [
      "Client-first advice without product clutter",
      "Simple and transparent portfolio explanations",
      "Continuous review support, not one-time recommendations",
    ],
  },
  {
    slug: "ipo-advisory",
    title: "IPO Advisory",
    category: "Investment Solutions",
    shortDescription:
      "Structured guidance on IPO opportunities with detailed evaluation of business quality, valuation, and listing context.",
    overview:
      "IPO investing can be rewarding when backed by objective analysis. We evaluate offerings beyond market buzz to help you make informed subscription decisions.",
    idealFor:
      "Investors looking to participate in new listings with a process-driven decision framework.",
    keyOfferings: [
      "Business model and promoter quality analysis",
      "Valuation review relative to listed peers",
      "Use-of-proceeds and financial trend assessment",
      "Listing strategy guidance based on risk appetite",
    ],
    approach: [
      "Screen upcoming issues for quality filters",
      "Evaluate valuation and risk-reward balance",
      "Recommend participation level based on profile",
      "Post-listing review for hold or exit clarity",
    ],
    whyNvWealth: [
      "Research-backed IPO notes in plain language",
      "Balanced view of opportunities and risks",
      "No hype-driven recommendations",
    ],
  },
  {
    slug: "global-equities",
    title: "Global Equities",
    category: "Investment Solutions",
    shortDescription:
      "International equity exposure to diversify across geographies, sectors, and economic cycles.",
    overview:
      "Global equities can strengthen diversification and reduce overdependence on one market. We guide allocation to suitable international opportunities within your broader portfolio strategy.",
    idealFor:
      "Investors seeking long-term global diversification with measured currency and market risk awareness.",
    keyOfferings: [
      "International allocation strategy guidance",
      "Theme and geography-based diversification",
      "Risk calibration with domestic holdings",
      "Periodic review of global exposure",
    ],
    approach: [
      "Assess existing domestic concentration",
      "Define prudent global allocation range",
      "Select suitable global investment routes",
      "Review performance and rebalance periodically",
    ],
    whyNvWealth: [
      "Portfolio-level diversification mindset",
      "Clear communication on currency and market risk",
      "Long-term allocation discipline",
    ],
  },
  {
    slug: "commodities",
    title: "Commodities",
    category: "Investment Solutions",
    shortDescription:
      "Research-led advisory on key commodities such as gold, silver, and energy-linked opportunities.",
    overview:
      "Commodities can support diversification and inflation-awareness when used thoughtfully. Our advisory focuses on measured allocation and risk controls.",
    idealFor:
      "Investors looking to diversify beyond traditional equity and debt with controlled commodity exposure.",
    keyOfferings: [
      "Commodity trend and macro context analysis",
      "Allocation guidance for diversification",
      "Risk-managed participation framework",
      "Regular review of market drivers",
    ],
    approach: [
      "Identify the role of commodities in your portfolio",
      "Define position sizing and risk limits",
      "Enter using rule-based triggers",
      "Track and revise as macro conditions change",
    ],
    whyNvWealth: [
      "Disciplined use of commodities, not speculation",
      "Transparent risk discussion before execution",
      "Portfolio-balance focused recommendations",
    ],
  },
  {
    slug: "derivatives",
    title: "Derivatives (F&O)",
    category: "Investment Solutions",
    shortDescription:
      "Strategic futures and options guidance for hedging and structured participation in market opportunities.",
    overview:
      "Derivatives require clear risk controls and process discipline. We support sophisticated investors with strategy clarity, position sizing, and risk-aware execution principles.",
    idealFor:
      "Experienced investors who understand derivatives and need structured strategy support.",
    keyOfferings: [
      "Hedging strategy guidance",
      "Defined-risk options structures",
      "Position sizing and exposure discipline",
      "Trade review and risk monitoring framework",
    ],
    approach: [
      "Define objective: hedge, income, or directional view",
      "Select suitable strategy with risk boundaries",
      "Execute with strict exposure controls",
      "Monitor positions and adjust systematically",
    ],
    whyNvWealth: [
      "Risk-first derivatives framework",
      "No uncontrolled leverage recommendations",
      "Process-led execution discipline",
    ],
  },
  {
    slug: "fixed-income",
    title: "Fixed Income",
    category: "Investment Solutions",
    shortDescription:
      "Stable-return allocation through carefully selected fixed-income instruments and conservative portfolio design.",
    overview:
      "Fixed income plays a critical role in capital stability and cash flow planning. We help align debt allocation to your income needs, liquidity preferences, and risk profile.",
    idealFor:
      "Investors prioritizing capital preservation, steady income, and lower volatility.",
    keyOfferings: [
      "Debt allocation framework aligned to goals",
      "Instrument suitability and duration guidance",
      "Liquidity and credit-risk awareness",
      "Periodic review in changing rate cycles",
    ],
    approach: [
      "Assess cash flow and stability requirements",
      "Select suitable fixed-income mix",
      "Balance return expectations with risk limits",
      "Review portfolio sensitivity to rate changes",
    ],
    whyNvWealth: [
      "Conservative and transparent debt allocation approach",
      "Clarity on risk-return trade-offs",
      "Integrated with your total portfolio strategy",
    ],
  },
  {
    slug: "financial-planning",
    title: "Financial Planning",
    category: "Wealth Management",
    shortDescription:
      "Comprehensive planning for goals, cash flows, protection, and long-term wealth outcomes.",
    overview:
      "Financial planning creates a practical roadmap for your money decisions. We connect income, expenses, investments, and life goals into a structured long-term plan.",
    idealFor:
      "Families and professionals who want a clear financial roadmap beyond product-level investing.",
    keyOfferings: [
      "Goal-based financial roadmap creation",
      "Investment allocation aligned to milestones",
      "Emergency corpus and liquidity planning",
      "Periodic progress review and course correction",
    ],
    approach: [
      "Understand current finances and future priorities",
      "Set realistic timelines and target corpus",
      "Design a goal-linked investment framework",
      "Monitor progress and adapt with life changes",
    ],
    whyNvWealth: [
      "Holistic planning over isolated product advice",
      "Simple, actionable recommendations",
      "Long-term partnership for evolving needs",
    ],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    category: "Wealth Management",
    shortDescription:
      "Tax-efficient structuring to help optimize post-tax outcomes without losing sight of financial goals.",
    overview:
      "Smart tax planning supports wealth creation by improving net returns. We guide tax-efficient investment choices and year-round planning discipline.",
    idealFor:
      "Investors and professionals seeking better post-tax efficiency in their financial strategy.",
    keyOfferings: [
      "Tax-saving investment guidance",
      "Year-round tax planning support",
      "Portfolio tax-efficiency review",
      "Goal alignment with tax decisions",
    ],
    approach: [
      "Review current tax profile and cash flows",
      "Identify suitable tax-efficient routes",
      "Align tax actions with long-term goals",
      "Track and optimize annually",
    ],
    whyNvWealth: [
      "Tax planning integrated with overall wealth plan",
      "Practical and compliant recommendations",
      "Clarity-first approach in every decision",
    ],
  },
  {
    slug: "pms-aif-sif",
    title: "PMS / AIF / SIF",
    category: "Wealth Management",
    shortDescription:
      "Specialized portfolio solutions for investors seeking advanced and professionally managed strategies.",
    overview:
      "For eligible investors, PMS/AIF/SIF can offer differentiated strategy exposure. We help evaluate suitability, risk, and role within your total wealth architecture.",
    idealFor:
      "HNI and experienced investors evaluating specialized market-linked structures.",
    keyOfferings: [
      "Suitability and strategy-fit evaluation",
      "Risk profiling before allocation",
      "Structure comparison and selection support",
      "Ongoing review with portfolio-level context",
    ],
    approach: [
      "Assess eligibility and financial suitability",
      "Evaluate strategy objective and risks",
      "Allocate with diversification discipline",
      "Monitor performance and strategy relevance",
    ],
    whyNvWealth: [
      "Objective product suitability analysis",
      "Risk disclosure with full transparency",
      "Aligned to your broader long-term plan",
    ],
  },
  {
    slug: "nri-investment-services",
    title: "NRI Services",
    category: "Specialized Services",
    shortDescription:
      "Structured investment support for NRIs with practical guidance on compliant and goal-aligned wealth planning.",
    overview:
      "We support NRI investors with tailored advisory that considers residency context, banking routes, and long-term India-linked wealth goals.",
    idealFor:
      "NRIs seeking professional support to build and manage investments in India with clarity and structure.",
    keyOfferings: [
      "NRI-oriented investment planning support",
      "Portfolio structuring based on goals and horizon",
      "Coordination for practical execution steps",
      "Periodic review and advisory continuity",
    ],
    approach: [
      "Understand residency profile and planning goals",
      "Design a suitable India-focused allocation plan",
      "Support structured implementation",
      "Review and refine with life-stage changes",
    ],
    whyNvWealth: [
      "Personalized advisory for NRI realities",
      "Clear communication and transparent process",
      "Long-term discipline across market cycles",
    ],
  },
  {
    slug: "term-life-insurance",
    title: "Term Insurance",
    category: "Specialized Services",
    shortDescription:
      "Protection-first guidance to secure your family with suitable term insurance planning.",
    overview:
      "Protection is a core part of financial planning. We help you evaluate coverage needs and choose suitable term insurance so your wealth plan remains resilient.",
    idealFor:
      "Individuals and families who want to secure financial dependents through structured protection planning.",
    keyOfferings: [
      "Coverage adequacy assessment",
      "Term-plan suitability guidance",
      "Integration with financial goals",
      "Periodic protection review",
    ],
    approach: [
      "Assess liabilities and dependent needs",
      "Determine suitable coverage range",
      "Select policy structure aligned to goals",
      "Review coverage as life milestones change",
    ],
    whyNvWealth: [
      "Protection-first planning mindset",
      "Simple and transparent guidance",
      "Aligned with long-term family security goals",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((service) => service.slug === slug);
}
