import * as React from "react"
import './component.styles.sass'

export default function ChapterBody(props) {
    return (
        <div className='chapter-body'>
            {props.children}
        </div>
    )
}
