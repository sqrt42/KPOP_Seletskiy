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


let ref: ReferenceItem = new ReferenceItem("Neuromancer", 1984)
ref.printItem()
ref.publisher = "Ace"
console.log(ref.publisher)