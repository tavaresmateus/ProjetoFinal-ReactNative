import {AuthData} from "../contexts/Auth"
async function signIn(email:string,password:string):Promise<AuthData>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(password === 'devserratec'){
                resolve({
                    token: 'fake-token',
                    email,
                    name: 'Mateus'
                })
            }else{
                reject(new Error('credenciais inválidas'))
            }
        },500)
    })
}

export const authService = {signIn}