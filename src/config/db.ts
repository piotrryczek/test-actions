import mongoose from 'mongoose';

// Importing models
import 'models/country';

export const connectionUrl = `${process.env.MONGO_CONNECTION}/${process.env.MONGO_DATABASE}`;

export const connectionSettings = {
  useNewUrlParser: true,
  useUnifiedTopology: false,
};

mongoose.connect(connectionUrl, connectionSettings);

export default mongoose.connection;
