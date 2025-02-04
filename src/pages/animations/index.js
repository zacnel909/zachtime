import * as React from "react"
import "../styles.sass"
import ContentsItem from "../../components/ContentsItem"

const IndexPage = () => {
  return (
    <main>
      <h1>animations</h1>
      <ContentsItem enum={`1.`} label={`rotate center`} to={'/animations/rotate-center'}/>
      <ContentsItem enum={`2.`} label={`rotate x`} to={'/animations/rotate-x'}/>
      <ContentsItem enum={`3.`} label={`rotate y`} to={'/animations/rotate-y'}/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>animations</title>
