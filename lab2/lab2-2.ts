interface PrizeLogger { 
    (prize: string): void;
};

enum Category {
    BusinessAnalyst, 
    Developer, 
    Designer, 
    QA, 
    ScumMaster
};  //idk why it's red. it shouldn't be...

interface IntWorker1 {
    id: number; 
    name: string; 
    surname: string; 
    available: boolean; 
    salary: number;
    category: Category;
    markPrize: PrizeLogger;
};

let logPrize: PrizeLogger = (prize: string): void => {
    console.log(prize);
};

logPrize("100001");