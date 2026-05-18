/**
 * Nasr Lector - 100+ SEO Blog Articles Automated Generator Script
 * 
 * This script loops through 100 highly optimized, high-indexing trading SEO titles across
 * Forex, Crypto, Stocks, Risk Management, and Trading Psychology, calls the Gemini API
 * to generate a comprehensive 1,100+ word educational article for each, and compiles
 * them into a single high-performance static JSON articles database!
 * 
 * How to Run:
 * 1. Add your GEMINI_API_KEY to your `.env` file (e.g. GEMINI_API_KEY=AIzaSy...)
 * 2. Run: node scripts/generateBlogArticles.cjs
 */

const fs = require('fs');
const path = require('path');

const API_KEY = process.env.GEMINI_API_KEY;

// 100 SEO-Optimized Articles Titles list
const ARTICLE_TEMPLATES = [
  // RISK MANAGEMENT (20 Titles)
  { title: "The Mathematics of 1% Risk: How to Build Your First Sizing Roadmap", category: "Risk Management" },
  { title: "Standard Lots vs Mini Lots vs Micro Lots: The Sizing Calculator Guide", category: "Risk Management" },
  { title: "Understanding Leverage: How to Prevent Margin Calls on High-Volatility Feeds", category: "Risk Management" },
  { title: "The Average True Range (ATR) Metric: Setting Volatility-Adjusted Stops", category: "Risk Management" },
  { title: "Why Drawdown Lockouts Drawdown Controls Guard Your Capital Assets", category: "Risk Management" },
  { title: "Calculating Expected Value: The Mathematical Edge of Consistent Portfolios", category: "Risk Management" },
  { title: "Risk-to-Reward Ratio: Why a 1:3 RR Solves low Win-Rate Drawdowns", category: "Risk Management" },
  { title: "The Correlation Rule: Managing Exposure Across EUR/USD, GBP/USD and USD/CHF", category: "Risk Management" },
  { title: "Scaling In vs Scaling Out: Managing Winning Trades in Strong Breakouts", category: "Risk Management" },
  { title: "The Rule of 2 Losses Daily: How to Prevent Emotional Amygdala Overexposure", category: "Risk Management" },
  { title: "Portfolio Diversification Guidelines: Correlating Forex with Crypto Assets", category: "Risk Management" },
  { title: "The Martingale Fallacy: Why Doubling Down is the Fastest Path to Ruin", category: "Risk Management" },
  { title: "Managing Overnight Risk: Rollover Fees and Swap Rates Explained", category: "Risk Management" },
  { title: "Setting Hard Stop Losses vs Mental Stop Losses: The Psychological Reality", category: "Risk Management" },
  { title: "Dealing with Slippage: Sizing Positions for High-Impact Market Orders", category: "Risk Management" },
  { title: "The Mathematics of Recovering from a 10% Drawdown: The Real Percent Scale", category: "Risk Management" },
  { title: "Leverage Controls for Retail Traders: Dubai vs Europe Regulatory Sizing", category: "Risk Management" },
  { title: "Tracking Your Equity Curve: Analyzing Drawdown Duration in Trading Logs", category: "Risk Management" },
  { title: "Stop Loss Invalidation Zones: Sizing Trades for Structural Rejection Points", category: "Risk Management" },
  { title: "Sizing Forex Trades: Standard Pip Value Calculations Made Easy", category: "Risk Management" },

  // TRADING PSYCHOLOGY (20 Titles)
  { title: "Conquering Revenge Trading: How to Reset Cortisol Levels After a Loss", category: "Psychology" },
  { title: "The Amygdala Hijack in Active Trading: How Fear Triggers Bad Stops", category: "Psychology" },
  { title: "FOMO (Fear Of Missing Out): Overcoming Impulse Buy Triggers on Crypto Feeds", category: "Psychology" },
  { title: "Developing Emotional Neutrality: How to Trade Like a High-Volume Machine", category: "Psychology" },
  { title: "The Power of the AI Trading Diary: Logging Emotional Patterns for Consistent Growth", category: "Psychology" },
  { title: "Dealing with the Impostor Syndrome: The Reality of Active Trading Consistency", category: "Psychology" },
  { title: "Managing Winning Streak Euphoria: Why Success Leads Directly to Overleverage", category: "Psychology" },
  { title: "Establishing a Pre-Market Routine: Preparing Your Brain for NY Session Feeds", category: "Psychology" },
  { title: "The Cortisol Cool-down Cycle: Why Step-Away Breaks Save Accounts", category: "Psychology" },
  { title: "Creating a Positive Feedback Loop: Transforming Losing Trades into Strategy Data", category: "Psychology" },
  { title: "Cognitive Fatigue at the Screens: How Long Sessions Degrade Stop-Loss Discipline", category: "Psychology" },
  { title: "Goal Setting vs System Setting: Why Process Outperforms Financial Targets", category: "Psychology" },
  { title: "The Boredom Factor: Staying Disciplined When the Markets Aren't Moving", category: "Psychology" },
  { title: "Overcoming Loss Aversion: Embracing the Cost of Business in Active Feeds", category: "Psychology" },
  { title: "Trading as a Skill vs Trading as Gambling: The Critical Mental Shift", category: "Psychology" },
  { title: "Developing Mindfulness and Self-Logging Habits: A Practical Trader Program", category: "Psychology" },
  { title: "The Anchor Effect: Why Holding Onto Losing Trades Kills Account Equity", category: "Psychology" },
  { title: "Developing Patient Waiting Cycles: Waiting for the Ideal Liquidity Raid", category: "Psychology" },
  { title: "Dealing with Public Opinion: Why Ignoring Social Media Trading Advice is Critical", category: "Psychology" },
  { title: "Conquering Drawdown Depressions: Staying Accountable During Losing Weeks", category: "Psychology" },

  // FOREX ORDER FLOW (20 Titles)
  { title: "Mastering Institutional Order Blocks on EUR/USD: Mapping Smart Money Entries", category: "Forex" },
  { title: "Identifying Liquidity Sweeps below Swing Lows: A Practical Stop Hunt Strategy", category: "Forex" },
  { title: "The New York Session Playbook: Slicing Liquidity Pools on USD/JPY and GBP/USD", category: "Forex" },
  { title: "Fair Value Gaps (FVG): Understanding Imbalances in High-Impact Price Action", category: "Forex" },
  { title: "Mitigation Blocks vs Breaker Blocks: Finding High-Probability Reversal Zones", category: "Forex" },
  { title: "Asia Session Highs and Lows: Designing the NY Session Breakout Strategy", category: "Forex" },
  { title: "The London Session Open: Sizing Up Volatility and Directional Bias On Majors", category: "Forex" },
  { title: "Using the Institutional Order Flow Matrix to Follow High-Volume Banks", category: "Forex" },
  { title: "Premium vs Discount Pricing Zones: Never Buy High, Never Sell Low", category: "Forex" },
  { title: "Interest Rate Differentials: How Fed and ECB Macro Decisions Drive Forex Trends", category: "Forex" },
  { title: "The Market Structure Shift (MSS): Confirming Reversals with Volume Breaks", category: "Forex" },
  { title: "Multi-Timeframe Analysis: Combining Daily Bias with 15-Minute Executions", category: "Forex" },
  { title: "DXY (US Dollar Index) Correlation: Predicting EUR/USD and GBP/USD Sweeps", category: "Forex" },
  { title: "Resting Liquidity Pools: Finding BSL and SSL Levels on Currency Feeds", category: "Forex" },
  { title: "Dealing with High-Spread News Events: Why Spreads Widening Triggers Rest Stops", category: "Forex" },
  { title: "The Complete Guide to the Wyckoff Accumulation Cycle on Forex Charting", category: "Forex" },
  { title: "Volume Spread Analysis (VSA): Identifying Bank Accumulation and Distribution", category: "Forex" },
  { title: "Understanding the Central Bank Dealers Range (CBDR): Daily Range Limits", category: "Forex" },
  { title: "Trading the True Daily Range: Projections and Standard Deviation Projections", category: "Forex" },
  { title: "Identifying Stop Hunt Sweeps: How to Place Safe Stops Behind Invalidation Zones", category: "Forex" },

  // CRYPTO MARKETS (20 Titles)
  { title: "Crypto Liquidity Sweeps: How High-Beta Crypto Exchanges Raid Stop Losses", category: "Crypto" },
  { title: "Bitcoin Order Blocks: Mapping Institutional Buy Walls on the Weekly Feed", category: "Crypto" },
  { title: "Trading Ethereum Gas and Imbalances: Following High-Volume Smart Contract Shifts", category: "Crypto" },
  { title: "Funding Rates and Long-Short Ratios: Predicting Impending Liquidity Liquidation Squeezes", category: "Crypto" },
  { title: "High-Beta Altcoins Strategy: Sizing Risk for Extreme Volatility Swings", category: "Crypto" },
  { title: "The Halving Cycles: Analyzing Macro Trends and Invalidation Zones on BTC", category: "Crypto" },
  { title: "Derivatives Trading vs Spot Accumulation: Sizing Leverage for Crypto Futures", category: "Crypto" },
  { title: "Spot ETF Capital Flows: How Wall Street Direct Inflow Changes Crypto Liquidity", category: "Crypto" },
  { title: "Differentiating Retail Volume from Whales Order Flow in Crypto Markets", category: "Crypto" },
  { title: "Defending Against the Crypto Flush: How Margin Liquidations Cascade Past Support", category: "Crypto" },
  { title: "The Sol-USD Network Boom: Speed-Trading Liquidity Breaks on High-Volume Feeds", category: "Crypto" },
  { title: "Stablecoin Dominance Index (USDT.D): Predicting Capital Shuffling Into Bitcoin", category: "Crypto" },
  { title: "Crypto Order Book Depth: Spotting Institutional Spoofing and Real Liquidity Walls", category: "Crypto" },
  { title: "Wyckoff Distribution on High-Beta Altcoins: Dodging the Pump and Dump Cycle", category: "Crypto" },
  { title: "Trading Liquidity Gaps: Slippage Rules on High-Beta Crypto Futures Platforms", category: "Crypto" },
  { title: "Sizing Decentralized Finance (DeFi) Yield Risks: Sizing Capital Exposure Safely", category: "Crypto" },
  { title: "Crypto Invalidation Points: Designing Risk Parameters on Altcoin Rejections", category: "Crypto" },
  { title: "Bitcoin Dominance (BTC.D): Designing Altcoin Exposure Rules for Bull Markets", category: "Crypto" },
  { title: "Trading Decentralized Derivatives (Perps): Sizing Leverage and Funding Squeezes", category: "Crypto" },
  { title: "Understanding the Crypto Funding Arb: Hedging Long Exposures Mathematically", category: "Crypto" },

  // STOCKS & INDICES (20 Titles)
  { title: "Slicing the S&P 500 NY Open: Mapping Order Flow in the First 30 Minutes", category: "Stocks & Indices" },
  { title: "Nasdaq 100 Liquidity Pools: Trading NYC Session Stop Raids on Tech Giants", category: "Stocks & Indices" },
  { title: "Corporate Earnings Releases: Hedging Volatility and Sizing Stocks Positions Safely", category: "Stocks & Indices" },
  { title: "The Market Profile Concept: Value Areas and POC in Indices Charting", category: "Stocks & Indices" },
  { title: "Sector Rotation Rules: Capital Shuffling from Tech to Cyclical Stocks On Feeds", category: "Stocks & Indices" },
  { title: "High-Beta Tech Stocks (NVDA, TSLA): Setting Risk Guidelines on Volatile Breaks", category: "Stocks & Indices" },
  { title: "Using the NYSE Tick Index: Gauging Live Market Breadth During Opening Sweeps", category: "Stocks & Indices" },
  { title: "Gap Fills on Stocks: Institutional Rules for Playback on Weekend Gap Openings", category: "Stocks & Indices" },
  { title: "Trading Dow Jones 30 (US30): Sizing Lots for Extreme Point Volatility Swings", category: "Stocks & Indices" },
  { title: "Option Volatility Skew: Predicting Major Breakouts on Large Cap Stocks", category: "Stocks & Indices" },
  { title: "The VIX Index: Measuring Fear Indicators and Adjusting Position Sizing Parameters", category: "Stocks & Indices" },
  { title: "Dark Pools Liquidity Walls: Spotting Non-Public Bank Executions on Indices", category: "Stocks & Indices" },
  { title: "Relative Strength Index (RSI) Divergence on Large Cap Blue Chips: Reversal Guides", category: "Stocks & Indices" },
  { title: "Sizing Portfolio Exposure on Index ETFs: Long Term Compounding Guidelines", category: "Stocks & Indices" },
  { title: "Moving Average Ribbon Sweeps: Defining Trends on Daily Index Chart Feeds", category: "Stocks & Indices" },
  { title: "Dealing with Stock Halts: Managing Overnight Sizing Risks on Small-Cap Tech", category: "Stocks & Indices" },
  { title: "The Dow Theory Principles: Gauging Macro Capital Expansion Across Indices", category: "Stocks & Indices" },
  { title: "Institutional Accumulation in Stocks: Following Institutional Block Buyers Safely", category: "Stocks & Indices" },
  { title: "Stock Splits Dynamics: Sizing Slices and Volatility Shifts Post-Split", category: "Stocks & Indices" },
  { title: "The NYC Exchange Closing Cross: Sizing Volatility In the Final NY 10 Minutes", category: "Stocks & Indices" }
];

async function generateArticle(item, index) {
  const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  console.log(`[${index + 1}/100] Generating: "${item.title}"...`);

  if (!API_KEY) {
    // Local pre-seed fallback
    return {
      id: index + 1,
      slug,
      title: item.title,
      category: item.category,
      date: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: "8 min read",
      author: "Nasr Lector Elite",
      description: `Learn how to master ${item.title} to optimize your personalized AI Trading Roadmap.`,
      content: `# ${item.title}
      
Smart money operations require structured understanding, strict math risk rules, and clinical emotional discipline.

## 1. Tactical Core Principles
When exploring **${item.title}**, modern traders must look past obvious retail charts and understand the underlying institutional volume profiles. Retail indicators (like plain RSI, MACD, or standard moving averages) are lagging heuristics that fail to represent real bank order matching books.

### 📈 Structural Execution Checkpoints
- **Point of Invalidation:** Always place your stop-loss order exactly behind structural pivot levels to avoid sweep hunts.
- **The 1% Rule:** Never exceed 1.00% capital exposure per transaction under any circumstances.
- **Deep Confluence Matching:** Match higher timeframe biases (e.g. 4H chart order blocks) with low timeframe markers (e.g. 15M fair value gaps).

## 2. Institutional Market Mechanics
Market makers match orders at specific resting liquidity pools (BSL and SSL). When the price sweeps these levels, it matches massive retail sell-stops or buy-stops, leaving behind signature displacement candles. Understanding these sweeps allows you to enter in phase with market makers rather than trading retail retail indicators.

## 3. Cognitive Risk Logging Checklist
Emotional self-discipline is what distinguishes professional traders from retail gamblers:
1. **The Amygdala Cool-down:** Stop trading immediately after two consecutive losses. Leave the desk for 15 minutes.
2. **Commit to the Log:** Document every entry, risk size, exit, and emotional state inside your **Nasr Lector AI Diary**.
3. **Execute Without Bias:** Treat each trade as a single data point in a sequence of 100 setup events.`
    };
  }

  // API active
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Write an extremely comprehensive, highly professional, educational, SEO-optimized blog article titled "${item.title}" for a premium trading academy website.
            
            The article MUST:
            1. Be at least 1,100 words long.
            2. Be written in clean Markdown format with structured headings (H1, H2, H3), bullet points, and practical examples.
            3. Explicitly connect the trading concept to:
               - Mathematical 1% risk position sizing.
               - Smart Money institutional order flow (sweeping retail stop-losses).
               - Emotional self-discipline, revenge trading, and maintaining a structured trading diary.
            4. Include a step-by-step practical checklist for retail traders to practice on their charts.
            
            Do not include any greeting or introduction remarks. Start immediately with the Markdown content.`
          }]
        }],
        generationConfig: {
          maxOutputTokens: 2500,
          temperature: 0.7
        }
      })
    });

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (!text) {
      throw new Error("Empty response from Gemini API");
    }

    return {
      id: index + 1,
      slug,
      title: item.title,
      category: item.category,
      date: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: `${Math.ceil(text.split(/\s+/).length / 200)} min read`,
      author: "Nasr Lector Elite",
      description: text.split("\n").find(l => l.trim().length > 50 && !l.includes("#"))?.substring(0, 160) + "..." || `Learn how to master ${item.title} inside our trading academy.`,
      content: text
    };
  } catch (error) {
    console.error(`   [Error] Failed to generate: ${error.message}`);
    return {
      id: index + 1,
      slug,
      title: item.title,
      category: item.category,
      date: new Date().toLocaleDateString(),
      readTime: "6 min read",
      author: "Nasr Lector Elite",
      description: `Learn how to master ${item.title} to optimize your trading consistency.`,
      content: `# ${item.title}\n\n[Error generating article from API. Dynamic seed active.]`
    };
  }
}

async function run() {
  console.log("================================================================");
  console.log(" Nasr Lector Blog Articles Database Generator starting...");
  console.log(` Found: ${ARTICLE_TEMPLATES.length} articles to build.`);
  console.log("================================================================");

  const results = [];
  
  for (let i = 0; i < ARTICLE_TEMPLATES.length; i++) {
    const article = await generateArticle(ARTICLE_TEMPLATES[i], i);
    results.push(article);
    if (API_KEY) {
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
  }

  const targetDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const outputPath = path.join(targetDir, 'blogArticles.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log("================================================================");
  console.log(` SUCCESS: Compiled all ${results.length} articles!`);
  console.log(` Output saved to: ${outputPath}`);
  console.log("================================================================");
}

run();
