const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required : [true, "Store name is required"],
            minlength : [3, "Name must contain 3 characters!"]
        },
        number:{
            type : Number,
            required : [true, "Store number is required"],
            unique : [true, "Store number already exists"],
            min : [1, "Must be unique number greater than 0"]
        },
        qualif:{
            type: Boolean,
            default: false
        }
    },{ timestamps : true});

const Store = mongoose.model("Store",StoreSchema);

module.exports = {Store};