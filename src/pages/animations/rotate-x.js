import * as React from "react"
import "./animation.styles.sass"
import Triangle from "../../svgs/triangle"
import ChapterTitle from "../../components/ChapterTitle"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`rotate`} title={`x`}/>
      <Triangle polygonClass='rotate-x'/>
    </main>
  )
}

export default Page

export const Head = () => <title>rotate x</title>
