var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log("".concat(this.name, " is assisting ").concat(custName));
    };
    return UniversityLibrarian;
}());
var favoriteLibrarianino = new UniversityLibrarian();
favoriteLibrarianino.name = "Molly Millions";
favoriteLibrarianino.assistCustomer("Henry Dorsett Case");
