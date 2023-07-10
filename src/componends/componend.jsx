const Line = ({ ...props }) => {
    return (<div className='line' {...props}></div>);
}

const ListItem = ({ children, ...props }) => {
    return (<li className='flex li-item' {...props}>{children}</li>)
}

const Picture = ({ imgSrc, mediaSrc, ...props }) => {
    // console.log(imgSrc);
    return (
        <picture>
            <source media="(prefers-color-scheme:dark)" srcSet={mediaSrc} />
            <img src={imgSrc} alt="icon" {...props} />
        </picture>
    )
}

const Phonetic = ({ text, audio, ...props }) => {
    return (
        <>
            <p>{text}</p>
            <audio controls {...props}>
                <source src={audio} type="audio/mpeg" />
                Your borwser does not support audio playback
            </audio >
        </>
    );
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

const Body = ({ data }) => {
    let phonetics = <></>;
    for (let i = 0; i < data['phonetics'].length; i++) {
        if (data["phonetics"][i]['audio']) {
            phonetics =
                <>
                    <Phonetic text={data['phonetics'][i]['text']} audio={data['phonetics'][i]['audio']} key={data['word']} />
                </>
            break;
        }
    }
    return (
        <div id='canvas'>
            <h1>{data['word']} </h1>
            {phonetics}
            <section>
                {data['meanings'].map((val, index) => <Meaning pos={val['partOfSpeech']} listItems={val['definitions']} key={index} />)}
            </section>
            <section>
                <span className='fade'>Source</span>
                <a style={{ color: "var(--link-color)" }} href={`https://en.wiktionary.org/wiki/${data['word']}`} target="_blank" >https://en.wikionary.org/wiki/{data['word']}</a>
            </section>
        </div>
    )
}

export { Picture, Body };