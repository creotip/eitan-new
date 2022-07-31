import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPostTemplate = ({ data: { previous, next, site, markdownRemark: post }, location }) => {
	const siteTitle = site.siteMetadata.title

	return (
		<Layout>
			<div className={`single-post`}>
				<Helmet title={`${post.frontmatter.title} | ${siteTitle}`}>
					<meta name='description' content={post.frontmatter.description} />
				</Helmet>
				<h1 className={`title`}>{post.frontmatter.title}</h1>
				<h2 className={'description mb20'}>{post.frontmatter.description}</h2>
				<div className='blog' dangerouslySetInnerHTML={{ __html: post.html }} />
				<hr />
			</div>
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(id: { eq: $id }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
		previous: markdownRemark(id: { eq: $previousPostId }) {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
		next: markdownRemark(id: { eq: $nextPostId }) {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
	}
`
