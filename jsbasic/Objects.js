//object literal
emp={id:102,name:"Shyam Kumar",salary:40000}  
console.log(emp.id+" "+emp.name+" "+emp.salary); 
//object instance
var emp1=new Object();  
emp1.id=101;  
emp1.name="Ravi Malik";  
emp1.salary=50000;  
console.log(emp1.id+" "+emp1.name+" "+emp1.salary);  
//object constructor
function emps(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
    }  
    var e=new emps(103,"Vimal Jaiswal",30000);  
      
    console.log(e.id+" "+e.name+" "+e.salary); 
    
    function emp2(id,name,salary){  
        this.id=id;  
        this.name=name;  
        this.salary=salary;  
          
        this.changeSalary=changeSalary;  
        function changeSalary(otherSalary){  
        this.salary=otherSalary;  
        }  
        }  
        var e=new emp2(103,"Sonoo Jaiswal",30000);  
        console.log(e.id+" "+e.name+" "+e.salary);  
        e.changeSalary(45000);  
        console.log(e.id+" "+e.name+" "+e.salary);  