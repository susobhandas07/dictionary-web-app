import { useEffect } from "react";
import "./phonetic.css"
export default function Phonetic({ text, audio, ...props }) {

    let animations = [];
    useEffect(() => {

        const audio = document.querySelector("audio"), lines = document.querySelectorAll('.side'), btn = document.querySelector('#playAudio');
        audio.addEventListener("loadedmetadata", () => {
            const transitionProperties = { duration: audio.duration * 1200 };
            animations = [
                //top line
                lines[0].animate([
                    { transform: "translateY(0px)" },
                    { transform: "translateY(-30px)" },
                    { transform: "translateY(-30px)" },
                    { transform: "translateY(0px)" }
                ], transitionProperties),
                //mid line
                lines[1].animate([
                    { boxShadow: "10px 30px black" },
                    { boxShadow: "10px 0 rgb(171, 10, 219)", marginLeft: "5px" },
                    { boxShadow: "10px 0 rgb(171, 10, 219)", marginLeft: "5px" },
                    { boxShadow: "10px 30px black" }
                ], transitionProperties),
                //bottom line
                lines[2].animate([
                    { transform: "translateY(0px)" },
                    { transform: "translateY(-30px)" },
                    { transform: "translateY(-30px)" },
                    { transform: "translateY(0px)" }
                ], transitionProperties)
            ]
            animations.forEach((animation) => { animation.pause() });
        });
        const playPauseAudio = () => {
            if (audio.paused) {
                animations.forEach((animation) => { animation.play() });
                audio.play();
                // lines[0].style["transform"] = "translateY(-30px)";
                // Object.assign(lines[1].style, {
                //     boxShadow: "10px 0 black",
                //     margin: " 0px 0 0 5px"
                // });
                // lines[2].style["transform"] = "translateY(-30px)";
            }
        }

        btn.addEventListener("click", playPauseAudio);
        return () => { btn.removeEventListener("click", playPauseAudio); }
    }, [])
    return (
        <>
            <p>{text}</p>
            <audio {...props}>
                <source src={audio} type="audio/mpeg" />
                Your borwser does not support audio playback
            </audio >
            <button type="playpause" className="audio-player" id="playAudio">
                <div className='container'>
                    <div className="side" ></div>
                    <div className="side" ></div>
                    <div className="side" ></div>
                </div>
            </button>
        </>
    );
}