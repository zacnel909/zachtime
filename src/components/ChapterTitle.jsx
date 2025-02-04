import * as React from "react"
import './component.styles.sass'
import BorderLine from "./BorderLine"

export default function ChapterTitle(props) {
    return (
        <div className='chapter-title'>
            <h1 className='margin-zero'>{props.enum}</h1>
            <BorderLine/>
            <h1 className='margin-zero'>{props.title}</h1>
        </div>
    )
}
