import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../components/PageNavigation"

const Page = () => (
  <main>
    <ChapterTitle enum={'7'} title={'seventh'}/>
    <ChapterBody>
      <p>Seventh is <Link to={`/numbers/top-ten/7`}>#7</Link></p>
    </ChapterBody>
    <PageNavigation toLeft='/ranks/sixth' toCenter='/ranks' toRight='/ranks/eighth'/>
  </main>
)

export const Head = () => <title>Seventh</title>

export default Page
