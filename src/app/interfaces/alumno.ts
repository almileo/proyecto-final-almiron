export interface Alumno {
    nombre: string;
    apellido: string;
    email: string;
    edad: number;
    cumpleanos?: Date;
    esActivo: boolean;
    curso?: string;
}
