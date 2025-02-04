import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"


const Page = () => {
    return (
        <main>
            <ChapterTitle enum={'4.'} title={'fourth'}/>
            <ChapterBody>
                <p>Fourth is <Link to={`/numbers/top-ten/4`}>#4</Link></p>
            </ChapterBody>
        </main>
  )
}

export const Head = () => <title>Fourth</title>

export default Page
