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
var ReferenceItem2 = /** @class */ (function () {
    function ReferenceItem2(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating new ReferenceItem...');
    }
    Object.defineProperty(ReferenceItem2.prototype, "publisher", {
        get: function () { var upReg = this._publisher.toUpperCase(); return upReg; },
        set: function (newPublisher) { this._publisher = newPublisher; },
        enumerable: false,
        configurable: true
    });
    ReferenceItem2.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year));
    };
    return ReferenceItem2;
}());
var Encyclopedia1 = /** @class */ (function (_super) {
    __extends(Encyclopedia1, _super);
    function Encyclopedia1(edition, title, year) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia1.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year));
        console.log("Edition: ".concat(this.edition));
    };
    Encyclopedia1.prototype.printCitation = function () {
        console.log("".concat(this.title, " - ").concat(this.year));
    };
    return Encyclopedia1;
}(ReferenceItem2));
var refEncyclopedia1 = new Encyclopedia1(7777, "7777 Customs Rocket Bunny S14", 2011);
refEncyclopedia1.printItem();
refEncyclopedia1.printCitation();
