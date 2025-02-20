export interface Route {
    path: string;
    component: any;
}

//Interfaces para os formularios usuário comum
export interface TypeRawData {
    Name: string;
    Surname: string;
    Cpf: string;
    Telefone: string;
    Email: string;
    ConfirmEmail: string;
    Password: string;
}
export interface TypeTratData {
  name: string;
  cpf: string;
  email: string;
  password: string;
  phoneNumber: string
}



//Interfaces para os formularios vendedores
export interface TypeRawDataSeller {
  Name: string,
  Surname: string,
  Cpf: string,
  Cnpj: string,
  LegalName: string,
  Telephone: string,
  Email: string,
  ConfirmEmail: string,
  Password: string
}


export interface TypeTratDataSeller {
  name: string;
  cpf: string;
  cnpj: string;
  email: string;
  legalName: string;
  phoneNumber: string
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



//INTERFACE PARA DADOS DE USUARIO APOS LOGAR
export interface UserData {
  id: number;
  name: string;
  email: string;
  cpf: string;
}


//INTERFACE PARA DADOS DE CRIAÇÃO DO MENU LATERAL DE CONFIGURAÇÕES
export interface TypeDataCreateListFull {
  name_summary: string;
  dataUl: {
      name_summary_category: string;
      srcImgIcon_category: string;
      listItem?: string[] | undefined;
  }[]
}

export interface TypeRawDataAccount {
  Name: string;
  Telephone: string;
  Email: string;
  Cpf: string
}