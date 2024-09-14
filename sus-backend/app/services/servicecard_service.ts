import Servicescard from '#models/servicescard'
interface ServiceCardPayload {
  image: string
  heading: string
  paragraph: string
}

export default class ServiceCard {
  public static async addCard(payload: ServiceCardPayload) {
    const card = await Servicescard.create({
      image: payload.image,
      heading: payload.heading,
      paragraph: payload.paragraph,
    })
    return card
  }
  public static async updateCard(id: number, data: any) {
    const card = await Servicescard.findOrFail(id)
    card.merge(data)
    await card.save()
    return card.serialize()
  }
  public static async getAllCard() {
    const services = await Servicescard.all()
    return services
  }
  static async deleteCard(id: number) {
    const card = await Servicescard.findOrFail(id)
    await card.delete()
  }
}
