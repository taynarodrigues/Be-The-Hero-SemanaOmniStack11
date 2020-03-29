const crypto = require('crypto');
 
//errei rsss export default não existe no NODE :(
module.exports = function generateUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}

