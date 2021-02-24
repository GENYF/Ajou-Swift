const itemColorList = ["white", "black"];
const itemLinkList =  ["홈페이지", "포탈", "학사서비스", "아주Bb", "전자출석부", "학사일정", "중앙도서관", "학과 홈페이지", "나의 학과", "사이트맵", "공지사항", "수강신청", "요람", "기숙사", "교내식당", "대학기구", "교내 전화번호", "대학일자리센터", "LINC+ 사업단", "수학 웹과제", "과학 웹과제", "에브리타임", "과제 카페"];
const itemDepartmentList = ["기계공학과", "산업공학과", "화학공학과", "신소재공학과", "응용화학생명공학과", "환경안전공학과", "건설시스템공학과", "교통시스템공학과", "건축학과", "융합시스템공학과", "전자공학과", "소프트웨어학과", "사이버보안학과", "미디어학과", "국방디지털융합학과", "인공지능융합학과", "수학과", "물리학과", "화학과", "생명과학과", "경영학과", "e-비즈니스학과", "금융공학과", "글로벌경영학과", "국어국문학과", "영어영문학과", "불어불문학과", "사학과", "문화콘텐츠학과", "경제학과", "행정학과", "심리학과", "사회학과", "정치외교학과", "스포츠레저학과", "의학과", "간호학과", "약학과", "다산학부대학", "국제학부"];

//json 데이터에서 LinkList 파싱, 구현 예정
/* 
fetch(chrome.extension.getURL('../data/page.json'))
.then((resp) => resp.json())
.then(function (jsonData) {
    console.log(Object.keys(jsonData));
});
*/

/*메인 함수, 윈도우가 로드되면 실행*/
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
    button.textContent = "변경";

    //버튼 클릭시 학과 설정 동기화
    button.addEventListener('click', function() {
        let data = selectElement.options[selectElement.selectedIndex].value;
        
        chrome.storage.sync.set({Department: data}, function() { 
        }); 
    });

    formElement.appendChild(button);

    /*바로가기 선택 옵션 생성 기능*/

    for (let i = 1; i <= 9; i++){
        itemLinkOptions(document.getElementById(`button-link-${i}`), itemLinkList, i);
    }
});

/*바로가기 선택 옵션 생성 함수*/
function itemLinkOptions(buttonLinkElement, itemLinkList, num) {
    for (let item of itemLinkList) {
        let button = document.createElement('button');
        button.textContent = item

        //버튼 클릭시 바로가기 설정 동기화
        button.addEventListener('click', function() {
            chrome.storage.sync.set({[`Link${num}`] : item}, function() { 
            }); 
        });

        buttonLinkElement.appendChild(button);
    }
}