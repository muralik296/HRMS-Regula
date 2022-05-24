const mongoose = require("mongoose");

//Schema
const DocumentSchema = new mongoose.Schema({
  nameOfEmployee: String, // WIll be given by User while uploading the document
  employeeId: {
    type: String,
  },
  documentType: String,
  documentClass: String,
  dataFields: Object,
  images: Array,
  graphicImages: Object,
  regulaDeviceId:String,
  created_at: {
    type: Date,//Date of adding this record to our database
    default: Date.now,
    // expires: 3600 //Expires after 3600 seconds
  }, 
})

//Model from the schema..
module.exports = mongoose.model('Document', DocumentSchema);