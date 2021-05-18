import mongoose, { ConnectionOptions } from "mongoose";


function connect(): Promise<typeof mongoose> {
    const mongooseUri: string = 'mongodb+srv://admin:np2c9A4T6OrMSaUN@maxiauladb.uiq9u.mongodb.net/MaxiAulaDB?authSource=admin&replicaSet=atlas-5e9y13-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
    const options: ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    } 

    return mongoose.connect(mongooseUri, options);
}
export default { connect };