window.onload = async function() {
    if (document.location.href.indexOf("https://formular.berlin.de/xima-forms-29") < 0) {
        console.log("Not running");
        return;
    }

    var month = document.getElementById("month").getElementsByTagName('input')[0].value;
    console.log(month);

    var cells = document.getElementsByClassName("CELL");
    var hasTermin = false;
    for (var i = 0; i < cells.length; i++) {
        var link = cells[i].getElementsByTagName('a')[0]
        if (link && link.style['text-decoration-line'] == 'underline') {
            hasTermin = true;
            var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
            audio.play();
            alert("GOOOOO!!!!!!");
            break;
        }
    }

    console.log(hasTermin);

    if (hasTermin) {
        return;
    }

    await sleep(5000);

    if (month != "Juli") {
        console.log("PREVIOUS!");
        document.getElementById("labbevoreMonth").click();
    } else {
        console.log("NEXT!");
        document.getElementById("labnextMonth").click();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  