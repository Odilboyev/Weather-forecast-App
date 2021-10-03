import axios from "axios";
export const GetData_WithCity = async (city) => {
  const API = "baaf03e291ca5d20873d309459bf6210";
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&exclude=hourly&appid=${API}`
    );
    return response.data;
  } catch (error) {
    return "error";
  }
};
