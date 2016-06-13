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

    //Process Instances

    //Get a process instance
    getProcessInstances(processDefinitionId = '') {
        return request.get(`${this.uri}/runtime/process-instances/${processDefinitionId}`)
            .auth(this.username, this.password, false);
    }

    //Delete a process instance
    deleteProcessInstances(processDefinitionId) {
        return request.delete(`${this.uri}/runtime/process-instances/${processDefinitionId}`)
            .auth(this.username, this.password, false);
    }

    //Activate or suspend a process instance
    putProcessInstances(processDefinitionId, actionStatus) { //suspend or activate
        return request({
            method: 'PUT',
            uri: `${this.uri}/runtime/process-instances/${processDefinitionId}`,
            multipart: [{
                'content-type': 'application/json',
                body: JSON.stringify({
                    action: actionStatus,
                })
            }]
        }).auth(this.username, this.password, false);
    }

    //Start a process instance
    postProcessInstance(bodyRequest) {
        return request.post(`${this.uri}/runtime/process-instances/`, {
            multipart: [{
                'content-type': 'application/json',
                body: JSON.stringify(bodyRequest)
            }],
        }).auth(this.username, this.password, false);
    }
}

exports.ActivitiAPI = ActivitiAPI; // usage: activitiAPI = new ActivitiAPI(ActivitiData);
