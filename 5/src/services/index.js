export default class BookService {
  #books = [
    {
      id: 1,
      title: "PRoduction -ready microservice",
      author: "Susan J",
      price: 42,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "Harry Potter and the soccerers store",
      author: "Rowling",
      price: 42,
      coverImage:
        "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_.jpg",
    },
    {
      id: 3,
      title: "All Good books here",
      author: "Rowling",
      price: 22,
      coverImage:
        "https://crimejunkiepodcast.com/wp-content/uploads/2022/08/All-Good-People-Here-Book.jpg",
    },
    ];
    
    getBooks = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.#books)
            }, 1500)
        })
    }
    getBook = (id) => {
        return new Promise((resolve) => {
            resolve(this.#books.find((el) => el.id === id))
        })
        
    }

}