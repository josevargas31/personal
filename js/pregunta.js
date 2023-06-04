const yesDl = document.querySelector('#yesDl');

yesDl.addEventListener('click',function() {
    alert('[ . . . ]')
});

const noDl = document.querySelector('#noDl');

noDl.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noDl.style.setProperty('top',randomY+'%');
    noDl.style.setProperty('left',randomX+'%');
    noDl.style.setProperty('trasform',`translate(-${randomX}%,-${randomY}%)`); 
})