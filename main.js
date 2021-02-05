$('.carts img').on('click',function (e) {
    $('.carts img').removeClass('carts_active');
    $(this).addClass('carts_active');
});

$('.first,.second').on('input',function(){
    if($(this).val().length > 3) {
        $(this).val($(this).val().substr(0, 3));
        return false;
    }
});

$('.num').on('input',function(){
    if($(this).val().length > 4) {
        $(this).val($(this).val().substr(0, 3));
        return false;
    }
});


$('.first,.second,.num').on('change',function(e){
    let first_input = $('.first');
    let second_input = $('.second');
    let num = $('.num');
    if(first_input.val() != '' && second_input.val() != '' && num.val() != ''){
        $('table').append(
            `<tr>
            <td><div class='input first_count'>${first_input.val()}</div></td>
            <td><div class='input second_count'>${second_input.val()}</div></td>
            <td><div class='num_count input'>${num.val()} <img class="img_active" src="${$('.carts_active').attr('src')}" alt=""></div></td>
        </tr>`);
        let first_count = $('.first_count').eq($('.first_count').length -1);
        let second_count = $('.second_count').eq($('.second_count').length -1)
        let num_count = $('num_count');
        first_count.text(+first_count.text() + +first_input.val());
        second_count.text(+second_count.text() + +second_input.val());
        num_count.text(num.val());
        first_input.val('');second_input.val('');num.val('')
    }
    let fir = +$('.first_count').eq($('.first_count').length -1).text();
    let sec = +$('.second_count').eq($('.second_count').length -1).text();
    if(fir > 301 && fir > sec){
        setTimeout(function(){
            alert('Առաջին թիմը հաղթեց');
            window.location.reload();
        },1000)
    }
    else if(fir > 301 && fir < sec){
        setTimeout(function(){
            alert('Երկրորդ թիմը հաղթեց');
            window.location.reload();
        },1000)
    }
    else if(+$('.first_count').eq($('.first_count').length -1).text() >= 301){
        setTimeout(function(){
            alert('Առաջին թիմը հաղթեց');
            window.location.reload();
        },1000)
    }
    else if(+$('.second_count').eq($('.second_count').length -1).text() >= 301) {
        setTimeout(function(){
            alert('Երկրորդ թիմը հաղթեց');
            window.location.reload();
        },1000)
    }
});
