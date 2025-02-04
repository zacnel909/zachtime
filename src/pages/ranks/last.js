import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"


const Page = () => (
    <main>
        <ChapterTitle enum={'10'} title={'last'}/>
        <ChapterBody>
            <p>Last is <Link to={`/numbers/top-ten/10`}>#10</Link></p>
        </ChapterBody>
    </main>
)

export const Head = () => <title>Last</title>

export default Page
