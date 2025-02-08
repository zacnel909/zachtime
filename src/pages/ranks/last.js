import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../components/PageNavigation"

const Page = () => (
  <main>
    <ChapterTitle enum={'10'} title={'last'}/>
    <ChapterBody>
      <p>Last is <Link to={`/numbers/top-ten/10`}>#10</Link></p>
    </ChapterBody>
    <PageNavigation toLeft='/ranks/ninth' toCenter='/ranks'/>
  </main>
)

export const Head = () => <title>Last</title>

export default Page
