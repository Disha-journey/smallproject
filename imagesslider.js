$(document).ready(function(){        
    i=0;
    function time(){
        images=["animals/animal1.jpeg","animals/animal2.jpeg","animals/animal3.jpeg","animals/animal4.jpeg","animals/animal5.jpeg","animals/animal6.jpeg"]
        $("img").attr("src",images[i]);
        i=(i+1)%images.length; 
    }
    setInterval(time,1500); 
 
})
function theme(){
    x=document.getElementById("themecolorChange").value;
    document.getElementById("body").style.backgroundColor=x;
    console.log(x);
    if(x=="black"){
        document.getElementById("colour1").style.color="white";
        document.getElementById("colour2").style.color="white";
    }
    else{
        document.getElementById("colour1").style.color="black";
        document.getElementById("colour2").style.color="black";
    }
}

