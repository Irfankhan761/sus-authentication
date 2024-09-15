import Servicesdetail from '#models/servicesdetail'
interface serviceDetailPayload {
  service_image: string
  service_detail: string
  service_heading: string
  service_description: string
}

export default class ServiceDetail {
  public static async addDetail(payload: serviceDetailPayload) {
    const cardDetail = await Servicesdetail.create({
      service_image: payload.service_image,
      service_detail: payload.service_detail,
      service_heading: payload.service_heading,
      service_description: payload.service_description,
    })
    return cardDetail
  }
  public static async updateDetail(id: number, data: any) {
    const cardDetail = await Servicesdetail.findOrFail(id)
    cardDetail.merge(data)
    await cardDetail.save()
    return cardDetail.serialize()
  }
  public static async getDetail(id: number) {
    const cardDetail = await Servicesdetail.findOrFail(id)
    return cardDetail
  }
  public static async deleteDetail(id: number) {
    const cardDetail = await Servicesdetail.findOrFail(id)
    await cardDetail.delete()
  }
}
