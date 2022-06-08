const express = require('express')
const app = express()
const PORT = 8000

const Batman = {

"lewis wilson": {
    "active": 1943,
"series": "15-part Columbia serial, Batman (1943)"

},

"robert lowery": {
    'active': 1949, 
"movies": "Batman & Robin (1949)"
},


"adam west":{
    'active': "1966-1968",
'series': "Batman (TV series)"
},


"michael keaton": {
    'active': "1989-1992",
'movies': "Batman (1989) (dir. Tim Burton) and Batman Returns"

},


"val kilmer": {
    'active': "1995",
'movies': "Batman Forever"},

"george clooney": {
    'active':"1997", 
'movies': "Batman & Robin"
},

"bruce thomas":{
    'active': "2002",
'series': "Birds of Prey (TV series)"
},

"christian bale": {
    'active': '2005-2010',
    "movies": "Batman Begins, The Dark Knight, The Dark Knight Rises"
},

"ben affleck": {
    'active': "2016-2019",
    'movies': "Batman Versus Superman: Dawn of Justice, Suicide Squad, Justice League (2017),Justice League Part 2"
},

"kevin conroy": {
    'active': "2019",
    'series': "Crisis on Infinite Earths - Part Two (Arrowverse)"
},


"robert pattinson": {
    'active': "2019-present", 
'movies': "The Batman (2021)"}

}

 app.get('/', (request,response)=>{
     response.sendFile(__dirname + '/index.html')
 })

 app.get('/api/:name', (request, response)=>{
     const BatmanName = request.params.name.toLowerCase()
     if(Batman[BatmanName]){
        response.json(Batman[BatmanName])    
     }else{
         response.json(Batman['unknown'])
     }
    response.json(Batman)

 })

 app.listen( process.env.PORT || PORT, ()=>{
     console.log('The server is running on port ${PORT} betta go catch it')
 })