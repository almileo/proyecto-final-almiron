import { Alumno } from "../interfaces/alumno";

export const AlumnosData: Array<Alumno> = [
    { nombre: 'Juan', apellido: 'Perez', email: 'jp@test.com', curso: 'Blockchain Inicial',cumpleanos: new Date(1992,5,2), edad: 30, esActivo: true },
    { nombre: 'Pedro', apellido: 'Aznar', email: 'lala@test.com', curso: 'Blockchain Avanzado', cumpleanos: new Date(2000,8,15), edad: 22, esActivo: false },
    { nombre: 'Jose', apellido: 'Munilla', email: 'okeymakey@test.com', curso: 'Solidity Inicial', cumpleanos: new Date(1989,1,11), edad: 33, esActivo: true },
    { nombre: 'Fernando', apellido: 'Cuevas', email: 'rodo@test.com', curso: 'DeFi desde cero', cumpleanos: new Date(2005,6,28), edad: 17, esActivo: true },
    { nombre: 'Adrian', apellido: 'Carozi', email: 'pepa@test.com', curso: 'Blockchain Inicial', cumpleanos: new Date(1990,4,17), edad: 32, esActivo: false}
]