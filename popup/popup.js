//메인 함수, DOM 로드되면 실행
document.addEventListener('DOMContentLoaded', function(){
    mouseSecurity();
    enterSearch();
    buttonSearch();
    changeColor();
    changeLink();
    printSchedule();
});

//마우스 우클릭 및 드래그 방지 함수
function mouseSecurity(){
    let main = document.getElementById('main');
    main.addEventListener('contextmenu', function(event){
        event.preventDefault();
    });
    main.addEventListener('dragstart', function(event){
        event.preventDefault();
    });
}

//엔터 검색 함수
function enterSearch(){
    let input = document.getElementById('searchInput');
    input.addEventListener('keypress', function(event) {
        if (event.keyCode == 13) {
            let text = document.getElementById('searchInput').value;
            console.log(text);
            search(text);
        }
    });
}

//버튼 검색 함수
function buttonSearch(){
    let button = document.getElementById('searchButton');   
    button.addEventListener('click', function(){
        let text = document.getElementById('searchInput').value;
        search(text);
    });
}

//검색 함수
function search(text){
    let link = "https://www.ajou.ac.kr/kr/search.do?qt=" + text;
    window.open(link);
}

//다크모드 설정 함수
function changeColor(){
    chrome.storage.sync.get('Color', function(data) {
        let main = document.getElementById('main');

        if(data.Color == "black"){
            main.style.backgroundColor = "#35363A";
            main.style.filter = "invert(100%) contrast(80%) saturate(120%) brightness(120%)";
        }
    });
}

//바로가기 생성 및 변경 함수, innerHTML 보안상 수정 필요
function changeLink() {
    for (let i = 1; i <= 9; i++) {
      chrome.storage.sync.get(`Link${i}`, function(data) {
        let itemLink = document.getElementById(`item-link-${i}`);
        let Link = data[`Link${i}`];

        fetch(chrome.extension.getURL("../data/page.json"))
        .then((response) => response.json())
        .then(function (jsonData) {
            let URL = jsonData[`${Link}`].URL; 
            let IMG = jsonData[`${Link}`].IMG;

            itemLink.innerHTML = '<a href=' + URL + ' target="_blank"><img src='+ IMG + '><p>' + Link + '</p></a>'; 
            
            //a 태그 삭제 및 addEventListener 구현 필요
            /*
            let aTag = document.createElement('a');
            aTag.setAttribute('herf', URL);
            aTag.setAttribute('target', '_blank');
            itemLink.appendChild(aTag);

            let imgTag = document.createElement('img');
            imgTag.setAttribute('src', IMG);
            aTag.appendChild(imgTag);

            let pTag = document.createElement('p');
            pTag.textContent = Link;
            aTag.appendChild(pTag);
            */
        });
      });
    }
}

//날짜 및 일정 출력 함수
function printSchedule(){
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

    let dayText = year + "-" + month + "-" + date;
    document.getElementById('day').textContent = dayText;

    fetch(chrome.extension.getURL("../data/schedule.json"))
    .then((response) => response.json())
    .then(function (jsonData) {
        let scheduleText = jsonData[`${dayText}`];
        if(scheduleText == undefined){
            document.getElementById('schedule').textContent = "학사일정이 없습니다.";
        }
        else{
            document.getElementById('schedule').textContent = scheduleText;
        }
    });
}