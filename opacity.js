/* Borrowed from http://colours.neilorangepeel.com */
export default [
    'whitesmoke',
    'snow',
    'tomato',
    'lightgoldenrodyellow',
    'brown',
    'lightcoral',
    'darkseagreen',
    'chartreuse',
    'darkblue',
    'mistyrose',
    'saddlebrown',
    'darkkhaki',
    'gray',
    'cornflowerblue',
    'limegreen',
    'hotpink',
    'deeppink',
    'coral',
    'palevioletred',
    'springgreen',
    'palegoldenrod',
    'red',
    'papayawhip',
    'purple',
    'darkmagenta',
    'silver',
    'greenyellow',
    'oldlace',
    'navy',
    'lightsteelblue',
    'mediumvioletred',
    'darkgreen',
    'darksalmon',
    'mediumturquoise',
    'darkslategray',
    'blanchedalmond',
    'floralwhite',
    'lavender',
    'green',
    'wheat',
    'seagreen',
    'bisque',
    'mediumpurple',
    'lightgreen',
    'lightpink',
    'darkorange',
    'darkviolet',
    'white',
    'blueviolet',
    'darkgoldenrod',
    'lawngreen',
    'mediumblue',
    'forestgreen',
    'crimson',
    'cornsilk',
    'powderblue',
    'sandybrown',
    'mediumorchid',
    'rebeccapurple',
    'darkred',
    'azure',
    'peachpuff',
    'salmon',
    'lightblue',
    'seashell',
    'deepskyblue',
    'thistle',
    'slateblue',
    'burlywood',
    'lightgray',
    'gold',
    'mediumslateblue',
    'lightseagreen',
    'lemonchiffon',
    'palegreen',
    'dimgrey',
    'dodgerblue',
    'goldenrod',
    'linen',
    'paleturquoise',
    'lightyellow',
    'lime',
    'lightskyblue',
    'darkgray',
    'lightcyan',
    'yellow',
    'darkorchid',
    'honeydew',
    'peru',
    'indianred',
    'slategrey',
    'violet',
    'fuchsia',
    'ivory',
    'cadetblue',
    'darkgrey',
    'skyblue',
    'slategray',
    'lightsalmon',
    'aliceblue',
    'chocolate',
    'yellowgreen',
    'pink',
    'turquoise',
    'steelblue',
    'black',
    'firebrick',
    'olivedrab',
    'orangered',
    'navajowhite',
    'orange',
    'mediumaquamarine',
    'royalblue',
    'olive',
    'magenta',
    'plum',
    'indigo',
    'dimgray',
    'lightgrey',
    'antiquewhite',
    'cyan',
    'orchid',
    'mediumspringgreen',
    'lightslategrey',
    'darkturquoise',
    'darkolivegreen',
    'lavenderblush',
    'lightslategray',
    'grey',
    'darkslategrey',
    'beige',
    'darkslateblue',
    'midnightblue',
    'moccasin',
    'aqua',
    'maroon',
    'rosybrown',
    'mintcream',
    'mediumseagreen',
    'darkcyan',
    'aquamarine',
    'gainsboro',
    'blue',
    'ghostwhite',
    'khaki',
    'tan',
    'sienna',
    'teal',
];


import React from 'react';
import ReactDOM from 'react-dom';
import colors from './css-colors';

import './styles.css';

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return ( <
        div className = { `fade-in-section ${isVisible ? 'is-visible' : ''}` }
        ref = { domRef } > { props.children } <
        /div>
    );
}

function App() {
    return ( <
        div className = "App" >
        <
        h1 > All the CSS colors! < /h1>

        {
            colors.map(color => ( <
                FadeInSection key = { color } >
                <
                div className = "box"
                style = {
                    { backgroundColor: color }
                } >
                <
                span > { color } < /span> < /
                div > <
                /FadeInSection>
            ))
        } <
        /div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render( < App / > , rootElement);