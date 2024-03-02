const quotes = [
  { author: "Thomas Edison", quote: "I have not failed. I've just found 10,000 ways that won't work." },
  { author: "Steve Jobs", quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do." },
  { author: "Albert Einstein", quote: "A person who never made a mistake never tried anything new." },
  { author: "Henry Ford", quote: "Failure is simply the opportunity to begin again, this time more intelligently." },
  { author: "Mark Zuckerberg", quote: "The biggest risk is not taking any risk... In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks." },
  { author: "Bill Gates", quote: "It's fine to celebrate success but it is more important to heed the lessons of failure." },
  { author: "Winston Churchill", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
  { author: "Elon Musk", quote: "When something is important enough, you do it even if the odds are not in your favor." },
  { author: "Jeff Bezos", quote: "One of the only ways to get out of a tight box is to invent your way out." },
  { author: "Paul Graham", quote: "A startup is a company designed to grow fast. Being newly founded does not in itself make a company a startup." },
  { author: "Reid Hoffman", quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be." },
  { author: "Larry Page", quote: "Always deliver more than expected." },
  { author: "Tony Hsieh", quote: "Chase the vision, not the money; the money will end up following you." },
  { author: "Tim Ferriss", quote: "What we fear doing most is usually what we most need to do." },
  { author: "Richard Branson", quote: "Do not be embarrassed by your failures, learn from them and start again." },
  { author: "Seth Godin", quote: "The only thing worse than starting something and failing... is not starting something." },
  { author: "Guy Kawasaki", quote: "Ideas are easy. Implementation is hard." },
  { author: "Chris Sacca", quote: "Your reputation is more important than your paycheck, and your integrity is worth more than your career." },
  { author: "Gary Vaynerchuk", quote: "Skills are cheap. Passion is priceless." },
  { author: "Warren Buffett", quote: "Price is what you pay. Value is what you get." }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = ' - ' + todayQuote.author;