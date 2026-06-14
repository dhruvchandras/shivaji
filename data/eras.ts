export type EraId = "pre" | "shivaji" | "post" | "peak" | "decline" | "today";

export interface TerritoryRegion {
  name: string;
  color: string;
  opacity: number;
  // Array of [lat, lng] polygon coordinates
  coords: [number, number][];
}

export interface EraConfig {
  id: EraId;
  label: string;
  years: string;
  description: string;
  regions: TerritoryRegion[];
}

export const eras: EraConfig[] = [
  {
    id: "pre",
    label: "Pre-Shivaji",
    years: "Before 1630",
    description: "The Deccan is divided between the Adilshahi (Bijapur), Nizamshahi (Ahmadnagar), Qutbshahi (Golconda) sultanates, and a weakened but expansionist Mughal Empire from the north. The Portuguese control the coast.",
    regions: [
      {
        name: "Mughal Empire",
        color: "#2D8653",
        opacity: 0.35,
        coords: [
          [30, 68], [35, 77], [32, 80], [28, 82], [25, 85], [22, 88],
          [20, 85], [18, 78], [16, 77], [17, 75], [19, 74], [22, 72],
          [23, 70], [26, 68], [30, 68]
        ]
      },
      {
        name: "Bijapur Sultanate",
        color: "#8B0000",
        opacity: 0.35,
        coords: [
          [18, 74], [16, 74], [15, 76], [13, 77], [14, 78], [16, 79],
          [18, 78], [19, 76], [18, 74]
        ]
      },
      {
        name: "Ahmadnagar Sultanate",
        color: "#4B0082",
        opacity: 0.35,
        coords: [
          [20, 74], [18, 74], [19, 76], [20, 78], [22, 77], [21, 75], [20, 74]
        ]
      },
      {
        name: "Golconda Sultanate",
        color: "#8B6914",
        opacity: 0.35,
        coords: [
          [20, 78], [18, 78], [16, 79], [16, 82], [18, 83], [20, 82],
          [22, 80], [20, 78]
        ]
      },
      {
        name: "Portuguese (coastal)",
        color: "#003189",
        opacity: 0.4,
        coords: [
          [19, 72.6], [18.5, 72.8], [16, 73.5], [14, 74.2], [15, 74.4],
          [18, 73.7], [19.5, 72.9], [19, 72.6]
        ]
      }
    ]
  },
  {
    id: "shivaji",
    label: "Shivaji's Reign",
    years: "1646–1680",
    description: "Shivaji carves out an independent Maratha kingdom from the Bijapur and Mughal territories. By 1674, he is crowned Chhatrapati at Raigad. At his death (1680) the Maratha kingdom spans most of modern Maharashtra.",
    regions: [
      {
        name: "Maratha Kingdom",
        color: "#FF9933",
        opacity: 0.45,
        coords: [
          [20, 72.5], [22, 73], [21, 75], [22, 77], [20, 78], [18, 78],
          [16, 77], [15, 74.5], [14, 74.5], [16, 73.5], [18, 73], [20, 72.5]
        ]
      },
      {
        name: "Mughal Empire",
        color: "#2D8653",
        opacity: 0.3,
        coords: [
          [30, 68], [35, 77], [28, 82], [24, 85], [22, 82], [22, 77],
          [21, 75], [22, 73], [24, 71], [26, 68], [30, 68]
        ]
      },
      {
        name: "Bijapur Sultanate (reduced)",
        color: "#8B0000",
        opacity: 0.3,
        coords: [
          [18, 74], [16, 74], [15, 76], [13, 77], [14, 78],
          [16, 79], [18, 78], [18, 74]
        ]
      }
    ]
  },
  {
    id: "post",
    label: "After Shivaji's Death",
    years: "1680–1707",
    description: "Aurangzeb invades the Deccan in person (1681), captures Sambhaji (1689) and executes him brutally. Despite this, the Marathas fight on under Rajaram and the Maratha queens. Aurangzeb dies in 1707 unable to crush the Marathas.",
    regions: [
      {
        name: "Mughal Empire (peak expansion)",
        color: "#2D8653",
        opacity: 0.4,
        coords: [
          [30, 68], [35, 77], [28, 86], [22, 88], [15, 80], [13, 77],
          [14, 74], [16, 73.5], [18, 73], [22, 73], [24, 71], [30, 68]
        ]
      },
      {
        name: "Maratha resistance zones",
        color: "#FF9933",
        opacity: 0.35,
        coords: [
          [20, 73], [18, 73.5], [16, 74], [15, 74.5], [16, 77],
          [18, 78], [20, 77], [21, 75], [20, 73]
        ]
      }
    ]
  },
  {
    id: "peak",
    label: "Peak Maratha Empire",
    years: "1720–1760",
    description: "Under the Peshwas (especially Bajirao I), the Maratha Confederacy expands to become the dominant power in India — controlling territory from Attock in the northwest to Bengal in the east and the Deccan in the south. The Third Battle of Panipat (1761) ends this golden era.",
    regions: [
      {
        name: "Maratha Confederacy",
        color: "#FF9933",
        opacity: 0.45,
        coords: [
          [33, 72], [34, 77], [28, 82], [22, 88], [20, 85], [16, 80],
          [13, 77], [14, 74], [16, 73.5], [20, 72.5], [24, 71], [28, 69],
          [30, 70], [33, 72]
        ]
      },
      {
        name: "Hyderabad Nizam (tributary)",
        color: "#8B6914",
        opacity: 0.25,
        coords: [
          [18, 77], [16, 77], [15, 78], [16, 81], [18, 81], [19, 79], [18, 77]
        ]
      },
      {
        name: "British (coastal enclaves)",
        color: "#CC0000",
        opacity: 0.4,
        coords: [
          [22.5, 88], [22, 88.5], [22, 88], [22.5, 88]
        ]
      }
    ]
  },
  {
    id: "decline",
    label: "After Maratha Decline",
    years: "1761–1818",
    description: "The catastrophic defeat at the Third Battle of Panipat (1761) shatters Maratha power. The British East India Company rises rapidly. Three Anglo-Maratha Wars (1775–1782, 1803–1805, 1817–1818) systematically dismantle the Maratha Confederacy.",
    regions: [
      {
        name: "British East India Company",
        color: "#CC0000",
        opacity: 0.4,
        coords: [
          [34, 73], [35, 80], [26, 88], [22, 88], [20, 85], [18, 83],
          [18, 73], [22, 72.5], [26, 70], [30, 69], [34, 73]
        ]
      },
      {
        name: "Maratha remnants",
        color: "#FF9933",
        opacity: 0.3,
        coords: [
          [22, 75], [20, 75], [18, 76], [19, 78], [21, 78], [22, 76], [22, 75]
        ]
      },
      {
        name: "Hyderabad Nizam",
        color: "#8B6914",
        opacity: 0.3,
        coords: [
          [18, 77], [16, 77], [15, 78], [16, 81], [19, 82], [19, 79], [18, 77]
        ]
      }
    ]
  },
  {
    id: "today",
    label: "Today",
    years: "Present",
    description: "Modern India. The forts are now protected heritage monuments under the Archaeological Survey of India and the Maharashtra government. Many are popular trekking destinations.",
    regions: [
      {
        name: "Maharashtra (modern state)",
        color: "#FF9933",
        opacity: 0.15,
        coords: [
          [22.1, 72.7], [21.5, 74], [20.5, 74.5], [19, 74], [17.5, 73.5],
          [15.5, 73.8], [15.5, 76], [16, 77], [18, 78], [20, 78],
          [22, 80], [22, 78], [22.5, 77], [22.1, 74], [22.1, 72.7]
        ]
      }
    ]
  }
];

export const legendColors: Record<string, string> = {
  "Maratha / Shivaji": "#FF9933",
  "Mughal / Muslim Sultanates": "#2D8653",
  "British": "#CC0000",
  "Portuguese / French": "#003189",
  "Hyderabad Nizam": "#8B6914"
};
