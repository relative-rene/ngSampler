export interface EnvironmentInterface {
    production: boolean;
    apiUrl: string;
    realWorldApiUrl: string;
    apiACG:string;
  }
  
  export const environment: EnvironmentInterface = {
    production: false,
    apiUrl: "localhost:3000",
    realWorldApiUrl: "https://api.realworld.io.api",
    apiACG: "http://localhost:4000/api/acg"
  
  };
  