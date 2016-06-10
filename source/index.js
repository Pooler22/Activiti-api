/*jshint esversion: 6 */
var request = require('request');

class ActivitiAPI {
    constructor(uri, username, password) {
        this.uri = uri;
        this.username = username;
        this.password = password;
    }

    getInfo() {
        return this.uri + ' ' + this.username + ' ' + this.password;
    }

    listProcessesDef(processName){
        request.get(`${ this.uri }/repository/process-definitions?nameLike=${ processName }`, {
                'auth': {
                    'user': this.username,
                    'pass': this.password,
                    'sendImmediately': false
                },
                multipart: [{
                    'content-type': 'application/json'
                }],
            },
            function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('failed:', err);
                }
                return console.log('successful, responded:', body);
            });
    }

    listProcessesDef1(){
        request.get(`${ this.uri }/repository/process-definitions`, {
                'auth': {
                    'user': this.username,
                    'pass': this.password,
                    'sendImmediately': false
                },
                multipart: [{
                    'content-type': 'application/json'
                }],
            },
            function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('failed:', err);
                }
                return console.log('successful, responded:', body);
            });
    }

    startProcessInstance(nameProcess, variables) {
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
                }],
            },
            function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('failed:', err);
                }
                return console.log('successful, responded:', body);
            });
    }


}

exports.ActivitiAPI = ActivitiAPI; // usage: activitiAPI = new ActivitiAPI(ActivitiData);
