import 'babel-polyfill';

import '../scss/index.scss';

$.when( $.ready ).then(function() {
    
     $(window).on( "load",function() {
        $('.loader').fadeOut();
        $('.pre').delay(400).fadeOut('slow');
    });


    $('.header__burger').click(function () {
        $(this).toggleClass('on');
        $('.header__hidden').slideToggle();
        return false;
    });
    
    $('#like').click(function() {
        $(this).addClass('like');
        if ($("#dislike").hasClass("dislike")) {
            $("#dislike").removeClass('dislike');
        }
    });

    
    $('#dislike').click(function() {
        $(this).addClass('dislike');
        if ($("#like").hasClass("like")) {
            $("#like").removeClass('like');
        }
    });

    

    $('.single-item').slick();
    


    $('#mail-link').on('click', function () {
        var send_form = document.getElementById('form-mail');
        if (send_form.checkValidity() === false) {
            alert('Write in the field!');
            return;
        }
    });



    $('#form-mail').submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                $(formNm).html(data);
            },
            error: function (jqXHR, text, error) {
                $(formNm).html(error);
            }
        });
        return false;
    });

});

  
  
  /**
  * http://stackoverflow.com/a/9744576
  */
  function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
  }
  
  /**
    * https://davidwalsh.name/function-debounce
    * Returns a function, that, as long as it continues to be invoked, will not
    * be triggered. The function will be called after it stops being called for
    * N milliseconds. If `immediate` is passed, trigger the function on the
    * leading edge, instead of the trailing.
  */
  function debounce(func, wait, immediate) {
      var timeout;
      return function() {
          var context = this, args = arguments;
          var later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
      };
  };

