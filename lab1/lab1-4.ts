function createCustomerID(name: string, id: number): string {
    return name + " " + id;
  }
  const myID: string = createCustomerID("Jacket", 0);
  console.log(myID);
  
  let IdGenerator: typeof createCustomerID = (
    name: string,
    id: number
  ): string => {
    return name + " " + id;
  };
  
  IdGenerator = createCustomerID;
  
  console.log(IdGenerator("Biker", 1));
  export {};
  