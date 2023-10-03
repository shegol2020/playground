const container = document.querySelector(".container");

const button = document.createElement("button");
button.textContent = "test";
button.classList.add("btn", "b1");
button.classList.remove("b1");
container.append(button)

const input = document.createElement("input");
input.type = "number";
input.min = "3";
input.max = "5"
container.append(input)

let counter = 0;

function launchGame(count){
    if (count) {
        getScript("2.js")
            .then(() => createGame(count))
            .then(() => getScript("3.js"))
            .then(() => moveSquares(container))
        // const newScript = getScript("2.js");
        // newScript.addEventListener("load", () => {
        //         createGame(count, () => getScript("3.js"));
        //     }
        // )

    }
}

function getScript(scriptSrc){
    return new Promise((resolve, reject) => {
        const newScript = document.createElement("script");
        newScript.src = scriptSrc;
        newScript.addEventListener("load", () => {
            resolve();
        });
        document.head.append(newScript);
    });
    // return newScript;
}

input.addEventListener("change", e => counter = e.target.value);

button.addEventListener("click", () => {
    launchGame(counter);
})



