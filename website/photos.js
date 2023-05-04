// fonction bar de recherche
function search(){
    var input, filter, ul, li, i, a, txtvalue;
    input =  document.getElementById("recherche");
    filter = input.value.toUpperCase();
    ul = document.getElementById("photos");
    li = ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++){
        a = li[i].getElementsByTagName("a")[0];
        txtvalue = a.textContent || a.innerText;
        if(txtvalue.toUpperCase().indexOf(filter)> -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}

function dico(){
    // var list_a, list_f, list_k, list_p, list_u, i;
    // list_a = document.getElementById("A");
    // list_f = document.getElementById("F");
    // list_k = document.getElementById("K");
    // list_p = document.getElementById("P");
    // list_u = document.getElementById("U");


    // document.getElementById("A").style.display='';
    // document.getElementById("F").style.display='';
    // document.getElementById("K").style.display='';
    // document.getElementById("P").style.display='';
    // document.getElementById("U").style.display='';
    //
    document.getElementById("A").style.display='none';
    document.getElementById("F").style.display='none';
    document.getElementById("K").style.display='none';
    document.getElementById("P").style.display='none';
    document.getElementById("U").style.display='none';
}