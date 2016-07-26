(function(module) {
  var articleView = {};

  articleView.handleAuthorFilter = function() {
    $('#author-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-author="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#category-filter').val('');
    });
  };

  articleView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#author-filter').val('');
    });
  };
  /* TODO: DONE - Once the routes are handling '/' and '/about', we can delete
      this handleMainNav function. YESSSS! */

  articleView.setTeasers = function() {
    $('h2').prev('p').remove();
    $('h2').next('p').remove();
    $('.article-body *:nth-of-type(n+2)').hide();
    $('article').on('click', 'a.read-on', function(e) {
      e.preventDefault();
      if($(this).text() === 'Read on →') {
        $(this).parent().find('*').fadeIn();
        $(this).html('Show Less &larr;');
      } else {
        $('body').animate({
          scrollTop: ($(this).parent().offset().top)
        },200);
        $(this).html('Read on &rarr;');
        $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
      }
    });
  };

  articleView.renderIndexPage = function() {
    $('#ajax-spinner').fadeOut();
    console.log('renderIndexPage ran')
    $('#filters').fadeIn();
    Article.allArticles.forEach(function(a){
      if($('#category-filter option:contains("'+ a.category + '")').length === 0) {
        $('#category-filter').append(a.toHtml('#category-filter-template'));
      };
      if($('#author-filter option:contains("'+ a.author + '")').length === 0) {
        $('#author-filter').append(a.toHtml('#author-filter-template'));
      };
      $('#articles').append(a.toHtml('#article-template'));
    });
    /* TODO DONE - : Remember to also remove any calls to the handleMainNav function elsewhere. */
    articleView.handleCategoryFilter();
    articleView.handleAuthorFilter();
    articleView.setTeasers();
  };

  Article.fetchAll(articleView.renderIndexPage);
  module.articleView = articleView;
})(window);
