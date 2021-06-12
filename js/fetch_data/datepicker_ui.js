// const g_start_picker = datepicker("#global_start_date",  { maxDate: new Date(2099, 0, 1) })
$( function() {
    $( "#txt_global_start_date" ).datepicker();
    $( "#txt_global_end_date" ).datepicker();
    $( "#txt_global_start_date" ).datepicker( "option", "showAnim", "slideDown" );
    $( "#txt_global_end_date" ).datepicker( "option", "showAnim", "slideDown" );
    $( "#txt_global_start_date" ).datepicker( "option", "dateFormat", "m/d/y" );
    $( "#txt_global_end_date" ).datepicker( "option", "dateFormat", "m/d/y" );
} );