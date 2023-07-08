import axios from "axios";

export async function getAllDoctors({ params, thunkApi }) {
  try {
    const res = await axios({
      url: `/api/doctors`,
      method: "GET",
    });

    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValues(error.response.data.message);
  }
}
