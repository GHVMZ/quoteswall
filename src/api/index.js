'use strict';

var express = require('express');
var Quote = require('../models/quote');

var router = express.Router();

// get all quotes
router.get('/quotes', function(req, res) {
  Quote.find({}, function(err, quotes) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ quotes: quotes });
  });
});

// add new quote
router.post('/quotes', function(req, res) {
  var new_animal = req.body;
  Quote.create(new_animal, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'quote': new_animal, message: 'Quote added to db' });
  });
});

// update one quote
router.put('/quotes/:id', function(req, res) {
  var id = req.params.id;
  var quote = req.body;
  if (quote && quote._id !== id) {
    return res.status(500).json({ err: "Ids don't match!" });
  }
  Quote.findByIdAndUpdate(id, quote, {new: true}, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'quote': quote, message: 'Quote updated' });
  });
});

// delete quote from db
router.delete('/quotes/:id', function(req, res) {
  var id = req.params.id;
  Quote.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Quote deleted' });
  });
});

module.exports = router;
