// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/realityunveiledDB");

Mongoose Schema for the Collection Articles
const articleSchema = new mongoose.Schema ({
  topic: String,
  subTopic: String,
  author: String,
  date: Date,
  publish: Boolean,
  post: String
});

// Mongoose Model of Articles
const Article = mongoose.model("Article", articleSchema);


// Routes
app.use('/', require('./routes/home'));
app.use('/blog', require('./routes/blog'));
app.use('/about', require('./routes/about'));
app.use('/article', require('./routes/article'));
app.use('/new', require('./routes/new'));
