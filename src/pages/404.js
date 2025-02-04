import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <h1>Error</h1>
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
