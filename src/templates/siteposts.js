import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SitePosts = ({ data }) => {
  const { heading, subheading, description, image } = data.contentfulSitePost
  return (
    <Layout>
      <Seo title={heading} />
      <div className="ourpost">
        <h1>{heading}</h1>
        <img alt={heading} src={image.file.url} />
        <h3>{subheading}</h3>
        <p>{description.raw}</p>
        <div><Link to="/siteposts">View more posts</Link> | <Link to="/">Back to Home</Link>
        </div>
      </div>
    </Layout>
  )
}

export default SitePosts

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulSitePost(slug: { eq: $slug }) {
      heading
      subheading
      slug
      description {
        raw
      }
      image {
        file {
          url
        }
      }
    }
  }
`