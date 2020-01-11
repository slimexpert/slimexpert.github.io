var jQueryBtBgImageMenu = jQuery.noConflict();
jQueryBtBgImageMenu(function() {
   jQueryBtBgImageMenu('#bt_sbi_container').bgImageMenu({
      defaultBg	: 'images/sampledata/image-sbi-default.jpg',
      border		: 1,
      width : 988,
      height: 500,
      type		: {
         mode		: 'seqFade',
         speed		: 250,
         easing		: 'jswing',
         seqfactor	: 100
      }
   });
});