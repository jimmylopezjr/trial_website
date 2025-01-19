function InputNumber() {
    document.getElementById('one').addEventListener('click', function() {
        let NumVal = 1;
        document.getElementById('PutNumber').value += NumVal;
    })
    document.getElementById('two').addEventListener('click', function() {
        let NumVal = 2;
        document.getElementById('PutNumber').value += NumVal;
    })
    document.getElementById('three').addEventListener('click', function() {
        let NumVal = 3;
        document.getElementById('PutNumber').value += NumVal;
    })
    document.getElementById('four').addEventListener('click', function() {
        let NumVal = 4;
        document.getElementById('PutNumber').value += NumVal;
    })
    document.getElementById('five').addEventListener('click', function() {
        let NumVal = 5;
        document.getElementById('PutNumber').value += NumVal;
    })
    document.getElementById('six').addEventListener('click', function() {
        let NumVal = 6;
        document.getElementById('PutNumber').value += NumVal;
    })
    document.getElementById('seven').addEventListener('click', function() {
        let NumVal = 7;
        document.getElementById('PutNumber').value += NumVal;
    })
    document.getElementById('eight').addEventListener('click', function() {
        let NumVal = 8;
        document.getElementById('PutNumber').value += NumVal;
    })
    document.getElementById('nine').addEventListener('click', function() {
        let NumVal = 9;
        document.getElementById('PutNumber').value += NumVal;
    })
    document.getElementById('zero').addEventListener('click', function() {
        let NumVal = 0;
        document.getElementById('PutNumber').value += NumVal;
    })    
}

InputNumber();

let FirstNum = null;

document.getElementById('btn-Add').addEventListener('click', function() {
    FirstNum = document.getElementById('PutNumber').value;
    document.getElementById('PutNumber').value = "";  
    document.getElementById('btn-Eq').addEventListener('click', function() {
        const SecNum = document.getElementById('PutNumber').value;        
        const TotNum = parseInt(FirstNum) + parseInt(SecNum);
        document.getElementById('PutNumber').value = TotNum;
    })
})


document.getElementById('btn-Sub').addEventListener('click', function() {
    FirstNum = document.getElementById('PutNumber').value;
    document.getElementById('PutNumber').value = "";
    document.getElementById('btn-Eq').addEventListener('click', function() {
        const SecNum = document.getElementById('PutNumber').value;        
        const TotNum = parseInt(FirstNum) - parseInt(SecNum);
        document.getElementById('PutNumber').value = TotNum;
    })
})

document.getElementById('btn-Mul').addEventListener('click', function() {
    FirstNum = document.getElementById('PutNumber').value;
    document.getElementById('PutNumber').value = "";
    document.getElementById('btn-Eq').addEventListener('click', function() {
        const SecNum = document.getElementById('PutNumber').value;        
        const TotNum = parseInt(FirstNum) * parseInt(SecNum);
        document.getElementById('PutNumber').value = TotNum;
    })
})

document.getElementById('btn-Div').addEventListener('click', function() {
    FirstNum = document.getElementById('PutNumber').value;
    document.getElementById('PutNumber').value = "";
    document.getElementById('btn-Eq').addEventListener('click', function() {
        const SecNum = document.getElementById('PutNumber').value;        
        const TotNum = parseInt(FirstNum) / parseInt(SecNum);
        document.getElementById('PutNumber').value = TotNum;
    })
})



