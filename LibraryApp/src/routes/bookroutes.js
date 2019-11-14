const express = require('express');
const booksRouter = express.Router();

function router(nav) {
    var books = [
        {
            title: "war and peace",
            genre: "hostorical fiction",
            author: "lev nicolayevich",
            image: "image1.jpg",
        },

        {
            title: "les miserable",
            genre: "historical fiction",
            author: "victor hugo",
            image: "image1.jpg"
        },
        {
            title: "book3",
            genre: "historical fiction",
            author: "rasool",
            image: "image1.jpg"
        },
        {
            title: "book4",
            genre: "historical fiction",
            author: "maharifa",
            image: "image1.jpg"
        }
    ];


    booksRouter.route('/')                     //id of the books
        .get((req, res) => {

            res.render(
                'books',
                {
                    nav,                                   //nav contains the data from var nav
                    title: "Books",
                    books
                }
            )
        })


    booksRouter.route('/addbooks')                     //id of the books
        .get((req, res) => {
            res.render(
                'addbooks.ejs',
                {
                    nav,                                   //nav contains the data from var nav
                    title: "Add Books",
                }
            );
        });


    booksRouter.route('/save')
        .post((req, res) => {
            //res.send("form submitted");
            console.log("welcome")
            console.log(req.body);

        });


    booksRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render(
                'book.ejs',
                {
                    nav,
                    title: "books",
                    book: books[id]
                }
            );
        });


    return booksRouter;
}
module.exports = router;
