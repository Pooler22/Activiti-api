"use strict";
var request = require('request');

var ActivitiAPI = function(uri,username,password){
  this.uri = uri;
  this.username = username;
  this.password = password;
};

ActivitiAPI.prototype.getInfo = function(){
	return this.uri + ' ' + this.username + ' ' + this.password;
};

exports.ActivitiAPI = ActivitiAPI; // usage: activitiAPI = new ActivitiAPI(ActivitiData);
