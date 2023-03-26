const mongoose = require('mongoose');




const TeamSchema = mongoose.Schema (
    {
        name: { type: String, 
            required: [true, "Name is required"],
            minLength: [2, 'At least 2 characters required'],
        },
        position: { type: String, 
            required: [true, "position is required"],
            minLength: [2, 'At least 2 characters required'],
        },
        game: { type: String,
            require: [true, 'trying to retreve and empty string']
        }
    }, {timestamps: true});

module.exports.Team = mongoose.model('Team', TeamSchema);

