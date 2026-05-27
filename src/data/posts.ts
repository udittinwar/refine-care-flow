import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "anti-inflammatory-foods-that-actually-work",
    title: "Anti-inflammatory foods that actually work, according to clinicians",
    excerpt:
      "A practical, evidence-led guide to the small dietary shifts that calm inflammation without overhauling your week.",
    category: "Nutrition",
    author: "Dr. Sarah Chen",
    authorRole: "Internal Medicine",
    date: "May 22, 2026",
    readTime: "6 min read",
    image: blog1,
    featured: true,
    body: [
      "Chronic low-grade inflammation is one of the most discussed topics in modern medicine, and for good reason — it's been linked to everything from cardiovascular disease to fatigue and mood. The good news: most of the daily moves that help are remarkably simple.",
      "Start with what's on the plate most often. Adding one or two servings of leafy greens, switching the cooking oil to extra virgin olive oil, and pulling forward berries and fatty fish two to three times a week meaningfully shifts inflammatory markers in trials.",
      "What matters more than any single 'superfood' is repetition and pattern. The Mediterranean and DASH diets keep performing well in long-term studies because they're sustainable — not because any one ingredient is magic.",
      "If you're navigating a specific condition, talk with a clinician before making large changes. A short consultation can save weeks of guesswork and help you build a plan that fits your life.",
    ],
  },
  {
    slug: "morning-routines-that-improve-sleep",
    title: "The morning routine that quietly improves your sleep",
    excerpt: "Better nights often start at sunrise. Here's the 10-minute habit that resets your circadian rhythm.",
    category: "Sleep",
    author: "Dr. Marcus Hill",
    authorRole: "Sleep Medicine",
    date: "May 18, 2026",
    readTime: "4 min read",
    image: blog2,
    body: [
      "Most people think about sleep at night. But your nighttime sleep is largely set by what you do in the first hour after waking.",
      "Ten minutes of outdoor light within an hour of waking anchors your circadian rhythm and improves both sleep onset and depth that same evening.",
      "Pair it with a consistent wake time — even on weekends — and most people notice a difference within a week.",
    ],
  },
  {
    slug: "the-truth-about-herbal-teas",
    title: "The truth about herbal teas and what they can actually do",
    excerpt: "Some have surprisingly strong evidence behind them. Others are mostly comforting rituals — and that's fine.",
    category: "Wellness",
    author: "Dr. Amara Okafor",
    authorRole: "Family Medicine",
    date: "May 14, 2026",
    readTime: "5 min read",
    image: blog3,
    body: [
      "Chamomile, ginger, and peppermint have the strongest evidence for everyday symptoms like mild nausea, indigestion, and difficulty winding down.",
      "Most others are pleasant rituals — which is meaningful on its own. The act of pausing for five minutes with a warm cup is genuinely calming.",
    ],
  },
  {
    slug: "exercise-snacks-the-new-cardio",
    title: "Exercise snacks: small movements, real cardiovascular gains",
    excerpt: "You don't need 45 minutes. Three short bursts a day can move the needle on heart health.",
    category: "Fitness",
    author: "Dr. Raj Patel",
    authorRole: "Sports Medicine",
    date: "May 09, 2026",
    readTime: "5 min read",
    image: blog4,
    body: [
      "Recent studies show that brief, intense bursts of activity — climbing stairs, brisk walking to the corner — accumulated through the day improve VO2 max and reduce cardiovascular risk markers.",
      "The trick isn't intensity; it's frequency and consistency. Three minutes, three times a day, three to five days a week.",
    ],
  },
  {
    slug: "seasonal-eating-a-clinicians-view",
    title: "Seasonal eating: a clinician's view on why it still matters",
    excerpt: "Nutrient density, flavor, and cost all align when you eat what's local and in season.",
    category: "Nutrition",
    author: "Dr. Sarah Chen",
    authorRole: "Internal Medicine",
    date: "May 03, 2026",
    readTime: "4 min read",
    image: blog5,
    body: [
      "Seasonal produce tends to be picked closer to ripeness, which generally means more flavor and more nutrients per bite.",
      "Cost matters too — eating in season is one of the most reliable ways to make a healthier diet sustainable long-term.",
    ],
  },
  {
    slug: "rebuilding-sleep-after-a-rough-week",
    title: "Rebuilding sleep after a rough week — without sleeping pills",
    excerpt: "A short, clinician-backed protocol to recover sleep quality after travel, deadlines, or illness.",
    category: "Sleep",
    author: "Dr. Marcus Hill",
    authorRole: "Sleep Medicine",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    image: blog6,
    body: [
      "After a disrupted week, the strongest single intervention is consistency: same wake time, daily light exposure, and limiting naps to under 20 minutes.",
      "Most people recover within three to five nights without needing medication.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
