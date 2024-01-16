
document.getElementById("answer").onclick=function(){
    let first_number = parseFloat(document.getElementById("first_number").value);
    let last_number = parseFloat(document.getElementById("last_number").value);

    let add=document.getElementById("add").value;
    let sub=document.getElementById("sub").value;
    let mul=document.getElementById("mul").value;
    let div=document.getElementById("div").value;
    let result;

    if(add){
      result=first_number+last_number
    }
    else if(sub){
        result=first_number-last_number
    }
    else if(mul){
        result=first_number*last_number
    }
    else if(div){
        result=first_number/last_number
    }

    document.getElementById("answers").innerHTML= "The answer is "+ result;
}