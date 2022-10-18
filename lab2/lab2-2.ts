interface PrizeLogger { 
    (prize: string): void;
};

enum Category {
    BusinessAnalyst, 
    Developer, 
    Designer, 
    QA, 
    ScumMaster
};

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