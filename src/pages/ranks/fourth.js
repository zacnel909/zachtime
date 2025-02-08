import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={'4'} title={'fourth'}/>
      <ChapterBody>
        <p>Fourth is <Link to={`/numbers/top-ten/4`}>#4</Link></p>
      </ChapterBody>
      <PageNavigation toLeft='/ranks/third' toCenter='/ranks' toRight='/ranks/fifth'/>
    </main>
  )
}

export const Head = () => <title>Fourth</title>

export default Page
