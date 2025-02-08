import * as React from "react"
import "../styles.sass"
import ContentsItems from "../../components/ContentsItems"
import PageNavigation from "../../components/PageNavigation"

const contents = [
  { label: 'first', to: '/ranks/first'},
  { label: 'second', to: '/ranks/second'},
  { label: 'third', to: '/ranks/third'},
  { label: 'fourth', to: '/ranks/fourth'},
  { label: 'fifth', to: '/ranks/fifth'},
  { label: 'sixth', to: '/ranks/sixth'},
  { label: 'seventh', to: '/ranks/seventh'},
  { label: 'eighth', to: '/ranks/eighth'},
  { label: 'ninth', to: '/ranks/ninth'},
  { label: 'last', to: '/ranks/last'},
]

const IndexPage = () => {
  return (
    <main>
      <h1>ranks</h1>
      <ContentsItems contents={contents} />
      <PageNavigation toCenter='/'/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>ranks</title>
