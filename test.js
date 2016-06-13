/* node */

var ActivitiAPI = require('./distribution/index').ActivitiAPI;

var uri = 'http://212.191.78.182:8081/activiti-rest/service';

var activitiAPI = new ActivitiAPI(uri, 'kermit', 'kermit');

// activitiAPI.getProcessDefinitions('process:3:1562').on('data', function(data) {
//     console.log(JSON.parse(data));
// });

var body = {
   "processDefinitionId":"Obslug_automatyczne:1:11485",
};

 activitiAPI.postProcessInstance(body).on('data', function(data) {
     console.log(JSON.parse(data));
 });
