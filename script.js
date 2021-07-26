// //Assignment#1

// var items = [
//     { name: 'juice', price: 50, quantity: 3 },
//     { name: 'cookie', price: 30, quantity: 9 },
//     { name: 'shirt', price: 880, quantity: 1 },
//     { name: 'pen', price: 100, quantity: 2 }];

// let juice = items[0].name + ' = ' + items[0].price*items[0].quantity;
// let cookie = items[1].name + ' = ' + items[1].price*items[1].quantity;
// let shirt = items[2].name + ' = ' + items[2].price*items[2].quantity;
// let pen = items[3].name + ' = ' + items[3].price*items[3].quantity;
// let total = 'Total price ='
// console.log(juice);
// console.log(cookie);
// console.log(shirt);
// console.log(pen);

// console.log(total,items[0].price*items[0].quantity + items[1].price*items[1].quantity + items[2].price*items[2].quantity + items[3].price*items[3].quantity);


// //Assignment#2

// let obj = {
//     name:'hamza',
//     email:'psyedhamza@gmail,com',
//     password:'*******',
//     age:18,
//     gender:'male',
//     city:'karachi',
//     country:'pakistan'
// }
// if(obj.hasOwnProperty("age") && obj.hasOwnProperty("city") ){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// if(obj.hasOwnProperty("name") && obj.hasOwnProperty("country") ){
//         console.log(true);
//     }else{
//         console.log(false);
//     }

// //Assignment#3

function Object(name , price , condition){
        this.name = name;
        this.price = price;
        this. condition = condition;
    }
    var Obj1 = new Object('???' , '???' , '???');
    var Obj2 = new Object('???' , '???' , '???');
    var Obj3 = new Object('???' , '???' , '???');
     
    console.log(Obj1);
    console.log(Obj2);
    console.log(Obj3);
    

// //Assignment#4

function information(){

    var population = document.getElementById('population').value;
    var address = document.getElementById('address').value;
    var educations = document.getElementById('educations').value;
    var professions = document.getElementById('professions').value;
    var gender = document.querySelectorAll('.gender')
    if(gender[0].checked){
        gender = 'male'
    }else if(gender[1].checked){
        gender = 'Female'
    }

    function AreaInfo(name, gender ,address , educations , professions){
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.educations = educations;
        this.professions = professions;
    }
    var record = new AreaInfo(population , gender , address , educations , professions);
    console.log(record)

    }
    document.getElementById('save').addEventListener('click' , function(){
        information()})