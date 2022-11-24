import axios from "axios";

const API = axios.create({
    // baseURL: "https://fakegram-api.onrender.com/api",
    baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

/**
 * AUTHENTICATION
 */
export const verify = (token) => API.post(`/auth/verify`, token);
export const register = (user) => API.post(`/auth/register`, user);
export const login = (credentials) => API.post(`/auth/login`, credentials);
export const isUsernameFree = (username) =>
    API.post(`/users/register/username/${username}`, username);
export const isEmailFree = (email) =>
    API.post(`/users/register/email/${email}`, email);

/**
 * USERS
 */
export const getUserByUsername = (username) =>
    API.get(`/users/username/${username}`);
export const getUsers = (username) => API.get(`/users?username=${username}`);
export const updateUser = (userId, data) => API.put(`/users/${userId}`, data);
export const updateAvatar = (userId, data) =>
    API.put(`/users/${userId}/avatar`, data, {
        headers: { "Content-Type": "multipart/form-data" },
    });
export const updatePassword = (userId, data) =>
    API.put(`/users/${userId}/password`, data);

/**
 * POSTS
 */
export const getPost = (id) => API.get(`/posts/${id}`);
export const getPosts = (page) => API.get(`/posts?page=${page}`);
export const getMaxPosts = () => API.get(`/posts/count/max`);
export const addPost = (data) =>
    API.post(`/posts`, data, {
        headers: { "Content-Type": "multipart/form-data" },
    });
export const updatePost = (postId, data) => API.put(`/posts/${postId}`, data);
export const likePost = (postId) => API.put(`/posts/likes/${postId}`);
export const favPost = (postId) => API.put(`/posts/saved/${postId}`);
export const deletePost = (postId) => API.delete(`/posts/${postId}`);

/**
 * COMMENTS
 */
export const addComment = (postId, data) =>
    API.post(`/posts/${postId}/comments`, data);
export const getComments = (postId) => API.get(`/posts/${postId}/comments`);
export const deleteComment = (postId, commentId) =>
    API.delete(`/posts/${postId}/comments/${commentId}`);
