import * as React from "react"
import "../styles.sass"
import ContentsItems from "../../components/ContentsItems"
import PageNavigation from "../../components/PageNavigation"

const contents = [
  { label: 'ten', to: '/numbers/top-ten/10'},
  { label: 'three', to: '/numbers/top-ten/3'},
  { label: 'nine', to: '/numbers/top-ten/9'},
  { label: 'two', to: '/numbers/top-ten/2'},
  { label: 'eighth', to: '/numbers/top-ten/8'},
  { label: 'one', to: '/numbers/top-ten/1'},
  { label: 'seven', to: '/numbers/top-ten/7'},
  { label: 'six', to: '/numbers/top-ten/6'},
  { label: 'five', to: '/numbers/top-ten/5'},
  { label: 'four', to: '/numbers/top-ten/4'},
]

const IndexPage = () => {
  return (
    <main>
      <h1>numbers</h1>
      <ContentsItems contents={contents} />
      <PageNavigation toCenter='/'/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>numbers</title>
