import { useState } from "react";
import './body.css'
import SearchIcon from '../../assets/icons8-search-50.png';
import { create, bind } from "../componend";

const buffer = {};

export default function main() {

    const [data, setData] = useState("");
    const checkTrigger = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            fetchData(data);
        }
    }


    return (
        <>
            <div>
                <label htmlFor="word" className="flex search-wrapper">
                    <input type="text" name="word" id="word" value={data} onChange={(e) => setData(e.target.value)} placeholder="Enter Word" onKeyDown={(e) => checkTrigger(e)} />
                    <button id="search-btn" className="hover-pointer" title="Search"><img src={SearchIcon} alt="Search" id="search-icon"
                        onClick={() => { fetchData(data) }} /></button>
                </label>
            </div>
            <div id="canvas"></div>
        </>
    );
}

function audioSrc(src, type) {
    return (
        src !== "" ?
            `
        <audio controls>
            <source src=${src} type=${type} />
            Your browser does not support the audio element.
        </audio>`
            : ""
    );
}



function fetchData(word) {
    //parent element
    const parent = document.querySelector('#canvas');
    if (buffer.hasOwnProperty(word)) {
        parent.innerHTML = buffer[word];
    } else {
        parent.innerHTML = "";
        fetch(` https://api.dictionaryapi.dev/api/v2/entries/en/${word} `)
            .then(res => res.json())

            .then((data) => {

                //first section:title
                // console.log(data[0]['phonetics'][0]['audio'], audioSrc(data[0]['phonetics']['audio'], 'audio/mpeg'));
                const node1 = create('section', audioSrc(data[0]['phonetics'][0]['audio'], 'audio/mpeg'), 'html'), phonetic = create('p', `${data[0]['phonetic']}`);
                bind(node1, create('h1', `${data[0]['word']}`), phonetic);

                //second section:definitions
                const node2 = create('section');
                data[0]['meanings'].forEach((meaning) => {

                    //sub-sections of second section:definitions
                    const node2i = create('section');
                    bind(node2i, create('h3', `<span>${meaning['partOfSpeech']}</span><div class='line'></div>`, 'html', ['bold', 'title', 'flex']), create('span', 'Meaning', null, ['fade']));
                    const list = create('ul');

                    meaning['definitions'].forEach((def) => {
                        bind(list, create('li', def['definition'], null, ['flex', 'li-item']));
                    });
                    bind(node2i, list);
                    bind(node2, node2i);
                });

                parent && bind(parent, node1, node2, create('section', `<span class='fade'>Source</span> <a style="color:#665858" href="https://en.wiktionary.org/wiki/${word}" target='blank'>https://en.wikionary.org/wiki/${word}</a>`, 'html'));
            })
            .then(() => { buffer[word] = parent.innerHTML; })
            .catch(e => { console.log(e) });
    }
}