const getData = async () => {
  const res = await axios
    .get("http://52.78.238.141/api/users")
    .catch((error) => console.log(error));
  const users = res.data;
  console.log(users);
};

function addUser() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const url = document.getElementById("url");
  const introduction = document.getElementById("message");
  const data = {
    name: name.value,
    email: email.value,
    url: url.value,
    introduction: introduction.value,
  };

  axios
    .post("http://52.78.238.141/api/users", data)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}