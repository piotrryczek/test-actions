import mongoose from 'mongoose';

// Importing models
import 'models/country';

const connectionUrl = `${process.env.MONGO_CONNECTION}/${process.env.MONGO_DATABASE}`;

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

export default mongoose.connection;
