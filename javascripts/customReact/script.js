const root = document.getElementById('root'); 

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'Google.com',
}

function customReact(reactElement, root){
    let element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    for(const key in reactElement.props){
        if(key === 'Children') continue;
        element.setAttribute(key, reactElement.props[key]);
    }
    root.appendChild(element);
}

customReact(reactElement, root);