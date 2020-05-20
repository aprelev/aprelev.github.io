$(document).ready(function() {
  $('.tabs').each(function(index) {
    var $tabParent = $(this);
    var $tabs = $tabParent.find('li');
    var $contents =
        $tabParent.parents().next('.tabs-content').find('.tab-content');
    $tabs.click(function() {
      var curIndex = $(this).index();
      $tabs.removeClass('is-active');
      $tabs.eq(curIndex).addClass('is-active');
      $contents.removeClass('is-active');
      $contents.eq(curIndex).addClass('is-active');
    });
  });
});