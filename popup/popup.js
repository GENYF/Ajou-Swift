//메인 함수, DOM 로드되면 실행
window.addEventListener('DOMContentLoaded', function(){
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
            let query = document.getElementById('searchInput').value;
            console.log(query);
            search(query);
        }
    });
}

//버튼 검색 함수
function buttonSearch(){
    let button = document.getElementById('searchButton');   

    button.addEventListener('click', function(){
        let query = document.getElementById('searchInput').value;
        search(query);
    });
}

//검색 함수
function search(query){
    let link = "https://www.ajou.ac.kr/kr/search.do?qt=" + query;
    window.open(link);
}

//다크모드 설정 함수
function changeColor(){
    //크롬 스토리지에 동기화된 사용자 바로가기 데이터 가져오기
    chrome.storage.sync.get('Color', function(data) {
        
        //다크모드 설정
        if(data.Color == "black"){
            let main = document.getElementById('main');

            main.style.backgroundColor = "#35363A";
            main.style.filter = "invert(100%) contrast(80%) saturate(120%) brightness(120%)";
        }
    });
}

//바로가기 생성 및 변경 함수
function changeLink() {
    //9개의 바로가기 생성
    for (let i = 1; i <= 9; i++) {
        //크롬 스토리지에 동기화된 사용자 바로가기 데이터 가져오기
        chrome.storage.sync.get(`Link${i}`, function(data) {
            //json에서 Ajax로 페이지 이미지와 링크 불러오기
            let itemLink = document.getElementById(`item-link-${i}`);
            let Link = data[`Link${i}`];

            fetch(chrome.extension.getURL("../data/page.json"))
            .then((response) => response.json())
            .then(function (jsonData) {
                let URL = jsonData[`${Link}`].URL; 
                let IMG = jsonData[`${Link}`].IMG;

                //페이지 클릭 이벤트 추가 
                itemLink.addEventListener('click',function(){
                    window.open(URL);
                });
                itemLink.style.cursor = "pointer";

                //이미지 생성
                let imgTag = document.createElement('img');
                imgTag.setAttribute('src', IMG);
                itemLink.appendChild(imgTag);

                //텍스트 생성
                let pTag = document.createElement('p');
                pTag.textContent = Link;
                itemLink.appendChild(pTag);
            });
        });
    }
}

//날짜 및 일정 출력 함수
function printSchedule(){
    //페이지 클릭 이벤트 추가
    let itemSchedule = document.getElementById('item-schedule');

    itemSchedule.addEventListener('click',function(){
        window.open("https://www.ajou.ac.kr/kr/bachelor/schedule.do");
    });
    itemSchedule.style.cursor = "pointer";

    //json에서 Ajax로 학사일정 불러오기
    let schedule = document.getElementById('schedule');

    fetch(chrome.extension.getURL("../data/schedule.json"))
    .then((response) => response.json())
    .then(function (jsonData) {
        let scheduleText = jsonData[`${dayText}`];

        if(scheduleText == undefined){
            schedule.textContent = "학사일정이 없습니다.";
        }
        else{
            schedule.textContent = scheduleText;
        }
    });

    //날짜 불러오기
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
}