import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./BlogSite.scss";

const BlogSite = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}, sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
              postDescription {
                childMarkdownRemark {
                  excerpt
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="blog-section">
        <div className="blog-section__posts">
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <div className="post" key={edge.node.id}>
                <h1 className="post__title">
                {edge.node.title}
                </h1>
                <div className="meta">
                  <span>Napisano {edge.node.publishedDate}</span>
                </div>
                <div className="container">
                  {edge.node.featuredImage && (
                    <Img
                      className="featured"
                      fluid={edge.node.featuredImage.fluid}
                      alt={edge.node.title}
                      style={{ margin: '1rem', height: '300px' }}
                      imgStyle={{ objectFit: 'contain' }}
                    />
                  )}
                  <p className="excerpt">
                    {edge.node.excerpt.childMarkdownRemark.excerpt}
                  </p>
                </div>
                <div className="button">
                  <Link to={`/blog/${edge.node.slug}/`}>Przeczytaj więcej...</Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default BlogSite