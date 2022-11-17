import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [author, setAuthor] = useState('')
	const [isPending, setPending] = useState(false)
	const history = useHistory()
	

	const handleSubmit = async (e) => {
		
		e.preventDefault()
		if (!title && !body & !author) return;
		const createdBlog = { title, body, author }
		setTitle('')
		setBody('')
		setAuthor('')
		setPending(true)
		try {
			await fetch(`${process.env.REACT_APP_URL_ENDPOINT}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(createdBlog)
			}).then(res => {
				setPending(false)
				history.push('/')
			})
		} catch (error) {
			console.log(error.message)
		}
	}
	
	return (
		<div className='create'>
			<h2>Add a new blog.</h2>
				<form onSubmit={handleSubmit}>
					<label>Blog title:</label>
					<input onChange={(e) => setTitle(e.target.value)} value={title} type="text" required />

					<label>Blog body:</label>
					<textarea onChange={(e) => setBody(e.target.value)} value={body} rows={10 } required></textarea>

					<label>Blog author:</label>
					<select onChange={(e) => setAuthor(e.target.value)} value={author}>
						<option value="mario">mario</option>
						<option value="yoshi">yoshi</option>
						<option value="kip">kip</option>
					</select>

				{!isPending && <button type='submit'>Add Blog</button>}
				{isPending && <button disabled>Adding Blog</button>}
				</form>
		</div>
	)
}

export default Create