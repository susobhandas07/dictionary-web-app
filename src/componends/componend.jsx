import test from '../assets/icons8-book-50.png'
function create(type = "p", child = null, childType = "text", classes = [], id = "") {
    const node = document.createElement(type);
    for (let char of classes) {
        node.classList.add(char);
    }
    if (child) {
        childType === 'html' ? node.innerHTML = child : node.innerText = child;
    }
    id && node.setAttribute('id', id);
    return node;
}

function bind(parent, ...children) {
    for (let child of children) {
        parent.appendChild(child);
    }
    return null;
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

export { create, bind, Picture };