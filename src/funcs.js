
const domEleGen = (function() {

    const makeEle = function() {
        let argArr = [...arguments];

        if (typeof(argArr[0]) != 'string') {
            return alert("First argument must be a valid HTML element in string format. Example: 'div' ");
        } else if (typeof(argArr[1]) != "string" && argArr.length === 2) {
            return alert("Invalid Argument Type. The second argument must be a string");
        } else if (typeof(argArr[2]) != "object" && argArr.length === 3) {
            return alert("Invalid Arg. Third argument accepts an array or a nested array of arrays.");
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
        if (tarEle.children[i].style.display !== "none"){
            startingPoint = i;
        }
    }

    return startingPoint;
}

let nextImg = () => {
    let imgCnt = document.querySelector(".img_container");
    let curImgNum = getStart(imgCnt);

    imgCnt.children[curImgNum].style.display = "none";

    if (curImgNum + 1 >= imgCnt.children.length) {
        curImgNum = 0;
        imgCnt.children[curImgNum].style.display = "";
    } else {
        imgCnt.children[curImgNum + 1].style.display = "";
    } 
}

let prevImg = () => {
    let imgCnt = document.querySelector(".img_container");
    let curImgNum = getStart(imgCnt);

    imgCnt.children[curImgNum].style.display = "none";

    if (curImgNum - 1 === -1) {
        curImgNum = 4;
        imgCnt.children[curImgNum].style.display = "";
    } else {
        imgCnt.children[curImgNum - 1].style.display = "";
    } 
}

export { domEleGen, nextImg, prevImg }