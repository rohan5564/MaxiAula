export interface Curso {
    _id: string;            /* Identificador del curso */
    profACargo: string;     /* RUT del profesor a cargo*/
    nombre: string;         /* Nombre del curso*/
    descripcion: string;
    año: number;            /* año de imparticion del curso */
    semestre: number;       /* semestre de imparticion del curso */
    cratedAt: Date;          /*Fecha de creacion del curso */
    participantes: string[];/* arreglo de ruts de los participantes del curso */ 
    recursos?: Recurso[];    /* arreglo de los recursos opcionales correspondientes al curso*/
    notas?: Notas[];        /* Las notas del curso en un arreglo de notas que guarda el rut las notas y el promedio de cada alumno */
}

export interface Recurso {
    _id: string;
    documentoURL?: string;
    imagenURL?: string;         
    videoURL?: string;          
    audioURL?: string;
}

export interface Notas {
    rutAlumno: string;       /* rut del alumno */
    notas: number[];  /* arreglo de las notas del alumno */
    promedio: number; /* promedio de las notas del alumno */
}