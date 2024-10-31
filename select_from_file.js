function select_ariism() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let full_text = this.responseText;
        let phrase_array = full_text.split("\n");
        let phrase = phrase_array[Math.floor(Math.random() * (phrase_array.length - 1))];
        document.getElementById("main_content").innerHTML = phrase;
    }
    xhttp.open("GET", "https://tothemax123.github.io/ari-birthday-2024/assets/ariisms.txt", true);
    xhttp.send();
}

function select_maxism() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let full_text = this.responseText;
        let phrase_array = full_text.split("\n");
        let phrase = phrase_array[Math.floor(Math.random() * (phrase_array.length - 1))];
        document.getElementById("main_content").innerHTML = phrase;
    }
    xhttp.open("GET", "https://tothemax123.github.io/ari-birthday-2024/assets/maxisms.txt", true);
    xhttp.send();
}

function select_date_idea() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let full_text = this.responseText;
        let phrase_array = full_text.split("\n");
        let phrase = phrase_array[Math.floor(Math.random() * (phrase_array.length - 1))];
        document.getElementById("main_content").innerHTML = "We should " + phrase + "!";
    }
    xhttp.open("GET", "https://tothemax123.github.io/ari-birthday-2024/assets/date_ideas.txt", true);
    xhttp.send();
}

function select_compliment() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let full_text = this.responseText;
        let phrase_array = full_text.split("\n");
        let phrase = phrase_array[Math.floor(Math.random() * (phrase_array.length - 1))];
        document.getElementById("main_content").innerHTML = phrase;
    }
    xhttp.open("GET", "https://tothemax123.github.io/ari-birthday-2024/assets/compliments.txt", true);
    xhttp.send();
}