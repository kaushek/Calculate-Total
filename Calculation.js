const { json } = require("express");
const express = require("express");
let app = new express();
var cartData = [];
var price = 0;

app.post("/", function(req, res) { 
  res.send(price.toString()); 
}); 

app.get("/", function(req, res) { 
  res.send(price.toString()); 
}); 

let port = 8080;
app.listen(port, function() {
    var request = require('request');

    request.post({
      url: 'https://kaushekkr-eval-prod.apigee.net/shopping-cart-app?apikey=J4CTGobjgB47Io6k6lqSAPZUJmU0SGsl',
      json: true,     
    },
    function(error, response, data){     
      console.log(response.statusCode); 
      if (response.statusCode == 200){
      for(var items in data.items){
        var key = Object.keys(data.items[items]);
        var value = Object.values(data.items[items]);
        if (value[0] == "ToothBrush" || value[0]== "soap"){
          price = parseFloat(value[1]) + price;
         // cartArray.push(data.items[items]);
        }
      }

      var clientServerOptions = {
        uri: 'http://34.121.200.57/',       
        body: JSON.stringify(price),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
     }
     request(clientServerOptions, function (error, response) {
        console.log(response.statusCode);
        return;
     });

      }
    }
  )
    


});

