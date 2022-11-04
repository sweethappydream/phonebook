import axios from "axios";

interface updateData {
  id: number;
  firstname: string;
  lastname: string;
  phone: string;
}

interface postData {
  firstname: string;
  lastname: string;
  phone: string;
}

const apiUrl = "http://localhost:5000/user";

export const get = async (lname: string) => {
  try {
    const result = await axios.get(apiUrl + `?lastname=${lname}`);
    return result.data;
  } catch {
    return [];
  }
};

export const post = async (data: postData) => {
  try {
    const result = await axios.post(
      apiUrl +
        `?firstname=${data.firstname}&lastname=${data.lastname}&phone=${data.phone}`
    );
    return result;
  } catch (e) {
    return e;
  }
};

export const put = async (data: updateData) => {
  try {
    const result = await axios.put(
      apiUrl +
        `?id=${data.id}&firstname=${data.firstname}&lastname=${data.lastname}&phone=${data.phone}`
    );
    return result.data;
  } catch (e) {
    return e;
  }
};

export const del = async (id: string) => {
  try {
    const result = await axios.delete(apiUrl + `?id=${id}`);
    return result;
  } catch(e) {
    return e;
  }
};
