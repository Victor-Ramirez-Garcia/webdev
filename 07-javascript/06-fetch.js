const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((item, i) => {
        let book = document.createElement("section");
        let title = document.createElement("h2");
        let author = document.createElement("p");
        let publicationYear = document.createElement("p");
        let pages = document.createElement("p");

        title.textContent = item.name;
        author.textContent = item.authors[0];
        publicationYear.textContent = new Date(item.released).getFullYear();
        pages.textContent = item.numberOfPages + " pages";
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(publicationYear);
        book.appendChild(pages);
        app.appendChild(book);
      });
      app.removeChild(app.children[0]);
    });
};

fetchData(url);
