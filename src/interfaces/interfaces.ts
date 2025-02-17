export interface Route {
    path: string;
    component: any;
}

//Interfaces para os formularios usuário comum
export interface TypeRawData {
    Name: string;
    Surname: string;
    Cpf: string;
    Email: string;
    ConfirmEmail: string;
    Password: string;
}
export interface TypeTratData {
  name: string;
  cpf: string;
  email: string;
  password: string;
}



//Interfaces para os formularios vendedores
export interface TypeRawDataSeller {
  Name: string,
  Surname: string,
  Cpf: string,
  Cnpj: string,
  LegalName: string,
  Email: string,
  ConfirmEmail: string,
  Password: string
}


export interface TypeTratDataSeller {
  name: string;
  cnpj: string;
  email: string;
  password: string;
}




//interfaces para os formularios de login
export interface TypeDataLogin {
  Email: string;
  Password: string;
}
export interface TypeTratDataLogin {
  email: string;
  password: string;
}