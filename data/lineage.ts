export interface Person {
  id: string;
  name: string;
  title?: string;
  born?: string;
  died?: string;
  description: string;
  portrait?: string;
  spouses?: string[];
  role: "ancestor-paternal" | "ancestor-maternal" | "shivaji" | "descendant" | "spouse";
  generation: number; // negative = ancestor, 0 = Shivaji, positive = descendant
  parentIds?: string[];
  spouseIds?: string[];
}

export const people: Person[] = [
  // Generation -3 (great-grandparents)
  {
    id: "meghoji",
    name: "Meghoji Bhosale",
    title: "Deshmukh",
    born: "c. 1530",
    died: "c. 1590",
    description: "Meghoji Bhosale was a deshmukh (revenue official) in the Deccan. He established the Bhosale family as a significant landowning clan, laying the foundation for the family's later military prominence under the Ahmadnagar Sultanate.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Maratha_warrior_illustration.jpg/400px-Maratha_warrior_illustration.jpg",
    role: "ancestor-paternal",
    generation: -3
  },
  // Generation -2
  {
    id: "maloji",
    name: "Maloji Bhosale",
    title: "Sardar, Deshmukh",
    born: "c. 1552",
    died: "1605",
    description: "Maloji Bhosale (Shivaji's paternal grandfather) rose from a village official to a powerful sardar under the Ahmadnagar Sultanate. He was awarded the jagirs of Pune and Supe by the Nizam Shah. A visionary figure, he named his two sons Shahaji and Sharifji, reportedly after two Muslim saints whose blessings he had sought. He died in a battle elephant accident.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Maratha_warrior_illustration.jpg/400px-Maratha_warrior_illustration.jpg",
    role: "ancestor-paternal",
    generation: -2,
    parentIds: ["meghoji"]
  },
  {
    id: "umabai-maloji",
    name: "Umabai",
    born: "c. 1555",
    died: "c. 1620",
    description: "Wife of Maloji Bhosale and grandmother of Shivaji. Little is recorded about her life, but she was the matriarch of the Bhosale family during its rise to prominence under the Ahmadnagar Sultanate.",
    portrait: "",
    role: "spouse",
    generation: -2,
    spouseIds: ["maloji"]
  },
  {
    id: "lakhuji",
    name: "Lakhuji Jadhavrao",
    title: "Sardar of Ahmadnagar",
    born: "c. 1575",
    died: "1629",
    description: "Lakhuji Jadhavrao was Jijabai's father and Shivaji's maternal grandfather. A powerful Maratha sardar serving the Ahmadnagar Sultanate, he was murdered by the Nizam Shah in 1629 in a court intrigue — a trauma that deeply shaped Jijabai's determination to see her son build an independent Hindu kingdom.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Maratha_warrior_illustration.jpg/400px-Maratha_warrior_illustration.jpg",
    role: "ancestor-maternal",
    generation: -2
  },
  // Generation -1
  {
    id: "shahaji",
    name: "Shahaji Bhosale",
    title: "Sardar, General",
    born: "1594",
    died: "1664",
    description: "Shahaji Bhosale (Shivaji's father) was one of the most brilliant military commanders of the Deccan in his time, serving successively the Ahmadnagar Sultanate, the Mughals, and the Bijapur Sultanate. He held the jagir of Poona (Pune) and later commanded the Bijapur Sultanate's Karnataka campaigns. Though largely absent from young Shivaji's life, he recognized his son's ambitions and provided tacit support. He died in a hunting accident in 1664.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shahaji_Bhosale.jpg/400px-Shahaji_Bhosale.jpg",
    role: "ancestor-paternal",
    generation: -1,
    parentIds: ["maloji", "umabai-maloji"]
  },
  {
    id: "jijabai",
    name: "Jijabai",
    title: "Rajmata (Queen Mother)",
    born: "12 January 1598",
    died: "17 June 1674",
    description: "Jijabai was the mother of Shivaji and the most formative influence on his life. Daughter of the Maratha sardar Lakhuji Jadhavrao, she raised Shivaji largely alone after her husband Shahaji remained in Bijapur. She instilled in him a fierce sense of pride in the Maratha identity, stories of the Ramayana and Mahabharata, and a vision of Hindavi Swarajya (self-rule). She lived to see her son crowned Chhatrapati but died just 12 days after his coronation.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Jijabai.jpg/400px-Jijabai.jpg",
    role: "ancestor-maternal",
    generation: -1,
    parentIds: ["lakhuji"],
    spouseIds: ["shahaji"]
  },
  {
    id: "tukabai",
    name: "Tukabai Mohite",
    title: "Second wife of Shahaji",
    born: "c. 1610",
    died: "c. 1680",
    description: "Tukabai Mohite was the second wife of Shahaji Bhosale and stepmother of Shivaji. She was the mother of Venkoji (Ekoji), Shivaji's half-brother, who founded the Thanjavur Maratha kingdom in Tamil Nadu — a separate royal lineage that persisted into the 19th century.",
    portrait: "",
    role: "spouse",
    generation: -1,
    spouseIds: ["shahaji"]
  },
  // Generation 0 — Shivaji
  {
    id: "shivaji",
    name: "Chhatrapati Shivaji Maharaj",
    title: "Chhatrapati of the Maratha Kingdom",
    born: "19 February 1630",
    died: "3 April 1680",
    description: "Shivaji Bhosale founded the Maratha Empire and is considered one of the greatest warriors and administrators in Indian history. Born at Shivneri Fort to Jijabai and Shahaji, he captured his first fort (Torna) at age 16. He fought the Bijapur Sultanate, the Mughals under Aurangzeb, the Siddis, and the Portuguese simultaneously. He was crowned Chhatrapati (Emperor) in 1674 at Raigad — one of the most elaborate coronations in Indian history. He pioneered guerrilla warfare (ganimi kava), built a formidable navy, and created a sophisticated administrative system. He died of fever at Raigad at age 50.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Shivaji_British_Museum.jpg/400px-Shivaji_British_Museum.jpg",
    role: "shivaji",
    generation: 0,
    parentIds: ["shahaji", "jijabai"]
  },
  {
    id: "saibai",
    name: "Saibai Nimbalkar",
    title: "First wife, Queen",
    born: "c. 1633",
    died: "5 September 1659",
    description: "Saibai Nimbalkar was Shivaji's first and most beloved wife. She was the daughter of Chandrarao More of the Nimbalkar clan. She died young at Rajgad Fort in 1659, possibly of illness. She was the mother of Sambhaji, Shivaji's eldest son and heir. Shivaji was deeply grieved by her death.",
    portrait: "",
    role: "spouse",
    generation: 0,
    spouseIds: ["shivaji"]
  },
  {
    id: "soyarabai",
    name: "Soyarabai Mohite",
    title: "Second wife, Queen",
    born: "c. 1640",
    died: "1681",
    description: "Soyarabai Mohite was Shivaji's second wife and mother of Rajaram. After Shivaji's death, she conspired to crown her son Rajaram instead of the rightful heir Sambhaji. The plot failed and she was imprisoned. She died in captivity, possibly executed on Sambhaji's orders.",
    portrait: "",
    role: "spouse",
    generation: 0,
    spouseIds: ["shivaji"]
  },
  // Generation +1
  {
    id: "sambhaji",
    name: "Chhatrapati Sambhaji Maharaj",
    title: "Chhatrapati (2nd)",
    born: "14 May 1657",
    died: "11 March 1689",
    description: "Sambhaji was Shivaji's eldest son and his successor as Chhatrapati. A gifted military commander and scholar (he wrote the Budhbhushan in Sanskrit), he fought ferociously against Aurangzeb's massive Deccan campaign. He was captured by Mughal forces in 1689, reportedly betrayed, and was publicly tortured for weeks by Aurangzeb who demanded he convert to Islam. Sambhaji refused and was executed, becoming a martyr. His defiance, even in death, galvanized the Marathas to fight on.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sambhaji_Maharaj.jpg/400px-Sambhaji_Maharaj.jpg",
    role: "descendant",
    generation: 1,
    parentIds: ["shivaji", "saibai"]
  },
  {
    id: "rajaram",
    name: "Chhatrapati Rajaram Maharaj",
    title: "Chhatrapati (3rd)",
    born: "24 February 1670",
    died: "2 March 1700",
    description: "Rajaram was Shivaji's second son by Soyarabai. After Sambhaji's capture and execution (1689), Rajaram became Chhatrapati. He fled Raigad before the Mughals took it and continued the resistance from Jinji Fort in Tamil Nadu, then Panhala, and Sinhagad (where he died of illness at age 30). His reign saw the Maratha guerrilla resistance that would eventually exhaust Aurangzeb.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Maratha_warrior_illustration.jpg/400px-Maratha_warrior_illustration.jpg",
    role: "descendant",
    generation: 1,
    parentIds: ["shivaji", "soyarabai"]
  },
  {
    id: "sakhubai",
    name: "Sakhubai",
    title: "Daughter of Shivaji",
    born: "1647",
    died: "c. 1680",
    description: "Sakhubai was one of Shivaji's daughters. She was married into the Shirke clan. Little is recorded about her personal history, though the Shirke family played an important but ambivalent role in the Maratha kingdom — some members collaborated with the Mughals.",
    portrait: "",
    role: "descendant",
    generation: 1,
    parentIds: ["shivaji", "saibai"]
  },
  {
    id: "ranubai",
    name: "Ranubai",
    title: "Daughter of Shivaji",
    born: "c. 1660",
    died: "unknown",
    description: "Ranubai was another of Shivaji's daughters, born to one of his later wives. She was married into a Maratha noble family. Like many royal daughters of the era, her life is not well documented in historical records.",
    portrait: "",
    role: "descendant",
    generation: 1,
    parentIds: ["shivaji"]
  },
  // Generation +2
  {
    id: "shahu1",
    name: "Chhatrapati Shahu Maharaj I",
    title: "Chhatrapati (4th), Emperor",
    born: "18 May 1682",
    died: "15 December 1749",
    description: "Shahu was Sambhaji's son and one of the most significant rulers in Maratha history. He was captured by Aurangzeb as a child in 1689 and kept at the Mughal court for 18 years. Released in 1707 after Aurangzeb's death, he claimed the Chhatrapati throne and appointed Bajirao Peshwa I as his Prime Minister — ushering in the great age of Maratha expansion under the Peshwas. Shahu's reign saw the Maratha Confederacy reach its greatest extent.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Shahu_of_Satara.jpg/400px-Shahu_of_Satara.jpg",
    role: "descendant",
    generation: 2,
    parentIds: ["sambhaji"]
  },
  {
    id: "sambhaji2",
    name: "Sambhaji II (Kolhapur)",
    title: "Chhatrapati of Kolhapur",
    born: "1698",
    died: "1760",
    description: "Sambhaji II was Rajaram's son and founder of the Kolhapur branch of the Maratha dynasty. After Shahu claimed the Satara throne, the Maratha kingdom split into two — the Satara (Shahu's line) and Kolhapur (Rajaram's line) branches, which frequently came into conflict. The Kolhapur Chhatrapatis maintained a separate royal lineage.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Maratha_warrior_illustration.jpg/400px-Maratha_warrior_illustration.jpg",
    role: "descendant",
    generation: 2,
    parentIds: ["rajaram"]
  },
  {
    id: "tarabai",
    name: "Tarabai",
    title: "Regent Queen of Maratha Kingdom",
    born: "1675",
    died: "9 December 1761",
    description: "Tarabai was Rajaram's wife and one of the most remarkable figures in Maratha history. After Rajaram's death (1700), she became regent for her infant son and led the Maratha resistance against Aurangzeb's vastly larger army for seven years (1700–1707). Her guerrilla campaigns exhausted the elderly Mughal emperor. After Shahu's release and rival claim, she continued fighting but eventually reconciled. She lived to the extraordinary age of ~86.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Tarabai_of_Maratha.jpg/400px-Tarabai_of_Maratha.jpg",
    role: "spouse",
    generation: 2,
    spouseIds: ["rajaram"]
  },
  // Generation +3
  {
    id: "ramraja",
    name: "Ram Raja (Shahu II)",
    title: "Chhatrapati (adopted heir of Shahu)",
    born: "1726",
    died: "1777",
    description: "Ram Raja was adopted by Shahu Maharaj as his heir since Shahu had no biological children. He succeeded Shahu as Chhatrapati in 1749. However, by this time the Peshwas had become the real power behind the throne, and the Chhatrapati's role was largely ceremonial. Ram Raja spent much of his reign under Peshwa supervision at Satara.",
    portrait: "",
    role: "descendant",
    generation: 3,
    parentIds: ["shahu1"]
  },
  {
    id: "venkoji",
    name: "Venkoji Bhosale (Ekoji I)",
    title: "Founder of Thanjavur Maratha Kingdom",
    born: "1637",
    died: "1686",
    description: "Venkoji (also called Ekoji) was Shahaji's son by his second wife Tukabai, making him Shivaji's half-brother. After Shahaji's death, Venkoji inherited the Karnataka jagir and carved out an independent kingdom centered at Thanjavur (Tanjore) in Tamil Nadu. The Thanjavur Maratha dynasty he founded survived until the British annexed it in 1855 and produced remarkable scholars and patrons of South Indian classical arts and music.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Maratha_warrior_illustration.jpg/400px-Maratha_warrior_illustration.jpg",
    role: "descendant",
    generation: 1,
    parentIds: ["shahaji", "tukabai"]
  }
];

// Node positions for React Flow layout
export const nodePositions: Record<string, { x: number; y: number }> = {
  // Generation -3
  meghoji: { x: 300, y: 0 },
  // Generation -2
  maloji: { x: 200, y: 160 },
  "umabai-maloji": { x: 380, y: 160 },
  lakhuji: { x: 680, y: 160 },
  // Generation -1
  shahaji: { x: 200, y: 320 },
  tukabai: { x: 380, y: 320 },
  jijabai: { x: 680, y: 320 },
  // Generation 0
  shivaji: { x: 440, y: 500 },
  saibai: { x: 200, y: 500 },
  soyarabai: { x: 700, y: 500 },
  // Generation +1
  sambhaji: { x: 200, y: 680 },
  sakhubai: { x: 420, y: 680 },
  ranubai: { x: 580, y: 680 },
  rajaram: { x: 760, y: 680 },
  venkoji: { x: 940, y: 500 },
  // Generation +2
  shahu1: { x: 200, y: 860 },
  sambhaji2: { x: 760, y: 860 },
  tarabai: { x: 940, y: 860 },
  // Generation +3
  ramraja: { x: 200, y: 1040 },
};
