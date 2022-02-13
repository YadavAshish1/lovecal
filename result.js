
function calculate() {
    
    var x = document.getElementById('me').value;
    var y = document.getElementById('my_love').value;
    if (x == "" && y == "") {
        alert("please enter your name & lover's name");
        // return false;
    }
    else if (x == "") {
        alert("please enter your name too");
        // return false;
    }
    else if (y == "") {
        alert("please enter your lover's name too")
        // return false;
    }
    
    else {
        var n = Math.random() * 100;
        // n = n * 100;
        n = Math.floor(n);
        
        var q = document.createElement("IMG");
        q.setAttribute("src", "heart (1).png");
        q.setAttribute("width", "300");
        q.setAttribute("height", "228");
        q.setAttribute("alt", "The Pulpit Rock");
        
        document.getElementById('img1').appendChild(q);
        document.getElementById('first').innerHTML = x;
        document.getElementById('p2').innerHTML = y;
        document.getElementById('my_result').innerHTML = n + "%";

        calculate = function(){}
        if(n < 30){
            document.getElementById('content').innerHTML = "Your love is too weak. there is very little chance of loving each other.";
        }
        else if(n > 30 && n < 60){
            document.getElementById("content").innerHTML = "Your love is just begining. feelings are arising.";
        }
        else if(n > 60 && n < 90){
             document.getElementById("content").innerHTML = "your love is going towards permanence. You need to give more time to each other and express your feelings.";
        }
        else{
            document.getElementById('content').innerHTML = "Your love is too strong. you love each other without any compromise."
        }

    }
}



