"use strict";
var request = require('request');

var ActivitiAPI = (function () {
    function ActivitiAPI(uri) {
        this.uri = uri;
    }
    ActivitiAPI.prototype.init = function () {
        return this.uri;
    };
    return ActivitiAPI;
}());

exports = ActivitiAPI;
exports.ActivitiAPI = ActivitiAPI;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ActivitiAPI;
