export interface User{
    email: string;
    username?: string;
    token: string;
    nombre: string;
    apellido: string;
  Telefono: string;
}
interface Token {
  refresh: string;
  access: string;

}
