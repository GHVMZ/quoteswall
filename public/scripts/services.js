'use strict';

angular.module('quotesWall').service('dataService', function($http) {

  // Get quotes
  this.getQuotes = function(cb) {
    $http.get('/api/quotes').then(cb);
  };

  // Delete quotes
  this.deleteQuote = function(quote) {
    if (!quote._id) {
      //return $q.resolve();
      console.log("Error, no id");
    }
    return $http.delete('/api/quotes/' + quote._id).then(function() {
    });
  };

  // Update quote
  this.updateQuote = function(quote) {
    if(!quote._id) {
      $http.post('/api/quotes', quote);
    } else {
      $http.put('/api/quotes/' + quote._id, quote).then(function(result) {
        return result.data.quote;
        console.log("Updated:");
        console.log(quote);
      });
    }
  };

});
