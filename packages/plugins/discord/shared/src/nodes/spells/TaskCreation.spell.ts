const TaskCreation = {"id":"8848225d-0dc6-416a-8ad6-43c96e5eafd7","name":"TaskCreation","projectId":"bb1b3d24-84e0-424e-b4f1-57603f307a89","hash":"ace69cd96d008a42a3bad24536e85e28","createdAt":"1682567017740","updatedAt":"1682578271921","graph":{"id":"demo@0.1.0","nodes":{"232":{"id":232,"data":{"name":"Input - Discord (Text)","text":{"id":"2eb64348-adee-4118-bcca-19697ca3a16a","inputs":{"Input - Default":{"type":"playtest","client":"playtest","sender":"playtestSender","agentId":"preview","channel":"playtest","content":"testing","entities":["playtestSender","Agent"],"observer":"Agent","projectId":"bb1b3d24-84e0-424e-b4f1-57603f307a89","channelType":"playtest"}},"secrets":{},"projectId":"bb1b3d24-84e0-424e-b4f1-57603f307a89","spellName":"Starter","publicVariables":"[]"},"isInput":true,"outputs":[],"success":false,"socketKey":"9d61118c-3c5a-4379-9dae-41965e56207f","useDefault":false,"dataControls":{"inputType":{"expanded":true},"inputName":{"expanded":true},"useTrigger":{"expanded":true},"useData":{"expanded":true}},"defaultValue":"Hello world","playtestToggle":{"outputs":[],"receivePlaytest":false},"inputType":"Discord (Text)","useTrigger":true,"useData":true,"inputName":"Default"},"inputs":{},"outputs":{"output":{"connections":[{"node":494,"input":"event","data":{"hello":"hello"}}]},"trigger":{"connections":[{"node":494,"input":"trigger","data":{"hello":"hello"}}]}},"position":[-1104,-48],"name":"Input"},"233":{"id":233,"data":{"name":"Output","success":false,"socketKey":"0f17a35e-1380-428b-bc87-4a38d207fefc","dataControls":{"name":{"expanded":true}},"isOutput":true,"sendToPlaytest":true},"inputs":{"trigger":{"connections":[{"node":493,"output":"trigger","data":{"hello":"hello"}}]},"input":{"connections":[{"node":493,"output":"output","data":{"hello":"hello"}}]},"event":{"connections":[]}},"outputs":{"trigger":{"connections":[]},"output":{"connections":[]}},"position":[1104,48],"name":"Output"},"493":{"id":493,"data":{"success":false},"inputs":{"trigger":{"connections":[{"node":840,"output":"trigger","data":{"hello":"hello"}}]},"string":{"connections":[{"node":840,"output":"result","data":{"hello":"hello"}}]}},"outputs":{"trigger":{"connections":[{"node":233,"input":"trigger","data":{"hello":"hello"}}]},"output":{"connections":[{"node":233,"input":"input","data":{"hello":"hello"}}]}},"position":[640,112],"name":"Echo"},"494":{"id":494,"data":{"success":false,"socketKey":"bbd9c07c-7bcc-454a-b5fe-cc6fd63f6a94"},"inputs":{"trigger":{"connections":[{"node":232,"output":"trigger","data":{"hello":"hello"}}]},"event":{"connections":[{"node":232,"output":"output","data":{"hello":"hello"}}]}},"outputs":{"trigger":{"connections":[{"node":837,"input":"trigger","data":{"hello":"hello"}}]},"agentId":{"connections":[]},"content":{"connections":[{"node":837,"input":"input","data":{"hello":"hello"}}]},"client":{"connections":[]},"channel":{"connections":[]},"channelType":{"connections":[]},"entities":{"connections":[]},"projectId":{"connections":[]},"observer":{"connections":[]},"sender":{"connections":[]},"rawData":{"connections":[]}},"position":[-816,-48],"name":"Event Destructure"},"836":{"id":836,"data":{"fewshot":"You are a task creation AI that uses the result of an execution agent to create new tasks with the following objective: {{objective}}, The last completed task has the result: {{result}}. This result was based on this task description: {{task_description}}. These are incomplete tasks: {{incomplete_tasks}}. Based on the result, create new tasks to be completed by the AI system that do not overlap with incomplete tasks.Return the tasks as an array","dataControls":{"inputs":{"expanded":true},"fewshot":{"expanded":true}},"inputs":[{"name":"incomplete_tasks","taskType":"output","socketKey":"incomplete_tasks","connectionType":"input","socketType":"anySocket"},{"name":"task_description","taskType":"output","socketKey":"task_description","connectionType":"input","socketType":"anySocket"},{"name":"result","taskType":"output","socketKey":"result","connectionType":"input","socketType":"anySocket"},{"name":"objective","taskType":"output","socketKey":"objective","connectionType":"input","socketType":"anySocket"}],"success":false},"inputs":{"incomplete_tasks":{"connections":[{"node":838,"output":"incomplete_tasks","data":{"hello":"hello"}}]},"task_description":{"connections":[{"node":838,"output":"task_description","data":{"hello":"hello"}}]},"result":{"connections":[{"node":838,"output":"result","data":{"hello":"hello"}}]},"objective":{"connections":[{"node":838,"output":"objective","data":{"hello":"hello"}}]},"trigger":{"connections":[{"node":838,"output":"trigger","data":{"hello":"hello"}}]}},"outputs":{"trigger":{"connections":[{"node":840,"input":"trigger","data":{"hello":"hello"}}]},"prompt":{"connections":[{"node":840,"input":"input","data":{"hello":"hello"}}]}},"position":[16,-32],"name":"Text Template"},"837":{"id":837,"data":{"success":false},"inputs":{"trigger":{"connections":[{"node":494,"output":"trigger","data":{"hello":"hello"}}]},"input":{"connections":[{"node":494,"output":"content","data":{"hello":"hello"}}]}},"outputs":{"trigger":{"connections":[{"node":838,"input":"trigger","data":{"hello":"hello"}}]},"output":{"connections":[{"node":838,"input":"object","data":{"hello":"hello"}}]}},"position":[-544,-32],"name":"JSON To Object"},"838":{"id":838,"data":{"dataControls":{"outputs":{"expanded":true}},"outputs":[{"name":"incomplete_tasks","taskType":"output","socketKey":"incomplete_tasks","connectionType":"output","socketType":"anySocket"},{"name":"task_description","taskType":"output","socketKey":"task_description","connectionType":"output","socketType":"anySocket"},{"name":"result","taskType":"output","socketKey":"result","connectionType":"output","socketType":"anySocket"},{"name":"objective","taskType":"output","socketKey":"objective","connectionType":"output","socketType":"anySocket"}],"success":false},"inputs":{"trigger":{"connections":[{"node":837,"output":"trigger","data":{"hello":"hello"}}]},"object":{"connections":[{"node":837,"output":"output","data":{"hello":"hello"}}]}},"outputs":{"incomplete_tasks":{"connections":[{"node":836,"input":"incomplete_tasks","data":{"hello":"hello"}}]},"task_description":{"connections":[{"node":836,"input":"task_description","data":{"hello":"hello"}}]},"result":{"connections":[{"node":836,"input":"result","data":{"hello":"hello"}}]},"objective":{"connections":[{"node":836,"input":"objective","data":{"hello":"hello"}}]},"trigger":{"connections":[{"node":836,"input":"trigger","data":{"hello":"hello"}}]}},"position":[-272,-32],"name":"Get Values From Object"},"840":{"id":840,"data":{"model":"text-davinci-003","temperature":0.5,"max_tokens":100,"top_p":1,"frequency_penalty":0,"presence_penalty":0,"stop":"###","dataControls":{"model":{"expanded":true},"temperature":{"expanded":true},"max_tokens":{"expanded":true},"top_p":{"expanded":true},"frequency_penalty":{"expanded":true},"presence_penalty":{"expanded":true},"stop":{"expanded":true}}},"inputs":{"trigger":{"connections":[{"node":836,"output":"trigger","data":{"hello":"hello"}}]},"input":{"connections":[{"node":836,"output":"prompt","data":{"hello":"hello"}}]}},"outputs":{"trigger":{"connections":[{"node":493,"input":"trigger","data":{"hello":"hello"}}]},"result":{"connections":[{"node":493,"input":"string","data":{"hello":"hello"}}]}},"position":[336,32],"name":"Generate Text"}},"comments":[]}}

export default TaskCreation;