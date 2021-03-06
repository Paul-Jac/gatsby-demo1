import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SitePosts = ({ data }) => {
  const ourPosts = data.allContentfulSitePost.edges
  // console.log(ourPosts);
  return (
    <Layout>
      <Seo title="Our Posts" />
      <h1>{"Welcome to our Blog"}</h1>
      <div>
        {ourPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/siteposts/${post.slug}`}>
              {post.heading}
            </Link>
          </div>
        ))}
        <span />
        <Link to="/">Back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default SitePosts

export const query = graphql`
  query SitePostsPageQuery {
    allContentfulSitePost(limit: 1000) {
      edges {
        node {
          id
          slug
          heading
          description {
            raw
          }
          subheading
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`