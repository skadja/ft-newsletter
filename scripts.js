// duplicate content block
function duplicateNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}
duplicateNode(document.querySelector('.item'), 10, true);

// set random element active
let list = document.querySelector('.newsletters');
let el = list.getElementsByTagName('a');
el[Math.floor(Math.random() * el.length)].classList.add('active');

// check/uncheck
document.querySelectorAll('.item a').forEach(function(e) {
    e.addEventListener('click', function(ev) {
        ev.preventDefault();
        e.classList.toggle('active')
    });
});

// process function
function processForm(e) {
    e.preventDefault();

    // set radnom message
    let textArray = [
        'An error occurred, please try again later.',
        'You have successfully subscribed to the newsletter(s)'
    ];
    let randomNum = Math.floor(Math.random()*textArray.length);
    let className = randomNum == 0 ? 'text-danger' : 'text-success';

    // set classes
    document.querySelector('.block-submit').classList.add('d-none');
    document.querySelector('.block-delay').classList.remove('d-none');
    document.querySelector('.btn-submit').disabled = true;
    document.querySelector('#form-response').innerHTML = '';
    document.querySelector('#form-response').classList.remove('text-success', 'text-danger');

    // wait 2 sec and show message
    setTimeout(function() {
        document.querySelector('.block-delay').classList.add('d-none');
        document.querySelector('.block-submit').classList.remove('d-none');
        document.querySelector('.btn-submit').disabled = false;
        document.querySelector('#form-response').innerHTML = textArray[randomNum];
        document.querySelector('#form-response').classList.add(className);
    }, 2000);
}
document.querySelector('.form').addEventListener('submit', processForm);
