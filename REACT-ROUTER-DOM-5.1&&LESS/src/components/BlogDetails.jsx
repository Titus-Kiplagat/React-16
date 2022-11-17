import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from '../customs/useFetch';

const BlogDetails = () => {
	const { id } = useParams()
	const history = useHistory()
	const { data: blog, isLoading, error } = useFetch(`${process.env.REACT_APP_URL_ENDPOINT}/${id}`)

	const handleDelete = async () => {
		await fetch(`${process.env.REACT_APP_URL_ENDPOINT}/${id}`, {
			method: 'DELETE'
		}).then(() => history.push('/'))
	}

	return (
		<div className='blog-details'>
			{isLoading && <p>loading...</p>}
			{error && <p>{error}</p>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>
						{blog.body}
					</div>
					<button onClick={handleDelete}>Delete</button>
				</article>
			)}
		</div>
	)
}

export default BlogDetails