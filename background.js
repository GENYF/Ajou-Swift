chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({Link1: "홈페이지", Link2: "포탈", Link3: "학사서비스", Link4: "아주Bb", Link5: "전자출석부", Link6: "학사일정", Link7: "중앙도서관", Link8: "학과 홈페이지", Link9: "사이트맵"}, function() {
        console.log();
    });
});