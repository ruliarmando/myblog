import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Ruli's Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome my personal website. You are on the home page.</p>
        <p>
          My name is Rully Ramanda. I am a passionate software engineer from Indonesia.
          I do mostly frontend web development with React JS + Tailwind and Typescript.
        </p>
        <p>You can find me on:</p>
        <ul>
          <li>
            <a href="https://github.com/ruliarmando">Github</a>
            <a href="https://www.linkedin.com/in/rully-ramanda/">Linkedin</a>
            <a href="https://twitter.com/ruli_armando">Twitter</a>
          </li>
        </ul>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
