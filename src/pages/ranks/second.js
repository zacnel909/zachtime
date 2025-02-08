import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={'2'} title={'second'}/>
      <ChapterBody>
        <p>Second is <Link to={`/numbers/top-ten/2`}>#2</Link></p>
      </ChapterBody>
      <PageNavigation toLeft='/ranks/first' toCenter='/ranks' toRight='/ranks/third'/>
    </main>
  )
}

export const Head = () => <title>Second</title>

export default Page
