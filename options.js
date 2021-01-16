const itemColor = ["white", "black"];
const itemLink = ["홈페이지", "포탈", "학사서비스", "아주Bb", "전자출석부", "학사일정", "중앙도서관", "학과 홈페이지", "사이트맵", "공지사항", "수강신청", "요람", "대학기구", "교내 전화번호", "대학일자리센터", "LINC+ 사업단", "수학 웹과제", "과학 웹과제"];

function ItemColorOptions(page, itemColor) {
    for (let item of itemColor) {
        let button = document.createElement('button');
        button.textContent = item
        button.addEventListener('click', function() {
            chrome.storage.sync.set({Color: item}, function() { 
                console.log(item); 
            }); 
        });
    page.appendChild(button);
    }
}

function ItemLinkOptions(page, itemLink, num) {
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

window.onload = function(){
    ItemColorOptions(document.getElementById('button-color'), itemColor);

    for (let i = 1; i <= 9; i++){
        ItemLinkOptions(document.getElementById(`button-link-${i}`), itemLink, i);
    }
}

