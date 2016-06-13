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

        //Process Instances

        //Get a process instance

    }, {
        key: 'getProcessInstances',
        value: function getProcessInstances() {
            var processDefinitionId = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

            return request.get(this.uri + '/runtime/process-instances/' + processDefinitionId).auth(this.username, this.password, false);
        }

        //Delete a process instance

    }, {
        key: 'deleteProcessInstances',
        value: function deleteProcessInstances(processDefinitionId) {
            return request.delete(this.uri + '/runtime/process-instances/' + processDefinitionId).auth(this.username, this.password, false);
        }

        //Activate or suspend a process instance

    }, {
        key: 'putProcessInstances',
        value: function putProcessInstances(processDefinitionId, actionStatus) {
            //suspend or activate
            return request({
                method: 'PUT',
                uri: this.uri + '/runtime/process-instances/' + processDefinitionId,
                multipart: [{
                    'content-type': 'application/json',
                    body: JSON.stringify({
                        action: actionStatus
                    })
                }]
            }).auth(this.username, this.password, false);
        }

        //Start a process instance

    }, {
        key: 'postProcessInstance',
        value: function postProcessInstance(bodyRequest) {
            return request.post(this.uri + '/runtime/process-instances/', {
                multipart: [{
                    'content-type': 'application/json',
                    body: JSON.stringify(bodyRequest)
                }]
            }).auth(this.username, this.password, false);
        }
    }]);

    return ActivitiAPI;
}();

exports.ActivitiAPI = ActivitiAPI; // usage: activitiAPI = new ActivitiAPI(ActivitiData);