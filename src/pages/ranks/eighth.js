import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../components/PageNavigation"

const Page = () => (
  <main>
    <ChapterTitle enum={'8'} title={'eighth'}/>
    <ChapterBody>
      <p>Eighth is <Link to={`/numbers/top-ten/8`}>#8</Link></p>
    </ChapterBody>
    <PageNavigation toLeft='/ranks/seventh' toCenter='/ranks' toRight='/ranks/ninth'/>
  </main>
)

export const Head = () => <title>Eighth</title>

export default Page
