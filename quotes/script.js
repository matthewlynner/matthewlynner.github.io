var quotes = [
  "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.",

  "For me life is continuously being hungry. The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to achieve, to conquer.",

  "Milk is for babies. When you grow up you have to drink beer.",

  "It\'s simple, if it jiggles, it\'s fat.",

  "The best activities for your health are pumping and humping.",

  "The worst thing I can be is the same as everybody else. I hate that.",

  "Help others and give something back. I guarantee you will discover that while public service improves the lives and the world around you, its greatest reward is the enrichment and new meaning it will bring your own life.",

  "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.",

  "If you don\’t find the time, if you don\’t do the work, you don\’t get the results.",

  "Be hungry for success, hungry to make your mark, hungry to be seen and to be heard and to have an effect. And as you move up and become successful, make sure also to be hungry for helping others.",

  "Life\’s six rules for success. 1. Trust yourself. 2. Break some rules. 3. Don’t be afraid to fail. 4. Ignore the naysayers. 5. Work like hell. 6. Give something back."
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
