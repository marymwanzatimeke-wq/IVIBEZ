// 100 motivational quotes
const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Dream bigger. Do bigger.",
  "Don’t wish it were easier. Wish you were better.",
  "Discipline is the bridge between goals and accomplishment.",
  "Push harder than yesterday if you want a different tomorrow.",
  "Don’t limit your challenges. Challenge your limits.",
  "Work until your idols become your rivals.",
  "Doubt kills more dreams than failure ever will.",
  "Stay hungry. Stay foolish.",
  "Fall seven times and stand up eight.",
  "Hard work beats talent when talent doesn’t work hard.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Don’t count the days, make the days count.",
  "Your limitation—it’s only your imagination.",
  "Sometimes later becomes never. Do it now.",
  "Great things take time.",
  "Don’t be afraid to give up the good to go for the great.",
  "If you get tired, learn to rest, not quit.",
  "Difficult roads often lead to beautiful destinations.",
  "Don’t let yesterday take up too much of today.",
  "Failure is not the opposite of success; it’s part of success.",
  "If you want something you’ve never had, you must be willing to do something you’ve never done.",
  "Success is what happens after you have survived all your mistakes.",
  "Don’t fear failure. Fear being in the exact same place next year as you are today.",
  "The secret of getting ahead is getting started.",
  "Winners are not people who never fail, but people who never quit.",
  "Don’t stop until you’re proud.",
  "Work hard in silence, let success be your noise.",
  "Your only limit is your mind.",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "If you can dream it, you can do it.",
  "Stay positive, work hard, make it happen.",
  "Don’t call it a dream, call it a plan.",
  "Success doesn’t come to you, you go to it.",
  "Don’t be afraid to start over. It’s a chance to build something better.",
  "The best way to predict the future is to create it.",
  "Don’t let the fear of losing be greater than the excitement of winning.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Success is not for the lazy.",
  "Don’t wait for the perfect moment. Take the moment and make it perfect.",
  "Don’t let small minds convince you that your dreams are too big.",
  "Work hard, stay humble.",
  "Don’t wish for it. Work for it.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don’t let what you cannot do interfere with what you can do.",
  "The harder you fall, the higher you bounce.",
  "Don’t let the fear of striking out keep you from playing the game.",
  "Don’t let anyone ever dull your sparkle.",
  "Don’t let your dreams be dreams.",
  "Don’t let your struggle become your identity.",
  "Don’t let your past dictate who you are, but let it be part of who you will become.",
  "Don’t let your emotions overpower your intelligence.",
  "Don’t let your victories go to your head, or your failures go to your heart.",
  "Don’t let your fears decide your future.",
  "Don’t let your excuses define you.",
  "Don’t let your comfort zone become your prison.",
  "Don’t let your doubts stop you from reaching your goals.",
  "Don’t let your failures define you.",
  "Don’t let your mistakes hold you back.",
  "Don’t let your insecurities control your life.",
  "Don’t let your weaknesses overshadow your strengths.",
  "Don’t let your fears hold you back.",
  "Don’t let your past mistakes ruin your future.",
  "Don’t let your failures discourage you.",
  "Don’t let your fears stop you from achieving your dreams.",
  "Don’t let your doubts hold you back.",
  "Don’t let your insecurities stop you from reaching your goals.",
  "Don’t let your weaknesses stop you from achieving your dreams.",
  "Don’t let your fears control your life.",
  "Don’t let your past define your future.",
  "Don’t let your failures stop you from reaching your goals.",
  "Don’t let your doubts discourage you.",
  "Don’t let your insecurities hold you back.",
  "Don’t let your weaknesses hold you back.",
  "Don’t let your fears discourage you.",
  "Don’t let your past mistakes hold you back.",
  "Don’t let your failures define your future.",
  "Don’t let your doubts define your future.",
  "Don’t let your insecurities define your future.",
  "Don’t let your weaknesses define your future.",
  "Don’t let your fears define your future.",
  "Don’t let your past define your present.",
  "Don’t let your failures define your present.",
  "Don’t let your doubts define your present.",
  "Don’t let your insecurities define your present.",
  "Don’t let your weaknesses define your present."
];

// Show a random quote
function showRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteDiv = document.createElement("p");
  quoteDiv.textContent = randomQuote;
  quoteDiv.className = "quote";
  document.querySelector(".app").appendChild(quoteDiv);
}

function setMood(mood) {
  document.body.className = mood;
  const moodText = document.getElementById("moodText");

  switch(mood) {
    case "morning":
      moodText.textContent = "Rise and shine 🌞 — Morning vibes!";
      break;
    case "afternoon":
      moodText.textContent = "Keep the energy flowing ☀️ — Afternoon vibes!";
      break;
    case "evening":
      moodText.textContent = "Relax and glow 🌇 — Evening vibes!";
      break;
    case "night":
      moodText.textContent = "Chill and dream 🌙 — Night vibes!";
      break;
  }

  showRandomQuote();
}

window.onload = function() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) setMood("morning");
  else if (hour >= 12 && hour < 18) setMood("afternoon");
  else if (hour >= 18 && hour < 22) setMood("evening");
  else setMood("night");
};
