if (document.querySelector(".AppHeader")) {
    document.querySelector(".AppHeader").style.display='none';
};

if (document.querySelector(".GlobalSideBar")) {
    document.querySelector(".GlobalSideBar").style.display='none';
};

if (document.querySelector(".Question-sideColumn")) {
    document.querySelector(".Question-sideColumn").style.display='none';
};

if (document.querySelector(".Topstory-tabCard")) {
    document.querySelector(".Topstory-tabCard").style.display='none';
};

if (document.querySelector(".Topstory-mainColumn")) {
    document.querySelector(".Topstory-mainColumn").style.width="60rem";
};

if (document.querySelector(".Question-mainColumn")) {
    document.querySelector(".Question-mainColumn").style.width="60rem";
};

setTimeout("hideAd()", 2000);

function hideAd() {
    document.querySelectorAll(".TopstoryItem--advertCard").forEach((ele)=>{
        ele.style.display='none';
    });
};
