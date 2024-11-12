fetch("https://jsonplaceholder.typicode.com/todos")


.then((result)=>{

    let data = result.json()
    return data
})   

.then(dataFinal=>{
    dataFinal.forEach(element => {
        
        document.getElementById("list-todo").innerHTML +=`
    <li>
        ${element.title}  ${element.id} 
    </li>    
        
    `
    });
    
})

  
    .catch((err) => {
        console.log(err,"==ini error");
        

    })