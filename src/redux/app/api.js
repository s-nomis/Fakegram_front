import axios from "axios";

const API = axios.create({
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
export const getPost = (id) => API.get(`/photos/${id}`);
export const getPosts = (page) => API.get(`/photos?page=${page}`);
export const getMaxPosts = () => API.get(`/photos/count/max`);
export const addPost = (data) =>
    API.post(`/photos`, data, {
        headers: { "Content-Type": "multipart/form-data" },
    });
export const updatePost = (postId, data) => API.put(`/photos/${postId}`, data);
export const likePost = (postId) => API.put(`/photos/likes/${postId}`);
export const favPost = (postId) => API.put(`/photos/saved/${postId}`);
export const deletePost = (postId) => API.delete(`/photos/${postId}`);

/**
 * COMMENTS
 */
export const addComment = (postId, data) =>
    API.post(`/photos/${postId}/comments`, data);
export const getComments = (postId) => API.get(`/photos/${postId}/comments`);
export const deleteComment = (postId, commentId) =>
    API.delete(`/photos/${postId}/comments/${commentId}`);
