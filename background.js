chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({Color : "white", Department : "나의 학과", Link1: "홈페이지", Link2: "포탈", Link3: "학사서비스", Link4: "학사일정", Link5: "아주Bb", Link6: "전자출석부", Link7: "요람", Link8: "에브리타임", Link9: "공지사항", Link10: "중앙도서관", Link11: "아주허브", Link12: "나의 학과"}, function() {
        console.log();
    });
});