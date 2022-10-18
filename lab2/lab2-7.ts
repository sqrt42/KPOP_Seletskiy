abstract class ReferenceItem2 {

    private _publisher: string 
    
    constructor(public title: string, protected year: number) {
        console.log('Creating new ReferenceItem...')
    }

    get publisher() { let upReg: string = this._publisher.toUpperCase(); return upReg }
    set publisher(newPublisher: string) { this._publisher = newPublisher }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`)
    }

    abstract printCitation(): void
}

class Encyclopedia1 extends ReferenceItem2 {
    constructor(public edition: number, title: string, year: number) {
        super(title, year)
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`)
        console.log(`Edition: ${this.edition}`)
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }
}

let refEncyclopedia1: Encyclopedia1 = new Encyclopedia1(7777, "7777 Customs Rocket Bunny S14", 2011)
refEncyclopedia1.printItem()
refEncyclopedia1.printCitation()