class Employee{

    empCode:number;

    empname:string;

    constructor(empcode:number,name:string)

    {

        this.empCode=empcode;

        this.empname=name;

    }
}

let emp=new Employee(101,"Jaynam");
console.log(emp);