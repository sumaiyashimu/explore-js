
const normalPerson= {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function (){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount){

        this.salary= this.salary- amount;
        return this.salary

    }

}

// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);

const heroPerson={
    firstName: 'hero',
    lastName: 'balam',
    salary:25000
}


// const heroBillCharge= normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(heroPerson,9000);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[900]);

console.log(heroPerson.salary);