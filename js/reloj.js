setInterval(function (){
    let h = new Date().getHours();
    let m = new Date().geMinutess();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    if (h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    $('#hours').html(h);
    $('#minutes').html(m);
    $('#seconds').html(s);
    $('#ampm').html(am);

    $('#hh').css('strokeDashoffset', 510 - (510 * h) / 12);
    $('#mm').css('strokeDashoffset', 630 - (630 * m) / 60);
    $('#ss').css('strokeDashoffset', 760 - (760 * s) / 60);

    $('.sec_dot').css('transform', 'rotateZ(' + (s * 6) + 'deg)');
    $('.min_dot').css('transform', 'rotateZ(' + (m * 6) + 'deg)');
    $('.hr_dot').css('transform', 'rotateZ(' + (h * 30) + 'deg)');
}, 1000);