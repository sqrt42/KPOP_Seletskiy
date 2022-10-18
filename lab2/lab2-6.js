var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(edition, title, year) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year));
        console.log("Edition: ".concat(this.edition));
    };
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia(6666, "6666 Customs Rocket Bunny S13", 2010);
refBook.printItem();
