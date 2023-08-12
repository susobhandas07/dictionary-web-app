import Phonetic from "./phonetic/phonetic";
import { getDefaults } from "../contextProvider";
const Line = ({ ...props }) => {
    return (<div className='line' {...props}></div>);
}

const ListItem = ({ children, ...props }) => {
    return (<li className='flex li-item' {...props}>{children}</li>)
}

const Picture = ({ imgSrc, mediaSrc, ...props }) => {
    // console.log(imgSrc);
    const { context } = getDefaults();
    return (
        <>
            {context["theme"] === true
                ? <img src={mediaSrc} alt="icon" {...props} />
                : <img src={imgSrc} alt="icon" {...props} />}
        </>
    )
}

const Meaning = ({ pos, listItems, ...props }) => {
    return (
        <section {...props}>
            <section className='flex'>
                <h3>{pos}</h3>
                <Line />
            </section>
            <span className='fade'>Meaning</span>
            <ul>
                {listItems.map((item, index) => <ListItem children={item["definition"]} key={index} />)}
            </ul>
        </section>
    )
}

const Header = ({ datas }) => {
    let phonetics = null;
    for (let j = 0; j < datas.length; j++) {
        const data = datas[j];
        for (let i = 0; i < data['phonetics'].length; i++) {
            if (data["phonetics"][i]['audio']) {
                return (
                    <section>
                        <h1>{data['word']} </h1>
                        <Phonetic text={data['phonetics'][i]['text']} audio={data['phonetics'][i]['audio']} key={data['word']} />
                    </section>
                );
            }
        }
    }
    return (
        <section>
            <h1>{datas[0]['word']}</h1>
        </section>
    );
}

const Body = ({ data }) => {
    const synonyms = [], antonyms = [];
    return (
        <div className='canvas'>
            <section>
                {data['meanings'].map((val, index) => {
                    for (let syns of Object.values(val['synonyms'])) {
                        synonyms.push(syns);
                    }
                    for (let ants of Object.values(val['antonyms'])) {
                        antonyms.push(ants);
                    }
                    return (<>
                        <Meaning pos={val['partOfSpeech']} listItems={val['definitions']} key={index} />
                        {synonyms.length > 0 &&
                            <>
                                <p className="fade">Synonyms</p>
                                <ul className="flex" style={{ justifyContent: "flex-start", flexWrap: "wrap", gap: "2rem", paddingLeft: "0" }}>
                                    {synonyms.map((val) => <li style={{ color: "rgb(115,80,240)", fontWeight: "bold", textTransform: "capitalize" }}>{val}</li>)}
                                </ul>
                            </>}
                        {antonyms.length > 0 &&
                            <>
                                <p>Antonyms</p>
                                <ul className="flex" style={{ justifyContent: "flex-start", flexWrap: "wrap", gap: "2rem", paddingLeft: "0" }}>
                                    {antonyms.map((val) => <li style={{ color: "rgb(115,80,240)", fontWeight: "bold", textTransform: "capitalize" }}>{val}</li>)}
                                </ul>
                            </>}
                    </>);
                })}
            </section>
            <section>
                <span className='fade'>Source</span>
                <a style={{ color: "var(--link-color)" }} href={`https://en.wiktionary.org/wiki/${data['word']}`} target="_blank" >https://en.wikionary.org/wiki/{data['word']}</a>
            </section>
        </div>
    );
}

const Er404 = ({ data }) => {
    return (
        <div className="canvas">
            <h3>{data.title}</h3>
            <p>{data.message}</p>
        </div>
    )
}

export { Picture, Body, Header, Er404 };