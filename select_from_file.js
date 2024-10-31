function select_ariism() {
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "http://tothemax123.github.io/assests/ariisms.txt", true);
    txtFile.onload = function() {
      if (txtFile.readyState === 4 && txtFile.status == 200) {
         allText = txtFile.responseText;
      }
    document.getElementById('main_content').innerHTML = allText;
    }
}