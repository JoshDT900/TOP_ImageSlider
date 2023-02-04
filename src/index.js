import css from "./style.css"
import { imageAssets } from "./assets.js"
import { domEleGen } from "./funcs.js";

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

    return slideWrap;
}

let genImg = (arr, ele) => {
    for (let i in arr){
        let divArr = [];

        if (i == 0) {
            divArr = [["class", `item_${i}`], ["style", "display: visible;"]];
        } else {
            divArr = [["class", `item_${i}`], ["style", "display: none;"]];
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

(() => {
    pageRender();
})();