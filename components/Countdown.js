export default function Countdown() {
    var countDownDate = new Date("Feb 1, 2023").getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Happy Launch Day!!!";
    }
    }, 1000);
    return(
        <div className="text-center">
            <h2 className="font-bold text-lg">Countdown till spade launch day {"(Febuary 1st, 2023)"}</h2>
            <div id="countdown" className="text-lg font-bold">0d: 0h: 0m: 0s</div>
        </div>
    )
}