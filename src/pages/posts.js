import React, { useState } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogIndex = ({ data }) => {
	const posts = data.allMarkdownRemark.edges
	const [currentPage, setCurrentPage] = useState(1)
	const [blogPostsPerPage, setBlogPostsPerPage] = useState(40)
	const siteTitle = data.site.siteMetadata.title

	const indexOfLastTodo = currentPage * blogPostsPerPage
	const indexOfFirstTodo = indexOfLastTodo - blogPostsPerPage
	const currentTodos = posts.slice(indexOfFirstTodo, indexOfLastTodo)

	const renderPosts = currentTodos.map(({ node }) => {
		const title = get(node, 'frontmatter.title') || node.fields.slug
		let description = get(node, 'frontmatter.description')

		return (
			<div className={`col-sm-6 mb50`} key={node.fields.slug}>
				<h3 className={`mb10`}>
					<Link to={node.fields.slug}>{title}</Link>
				</h3>

				<div className={`mb15`}>{description.substring(0, 110)} ...</div>
				<Link className={'read-more'} to={node.fields.slug}>{`לקריאה במקור לחץ כאן`}</Link>
			</div>
		)
	})

	return (
		<Layout>
			<div className='blog-main pb20'>
				<Helmet title='מהתקשורת | עו"ד איתן כבריאן' />
				<div className='row'>{renderPosts}</div>

				<hr />
			</div>
		</Layout>
	)
}

export default BlogIndex

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "DD MMMM, YYYY")
						title
						description
					}
				}
			}
		}
	}
`
