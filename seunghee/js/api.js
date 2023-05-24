const getAllUsers = async () => {
  try {
    await axios.get("http://52.78.238.141/api/users").then((response) => {
      if (response.status === 200) {
        alert("OK");
        console.log(response.data);
      }
    });
  } catch (error) {
    if (error.response.status === 500) {
      alert("Something went wrong. Please try again");
    } else {
      alert(error.response.status + "error");
    }
  }
};

const addSingleUser = async () => {
  try {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const site = document.getElementById("site").value;
    const intro = document.getElementById("intro").value;
    await axios
      .post("http://52.78.238.141/api/users", {
        name: name,
        email: email,
        url: site,
        introduction: intro,
      })
      .then((response) => {
        if (response.status === 201) {
          alert("OK");
          console.log(response.data);
        }
      });
  } catch (error) {
    if (error.response.status === 400) {
      alert("Invalid input");
    } else if (error.response.status === 409) {
      alert("User with the provided email already exists");
    } else if (error.response.status === 500) {
      alert("Something went wrong, please try again");
    } else {
      alert(error.response.status + "error");
    }
  }
};

const getUserById = async (userId) => {
  try {
    await axios
      .get(`http://52.78.238.141/api/users/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          alert("OK");
          console.log(response.data);
        }
      });
  } catch (error) {
    if (error.response.status === 404) {
      alert("Could not find user with the provided id");
    } else if (error.response.status === 500) {
      alert("Something went wrong. Please try again");
    } else {
      alert(error.response.status + "error");
    }
  }
};

const updateUserData = async (userId) => {
  try {
    await axios
      .patch(`http://52.78.238.141/api/users/${userId}`, {
        email: "heni2008@naver.com",
        url: "https://www.naver.com/",
        introduction: "Hello",
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Updated User");
          console.log(response.data);
        }
      });
  } catch (error) {
    if (error.response.status === 400) {
      alert("Invalid input");
    } else if (error.response.status === 404) {
      alert("Could not find user with the provided id");
    } else if (error.response.status === 500) {
      alert("Something went wrong. Please try again");
    } else {
      alert(error.response.status + "error");
    }
  }
};

const softDeleteUser = async (userId) => {
  try {
    await axios
      .delete(`http://52.78.238.141/api/users/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          alert("Ok");
          console.log(response.data);
        }
      });
  } catch {
    if (error.response.status === 404) {
      alert("Could not find user with the provided id");
    } else if (error.response.status === 500) {
      alert("Something went wrong. Please try again");
    } else {
      alert(error.response.status + "error");
    }
  }
};

const getAllPosts = async () => {
  try {
    await axios.get("http://52.78.238.141/api/posts").then((response) => {
      if (response.status === 200) {
        alert("OK");
        console.log(response.data);
      }
    });
  } catch (error) {
    if (error.response.status === 404) {
      alert("no posts found");
    } else if (error.response.status === 500) {
      alert("Something went wrong. Please try again");
    } else {
      alert(error.response.status + "error");
    }
  }
};

/*const addSinglePost = async () => {
  try {
    const userName = document.getElementById("user_name").value;
    const content = document.getElementById("content").value;
    await axios
      .post("http://52.78.238.141/api/posts", {
        userId: ,
        content: content
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Create a new Post");
          console.log(response.data);
        }
      });
  } catch (error) {}
};*/

getAllUsers();
getAllPosts();
