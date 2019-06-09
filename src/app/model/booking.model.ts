export class Booking {
    public name: string;
    public dateFrom: string;
    public dateTo: string;
    public status: string;
   
    public userId: number;
    public providerId: number;
    public id: number;






    constructor() {
        this.name = "";
        this.dateFrom = "";
        this.dateTo = "";
        this.status = "";
        
        this.userId = -1;
        this.providerId = -1;
        this.id = -1;
    
    }

}