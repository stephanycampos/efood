class RestaurantClass {
    id: number
    image: string
    title: string
    nota: number
    description: string
    infos: string
    about: string
    star?: string

    constructor(
        id: number,
        image: string,
        title: string,
        nota: number,
        description: string,
        infos: string,
        about: string,
        star?: string
    ) {
        this.id = id
        this.image = image
        this.title = title
        this.nota = nota
        this.description = description
        this.infos = infos
        this.star = star
        this.about = about
    }
}

export default RestaurantClass