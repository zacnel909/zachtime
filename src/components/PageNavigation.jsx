import * as React from "react"
import './component.styles.sass'

const PageNavigation = (props) => {
  const [rotation, setRotation] = React.useState(45)
  const onClickLeft = async () => {
    // if (!props.onClickLeft) return
    setRotation(prev => prev - 90)
  }
  const onClickCenter = async () => {
    // if (!props.onClickCenter) return
    setRotation(prev => prev - 90)
  }
  const onClickRight = async () => {
    // if (!props.onClickLeft) return
    setRotation(prev => prev + 90)
  }

  return (
    <svg
      className="page-navigation"
      width="126"
      height="42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        onClick={onClickLeft}
        className="navigation-button"
        points="5.412,21.000 28.794,34.500 28.794,7.500"
        stroke="black"
        strokeWidth="3"
        fill='white'
      />
      <rect
        onClick={onClickCenter}
        className="navigation-button"
        stroke='black'
        strokeWidth="3"
        fill='white'
        width='27'
        height='27'
        x='49.5'
        y='7.5'
        transform={`rotate(${rotation} 63 21)`}
      />
      <polygon
        onClick={onClickRight}
        className="navigation-button"
        points="120.588,21.000 97.206,7.500 97.206,34.500"
        stroke="black"
        strokeWidth="3"
        fill='white'
      />
    </svg>
  )
}

export default PageNavigation
