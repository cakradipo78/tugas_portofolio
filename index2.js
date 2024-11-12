fetch("https://jsonplaceholder.typicode.com/todos")
.then((result)=>{

    let data = result.json()
    return data
})   

.then(dataFinal=>{
    
        const filteredData = dataFinal.filter(element => element.id <= 10)
        filteredData.forEach(element => {

        document.getElementById("list-todo").innerHTML +=`
    <li>
        ${element.title}
    </li>    
        
    `
    });
    
})

  
    .catch((err) => {
        console.log(err,"==ini error");
        

    })