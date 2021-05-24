import { Schema, model, Document } from "mongoose";
import { User } from '../../models/user.model';

const definition: Partial<Record<keyof User, any>> = {

    rut: { type: String },
    nombre: { type: String },
    contraseña: { type: String },
    fechaNac: { type: Date},
    correo: { type: String },
    tipo: { type: Number },
    hijos: {type: Array}
  
}

const schema: Schema<User> = new Schema(definition)

export default model<User & Document>('User', schema, 'Users');