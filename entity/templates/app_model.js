/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * <%= entityName %> Schema
 */
var <%= entityName %>Schema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
<%= entityName %>Schema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

/**
 * Statics
 */
<%= entityName %>Schema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('<%= entityName %>', <%= entityName %>Schema);
