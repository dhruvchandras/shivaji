export type Era = "pre" | "shivaji" | "post" | "peak" | "decline" | "today";

export interface FortPhoto {
  url: string;
  caption: string;
}

export interface Fort {
  id: string;
  name: string;
  aliases: string[];
  lat: number;
  lng: number;
  builtBy: "shivaji" | "other";
  builtYear: string;
  builder: string;
  whyBuilt: string;
  battles: string[];
  ownershipHistory: string[];
  funFacts: string[];
  condition: string;
  canVisit: boolean;
  visitInfo: string;
  activeEras: Era[];
  photos: FortPhoto[];
  // Wikipedia article title used to fetch real thumbnail via REST API
  wikipediaTitle: string;
}

export const forts: Fort[] = [
  {
    id: "raigad",
    name: "Raigad Fort",
    aliases: ["Rairi", "Raigadh"],
    lat: 18.2333,
    lng: 73.4408,
    builtBy: "other",
    builtYear: "c. 1030 CE (renovated by Shivaji 1656–1674)",
    builder: "Chandrarao More; renovated and expanded by Shivaji Maharaj",
    whyBuilt: "Shivaji chose Raigad as his capital because of its impregnable natural defenses — a sheer cliff rising 820 m above sea level — and its central position in the Sahyadri ranges. He was crowned here as Chhatrapati in June 1674.",
    battles: [
      "Siege of Raigad by Aurangzeb's son Muazzam (1689) — the fort fell after Sambhaji's capture and execution",
      "Maratha recapture under Rajaram (1690s)",
      "Final British capture during the Third Anglo-Maratha War (1818)"
    ],
    ownershipHistory: [
      "Chandrarao More clan (c. 1030)",
      "Bijapur Sultanate",
      "Shivaji Maharaj (1656) — made capital of the Maratha kingdom",
      "Mughal forces (1689)",
      "Marathas (1690s)",
      "British East India Company (1818)"
    ],
    funFacts: [
      "Shivaji was crowned Chhatrapati here on 6 June 1674 — one of the grandest coronations in Indian history",
      "The fort has a 'Takmak Tok' cliff from which traitors and criminals were hurled to their death",
      "Shivaji died at Raigad in April 1680; a samadhi (memorial) marks the spot",
      "The fort was accessed via 1,737 steps carved into the rock"
    ],
    condition: "Ruins, partially restored. The samadhi of Shivaji is well-maintained.",
    canVisit: true,
    visitInfo: "Open year-round. A ropeway from the base village Pachad makes it accessible. Best visited October–February.",
    activeEras: ["shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Raigad_Fort",
    photos: []
  },
  {
    id: "sinhagad",
    name: "Sinhagad Fort",
    aliases: ["Kondana", "Lion's Fort"],
    lat: 18.3663,
    lng: 73.7556,
    builtBy: "other",
    builtYear: "c. 2nd century BCE (ancient origins); key battles in 1670 CE",
    builder: "Ancient origins; held by Bijapur Sultanate before Marathas",
    whyBuilt: "Strategically controls the passes south-west of Pune. Shivaji captured it to protect his capital Rajgad and to deny Mughals a vantage point over Pune.",
    battles: [
      "Battle of Sinhagad (1670) — Tanaji Malusare led a night assault, scaling the cliff with a monitor lizard. He was killed but the fort was won. Shivaji lamented: 'The fort is won, but the lion is gone.'",
      "Mughal occupation and Maratha recapture multiple times in the 17th–18th centuries",
      "British capture (1818)"
    ],
    ownershipHistory: [
      "Nizam Shahi Sultanate",
      "Bijapur Sultanate",
      "Shivaji Maharaj (1647)",
      "Mughals (1665 — ceded by Treaty of Purandar)",
      "Tanaji Malusare recaptured (1670) — handed back to Marathas",
      "British (1818)"
    ],
    funFacts: [
      "Tanaji Malusare's heroism at this fort is legendary — he tied his lizard 'Yashwanti' to a rope to scale the cliff",
      "The fort is visible from Pune city on a clear day",
      "A popular trekking destination today; known for local dishes like zunka-bhakar and lassi at the top",
      "Rajaram, Shivaji's son, died of illness here in 1700"
    ],
    condition: "Substantial ruins remain. Tanaji's memorial is well-preserved.",
    canVisit: true,
    visitInfo: "30 km from Pune. Trek takes 1–2 hours. Best Oct–Feb. Can also drive 4 km up to the base of the final climb.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Sinhagad",
    photos: []
  },
  {
    id: "pratapgad",
    name: "Pratapgad Fort",
    aliases: ["Pratapgarh"],
    lat: 17.9329,
    lng: 73.5784,
    builtBy: "shivaji",
    builtYear: "1656 CE",
    builder: "Chhatrapati Shivaji Maharaj",
    whyBuilt: "Built to guard the Par Ghat pass (a key trade and military route) and to honor the goddess Bhavani, who Shivaji believed protected him. Its construction also expanded Maratha control over the Konkan-Deccan interface.",
    battles: [
      "Battle of Pratapgad (1659) — Shivaji killed Afzal Khan of the Bijapur Sultanate in a famous meeting. Shivaji concealed wagh nakh (tiger claws) under his garments and disemboweled Afzal Khan when the general tried to assassinate him. This decisive victory shocked the Deccan sultanates.",
    ],
    ownershipHistory: [
      "Built by Shivaji (1656)",
      "Maratha control through most of its history",
      "Brief Mughal occupation",
      "British (1818)",
      "Government of Maharashtra (today)"
    ],
    funFacts: [
      "The fort was built in just 2 years — remarkable considering its size and the terrain",
      "A large statue of Shivaji near the fort commemorates the Afzal Khan battle",
      "Afzal Khan's tomb is near the base of the fort, built by Shivaji himself as a mark of respect",
      "The fort has two levels — upper (with palace ruins) and lower (with the Bhavani temple)"
    ],
    condition: "Well-preserved. Bhavani temple actively maintained.",
    canVisit: true,
    visitInfo: "Near Mahabaleshwar, ~23 km. Accessible by road. Temple at the top open daily. Best visited monsoon for dramatic scenery.",
    activeEras: ["shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Pratapgad",
    photos: []
  },
  {
    id: "rajgad",
    name: "Rajgad Fort",
    aliases: ["Murumdev", "King's Fort"],
    lat: 18.2479,
    lng: 73.6838,
    builtBy: "shivaji",
    builtYear: "c. 1647–1650 CE (major construction)",
    builder: "Chhatrapati Shivaji Maharaj (expanded from existing structure)",
    whyBuilt: "Rajgad was Shivaji's capital for 26 years before Raigad. Its three machi (plateaus) provided both living space and immense defensive depth. Shivaji used it as his main administrative and military headquarters.",
    battles: [
      "Mughal general Shaista Khan camped near Pune (1660–63) but never took Rajgad",
      "Shivaji launched many campaigns from Rajgad as his base"
    ],
    ownershipHistory: [
      "Early local chiefs",
      "Shivaji Maharaj (c. 1647) — capital for 26 years",
      "Moved capital to Raigad (1674)",
      "Maratha Confederacy",
      "British (1818)"
    ],
    funFacts: [
      "Rajgad is one of the largest hill forts in India by area, with three distinct plateaus (machi)",
      "Sai Mahal, the palace where Shivaji's queen Saibai lived, is located here",
      "Shivaji's wife Saibai died at Rajgad in 1659",
      "Rajgad has never been conquered by a direct assault — it was only surrendered diplomatically"
    ],
    condition: "Ruins; extensive remains visible. A popular multi-day trek.",
    canVisit: true,
    visitInfo: "60 km from Pune. Trek to top takes 3–4 hours. Camping allowed on the plateaus. Best Oct–Feb.",
    activeEras: ["shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Rajgad_Fort",
    photos: []
  },
  {
    id: "torna",
    name: "Torna Fort",
    aliases: ["Prachandagad", "Tornamal"],
    lat: 18.2767,
    lng: 73.6228,
    builtBy: "other",
    builtYear: "c. 13th century (captured by Shivaji 1646)",
    builder: "Ancient Yadava dynasty; captured by 16-year-old Shivaji in 1646",
    whyBuilt: "Torna was the first fort captured by Shivaji, marking the beginning of his campaign to establish a Maratha kingdom. He found a large treasure here which he used to fund construction of Rajgad.",
    battles: [
      "Shivaji's first military conquest (1646) at age 16",
      "Various skirmishes with Bijapur forces"
    ],
    ownershipHistory: [
      "Yadava dynasty (c. 1300s)",
      "Bahmani Sultanate",
      "Bijapur Sultanate",
      "Shivaji Maharaj (1646) — his first conquest",
      "Mughals (briefly)",
      "Marathas",
      "British (1818)"
    ],
    funFacts: [
      "Captured by Shivaji when he was just 16 years old — his very first fort conquest",
      "Shivaji found a large hoard of treasure here which funded construction of Rajgad nearby",
      "At 1,403 m, it is one of the highest forts in the Sahyadris",
      "The name 'Torna' means 'to storm' or 'to breach' in Marathi"
    ],
    condition: "Ruins. The highest sections preserve some walls and cisterns.",
    canVisit: true,
    visitInfo: "80 km from Pune. Tough 3–4 hour trek. Ideal for experienced trekkers. Best Oct–Feb.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Torna_Fort",
    photos: []
  },
  {
    id: "purandar",
    name: "Purandar Fort",
    aliases: ["Purandhara"],
    lat: 18.2760,
    lng: 73.9779,
    builtBy: "other",
    builtYear: "c. 10th century; key in 1665 Treaty",
    builder: "Ancient construction; significance in Mughal-Maratha diplomacy",
    whyBuilt: "A major Maratha stronghold east of Pune, controlling the Deccan plateau approaches. Its loss in the Treaty of Purandar (1665) — forced upon Shivaji by Mughal general Jai Singh I — was a major blow, requiring Shivaji to cede 23 forts.",
    battles: [
      "Mughal siege under Dilir Khan (1665) — Murarbaji Deshpande died heroically defending it",
      "Treaty of Purandar (1665): Shivaji ceded the fort to Mughals",
      "Shivaji recaptured it during his campaign after returning from Agra (1670s)"
    ],
    ownershipHistory: [
      "Various Deccan kingdoms",
      "Maratha Swaraj under Shivaji",
      "Mughals (1665 — Treaty of Purandar)",
      "Marathas (recaptured)",
      "British (1818) — used as military cantonment"
    ],
    funFacts: [
      "Murarbaji Deshpande, one of Shivaji's most loyal commanders, died in single combat here defending the fort",
      "The Treaty of Purandar (1665) was signed here — Shivaji agreed to send his son Sambhaji to serve the Mughal emperor",
      "Today the fort is a military training area for the Indian Army's para-SF",
      "Birthplace of the Maratha Peshwa Bajirao II"
    ],
    condition: "Well-preserved; maintained by the Indian Army.",
    canVisit: true,
    visitInfo: "50 km south of Pune. Civilian access is restricted to portions near the temple. Check current Indian Army permissions.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Purandar_Fort",
    photos: []
  },
  {
    id: "shivneri",
    name: "Shivneri Fort",
    aliases: ["Shivneri"],
    lat: 19.2087,
    lng: 73.8554,
    builtBy: "other",
    builtYear: "c. 6th century; Shivaji born here 1630",
    builder: "Ancient origins; held by Nizam Shahi and later Mughals",
    whyBuilt: "Birthplace of Shivaji Maharaj. His mother Jijabai took refuge here in 1629-30 under the protection of Mughal governor, making it historically significant as the site of Shivaji's birth on 19 February 1630.",
    battles: [
      "Various sieges between Nizam Shahi and Mughal forces",
      "Mughal general Mahabat Khan captured the fort in 1637"
    ],
    ownershipHistory: [
      "Nizam Shahi Sultanate",
      "Jijabai's refuge here (1629–1630)",
      "Mughals (1637)",
      "Marathas (later)",
      "British (1818)"
    ],
    funFacts: [
      "Shivaji was born here on 19 February 1630 — the most historically important event associated with the fort",
      "His mother Jijabai named him 'Shiva' after the local goddess Shivai Devi whose temple is on the fort",
      "The fort has seven gates, each named after the day of the week",
      "A statue of young Shivaji with Jijabai is a major attraction inside"
    ],
    condition: "Well-maintained as a heritage site. Temple active.",
    canVisit: true,
    visitInfo: "4 km from Junnar town, 90 km from Pune. Easy 30-minute trek. Open all days.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Shivneri",
    photos: []
  },
  {
    id: "panhala",
    name: "Panhala Fort",
    aliases: ["Panhalgad", "Pannalla"],
    lat: 16.8127,
    lng: 74.1124,
    builtBy: "other",
    builtYear: "1178–1209 CE; captured by Shivaji 1659",
    builder: "Raja Bhoja II of the Shilahara dynasty; significantly enlarged by Bijapur Sultans",
    whyBuilt: "A massive fort controlling routes between the Konkan coast and the Deccan plateau in south Maharashtra. Shivaji used it as a key southern headquarters and escaped from here in a famous night flight when besieged by Siddi Jauhar.",
    battles: [
      "Bijapur siege (1660) — Shivaji trapped inside by Siddi Jauhar for 5 months",
      "Baji Prabhu Deshpande's heroic last stand at Pavan Khind (1660) — sacrificed himself to let Shivaji escape",
      "Multiple Mughal and Bijapur sieges through the 17th century"
    ],
    ownershipHistory: [
      "Shilahara dynasty (1178)",
      "Yadava kingdom",
      "Bahmani Sultanate",
      "Bijapur Sultanate",
      "Shivaji Maharaj (1659)",
      "Mughals (1701)",
      "Marathas (recaptured)",
      "British (1827)"
    ],
    funFacts: [
      "One of the largest forts in Maharashtra by perimeter — over 7 km of walls",
      "Shivaji's daring night escape from the besieged fort in 1660 is legendary; his decoy Shiva Kashid was captured and executed by Bijapur forces",
      "Sambhaji's mother Soyarabai was imprisoned and possibly executed here",
      "The fort town still exists as a living settlement — unique among Shivaji's forts"
    ],
    condition: "Large portions of walls and three key gates well preserved. Town exists inside.",
    canVisit: true,
    visitInfo: "18 km from Kolhapur city. Easily accessible by road. Can walk the entire 7 km perimeter. Year-round.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Panhala",
    photos: []
  },
  {
    id: "vijaydurg",
    name: "Vijaydurg Fort",
    aliases: ["Gheria", "Victoriae Arx"],
    lat: 16.5548,
    lng: 73.3313,
    builtBy: "other",
    builtYear: "c. 1205 CE; expanded by Shivaji",
    builder: "Raja Bhoja II (Shilahara); expanded by Shivaji into his main naval base",
    whyBuilt: "Shivaji transformed Vijaydurg into the strongest sea fort and his principal naval headquarters on the Konkan coast. The Maratha navy under Kanhoji Angre used it as their main base for decades.",
    battles: [
      "Fought off Portuguese naval attacks multiple times",
      "Battle of Vijaydurg (1756) — British-Peshwa joint assault destroyed the Maratha fleet here"
    ],
    ownershipHistory: [
      "Shilahara dynasty (1205)",
      "Bijapur Sultanate",
      "Shivaji Maharaj (1653) — converted to naval base",
      "Kanhoji Angre's Maratha navy base",
      "British and Peshwa joint capture (1756)",
      "British (1818)"
    ],
    funFacts: [
      "Called 'The Gibraltar of the East' by Europeans for its impregnability",
      "Has three concentric walls on the sea side and a natural harbor",
      "Shivaji established his Maratha navy here — one of the first Hindu kings to build a powerful fleet",
      "The fort is connected to the mainland only by a narrow causeway"
    ],
    condition: "Well-preserved sea fort. Three walls largely intact.",
    canVisit: true,
    visitInfo: "Near Vijaydurg village, Sindhudurg district. Accessible by road or small boat. Open daily.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Vijaydurg",
    photos: []
  },
  {
    id: "lohagad",
    name: "Lohagad Fort",
    aliases: ["Iron Fort"],
    lat: 18.7054,
    lng: 73.4780,
    builtBy: "other",
    builtYear: "Ancient; Shivaji captured 1648, rebuilt 1657",
    builder: "Various dynasties; enhanced by Shivaji",
    whyBuilt: "Lohagad controlled the Bhor Ghat — the vital pass connecting Pune plateau to the Konkan coast and Bombay. Shivaji used it to store treasury and control trade routes.",
    battles: [
      "Shivaji ceded it to Mughals in Treaty of Purandar (1665)",
      "Recaptured by Shivaji during his 1670 campaign to retake lost forts",
      "Peshwa Nana Phadnavis used it as a treasury store"
    ],
    ownershipHistory: [
      "Satavahana, Chalukya, Rashtrakuta dynasties (ancient)",
      "Bahmani Sultanate",
      "Shivaji (1648)",
      "Mughals (1665)",
      "Shivaji (1670)",
      "Peshwas (18th century)",
      "British (1818)"
    ],
    funFacts: [
      "Its name literally means 'Iron Fort' — reflecting the hardness of the basalt rock it is carved from",
      "Connected by a ridge to the nearby Visapur Fort — together they form a twin-fort complex",
      "A scorpion-shaped ridge called 'Vinchukata' leads to the summit",
      "Peshwa Nana Phadnavis stored his personal wealth here"
    ],
    condition: "Ruins, partially restored. Four gates largely intact.",
    canVisit: true,
    visitInfo: "65 km from Pune near Lonavala. 2–3 hour trek. Very popular with Pune trekkers. Can also visit nearby Visapur.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Lohagad",
    photos: []
  },
  {
    id: "sindhudurg",
    name: "Sindhudurg Fort",
    aliases: ["Malvan Fort"],
    lat: 16.0390,
    lng: 73.4960,
    builtBy: "shivaji",
    builtYear: "1664–1667 CE",
    builder: "Chhatrapati Shivaji Maharaj",
    whyBuilt: "Shivaji built Sindhudurg entirely on a rocky island to create an impregnable naval stronghold along the Konkan coast. The fort was designed to counter Portuguese and Siddis' naval power and protect Maratha coastal trade.",
    battles: [
      "Survived Portuguese and European naval attacks",
      "British captured it during the Third Anglo-Maratha War (1818)"
    ],
    ownershipHistory: [
      "Built by Shivaji (1664–1667)",
      "Maratha naval base",
      "Kanhoji Angre's command",
      "British (1818)",
      "Government of India (today)"
    ],
    funFacts: [
      "Built on an island — the foundation stones were laid by Shivaji himself, cemented with molten lead",
      "A handprint and footprint of Shivaji are preserved inside the fort",
      "The walls are 3 km long and include 52 bastions",
      "The fort took 3 years and 3,000 workers to build — an extraordinary feat of 17th-century engineering",
      "A unique temple to Shivaji exists inside the fort — one of very few temples dedicated to Shivaji built during his own lifetime"
    ],
    condition: "Excellent condition. One of the best-preserved forts.",
    canVisit: true,
    visitInfo: "Accessible by boat from Malvan town, Sindhudurg district. Boats run daily 8am–5pm. Entry fee applies.",
    activeEras: ["shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Sindhudurg_Fort",
    photos: []
  },
  {
    id: "tikona",
    name: "Tikona Fort",
    aliases: ["Vitandgad", "Triangular Fort"],
    lat: 18.6460,
    lng: 73.5193,
    builtBy: "other",
    builtYear: "Ancient; captured by Shivaji 1657",
    builder: "Bahmani Sultanate; captured by Shivaji",
    whyBuilt: "Tikona guarded the western approach to Pune and worked in conjunction with Lohagad and Tung forts to control the Pawna river valley and Bhor Ghat pass.",
    battles: [
      "Shivaji captured it in 1657 during his rapid expansion campaign",
      "Ceded in Treaty of Purandar (1665); recaptured 1670"
    ],
    ownershipHistory: [
      "Bahmani Sultanate",
      "Bijapur Sultanate",
      "Shivaji (1657)",
      "Mughals (1665)",
      "Marathas (1670)",
      "British (1818)"
    ],
    funFacts: [
      "Its triangular pyramidal shape gives it the name 'Tikona' (triangle in Marathi)",
      "The fort rises dramatically from the middle of Pawna Lake — appearing to float on water from a distance",
      "Near the lake, you can see all four nearby forts: Tikona, Tung, Lohagad, and Visapur"
    ],
    condition: "Ruins. Some walls and cisterns intact.",
    canVisit: true,
    visitInfo: "Near Pawna Lake, 60 km from Pune. 2-hour trek. Boat needed to cross part of the reservoir in monsoon.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Tikona_Fort",
    photos: []
  },
  {
    id: "murudjanjira",
    name: "Murud-Janjira Fort",
    aliases: ["Janjira", "Island of Janjira"],
    lat: 18.3001,
    lng: 72.9710,
    builtBy: "other",
    builtYear: "c. 15th century CE",
    builder: "Malik Ambar and the Siddi commanders of the Ahmadnagar Sultanate",
    whyBuilt: "Built by the Siddis (African Muslim naval commanders serving various Deccan sultans) as an impregnable island fortress to control the Konkan coastline. Shivaji attempted multiple times but could NEVER capture it — his greatest military failure.",
    battles: [
      "Shivaji's multiple failed attacks (1659, 1670, 1676) — all repelled by Siddi defenders",
      "Sambhaji's failed siege (1682)",
      "The fort was never taken by the Marathas — it fell only to the British in 1736 and then became independent",
      "The Siddis remained independent rulers here until 1947"
    ],
    ownershipHistory: [
      "Siddis under Ahmadnagar Sultanate (c. 1490)",
      "Siddi kingdom (independent)",
      "Siddis retained independence despite multiple Maratha attacks",
      "British protectorate (1736)",
      "Siddi Nawab of Janjira until 1947",
      "Government of Maharashtra"
    ],
    funFacts: [
      "The only fort Shivaji was NEVER able to conquer — he attacked it at least 3 times and failed every time",
      "Shivaji built an underwater wall to try to walk soldiers to the island — it was destroyed by the defenders",
      "He even tried digging an underwater tunnel — it collapsed",
      "The fort has 19 bastions and was considered virtually impregnable — its walls are 40 feet high",
      "The Siddis were of East African origin (Habshi people) — descended from African slaves who rose to become rulers"
    ],
    condition: "Excellent. Island fort, walls nearly intact.",
    canVisit: true,
    visitInfo: "Murud town, 165 km from Mumbai. Boats to the fort from Rajapuri jetty. No overnight stays. Open daily.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Murud-Janjira",
    photos: []
  },
  {
    id: "harishchandragad",
    name: "Harishchandragad Fort",
    aliases: ["Harishchandragad"],
    lat: 19.3893,
    lng: 73.7786,
    builtBy: "other",
    builtYear: "c. 6th century CE",
    builder: "Ancient Kalachuri dynasty; associated with the Marathas",
    whyBuilt: "An ancient hill fort with deep spiritual significance — home to the Harishchandreshwar temple (dedicated to Shiva). Shivaji used the high-altitude fort complex and surrounding range for strategic surveillance over the northern Sahyadri passes.",
    battles: [
      "Various medieval sieges",
      "Shivaji's forces used the northern Sahyadri range for guerrilla campaigns"
    ],
    ownershipHistory: [
      "Kalachuri dynasty (6th century)",
      "Yadavas",
      "Maratha Swaraj"
    ],
    funFacts: [
      "Home to the Konkan Kada — a 200-meter sheer cliff that is among the most dramatic sights in the Sahyadris",
      "The Harishchandreshwar temple inside is a beautiful example of Hemadpanthi architecture",
      "The fort has a natural cave with a 'Kedareshwar Shivalinga' surrounded by knee-deep water — accessible only in non-monsoon months",
      "At 1,424 m, it offers views of the Bhandardara reservoir and surrounding ranges"
    ],
    condition: "Temple well-maintained; fort ruins scattered across a large area.",
    canVisit: true,
    visitInfo: "145 km from Pune. Multiple routes from Khireshwar, Pachnai, or Nalichi Vaat. 4–5 hour trek. Camping popular.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Harishchandragad",
    photos: []
  },
  {
    id: "salher",
    name: "Salher Fort",
    aliases: ["Salhere"],
    lat: 20.6619,
    lng: 73.9065,
    builtBy: "other",
    builtYear: "Ancient; key battle 1672",
    builder: "Ancient; strategic importance in Mughal-Maratha battles",
    whyBuilt: "Salher is the highest fort in Maharashtra (1,567 m). The 1672 Battle of Salher was one of the most decisive Maratha victories against the Mughals, establishing Maratha dominance in north Maharashtra.",
    battles: [
      "Battle of Salher (1672) — Maratha forces under Moropant Pingle and Prataprao Gujar defeated a large Mughal army, capturing enormous treasure and thousands of horses"
    ],
    ownershipHistory: [
      "Ancient local chiefs",
      "Mughal Empire",
      "Shivaji Maharaj (after 1672 battle)",
      "Mughals again (briefly)",
      "Marathas",
      "British (1818)"
    ],
    funFacts: [
      "Highest fort in Maharashtra at 1,567 m above sea level",
      "The 1672 Battle of Salher was Shivaji's largest open-field battle victory against the Mughals",
      "The twin peak Mulher Fort is nearby — they controlled the Baglan region together",
      "Shivaji captured 6,000 Mughal horses, 125 elephants, and enormous treasure in the battle"
    ],
    condition: "Ruins. Summit plateau large and impressive.",
    canVisit: true,
    visitInfo: "Near Nashik, 200 km from Pune. 3–4 hour trek. Camping on top plateau popular.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Salher_Fort",
    photos: []
  },
  {
    id: "sudhagad",
    name: "Sudhagad Fort",
    aliases: ["Bhorapgad"],
    lat: 18.4008,
    lng: 73.1990,
    builtBy: "other",
    builtYear: "Ancient; captured by Shivaji",
    builder: "Ancient origins; captured by Shivaji to secure Konkan routes",
    whyBuilt: "Controls the Pali Ghat pass from the Konkan into the Deccan. Shivaji used it to command the main access route from Alibag and the Konkan coast up to the Deccan.",
    battles: [
      "Various skirmishes between Maratha and Bijapur/Mughal forces"
    ],
    ownershipHistory: [
      "Shilaharas",
      "Bahmani Sultanate",
      "Shivaji Maharaj",
      "Peshwas",
      "British"
    ],
    funFacts: [
      "Sudhagad has a large flat top allowing significant troop accommodation",
      "The Bhorai Devi temple on the fort is actively worshipped",
      "The fort overlooks the confluence of three rivers — Amba, Kundalika, and Savitri"
    ],
    condition: "Ruins with large walls surviving.",
    canVisit: true,
    visitInfo: "Near Pali, 100 km from Mumbai. 2–3 hour trek. Year-round access.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Sudhagad",
    photos: []
  },
  {
    id: "khanderi",
    name: "Khanderi Fort",
    aliases: ["Khanderi Island Fort"],
    lat: 18.6540,
    lng: 72.8150,
    builtBy: "shivaji",
    builtYear: "1679–1682 CE",
    builder: "Chhatrapati Shivaji Maharaj",
    whyBuilt: "Shivaji built Khanderi on a small rocky island to block the entrance to Bombay harbour and counter the British naval presence at Bombay (then a British possession). It directly challenged British and Siddi naval supremacy near Mumbai.",
    battles: [
      "Anglo-Maratha naval battle (1679) — the British tried to prevent Shivaji from fortifying the island and were repulsed",
      "Siddi of Janjira also attacked and was repelled"
    ],
    ownershipHistory: [
      "Built by Shivaji (1679)",
      "Maratha navy",
      "British seized it",
      "Indian Navy today (restricted)"
    ],
    funFacts: [
      "The only fort Shivaji built to directly confront the British",
      "Construction took place under constant naval attacks from the British and Siddis",
      "Now used by the Indian Coast Guard and is off-limits to civilians",
      "The twin island Underi (also fortified) is nearby"
    ],
    condition: "Maintained by Indian Navy/Coast Guard. Not publicly accessible.",
    canVisit: false,
    visitInfo: "Off the coast of Alibag. Not open to civilians — maintained by Indian Navy.",
    activeEras: ["shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Khanderi_Island",
    photos: []
  },
  {
    id: "rajmachi",
    name: "Rajmachi Fort",
    aliases: ["Shrivardhan & Manaranjan Twin Forts"],
    lat: 18.7750,
    lng: 73.4095,
    builtBy: "other",
    builtYear: "Ancient; used extensively by Shivaji",
    builder: "Various medieval dynasties; strategic importance to Shivaji for Bor Ghat control",
    whyBuilt: "Twin forts of Shrivardhan and Manaranjan at Rajmachi command the entire Bor Ghat — the gateway from Bombay/Thane region to Pune. Essential to controlling trade and military movement between the coast and interior.",
    battles: [
      "Multiple battles during Maratha-Mughal wars",
      "British captured during Anglo-Maratha wars"
    ],
    ownershipHistory: [
      "Satavahanas (ancient)",
      "Rashtrakutas",
      "Shilahara",
      "Peshwa control",
      "British (1818)"
    ],
    funFacts: [
      "Two separate forts on twin peaks of the same ridge — Shrivardhan and Manaranjan",
      "A village of ~50 families lives at the base of the twin peaks — no road access, only trekking paths",
      "The Ulsoor Lake below is a reservoir fed by springs from the fort",
      "Rajmachi is one of the most popular overnight trek destinations near Mumbai"
    ],
    condition: "Ruins; some walls and cisterns visible.",
    canVisit: true,
    visitInfo: "75 km from Mumbai, near Lonavala. 4–5 hour trek or jeep + trek. Camping at the village at the base. Popular year-round.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Rajmachi_Fort",
    photos: []
  },
  {
    id: "kolaba",
    name: "Kolaba Fort",
    aliases: ["Alibag Fort", "Kulaba"],
    lat: 18.6414,
    lng: 72.8782,
    builtBy: "shivaji",
    builtYear: "1680 CE",
    builder: "Chhatrapati Shivaji Maharaj",
    whyBuilt: "Built as a sea fort to protect the northern Konkan coastline and the approach to the Marathas' main port of Kalyan. After Kanhoji Angre became Maratha navy chief, Kolaba became his primary headquarters.",
    battles: [
      "Repulsed multiple British and Portuguese naval attacks",
      "Kanhoji Angre used it to raid British and Dutch ships"
    ],
    ownershipHistory: [
      "Built by Shivaji (1680)",
      "Kanhoji Angre's naval HQ (early 18th century)",
      "British combined with Peshwa forces captured it (1840s)",
      "Indian Navy later"
    ],
    funFacts: [
      "Accessible by foot at low tide — the causeway from Alibag beach appears only when the sea recedes",
      "Kanhoji Angre, the greatest Maratha admiral, is most associated with this fort",
      "Multiple British attempts to capture the fort were repulsed — the Angres held out for decades",
      "Has a freshwater lake inside despite being surrounded by seawater"
    ],
    condition: "Reasonable condition. Accessible at low tide.",
    canVisit: true,
    visitInfo: "Alibag beach, Maharashtra. Walk at low tide (~800m). Also reachable by boat any time. Check tide charts.",
    activeEras: ["shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Kolaba_Fort",
    photos: []
  },
  {
    id: "vasai",
    name: "Vasai Fort",
    aliases: ["Baçaim", "Bassein Fort"],
    lat: 19.3490,
    lng: 72.8080,
    builtBy: "other",
    builtYear: "1536 CE (Portuguese); captured by Marathas 1739",
    builder: "Portuguese; captured by Peshwa Chimaji Appa (Shivaji's legacy continued)",
    whyBuilt: "Vasai was the Portuguese capital of their northern Konkan territories. Its capture by Chimaji Appa in 1739 was a major Maratha victory that removed Portuguese power from the region, fulfilling the Maratha vision of coastal dominance that Shivaji had begun.",
    battles: [
      "Siege of Vasai (1739) — Chimaji Appa besieged and captured the fort from the Portuguese",
      "British capture (1780)"
    ],
    ownershipHistory: [
      "Gujarat Sultanate",
      "Portuguese (1536) — major colonial capital",
      "Marathas under Chimaji Appa (1739)",
      "British (1780)"
    ],
    funFacts: [
      "The Portuguese built an entire walled city here — the ruins of churches, convents, and mansions are still visible",
      "Chimaji Appa, younger brother of the great Peshwa Bajirao I, led the siege",
      "The fort contains the ruins of St. Gonsalo Garcia Cathedral and several other colonial-era churches",
      "Declared a protected monument by ASI; popular for photography and heritage walks"
    ],
    condition: "Impressive ruins of a large Portuguese colonial city.",
    canVisit: true,
    visitInfo: "Vasai, 50 km north of Mumbai. Accessible by train (Vasai Road station) + auto. Open all days, sunrise to sunset.",
    activeEras: ["pre", "shivaji", "peak", "decline", "today"],
    wikipediaTitle: "Vasai_Fort",
    photos: []
  },
  {
    id: "satara",
    name: "Satara Fort",
    aliases: ["Ajinkyatara"],
    lat: 17.6805,
    lng: 74.0008,
    builtBy: "other",
    builtYear: "c. 12th century; major Maratha capital",
    builder: "Various; made capital by Shahu Maharaj (Shivaji's grandson)",
    whyBuilt: "Satara became the capital of the Chhatrapati rulers after Shahu Maharaj was released from Mughal captivity in 1707. While built before Shivaji's time, it became the formal seat of the Maratha kings throughout the 18th century.",
    battles: [
      "Mughal sieges",
      "The formal seat of Maratha Chhatrapatis under Shahu and successors",
      "British captured during Anglo-Maratha War (1818)"
    ],
    ownershipHistory: [
      "Yadava dynasty",
      "Bahmani Sultanate",
      "Bijapur Sultanate",
      "Shahu Maharaj (grandson of Shivaji), Maratha capital",
      "British (1818)"
    ],
    funFacts: [
      "Shahu Maharaj, Shivaji's grandson, made this the Chhatrapati capital after his release from Mughal captivity",
      "The 'Ajinkyatara' (Invincible Star) fort was considered the seat of Maratha sovereignty",
      "The last Chhatrapati of the Satara kingdom was deposed by the British in 1848",
      "Satara district is named after this fort"
    ],
    condition: "Reasonable ruins. Ajinkyatara hilltop accessible.",
    canVisit: true,
    visitInfo: "Within Satara city. Short trek from base. Views over Satara city and surrounding hills.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Ajinkyatara",
    photos: []
  },
  {
    id: "kondana",
    name: "Kondana Fort",
    aliases: ["Kondana Caves Fort"],
    lat: 18.3521,
    lng: 73.6978,
    builtBy: "other",
    builtYear: "Ancient; used by Shivaji",
    builder: "Ancient; earlier form of Sinhagad — some accounts treat them as same",
    whyBuilt: "Kondana (an older name for the Sinhagad complex area) was a strategic point in the Pune region used by Shivaji in early campaigns. The Kondana Caves nearby (2nd–1st century BCE Buddhist caves) show ancient habitation.",
    battles: [
      "Associated with early Maratha campaigns near Pune"
    ],
    ownershipHistory: [
      "Ancient Buddhist monastic use (Kondana Caves)",
      "Medieval fort construction",
      "Maratha use"
    ],
    funFacts: [
      "The nearby Kondana Caves are 2nd–1st century BCE Buddhist rock-cut caves",
      "The area forms part of the Sinhagad-Rajgad fort cluster that controlled Pune's western defenses",
      "Kondana is sometimes cited as the pre-Maratha name of the Sinhagad fort area"
    ],
    condition: "Archaeological area. Caves well-preserved.",
    canVisit: true,
    visitInfo: "Near Sinhagad, 30 km from Pune. Combined visit with Sinhagad trek possible.",
    activeEras: ["pre", "shivaji", "post", "peak", "decline", "today"],
    wikipediaTitle: "Kondana_caves",
    photos: []
  }
];
