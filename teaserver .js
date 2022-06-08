const express = require('express')
const app = express()
const PORT = 8000

const tea = {
    "oolong": {
        'type': 'black',
        'origin': 'Yo mommas House',
        'waterTemp': 200,
        'steepTime': 180,
        'caffinated': true,
        'flavor': 'delicious'

    },

    "matcha": {
        'type': 'green',
        'origin': 'Yo mommas House',
        'waterTemp': 200,
        'steepTime': 180,
        'caffinated': true,
        'flavor': 'delicious'

    },



    "unknown": {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 200,
        'steepTime': "unknown",
        'caffinated': false,
        'flavor': 'unknown'

    }
}

 app.get('/', (request,response)=>{
     response.sendFile(__dirname + '/index.html')
 })

 app.get('/api/:name', (request, response)=>{
     const teaName = request.params.name.toLowerCase()
     if(tea[teaName]){
        response.json(tea[teaName])    
     }else{
         response.json(tea['unknown'])
     }
    response.json(tea)

 })

 app.listen( process.env.PORT || PORT, ()=>{
     console.log('The server is running on port ${PORT} betta go catch it')
 })