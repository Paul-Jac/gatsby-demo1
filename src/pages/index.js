import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <div className='home'>
      <h1>Hello Ishan</h1>
      <p>Welcome your awesome Blog</p>
      <div>
        <div
          style={{
            maxWidth: `340px`,
            margin: '0 auto',
          }}
        >
          <StaticImage />
        </div>
      </div>
      <Link to='/siteposts/'>View all posts</Link>
    </div>
  </Layout>
)

export default IndexPage
