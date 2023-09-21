import {User} from "@app/models/backend";

export interface Inmueble {
    id: number;
    nombre: string;
    picture: string;
    precio: number;
    fechaCreacion: string;
    direccion: string;

}
