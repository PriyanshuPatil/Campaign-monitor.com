let i = document.querySelector('input'),
    o = document.querySelector('output');
    
    o.innerHTML = i.value;
    
    
    i.addEventListener('input', function () {
        o.innerHTML = i.value;
    }, false);