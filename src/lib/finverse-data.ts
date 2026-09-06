export const events = [
  { slug: "market-mayhem", title: "MARKET MAYHEM", tagline: "Trade under pressure.", tags: "TRADING • STRATEGY • SPEED", no: "01" },
  { slug: "equity-hunter", title: "EQUITY HUNTER", tagline: "Find value before the market does.", tags: "RESEARCH • VALUATION • CONVICTION", no: "02" },
  { slug: "deal-room", title: "DEAL ROOM", tagline: "Negotiate. Value. Acquire.", tags: "STRATEGY • NEGOTIATION • DECISION", no: "03" },
  { slug: "finance-quiz", title: "FINANCE QUIZ", tagline: "Knowledge is your edge.", tags: "KNOWLEDGE • LOGIC • SPEED", no: "04" },
];

export const themes = [
  { no: "01", title: "THE FUTURE OF CAPITAL", body: "How capital moves, compounds and reshapes the institutions around it." },
  { no: "02", title: "AI × FINANCE", body: "Where machine intelligence meets research, markets and financial judgement." },
  { no: "03", title: "THE PSYCHOLOGY OF RISK", body: "A closer look at uncertainty, conviction and the decisions made under pressure." },
];

export const metrics = [
  { value: "500+", label: "PARTICIPANTS" },
  { value: "₹1L+", label: "PRIZE POOL" },
  { value: "10+", label: "CHALLENGES" },
  { value: "25+", label: "INSTITUTIONS" },
];

export const articles = [
  { title: "WHY MARKETS PANIC", category: "BEHAVIOURAL FINANCE", excerpt: "Fear travels faster than fundamentals. A field note on uncertainty and collective action." },
  { title: "CAN AI BEAT THE MARKET?", category: "TECHNOLOGY", excerpt: "The machines are learning. The market is adapting. Where does judgement still win?" },
  { title: "THE NEXT BIG TRADE", category: "MARKETS", excerpt: "The strongest signals rarely arrive with consensus attached." },
];

export type EventItem = (typeof events)[number];