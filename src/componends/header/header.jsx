import BookIcon from "../../assets/icons8-book-50.png";
import ThemeIcon from "../../assets/icons8-moon-24.png";
import './header.css'
export default function main() {
    return (
        <header className="header flex">
            <section className="header-cell flex">
                <a className="header-cell" href="" title="Home">
                    <img src={BookIcon} alt="Icon" className="favicon" />
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
                <input type="checkbox" name="switch" id="switch" />
                <label htmlFor="switch" id='switch-cell' title='Night mode' className="hover-pointer"></label>
                <label htmlFor="switch"><img src={ThemeIcon} alt="" title="Night mode" /></label>
                {/* <img src={ThemeIcon} alt="" title="Night mode" /> */}
            </section>
        </header>
    );
}