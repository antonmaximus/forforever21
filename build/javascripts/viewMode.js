/******************************************************************************
*** VIEWMODE.JS 
*** Author:    Anton Agana
***
*** Handles buttons presses to change viewing mode.
***
******************************************************************************/


;(function($){
  $('#viewThree').on('click', function() {
    $('#imageHolder').removeClass( "columns4" ).addClass( "columns3" );
    // Disable button 3 and Enable button 4
    $(this).prop('disabled', true).next().prop('disabled', false);
  });

  $('#viewFour').on('click', function() {
    $('#imageHolder').removeClass( "columns3" ).addClass( "columns4" );
    // Disable button 4 and Enable button 3
    $(this).prop('disabled', true).prev().prop('disabled', false);;
  });
})(jQuery);
