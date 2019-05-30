export class User {
    public firstname: string;
    public lastname: string;
    public livesin: string;
    public joinedin: string;
    public rental1: string;
    public rentalphoto1: string;
    
    private age: number;

    constructor() {
        this.firstname="";
        this.lastname="";
        this.livesin="";
        this.joinedin="";
        this.rental1="";
        this.rentalphoto1="";

    }

    public setFirstname(firstname: string) {
        this.firstname= firstname;
    }
    public getLivesIn(){
        return this.livesin
    }
    public getJoinedIn(){
        return this.joinedin
    }
    public getRental1(){
        return this.rental1
    }
    public getRentalPhoto1(){
        return this.rentalphoto1
    }


    public setDateofBirth(dob: Date) {
        // Calculate the age
        this.age=55
    }
    public getAge() {
        return this.age;
    }
    // public setFullname(name:string) {

    // }
}
