import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Moghrabi">
       <Member name="Amir"/> 
       <Member name="Cláudio" />
    </Family>
    , document.getElementById('app'))