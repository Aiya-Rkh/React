import React from 'react';

const Header = () => {
    return (
        <div>
            <nav style={{textAlign: 'center',
  padding: '20px',margin: '8px',justifyContent:'space-evenly',
  backgroundColor: 'DarkSalmon',
                color: 'white'
            }}> 
                <div style={{justifyContent:'space-evenly'}}>
                <a style={{marginInline:'6%'}} href="http://htmlbook.ru/content/osnovy-html">HTML</a> |
                <a style={{marginInline:'6%',}} href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics">CSS</a> |
                <a style={{marginInline:"6%"}} href="https://learn.javascript.ru/intro">JavaScript</a> |
                    <a style={{marginInline:"6%"}} href="https://tr.reactjs.org/">React</a>
                    </div>
            </nav>
        </div>
    );
};

export default Header;
