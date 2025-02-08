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
          7 believes in the hive
          <br/>
          but not that she is part of it
          <br/>
          7 has a huge ego
          <br/>
          7 is zero sum
          <br/>
          7 is proud of his primality
          <br/>
          and unaware of her primacy
        </p>
      </ChapterBody>
      <PageNavigation toLeft='/numbers/top-ten/1' toCenter='/numbers' toRight='/numbers/top-ten/6'/>
    </main>
  )
}

export default Page

export const Head = () => <title>7</title>
