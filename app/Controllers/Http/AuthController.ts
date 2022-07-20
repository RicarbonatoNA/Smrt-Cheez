import { Response } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
    public async login({request, auth, response}:HttpContextContract){
        try{
            const email = request.input('email')
            const password = request.input('password')
            const token = await auth.use('api').attempt(email, password, {expiresIn:'30mins'})
            response.ok ({mensaje:'se logueo correctamente', token:token, estado:true})
        } catch{
            response.unauthorized({mensaje:'Hubo un error', estado:false})
        }
    }

    public async register({response, request}:HttpContextContract){
        //try{
            const user = request.all()
            await User.create(user)
            //response.ok ({mensaje:'se registró correctamente', estado:true})
        //} catch{
            //response.badRequest({mensaje:'Hubo un error', estado:false})
        //}
    }
}
