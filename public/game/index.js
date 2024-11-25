window.addEventListener("load", () => {
    document.getElementById("btn").addEventListener("click", () => {
        const searchParams = new URLSearchParams(window.location.search);

        const user = Object.fromEntries(searchParams.entries());

        const score = 10;

        // gameOver(score, user);
        callReact({ score, user });
        // alert("ok");
    });
});

function gameOver(score, userData) {
    callReact({ score, userData });
}

function callReact(data) {
    console.log("calling db===>", data);

    window?.parent?.window?.postMessage(data);
}
