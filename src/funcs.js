import { imageAssets } from "./assets";

const domEleGen = (function() {

    const makeEle = function() {
        let argArr = [...arguments];

        if (typeof(argArr[0]) != 'string') {
            return alert("First argument must be a valid HTML element in string format. Example: 'div' ");
        } else if (typeof(argArr[1]) != "string" && argArr.length === 2) {
            return alert("Invalid Argument Type. The second argument must be a string");
        } else if (typeof(argArr[2]) != "object" && argArr.length === 3) {
            return alert("Invalid Arg. Third argument accepts an array or a nested array of arrays.");
        } else if (argArr.length > 3) {
            return alert("Too many arguments.")
        }

        let newEle = document.createElement(`${argArr[0]}`);
        newEle.textContent = argArr[1];
        
        if (argArr.length === 3 && typeof(argArr[2][0]) === "object"){
            for (let i in argArr[2]){                
                let tempArr = [...argArr[2][i]];

                newEle.setAttribute(...tempArr);
            }
        } else if (typeof(argArr[2]) === "object") {
            newEle.setAttribute(...argArr[2]);
        }
        

        return newEle;   
    }

    return { makeEle };
})();

let getStart = (ele) => {
    let tarEle = ele;
    let startingPoint = 0;

    for (let i = 0; i < tarEle.children.length; i++){
        if (tarEle.children[i].classList.value !== "hide"){
            startingPoint = i;
        }
    }

    return startingPoint;
}

let nextImg = () => {
    let imgCnt = document.querySelector(".img_container");
    let curImgNum = getStart(imgCnt);

    imgCnt.children[curImgNum].classList = 'hide';

    if (curImgNum + 1 >= imgCnt.children.length) {
        curImgNum = 0;
        imgCnt.children[curImgNum].classList = "show";
    } else {
        imgCnt.children[curImgNum + 1].classList = "show";
    }

    return;
}

let prevImg = () => {
    let imgCnt = document.querySelector(".img_container");
    let curImgNum = getStart(imgCnt);

    imgCnt.children[curImgNum].classList = 'hide';

    if (curImgNum - 1 === -1) {
        curImgNum = 4;
        imgCnt.children[curImgNum].classList = "show";
    } else {
        imgCnt.children[curImgNum - 1].classList = "show";
    }

    return;
}

let bubImgSwitch = (e) => {
    let bubMain = document.querySelector(".img_bubbles")

    for (let i = 0; i < bubMain.children.length; i++){
        bubMain.childNodes[i].src = imageAssets.bubbleEmptyImg;
    }

    e.target.src = imageAssets.bubbleFullImg;
         
    return;
}

let bubPicSwitch = (e) => {
    let bubMain = document.querySelector(".img_bubbles")
    let imagesEle = document.querySelector(".img_container")

    for (let i = 0; i < bubMain.children.length; i++){
        if (e.target.classList[0] === `item_${i}`){
            console.log(e.target);
            console.log(imagesEle.children[i].classList = "show");
        } else {
            imagesEle.children[i].classList = "hide";
        }
    }

    return;
}

export { domEleGen, nextImg, prevImg, bubImgSwitch, bubPicSwitch }

/*

Click on bubble
    bubble changes icon


*/