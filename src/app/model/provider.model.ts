export class Provider {
    public firstname: string;
    public lastname: string;
    public livesin: string;
    public joinedin: string;
    public rental1: string;
    public rentalphoto1: string;

    public name: string;
    public id: number;
    public email: string;
    public profilephoto: string;
    private age: number;
    public password: string;
    public today: string;
    public facebook: string;
    public phonenumber: string;
    


    constructor() {
        this.firstname="";
        this.lastname="";
        this.livesin="";
        this.joinedin="";
        this.rental1="";
        this.rentalphoto1="";
        this.name="";
        this.id= -1;
        this.email="";
        this.password="";
        this.profilephoto="";
        this.facebook="";
        this.profilephoto="";
        this.today="";

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
