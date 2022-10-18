enum Category {
    BusinessAnalisyst,
    Developer,
    Designer,
    QA,
    ScrumMaster,
  }
  function getAllWorkers() {
    let workers = [
      {
        Name: "Ivan",
        surname: "Ivanov",
        available: true,
        salary: 1000,
        category: Category.QA,
        id: 0,
      },
      {
        Name: "Petro",
        surname: "Petrov",
        available: true,
        salary: 1500,
        category: Category.Developer,
        id: 1,
      },
      {
        Name: "Vasyl",
        surname: "Vasyliev",
        available: false,
        salary: 1600,
        category: Category.Developer,
        id: 2,
      },
      {
        Name: "Evgen",
        surname: "Zhukov",
        available: true,
        salary: 1300,
        category: Category.QA,
        id: 3,
      },
    ];
    return workers;
  }
  
  function getWorkerById(id: number) {
    let workers = getAllWorkers();
    let foundWorker = workers.find((worker) => { //tsc returns an error despite the config being set to ES6 ¯\_(ツ)_/¯
      return worker.id === id;
    });
  
    let workerCredentials = {
      name: foundWorker?.Name,
      surname: foundWorker?.surname,
      salary: foundWorker?.salary,
    };
  
    return workerCredentials;
  }
  
  getAllWorkers().forEach((worker) => {
    if (worker.category === Category.Developer) {
      console.log(`${worker.Name}` + " " + `${worker.surname}`);
    }
  });
  
  console.log(getWorkerById(3));
  
  export {};
  