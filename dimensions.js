/*
  Entangled Dimensions of AI Literacy: content for interactive.html

  Edit the wording here. The layout lives in interactive.html and doesn't
  need to change when you edit this file.

  Each dimension has:
    description   the map text (unchanged, two typos fixed)
    provocation   the carousel provocation(s), verbatim
                  (Creative is a simpler version for K-12)
    question      the question for students, for both grade bands
    idea          the idea extension, one per grade band:
                    title, steps, and an optional note
    refs          sources behind the activities, shown in the References popup
    tangles       other dimensions this one pulls on (ids from this file)

  Grade bands: k7 = K-7, s812 = 8-12.
  Order below is the order prev/next steps through (clockwise from Data).

  Activities adapted from a November 2026 research scan. Only sources that
  could be found and opened are listed in refs.
*/

const GENERAL_REFS = [
  {
    text: "NYC Public Schools (2026). Exploring Equity in AI: critical AI lesson plans and policy proposals from teacher fellows.",
    href: "https://sites.google.com/schools.nyc.gov/cs4all-equity"
  },
  {
    text: "Focused Education Resources (2025–26). Student Artificial Intelligence Lessons, K-3, 4-7 and 8-12, developed with BC teachers.",
    href: "https://focusedresources.ca/student-artificial-intelligence-lessons"
  },
  {
    text: "European School Education Platform (2026). Learning activity ideas for using AI with learners.",
    href: "https://school-education.ec.europa.eu/en/node/6756085"
  }
];

const CSTA = {
  text: "Computer Science Teachers Association (2026). CSTA PK–12 Computer Science Standards.",
  href: "https://csteachers.org/pk12standards/"
};

const DIMENSIONS = [
  {
    id: "data",
    name: "Data",
    lines: ["DATA"],
    color: "#59a34f",
    description:
      "AI systems are shaped by the data they're trained on, including how the data is collected, labeled, structured, and selected.",
    provocation: [
      "How do practices of data collection reflect and reproduce existing power structures?"
    ],
    question: "Who decided what the machine should learn, and who is affected by what was left out?",
    idea: {
      k7: {
        title: "Train a terrible AI",
        steps: [
          "Give two groups picture cards to sort, like things that can be recycled. One group gets a narrow set, the other a varied set.",
          "Each group sorts new objects using only what their cards taught them.",
          "Compare the mistakes. Change the cards and try again."
        ]
      },
      s812: {
        title: "The missing-data experiment",
        steps: [
          "Build or simulate a simple classifier from a small dataset. Leave some kinds of examples out on purpose.",
          "Test it, then add the missing cases.",
          "Look at whose situations it handles badly."
        ]
      }
    },
    refs: [CSTA],
    tangles: ["algorithmic", "political"]
  },

  {
    id: "algorithmic",
    name: "Algorithmic",
    lines: ["ALGORITHMIC"],
    color: "#eec949",
    description:
      "Algorithms implement logic to classify, predict, and automate decisions, increasingly structuring how we navigate, consume, and engage with the world.",
    provocation: [
      "How do algorithmic systems shape not just what we encounter in our daily lives, but what we come to value, believe, and know?"
    ],
    question: "What changes when we change the goal, not just the algorithm?",
    idea: {
      k7: {
        title: "Invent a recommendation machine",
        steps: [
          "Design a paper machine that recommends books three ways: most popular, most similar, most surprising.",
          "Run the class's favourite books through each version.",
          "Which books get seen, and which disappear?"
        ]
      },
      s812: {
        title: "Design an unfair decision-maker",
        steps: [
          "Groups get made-up student profiles and a few tutoring spots. Each writes a rule: by grades, by need, or by student choice.",
          "Run the same profiles through every rule and compare who gets help.",
          "Discuss which decisions shouldn't be automated at all."
        ]
      }
    },
    refs: [CSTA],
    tangles: ["data", "political"]
  },

  {
    id: "futures",
    name: "Futures",
    lines: ["FUTURES"],
    color: "#b07ba3",
    description:
      "AI technologies are entangled with the futures we plan for, invest in, and believe are possible.",
    provocation: [
      "What futures are enabled and constrained in the design and deployment of AI?",
      "How can we create space for alternative, speculative, or radically different futures to emerge?"
    ],
    question: "What future does this technology assume, and what else could we imagine?",
    idea: {
      k7: {
        title: "Two futures for our school",
        steps: [
          "Imagine our school in 2035: one future where technology deepens community and connection to place, one where something is lost.",
          "Draw a third future that keeps what you want and refuses what you don't.",
          "Pick one thing we could do now to help it happen."
        ]
      },
      s812: {
        title: "An artifact from a future that doesn't exist yet",
        steps: [
          "Invent something from a future of education: a school policy, a community-owned AI service, an assessment system, a language-learning tool.",
          "Make a prototype.",
          "Explain who governs it, what it values, and who it leaves out."
        ]
      }
    },
    refs: [],
    tangles: ["political", "ecological"]
  },

  {
    id: "creative",
    name: "Creative",
    lines: ["CREATIVE"],
    color: "#f59ba8",
    description:
      "AI-enabled creativity complicates established boundaries and processes of authorship, expression, and invention.",
    provocation: [
      "When we make things with AI, where is the line between our ideas and its patterns? Can we move it?"
    ],
    question: "Does making something faster make it more creative?",
    idea: {
      k7: {
        title: "Draw it, transform it, draw it again",
        steps: [
          "Students draw an imaginary creature, place or machine.",
          "On the teacher's screen, AI turns a drawing into something new. What was kept, missed or added?",
          "Students draw again, on their own terms."
        ],
        note: "Only use drawings from students who agree."
      },
      s812: {
        title: "The transmediation experiment",
        steps: [
          "Start with your own photo, poem or drawing. Transform it with AI.",
          "Remake the result in a different medium.",
          "Note moments of intention, surprise and loss. Write an artist statement: who contributed what?"
        ]
      }
    },
    refs: [
      {
        text: "Wang, Y., & Zhang, X. (2026). From making to judging: Art education in the AI era.",
        href: "https://doi.org/10.1177/27018466261474803"
      }
    ],
    tangles: ["data", "relational"]
  },

  {
    id: "relational",
    name: "Relational",
    lines: ["RELATIONAL"],
    color: "#9d7661",
    description:
      "AI-enabled systems mediate our relations with people, institutions, infrastructures, and the other-than-human world.",
    provocation: [
      "What kinds of relationships are made possible—or impossible—through AI systems, and on whose terms?"
    ],
    question: "When does AI support our relationships, and when does it replace them?",
    idea: {
      k7: {
        title: "Who can help, and how?",
        steps: [
          "Read short made-up situations: confused about homework, lonely at recess, learning a new skill, upset after an argument.",
          "Make a helping map: friends, teachers, family, books, community, AI.",
          "Which kinds of help need a person?"
        ]
      },
      s812: {
        title: "When a chatbot sounds like a friend",
        steps: [
          "Compare three made-up chatbot replies: one flatters, one asks questions, one admits its limits and points to people.",
          "Talk about how each builds trust or dependence.",
          "Rewrite the chatbot's boundaries."
        ],
        note: "Use made-up conversations only. Some students may already turn to chatbots for support, so handle this gently."
      }
    },
    refs: [
      {
        text: "Bonnesen, K., Krygsman, A., Hobson, S., Korczak, D., & Vaillancourt, T. (2026). Affective generative AI use and emotional problems among Ontario students. JAMA Pediatrics. (University of Ottawa summary)",
        href: "https://www.uottawa.ca/en/news-all/uottawa-study-finds-ai-use-emotional-support-may-signal-youth-distress"
      }
    ],
    tangles: ["knowledge", "political"]
  },

  {
    id: "political",
    name: "Political",
    lines: ["POLITICAL"],
    color: "#bcb0ac",
    description:
      "AI is embedded in systems of governance, economics, and public decision-making, shaped by policies, politics, and profit.",
    provocation: [
      "What do terms of service, documentation, and model cards reveal—and conceal—about how AI systems operate and are governed?",
      "How can users critically navigate these texts to understand power, accountability, and control?"
    ],
    question: "Who gets to decide about AI, and who has the right to refuse?",
    idea: {
      k7: {
        title: "The classroom AI council",
        steps: [
          "Pose a decision: should our school use AI to give feedback on writing?",
          "Groups take roles: students, teachers, families, school leaders, accessibility advocates, community knowledge stewards.",
          "Each names benefits, risks and conditions. Negotiate a shared decision."
        ]
      },
      s812: {
        title: "Write the school's AI legislation",
        steps: [
          "Hold a student assembly. Groups research one interest: privacy, assessment, ownership, environment, student voice.",
          "Each group proposes rules.",
          "Debate, amend and vote."
        ]
      }
    },
    refs: [
      {
        text: "Day of AI (2026). Student Senate: AI Policy in Schools, grades 6-12.",
        href: "https://dayofai.org/units/student-senate-ai-policy-in-schools-grades-6-12"
      },
      {
        text: "First Nations Technology Council. Pathways to AI.",
        href: "https://www.technologycouncil.ca/pathways-to-ai/"
      }
    ],
    tangles: ["relational", "futures"]
  },

  {
    id: "disciplinary",
    name: "Disciplinary",
    lines: ["DISCIPLINARY"],
    color: "#507aa9",
    description:
      "AI is being adopted and conceptualized differently across disciplines, creating opportunities for shared learning and critical exchange.",
    provocation: [
      "How do different disciplines structure problems, select methods, and validate knowledge in relation to AI?",
      "What assumptions underlie disciplinary applications of AI—and how can interdisciplinary approaches expose or reconfigure those assumptions?"
    ],
    question: "Who has the expertise to judge whether AI's suggestion is any good?",
    idea: {
      k7: {
        title: "One object, two ways of knowing",
        steps: [
          "Look closely at something from outside: a leaf, a stone, a shell.",
          "Ask the AI for a science explanation and a poem about it.",
          "Compare both with what you saw. What can neither capture?"
        ]
      },
      s812: {
        title: "AI in the science lab",
        steps: [
          "Students write their own hypothesis and experiment plan.",
          "AI suggests other methods. Judge each against variables, controls, safety and measurement.",
          "Keep a log of what you accepted and rejected, and why."
        ]
      }
    },
    refs: [],
    tangles: ["epistemic", "knowledge"]
  },

  {
    id: "epistemic",
    name: "Epistemic",
    lines: ["EPISTEMIC"],
    color: "#f3902a",
    description:
      "AI raises questions about how knowledge is defined, who gets to define it, and what ways of knowing are privileged.",
    provocation: [
      "How do AI systems encode epistemic assumptions—about truth, evidence, coherence, or relevance—and how might these reshape our understanding of what it means to know?"
    ],
    question: "When does a fluent explanation become knowledge you can trust?",
    idea: {
      k7: {
        title: "The confident answer detective",
        steps: [
          "Show three answers to a simple science question: one from AI, one from a field guide, one from the class's own observation.",
          "Find what can be checked, what's uncertain, and what has evidence."
        ]
      },
      s812: {
        title: "Follow the citation",
        steps: [
          "Give students an AI explanation with references: some real, some weak, some made up.",
          "Trace each claim back to its source.",
          "Label each one: supported, contradicted, or can't be checked."
        ]
      }
    },
    refs: [],
    tangles: ["knowledge", "disciplinary"]
  },

  {
    id: "knowledge",
    name: "Knowledge-construction",
    lines: ["KNOWLEDGE-", "CONSTRUCTION"],
    color: "#e3585b",
    description:
      "Building knowledge with AI requires understanding how information is searched for, produced, organized, and evaluated in the construction of knowledge.",
    provocation: [
      "What can we learn about knowledge itself by learning to converse well with AI?",
      "How do prompting practices surface assumptions about relevance, authority, sourcing, and the structures through which knowledge is assembled?"
    ],
    question: "What is the difference between getting an answer and being able to answer?",
    idea: {
      k7: {
        title: "The helping ladder",
        steps: [
          "Students try a challenge on their own first.",
          "Compare kinds of help: an answer, a hint, a question, an example, a friend.",
          "Try a new problem alone. Which help made that possible?"
        ]
      },
      s812: {
        title: "Design an AI tutor that won't do the thinking",
        steps: [
          "Design a tutor that asks what you know, finds where you're stuck, and gives stronger hints step by step, never the answer first.",
          "Prototype it on paper or as instructions for a chatbot. Test it with classmates.",
          "Revise it so the learner stays in charge."
        ]
      }
    },
    refs: [
      {
        text: "MPR News (2026, October 28). University of Minnesota report warns student AI use poses 'severe' threat to learning.",
        href: "https://www.mprnews.org/story/2026/10/28/university-of-minnesota-report-warns-student-ai-use-poses-severe-threat-to-learning"
      }
    ],
    tangles: ["epistemic", "relational"]
  },

  {
    id: "ecological",
    name: "Ecological",
    lines: ["ECOLOGICAL"],
    color: "#77b8b3",
    description:
      "Every AI system is entangled with ecological systems, from extraction and energy use to waste and emissions.",
    provocation: [
      "How do we weigh the environmental impacts of AI against its promises?",
      "What risks, harms, and extractive practices are too often left out of the conversation?"
    ],
    question: "When is a use worth its material and human costs?",
    idea: {
      k7: {
        title: "Make the invisible AI machine",
        steps: [
          "Draw a chatbot at the top of a big floor map.",
          "Place cards underneath for what it runs on: data centres, electricity, water, chips, minerals, cables, workers.",
          "Sort some tasks: which really need AI?"
        ]
      },
      s812: {
        title: "Should our school use AI for this?",
        steps: [
          "Groups take one proposed school AI use.",
          "Research its benefits, energy and water needs, materials and human labour.",
          "Make a recommendation, with uncertainties and non-AI alternatives."
        ],
        note: "Don't quote one water or energy cost per prompt. Estimates vary a lot."
      }
    },
    refs: [
      {
        text: "Environmental impacts of generative AI in education: A systematic review of educational and technical evidence (2026). Sustainability, 18, 7213.",
        href: "https://mdpi-res.com/d_attachment/sustainability/sustainability-18-07213/article_deploy/sustainability-18-07213.pdf"
      }
    ],
    tangles: ["political", "futures"]
  }
];
