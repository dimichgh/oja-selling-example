'use strict';

const express = require('express');
const app = express();
require('marko/node-require').install();

const Context = require('./src/common/context');
const ItemPageAction = require('./src/pages/item');
// const ErrorPageAction = require('./src/pages/error');

/*
    This page should show product page on an imaginary shopping site.
    The page needs to get the following information to render the page given an item id in the URL:
    - Item details such as description, location, seller id obtained from item details service by itemId.
    - Seller information (name, rating) obtained from seller information service by seller id.
    - Buyer information (name, location) obtained from user information service by buyer id.
    - Shipping rates obtained from shippipng service using buyer's and seller's locations.
  */
app.get('/item', (req, res) => {
    const page = new ItemPageAction();

    // define context
    page.add(new Context(req, res))
        .timeout('render', 1000)
        .catch(err => {
            console.log('--->', err);
            // res.redirect('/error');
        })
        .activate();
});

// app.get('/error', (req, res) => {
//     new ErrorPageAction()
//         .add(new Context(req, res))
//         .timeout('render', 1000)
//         .catch(err => {
//             res.status(500).end('Server is down');
//         })
//         .activate();
// });

app.listen(8000, () => {
    console.log('The server is ready');
});
