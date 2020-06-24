var tabitems = document.getElementsByClassName('tab-item');
var tabcontent = document.getElementsByClassName('tab');

function currenttab(element){
    for(i=0; i<tabitems.length; i++){
        if(tabitems[i].id == element.id)
        {
            tabitems[i].style.color = "#fff";
            tabcontent[i].style.display = "inline-block";
            if(i!=0){
                document.getElementById("tab-1").style.color = "#999";
            }
        }
        else{
            tabitems[i].style.color = "#999";
            tabcontent[i].style.display = "none";
        }
    } 
}