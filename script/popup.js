$(function(){
    $('.btn a').click(function(){
        $('.popup').fadeIn();
    });
    $('.popup a').click(function(){
        $('.popup').hide();
    });
});