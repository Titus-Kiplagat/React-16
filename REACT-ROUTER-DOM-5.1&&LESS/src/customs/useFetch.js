import { useEffect, useState } from "react"

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error,setError] = useState(true)

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				await fetch(url)
					.then(response => {
						if (!response.ok) throw Error("Could not fetch data from that resource.")
						return response.json()
					})
					.then(data => {
						setIsLoading(false)
						return setData(data)
					});
			} catch (error) {
				setError(error.message)
				setIsLoading(false)
			}
		}
		fetchBlogs();
	}, [url])

	return {data, isLoading, error, setData}
}


export default useFetch