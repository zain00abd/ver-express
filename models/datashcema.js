import mongoose from 'mongoose';
const { Schema } = mongoose;

const ModelSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    invoicesPrice: Number,
    invoicesPay: Number,
    lastArr: Number,
    arrInvoice: [{ type: Schema.Types.Mixed }],
  });

const InvoiceModel = mongoose.model('Invoice', ModelSchema);
export default InvoiceModel;