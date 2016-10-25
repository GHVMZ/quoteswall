'use strict';

angular.module('quotesWall').controller('quoteCtrl', function($scope, $http, dataService) {

  // Pagination (ui.bootstrap.pagination)
  $scope.currentPage = 1;
  $scope.pageSize = 30,
  $scope.maxSize = 10;

  // Filter
  $scope.order = 'createdAt';

  // Alert message
  $scope.alertMessage = "";

  // Edit item outside ng-repeat
  $scope.clickedQuote = {};
  $scope.newQuote = {};

  $scope.heartIt = function(quote){
    $scope.heartedQuote = quote;
    quote.heart = quote.heart || 0;
    quote.heart ++;
    dataService.updateQuote($scope.heartedQuote);
    console.log(quote.heart);
  }

  // Add quote
  $scope.addQuote = function(){
      $scope.quotes.push($scope.newQuote);
      dataService.updateQuote($scope.newQuote);
      $scope.newQuote = {};

      $scope.alertMessage = "New quote added";
  };

  // Get quotes
  dataService.getQuotes(function(response) {
    $scope.quotes =  response.data.quotes;
  });

  // Select quote
  $scope.selectQuote = function(quote){
      console.log(quote);
      $scope.clickedQuote = quote;
  };

  // Delete quote
  $scope.deleteQuote = function(){
    $scope.quotes.splice($scope.quotes.indexOf($scope.clickedQuote), 1);
    dataService.deleteQuote($scope.clickedQuote).then(function() {
      $scope.alertMessage = "Quote deleted";
      console.log("Deleted");
    });
  };

  // Save quote
  $scope.saveQuote = function() {
    dataService.updateQuote($scope.clickedQuote);
    $scope.alertMessage = "Saved";
    console.log("Saved");
  };

  // Alert dialog
  $scope.clickedAlert = function(){
    $scope.alertMessage = "";
  };

});
