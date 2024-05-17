const express = require("express");

const db = require("./config/database");
const bookDB = require("./models/bookTBL");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
 
  bookDB
    .find({})
    .then((bookstore) => {
      return res.render("index", {
        bookstore,
      });
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});

app.post("/", (req, res) => {
  console.log(req.body);
  const { url, title, author, summary, price } = req.body;

  bookDB
    .create({
      url: url,
      title: title,
      author: author,
      summary: summary,
      price: price,
    })
    .then((user) => {
      console.log("data insert successfully..");
      return res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});

app.get("/deleteData", (req, res) => {
  let id = req.query.id;
  console.log(id);
  bookDB
    .findByIdAndDelete(id)
    .then(() => {
      console.log("Data deleted successfully!");
      return res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});

app.get('/editData', (req, res) => {
  let id = req.query.id;
  bookDB.findById(id).then((data) => {
      return res.render('edit', { data });
  }).catch((err) => {
      console.log(err);
      return false;
  })
})

app.post('/editData/:id', (req, res) => {
  const{url, title, author, summary, price } = req.body
  const { id } = req.params
  bookDB.findByIdAndUpdate(id,{url, title, author, summary, price }).then((data)=>{
      console.log("Data Updated!");
      return res.redirect('/');

  }).catch((err)=>{
      console.log(err)
      return false;
  })
})

app.listen(8081, (err) => {
  if (!err) {
    console.log("Server is running on port http://localhost:8081");
  }
});
