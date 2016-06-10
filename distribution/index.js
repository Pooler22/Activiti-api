'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*jshint esversion: 6 */
var request = require('request');

var ActivitiAPI = function () {
    function ActivitiAPI(uri, username, password) {
        _classCallCheck(this, ActivitiAPI);

        this.uri = uri;
        this.username = username;
        this.password = password;
    }

    _createClass(ActivitiAPI, [{
        key: 'getInfo',
        value: function getInfo() {
            return this.uri + ' ' + this.username + ' ' + this.password;
        }
    }, {
        key: 'listProcessesDef',
        value: function listProcessesDef(processName) {
            request.get(this.uri + '/repository/process-definitions?nameLike=' + processName, {
                'auth': {
                    'user': this.username,
                    'pass': this.password,
                    'sendImmediately': false
                },
                multipart: [{
                    'content-type': 'application/json'
                }]
            }, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('failed:', err);
                }
                return console.log('successful, responded:', body);
            });
        }
    }, {
        key: 'listProcessesDef1',
        value: function listProcessesDef1() {
            request.get(this.uri + '/repository/process-definitions', {
                'auth': {
                    'user': this.username,
                    'pass': this.password,
                    'sendImmediately': false
                }
            }, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('failed:', err);
                }
                return console.log('successful, responded:', body);
            });
        }
    }, {
        key: 'startProcessInstance',
        value: function startProcessInstance(nameProcess, variables) {
            //example: startProcessInstance("oneTaskProcess:1:158",
            //          [{"name": "myVar","value": "This is a variable"}]);
            var startProcessURI = '/runtime/process-instances';
            request.post(this.uri + startProcessURI, {
                'auth': {
                    'user': this.username,
                    'pass': this.password,
                    'sendImmediately': false
                },
                multipart: [{
                    'content-type': 'application/json',
                    body: JSON.stringify({
                        "processDefinitionId": nameProcess,
                        //"businessKey": "myBusinessKey",
                        "variables": variables
                    })
                }]
            }, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('failed:', err);
                }
                return console.log('successful, responded:', body);
            });
        }
    }]);

    return ActivitiAPI;
}();

exports.ActivitiAPI = ActivitiAPI; // usage: activitiAPI = new ActivitiAPI(ActivitiData);