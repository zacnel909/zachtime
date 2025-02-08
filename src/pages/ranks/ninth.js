import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../components/PageNavigation"

const Page = () => (
  <main>
    <ChapterTitle enum={'9'} title={'ninth'}/>
    <ChapterBody>
      <p>Ninth is <Link to={`/numbers/top-ten/9`}>#9</Link></p>
    </ChapterBody>
    <PageNavigation toLeft='/ranks/eighth' toCenter='/ranks' toRight='/ranks/last'/>
  </main>
)

export const Head = () => <title>Ninth</title>

export default Page
