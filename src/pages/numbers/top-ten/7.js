import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`7`} title={`seven`}/>
      <ChapterBody>
        <p>
          7 is <Link to={`/ranks/seventh`}>seventh</Link>
          <br/>
          but thinks he is <Link to={`/ranks/first`}>first</Link> and <Link to={`/ranks/last`}>last</Link>
          <br/>
          7 believes in the hive
          <br/>
          and that he is not a part of it
          <br/>
          7 is functional
          <br/>
          7 knows he is prime
          <br/>
          which spoiled his personality
        </p>
      </ChapterBody>
      <PageNavigation toLeft='/numbers/top-ten/1' toCenter='/numbers' toRight='/numbers/top-ten/6'/>
    </main>
  )
}

export default Page

export const Head = () => <title>7</title>
