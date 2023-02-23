export interface Alumno {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    edad: number;
    cumpleanos?: Date;
    esActivo: boolean;
    curso?: string;
}
