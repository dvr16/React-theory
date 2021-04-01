import React from 'react';

export default (props) => ( <
    div >
    <
    h3 > Car name: { props.name } < /h3>   <
    p > YEAR: < strong > { props.year } < /strong></p > { props.children } <
    button onClick = { props.onChangeTitle } > Click < /button> <
    /div>
)