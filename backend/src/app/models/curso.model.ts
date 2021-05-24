export interface Curso {
    _id: string;            /* Identificador del curso */
    profACargo: string;     /* RUT del profesor a cargo*/
    nombre: string;         /* Nombre del curso*/
    año: number;            /* año de imparticion del curso */
    semestre: number;       /* semestre de imparticion del curso */
    cratedAt: Date;          /*Fecha de creacion del curso */
    participantes: string[];/* arreglo de ruts de los participantes del curso */ 
    recursos?: Recurso[];    /* arreglo de los recursos opcionales correspondientes al curso*/
}

export interface Recurso{
    _id: string;
    documentoURL?: string;
    imagenURL?: string;         
    videoURL?: string;          
    audioURL?: string;
}