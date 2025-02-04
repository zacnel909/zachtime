import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"


const Page = () => (
    <main>
        <ChapterTitle enum={'7'} title={'seventh'}/>
        <ChapterBody>
            <p>Seventh is <Link to={`/numbers/top-ten/7`}>#7</Link></p>
        </ChapterBody>
    </main>
)

export const Head = () => <title>Seventh</title>

export default Page
