/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// You can delete this file if you're not using it
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                images
                master
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      // console.log(result)
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.slug.startsWith('/galleries/')) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/gallery-page.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
              imagePath: node.frontmatter.images,
              masterImage: node.frontmatter.master,
            },
          })
        }
      })
      resolve()
    })
  })
}
