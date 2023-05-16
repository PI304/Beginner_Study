const getData = async () => {
  const res = await axios
  .get('http://52.78.238.141/api/users')
  .catch((error) => console.log(error));
  const users = res.data;
  console.log(users);
}
getData();

const postData = async () => {
  const res = await axios
  .post('http://52.78.238.141/api/posts/content')
  .catch((error) => console.log(error));
  const users = res.data;
  console.log(users);
}
postData();