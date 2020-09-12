let fetchbtn = document.getElementById("fetchbtn")

fetchbtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log("You have clicked the fetch btn");
    //Intentiate an xhr obj.
    const xhr = new XMLHttpRequest();
    //open the obj.

  // xhr.open('GET','ajax.txt',true);
  //POST req. we also send data with req.
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true)
    xhr.getResponseHeader('Content-type','application/json');

    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)

    //you can use this method or not...
    //for spinner also
    xhr.onprogress = function(){
        console.log("ON PROGRESS")
    }
    //before we used to onready state 
    xhr.onreadystatechange=function(){
        console.log("ready state is",xhr.readyState);
    
}
    // what to do when response is ready
    //request has completed
    xhr.onload=function(){
        console.log(this.responseText);
        if(this.status==200){
            console.log(this.responseText);
        }
        else{
            console.error("some error occured");
        }
    }
    //for Post req.
    param = `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(param);
    
    //send the request
    xhr.send();
    //we have not sent the request yet.
    //we will send by xhr.send();  
    
    console.log("we are done");
    
}
let popHandler = document.getElementById('popbtn');
popbtn.addEventListener('click',popHandler);

function popHandler(){
    console.log("You have clicked the pop handler");
    //Intentiate an xhr obj.
    const xhr = new XMLHttpRequest();
    //open the obj.

  
     xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true)

    
    

    // what to do when response is ready
    //request has completed
    xhr.onload=function(){
        console.log(this.responseText);
        if(this.status==200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            str ="";
            let list = document.getElementById('list');
            for (key in obj){
                str += `<li>${obj[key].employee_name}<li>`;
            }
            list.innerHTML=str;
        }
        else{
            console.error("some error occured");
        }
    }
    
    //send the request
    xhr.send();
    //we have not sent the request yet.
    //we will send by xhr.send();  
    
    console.log("fetching employee");
    
}
