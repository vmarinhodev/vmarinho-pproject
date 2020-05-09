
const path = require("path")
const Queries = require("./queries")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  try {
    const projectsTemplate = path.resolve("./src/templates/project.js")

    const { data, errors } = await graphql(Queries)

    const projects = data.projects.edges
    const length = projects.length
    
    // Create project pages
    projects.forEach(({ node }, index) => {

      const prev = index === 0 ? projects[length - 1].node : projects[index - 1].node
      const next = index === length - 1 ? projects[0].node : projects[index + 1].node
      createPage({
        path: node.frontmatter.path,
        component: projectsTemplate,
        context: {
          slug: node.fields.slug,
          prev,
          next,
        }
      })
    })

    if (errors) {
      throw new Error(errors)
    }
  } catch (err) {
    console.log(err)
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}