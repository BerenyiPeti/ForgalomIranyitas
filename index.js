window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function QS(elem) {
    return document.querySelectorAll(elem);
}


function init() {
    var allapot = false;
    var autoElem = QS(".auto")[0];
    var lampa = QS(".lampa")[0];
    var piros = QS(".piros")[0];
    var sarga = QS(".sarga")[0];
    var zold = QS(".zold")[0];

    sarga.style.opacity = "20%";
    zold.style.opacity = "20%";

    setInterval(() => {
        if (!allapot) {
            sarga.style.opacity = "100%";
        }
    }, 1000);
    setInterval(() => {
        if (allapot) {
            piros.style.opacity = "100%";
            zold.style.opacity = "20%";
        } else {
            piros.style.opacity = "20%";
            sarga.style.opacity = "20%";
            zold.style.opacity = "100%";
            autoElem.classList.add("balroljobbra");

        }

        allapot = !allapot;
    }, 2000);

    /*console.log(sarga.style.opacity);
   
    setInterval(function () {
        if (sarga.style.opacity == 0.2 || zold.style.opacity == 0.2
        ) { 
            sarga.style.opacity = "100%";
            console.log("sarga");
        }
    }, 2000);

    setInterval(function () {
        if (piros.style.opacity == 1 || zold.style.opacity == 0.2) {
            sarga.style.opacity = "100";
        }
    }, 4000)

    setInterval(function () {
        if (piros.style.opacity == 1 || sarga.style.opacity == 1)
        zold.style.opacity = "100%";
    }, 6000)

    setInterval(function () {
        if
        piros.style.opacity = "100";
        sarga.style.opacity = "20%";
    }, 8000)*/





}








