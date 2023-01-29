interface Car {
    make	:string
    model:	string
    year	:number
  }
  
  let car1: Car = {
    make: 'Jaban',
    model: 'Camery',
    year: 2010,
  };

  let car2: Car = {
    make: 'Jaban',
    model: 'Avalon',
    year: 2017,
  };
  let car3: Car = {
    make: 'Germany',
    model: 'BMW',
    year: 2020,
  };
  
  
   function honk(c1, c2, c3){

    console.log(c1)
    console.log(c2)
    console.log(c3)

    console.log(`${c1.model} ${c1.year}`)
    console.log(`${c2.model} ${c2.year}`)
    console.log(`${c3.model} ${c3.year}`)


   }
   

 honk(car1 ,car2,car3)

 