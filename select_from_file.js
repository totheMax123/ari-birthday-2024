function select_ariism() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let full_text = this.responseText;
        let phrase = full_text.slice(3);
        document.getElementById("main_content").innerHTML = phrase;
    }
    xhttp.open("GET", "https://tothemax123.github.io/ari-birthday-2024/assets/ariisms.txt", true);
    xhttp.send();
}