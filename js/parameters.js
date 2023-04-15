function calculate(type)
{
    var num = document.getElementById("txtnum1").value;
    var num1 = document.getElementById("txtnum2").value;
    if(type=="plus")
    {
        var total=parseInt(num)+parseInt(num1);
    }
    else if(type=="minus")
    {
        var total=parseInt(num)- parseInt(num1); 
    }
    else if(type=="multi")
    {
        var total=parseInt(num)* parseInt(num1); 
    }
    else if(type=="div")
    {
        var total=parseInt(num)/ parseInt(num1); 
    }
    document.getElementById("total").innerHTML=total;
}

function demo(a,b)
{
    var t = demo2(a,b);
    alert("T : "+t);
}

function demo2(x,y)
{
    //alert("Demo 2 : "+(x+y));
   // var total =  x + y;
    return ( x + y);
}


function demo3(txt)
{
    alert("Demo 3 : "+txt);
}