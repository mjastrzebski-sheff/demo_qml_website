// ─────────────────────────────────────────────────────────────────────────────
//  TALK SCHEDULE
//  This is the only file you need to edit to add or update talks.
//
//  • Order doesn't matter. Talks are sorted by date automatically and split
//    into "Upcoming" and "Past" based on today's date.
//  • Copy an existing entry, paste it, and change the details.
//  • Leave out any optional field you don't need.
//
//  Fields:
//    date         required   "YYYY-MM-DD"
//    speaker      required
//    title        required   use "TBA" if not known yet
//    time         optional   e.g. "14:00–15:00"
//    affiliation  optional
//    location     optional   e.g. "Hicks Building, LT9" or "Online"
//    abstract     optional   plain text; a blank line starts a new paragraph
//    link         optional   URL to join the talk (Zoom/Teams) or an event page
//    slides       optional   e.g. "speaker_prezzies/2026-11-04-doe.pdf"
//    recording    optional   URL to a recording
//
//  The entries below are examples. Replace them with real talks.
// ─────────────────────────────────────────────────────────────────────────────

const TALKS = [
  {
    date: "2026-09-30",
    time: "14:00–15:00",
    speaker: "Example Speaker",
    affiliation: "University of Example",
    title: "An introduction to variational quantum classifiers",
    location: "Online",
    abstract: "This is an example of a past talk. Past talks are listed below upcoming ones, most recent first.",
    slides: "speaker_prezzies/example.pdf",
  },
  {
    date: "2026-11-04",
    time: "14:00–15:00",
    speaker: "Jane Doe",
    affiliation: "University of Somewhere",
    title: "Barren plateaus and how to avoid them",
    location: "Hicks Building, Room F41",
    abstract: "This is an example abstract. Click \"Abstract\" on the page to show or hide it.\n\nA blank line in the text starts a new paragraph.",
    link: "https://example.com/join",
  },
  {
    date: "2026-11-18",
    time: "14:00–15:00",
    speaker: "John Smith",
    affiliation: "Example Quantum Ltd",
    title: "TBA",
    location: "Online",
  },
];
