import css from "./style.css"
import { imageAssets } from "./assets.js"
import { domEleGen } from "./funcs.js";

let pageRender = () => {
    let bodyEl = document.querySelector("body");

    navRender(bodyEl);

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

(() => {
    pageRender();
})();