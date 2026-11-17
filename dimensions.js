/*
  Entangled Dimensions of AI Literacy: content for interactive.html

  Edit the wording here. The layout lives in interactive.html and doesn't
  need to change when you edit this file.

  Each dimension has:
    description   the map text (unchanged, two typos fixed)
    provocation   the carousel provocation(s), verbatim
                  (Creative is a simpler version for K-12)
    ask           a question for students, one per grade band
    idea          the idea extension, one per grade band:
                    title, time, steps, ask, and an optional note
                    (source is for you only; the site doesn't show it)
    tangles       other dimensions this one pulls on (ids from this file)

  Grade bands: k7 = K-7, s812 = 8-12.
  Order below is the order prev/next steps through (clockwise from Data).
*/

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
    ask: {
      k7: "What might a computer never learn about?",
      s812: "Who is missing from the data this tool learned from?"
    },
    idea: {
      k7: {
        title: "What's missing from the box",
        time: "30 min",
        steps: [
          "Fill a box with picture cards that are all alike, like red apples and green pears.",
          "Make a rule together: “Fruit is round, and red or green.”",
          "Pull out a banana. Does the rule still work?"
        ],
        ask: "What would we need to add to the box?"
      },
      s812: {
        title: "Ask it about here",
        time: "25 min",
        source: "activity bank #9, Lesson 6",
        steps: [
          "Ask the model about your own community: its history, a recent event, a local place.",
          "Mark each answer: right, made up, or too general.",
          "Talk about what never gets written down or put online."
        ],
        ask: "What did it replace local knowledge with?",
        note: "Some knowledge isn't the machine's to hold."
      }
    },
    tangles: ["epistemic", "political"]
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
    ask: {
      k7: "What rules might a computer follow to pick what you see?",
      s812: "What is this system deciding for you?"
    },
    idea: {
      k7: {
        title: "Be the algorithm",
        time: "25 min",
        steps: [
          "Give each group a sorting rule, like “things for playing go here.”",
          "Follow the rule exactly. No exceptions.",
          "Compare piles. What ended up in the wrong place?"
        ],
        ask: "Who wrote the rule, and who did it leave out?"
      },
      s812: {
        title: "Read what nobody typed",
        time: "20 min",
        source: "adapted from activity bank #2",
        steps: [
          "Ask Copilot for “a group of people at work” five times.",
          "List everything in the pictures that nobody typed.",
          "Ask Copilot what prompt it used. Compare."
        ],
        ask: "What did it decide for us, and where did it learn that?",
        note: "Copilot doesn't show its real prompt, so its answer is an account, not a record."
      }
    },
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
    ask: {
      k7: "What do you hope AI will be like when you grow up?",
      s812: "Whose future is this technology building?"
    },
    idea: {
      k7: {
        title: "Postcard from the future",
        time: "30 min",
        steps: [
          "Imagine it's twenty years from now.",
          "Draw a postcard of a day with AI in it.",
          "Share. Who is happy? Who is left out?"
        ],
        ask: "What future do we want?"
      },
      s812: {
        title: "Place it on the map",
        time: "40 min",
        source: "uses the AI Futures map",
        steps: [
          "Read a few quotes on the AI Futures map.",
          "Place an AI headline or ad on the map. What future is it selling?",
          "Write one line from a future that doesn't fit the map."
        ],
        ask: "Who is writing this future?",
        link: { text: "AI Futures map", href: "https://rshorst.github.io/AI-Futures/" }
      }
    },
    tangles: ["political", "creative"]
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
    ask: {
      k7: "What makes something sound like you?",
      s812: "What can you add that the machine can't?"
    },
    idea: {
      k7: {
        title: "Make it ours",
        time: "30 min",
        steps: [
          "Ask the AI for a short poem about rain.",
          "Change it together. Add our place, our weather, our names, and something silly only we would know.",
          "Read both versions aloud."
        ],
        ask: "Which one sounds like us, and why?"
      },
      s812: {
        title: "Make it strange",
        time: "40 min",
        steps: [
          "Ask the AI for “a poem about the ocean.” Notice how generic it is.",
          "Rewrite it so it could only be about your ocean, your town, your life. Add names, smells and odd details.",
          "Mark every line in your version that the AI could never have written."
        ],
        ask: "What did you add that the average left out?"
      }
    },
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
    ask: {
      k7: "Who helps you learn?",
      s812: "What changes between people when AI is in the middle?"
    },
    idea: {
      k7: {
        title: "Who helped me learn this?",
        time: "25 min",
        steps: [
          "Pick something you know how to do, like ride a bike.",
          "Draw everyone and everything that helped you learn it.",
          "Where do computers show up? Where don't they?"
        ],
        ask: "What can a person teach you that a computer can't?"
      },
      s812: {
        title: "Translate and check",
        time: "40 min",
        source: "activity bank #5",
        steps: [
          "Translate a short passage into a language someone in the room speaks.",
          "Check it line by line with that person.",
          "List what went missing: tone, respect, humour."
        ],
        ask: "What went missing that wasn't a word?",
        note: "Ask before putting anyone on the spot. Some communities keep their languages out of these systems on purpose."
      }
    },
    tangles: ["epistemic", "data"]
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
    ask: {
      k7: "Who gets to make the rules about AI in our class?",
      s812: "Who makes the rules for this tool, and who profits?"
    },
    idea: {
      k7: {
        title: "Rules for a robot helper",
        time: "30 min",
        steps: [
          "Imagine our class gets a robot helper.",
          "Each student draws one thing it could do and one thing it shouldn't.",
          "Sort them: We will. We won't. We'll ask first."
        ],
        ask: "Who should get to make these rules?"
      },
      s812: {
        title: "Write the class AI agreement",
        time: "70 min",
        source: "Lesson 1",
        steps: [
          "Each student writes one way AI helps them learn and one way it gets in the way.",
          "Ask the model to write a class AI policy. What did it assume?",
          "Write ours: We will. We won't. We'll ask first. Give a reason for each line."
        ],
        ask: "Which line will be hardest to keep?"
      }
    },
    tangles: ["relational", "data"]
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
    ask: {
      k7: "Would a scientist and a storyteller answer the same way?",
      s812: "What counts as a good answer in this subject?"
    },
    idea: {
      k7: {
        title: "Scientist or storyteller?",
        time: "30 min",
        steps: [
          "Ask the chatbot about rain, first like a scientist, then like a storyteller.",
          "Sort the sentences: which need proof, and which are about imagining?",
          "Talk about how each would check that something is true."
        ],
        ask: "Is there one right way to know about rain?"
      },
      s812: {
        title: "Rewrite the assignment",
        time: "30 min",
        source: "activity bank #10",
        steps: [
          "Give the model a real assignment and let it do the task.",
          "Mark it against the criteria.",
          "Change one thing so that answer wouldn't be enough."
        ],
        ask: "What was this task really asking for?"
      }
    },
    tangles: ["knowledge", "epistemic"]
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
    ask: {
      k7: "Can something sound sure and still be wrong?",
      s812: "How sure should this answer be?"
    },
    idea: {
      k7: {
        title: "Ask twice, then check",
        time: "20 min",
        steps: [
          "Ask the chatbot a question. Read the answer.",
          "Ask again in a new chat. Same answer?",
          "Check one fact in a book or with someone who knows."
        ],
        ask: "How can we tell if something is true?"
      },
      s812: {
        title: "Run it twice",
        time: "60 min",
        source: "Lesson 2",
        steps: [
          "Ask the model a question from your unit. Then ask again in a new chat.",
          "Compare the answers line by line.",
          "Check three claims against a good source."
        ],
        ask: "Which sentence sounded most sure, and should it have?"
      }
    },
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
    ask: {
      k7: "How do you know when you've really learned something?",
      s812: "Do you know it, or do you just have the answer?"
    },
    idea: {
      k7: {
        title: "Teach it back",
        time: "25 min",
        steps: [
          "Ask the chatbot to explain something new, like how bees make honey.",
          "Close the screen. Explain it to a partner without looking.",
          "Your partner asks one “why” question. Can you answer it?"
        ],
        ask: "How can you tell something is really in your head?"
      },
      s812: {
        title: "Know it or have it?",
        time: "40 min",
        steps: [
          "Pick an idea from your unit. Rate how well you know it, 1 to 5.",
          "Ask the model to explain it. Rate again.",
          "Close everything. Explain it to a partner or use it on a new problem. Rate again."
        ],
        ask: "When did it feel like knowing, and when was it knowing?",
        note: "A smooth explanation can make us feel we understand more than we do."
      }
    },
    tangles: ["epistemic", "creative"]
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
    ask: {
      k7: "What does a computer need to answer your question?",
      s812: "What does this cost the planet, and who pays?"
    },
    idea: {
      k7: {
        title: "Where does the answer live?",
        time: "30 min",
        steps: [
          "Ask: where does a computer's answer come from? Collect guesses.",
          "Show photos of a data centre.",
          "Draw the trip your question takes, and what the building needs: power, water, land."
        ],
        ask: "Who lives near the building?"
      },
      s812: {
        title: "What does it cost",
        time: "70 min",
        source: "Lesson 4",
        steps: [
          "Ask the model how much energy and water one question uses.",
          "Find real figures in pairs. Put the ranges on the board.",
          "Find where your school's tools run, and who lives nearby."
        ],
        ask: "How would you decide if it's worth it?"
      }
    },
    tangles: ["political", "futures"]
  }
];
