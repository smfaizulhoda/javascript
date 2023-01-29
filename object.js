// let obj={}; empty object
// console.lo/g(obj)

let person={
    name:"faizul",
    age:18,
    gender:"Male"

}
console.log(person)
console.log(`hay ${person.name} whats up!`)
console.log(person.age);
     let about_faizul={
        firstn:"SM",
        lastn:"Hoda",
        frnd:["saba","sohail","shailesh","kamran"],
        Adress:{
            State:"bihar",
            dist:"vaishali",
            pincode:844113
        },
        sayhii: function (){
            console.log(`hello ${this.firstn}`);
        }
     };
     console.log(about_faizul);
     console.log(about_faizul.frnd);
     console.log(about_faizul.frnd[1]);
     console.log(about_faizul.sayhii());
    //   // for loop of key print in object
    for(let key in about_faizul){
        // key 
        console.log(key);
        // value
        console.log(about_faizul[key]);
    }
    //   // for a particularlar key value;
    for(let frnd in about_faizul){
        // key 
        console.log(frnd);
        // value
        console.log(about_faizul[frnd]);
    }