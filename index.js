'use strict';

const express = require('express');
const app = express();

const Context = require('./context');
const PageAction = require('./page-action');

/*
    This page should show product page on an imaginary shopping site.
    The page needs to get the following information to render the page given an item id in the URL:
    - Item details such as description, location, seller id obtained from item details service by itemId.
    - Seller information (name, rating) obtained from seller information service by seller id.
    - Buyer information (name, location) obtained from user information service by buyer id.
    - Shipping rates obtained from shippipng service using buyer's and seller's locations.
  */
app.get('/item', (req, res) => {
    const page = new PageAction();

    // define context
    page.define('context', new Context(req, res))
        .timeout('render', 5000)
        .catch(err => {
            res.redirect('/error-page');
        })
        .activate();
});

app.listen(8000, () => {
    console.log('The server is ready');
});
