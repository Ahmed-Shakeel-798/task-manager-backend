const { createClient } = require('redis');

var cacheHostName = process.env.REDISCACHEHOSTNAME;
var cachePassword = process.env.REDISCACHEKEY;

const client = createClient({
    // rediss for TLS
    url: "rediss://" + cacheHostName + ":6380",
    password: cachePassword,
});

client.on('error', (err) => console.log('Redis Client Error', err));

const connectRedis = async () => {
    client.connect()
    .then(() => {
        console.log("Connected sucessfully!!!");
    })
    .catch((e)=> {
        console.log(e.message);
    });        
}

connectRedis();
module.exports =  client;