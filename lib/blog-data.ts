export interface BlogPost {
  id: string;
  title: string;
  date: string;
  event: string;
  venue: string;
  tags: string[];
  coverImage: string;
  images: { src: string; caption: string }[];
  content: string; // markdown-like paragraphs, separated by \n\n
}

export const blogPosts: BlogPost[] = [
  {
    id: "cambridge-tkt-workshop-apr-2026",
    title: "Decoding Teaching Knowledge Test (TKT): Moving from Instinctive Practice to Informed Pedagogy",
    date: "4 April 2026",
    event: "Cambridge English — Online Workshop",
    venue: "Online — Zoom",
    tags: ["Cambridge English", "TKT", "Teacher Training", "Pedagogy", "Professional Development"],
    coverImage: "/media/blog/cambridge-tkt-workshop-apr-2026/tkt-workshop-poster.jpeg",
    images: [
      {
        src: "/media/blog/cambridge-tkt-workshop-apr-2026/tkt-workshop-poster.jpeg",
        caption: "Workshop poster — Decoding Teaching Knowledge Test (TKT) with Cambridge",
      },
      {
        src: "/media/blog/cambridge-tkt-workshop-apr-2026/cambridge-presence.jpeg",
        caption: "Empowering educators through Cambridge English pathways — 'Where Your World Grows'",
      },
    ],
    content: `What an invigorating two hours! Hosting the **Cambridge English Online Workshop on \"Decoding Teaching Knowledge Test (TKT)\"** on 4th April 2026 was an absolute pleasure. Connecting with passionate educators from diverse backgrounds always reignites my belief in the transformative power of purposeful teaching. 🌟

Many teachers step into the classroom driven by instinct, intuition, and sheer dedication. But there comes a pivotal moment in every educator’s journey when instinct needs the backing of a structured framework. That was the central heartbeat of our session: how can teachers move from **instinctive practice to informed, intentional pedagogy**?

We embarked on a comprehensive deep-dive across all **five core TKT modules**:
- **Module 1**: Language concepts, terms, and the fundamentals of language learning and teaching
- **Module 2**: Lesson planning and strategic resource selection that respects diverse learning paces
- **Module 3**: Proactive classroom management, interaction patterns, and creating a supportive learning environment
- **CLIL (Content and Language Integrated Learning)**: Bridging subject matter and English acquisition smoothly
- **Young Learners**: Developmental psychology, activity design, and fostering early communicative confidence

Beyond exam preparation and test mechanics, we explored the deeper value of **Cambridge TKT certification**. It serves as an internationally recognised benchmark of teaching competence — validating classroom expertise, strengthening credentials, and unlocking global pathways in schools and international language institutions.

What touched me most was the feedback from teachers during our Q&A. One teacher shared: *\"For years I felt I was doing the right things in class, but now I finally have the vocabulary and pedagogical rationale to explain why.\"* That shift in confidence is precisely what professional development is all about.

A huge thank you to **Cambridge English** for curating this platform and to all the dedicated educators who spent their Saturday afternoon learning, sharing, and growing together. Here is to elevating classroom practice and building tomorrow's language leaders! 🚀

#CambridgeEnglish #TKT #TeachingKnowledgeTest #TeacherTraining #ELT #Pedagogy #ProfessionalDevelopment #LanguageTeaching #WhereYourWorldGrows`,
  },
  {
    id: "celc-webinar-sep-2026",
    title: "Advancing English Learning Outcomes for a Better Tomorrow",
    date: "3 September 2026",
    event: "Cambridge English Leadership Conference (CELC) — Follow-up Webinar",
    venue: "Online — Zoom",
    tags: ["Cambridge English", "CELC", "AI in Education", "ELT", "Webinar"],
    coverImage: "/media/blog/celc-webinar-sep-2026/webinar-poster.jpeg",
    images: [
      {
        src: "/media/blog/celc-webinar-sep-2026/webinar-poster.jpeg",
        caption: "Featured speaker at the Cambridge CELC follow-up webinar alongside Helen Kenyon",
      },
      {
        src: "/media/blog/celc-webinar-sep-2026/celc-backdrop.jpeg",
        caption: "At the Cambridge English Leadership Conference 2026 — 'Where Your World Grows'",
      },
    ],
    content: `I am absolutely thrilled to share that I had the privilege of co-presenting at the **Cambridge English Leadership Conference (CELC) Follow-up Webinar** on 3rd September 2026! 🎉

Joining hands with **Helen Kenyon**, Product Manager at Cambridge English, made this an especially enriching experience. It was a true meeting of minds — a practitioner's perspective from the classroom merging with the product vision of one of the world's most trusted assessment bodies.

Our session, **"Advancing English Learning Outcomes for a Better Tomorrow"**, picked up beautifully from the energy of CELC and took it into the digital living rooms of educators across South Asia. We explored what it really means to put the learner at the centre — not as a platitude, but as a practical design principle that shapes every lesson, every assessment, and every interaction.

A significant part of our conversation revolved around **digital tools in the classroom** — how to use them thoughtfully rather than compulsively. Technology should amplify the teacher's intent, not replace it. We talked about tools that spark curiosity, tools that give meaningful feedback, and tools that make the invisible (a student's understanding) visible.

The piece I found most resonant — and most timely — was the conversation around **responsible AI integration in learning**. AI is not going away, and that is not a threat; it is an invitation. An invitation for educators to sharpen their craft, to ask better questions, to design tasks that demand genuine thinking over imitation. I believe the best teachers will always be the ones who help students think, not just respond.

We also had a wonderful discussion on the role of **Cambridge English Qualifications** as meaningful milestones — not just certificates, but genuine celebrations of a learner's progress and perseverance. When a student earns a Cambridge qualification, they are not just passing a test; they are stepping into a larger world.

The engagement from participants was phenomenal, the questions were insightful, and the energy in the virtual room reminded me once again why I love being part of the ELT community. Thank you, **Cambridge English South Asia**, for this incredible platform and for championing conversations that matter.

Here's to a better tomorrow — one learner at a time. 🌟

#CambridgeEnglish #CELC #CambridgeEnglishLeadershipConference #AI #EnglishEducation #ELT #DigitalClassroom #LearnersFirst #CELC2026`,
  },
  {
    id: "edfest-coimbatore-2026",
    title: "Developing Effective Assessment Tools for English in the Digital Age",
    date: "21 November 2026",
    event: "Burlington English 100ED Fest — #BeElevated",
    venue: "Zone by The Park Hotel, Coimbatore",
    tags: ["Assessment", "ELT", "Burlington English", "Digital Tools", "LSRW"],
    coverImage: "/media/blog/edfest-session.jpeg",
    images: [
      {
        src: "/media/blog/edfest-session.jpeg",
        caption: "Walking teachers through question-type design at the 100ED Fest",
      },
      {
        src: "/media/blog/edfest-poster.jpeg",
        caption: "Burlington English 100ED Fest — Coimbatore, 21 Nov 2026",
      },
    ],
    content: `What a truly energising day at the Burlington English 100ED Fest in Coimbatore! 🎉

Being invited as a Master Trainer for this wonderful gathering of educators was an honour, and the energy in that room at Zone by The Park Hotel was something I'll carry with me for a long time.

My session — **"Developing Effective Assessment Tools for English in the Digital Age"** — was close to my heart because assessment, when done right, is not a verdict. It's a conversation.

We started with LSRW: how do we really evaluate Listening, Speaking, Reading, and Writing in a modern classroom — not just through paper tests, but through tasks that mirror real life? The answer, as I always say, lies in the question we ask. I used the classic "Crow and the Pitcher" to demonstrate how the same passage can yield three entirely different depths of thinking depending on whether you ask a *literal*, *inferential*, or *evaluative* question. Teachers design AND test items — and that shift in question type changes what we actually measure. That moment in the room when everyone realised they were the students was priceless. 😄

We then moved into the world of **digital tools** — how technology, when thoughtfully integrated, makes assessment engaging, interactive, and meaningful rather than mechanical and anxiety-inducing. The goal is always learner engagement, not just measurement.

The session wrapped up with a deep dive into **Competency-Based and Holistic Assessments** — strategies that put the learner at the centre, promoting communication, creativity, and critical thinking over rote recall.

The questions from participants were sharp, the discussions were rich, and the follow-through lunch conversations were even richer! This is exactly why I love what I do — every room of educators reminds me that the teaching community is full of people who genuinely care about getting it right.

Thank you, Burlington English, for this incredible platform. Here's to many more such conversations! 🙌

#BurlingtonEnglish #BeElevated #100EdFest #ELT #Assessment #DigitalClassroom #LSRWSkills #TeacherTraining #Coimbatore`,
  },
];
