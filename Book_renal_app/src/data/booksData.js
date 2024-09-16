const data = [
    {
      "id": crypto.randomUUID(),
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg",
      "title": "House of Sky",
      "description": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
      "genre": "Comedy, Drama",
      "rating": 3,
      "price": 90,
      "createdAt": "2024-06-07"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638867089i/58690308.jpg",
      "title": "Book Lovers",
      "description": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
      "genre": "Action, Comedy, Crime, Drama",
      "rating": 4,
      "price": 100,
      "createdAt": "2024-05-14"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1649848581i/60435878.jpg",
      "title": "Carrie Soto Is Back",
      "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
      "genre": "Comedy, Drama",
      "rating": 5,
      "price": 140,
      "createdAt": "2024-05-30"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626710416i/58446227.jpg",
      "title": "Sea of Tranquility",
      "description": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks.",
      "genre": "Comedy, Drama, Thriller",
      "rating": 4,
      "price": 250,
      "createdAt": "2024-06-10"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg",
      "title": "Hidden Pictures",
      "description": "Branch and Poppy embark on a journey to rescue Floyd from pop-culture obscurity.",
      "genre": "Action, Adventure, Sci-fi",
      "rating": 5,
      "price": 100,
      "createdAt": "2024-05-19"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634068432i/59233594.jpg",
      "title": "The Final Gambit",
      "description": "Branch and Poppy embark on a journey to rescue Floyd.",
      "genre": "Action, Adventure, Sci-fi",
      "rating": 5,
      "price": 100,
      "createdAt": "2024-04-19",
      "upcoming": true
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587396413l/52439531.jpg",
      "title": "The Inheritance Games",
      "description": "A trio of bodybuilders in Florida get caught up in an extortion ring.",
      "genre": "Crime, Drama",
      "rating": 4,
      "price": 120,
      "createdAt": "2024-05-12"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8XVAIt72ljLEo4yVSzieAI73S4os9MkzJmGiA_Pt5Bpx5NPJj",
      "title": "Malibu Rising",
      "description": "A book about family, fame, and finding oneself.",
      "genre": "Drama, Thriller",
      "rating": 4,
      "price": 190,
      "createdAt": "2024-06-12"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VrKB_ugBaqNstwu8-xp8LzF6GZIxuueM5qKH_wQ7EYWfdoVQ",
      "title": "People We Meet on Vacation",
      "description": "When best friends fall in love, chaos ensues.",
      "genre": "Romance, Comedy",
      "rating": 5,
      "price": 75,
      "createdAt": "2024-03-15"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://books.google.com.pk/books/publisher/content?id=LiI6EAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3T67vhupw4CIk4MrF_WNVtY6vZqg&w=1280",
      "title": "The Midnight Library",
      "description": "A story about regret, hope, and parallel lives.",
      "genre": "Fiction, Fantasy",
      "rating": 5,
      "price": 85,
      "createdAt": "2024-04-08"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSy8l38c0Fl7GdwmhHF0DQNH51xTyvFDrfIfk71v7-KEUj5g-zn",
      "title": "The Silent Patient",
      "description": "A psychological thriller that keeps you guessing.",
      "genre": "Thriller, Mystery",
      "rating": 5,
      "price": 130,
      "createdAt": "2024-04-28"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://the-bibliofile.com/wp-content/uploads/evelynhugomovie-800x800.jpg",
      "title": "The Seven Husbands of Evelyn Hugo",
      "description": "A journey through the life of a Hollywood icon.",
      "genre": "Drama, Historical",
      "rating": 5,
      "price": 145,
      "createdAt": "2024-02-12"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1688011813i/27362503.jpg",
      "title": "It Ends With Us",
      "description": "A powerful story about love, heartbreak, and self-discovery.",
      "genre": "Romance, Drama",
      "rating": 5,
      "price": 135,
      "createdAt": "2024-02-20"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHH-fZcptMVfl-2RHoenxN95gXkYG3qk6xWhDjBZw7DuCHqdLD",
      "title": "The Night Circus",
      "description": "A magical world full of mystery and wonder.",
      "genre": "Fantasy, Mystery",
      "rating": 4,
      "price": 120,
      "createdAt": "2024-03-05"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSNdsdou73_PyAGvjjq_DzQwTH9lhOJ6jQ2MlZnwgDBT7-jNqoR",
      "title": "Where the Crawdads Sing",
      "description": "A coming-of-age story with a mysterious twist.",
      "genre": "Mystery, Fiction",
      "rating": 5,
      "price": 115,
      "createdAt": "2024-01-12"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3Ixsmqk6hk7O0kStzU030_b7hf0p2izLG2NqD_UG17K4UoJin",
      "title": "The Vanishing Half",
      "description": "A poignant tale of identity, race, and belonging.",
      "genre": "Historical, Fiction",
      "rating": 4,
      "price": 180,
      "createdAt": "2024-03-25"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://books.google.com.pk/books/content?id=FrXsTNgkEqgC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0ol-77rLg9_jHIcXftwt83puwRmw&w=1280",
      "title": "The Song of Achilles",
      "description": "A breathtaking retelling of the Iliad.",
      "genre": "Historical, Romance",
      "rating": 5,
      "price": 165,
      "createdAt": "2024-02-02"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuuvLNDdMpLtWWpNtql30OvbJPdHX71r6HK11g0y4J-QpUWSj4",
      "title": "Dune",
      "description": "An epic tale of politics, religion, and power.",
      "genre": "Science Fiction, Fantasy",
      "rating": 5,
      "price": 250,
      "createdAt": "2024-01-15"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://horrorreviewsbythecollective.wordpress.com/wp-content/uploads/2019/05/ce31269da2ed56a33e18037b17d9bd4d.jpg",
      "title": "The Shining",
      "description": "A terrifying story of isolation and madness.",
      "genre": "Horror, Thriller",
      "rating": 5,
      "price": 100,
      "createdAt": "2024-04-10"
    },
    {
      "id": crypto.randomUUID(),
      "cover": "https://i0.wp.com/elabraveandtrue.com/wp-content/uploads/2021/05/10015929995_79899f4b44_b.jpg?fit=750%2C750&ssl=1",
      "title": "The Great Gatsby",
      "description": "A timeless classic about the American dream.",
      "genre": "Historical, Drama",
      "rating": 5,
      "price": 200,
      "createdAt": "2024-01-05"
    }
  ];
  
  function getAllBooks() {
    return data;
  }
  
  
  
  
  export { getAllBooks  };