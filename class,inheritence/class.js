class TeamManager {
    name;
    designation = "Support web dev";
    constructor(name,address="BD"){
        this.name = name;
        this.address = address;
    }
}
class Support extends TeamManager{
supportTime; 
constructor(name,address,time){
    super(name,address,time)
    this.supportTime = time
}
    startSession(){
        console.log(this.name, "started a support session");
    }
}

const aamir = new Support("aamir khan","new-zealand",5)
aamir.startSession()
const salman = new Support("salman khan","BD",7)
console.log(aamir,salman);
