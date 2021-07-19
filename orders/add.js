function buttonToggle(ButtonID) {
    var change = document.getElementById(ButtonID);
    if (change.innerHTML == 'Add') {
        change.innerHTML = 'Added'
        change.style.opacity = '50%'
    } else {
        none
    }
}

function logOut() {
    alert('You are about to log out')
}