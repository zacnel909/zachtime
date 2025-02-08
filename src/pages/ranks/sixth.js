import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../components/PageNavigation"

const Page = () => (
  <main>
    <ChapterTitle enum={'6'} title={'sixth'}/>
    <ChapterBody>
      <p>Sixth is <Link to={`/numbers/top-ten/6`}>#6</Link></p>
    </ChapterBody>
    <PageNavigation toLeft='/ranks/fifth' toCenter='/ranks' toRight='/ranks/seventh'/>
  </main>
)

export const Head = () => <title>Sixth</title>

export default Page
