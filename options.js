const itemColor = ["white", "black"];
const itemLink = ["홈페이지", "포탈", "학사서비스", "아주Bb", "전자출석부", "학사일정", "중앙도서관", "학과 홈페이지", "사이트맵", "공지사항", "수강신청", "요람"];

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
            switch(num) {
                case 1: 
                    chrome.storage.sync.set({Link1: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 2: 
                    chrome.storage.sync.set({Link2: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 3: 
                    chrome.storage.sync.set({Link3: item}, function() { 
                        console.log(item); 
                    });
                     break;
                case 4: 
                    chrome.storage.sync.set({Link4: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 5: 
                    chrome.storage.sync.set({Link5: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 6: 
                    chrome.storage.sync.set({Link6: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 7: 
                    chrome.storage.sync.set({Link7: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 8: 
                    chrome.storage.sync.set({Link8: item}, function() { 
                        console.log(item); }); 
                    break;
                case 9: 
                    chrome.storage.sync.set({Link9: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                default :
                    break;
            }
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

