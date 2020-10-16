function caculator(){
    //B1: Read input --> number 1 sign number2
    let number1, number2;   
    number1 = document.getElementById('id1').value;
    number2 = document.getElementById('id2').value;
    let sign = getSign();
    if(checkNumber(number1)==false||checkNumber(number2)==false){
        window.alert('Giá trị đã nhập không hợp lệ');
        return;
    }
    //When you don't input sign
    if(sign==-1){
        signAnnoucement();
        return;
    }
    //B2: check valiable
    let integer1 = parseFloat(number1);
    let integer2 = parseFloat(number2);
    //B3: Caculator
    let result;
    if(sign==0){
        result = integer1 + integer2;
    } else  if(sign==1){
        result = integer1 - integer2;
    }else  if(sign==2){
        result = integer1 * integer2;
    }else{
        result = integer1 / integer2;
    }
    //B4: return ans
    let p = document.getElementById('result');
    p.innerHTML = result;
    p.setAttribute('class','text-danger');
}
function signAnnoucement(){
    window.alert('Bạn chưa nhập phép tính');
}

function getSign(){
    let sign;
    for(i =0;i<4;i++){
        sign = document.getElementsByName('sign')[i].checked;
        if(sign ==true)
        return i;
    }
    return -1;
}

function checkNumber(str){
   let num = parseFloat(str);
   let str1 = num.toString();
   if(str === str1){
       return true;
   }
   return false;
}


function checkValid(num){
    let number;
    if(num==1){
         number = document.getElementById('id1').value;
        
    }else{
         number = document.getElementById('id2').value;
    }
    if(checkNumber(number)==false &&number !='')
    {
        annoucement(num);
    }else{
        hiddenAnnoucement(num);
    }
}
function annoucement(index){
    let annou = document.getElementById('annoucement');
    annou.setAttribute('class','ml-3');
    annou.setAttribute('class','text-danger');
    
    //set text
    let warning = document.getElementById('warning');
    let infor = warning.innerHTML;

    if(index==1){
        let str = ' Số Thứ Nhất';
        if(infor.includes(str)==false){
            warning.innerHTML+=str;
        }
    }else{
        let str = ' Số Thứ Hai';
        if(infor.includes(str)==false){
            warning.innerHTML+=str;
        }    
    }
}
function hiddenAnnoucement(number){
    let warning = document.getElementById('warning');
    let infor = warning.innerHTML;
   
    if(number==1){
        let str = ' Số Thứ Nhất';
        if(infor.includes(str)){
            infor= infor.replaceAll(str,'');
        }
    }else{
        let str = ' Số Thứ Hai';
        if(infor.includes(str)){
            infor= infor.replaceAll(str,'');
        }
    }
    if(infor==''){
        let annou = document.getElementById('annoucement');
        annou.setAttribute('class','invisible');
    }
    console.log(infor);
    warning.innerHTML = infor;
}
