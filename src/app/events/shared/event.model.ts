export interface IEvent{
    id:number
    name:string
    date:Date
    time:string
    price:number
    imageUrl:string
    location?:{
        address:string
        city:string
        country:string
            },
            onlineUrl?:string,
            sessions:ISession[]
            }

    export interface ISession{
        id:number
        name:string
        presenter:string
        abstract:string
        duration:number
        level:string
        voters:string[]
    }