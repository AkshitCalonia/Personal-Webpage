document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sub').addEventListener('click', function(event) {
        let val = document.querySelector('#inp').value;
        if (val){
            document.getElementById('info').innerHTML = `You are just amazing, ${val}!`;
            document.getElementById('imgg').setAttribute("src", "https://gifdb.com/images/high/winking-animated-bear-5ggusjylzd25nk5r.gif");
        }
        else {
            alert("The input field can't be empty!");
        }
        event.preventDefault();
    });
});