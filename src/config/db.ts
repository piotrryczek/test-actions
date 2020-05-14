import mongoose from 'mongoose';

// Importing models
import 'models/country';

export const connectionUrl = `${process.env.MONGO_CONNECTION}/${process.env.MONGO_DATABASE}`;

export const connectionSettings = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  replicaSet: process.env.MONGO_REPLICA_SET,
  serverSelectionTimeoutMS: 1500,
};

mongoose.connect(connectionUrl, connectionSettings);

export default mongoose.connection;
