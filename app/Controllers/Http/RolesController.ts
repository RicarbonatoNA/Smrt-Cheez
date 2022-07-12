import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role'
import RolStoreValidator from 'App/Validators/RolStoreValidator'

export default class RolesController {
    public async index({response}:HttpContextContract){
        try{
            response.ok({mensaje:'Hola', data:await Role.all(), estado:true})
        } catch{
            response.badRequest({mensaje:'Hubo un error', estado:false})
        }
    }

    public async store({response, request}:HttpContextContract){
        try{
            const Rol = await request.validate(RolStoreValidator)
            await Role.create(Rol)
            response.created({mensaje:'se ha creado', estado:true})
        }catch{
            response.badRequest({mensaje:'Hubo un error, verifica los datos', estado:false})
        }
    }

    public async show({response, params}:HttpContextContract){
        try{
            response.ok({mensaje:'se está mostrando', data:await Role.findOrFail(params.id), estado:true})
        } catch{
            response.badRequest({mensaje:'Hubo un error', estado:false})
        }
    }

    public async destroy({response, params}:HttpContextContract){
        try{
            const Reg = await Role.findOrFail(params.id)
            await Reg.delete()
            response.ok({mensaje:'se ha eliminado', estado:true})
        } catch{
            response.badRequest({mensaje:'Hubo un error', estado:false})
        }
    }

    public async update({response, params, request}:HttpContextContract){
        try{
            const Reg = await Role.findOrFail(params.id)
            Reg.nombre = request.input('nombre')
            await Reg.save()
        } catch{
            response.badRequest({mensaje:'Hubo un error', estado:false})
        }
    }
}
