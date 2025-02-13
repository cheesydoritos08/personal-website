
const phrases = [
    "Evil is always possible. And goodness is eternally difficult.",
    "The world changes, we do not, therein lies the irony that kills us.",
    "The only power that exists is inside ourselves.",
    "Like all strong people, she suffered always a measure of loneliness; she was a marginal outsider, a secret infidel of a certain sort.",
    "It was as if the empty nights were made for thinking of him. And sometimes I found myself so vividly aware of him it was as if he had only just left the room and the ring of his voice were still there. And somehow, there was a disturbing comfort in that, and, despite myself, I’d envision his face.",
    "Do you know what it means to be loved by Death?... Do you know what it means to have Death know your name?",
    "As if the night had said to me, ‘You are the night and the night alone understands you and enfolds you in its arms’ One with the shadows. Without nightmare. An inexplicable peace.",
    "How pathetic it is to describe these things which can't truly be described.",
    "I was a newborn vampire, weeping at the beauty of the night.",
    "I lived like a man who wanted to die but who had no courage to do it himself.",
    "My last sunrise. That morning, I was not yet a vampire. And I saw my last sunrise. I remember it completely; yet I do not think I remember any other sunrise before it.",
    "Because no one could in any guise convince me of what I myself knew to be true, that I was damned in my own mind and soul.",
    "That is the crowning evil, that we can even go so far as to love each other, you and I. And who else would show us a particle of love, a particle of compassion or mercy? Who else, knowing us as we know each other, could do anything but destroy us? Yet we can love each other.",
  ];
  
  // Function that takes a list of items, and returns a random item
  const randomItem = Math.floor(Math.random() * phrases.length);

  document.getElementById("random-quote").innerHTML =  phrases[randomItem];