chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({Color : "white", Department : "나의 학과", Link1: "홈페이지", Link2: "포탈", Link3: "학사서비스", Link4: "아주Bb", Link5: "전자출석부", Link6: "학사일정", Link7: "공지사항", Link8: "요람", Link9: "나의 학과"}, function() {
        console.log();
    });
});