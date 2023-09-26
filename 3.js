function moveSquares(container){
    container.addEventListener("click", e => {
        moveSquaresHandler(e, "red", "flex-start");
    });
    container.addEventListener("contextmenu", e => {
        moveSquaresHandler(e, "green", "flex-end");
    });
}

function moveSquaresHandler(e, color, alignPosition){
    const divStyle = e.target.style;
    divStyle.backgroundColor = color;
    divStyle.alignSelf = alignPosition;
}