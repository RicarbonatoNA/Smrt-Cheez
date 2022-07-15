import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import tipossensor from 'App/ModelsMongo/tipossensor'

export default class SensorsController {
  public async index({response}: HttpContextContract) {
    try{
      const data = await tipossensor.find({})
      response.ok({mensaje:"chido", data:data, status:true})
    } catch{
      response.badRequest({mensaje:"ya valio queso", status:false})
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({response, request}: HttpContextContract) {
    try{
      await tipossensor.create(request.all())
      response.ok({mensaje:"chido", status:true})
    } catch{
      response.badRequest({mensaje:"ya valio queso", status:false})
    }
  }

  public async show({response, params}: HttpContextContract) {
    try{
      const data=await tipossensor.findById(params.id)
      response.ok({mensaje:"chido", data:data, status:true})
    } catch{
      response.badRequest({mensaje:"ya valio queso", status:false})
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({params, request, response}: HttpContextContract) {
    try{
      await tipossensor.updateOne({id: params.id}, {$set: {Nombre: request.input('Nombre')}})
      response.ok({mensaje:"chido", status:true})
    } catch{
      response.badRequest({mensaje:"ya valio queso", status:false})
    }
  }

  public async destroy({params, response}: HttpContextContract) {
    try{
      await tipossensor.deleteOne({id: params.id})
      response.ok({mensaje:"chido", status:true})
    } catch{
      response.badRequest({mensaje:"ya valio queso", status:false})
    }
  }
}