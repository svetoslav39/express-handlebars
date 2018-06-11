const mongoose = require('mongoose');

module.exports = (settings)=>{
    mongoose.connect(settings.db,
    (err) => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log('MongoDB up and runing...');
        }
    });
}