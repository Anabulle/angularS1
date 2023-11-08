export class Pastrie {
   id: string;
   ref: string;
   name: string;
   description: string;
   quantity: number;
   order: number;
   url?: string;
   tags?: string[];
   like?: string;
   constructor(id: string, ref: string,name: string,description: string,quantity: number,order: number,url?: string,tags?: string[],like?: string){
    this.id = id;
    this.ref = ref;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.order = order;
    this.url = url;
    this.tags = tags;
    this.like = like;
   }

}
export class List{
    id: string;
    list: string[];
    constructor(id:string,list: string[]){
        this.id = id;
        this.list = list;
    }
}