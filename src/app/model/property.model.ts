export class Property {
    public name: string;
    public address: string;
    public description: string;
    public imageURL: string;
    public location: string;
    public pricePerNight: string;

    public providerId: number;
    public id: number;






    constructor() {
        this.name = "";
        this.address = "";
        this.description = "";
        this.imageURL = "";
        this.location = "";
        this.pricePerNight = "";
        this.providerId = -1;
        this.id = -1;
    
    }

}
