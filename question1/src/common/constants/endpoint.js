const privatekey = process.env.REACT_APP_private_key;
const publickey = process.env.REACT_APP_public_key;
const endpoint = process.env.REACT_APP_endpoint || "https://gateway.marvel.com:443/v1/public/";
module.exports = { endpoint, privatekey, publickey };
