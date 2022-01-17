

interface companyDetails {
    name: string,
    registrationNumber: Number,
    foundingDate: Date
    getCompanyName(): string,
    getFoundingDate(): Date
}

interface departmentDetails{
 name:string,
 code:Number,
 getDepartmentName():string
}

interface employeeDetails{
    name:string,
    designation:string,
    joiningDate:Date,
    code:number
}


class Company implements companyDetails {
    name: string;
    registrationNumber: Number;
    foundingDate: Date
    constructor(public companyName: string, private companyRegistrationNumber: Number, public companyFoundingDate: Date) {
        this.name = companyName;
        this.registrationNumber = companyRegistrationNumber;
        this.foundingDate = companyFoundingDate;
    }
    getCompanyName(): string {
        console.log("Name:", this.name);
        return this.name;
    }
    getFoundingDate(): Date {
        console.log("Date:-", this.foundingDate);
        return this.foundingDate;
    }
}
class Department extends Company implements departmentDetails{
    code:number;
    constructor(Name: string,Code:number,foundingDate:Date) {
        super(Name,Code,foundingDate);
        this.name = Name;
        this.code = Code;
    }
    getDepartmentName(): string {
        console.log("departmentName",this.name);
        return this.name;
        
    }
}

class Emloyee extends Department implements employeeDetails{
    designation:string;
    joiningDate:Date;


    constructor(Name,Code,Designation:string,Date:Date){
        super(Name,Code,Date);
        this.name = Name;
        this.code = Code;
        this.designation =Designation;
        this.joiningDate = Date;
    }

    getEmployeeDetals():employeeDetails{
        let obj = {
            name:this.name,
            code:this.code,
            designation:this.designation,
            joiningDate:this.joiningDate
        }
        console.log("Employee Details",obj);
        
        return obj;
    }
}