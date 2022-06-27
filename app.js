require('custom-env').env('dev', './config/');
const client = require('./redis-connect');

// console.log(process.env.REDISCACHEKEY);

const setGetFunc = async () => {
    await client.set('name', 'ahmed');
    const value = await client.get('name');
    console.log(value);
}

setTimeout(setGetFunc, 2000);