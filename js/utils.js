var $ = function (selector){
    var elms = document.querySelectorAll (selector),
    elm = document.querySelector (selector),
    out;
    if (elms.lenght > 1){
        out = elms;
    } else {
        out = elm;
    }
    return out;
}

console.log ("utils ready");
console.log ( $("#stage"));
//you can use css selectors # or .