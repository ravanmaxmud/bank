function calculate(){
    var valyuta =document.getElementById('valyuta').value
    var muddet =document.getElementById('Muddet').value
    var faiz =document.getElementById('faiz').value

    var result = (valyuta*faiz)/100
    var last =(parseFloat(result) + parseFloat(valyuta))/muddet
    var cavab = document.getElementById('cavab').innerHTML=last
}
function Focus(){
     document.getElementById('valu').style.transform='translateY(-21px)'
}
function Focus1(){
    document.getElementById('dur').style.transform='translateY(-21px)'
}
function Focus2(){
    document.getElementById('per').style.transform='translateY(-19px)'
}


function Blur1(){
    document.getElementById('valu').style.transform='translateY(0)'

}
function Blur2(){
    document.getElementById('dur').style.transform='translateY(0)'

}
function Blur3(){
    document.getElementById('per').style.transform='translateY(0)'

}
function BlurEx(){
    var valyutaex = document.getElementById('valyuta').value;

    if(valyutaex.toString().length==0){
        Blur1();
    }
}
function BulurCopu(){
    var valyutaCopu = document.getElementById('Muddet').value;

    if(valyutaCopu.toString().length==0){
        Blur2();
    }
}
function BulurEli(){
    var valyutaEli = document.getElementById('faiz').value;

    if(valyutaEli.toString().length==0){
        Blur3();
    }
}