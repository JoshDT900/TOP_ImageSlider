
const domEleGen = (function() {

    const makeEle = function() {
        let argArr = [...arguments];

        console.log(argArr, typeof(argArr[1]));

        if (typeof(argArr[0]) != 'string') {
            return alert("First argument must be a valid HTML element in string format. Example: 'div' ");
        }

        let newEle = document.createElement(`${argArr[0]}`);

        if (argArr.length >= 2 && typeof(argArr[1]) === "string"){
            newEle.textContent = argArr[1];
        } else {
            return alert("Invalid Argument Type. The second argument must be a string");
        }

        if (argArr.length === 3 && typeof(argArr[2][0]) === "object"){
            for (let i in argArr[2]){                
                let tempArr = [...argArr[2][i]];

                newEle.setAttribute(...tempArr);
            }
        } else if (typeof(argArr[2]) === "object") {
            newEle.setAttribute(...argArr[2]);
        } else {
            return alert("Invalid Arg. Third argument accepts an array or a nested array of arrays.")
        }

        return newEle;   
    }

    return { makeEle };
})();

let bodyEl = document.querySelector("body");
let testEle = domEleGen.makeEle("div", "", ["class", "test"]);

bodyEl.appendChild(testEle)

export { domEleGen }