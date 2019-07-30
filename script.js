window.onload = async function() {
    if (document.location.href.indexOf("https://formular.berlin.de/xima-forms-29") < 0) {
        console.log("Not running");
        return;
    }

    var month = document.getElementById("month").getElementsByTagName('input')[0].value;
    console.log(month);

    if (month != "Juli") {
        console.log("PREVIOUS!");
        document.getElementById("labbevoreMonth").click();
        return;
    }

    await sleep(5000);

    var cells = document.getElementsByClassName("CELL");
    var hasTermin = false;
    for (var i = 0; i < cells.length; i++) {
        var link = cells[i].getElementsByTagName('a')[0]
        if (link && link.style['text-decoration-line'] == 'underline') {
            hasTermin = true;
            blink();
            break;
        }
    }

    console.log(hasTermin);

    if (hasTermin) {
        return;
    }

    console.log("NEXT!");
    document.getElementById("labnextMonth").click();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function blink() {
    var body = document.getElementsByTagName('body')[0];
    setInterval(function() {
        if (body.style.background == "rgb(255, 0, 0)") {
            body.style = "background: #F000000;"
        } else {
            body.style = "background: #F00;"
        }
    }, 250);
}