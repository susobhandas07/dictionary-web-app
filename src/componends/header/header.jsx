import { useState } from "react";
import BookIcon from "../../assets/icons8-book-50.png";
import BookIconDark from "../../assets/icons8-book-50-dark.png";
import MoonIcon from "../../assets/icons8-moon-24.png";
import MoonIconActive from "../../assets/icons8-moon-24-active.png";
import SunIcon from "../../assets/icons8-sun-24.png";
import SunIconActive from "../../assets/icons8-sun-24-active.png";
import { Picture } from '../componend';
import './header.css'


export default function main() {


    return (
        <header className="header flex">
            <section className="header-cell flex">
                <a className="header-cell" href="" title="Home">
                    <Picture imgSrc={BookIcon} mediaSrc={BookIconDark} className="favicon" />
                </a>
                <h1>Dictionary</h1>
            </section>

            <section className="header-cell" id="font-switcher">
                <select name="font" id="font font-select" className="option hover-pointer" title="Font">
                    <option value="serif" >Serif</option>
                    <option value="arial" >Arial</option>
                </select>
            </section>

            <section className="header-cell flex" id="theme-toggle">
                <Picture imgSrc={SunIconActive} mediaSrc={SunIcon} />

                <input type="checkbox" name="switch" id="switch"
                // checked={checked}
                // onChange={handleChange}
                />
                <label htmlFor="switch" id='switch-cell' title='Night mode' className="hover-pointer"></label>

                <Picture imgSrc={MoonIcon} mediaSrc={MoonIconActive} />
            </section>
        </header>
    );
}