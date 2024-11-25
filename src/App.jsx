import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Children } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

function App() {
    const [count, setCount] = useState(0);

    const [end, setEnd] = useState(false);

    function gameOver() {
        setEnd(true);
    }

    const userId = `1234555`;

    const searchParams = new URLSearchParams({ userId, rr: 44, yery: 4543 }).toString();

    const baseUrl = `/game/index.html`;

    const url1 = `${baseUrl}?${searchParams}`;

    const onMessage = useMemo(
        () => (e) => {
            if (!e.data?.score) return;

            console.log("data  from child==>", e?.data);

            gameOver();
        },
        []
    );

    useEffect(() => {
        window.addEventListener("message", onMessage);

        return () => window.removeEventListener("message", onMessage);
    }, []);

    return (
        <>
            <div>
                <iframe src={url1}></iframe>
                {end && <div>Game over</div>}
            </div>
        </>
    );
}

export default App;
