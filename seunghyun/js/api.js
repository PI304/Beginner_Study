const getData = async () => {
    try {
        // 유저 정보 가져오기
        const res = await axios.get(`http://52.78.238.141/api/users`);
        const users = res.data;
        console.log(users);

    } catch (error) {
        console.log(error);
    }
};

// getData(); 새 유저 생성
const addUser = async () => {
    const name = document
        .getElementById("getUserNameInput")
        .value;
    const email = document
        .getElementById("getUserEmailInput")
        .value;
    const url = document
        .getElementById("getUserURLInput")
        .value;
    const introduction = document
        .getElementById("getUserIntroductionInput")
        .value;
    try {
        const res = await axios.post(`http://52.78.238.141/api/users`, {name, email, url, introduction});
        const newUser = res.data;
        console.log(newUser);
    } catch (error) {
        console.log(error);
    }
    };

// userId 가져오기
const getUserById = async () => {
    const userId = document.getElementById("getUserIdInput").value;
    try {
        const res = await axios.get(`http://52.78.238.141/api/users/${userId}`)
        const user = res.data;
        console.log(user);

    } catch (error) {
        console.log(error);
    }
};

// getUserById();

// update User 
const updateUser = async () => {
    const userId = document.getElementById("updateUserIdInput").value;
    try {
        const updateResponse = await axios.patch(
            `http://52.78.238.141/api/users/${userId}`
        )
        const updateUser = updateResponse.data;
        console.log(updateUser);
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async () => {
    const userId = document.getElementById("deleteUserIdInput").value;
    try {
        const res = await axios.delete(
            `http://52.78.238.141/api/users/${userId}`
        );
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};

// Post 가져오기
const getUserByPost = async () => {
    try {
        const response = await axios
        // get
            .get(`http://52.78.238.141/api/posts/`)
        const post = response.data;
        console.log(post);

        // post 생성
        const newPost = {
            title: "New Post",
            body: "New Post Body",
            url: "dsf",
            introduction: "new post",
            userId: 1
        };
        const createResponse = await axios.post(`http://52.78.238.141/api/posts/`)
        const createdPost = createResponse.data;
        console.log(createPost);

        // patch로 post 업데이트
        const updatePost = {
            title: "Update Post",
            body: "Updated Post Body",
            userId: 2
        };
        const patchResponse = await axios.patch(
            `http://52.78.238.141/api/posts/${postId}`
        )
        const patchPost = patchResponse.data;
        console.log(patchPost);

        // delete
        const deleteResponse = await axios.delete(
            `http://52.78.238.141/api/posts/${postId}`
        );
        console.log(deleteResponse.data);
    } catch (error) {
        console.log(error);
    }
};

// getUserByPost();