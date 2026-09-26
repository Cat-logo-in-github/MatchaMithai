export type Founder = {
  id: string
  name: string
  role: string
  bio: string
  placeholder: boolean
  photo: string
}

// Biographies transcribed verbatim from the website brief.
// Photos live in public/founders and are resolved with the app's base URL
// (see Founders.tsx) so they work on any deployment sub-path.
export const founders: Founder[] = [
  {
    id: "dyuti",
    name: "Dyuti Chetta",
    role: "Founder",
    bio: "Economics & Finance student at Ashoka University driven by curiosity, creativity, and a passion for strategy and storytelling. I lead 80+ members across 7 departments as VP of Red Brick Words and head a 10-member marketing team for the Economics Society, where I craft campaigns, manage sponsorships, and streamline processes for smoother execution. My experience spans business development, branding, and client relations at Yūzen Matcha and Yi Startup Launchpad, where I combined creative ideas with strategic problem-solving. As a writer and marketer, I love turning complex ideas into engaging narratives — whether through content, campaigns, or growth strategies.",
    placeholder: false,
    photo: "founders/dyuti.jpg",
  },
  {
    id: "aneesh",
    name: "Aneesh Dasgupta",
    role: "Founder",
    bio: "I'm currently pursuing Economics & Finance at Ashoka University. Professionally, I'm currently working across business analysis, financial analysis, strategy, and research-focused roles. My experience includes quantitative policy analysis with Axis Bank Foundation, regulatory and macroeconomic analysis with Power Legal Advisors, growth and product strategy in the Founder's Office at Zyber, and research-driven consulting through various organizations at Ashoka University.",
    placeholder: false,
    photo: "founders/aneesh.jpg",
  },
  {
    id: "manya",
    name: "Manya Jindal",
    role: "Head Pâtissier",
    bio: "I’m a 3rd-year Economics and Public Policy student and a co-founder of Matcha Mithai I’ve loved baking since I was 10, and over the years, that love has grown into a fascination with food, culture, and the little ways we can reimagine the familiar. I’ve always been drawn to things that feel rooted in tradition but come with a little bit of modern twist...unexpected, playful, and just a little quirky. Whether it’s experimenting in the kitchen, discovering fun new ideas, or finding unconventional ways to bring people together, I love creating things that feel both familiar and fresh. Matcha Mithai is, in many ways, a reflection of that, taking something deeply rooted in our culture and giving it a contemporary twist.",
    placeholder: true,
    photo: "founders/manya.jpg",
  },
  {
    id: "shreya",
    name: "Shreya Arora",
    role: "Founder",
    bio: "A driven and ambitious individual, I am pursuing a B.Sc. (Hons) in Economics and Finance at Ashoka University, emphasizing research and analytical rigor. I am dedicated to building a holistic understanding of economic systems and the financial market while honing my critical thinking and problem-solving skills. My growth approach is holistic - balancing academic excellence with a curiosity for interdisciplinary learning and personal growth.",
    placeholder: false,
    photo: "founders/shreya.jpg",
  },
  {
    id: "parshwa",
    name: "Parshwa",
    role: "Member",
    bio: "Enthusiastic and versatile upcoming third year university CS student with a passion for learning, digital creation, and communication. A passionate performer with experience in oration, acting, performing, anchoring, writing and music creation. A developing interest in Physics and Psychology that compliments his CS understanding. Experienced in leading projects, organizing events, and engaging in cross-disciplinary academic pursuits. Proficient in multiple languages and driven by a desire to break language and cultural barriers through innovation and dialogue.",
    placeholder: false,
    photo: "founders/parshwa.jpg",
  },
]
