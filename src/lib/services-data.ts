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
    slug: "mutual-funds",
    title: "Mutual Funds",
    category: "Investment Solutions",
    shortDescription:
      "Smart, goal-based mutual fund portfolios designed for disciplined growth, diversification, and tax-efficient wealth building.",
    overview:
      "Every investor has different goals. We design personalized investment plans that match your lifestyle, risk comfort, and future plans—making wealth building a disciplined and simple process through mutual funds.",
    idealFor:
      "Investors seeking diversified, professionally managed portfolios with accessible, goal-based investment planning.",
    keyOfferings: [
      "Goal-based portfolio design aligned to life milestones",
      "Diversified allocation across equity, debt, and liquid funds",
      "Quality scheme selection backed by rigorous research",
      "Tax-efficient solutions using ELSS and structured SIPs",
    ],
    approach: [
      "Define your objectives clearly: wealth creation, protection, or tax savings",
      "Profile your life stage, income, and risk comfort",
      "Design a tailored mutual fund mix for your goals",
      "Select the right schemes and monitor the portfolio regularly",
    ],
    whyNvWealth: [
      "Personalized, goal-first mutual fund planning",
      "Transparent guidance on regulated, research-backed schemes",
      "Simplified investing with disciplined monitoring",
    ],
  },
  {
    slug: "bonds",
    title: "Bonds",
    category: "Investment Solutions",
    shortDescription:
      "Strategic bond investments for steady income, capital preservation, and portfolio diversification with managed risk exposure.",
    overview:
      "Bonds offer a reliable path to steady income and capital preservation in your investment portfolio. We help you navigate the bond market with expert analysis of government securities, corporate bonds, and debt instruments to balance risk and returns.",
    idealFor:
      "Conservative investors seeking steady income streams, capital preservation, and portfolio diversification with lower volatility than equities.",
    keyOfferings: [
      "Government and corporate bond portfolio construction",
      "Yield curve analysis and duration management",
      "Credit rating assessment and risk evaluation",
      "Tax-efficient bond laddering strategies",
    ],
    approach: [
      "Assess your income needs and risk tolerance for bonds",
      "Analyze current bond market conditions and yields",
      "Build diversified bond portfolio across maturities",
      "Monitor interest rate changes and rebalance as needed",
    ],
    whyNvWealth: [
      "Expert analysis of bond markets and credit quality",
      "Focus on capital preservation with income generation",
      "Transparent pricing and no hidden charges",
    ],
  },
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
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((service) => service.slug === slug);
}
