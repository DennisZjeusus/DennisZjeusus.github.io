// $(document).ready(function () {
//         var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
//         if (window.location.hash && isChrome) {
//             setTimeout(function () {
//                 var hash = window.location.hash;
//                 const height = $(window).height() ;
//                 window.location.hash = "";
//                 window.location.hash = hash;
//             },5000);
//         }
//     });
function navb(hash) {

  console.log(''+classList+'');

  var classList = hash;

  if(classList == 'homerb')
  {
    $('#homer').addClass("imagine");

  }else if(classList != false)
  {
    $('#homer').removeClass("imagine");
    // $(this).find( "a" ).trigger('click');
    console.log(''+classList+'');
  }
}
