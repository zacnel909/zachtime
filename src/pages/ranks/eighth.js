import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"


const Page = () => (
    <main>
        <ChapterTitle enum={'8'} title={'eighth'}/>
        <ChapterBody>
            <p>Eighth is <Link to={`/numbers/top-ten/8`}>#8</Link></p>
        </ChapterBody>
    </main>
)

export const Head = () => <title>Eighth</title>

export default Page
