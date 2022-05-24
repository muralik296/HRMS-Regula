require("bytenode");
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { fork } = require("child_process");

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

//A Child Process for the CRON JOB

if (process.env.NETWORK == 1) {
    const childProcess = fork("./Crontask/cronjob.js");
    childProcess.send({ "oldpath": process.env.LOCALFILEPATH, "newpath": process.env.NETWORKSHAREPATH, "cronscheduler": "0 */1 * * * * *" });
}


//server listening
server.listen(port, host, function () {
    console.log(`Server running on ${host}:${port}`);
})