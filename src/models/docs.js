// models/User.js
import mongoose from 'mongoose';

const docsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  text: {
    type: String,
  },
  label: {
    type: String
  }
});

const Docs = mongoose.models.Docs || mongoose.model('Docs', docsSchema);

export default Docs;
