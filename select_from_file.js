function select_ariism() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "https://tothemax123.github.io/ari-birthday-2024/assets/ariisms.txt", true);
    xhttp.send();
}