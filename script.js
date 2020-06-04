








function start() {
    var length = prompt("choose a length of at least 8 characters and no more than 128 characters", "");
    var options = prompt("Select 1 for uppercase, 2 for lowercase, 3 for numeric or 4 for special password", "");

        if (options === '1') {
            el_down.innerHTML = generateU(length);
        } else if (options === '2') {
            el_down.innerHTML = generateL(length);
        } else if (options === '3') {
            el_down.innerHTML = generateN(length);
        } else if (options === '4') {
            el_down.innerHTML = generateS(length);
        } else {
            alert("You did not select the right options");
        }

}


var el_down = document.getElementById("password");

function lowercase() {
    el_down.innerHTML = generateL();
}

function uppercase() {
    el_down.innerHTML = generateU();
}

function numeric() {
    el_down.innerHTML = generateN();
}

function special() {
    el_down.innerHTML = generateS();
}

/* Function to generate combination of lowercase  password */
function generateL(size) {
    var pass = '';
    var str = 'abcdefghijklmnopqrstuvwxyz';
    for (i = 0; i < size; i++) {
        var char = Math.floor(Math.random() * str.length);

        pass += str.charAt(char)
    }

    alert(pass);
    return pass;
}

/* Function to generate combination of uppercase  password */
function generateU(size) {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (i = 0; i < size; i++) {
        var char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char)
    }

    alert(pass);
    return pass;
}

/* Function to generate combination of numeric password */
function generateN(size) {
    var pass = '';
    var str = '0123456789';
    for (i = 0; i < size; i++) {
        var char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char)
    }
    alert(pass);
    return pass;
}

/* Function to generate combination of special password */
function generateS(size) {
    var pass = '';
    var str = '!$^&*-=+_?';
    for (i = 0; i < size; i++) {
        var char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char)
    }
    alert(pass);
    return pass;
}