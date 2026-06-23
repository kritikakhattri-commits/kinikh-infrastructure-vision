import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export type ProjectStatus = "Upcoming" | "Ongoing" | "Completed";
export type ProjectType =
  | "Residential"
  | "Commercial"
  | "Land"
  | "Infrastructure"
  | "Mixed Use";

export interface Project {
  id: string;
  name: string;
  location: string;
  type: ProjectType;
  area: string;
  status: ProjectStatus;
  image: string;
  shortDescription: string;
  overview: string;
  highlights: string[];
  amenities: string[];
  gallery: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "kinikh-vista-villas",
    name: "Kinikh Vista Villas",
    location: "Lonavala, Maharashtra",
    type: "Residential",
    area: "12 Acres",
    status: "Ongoing",
    image: p1,
    shortDescription:
      "Forty-eight premium 4BHK villas wrapped around a private central lake and clubhouse.",
    overview:
      "Vista Villas is a low-density gated community of 48 architect-designed homes. Every villa enjoys private gardens, double-height living spaces, and uninterrupted views of the Sahyadri foothills.",
    highlights: [
      "Low-density 4 villas per acre layout",
      "Private 1.5 acre central lake",
      "Vaastu compliant orientations",
      "EV ready charging at every home",
    ],
    amenities: [
      "Clubhouse",
      "Infinity Pool",
      "Wellness Spa",
      "Tennis Court",
      "Concierge",
      "24x7 Security",
    ],
    gallery: [p1, p4, p3, p6],
  },
  {
    id: "kinikh-corporate-tower",
    name: "Kinikh Corporate Tower",
    location: "Hinjewadi, Pune",
    type: "Commercial",
    area: "8.5 Lakh Sq.ft",
    status: "Ongoing",
    image: p2,
    shortDescription:
      "A platinum-rated Grade A office tower for forward-thinking enterprises.",
    overview:
      "A 32-storey LEED Platinum commercial landmark with column-free floor plates, sky lobbies and ground-floor retail. Designed for the next decade of work.",
    highlights: [
      "32 storeys, column-free plates",
      "LEED Platinum certified",
      "Sky lobby on the 18th floor",
      "Triple-glazed low-E facade",
    ],
    amenities: [
      "Valet Parking",
      "Food Court",
      "Conference Centre",
      "Wellness Floor",
      "EV Charging",
      "Smart Access",
    ],
    gallery: [p2, p6, p5, p4],
  },
  {
    id: "kinikh-greens-township",
    name: "Kinikh Greens Township",
    location: "Wagholi, Pune",
    type: "Land",
    area: "65 Acres",
    status: "Upcoming",
    image: p3,
    shortDescription:
      "An RERA approved plotted development with curated landscapes and full infrastructure.",
    overview:
      "Greens Township brings 420 plots ranging from 1,200 to 3,600 sq.ft, complete with internal roads, underground utilities, central park, and a community pavilion.",
    highlights: [
      "420 plots, multiple sizes",
      "RERA approved",
      "12-acre central green spine",
      "Underground utilities",
    ],
    amenities: [
      "Community Pavilion",
      "Jogging Track",
      "Children's Park",
      "Amphitheatre",
      "Sports Arena",
      "Solar Street Lighting",
    ],
    gallery: [p3, p1, p5, p6],
  },
  {
    id: "kinikh-skyline-residences",
    name: "Kinikh Skyline Residences",
    location: "Baner, Pune",
    type: "Residential",
    area: "4.2 Lakh Sq.ft",
    status: "Completed",
    image: p4,
    shortDescription:
      "Boutique 2 & 3 BHK city homes with a curated amenity deck and private balconies.",
    overview:
      "Skyline Residences delivered 96 thoughtfully crafted homes with double-height lobbies, a sky deck, and a residents-only co-working studio.",
    highlights: [
      "96 boutique homes",
      "Sky deck and infinity pool",
      "Co-working studio",
      "Three-tier security",
    ],
    amenities: [
      "Infinity Pool",
      "Sky Deck",
      "Gym",
      "Co-working",
      "Yoga Pavilion",
      "Pet Park",
    ],
    gallery: [p4, p2, p1, p6],
  },
  {
    id: "kinikh-metro-link",
    name: "Kinikh Metro Link",
    location: "Mumbai-Pune Corridor",
    type: "Infrastructure",
    area: "11 km Stretch",
    status: "Ongoing",
    image: p5,
    shortDescription:
      "A signature elevated infrastructure corridor enabling next-generation urban mobility.",
    overview:
      "Engineered in partnership with state authorities, Metro Link spans 11 kilometres of elevated infrastructure with integrated transit hubs at three nodes.",
    highlights: [
      "11 km elevated corridor",
      "3 integrated transit hubs",
      "Seismic Zone IV compliant",
      "Pedestrian-first design",
    ],
    amenities: [
      "Transit Plaza",
      "Retail Concourse",
      "Bicycle Paths",
      "Public Art",
      "Green Spine",
      "Smart Lighting",
    ],
    gallery: [p5, p2, p6, p3],
  },
  {
    id: "kinikh-mosaic-mixed-use",
    name: "Kinikh Mosaic",
    location: "Kharadi, Pune",
    type: "Mixed Use",
    area: "6 Lakh Sq.ft",
    status: "Completed",
    image: p6,
    shortDescription:
      "A vibrant mixed-use destination weaving retail, F&B, residences, and a boutique hotel.",
    overview:
      "Mosaic blurs the lines between live, work, and play with 180 residences, 120,000 sq.ft of curated retail, a rooftop F&B district, and a 90-key boutique hotel.",
    highlights: [
      "180 residences",
      "120k sq.ft curated retail",
      "Rooftop F&B district",
      "90-key boutique hotel",
    ],
    amenities: [
      "Rooftop Restaurants",
      "Boutique Hotel",
      "Public Plaza",
      "Cinema",
      "Spa",
      "Co-working",
    ],
    gallery: [p6, p4, p2, p1],
  },
];

export const findProject = (id: string) => PROJECTS.find((p) => p.id === id);
