






//All countries flags
let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response)
    console.log(data)
    console.log(xhr.status)
    for(let i=0;i<data.length;i++){
        console.log( "flags :",data[i].flags.png,)
    }
}


//Name,region,sub-region,populATION

xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response)
    console.log(data)
    console.log(xhr.status)
    for(let i=0;i<data.length;i++){
        console.log(`
        Name:${data[i].name.common}
        Regions:${data[i].region}
        Sub-region:${data[i].subregion}
        Popultion:${data[i].population}
        `)
    }  
}


