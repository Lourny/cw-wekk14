interface User {
    firstName: string;
    lastName: string;
    mobileNumber: number;
    email?: string;
    dateOfBirth?: string;
    card?: number;
    account?: number;
    total?: number;
    password?: string;
    userId?: number;
  }
  
  function setUser(user:object){
  
  }
  
  
  
  const newUser: User = {
    firstName: "ali",
    lastName: "jalili",
    mobileNumber: 33661199,
    email: "aj@example.com",
    dateOfBirth: "2000-01-01",
    password: "securePassword123",
    userId: 1234,
  };
  
  console.log(newUser);
  