document.addEventListener('DOMContentLoaded', function(){
    var input = document.getElementById("searchInput");
    input.addEventListener("keypress", function(event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            var text = document.getElementById("searchInput").value;
            search(text);
        }
    });
    
    var button = document.getElementById("searchButton");   
    button.addEventListener("click", function(){
        var text = document.getElementById("searchInput").value;
        search(text);
    });
});

function search(text){
    var link = "https://www.ajou.ac.kr/kr/search.do?qt=" + text;
    window.open(link);
}