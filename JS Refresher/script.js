  /*

        //"use strict"; //use strict mode is used to restrict undefined things
        //d=47;       //undefined 


        //variable Decleration 
        //let give an error when both variable names are same
        let a=35;
        let b="This is JavaScript";

         
        //Loose Equality (==) and Strict Equality(===)
        let n=100;
        let m=100;
        let q='100';
        console.log(n==m);     //true[same datatype]
        console.log(n===m);    //true[same datatype]
        console.log(n==q);     //true[diff datatype]
        console.log(n===q);    //false[diff datatype]
        console.log(0==[]);    //true[diff]
        

        //By using var it does not give error when both var names are same
        //var a=45;
        //var a="Rohan";
        //console.log(a);
        //console.log(a);

        //By using const we can't able to change the variable value
        //const c=59;
        //c=78;
        //console.log(c);
 

        //Functions
        function hello(){
            console.log("Hello Keshav!");
        }

        function addition(var1,var2){
            let var3=var1+var2;
            console.log("addition:"+var3);
        }

        //Objects
        let objs={
            r:12,
            m:13,
            q:14,
            func:function myFunction(num){
                console.log("This is my Num:"+num);
            }
        }

        //Events in Js
        document.addEventListener("click",function click(){
            console.log("clicked");
            alert("!Ram Bhakt Is Here!");
            let conf=confirm("!Jai Shree Ram!");
            console.log(conf);
        })

        //Arrays in Js
        let num=[10,20,30,40,50];
        console.log(num);

        let mix=[10,"Rahul","Shyam",20,30,true,false];
        mix.reverse();
        console.log(mix);

        //window object
        console.log(this);

        let fun=(number)=>{
            console.log("Fun function:"+this);
        }
        fun();
        

        let mobj={
            a:this,
             foo:(n)=>{
                console.log(this);
            }
        }
        mobj.foo(41);

        

        //call back function--> is function which is invoke when one task is completed
        setTimeout(() => {
            console.log("After 4 mili second");
        }, 4000);
        console.log("SetTimeout call back function:");


        //Check property exist in object or not
        const employee={
            id:101,
            name:"Rahul",
            salary:5000
        };
        const isIdExist='id' in employee;
        const isSalaryExist='salary' in employee;
        const isAddressExist='address' in employee;
        console.log(isIdExist);           //true
        console.log(isSalaryExist);       //true
        console.log(isAddressExist);      //false

        //Conditionally add property in object
        let includeAddress=true;
        if(includeAddress){
            employee.address="Pune";
        }
        console.log(employee);           //[id:101,name:"Rahul",salary:5000,address:"Pune"]

        let includFees=true;
        const student={
            id:102,
            name:"Jayesh",
            contact:7987948810,
            ...(includFees && {fees:10000})
        };
        console.log(student);

        */


        /*
        
        1].To write document over HTML 
        console.log("Ways to Print JavaScript");      //Write over console
        document.write("This is my Document!");       //Write over HTML

        2].Methods of Window object 
        alert("ALERT FOR YOU!");                   //Show Alert msg with ok btn
        confirm("CONFIRM MESSAGE FOR YOU!");       //show Confirm msg with ok and cancel btn
        prompt("Prompt");                          //show Prompt with user input
        open();                                    //open new Window
        close();                                   //close current Window
                                    
        setTimeout(() => {
            console.log("YOUR TIME IS OUT!");
        }, 3000);


        3].with the help of console we write debugging messages and JavaScript Console API
        console.log("Hello!");
        console.error("Error");
        console.warn("Warning");
        console.assert(4==6);
        console.clear();

        4].Datatypes in JS
        Primitive:
        Number->45,78,10.25,145.54
        String->"Hello Keshav"
        BigInt->123456789987456123
        Boolean->true,false
        undefined-> let a; identifier is define without initilization
        null->non existance
        symbol->store unique value

        Non-Primitive:
        Object-> const obj_name={key1:value1,key2:value2}
        Array-> let array_name=[12,13,45,78]

         //String DataType
        let str="Hello Keshav";
        console.log(str.charAt(6));
        console.log(str.endsWith('v'));
        console.log(str.includes('llo'));
        console.log(str.includes('ov'));
        console.log(str.length); 
        console.log(str.slice(2,5));     op->llo

        //Object Datatypes
        const marks={
            Ravi:45,
            Rahul:56,
            Shyam:78
        }
        console.log(marks);
        console.log(marks.Rahul);

        //Array Datatype
        let arr=["Rahul","Shyam","Ganesh","Rohan",45,102,true,false];
        console.log(arr);

        //Undefined datatype
        let und;
        console.log(und);

        //null datatype
        let nu=null;
        console.log(nu);

        //Boolean Datatypes
        let bool1=true;
        let bool2=false;
        console.log(bool1);
        console.log(bool2);

        

        5].Variables -->Container which is used to store data values,var can't throw error when ambiguity is arise but let throw an error when ambiguity is arise
        var a=45;
        var b=98;
        var a=78;
        console.log(a);
        console.log(b);

        let a=102;
        console.log(a);

        

        //Operators

        //1].Arthmatic operatore->+,-,*,/
        let n=12;
        let m=10;
        console.log(n+m);
        console.log(n-m);
        console.log(n*m);


        //2].Assignment operatore->=,<=,>=.+=,-=,/=,*=
        console.log(n>=m);
        console.log(n<=m);
        n+=20;
        console.log(n);


        //3]Logical AND &&
        console.log(true && true);
        console.log(true && false);
        console.log(false && true);
        console.log(false && false);


        //4]Logical OR ||
        console.log(true || true);
        console.log(true || false);
        console.log(false || true);
        console.log(false || false);

      
        //5]Bitwise AND &
        console.log(true & true);
        console.log(true & false);
        console.log(false & true);
        console.log(false & false);
    

        //6]Bitwise Inclusive OR |
        console.log(true | true);
        console.log(true | false);
        console.log(false| true );
        console.log(false | false);
        

        //7]Bitwise Exclusive OR ^
        console.log(true ^ true);
        console.log(true ^ false);
        console.log(false ^ true);
        console.log(false ^ false);

        
        //Function
        function avg(a,b){
            c=(a+b)/2;
            return c;
        }
        ans=avg(10,20);
        console.log(ans);

        function even_odd(num){
            if(num%2===0){
                console.log("Even Number");
            }
            else{
                console.log("odd Number");
            }
        }

        result=even_odd(10);
        console.log(result);
        

        function fact(num){
            let f=1;
            for(let i=1;i<=num;i++){
                f=f*i;
            }
            return f;
        }
        result=fact(5);
        console.log(result);

        

        //Object
        // 1].Using literal
        var emp={
            id:101,
            name:"Rahul",
            salary:5000
        }
        document.write(emp.id+" "+emp.name+" "+emp.salary);


        //2]using Object instance
        var obj=new Object();
        obj.id=102;
        obj.name="Rohan";
        obj.salary=5000;
        document.write(obj.id+" "+obj.name+" "+obj.salary);
        */





    
