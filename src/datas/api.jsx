import axios from 'axios';
import React from 'react';
const URL = 'https://jsonplaceholder.typicode.com';
export const getUsers = async () => {
  try {
    const res = await axios.get(
      `${URL}/users?_limit=10`
    );
    return {success:true,data:res.data}
  } catch (error) {console.log(error);}
};
export const getTodos = async () => {
  try {
    const res = await axios.get(
      `${URL}/todos?_limit=10`
    );
    console.log(res.data);
    return {success:true,data:res.data}
  } catch (error) {console.log(error);}
};
export const getPosts = async () => {
  try {
    const res = await axios.get(
      `${URL}/posts?_limit=10`
    );
    console.log(res.data);
    return {success:true,data:res.data}
  } catch (error) {console.log(error);}
};
export const getAlbums = async () => {
  try {
    const res = await axios.get(
      `${URL}/albums?_limit=10`
    );
    console.log(res.data);
    return {success:true,data:res.data}
  } catch (error) {console.log(error);}
};
export const getPhotos = async () => {
  try {
    const res = await axios.get(
      `${URL}/photos?_limit=21`
    );
    console.log(res.data);
    return {success:true,data:res.data}
  } catch (error) {console.log(error)
  }
};
