console.log("app started");

(function(){
    function greetings(){
        console.log("welcome, ruchit");
    }
    window.addEventListener('load', greetings);
}());

var count=0;
function submit(){
    if(count<5){
        var form = document.createElement('form');
        //textBox
        var tbox= document.createElement('input');
        tbox.setAttribute('type', 'text');
        tbox.setAttribute('name', 'name')
        tbox.setAttribute('placeholder','Enter your name...')
        form.append(tbox);
        
        document.getElementById('form').append(form);
    }
    else{
        alert("opps, You can't produce more than 5 elements!");
    }
    count++;
}