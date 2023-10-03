function createGame(count, callback){
    return new Promise((resolve) => {
        const divContainer = document.createElement("div");
        divContainer.style.display = "flex";
        divContainer.style.flexDirection = "column";
        divContainer.style.alignItems = "center";

        container.append(divContainer);
        for (let i = 0; i < count; i++) {
            const div = document.createElement("div");
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.border = "2px solid black";
            div.style.backgroundColor = "blue";
            divContainer.append(div);
        }
        resolve();
    });
    // const thirdScript = callback();  //3rd script
    // thirdScript.addEventListener("load", () => {
    //     moveSquares(divContainer)
    // })
}

