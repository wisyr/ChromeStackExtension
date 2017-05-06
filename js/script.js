var btns = document.getElementsByClassName('popupButton'),
    note = document.getElementById('copyNotification');

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            note.classList = 'reveal';
            setTimeout(function(){
                note.classList = '';
            }, 600);
        })
    }

new Clipboard('.popupButton', {
    text: function (trigger) {
        return trigger.getAttribute('selector-data');
    }
});

