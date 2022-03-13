export const getUser = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return await response.json();
  } catch (error) {
    return null;
  }
};
