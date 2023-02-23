const PrescriptionSchema = new mongoose.Schema({
    prescriptionID: {
        type: String,
        required: true,
    },
    medications: {
        type: String,
        required: true,
    },
    advice: {
        type: String,
        required: true,
    },
});
const Prescription = mongoose.model("Prescription", PrescriptionSchema);
module.exports = Prescription;
