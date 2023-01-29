console.log("h");

interface Student {
  id: number;
  name: string;
  level: string;
  isSenior: boolean;
}

let a = 10;
 

let school = [
    {
        id:0,
        name:"Ahmed",
        level:"first",
        isSenior:true
    },
    {
        id:1,
        name:"Salem",
        level:"first",
        isSenior:true
    },
    {
        id:2,
        name:"Ali",
        level:"first",
        isSenior:true
    }
]

function printStudents(arr:any){

   for(let i = 0; i <= 3; i++){
    let result = arr[i]
    console.log(result)
   }
}

printStudents(school)


interface Teacher {
    id: number;
    name: string;
    level: string;
    courseNum: number;
  }



export {};
