import { useEffect, useState } from "react";
import './body.css'
import { Body, Header } from "../componend";


export default function main() {

    const [data, setData] = useState({});
    const [input, setInput] = useState("");
    const checkTrigger = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            fetchData(input, setData);
        }
    }

    useEffect(() => {

        function focusEvent(e) {
            e.target.select();
        }

        document.querySelector("#word").addEventListener("click", (e) => { focusEvent(e) });

        return () => { document.querySelector("#word").removeEventListener("click", (e) => { focusEvent(e) }) };
    }, []);

    return (
        <>
            <div>
                <label htmlFor="word" className="flex search-wrapper">
                    <input type="text" name="word" id="word" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Word" onKeyDown={(e) => checkTrigger(e)} />
                    {input !== "" && <button id='clear-btn' className="hover-pointer" title="clear" onClick={() => { setInput("") }}>&#128473;</button>}
                    <button id="search-btn" className="hover-pointer" title="Search" onClick={() => { fetchData(input, setData) }}>&#128269;</button>
                </label>
            </div>
            <div >
                {data.length &&
                    <>
                        <Header datas={data} key={data[0]["word"]} />
                        {data.map((data, index) => <Body data={data} key={index} />)}
                    </>
                }
            </div>
        </>
    );
}



function fetchData(word, handeler) {
    document.querySelector("#word").blur();
    word !== "" && fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json())
        .then(data => { handeler(data) })
        .catch(error => { console.log(error) });
}