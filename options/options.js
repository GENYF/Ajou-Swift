const itemColor = ["white", "black"];
const itemLink = ["홈페이지", "포탈", "학사서비스", "아주Bb", "전자출석부", "학사일정", "중앙도서관", "학과 홈페이지", "사이트맵", "공지사항", "수강신청", "요람", "대학기구", "교내 전화번호", "대학일자리센터", "LINC+ 사업단", "수학 웹과제", "과학 웹과제"];
const itemDepartment = ["소프트웨어학과", "국방디지털융합과", "미디어학과"];

window.onload = function(){
    itemColorOptions(document.getElementById('button-color'), itemColor);

    itemDepartmentOptions(document.getElementById('select-department'), document.getElementById('button-department'), itemDepartment);

    for (let i = 1; i <= 9; i++){
        itemLinkOptions(document.getElementById(`button-link-${i}`), itemLink, i);
    }
}

function itemColorOptions(page, itemColor) {
    for (let item of itemColor) {
        let button = document.createElement('button');
        button.textContent = item;
        button.addEventListener('click', function() {
            chrome.storage.sync.set({Color: item}, function() { 
                console.log(item); 
            }); 
        });

        page.appendChild(button);
    }
}

function itemDepartmentOptions(selectPage, buttonPage, itemDepartment){
    for (let item of itemDepartment) {
        var select = document.createElement('option');
        select.setAttribute('value', item);
        select.innerText = item;

        selectPage.appendChild(select);
    }

    let button = document.createElement('button');
    button.textContent = "제출";
    button.addEventListener('click', function() {
        let data = selectPage.options[selectPage.selectedIndex].value;
        
        chrome.storage.sync.set({Department: data}, function() { 
            console.log(data); 
        }); 
    });

    buttonPage.appendChild(button);
}

function itemLinkOptions(page, itemLink, num) {
    for (let item of itemLink) {
        let button = document.createElement('button');
        button.textContent = item
        button.addEventListener('click', function() {
            chrome.storage.sync.set({[`Link${num}`] : item}, function() { 
                console.log(item); 
            }); 
        });

        page.appendChild(button);
    }
}


