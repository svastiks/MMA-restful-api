const mongoose = require('mongoose');

const fightersSchema = mongoose.schema(
    {
        name: {
            type: String,
            required: [true, "Enter"]
        },
        wins: {
            type: Number,
            required: [true, "Enter"],
            default: 0
        },
        losses: {
            type: Number,
            required: [true, "Enter"],
            default: 0
        },
        fighterImage: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Fighter = mongoose.model('Fighter', fightersSchema);

module.exports = Fighter;