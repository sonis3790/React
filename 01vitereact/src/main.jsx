import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1> Custom React !</h1>
        </div>
    )

}

// const ReactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : 'click me to visit google'
// }

const anotherUsername = 'chai with shourya'

const reactElement = React.createElement(
    'a',
    {href : 'https://google.com', target : '_blank'},
    'click to go ',
    anotherUsername
) 


// const anotherElement = (
//     <a href="https://google.com" target='_blank'>visit google</a>
// )


createRoot(document.getElementById('root')).render(
    // <App />
    // ReactElement                 // it is a function & </> using this tag is known as basically jsx.
    // anotherElement
     reactElement
)
