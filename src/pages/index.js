import * as React from "react"
import "./styles.sass"
import ContentsItems from "../components/ContentsItems"
import PageNavigation from "../components/PageNavigation"

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
      <PageNavigation/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>zach time</title>
