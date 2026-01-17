const categories = [
  {
    name: "3D Printing and Design",
    id: "3d-printing-and-design",
    sessions: [
      {
        name: "3D Printing with Metal",
        id: "3d-printing-metal",
        desc: "See the latest in metal 3D printing technologies, from desktop machines (you need a really big desk!) to those designed for machine shops creating high-end and high-volume pieces.",
        speaker: {
          name: "Geoff Leffler",
          title: "Fabrication Specialist",
          org: "KinetEco Inc.",
          bio: "Geoff Leffler has metal in his veins. Starting out in traditional steel and aluminum fabrication, he's become obsessed with new technologies that can create finished metal parts quickly and affordably.",
        },
      },
      {
        name: "Homebuilding and 3D Printing",
        id: "homebuilding-and-3d-printing",
        desc: "A new house in 24 hours—can this be our practical solution for making affordable housing for all? See what has been done in this very vertical industry, and discuss how it will grow and be truly affordable—both for those living in the homes, and for the builders that create them.",
        speaker: {
          name: "Griffin Snow",
          title: "Urban Planner",
          org: "KinetEco Inc.",
          bio: "Griffin Snow has been driven to find ways to make efficient, affordable housing for all ever since he was a kid living on the streets with his single dad.",
        },
      },
    ],
  },
  {
    name: "AI and Robotics",
    id: "ai-and-robotics",
    sessions: [
      {
        name: "Automating User Testing",
        id: "automating-user-testing",
        desc: "Eliminating human error and saving time and money are key reasons user testing—at least parts of it—is an ideal job for automation. We'll discuss the advantages and disadvantages of using machines to test a product that will be used by humans.",
        speaker: {
          name: "Ally Bode",
          title: "UX Designer",
          org: "Globe Bank International",
          bio: "Ally Bode believes in humans, and spends her time utilizing ai and robotics to make products more human-manageable.",
        },
      },
      {
        name: "Security in the Age of AI",
        id: "security-in-age-of-ai",
        desc: "With security crises gaining in prevalence, it's more important than ever for us to make sure that our AI can't be hacked. How can we avoid all the data noise out there?",
        speaker: {
          name: "Daniel Rohan",
          title: "Cyber Security Specialist",
          org: "Hansel & Petal",
          bio: "Daniel Rohan has been with Hansel & Petal for six years. His leadership in AI security is well-documented in his many articles for top security publications.",
        },
      },
    ],
  },
];

export function getSession({ sessionId, catId }) {
  return categories
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id }) => ({ name, id }));
}
