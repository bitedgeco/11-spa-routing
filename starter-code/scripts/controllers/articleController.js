(function(module) {
  var articleController = {};

  articleController.reveal = function() {

  	// Article.fetchAll(articleView.renderIndexPage);

  	$('.tab-content').hide();

  	$('#articles').fadeIn();

  };

  module.articleController = articleController;
})(window);
