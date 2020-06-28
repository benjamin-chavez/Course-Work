// ES5 Object Oriented Programming

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI(){}

// Add Book to List
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
}

// Clear Fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',
  function(e){
    // Get form values
    const UItitle = document.getElementById('title').value,
          UIauthor = document.getElementById('author').value,
          UIisbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(UItitle, UIauthor, UIisbn);

    // Instantiate UI
    const ui = new UI();

    // Add book to list
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields();

    e.preventDefault();
  });