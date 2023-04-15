var que=[]; // global variable
function calculate()
{
        var i=0; //local variable
        var name=document.getElementById("degree").value;
        que.push(name);
        document.getElementById("print").innerHTML=que.toString();
}


function calculate1()
{
        var total=document.getElementById("marks").value;
        var youget=document.getElementById("get").value;
        var pers=parseInt(youget)/parseInt(total)*100;
       
        document.getElementById("per").value=pers;
}

function calculate3(){
        var first =document.getElementById("fname").value;
        var middle =document.getElementById("mname").value;
        var last =document.getElementById("lname").value;
        var male =document.getElementById("mm").value;
        var female =document.getElementById("ff").value;
        var address =document.getElementById("add").value;
        var landmark =document.getElementById("lmark").value;
        var pincode =document.getElementById("pin").value;
        var city =document.getElementById("ci").value;
        var qualification =document.getElementById("degree").value;
        var totalmarks =document.getElementById("marks").value;
        var youget =document.getElementById("get").value;
        var percentage =document.getElementById("per").value;


       var checkmale = document.getElementById("mm").checked;
       var checkfmale = document.getElementById("ff").checked;
       if(!checkmale && !checkfmale){
                document.getElementById("gendererror").innerHTML=" Please select gender ";
       }

        if(first=="" )// middle==("")||last==("")||male==("")||female==("")||address==("")||landmark==("")||pincode==("")||city==("")||qualification==("")||totalmarks==("")||youget==("")||percentage==(""))
        {
                document.getElementById("firstname").innerHTML=" Please Enter firstname ";
        }
        if (middle==""){
                document.getElementById("middlename").innerHTML=" Please Enter Middlename ";

        }
        if (last==""){
                document.getElementById("lastname").innerHTML=" Please Enter Lastname ";

        }

       
        if (address==""){
                document.getElementById("address").innerHTML=" Please Enter address ";

        }
        if (landmark==""){
                document.getElementById("Landmark").innerHTML=" Please Enter landmark ";

        }
        if (pincode==""){
                document.getElementById("Pincode").innerHTML=" Please Enter Pincode ";

        }
        if (city==""){
                document.getElementById("city").innerHTML=" Please Enter City ";

        }
        if (qualification==""){
                document.getElementById("Qualification").innerHTML=" Please Enter qualification ";

        }
        if (totalmarks==""){
                document.getElementById("totalmarks").innerHTML=" Please Enter marks ";

        }
        if (youget==""){
                document.getElementById("youget").innerHTML=" Please Enter marks you get ";

        }
       
}