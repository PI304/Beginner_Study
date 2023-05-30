let users = [];

const getData = async () => {
    try {
        // 유저 정보 가져오기
        const res = await axios.get(`http://52.78.238.141/api/users`);
        const users = res.data;
        console.log(users);

//     } catch (error) {
//         console.log(error);
//     }
// };

// 사용자 정보를 HTML 창에 추가
    const userInfoDiv = document.getElementById("userInfo");
    userInfoDiv.innerHTML = ""; // 이전에 출력된 내용 초기화

        
    const userInfoHtml = users.map((user) => `
    <p>닉네임: ${user.name}</p>
    `).join("");

    userInfoDiv.innerHTML = userInfoHtml;
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
        // 데이터를 다시 불러옴
        getData();
    } catch (error) {
        console.log(error);
    }
};

// 사용자 정보를 HTML 창에 추가
const displayUserInfo = (users) => {
    const userInfoDiv = document.getElementById("userInfo");
    userInfoDiv.innerHTML = ""; // 이전에 출력된 내용 초기화

    const userInfoHtml = users.map((user) => `
        <p>닉네임: ${user.name}</p>
    `).join("");

    userInfoDiv.innerHTML = userInfoHtml;
};





// 최초 데이터 불러오기
getData();

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
    const userName = document.getElementById("deleteUserNameInput").value;
    try {
        const res = await axios.delete(
            `http://52.78.238.141/api/users/${userName}`
        );
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};

// Post 가져오기
const getUserByPost = async () => {
    try {
        const res = await axios
        // get
            .get(`http://52.78.238.141/api/posts/`)
        const post = res.data;
        console.log(post);
        } catch (error) {
            console.log(error);
        }
    };

        // 새 post 생성

    const newPost = async () =>  {
        const userIdName = document
        .getElementById("getUserNameInput")
        .value;
        const content = document
        .getElementById("getContentInput")
        .value;
        const toUser = document
        .getElementById("getToUserInput")
        .value;

    //     const id = document
    //     .getElementById("newPostIdInput")
    //     .value;
    //     const userId = document
    //     .getElementById("getUserIdInput")
    //     .value;
    // const content = document
    //     .getElementById("getContentInput")
    //     .value;
    // const toUser = document
    //     .getElementById("getToUserInput")
    //     .value;
    // const updatedAt = document
    //     .getElementById("getUpdatedAtInput")
    //     .value; 
    // const createdAt = document
    //     .getElementById("getCreatedAtInput")
    //     .value;   
        
    try {
        const res = await axios.post(`http://52.78.238.141/api/posts/`)
        const createdPost = res.data;
        console.log(createPost);
        } catch (error) {
            console.log(error);
        }
        };

        // patch로 post 업데이트
        const updatePost = async () =>  {
            const userId = document.getElementById("updateUserPostInput").value;
            try {
                const res = await axios.patch(
                    `http://52.78.238.141/api/users/${PostId}`
                )
                const updatePost = res.data;
                console.log(updatePost);
            } catch (error) {
                console.log(error);
            }
        };

        // Post 삭제 delete
        const deletePost = async () => {
        const userId = document.getElementById("deletePostIdInput").value;
        try {
        const res = await axios.delete(
            `http://52.78.238.141/api/posts/${PostId}`
        );
        const deletePost = res.data;
        console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

// getUserByPost();