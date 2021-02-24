const itemColorList = ["white", "black"];
const itemLinkList =  ["홈페이지", "포탈", "학사서비스", "아주Bb", "전자출석부", "학사일정", "중앙도서관", "학과 홈페이지", "나의 학과", "사이트맵", "공지사항", "수강신청", "요람", "기숙사", "교내식당", "대학기구", "교내 전화번호", "대학일자리센터", "LINC+ 사업단", "수학 웹과제", "과학 웹과제", "에브리타임"];
const itemDepartmentList = ["전자공학과", "소프트웨어학과", "사이버보안학과", "국방디지털융합학과", "미디어학과"];

//json 데이터에서 LinkList 파싱, 구현 예정
/* 
fetch(chrome.extension.getURL('../data/page.json'))
.then((resp) => resp.json())
.then(function (jsonData) {
    console.log(Object.keys(jsonData));
});
*/

//윈도우가 로드되면 실행
window.addEventListener('load', function(){
    
    /*테마 선택 옵션 생성 기능*/

    let buttonColorElement = document.getElementById('button-color')

    //테마 선택 버튼 생성
    for (let item of itemColorList) {
        let button = document.createElement('button');
        button.textContent = item;

        //버튼 클릭시 테마 설정 동기화
        button.addEventListener('click', function() {
            chrome.storage.sync.set({Color: item}, function() { 
                console.log(item); 
            }); 
        });

        buttonColorElement.appendChild(button);
    }

    /*학과 선택 옵션 생성 기능*/

    let formElement = document.getElementById('form-department');
    let selectElement = document.getElementById('select-department')

    //학과 선택 버튼 생성
    for (let item of itemDepartmentList) {
        var select = document.createElement('option');
        select.setAttribute('value', item);
        select.textContent = item;

        selectElement.appendChild(select);
    }

    let button = document.createElement('button');

    button.id = "button-department";
    button.textContent = "제출";

    //버튼 클릭시 학과 설정 동기화
    button.addEventListener('click', function() {
        let data = selectElement.options[selectElement.selectedIndex].value;
        
        chrome.storage.sync.set({Department: data}, function() { 
            console.log(data); 
        }); 
    });

    formElement.appendChild(button);

    /*바로가기 선택 옵션 생성 기능*/

    for (let i = 1; i <= 9; i++){
        itemLinkOptions(document.getElementById(`button-link-${i}`), itemLinkList, i);
    }
});

//바로가기 선택 옵션 생성 함수
function itemLinkOptions(buttonLinkElement, itemLinkList, num) {
    for (let item of itemLinkList) {
        let button = document.createElement('button');
        button.textContent = item

        //버튼 클릭시 바로가기 설정 동기화
        button.addEventListener('click', function() {
            chrome.storage.sync.set({[`Link${num}`] : item}, function() { 
                console.log(item); 
            }); 
        });

        buttonLinkElement.appendChild(button);
    }
}