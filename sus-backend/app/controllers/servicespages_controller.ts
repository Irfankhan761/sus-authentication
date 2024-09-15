import { HttpContext } from '@adonisjs/core/http'
import { serviceCardValidator } from '#validators/service_card'
import ServiceCard from '#services/servicecard_service'
import { serviceDetailValidator } from '#validators/service_detail'
import ServiceDetail from '#services/servicedetail_service'

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
  // Details Services
  public async addServiceDetail({ request, response }: HttpContext) {
    const validatedData = await request.validateUsing(serviceDetailValidator)
    const addCardDetail = await ServiceDetail.addDetail(validatedData)
    return response.status(201).json(addCardDetail)
  }

  public async updateServiceDetail({ params, request, response }: HttpContext) {
    const validatedData = await request.validateUsing(serviceDetailValidator)
    const updateCardDetail = await ServiceDetail.updateDetail(params.id, validatedData)
    return response.ok(updateCardDetail)
  }
  public async getServiceDetail({ params, response }: HttpContext) {
    const cardDetail = await ServiceDetail.getDetail(params.id)
    return response.json(cardDetail)
  }
  // async getServiceDetail({ params, response }: HttpContext) {
  //   try {
  //     const serviceId = params.id
  //     const serviceDetail = await ServiceDetail.getDetail(serviceId)

  //     if (!serviceDetail) {
  //       return response.status(404).json({ error: 'Service not found' })
  //     }

  //     return response.status(200).json(serviceDetail)
  //   } catch (error) {
  //     return response.status(500).json({ error: 'Failed to fetch service detail' })
  //   }
  // }

  public async deleteServiceDetail({ params, response }: HttpContext) {
    await ServiceDetail.deleteDetail(params.id)
    return response.noContent()
  }
}
