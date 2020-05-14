import mongoose from 'mongoose';

const { Schema } = mongoose;

const CountrySchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

export default mongoose.models.CountrySchema || mongoose.model('Country', CountrySchema);
