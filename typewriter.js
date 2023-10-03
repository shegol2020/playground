const input = document.getElementById("input");
const btn = document.getElementById("btn")

btn.addEventListener("click", async () => {
    const inputArray = input.value.split("");
    for (const el of inputArray){
        await new Promise(resolve => {
            setTimeout(() => {
                console.log(el);
                resolve();
            }, 1000)
        })
    }
})