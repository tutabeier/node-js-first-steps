import mongoose from 'mongoose';

mongoose.Promise = Promise;
const mongodbUrl = 'mongodb://127.0.0.1/test';
const connect = () => mongoose.connect(mongodbUrl);

export default {
  connect
}
