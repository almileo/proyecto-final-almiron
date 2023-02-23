import { Alumno } from "../interfaces/alumno";

export const AlumnosData: Array<Alumno> = [
    { id: 35489741, nombre: 'Juan', apellido: 'Perez', email: 'jp@test.com', curso: 'Blockchain Inicial',cumpleanos: new Date(1992,5,2), edad: 30, esActivo: true },
    { id: 45987123, nombre: 'Pedro', apellido: 'Aznar', email: 'lala@test.com', curso: 'Blockchain Avanzado', cumpleanos: new Date(2000,8,15), edad: 22, esActivo: false },
    { id: 12346578, nombre: 'Jose', apellido: 'Munilla', email: 'okeymakey@test.com', curso: 'Solidity Inicial', cumpleanos: new Date(1989,1,11), edad: 33, esActivo: true },
    { id: 48521025, nombre: 'Fernando', apellido: 'Cuevas', email: 'rodo@test.com', curso: 'DeFi desde cero', cumpleanos: new Date(2005,6,28), edad: 17, esActivo: true },
    { id: 25479885, nombre: 'Adrian', apellido: 'Carozi', email: 'pepa@test.com', curso: 'Blockchain Inicial', cumpleanos: new Date(1990,4,17), edad: 32, esActivo: false}
]