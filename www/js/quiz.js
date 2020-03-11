function quizResult(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, cAnswer1, cAnswer2, cAnswer3, cAnswer4, cAnswer5, cAnswer6, cAnswer7, cAnswer8, cAnswer9, cAnswer10, check1, check2, check3, check4, check5, check6, check7, check8, check9, check10) {

    var deg1 = 0,
        deg2 = 0,
        deg3 = 0,
        deg2 = 0,
        deg4 = 0,
        deg5 = 0,
        deg6 = 0,
        deg7 = 0,
        deg8 = 0,
        deg9 = 0,
        deg10 = 0;

    if (document.getElementById(answer1).checked) {
        deg1 = 10;
        document.getElementById(check1).innerHTML = '&#x02713';
        document.getElementById(check1).style.color = '#2eb82e';
    } else {
        document.getElementById(cAnswer1).style.color = '#2eb82e';
        document.getElementById(check1).innerHTML = '&#x029B0';
        document.getElementById(check1).style.color = '#e60000';
    }

    if (document.getElementById(answer2).checked) {
        deg2 = 10;
        document.getElementById(check2).innerHTML = '&#x02713';
        document.getElementById(check2).style.color = '#2eb82e';
    } else {
        document.getElementById(cAnswer2).style.color = '#2eb82e';
        document.getElementById(check2).innerHTML = '&#x029B0';
        document.getElementById(check2).style.color = '#e60000';

    }

    if (document.getElementById(answer3).checked) {
        deg3 = 10;
        document.getElementById(check3).innerHTML = '&#x02713';
        document.getElementById(check3).style.color = '#2eb82e';
    } else {
        document.getElementById(cAnswer3).style.color = '#2eb82e';
        document.getElementById(check3).innerHTML = '&#x029B0';
        document.getElementById(check3).style.color = '#e60000';
    }

    if (document.getElementById(answer4).checked) {
        deg4 = 10;
        document.getElementById(check4).innerHTML = '&#x02713';
        document.getElementById(check4).style.color = '#2eb82e';
    } else {
        document.getElementById(cAnswer4).style.color = '#2eb82e';
        document.getElementById(check4).innerHTML = '&#x029B0';
        document.getElementById(check4).style.color = '#e60000';

    }

    if (document.getElementById(answer5).checked) {
        deg5 = 10;
        document.getElementById(check5).innerHTML = '&#x02713';
        document.getElementById(check5).style.color = '#2eb82e';
    } else {
        document.getElementById(cAnswer5).style.color = '#2eb82e';
        document.getElementById(check5).innerHTML = '&#x029B0';
        document.getElementById(check5).style.color = '#e60000';
    }

    if (document.getElementById(answer6).checked) {
        deg6 = 10;
        document.getElementById(check6).innerHTML = '&#x02713';
        document.getElementById(check6).style.color = '#2eb82e';
    } else {
        document.getElementById(cAnswer6).style.color = '#2eb82e';
        document.getElementById(check6).innerHTML = '&#x029B0';
        document.getElementById(check6).style.color = '#e60000';

    }

    if (document.getElementById(answer7).checked) {
        deg7 = 10;
        document.getElementById(check7).innerHTML = '&#x02713';
        document.getElementById(check7).style.color = '#2eb82e';
    } else {
        document.getElementById(cAnswer7).style.color = '#2eb82e';
        document.getElementById(check7).innerHTML = '&#x029B0';
        document.getElementById(check7).style.color = '#e60000';
    }

    if (document.getElementById(answer8).checked) {
        deg8 = 10;
        document.getElementById(check8).innerHTML = '&#x02713';
        document.getElementById(check8).style.color = '#2eb82e';
    } else {
        document.getElementById(cAnswer8).style.color = '#2eb82e';
        document.getElementById(check8).innerHTML = '&#x029B0';
        document.getElementById(check8).style.color = '#e60000';

    }

    if (document.getElementById(answer9).checked) {
        deg9 = 10;
        document.getElementById(check9).innerHTML = '&#x02713';
        document.getElementById(check9).style.color = '#2eb82e';
    } else {
        document.getElementById(cAnswer9).style.color = '#2eb82e';
        document.getElementById(check9).innerHTML = '&#x029B0';
        document.getElementById(check9).style.color = '#e60000';
    }

    if (document.getElementById(answer10).checked) {
        deg10 = 10;
        document.getElementById(check10).innerHTML = '&#x02713';
        document.getElementById(check10).style.color = '#2eb82e';
    } else {
        document.getElementById(cAnswer10).style.color = '#2eb82e';
        document.getElementById(check10).innerHTML = '&#x029B0';
        document.getElementById(check10).style.color = '#e60000';

    }

    var sumResult = deg1 + deg2 + deg3 + deg4 + deg5 + deg6 + deg7 + deg8 + deg9 + deg10;

    document.getElementById("showResult").innerHTML = '<div class="c100 p' + sumResult + ' small"><span>' + sumResult + '%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div>';


    document.getElementById("newTest").innerHTML = '<button type="button" class="bntResult" onclick="newTest()">أختبار جديد</button>';

    document.getElementById("refPage").innerHTML = '<hr /><button type="button" class="bntNewQuiz" onclick="refPage()">أعادة الأختبار</button>';



    var child = document.getElementById("resultId");
    child.parentNode.removeChild(child);

}



// Random quizzes pages in quiz pages
function newTest() {
 var pageRandomQuiz = Math.floor(Math.random() * 24) + 1;
window.location.replace("../quizzes/quiz" + pageRandomQuiz +".html" );
}

function refPage() {
 location.reload();
 $(document).ready(function(){
    $(this).scrollTop(0);
});
}
