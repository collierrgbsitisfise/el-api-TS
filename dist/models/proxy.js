"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const proxySchema = new mongoose.Schema({
    time: {
        type: String,
        default: new Date(),
    },
    ip: {
        type: String,
        required: true,
    },
    port: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});
const Proxy = mongoose.model('proxy', proxySchema);
exports.default = Proxy;
//# sourceMappingURL=proxy.js.map