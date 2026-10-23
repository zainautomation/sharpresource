export const contact = {
  gareth: {
    email: "gareth.sharp@sharpresources.co.uk",
    phone: "+44 (0)7725 981 260",
    tel: "+447725981260",
  },
  petra: {
    email: "petra.sharp@sharpresources.co.uk",
    phone: "+44 (0)7903 386 039",
    tel: "+447903386039",
  },
  charlotte: {
    email: "charlotte@sharpresources.co.uk",
    phone: "+44 (0)7539 762 811",
    tel: "+447539762811",
  },
  address: ["33b Elm Road", "Leigh-on-Sea", "Essex", "SS9 1SW"],
  transport: "Nearest train line is c2c from London Fenchurch Street.",
  mapsLink:
    "https://www.google.co.uk/maps/place/33B+Elm+Rd,+Southend-on-Sea,+Leigh-on-Sea+SS9+1SW/@51.5423788,0.6521128,17z",
  mapsEmbed:
    "https://maps.google.com/maps?q=33B%20Elm%20Rd%2C%20Leigh-on-Sea%20SS9%201SW&t=m&z=16&ie=UTF8&output=embed",
  linkedin: "https://www.linkedin.com/company/2744120",
};

export const searchSteps = [
  {
    title: "Take the brief",
    body: "Every assignment runs as an individual search mandate, retained or fee only, never a numbers game.",
  },
  {
    title: "Map the market",
    body: "We chart the market against your exact search criteria before a single call is made.",
  },
  {
    title: "Build a long list",
    body: "Every credible candidate is identified, including the passive talent no job board will reach.",
  },
  {
    title: "Engage and assess",
    body: "We open honest conversations to establish real suitability, motivation and timing.",
  },
  {
    title: "Create the short list",
    body: "Only the strongest fits make it through, so your time goes on the right people.",
  },
  {
    title: "Qualify in depth",
    body: "Candidates are tested against interview questions agreed with you up front.",
  },
  {
    title: "Meet in person",
    body: "A face to face, competency based interview with every candidate we put forward.",
  },
  {
    title: "Present with context",
    body: "You receive full interview notes and a briefing summary for each candidate.",
  },
];

export const verticals = [
  "Infrastructure, Cloud and Networking",
  "DevOps and Open Source",
  "Data and Web Analytics",
  "Frontend and Backend Development",
  "Business Intelligence and Big Data",
  "Oracle, SAP, Workday and Salesforce",
  "Digital Technology",
  "Programmatic, AdTech and MarTech",
  "Digital Creative, UX and UI",
  "AI, Machine Learning, VR and AR",
  "FinTech",
];

export const candidateFocus = [
  { role: "Directors and Senior Appointments", note: "Leadership hires that shape a business" },
  { role: "Billing and Non-Billing Managers", note: "People who grow teams and revenue" },
  { role: "Team Leaders", note: "Producers ready to lead from the front" },
  { role: "360 Consultants", note: "Full desk, client and candidate" },
  { role: "BD Consultants", note: "New business specialists" },
  { role: "Account Managers, Delivery and Resourcers", note: "The engine room of every agency" },
  { role: "Graduates and Trainees", note: "The next generation of billers" },
];

export const referralTiers = [
  { upTo: 5000, reward: 250, label: "Fee up to £5,000" },
  { upTo: 10000, reward: 500, label: "Fee £5,000 to £10,000" },
  { upTo: Infinity, reward: 1000, label: "Fee over £10,000" },
];

export function rewardFor(fee: number) {
  return referralTiers.find((t) => fee <= t.upTo)!.reward;
}
