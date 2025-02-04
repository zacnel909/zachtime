import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"


const Page = () => {
    return (
        <main>
            <ChapterTitle enum={'3.'} title={'third'}/>
            <ChapterBody>
                <p>Third is <Link to={`/numbers/top-ten/3`}>#3</Link></p>
            </ChapterBody>
        </main>
  )
}

export const Head = () => <title>Third</title>

export default Page
