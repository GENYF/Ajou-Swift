const itemColor = ["white", "black"];
const itemLink =  ["홈페이지", "포탈", "학사서비스", "아주Bb", "전자출석부", "학사일정", "중앙도서관", "학과 홈페이지", "나의 학과", "사이트맵", "공지사항", "수강신청", "요람", "대학기구", "교내 전화번호", "대학일자리센터", "LINC+ 사업단", "수학 웹과제", "과학 웹과제"];
const itemDepartment = ["전자공학과", "소프트웨어학과", "사이버보안학과", "국방디지털융합학과", "미디어학과"];

/* json 데이터에서 itemList 파싱, 구현 예정
fetch(chrome.extension.getURL('../data/page.json'))
.then((resp) => resp.json())
.then(function (jsonData) {
    console.log(Object.keys(jsonData));
});
*/

window.addEventListener('load', function(){
    itemColorOptions(document.getElementById('button-color'), itemColor);
    itemDepartmentOptions(document.getElementById('form-department'), document.getElementById('select-department'), itemDepartment);

    for (let i = 1; i <= 9; i++){
        itemLinkOptions(document.getElementById(`button-link-${i}`), itemLink, i);
    }
});

//테마 선택 옵션 생성
function itemColorOptions(element, itemColor) {
    for (let item of itemColor) {
        let button = document.createElement('button');
        button.textContent = item;

        //버튼 클릭시 테마 설정 동기화
        button.addEventListener('click', function() {
            chrome.storage.sync.set({Color: item}, function() { 
                console.log(item); 
            }); 
        });

        element.appendChild(button);
    }
}

//학과 선택 옵션 생성
function itemDepartmentOptions(formElement, selectElement, itemDepartment){
    for (let item of itemDepartment) {
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
}

//바로가기 선택 옵션 생성
function itemLinkOptions(element, itemLink, num) {
    for (let item of itemLink) {
        let button = document.createElement('button');
        button.textContent = item

        //버튼 클릭시 바로가기 설정 동기화
        button.addEventListener('click', function() {
            chrome.storage.sync.set({[`Link${num}`] : item}, function() { 
                console.log(item); 
            }); 
        });

        element.appendChild(button);
    }
}


