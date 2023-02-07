import css from "./style.css"
import { imageAssets } from "./assets.js"
import { domEleGen, nextImg, prevImg } from "./funcs.js";

let pageRender = () => {
    let bodyEl = document.querySelector("body");

    navRender(bodyEl);
    sliderEle(bodyEl);

    return bodyEl;
}

let navRender = (ele) => {
    let navEl = domEleGen.makeEle("nav", "", ["class", "main_nav"]);
    ele.appendChild(navEl);

    let pTitleEle = domEleGen.makeEle("div", "", ["class", "page_title"]);
    navEl.appendChild(pTitleEle);

    let pHoneEle = domEleGen.makeEle("h1", "Image Slider - The Odin Project", ["class", "title_text"]);
    pTitleEle.appendChild(pHoneEle);

    let gitImgWrap = domEleGen.makeEle("div", "", ["class", "git_img_wrap"]);
    navEl.appendChild(gitImgWrap);

    let gitAncAtr = [["href", "https://github.com/JoshDT900"], ["target", "_blank"]];
    let gitImgEle = domEleGen.makeEle("a", "", gitAncAtr);
    gitImgWrap.appendChild(gitImgEle);

    let gitLogoAtr = [["src", imageAssets.gitImg], ["alt", "github logo"], ["class", "git_img"]]
    let gitLogoEle = domEleGen.makeEle("img", "", gitLogoAtr);
    let gitTextEle = domEleGen.makeEle("p", "Created by - David T.")
    gitImgEle.appendChild(gitTextEle);
    gitImgEle.appendChild(gitLogoEle);

    return ele;
}

let sliderEle = (ele) => {
    let slideWrap = domEleGen.makeEle("div", "", ["class", "slider_wrap"]);
    ele.appendChild(slideWrap);

    let lArrow = domEleGen.makeEle("div", "", ["class", "left_arrow"]);
    slideWrap.appendChild(lArrow);

    let lArrowArr = [["src", imageAssets.leftArrowImg], ["alt", "left arrow icon"]];
    let lArrImg = domEleGen.makeEle("img", "", lArrowArr);
    lArrow.appendChild(lArrImg);

    
    let imgCntEle = domEleGen.makeEle("div", "", ["class", "img_container"]);
    slideWrap.appendChild(imgCntEle);
    
    let imageObjArr = [...imageAssets.imgObj];
    genImg(imageObjArr, imgCntEle);
    
    let rArrow = domEleGen.makeEle("div", "", ["class", "right_arrow"]);
    slideWrap.appendChild(rArrow);
    
    let rArrowArr = [["src", imageAssets.rightArrowImg], ["alt", "right arrow icon"]];
    let rArrImg = domEleGen.makeEle("img", "", rArrowArr);
    rArrow.appendChild(rArrImg);
    
    lArrImg.addEventListener("click", prevImg);
    rArrImg.addEventListener("click", nextImg);

    // setInterval(nextImg, 5000)

    genBub(slideWrap);

    return slideWrap;
}

let genImg = (arr, ele) => {
    for (let i in arr){
        let divArr = [];

        if (i == 0) {
            divArr = [["class", `show`]];
        } else {
            divArr = [["class", `hide`]];
        }

        let newDiv = domEleGen.makeEle("div", "", divArr);

        let divImgArr = [["src", arr[i].img]];
        let divImg = domEleGen.makeEle("img", "", divImgArr);
        newDiv.appendChild(divImg);

        let pAncArrOne = [["target", "_blank"], ["href", arr[i].link]]
        let pAncArrTwo = [["target", "_blank"], ["href", arr[i].unsplash]]
        let pAncOne = domEleGen.makeEle("a", arr[i].owner, pAncArrOne)
        let pAncTwo = domEleGen.makeEle("a", "Unsplash", pAncArrTwo)
        let pEle = domEleGen.makeEle("p", "Photo By ");
        pEle.appendChild(pAncOne);
        pEle.append(" on ");
        pEle.appendChild(pAncTwo);
        newDiv.appendChild(pEle)

        ele.appendChild(newDiv);
    }

    return;
}

let genBub = (ele) => {
    let bubEle = domEleGen.makeEle("div", "", ["class", "img_bubbles"]);
    ele.appendChild(bubEle);

    let imgContiner = document.querySelector(".img_container")
    let imgCount = imgContiner.childNodes.length;
    console.log("The image count is", imgCount);

    for (let i = 0; i < imgCount; i++){
        let imgSrc = imageAssets.bubbleFullImg;
        
        if (i > 0){
            imgSrc = imageAssets.bubbleEmptyImg;
        }
        
        let imgEle = domEleGen.makeEle("img", "", [["src", imgSrc], ["alt", "bubble for switching images"]])
        bubEle.appendChild(imgEle)
    }

    return bubEle;
}

(() => {
    pageRender();
})();