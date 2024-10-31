function select_ariism() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let full_text = this.responseText;
        let phrase_array = full_text.split("\n");
        let phrase = phrase_array[0];
        document.getElementById("main_content").innerHTML = phrase;
    }
    xhttp.open("GET", "https://tothemax123.github.io/ari-birthday-2024/assets/ariisms.txt", true);
    xhttp.send();
}