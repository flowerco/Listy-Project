import axios from 'axios';
import { PostObj } from '../../customTypes';
const postsBaseUrl = 'http://localhost:3030';

export const fetchPosts: () => Promise<PostObj[]> = async () => {
	try {
		// NOTE: Headers are not set here. An authentication header is added in the backend middleware.
		const res = await axios.get(postsBaseUrl + `/mainfeed`, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.log('Error in Mainfeed fetchPost: ', error);
	}
};

export const postPost = async (postObj: PostObj) => {
	try {
		const res = await axios.post(postsBaseUrl + `/api/posts/`, postObj, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.log('Error in Mainfeed postPost: ', error);
	}
};
