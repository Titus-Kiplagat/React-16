import BlogList from "./BlogList";
import useFetch from '../customs/useFetch';


 
const Home = () => {
	const { data: blogs, isLoading, error } = useFetch(`${process.env.REACT_APP_URL_ENDPOINT}`)
	

	return (
		<div className='home'>
			{isLoading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			{blogs && <BlogList blogs={blogs} title='All Blogs' />}
		</div>
	)
}

export default Home