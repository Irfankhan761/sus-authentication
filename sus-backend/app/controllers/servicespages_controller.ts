import type { HttpContext } from '@adonisjs/core/http'
import { serviceCardValidator } from '#validators/service_card'
import ServiceCard from '#services/servicecard_service'
// import Servicescard from '#models/servicescard'

export default class ServicespagesController {
  public async addServiceCard({ request, response }: HttpContext) {
    const validatedData = await request.validateUsing(serviceCardValidator)

    const service = await ServiceCard.addCard(validatedData)

    return response.status(201).json(service)
  }
  async updateServiceCard({ params, request, response }: HttpContext) {
    const validatedData = await request.validateUsing(serviceCardValidator)
    const card = await ServiceCard.updateCard(params.id, validatedData)
    return response.ok(card)
  }
  public async getServiceCard({ response }: HttpContext) {
    // const services = await Servicescard.all()
    const services = await ServiceCard.getAllCard()
    return response.json(services)
  }
  async delelteServiceCard({ params, response }: HttpContext) {
    try {
      await ServiceCard.deleteCard(params.id)
      return response.noContent()
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }
}
