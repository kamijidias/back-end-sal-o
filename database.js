const mongoose = require('mongoose');
const URI = 'mongodb+srv://hallUser:CAQHzZC6AsqCnAnx@cluster0.3liuudf.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true, // <-- no longer necessary
  useUnifiedTopology: true // <-- no longer necessary
});
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

console.log(newUrlParser)

mongoose
    .connect(URI)
    .then(() => console.log('DB is UP!'))
    .catch(() => console.log(err));