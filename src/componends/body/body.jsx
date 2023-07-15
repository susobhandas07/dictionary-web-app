import { useEffect, useRef, useState } from "react";
import ClearIcon from "../../assets/crossIcon.svg";
import SearchIcon from "../../assets/magnifyIcon.svg";
import './body.css'
import { Body, Header, Er404 } from "../componend";


export default function main() {

    const [data, setData] = useState({}), [input, setInput] = useState(""), focusItem = useRef(null), [error, setError] = useState(false);

    const checkTrigger = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            focusItem.current.blur();
            fetchData(input, setData, setError);
        }
    }

    function dropFocus(action = "blur") {
        if (action === "focus") focusItem.current.focus();
        else focusItem.current.blur();
    }


    return (
        <>
            <div>
                <label htmlFor="word" className="flex search-wrapper">
                    <input type="text" name="word" id="word" ref={focusItem} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Word" onKeyDown={(e) => checkTrigger(e)} />
                    {input !== "" && <button id='clear-btn' className="hover-pointer" title="clear" onClick={() => { setInput(""); dropFocus("focus"); }}><img src={ClearIcon} alt="clear" className="sub-icon" /></button>}
                    <button id="search-btn" className="hover-pointer" title="Search" onClick={() => { dropFocus(); fetchData(input, setData, setError); }}><img src={SearchIcon} alt="search" className="sub-icon" /></button>
                </label>
            </div>
            <div >
                {!error
                    ? data.length &&
                    <>
                        <Header datas={data} key={data[0]["word"]} />
                        {data.map((data, index) => <Body data={data} key={index} />)}
                    </>
                    : <Er404 data={data} />
                }
            </div>
        </>
    );
}



function fetchData(word, handeler, errorHandeler) {
    word !== "" && fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => {
            if (!res.ok) {
                errorHandeler(true);
            } else {
                errorHandeler(false);
            }
            return res.json();
        })
        .then(data => { handeler(data) })
        .catch(error => { console.error(error.message) });
}