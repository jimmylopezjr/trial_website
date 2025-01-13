document.getElementById('btn-add').addEventListener('click', function() {
    let NumberOne = document.getElementById('FirstNum').value;
    let NumberTwo = document.getElementById('SecondNum').value;
    let Answer = parseInt(NumberOne) + parseInt(NumberTwo);

    document.getElementById('Ans').value = Answer;


});

document.getElementById('btn-sub').addEventListener('click', function() {
    let NumberOne = document.getElementById('FirstNum').value;
    let NumberTwo = document.getElementById('SecondNum').value;
    let Answer = parseInt(NumberOne) - parseInt(NumberTwo);

    document.getElementById('Ans').value = Answer;


});

document.getElementById('btn-mul').addEventListener('click', function() {
    let NumberOne = document.getElementById('FirstNum').value;
    let NumberTwo = document.getElementById('SecondNum').value;
    let Answer = parseInt(NumberOne) * parseInt(NumberTwo);

    document.getElementById('Ans').value = Answer;


});

document.getElementById('btn-div').addEventListener('click', function() {
    let NumberOne = document.getElementById('FirstNum').value;
    let NumberTwo = document.getElementById('SecondNum').value;
    let Answer = parseInt(NumberOne) / parseInt(NumberTwo);

    document.getElementById('Ans').value = Answer;


});
