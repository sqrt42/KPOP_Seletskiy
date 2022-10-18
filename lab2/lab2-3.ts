interface Person { 
    name: string
    email: string 
}

interface Author extends Person {
    numBooksPublished: number
}

interface Librarian extends Person {
    department: string
    assistCustomer(custName: string): void
}

let favoriteAuthor: Author = {
    name: "William Gibson",
    email: "gibson@gmail.com",
    numBooksPublished: 13
}

let favoriteLibrarian: Librarian = {
    name: "Richard Morgan",
    email: "morgan@gmail.com",
    department: "Postcyberpunk",
    assistCustomer(custName: string): void {
        console.log("Morgan")
    }
}