import React, { useState, useEffect } from "react";
import { MessageSquare, Send, Sparkles, User, Brain, ShieldAlert, Cpu } from "lucide-react";

interface MockMessage {
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

const CONVERSATION_TEMPLATES = {
  risk: {
    question: "How do I mathematically size my lots for a 1% risk on EUR/USD?",
    response: `To mathematically size your position and risk precisely **1.00%** of your capital, you must use the following structural formula:

$$\\text{Position Size (Lots)} = \\frac{\\text{Account Capital} \\times \\text{Risk \\%}}{\\text{Stop Loss (Pips)} \\times \\text{Pip Value}}$$

### 📊 Practical Example Breakdown:
1. **Your Capital:** $10,000 USD
2. **Target Risk:** 1% ($100 USD maximum loss)
3. **Stop Loss distance:** 15 pips
4. **EUR/USD Standard Pip Value:** $10 USD per standard lot

$$\\text{Position Size} = \\frac{\\$10,000 \\times 0.01}{15 \\times \\$10} = \\frac{\\$100}{150} \\approx \\mathbf{0.67\\text{ Lots}}$$

### ⚠️ Discipline Protocol:
* Always verify broker spread adjustments before placing order entries.
* If your position size exceeds 0.67 lots, you are violating the **1.00% risk limit** set in your AI Trading Roadmap.`,
  },
  liquidity: {
    question: "What is the difference between Buy-Side and Sell-Side Liquidity?",
    response: `In institutional market structure, **Liquidity** represents clusters of stop-loss orders lying just outside of obvious support and resistance swing structures.

### 📈 Buy-Side Liquidity (BSL):
* **Where:** Located above swing highs, resistance zones, and double tops.
* **Who:** Represent resting buy stop orders belonging to short sellers (stop-losses) and breakout buyers (buy stops).
* **AI Tip:** Institutional smart money often drives price upward past these swing highs to tap into this pool of buyers, allowing them to fill large **sell orders** at premium prices.

### 📉 Sell-Side Liquidity (SSL):
* **Where:** Located beneath swing lows, support zones, and double bottoms.
* **Who:** Represent resting sell stop orders belonging to long buyers (stop-losses) and breakout sellers (sell stops).
* **AI Tip:** Smart money drives price downward beneath swing lows to tap into these selling stop-losses, allowing institutions to accumulate **buy positions** at discount wholesale prices.

*Always map BSL and SSL zones on your daily charts before defining your bias!*`,
  },
  psychology: {
    question: "I keep overtrading after taking a loss. How does the AI help me stop?",
    response: `Overtrading after a loss is a classic psychological defense mechanism known as **Revenge Trading**. It is triggered by the brain's "fight or flight" response to financial pain.

### 🧠 How the Nasr Lector AI Diary Fixes This:
1. **Behavioral Logging:** The moment you close a losing trade, the system prompts you to log your emotional state.
2. **Smart Drawdown Lockouts:** If the AI detects two consecutive emotional losses in under 4 hours, it triggers a **Soft Lockout** on your roadmap dashboard.
3. **Cool-down Quizzes:** To lift the soft lockout, you must complete a 3-question micro-session on emotional discipline, forcing your brain to switch from the emotional amygdala to the rational prefrontal cortex.

### 🛠️ Daily Rule:
*Set a hard limit of **maximum 2 losses per day**. Once hit, shut down your charts entirely. Capital preservation is the first step of trading longevity.*`,
  }
};

export default function AiMentorSection() {
  const [activeCategory, setActiveCategory] = useState<"risk" | "liquidity" | "psychology">("risk");
  const [messages, setMessages] = useState<MockMessage[]>([
    { sender: "user", text: CONVERSATION_TEMPLATES.risk.question, timestamp: "11:15 AM" },
    { sender: "ai", text: CONVERSATION_TEMPLATES.risk.response, timestamp: "11:15 AM" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectQuestion = (cat: "risk" | "liquidity" | "psychology") => {
    if (isTyping) return;
    setActiveCategory(cat);
    
    // Add user message
    const userMsg: MockMessage = {
      sender: "user",
      text: CONVERSATION_TEMPLATES[cat].question,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const aiMsg: MockMessage = {
        sender: "ai",
        text: CONVERSATION_TEMPLATES[cat].response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  // Scroll to bottom of chat window
  useEffect(() => {
    const chatContainer = document.getElementById("chat-window");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <section className="py-24 relative overflow-hidden bg-background border-t border-gold/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 mb-4 animate-pulse">
            <Cpu className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-xs font-semibold text-gold-light tracking-luxury uppercase">AI INTERACTION</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Your Personal <span className="text-gradient-gold">24/7 AI Mentor</span>
          </h2>
          <p className="text-lg text-foreground/75 font-sans leading-relaxed">
            Stop trading alone. The AI Mentor acts as your professional co-pilot, mathematically sizing your positions, diagnosing your trading psychology, and keeping you aligned with institutional order flow.
          </p>
        </div>

        {/* Chat Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Prompts (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-luxury text-gold uppercase block mb-2">SELECT A DIAGNOSTIC QUERY</span>
              
              {(["risk", "liquidity", "psychology"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleSelectQuestion(cat)}
                  disabled={isTyping}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-navy-light border-gold text-foreground shadow-[0_0_20px_rgba(212,175,55,0.06)]"
                      : "bg-navy-light/35 border-border/50 text-foreground/70 hover:border-gold/20 hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`p-1.5 rounded ${activeCategory === cat ? "bg-gold/15 text-gold" : "bg-foreground/5 text-foreground/55"}`}>
                      {cat === "risk" && <Brain className="w-4 h-4" />}
                      {cat === "liquidity" && <Sparkles className="w-4 h-4" />}
                      {cat === "psychology" && <ShieldAlert className="w-4 h-4" />}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {cat === "risk" ? "Risk Advisory" : cat === "liquidity" ? "Order Flow" : "Behavioral check"}
                    </span>
                  </div>
                  <p className="text-sm font-semibold leading-snug">
                    {cat === "risk" && "精确 Position Size calculation."}
                    {cat === "liquidity" && "BSL vs SSL institutional structures."}
                    {cat === "psychology" && "Solve Revenge Trading and drawdown habits."}
                  </p>
                </button>
              ))}
            </div>

            {/* AI Capability Card */}
            <div className="p-5 rounded-xl border border-gold/15 bg-gold/[0.02] backdrop-blur-sm">
              <h4 className="text-xs font-bold text-gold tracking-luxury uppercase mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Adaptive Cognitive Engine
              </h4>
              <p className="text-xs text-foreground/60 leading-relaxed font-sans">
                Every query runs through a specialized white-label prompt model tuned with 10,000+ hours of institutional strategy, currency analytics, and certified behavioral trade logs.
              </p>
            </div>
          </div>

          {/* Right Column: Chat Window Terminal (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl border border-border/60 bg-navy-light/45 backdrop-blur-md overflow-hidden flex flex-col justify-between min-h-[550px] shadow-2xl relative">
            
            {/* Header Status */}
            <div className="bg-navy-light/95 border-b border-border/50 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="relative w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <span className="absolute w-full h-full rounded-full bg-emerald-400 animate-ping opacity-75" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                    AI Mentor Core 
                    <span className="text-[9px] font-bold text-navy bg-gold/90 px-1.5 py-0.2 rounded font-mono">ACTIVE V2.0</span>
                  </h4>
                  <p className="text-[10px] text-foreground/45 font-mono">ESTABLISHED WHITE-LABEL DISCIPLINE ASSISTANT</p>
                </div>
              </div>

              <MessageSquare className="w-4 h-4 text-gold/60" />
            </div>

            {/* Messages Display Area */}
            <div 
              id="chat-window" 
              className="flex-1 p-6 overflow-y-auto space-y-6 max-h-[420px] font-sans scroll-smooth"
              style={{ scrollbarWidth: "thin" }}
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex gap-4 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : ""}`}
                >
                  {/* Avatar */}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                    msg.sender === "user" 
                      ? "bg-gold/10 border-gold/35 text-gold" 
                      : "bg-navy border-border/60 text-gold-light"
                  }`}>
                    {msg.sender === "user" ? <User className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                  </div>

                  {/* Bubble */}
                  <div className={`p-4 rounded-2xl relative ${
                    msg.sender === "user"
                      ? "bg-navy text-foreground border border-gold/15"
                      : "bg-[#0b0c10]/90 text-foreground/90 border border-border/40"
                  }`}>
                    {/* Text Render with line breaks support */}
                    <div className="text-sm leading-relaxed whitespace-pre-line font-medium select-text">
                      {msg.text}
                    </div>
                    
                    {/* Timestamp */}
                    <span className="text-[9px] text-foreground/35 font-mono block mt-2.5 text-right">{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {/* Typing Animation */}
              {isTyping && (
                <div className="flex gap-4 max-w-[85%] animate-pulse">
                  <div className="w-9 h-9 rounded-lg bg-navy border border-border/60 text-gold-light flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="p-4 rounded-2xl bg-[#0b0c10]/90 border border-border/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gold/70 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-gold/70 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-gold/70 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar Placeholder */}
            <div className="bg-navy-light/95 border-t border-border/50 px-6 py-4 flex items-center gap-4 z-10">
              <input
                type="text"
                disabled
                placeholder="Select one of the premium diagnostic queries on the left to test the AI Mentor..."
                className="flex-1 bg-background/50 border border-border/40 rounded-xl px-4 py-3 text-xs text-foreground/45 placeholder-foreground/25 font-sans outline-none cursor-not-allowed"
              />
              <button 
                disabled 
                className="p-3 rounded-xl bg-gradient-gold/30 text-navy/40 flex items-center justify-center cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
