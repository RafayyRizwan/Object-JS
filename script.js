// Initialize an empty array to hold the books
let books = [];

// Function to add a new book to the list
function addBook() {
    // Get the value of the book name from the input field
    const bookName = document.getElementById('bookName').value;
    // Get the value of the author name from the input field
    const authorName = document.getElementById('authorName').value;
    // Get the value of the book description from the input field
    const bookDescription = document.getElementById('bookDescription').value;
    // Get the value of the number of pages from the input field and convert it to an integer
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // Check if all fields are filled correctly
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        // Create a book object with the gathered data
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        // Add the book object to the books array
        books.push(book);
        // Update the displayed list of books
        showbooks();
        // Clear the input fields
        clearInputs();
    } else {
        // If not all fields are correctly filled, alert the user
        alert('Please fill in all fields correctly.');
    }
}

// Function to display the list of books
function showbooks() {
    // Map over the books array and create an HTML string for each book
    const booksDiv = books.map((book, index) => `
        <div id="book-${index}">
            <h1>Book Number: ${index + 1}</h1>
            <p><strong>Book Name: </strong>${book.name}</p>
            <p><strong>Author Name:</strong> ${book.authorName}</p>
            <p><strong>Book Description:</strong> ${book.bookDescription}</p>
            <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
            <button onclick="deleteBook(${index})">Delete Book</button>
        </div>`
    ).join(''); // Join the array of HTML strings into one string
    // Set the innerHTML of the books div to the generated HTML
    document.getElementById('books').innerHTML = booksDiv;
}

// Function to delete a book from the list
function deleteBook(index) {
    // Remove one element from the books array at the specified index
    books.splice(index, 1);
    // Update the displayed list of books
    showbooks();
}

// Function to clear the input fields
function clearInputs() {
    // Set the value of the book name input field to an empty string
    document.getElementById('bookName').value = '';
    // Set the value of the author name input field to an empty string
    document.getElementById('authorName').value = '';
    // Set the value of the book description input field to an empty string
    document.getElementById('bookDescription').value = '';
    // Set the value of the pages number input field to an empty string
    document.getElementById('pagesNumber').value = '';
}
