class ReferenceItem {
    title: string
    year: number
    constructor(newTitle: string, newYear: number) {
        this.title = newTitle 
        this.year = newYear 
        console.log('Creating new ReferenceItem...')
    }

    private _publisher: string 

    get publisher() { let upReg: string = this._publisher.toUpperCase(); return upReg }
    set publisher(newPublisher: string) { this._publisher = newPublisher }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`)
    }
}

class Encyclopedia extends ReferenceItem {
    constructor(public edition: number, title: string, year: number) {
        super(title, year)
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`)
        console.log(`Edition: ${this.edition}`)
    }
}

let refBook : Encyclopedia = new Encyclopedia(6666, "6666 Customs Rocket Bunny S13", 2010)
refBook.printItem()