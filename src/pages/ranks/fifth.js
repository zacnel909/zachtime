import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../components/PageNavigation"

const Page = () => (
  <main>
    <ChapterTitle enum={'5'} title={'fifth'}/>
    <ChapterBody>
      <p>Fifth is <Link to={`/numbers/top-ten/5`}>#5</Link></p>
    </ChapterBody>
    <PageNavigation toLeft='/ranks/fourth' toCenter='/ranks' toRight='/ranks/sixth'/>
  </main>
)

export const Head = () => <title>Fifth</title>

export default Page
