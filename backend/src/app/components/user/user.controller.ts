import { User } from "../../models/user.model";
import UserRepository from "./user.repository";



function addUser(usuario: User): Promise<User> {

    return UserRepository.addUser(usuario);
}

async function getUsers(): Promise<User[]> {
    return (await UserRepository.getUsers()).reverse();
}

async function getUserByEmail(email:string) {
    return UserRepository.getUserByEmail(email);
}

async function getUserById(_id: string) {
    return UserRepository.getUserById(_id);
}

async function deleteUser(_id: string): Promise<User> {
    return UserRepository.deleteUser(_id);
}

async function putUser(_id: string, user: User): Promise<User> {
    return UserRepository.putUser(_id, user);
}

async function getUserByRUT(rut:string) {
    return UserRepository.getUserByRUT(rut);
}

/*
async function getHijos(rut: string): Promise<User[]> {
    let padre: User = await UserRepository.getUserByRUT(rut);
    let mishijos: User[] = await padre.hijos.map((user) => {
        
       return getUserByRUT(user)

    });
    console.log(mishijos)
    mishijos = mishijos.filter(Boolean);
    
    return mishijos;
}
*/



export default { addUser, getUsers, getUserById, getUserByEmail, deleteUser, putUser, getUserByRUT };
