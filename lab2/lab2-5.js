var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(newTitle, newYear) {
        this.title = newTitle;
        this.year = newYear;
        console.log('Creating new ReferenceItem...');
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () { var upReg = this._publisher.toUpperCase(); return upReg; },
        set: function (newPublisher) { this._publisher = newPublisher; },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year));
    };
    return ReferenceItem;
}());
var ref = new ReferenceItem("Neuromancer", 1984);
ref.printItem();
ref.publisher = "Ace";
console.log(ref.publisher);
