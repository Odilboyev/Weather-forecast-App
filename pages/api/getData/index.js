const axios = require("axios");
export const GetData = async (lat, lon) => {
  const API = "baaf03e291ca5d20873d309459bf6210";
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${API}&units=metric`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
