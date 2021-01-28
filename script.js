function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal == null || principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus(); //focus on amount field after the alert 
    } else {
        principal = parseInt(principal); //to convert principal into integer
        rate = parseFloat(rate); //to convert rate into float
        years = parseInt(years); //to convert years into integer
        var interest = (principal * years * rate) / 100; //calculating the interest
        years = 2020 + years; //"No. of years" is converted to actual year
        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>at an interest rate of <mark>" + rate +
            "%</mark>.<br/>You will receive an amount of <mark>" + interest + "</mark>,<br/>in the year <mark>" + years + "</mark><br/>"; //result in html
    }
}

function showRate(x) {
    document.getElementById("intRate").innerHTML = x; //dynamically shows the rate beside the slider
}
