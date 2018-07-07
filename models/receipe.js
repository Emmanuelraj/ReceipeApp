const mongoose = require('mongoose');
//Schema
var Schema  = mongoose.Schema;


var mongooseSchema  = new Schema
                    ({
                       title:{
                           type:String,
                           required:true
                       },

                       ingredients:
                            {
                              type:String,
                              required:true
                            },
                        directions:{
                            type:String,
                            required:true
                        }
                       });



module.exports = mongoose.model('receipes',mongooseSchema)
