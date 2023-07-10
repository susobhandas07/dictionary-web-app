import { useState } from "react";
import './body.css'
import SearchIcon from '../../assets/icons8-search-50.png';
import { Body } from "../componend";


export default function main() {
    const [data, setData] = useState({});
    const [input, setInput] = useState("");
    const checkTrigger = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            fetchData(input, setData);
        }
    }


    return (
        <>
            <div>
                <label htmlFor="word" className="flex search-wrapper">
                    <input type="text" name="word" id="word" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Word" onKeyDown={(e) => checkTrigger(e)} />
                    <button id="search-btn" className="hover-pointer" title="Search"><img src={SearchIcon} alt="Search" id="search-icon"
                        onClick={() => { fetchData(input) }} /></button>
                </label>
            </div>
            <div >
                {data.length && data.map((data, index) => <Body data={data} key={index} />)}
            </div>
        </>
    );
}



function fetchData(word, handeler) {
    document.querySelector("#word").blur();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json())
        .then(data => { handeler(data) })
        .catch(error => { console.log(error) });
}