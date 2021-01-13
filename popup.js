//바로가기 객체, 바로가기 수에 따라 변동
var homepage = {
    URL : "https://www.ajou.ac.kr/kr/index.do",
    IMG : "images/icon/Ajou_homepage.png"
}
var portal = {
    URL : "https://mportal.ajou.ac.kr/main.do",
    IMG : "images/icon/Ajou_portal.png"
}
var univService = {
    URL : "https://mhaksa.ajou.ac.kr:30443",
    IMG : "images/icon/Ajou_univService.png"
}
var blackborad = {
    URL : "https://eclass2.ajou.ac.kr",
    IMG : "images/icon/Ajou_blackboard.png"
}
var checkBook = {
    URL : "https://attend.ajou.ac.kr/eams/student/main",
    IMG : "images/icon/Ajou_checkBook.png"
}
var calendar = {
    URL : "https://www.ajou.ac.kr/kr/bachelor/schedule.do",
    IMG : "images/icon/Ajou_calendar.png"
}
var library = {
    URL : "https://library.ajou.ac.kr",
    IMG : "images/icon/Ajou_library.png"
}
var department = {
    URL : "https://www.ajou.ac.kr/kr/admission/list01.do",
    IMG : "images/icon/Ajou_department.png"
}
var sitemap = {
    URL : "https://www.ajou.ac.kr/kr/guide/sitemap.do",
    IMG : "images/icon/Ajou_sitemap.png"
}
var notice = {
    URL : "https://www.ajou.ac.kr/kr/ajou/notice.do",
    IMG : "images/icon/Ajou_notice.png"
}
var applyClass = {
    URL : "http://sugang.ajou.ac.kr/",
    IMG : "images/icon/Ajou_applyClass.png"
}
var curriculum = {
    URL : "https://www.ajou.ac.kr/kr/bachelor/handbook2019.do",
    IMG : "images/icon/Ajou_curriculum.png"
}

//메인 함수, DOM 로드되면 실행
document.addEventListener('DOMContentLoaded', function(){
    mouseSecurity();
    enterSearch();
    buttonSearch();
    changeColor();
    changeLink();
    printDate();
});

//마우스 우클릭 및 드래그 방지 함수
function mouseSecurity(){
    var main = document.getElementById("main");
    main.addEventListener("contextmenu", function(event){
        event.preventDefault();
    });
    main.addEventListener("dragstart", function(event){
        event.preventDefault();
    });
}

//엔터 검색 함수
function enterSearch(){
    var input = document.getElementById("searchInput");
    input.addEventListener("keypress", function(event) {
        if (event.keyCode == 13) {
            var text = document.getElementById("searchInput").value;
            console.log(text);
            search(text);
        }
    });
}

//버튼 검색 함수
function buttonSearch(){
    var button = document.getElementById("searchButton");   
    button.addEventListener("click", function(){
        var text = document.getElementById("searchInput").value;
        search(text);
    });
}

//검색 함수
function search(text){
    var link = "https://www.ajou.ac.kr/kr/search.do?qt=" + text;
    window.open(link);
}

//다크모드 설정 함수
function changeColor(){
    chrome.storage.sync.get('Color', function(data) {
        console.log(data.Color);
        var main = document.getElementById("main");

        if(data.Color == "black"){
            main.style.backgroundColor = "#35363A";
            main.style.filter = "invert(100%) contrast(80%) saturate(120%) brightness(120%)";
        }
    });
}

//바로가기 변경 함수
function changeLink(){
    chrome.storage.sync.get('Link1', function(data) {
        connectionLink(document.getElementById('item-link-1'), data.Link1);
    });
    chrome.storage.sync.get('Link2', function(data) {
        connectionLink(document.getElementById('item-link-2'), data.Link2);
    });
    chrome.storage.sync.get('Link3', function(data) {
        connectionLink(document.getElementById('item-link-3'), data.Link3)
    });
    chrome.storage.sync.get('Link4', function(data) {
        connectionLink(document.getElementById('item-link-4'), data.Link4);
    });
    chrome.storage.sync.get('Link5', function(data) {
        connectionLink(document.getElementById('item-link-5'), data.Link5);
    });
    chrome.storage.sync.get('Link6', function(data) {
        connectionLink(document.getElementById('item-link-6'), data.Link6)
    });
    chrome.storage.sync.get('Link7', function(data) {
        connectionLink(document.getElementById('item-link-7'), data.Link7);
    });
    chrome.storage.sync.get('Link8', function(data) {
        connectionLink(document.getElementById('item-link-8'), data.Link8);
    });
    chrome.storage.sync.get('Link9', function(data) {
        connectionLink(document.getElementById('item-link-9'), data.Link9)
    });
}

//바로가기 객체 연결 함수, 바로가기 수에 따라 변동
function connectionLink(itemLink, Link){
    switch(Link){
        case "홈페이지": 
            var URL = homepage.URL; 
            var IMG = homepage.IMG; 
            break;
        case "포탈": 
            var URL = portal.URL; 
            var IMG = portal.IMG; 
            break;
        case "학사서비스": 
            var URL = univService.URL; 
            var IMG = univService.IMG; 
            break;
        case "아주Bb": 
            var URL = blackborad.URL; 
            var IMG = blackborad.IMG; 
            break;
        case "전자출석부": 
            var URL = checkBook.URL; 
            var IMG = checkBook.IMG; 
            break;
        case "학사일정":
            var URL = calendar.URL; 
            var IMG = calendar.IMG; 
            break;
        case "중앙도서관":
            var URL = library.URL; 
            var IMG = library.IMG; 
            break;
        case "학과 홈페이지":
            var URL = department.URL; 
            var IMG = department.IMG; 
            break;
        case "사이트맵":
            var URL = sitemap.URL; 
            var IMG = sitemap.IMG; 
            break;
        case "공지사항":
            var URL = notice.URL; 
            var IMG = notice.IMG; 
            break;
        case "수강신청":
            var URL = applyClass.URL; 
            var IMG = applyClass.IMG; 
            break;
        case "요람":
            var URL = curriculum.URL; 
            var IMG = curriculum.IMG; 
            break;
        default:
            break;
    }

    itemLink.innerHTML = '<a href=' + URL + ' target="_blank"><img src='+ IMG + '><p>' + Link + '</p></a>';
}

//날짜 출력 함수
function printDate(){
    let today = new Date();   
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    if (month < 10){
        month = "0" + month;
    }

    if (date < 10){
        date = "0" + date;
    }

    var dayText = year + "-" + month + "-" + date;
    document.getElementById("day").innerHTML = dayText;
}