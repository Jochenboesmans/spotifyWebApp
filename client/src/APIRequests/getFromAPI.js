export const getFromAPI = async (operation) => {
  const result = await axios.get(operation.url);
  return result.data;
};