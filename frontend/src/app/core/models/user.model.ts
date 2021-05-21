export interface User {
    _id: string;             /* Identificador de usuario */
    rut: string;           /* RUT*/
    nombre: string;         /* Nombre real del usuario*/
    fechaNac: Date;         /*Fecha de Nacimiento del Usuario */
    contraseña: string;     /* Contraseña de usuario*/
    correo: string;         /* Correo de usuario */
    tipo: number;        /* Nivel de permiso del usuario: 1=administrador 2=profesor 3=alumno 4=apoderado*/
}