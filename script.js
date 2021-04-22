$('.carousel').carousel()
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(".slideInLeft:visible").addClass("animated");
$(document).ready(function(){
   var showmore = $('.showmore').on()
    
});
 


$('.link').click(function(toggle){
    if($(this).text() == 'show more'){
        toggle.stopPropagation();
        $(this).text('show less');
        $(this).parent('div').find('.agora').css({'display':'inline'});
    }else{
          event.stopPropagation();

    $('.link').text('show more');
    $('.link').parent('div').find('.agora').css({'display':'none'});

    }
    
})

