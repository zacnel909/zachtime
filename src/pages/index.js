import * as React from "react"
import "./styles.sass"
import ContentsItems from "../components/ContentsItems"

const contents = [
  'numbers',
  'ranks',
  'shapes',
  'animations',
  'games',
  'answer',
  'about',
]

const IndexPage = () => {
  return (
    <main>
      <h1>zach time</h1>
      <ContentsItems contents={contents}/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>zach time</title>
