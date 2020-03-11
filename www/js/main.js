// Morning Azakr Function
function morning(zaker, thawab, zakrId, countId, counter, counter2, frameClassName, repeatId, bnt, animateName) {

    document.querySelector(zakrId).innerHTML = zaker;
    document.querySelector(countId).innerHTML = counter;

    function downCount() {

        document.querySelector(countId).innerHTML = --counter;
        var animateVar = document.querySelector(zakrId).classList;

        var white = "#fff";
        var dark = "#2691d9";
        var black = "#000000";

        if (counter == 0) {

            document.querySelector(frameClassName).style.backgroundColor = dark;
            document.querySelector(frameClassName).style.color = white;
            document.querySelector(zakrId).innerHTML = thawab;
            document.querySelector(countId).style.opacity = "0";
            document.querySelector(repeatId).style.color = dark;
            counter = counter2 + 1;

            if (animateVar.contains(animateName)) {
                animateVar.remove(animateName);
            } else {
                animateVar.add(animateName);
            }

        } else {

            document.querySelector(frameClassName).style.backgroundColor = white;
            document.querySelector(frameClassName).style.color = black;
            document.querySelector(bnt).style.backgroundColor = dark;
            document.querySelector(bnt).style.color = white;
            document.querySelector(repeatId).style.color = white;
            document.querySelector(zakrId).innerHTML = zaker;
            document.querySelector(countId).style.opacity = "1";

            if (animateVar.contains(animateName)) {
                animateVar.remove(animateName);
            }
        }

    }

    document.querySelector(frameClassName).addEventListener('click', downCount);

}

// Evening Azakr Function
function evening(zaker, thawab, zakrId, countId, counter, counter2, frameClassName, repeatId, bnt, animateName) {

    document.querySelector(zakrId).innerHTML = zaker;
    document.querySelector(countId).innerHTML = counter;

    function downCount() {

        document.querySelector(countId).innerHTML = --counter;
        var animateVar = document.querySelector(zakrId).classList;

        var white = "#f5f5f5";
        var dark = "#a67126";
        var black = "#000000";

        if (counter == 0) {

            document.querySelector(frameClassName).style.backgroundColor = dark;
            document.querySelector(frameClassName).style.color = white;
            document.querySelector(zakrId).innerHTML = thawab;
            document.querySelector(repeatId).style.color = dark;
            document.querySelector(countId).style.opacity = "0";
            counter = counter2 + 1;

            if (animateVar.contains(animateName)) {
                animateVar.remove(animateName);
            } else {
                animateVar.add(animateName);
            }

        } else {

            document.querySelector(frameClassName).style.backgroundColor = white;
            document.querySelector(frameClassName).style.color = black;
            document.querySelector(bnt).style.backgroundColor = dark;
            document.querySelector(bnt).style.color = white;
            document.querySelector(repeatId).style.color = white;
            document.querySelector(zakrId).innerHTML = zaker;
            document.querySelector(countId).style.opacity = "1";

            if (animateVar.contains(animateName)) {
                animateVar.remove(animateName);
            }
        }

    }

    document.querySelector(frameClassName).addEventListener('click', downCount);

}

//Azakr Function
function init_zakr(zaker, thawab, zakrId, countId, counter, counter2, frameClassName, repeatId, bnt, arg10) {

    document.querySelector(zakrId).innerHTML = zaker;
    document.querySelector(countId).innerHTML = counter;

    function downCount() {

        document.querySelector(countId).innerHTML = --counter;
        var animateVar = document.querySelector(zakrId).classList;

        var white = "#fff";
        var dark = "#835194";
        var black = "#000000";

        if (counter == 0) {

            document.querySelector(frameClassName).style.backgroundColor = dark;
            document.querySelector(frameClassName).style.color = white;
            document.querySelector(bnt).style.backgroundColor = white;
            document.querySelector(bnt).style.color = dark;

            document.querySelector(zakrId).innerHTML = thawab;
            document.querySelector(repeatId).innerHTML = 'الذِكرِ';
            document.querySelector(countId).style.opacity = "0";
            counter = counter2 + 1;

            if (animateVar.contains(animateName)) {
                animateVar.remove(animateName);
            } else {
                animateVar.add(animateName);
            }

        } else {

            document.querySelector(frameClassName).style.backgroundColor = white;
            document.querySelector(frameClassName).style.color = black;
            document.querySelector(bnt).style.backgroundColor = dark;
            document.querySelector(bnt).style.color = white;

            document.querySelector(zakrId).innerHTML = zaker;
            document.querySelector(repeatId).innerHTML = 'الثواب';
            document.querySelector(countId).style.opacity = "1";

            if (animateVar.contains(animateName)) {
                animateVar.remove(animateName);
            }

        }

    }

    document.querySelector(bnt).addEventListener('click', downCount);

}

//Azakr Function Counter++
function zakrCounter(bnt) {

    var count = 1;

    function incrementCount() {
         document.getElementById(bnt).innerHTML = count++;
    }

    document.getElementById(bnt).addEventListener('click', incrementCount);
}

// Progressbar Function
function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

//  Scroll Progress bar goBack
window.onscroll = function() {
    progressBar()
};

//   GoBack Function
function goBack() {
    window.history.back();
}

// See more Function
function seeMore(dotsP, moreP) {
    var dots = document.getElementById(dotsP);
    var moreText = document.getElementById(moreP);

    if (dots.style.display === "none") {

        dots.style.display = "inline";
        moreText.style.display = "none";


    } else {

        dots.style.display = "none";
        moreText.style.display = "inline";

    }
}
