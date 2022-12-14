enum Category {
    BusinessAnalyst, 
    Developer, 
    Designer, 
    QA, 
    ScumMaster
};

interface IWorker {
name: string;
surname: string; 
available: boolean; 
salary: number;
category: Category;
id: number;
};

function getAllWorkers(): IWorker[] { 
    let workers = [
        {name: 'Ryan', surname: 'Gosling', available: true, salary: 1000, category: Category.BusinessAnalyst, id: 0},
        {name: 'Henry', surname: 'Kowalski', available: true, salary: 1500, category: Category.Developer, id: 1 },
        {name: 'Semen', surname: 'Persunov', available: false, salary: 1600, category: Category.Designer, id: 2},
        {name: 'Van', surname: 'Darkholme', available: true, salary: 3, category: Category.ScumMaster, id: 3}
    ];

    return workers; 
};

function getWorkerById(id: number): IWorker | undefined {
    let workers = getAllWorkers()
    let getWorker = workers.find((worker) => {
        return  worker.id === id
    });

    return getWorker;
};

function PrintWorker(worker: IWorker) {
    console.log(worker.name + " " + worker.surname + " got salary " + worker.salary + " hundred bucks");
};

PrintWorker(getWorkerById(3));