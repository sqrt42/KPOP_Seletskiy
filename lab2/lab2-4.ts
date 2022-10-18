class UniversityLibrarian implements Librarian {
    name: string
    email: string
    department: string

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`)
    }
}

let favoriteLibrarianino: Librarian = new UniversityLibrarian()

favoriteLibrarianino.name = "Molly Millions"
favoriteLibrarianino.assistCustomer("Henry Dorsett Case")