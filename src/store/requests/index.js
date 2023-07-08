import axios from "axios";

export async function getAllDoctors(_, thunkApi) {
  try {
    const res = await axios({
      url: `${process.env.NEXT_PUBLIC_API}/Doctors`,
      method: "GET",
    });

    console.log(res, "res");

    return res.data;
  } catch (error) {
    console.log(error);
    // return thunkApi.rejectWithValues("error.response.data.message");
  }
}

export async function getOneDoctor(params, thunkApi) {
  try {
    const res = await axios({
      url: `${process.env.NEXT_PUBLIC_API}/todos/${params.id}`,
      method: "GET",
    });

    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValues(error.response.data.message);
  }
}
