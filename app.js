const express = require("express")
const mongoose = require("mongoose")
const Book = require("./models/Books")
const app = express()

app.use(express.json())

app.listen(3004, () => {
    console.log(`Server is running at Port 3004`)
})

mongoose.connect('mongodb://localhost:27017/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

//API for Create Books
app.post("/books", async (request, response) => {
    const Book = new Books(request.body)
    try {
        await book.save();
        response.status(201).send(book)
    } catch (error) {
        response.status(400).send(error)
    }
})

//API for Read All
app.get('/books', async (req, res) => {
    try {
      const books = await Books.find({});
      res.status(200).send(books);
    } catch (error) {
      res.status(500).send();
    }
});

// READ one by ID
app.get('/books/:id', async (req, res) => {
    try {
      const book = await Books.findById(req.params.id);
      if (!book) {
        return res.status(404).send();
      }
      res.send(book);
    } catch (error) {
      res.status(500).send();
    }
  });
  
  // UPDATE
  app.patch('/books/:id', async (req, res) => {
    try {
      const book = await Books.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!book) {
        return res.status(404).send();
      }
      res.send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // DELETE
  app.delete('/books/:id', async (req, res) => {
    try {
      const book = await Books.findByIdAndDelete(req.params.id);
      if (!book) {
        return res.status(404).send();
      }
      res.send(book);
    } catch (error) {
      res.status(500).send();
    }
  });