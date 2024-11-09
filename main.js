const request = require("request")
const forecast = require ("./datafile/forecast")
const geocode = require("./datafile/geocode")


 const country = process.argv[2]


geocode( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : "  , data)

    forecast( data.latitude , data.longtitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
     } )
 })
