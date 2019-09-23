$(document).ready(function() {

    $('.mob-menu__header-text').on('click', function() {
        $('.mob-menu__footer').slideToggle(100, function(){
          if($(this).css('display') === 'none'){
          $(this).removeAttr('style')
          };
      });
    })

    $('.call').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });    
    
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });        

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });
    
    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();                    
        }
    });

    $('.expert').click(function() {
        $('.expert-fade').fadeIn();
        return false;
    });    
    
    $('.popup-close').click(function() {
        $(this).parents('.expert-fade').fadeOut();
        return false;
    });        

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.expert-fade').fadeOut();
        }
    });
    
    $('.expert-fade').click(function(e) {
        if ($(e.target).closest('.popup-expert').length == 0) {
            $(this).fadeOut();                    
        }
    });

     $('.consent').click(function() {
        $('.consent-fade').fadeIn();
        return false;
    });    
    
    $('.popup-close').click(function() {
        $(this).parents('.consent-fade').fadeOut();
        return false;
    });        

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.consent-fade').fadeOut();
        }
    });
    
    $('.consent-fade').click(function(e) {
        if ($(e.target).closest('.consent-popup').length == 0) {
            $(this).fadeOut();                    
        }
    });

    $('.password').click(function() {
        $('.password-fade').fadeIn();
        return false;
    });    
    
    $('.popup-close').click(function() {
        $(this).parents('.password-fade').fadeOut();
        return false;
    });        

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.password-fade').fadeOut();
        }
    });
    
    $('.password-fade').click(function(e) {
        if ($(e.target).closest('.password-popup').length == 0) {
            $(this).fadeOut();                    
        }
    });

    $('.blank').click(function() {
        $('.blank-fade').fadeIn();
        return false;
    });    
    
    $('.popup-close').click(function() {
        $(this).parents('.blank-fade').fadeOut();
        return false;
    });        

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.blank-fade').fadeOut();
        }
    });
    
    $('.blank-fade').click(function(e) {
        if ($(e.target).closest('.popup-blank').length == 0) {
            $(this).fadeOut();                    
        }
    });

    $('.information__board-btn').on('click', function() {
        $('.information__invisible').slideToggle(1200, function(){
          if($(this).css('display') === 'none'){
          $(this).removeAttr('style')
          };
      });
    })

    $('.filter-img').on('click', function() {
        $('.filter-container__wrraper').slideToggle(100, function() {
          if($(this).css('display') === 'none'){
          $(this).removeAttr('style')
          };
      });
    })

    $('[data-toggle]').on('click', function(e){
    var tgt = $(this).data('target');
      if (tgt && $(tgt).length > 0) {
        $(tgt).toggleClass('collapse');

        e.preventDefault();
        return false;
      }
    })
});