document.addEventListener('DOMContentLoaded', function(){
    //마우스 우클릭 및 드래그 방지
    var main = document.getElementById("main");
    main.addEventListener("contextmenu", function(event){
        event.preventDefault();
    });
    main.addEventListener("dragstart", function(event){
        event.preventDefault();
    });

    //날짜 표시
    let today = new Date();   
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    var dayText = year + "/" + month + "/" + date;
    document.getElementById("day").innerHTML = dayText;

    //엔터로 검색
    var input = document.getElementById("searchInput");
    input.addEventListener("keypress", function(event) {
        if (event.keyCode == 13) {
            var text = document.getElementById("searchInput").value;
            console.log(text);
            search(text);
        }
    });

    //버튼으로 검색
    var button = document.getElementById("searchButton");   
    button.addEventListener("click", function(){
        var text = document.getElementById("searchInput").value;
        search(text);
    });
});

//검색 함수
function search(text){
    var link = "https://www.ajou.ac.kr/kr/search.do?qt=" + text;
    window.open(link);
}