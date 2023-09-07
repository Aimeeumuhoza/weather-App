const request = require('request');

const forecast =(longitude,latitude,callback)=>{
   const url =`http://api.weatherstack.com/current?access_key=79d93ef1d12aa43ba23ab5f05b60c62f&query=${latitude},${longitude}`

      request({url,json:true},(error,{body})=>{
      if(error){
        callback('unable to conect weather service',undefined)
     
      }else if(body.error){
         callback('unable to find location.',undefined)
      }else{
         
        callback(undefined, `It is currently ${body.current.temperature}°C. There is ${body.current.precip} mm of precipitation.`);
      }
    
      })

}

module.exports =forecast;
