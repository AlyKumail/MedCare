const RecordSchema = new mongoose.Schema({
    patientID: {
        type: String,
        required: true,
    },
    doctorID: {
        type: String,
        required: true,
    },
    prescriptionID: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    hospital: {
        type: String,
        required: true,
    },
});
const Record = mongoose.model("Record", RecordSchema);
module.exports = Record;
