
// a.	Get all the countries from Asia continent /region using Filter function

// var xhr= new XMLHttpRequest()
// xhr.open("GET","https://restcountries.com/v3.1/all",true)
// xhr.onload=function()
// {
//     var _input=JSON.parse(xhr.responseText)
//     _input.filter((countries)=>{
//         return countries.region=="Asia"
//       })
//        console.log(_input);  
// }
// xhr.send()

// b.	Get all the countries with a population of less than 2 lakhs using Filter function

var xhr= new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v3.1/all",true)
xhr.onload=function()
{
    var _input=JSON.parse(xhr.responseText)
   var population= _input.filter((countries)=>{
    return (countries.population)<200000
      })
     console.log(population)
 }
        
 xhr.send()

// c.	Print the following details .name, capital, flag, using forEach function.

// var xhr= new XMLHttpRequest()
// xhr.open("GET","https://restcountries.com/v3.1/all",true)
// xhr.onload=function()
// {
//     var _input=JSON.parse(xhr.responseText)
//     _input.forEach(countries=>
//         {
//             console.log(countries.name)
//             console.log(countries.capital)
//             console.log(countries.flag)
//         })
//     }
//     xhr.send()

// d.	Print the total population of countries using reduce function

//     var xhr= new XMLHttpRequest()
// xhr.open("GET","https://restcountries.com/v3.1/all",true)
// xhr.onload=function()
// {
//     var _input=JSON.parse(xhr.responseText)
//     var total_population=_input.reduce((acc,add)=>{
//         return acc+add.population
//     },0)
//     console.log(total_population)

        
//     }
//     xhr.send()
  

// e.	Print the country that uses US dollars as currency

// var xhr= new XMLHttpRequest()
// xhr.open("GET","https://restcountries.com/v3.1/all",true)
// xhr.onload=function()
// {
//     var res=JSON.parse(xhr.responseText)

//     for(i=0;i<res.length;i++)
//     {
//        var _output= res[i].currencies.USD
//        console.log(_output)
//     }
//        }
//     xhr.send()
  
  




