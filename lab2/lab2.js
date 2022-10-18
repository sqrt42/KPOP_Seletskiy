var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScumMaster"] = 4] = "ScumMaster";
})(Category || (Category = {}));
;
;
function getAllWorkers() {
    var workers = [
        { name: 'Ryan', surname: 'Gosling', available: true, salary: 1000, category: Category.BusinessAnalyst, id: 0 },
        { name: 'Henry', surname: 'Kowalski', available: true, salary: 1500, category: Category.Developer, id: 1 },
        { name: 'Semen', surname: 'Persunov', available: false, salary: 1600, category: Category.Designer, id: 2 },
        { name: 'Van', surname: 'Darkholme', available: true, salary: 3, category: Category.ScumMaster, id: 3 }
    ];
    return workers; //why the error...
}
;
function getWorkerById(id) {
    var workers = getAllWorkers();
    var getWorker = workers.find(function (worker) {
        return worker.id === id;
    });
    return getWorker;
}
;
function PrintWorker(worker) {
    console.log(worker.name + " " + worker.surname + " got salary " + worker.salary + " hundred bucks");
}
;
PrintWorker(getWorkerById(3));
