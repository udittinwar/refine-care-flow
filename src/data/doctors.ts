import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";
import d4 from "@/assets/doctor-4.jpg";

export type Doctor = {
  name: string;
  specialty: string;
  credentials: string;
  image: string;
};

export const doctors: Doctor[] = [
  { name: "Dr. Marcus Hill", specialty: "Sleep Medicine", credentials: "MD, FAASM · 12 yrs", image: d1 },
  { name: "Dr. Sarah Chen", specialty: "Internal Medicine", credentials: "MD, MPH · 10 yrs", image: d2 },
  { name: "Dr. Raj Patel", specialty: "Sports Medicine", credentials: "MD, CAQSM · 9 yrs", image: d3 },
  { name: "Dr. Amara Okafor", specialty: "Family Medicine", credentials: "MD, FAAFP · 14 yrs", image: d4 },
];
