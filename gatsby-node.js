/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

async function turnObjectsIntoPages({ graphql, actions }) {
  // 1. Get a template for the page
  const pageTemplate = path.resolve("./src/templates/Page.js")

  // 2. Query all page objects
  const { data } = await graphql(`
    query {
      pages: allPrismicPage {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)
  console.log(data)

  data.pages.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/${node.uid === "home" ? "" : node.uid}`,
      component: pageTemplate,
      context: {
        slug: node.uid,
      },
    })
  })
}

exports.createPages = async function (params) {
  await turnObjectsIntoPages(params)
}
