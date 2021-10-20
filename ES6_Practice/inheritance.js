
class Parents{

    constructor(){

        this.fatherName= 'swarez'
    }
}

class Child extends Parents{

    constructor(name){
        super()
        this.name= name
    }
}

const baby= new Child( 'arona')
const baby2= new Child ('anodol')
console.log(baby,baby2);