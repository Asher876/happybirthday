/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Miss Mira",
  music: "/music/bday.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Assalamualaikum Miroo",
      subtitle: "Stop smiling at the screen and just read this!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "It's Your Day! :D",
    },
    {
      type: "chatbox",
      message:
        "Happy Birthday! 🎉 I’m so proud of everything you’ve achieved this year. May you keep shining and reaching for the stars—I'll always be cheering for you! ⭐ \n\nYou’re getting older, but don’t worry, you’re still not as smart as me. Anyway, enjoy your day and don't forget my treat! 🎂 \n\nI wanted to buy you a million-dollar gift, but then I realized... my presence is enough! You know Kabtan never fails! 😎 But wait, there’s more :). Click 'Next'!",
      buttonText: "See the Surprise! 🎁",
    },
    {
      type: "ideas",
      lines: [
       "I was wondering what gift to give you...",
        "Flowers? They eventually wither away.",
        "Chocolates or Cake? Well, you'd probably eat them all anyway!",
        "Then I thought, why not create something <strong>unique</strong>   (like you did)?",
        "Because,",
        "You are also <span>unique</span>!",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
      author: "Oprah Winfrey",
    },
    {
      type: "chatbox",
      message: "FROM: 🍬 CANDY 🍬 \n\n Doğum günün kutlu olsun Mira! 💖 \n\n Hâlâ birlikte saçmalayacak kadar genç ve enerjikiz 😄 Bugün senin günün. Yeni yaşın kalbin kadar güzel geçsin! 💖",
      buttonText: "Sıradaki Mesaj! ➡️",
    },
    {
      type: "chatbox",
      message: "FROM: 🌹 JOORY 🌹 \n\n اميرتي الصغيرة اليوم راح نحتفل بعيد ميلادك محتارة ب اي طريقة اعايدك شو ماعملت بهذا اليوم هو قليل.. \n\n كل عام وانتي بخير يا وردتي الصغيرة المدللةة.. يا احلا ضحكة وابرء وجه واطيب قلب.. كل عام وانتي بنوتي الصغيرةة الله لا يحرمني منك ❤️",
      buttonText: "Next Wish! ➡️",
    },
    {
      type: "chatbox",
      message: "FROM: THE CAPTAIN 🦅 \n\n Miraaa! Happy Birthday! 🤙🏻 \n\n I'm so glad our paths crossed. May your year be filled with endless smiles and moments that take your breath away... \n\n May your new year bring you all the beautiful things your heart desires. \n\n And most importantly... May you become as intelligent as me! 🙂✨ \n\n — Kabtan 🦅",
      buttonText: "Don't get jealous! 😎",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "chatbox",
      message: "May the lightning hit you! (success lightning) ;) \n\n Seriously though, have the best day ever! 🎉",
      buttonText: "Finish! ❤️",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Okay, Now come back and tell me 'you liked it'.",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
