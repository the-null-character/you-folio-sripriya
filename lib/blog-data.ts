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
