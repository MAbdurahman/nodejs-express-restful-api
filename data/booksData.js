

const books = [
   {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "description":
         "F. Scott Fitzgerald’s classic novel delves into the opulent yet hollow world of Jay Gatsby, a man obsessed with reclaiming a lost love and achieving the American Dream. Set in the Roaring Twenties, the story explores themes of wealth, love, and disillusionment, offering a poignant critique of the pursuit of happiness through materialism and the elusive nature of the past.",
      "category": ["tragedy", "realism", "modernism", "social satire"],
      "price": "10.99",
      "numberInStock": 15,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "description":
         "Harper Lee’s masterpiece follows Scout Finch as she learns about racial injustice and moral integrity in the Deep South. Guided by her father, Atticus Finch, Scout witnesses the courage it takes to stand up for what is right, even in the face of prejudice. A timeless tale of empathy, justice, and the complexities of human nature.",
      "category": ["southern gothic", "bildungsroman"],
      "price": "8.99",
      "numberInStock": 20,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "1984",
      "author": "George Orwell",
      "description":
         "George Orwell’s dystopian novel portrays a totalitarian society ruled by Big Brother, where individuality and truth are obliterated. Winston Smith’s quiet rebellion against the oppressive regime reveals the dangers of unchecked power and surveillance. A chilling and prophetic exploration of freedom, manipulation, and the human spirit’s resilience against tyranny.",
      "category": ["dystopian", "political fiction", "social science fiction", "speculative fiction"],
      "price": "9.99",
      "numberInStock": 12,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "description":
         "Jane Austen’s witty and romantic novel centers on Elizabeth Bennet, a spirited young woman navigating societal expectations and her evolving feelings for the enigmatic Mr. Darcy. Through misunderstandings and personal growth, the story highlights the importance of overcoming pride and prejudice to find true love and mutual respect.",
      "category": ["regency romance", "romance", "literary fiction"],
      "price": "7.99",
      "numberInStock": 18,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "Moby Dick",
      "author": "Herman Melville",
      "description":
         "Herman Melville’s epic tale follows Captain Ahab’s obsessive quest to hunt the white whale, Moby Dick. A profound exploration of fate, obsession, and humanity’s struggle against nature, the novel delves into the psychological depths of its characters, offering a timeless meditation on the consequences of unchecked ambition.",
      "category": ["adventure", "fiction", "epic"],
      "price": "11.99",
      "numberInStock": 10,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "description":
         "J.D. Salinger’s iconic novel captures the voice of Holden Caulfield, a disenchanted teenager grappling with identity, alienation, and the transition to adulthood. His candid and often cynical narration provides a raw and intimate portrayal of adolescence, making it a defining work of modern literature.",
      "category": ["coming-of-age fiction", "bildungsroman", "psychological fiction"],
      "price": "9.99",
      "numberInStock": 14,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "The Nightingale",
      "author": "Kristin Hannah",
      "description":
         "Kristin Hannah’s historical novel tells the story of two sisters in Nazi-occupied France, each fighting for survival in their own way. One joins the Resistance, while the other protects her family at home. A powerful tale of love, sacrifice, and the resilience of women during wartime.",
      "category": ["historical fiction"],
      "price": "12.99",
      "numberInStock": 16,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "All the Light We Cannot See",
      "author": "Anthony Doerr",
      "description":
         "Anthony Doerr’s lyrical novel intertwines the lives of a blind French girl and a German soldier during World War II. Their stories converge in a hauntingly beautiful narrative that explores the impact of war on ordinary lives and the enduring power of hope and human connection.",
      "category": ["historical fiction"],
      "price": "11.99",
      "numberInStock": 22,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "The Book Thief",
      "author": "Markus Zusak",
      "description":
         "Markus Zusak’s poignant novel, narrated by Death, follows Liesel, a young girl in Nazi Germany, as she discovers the transformative power of words and stories. A moving exploration of loss, resilience, and the human spirit’s ability to find light in the darkest of times.",
      "category": ["historical fiction", "bildungsroman", "young adult fiction"],
      "price": "10.99",
      "numberInStock": 12,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "The Tattooist of Auschwitz",
      "author": "Heather Morris",
      "description":
         "Heather Morris’s novel is based on the true story of Lale Sokolov, a Jewish man forced to tattoo prisoners in Auschwitz. Amidst unimaginable horror, he finds love and hope, showcasing the strength of the human heart and the enduring power of compassion and survival.",
      "category": ["historical fiction"],
      "price": "9.99",
      "numberInStock": 18,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "The Paris Architect",
      "author": "Charles Belfoure",
      "description":
         "Charles Belfoure’s gripping novel follows an architect in Nazi-occupied Paris who designs hiding places for Jews. Initially driven by money, he becomes deeply involved in the resistance, risking his life for others. A compelling story of moral awakening, courage, and the complexities of human morality during wartime.",
      "category": ["historical fiction", "thriller"],
      "price": "10.99",
      "numberInStock": 0,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "Animal Farm",
      "author": "George Orwell",
      "description":
         "Animal Farm is a satirical allegorical novella by George Orwell, published in 1945. It tells the story of farm animals who revolt against their human owner, aiming to create an equal society, but ultimately face betrayal and oppression under their own leaders, the pigs. It uses a story about farm animals to critique totalitarianism and reflect on the events of the Russian Revolution and Stalinist era",
      "category": ["political satire", "allegorical novella"],
      "price": "10.99",
      "numberInStock": 0,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "Escape From Freedom",
      "author": "Erich Fromm",
      "description":
         "Escape from Freedom is a book by Erich Fromm, published in 1941, that explores the complex relationship between individual freedom and the psychological mechanisms that lead people to seek security through authoritarianism. Fromm distinguishes between 'freedom from' (negative freedom) and 'freedom to'(positive freedom), arguing that while modern society offers external freedoms, many individuals struggle with feelings of isolation and anxiety, often opting to relinquish their freedoms in favor of conformity and control.",
      "category": ["social psychology", "philosophy", "sociology", "politics"],
      "price": "10.99",
      "numberInStock": 0,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "Mind, Self, and Society",
      "author": "George Herbert Mead",
      "description":
         "\"Mind, Self, and Society\" is a book by George Herbert Mead that explores how individual identity and consciousness are shaped through social interactions. It introduces the concept of symbolic interactionism, emphasizing that the self is a social process developed through communication and behavior within society.",
      "category": ["sociology", "psychology", "philosophy", "humanities"],
      "price": "10.99",
      "numberInStock": 0,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "Propaganda",
      "author": "Edward Bernays",
      "description":
         "\"Propaganda\" is a book by Edward Bernays, published in 1928, that explores the techniques of public communication and the psychological manipulation of the masses. Bernays argues that propaganda is essential for shaping public opinion and maintaining democracy, presenting it as a tool for both social change and commercial success.",
      "category": ["psychology", "sociology", "business"],
      "price": "10.99",
      "numberInStock": 0,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   },
   {
      "title": "Art Of War",
      "author": "Sun Tzu",
      "description":
         "The Art of War is an ancient Chinese military treatise attributed to Sun Tzu, dating back to the 5th century BC. It consists of 13 chapters that cover various aspects of warfare and strategy, emphasizing the importance of understanding both oneself and the enemy to achieve victory without necessarily engaging in battle.",
      "category": ["military strategy treatise", "philosophy", "history",  "nonfiction."],
      "price": "10.99",
      "numberInStock": 0,
      "rating": 0,
      "numberOfReviews": 0,
      "reviews": []
   }
];

module.exports = books;