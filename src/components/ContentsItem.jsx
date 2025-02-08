import * as React from "react"
import './component.styles.sass'
import { Link } from "gatsby"

export default function ContentsItem(props) {
    return (
        <div className="contents-item">
            <span className="contents-enum">{props.enum}</span>
            <span className="contents-value">
                {props.to.slice(0, 4) === 'http' ?
                  (<a href={props.to} target='_blank' rel='noopener noreferrer'>
                    {props.label || props.to}
                  </a>)
                  :
                  (<Link to={props.to}>
                      {props.label || props.to}
                  </Link>)
                }
            </span>
        </div>
    )
}
