/* node */

var ActivitiAPI = require('./distribution/index').ActivitiAPI;

var activitiAPI = new ActivitiAPI("http://212.191.78.182:8081/activiti-rest/service","kermit","kermit");

activitiAPI.listProcessesDef1();

console.log(activitiAPI.getInfo());
