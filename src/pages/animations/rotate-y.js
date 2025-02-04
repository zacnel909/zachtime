import * as React from "react"
import "./animation.styles.sass"
import Triangle from "../../svgs/triangle"
import ChapterTitle from "../../components/ChapterTitle"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`rotate`} title={`y`}/>
      <Triangle polygonClass='rotate-y'/>
    </main>
  )
}

export default Page

export const Head = () => <title>rotate y</title>
