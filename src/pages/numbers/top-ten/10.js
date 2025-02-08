import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`1`} title={`ten`}/>
      <ChapterBody>
        <p>10 is <Link to={`/ranks/first`}>first</Link></p>
      </ChapterBody>
      <PageNavigation toCenter='/numbers' toRight='/numbers/top-ten/3'/>
    </main>
  )
}

export default Page

export const Head = () => <title>10</title>
