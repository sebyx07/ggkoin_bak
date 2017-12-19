window.onPageLoad = function (selector, cb) {
  $(document).on('turbolinks:load reinit', function () {
    var $selector = $(selector);
    if($selector.length < 1){
      return true;
    }
    $selector.each(function () {
      var $el = $(this);
      if(!$el.data('turbolinks-init')){
        cb($el);
        $el.data('turbolinks-init', true);
      }
    });
  });
};

window.reInit = function () {
  $(document).trigger('reinit');
};