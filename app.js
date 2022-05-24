require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const app = express();

const Cryptr = require("cryptr");
const fs = require("fs");
const responseTime = require("./middleware/responseTime");
const license = require("./middleware/auth_license");
const logger = require("./logger");
const helmet = require("helmet");

// /*Helmet*/
app.use(helmet.hidePoweredBy());

//For compression of static files
const compression = require("compression");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");

/* public '/' */
app.use(express.static("public"));

/*check license*/
// app.use(license());

/*responseTime */
app.use(responseTime());

app.use(compression());
// Body Parser
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
}));
app.use(bodyParser.json({
  limit: '50mb'
})); //Setting the request limit


//Model from the schema..
const Document = require("./models/employee");


app.use("/views", require("./Routes/views"));
app.use("/records", require("./Routes/records"));
app.use("/", require("./Routes/exportRecords"));
app.use("/", require("./Routes/home"));


app.post("/error_log", function (req, res) {

  //Logs from Front End JS
  logger.warn(JSON.stringify(req.body));

})

if (process.env.NETWORK == 1) {
  app.get("/network_status", function (req, res) {
    const networkStatus = fs.readFileSync("./networkstatus.json", "utf-8");
    res.send(JSON.stringify(networkStatus));
  })
}

app.get("/info", function (req, res) {
  try {

    const cryptr = new Cryptr('FLEhCFtmwt');
    let encryptedCounter;
    let decryptedCounter;
    if (req.totalScans) {
      encryptedCounter = fs.readFileSync("./config.txt", "utf-8");
      decryptedCounter = cryptr.decrypt(encryptedCounter);
    }
    const RegisteredDevices = JSON.parse(fs.readFileSync("./Registered Devices.json", "utf-8")).list;

    res.render("info",
      {
        "decryptedCounter": decryptedCounter,
        "maximumScans": req.totalScans || 'XX',
        "RegisteredDevices": RegisteredDevices,
        "trialDate": req.trialDate || 'XX',
        "maximumDevices": req.numberOfDevices
      }
    );
  } catch (err) {
    res.send("Oops! Looks like something went wrong");
    console.log(err);
  }

})

module.exports = app;