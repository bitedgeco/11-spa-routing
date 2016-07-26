(function(module) {
  var articleController = {};

  articleController.reveal = function() {

    $('.tab-content').hide();

    $('#articles').fadeIn();

  };

  module.articleController = articleController;
})(window);
