// 서버에서 게시글 목록 요청하기
// 받은 게시글 중 id가 짝수인 게시글의 아이디와 제목 출력하기
// const getPosts = async () => {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();

//         posts.forEach((post) => {
//             if (post.id % 2 === 0) {
//                 console.log(post.id, post.title);
//             }
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };
// getPosts();

// 전달받은 댓글들 중, postId가 3인 댓글 내용 출력
// const getComments = async () => {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/comments"
//         );
//         const comments = await response.json();

//         comments.forEach((comment) => {
//             if (comment.postId === 3) {
//                 console.log(comment.body);
//             }
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };
// getComments();

// 전달받은 회원들 중, zipcode만 출력
// const getUsers = async () => {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );
//         const users = await response.json();

//         users.forEach((user) => {
//             console.log(user.address.zipcode);
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };
// getUsers();

// 게시글 정보를 전달받은 후,
// 게시글 조회를 모듈화하여 사용한다.
// 게시글 조회시, 회원의 번호를 전달받아서 그 작성자의 게시글만 가져온다.
// 전체 정보를 출력한다.
const postService = (() => {
    const getListByUserId = async (userId, callback, page = 1) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const posts = await response.json();

            if (callback) {
                callback(userId, posts);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return { getListByUserId: getListByUserId };
})();

const printPostsByUserId = (userId, posts) => {
    posts
        .filter((post) => post.userId === userId)
        .forEach((post) => {
            console.log(post);
        });
};
postService.getListByUserId(1, printPostsByUserId);

// 앨범 정보를 전달받은 후,
// 회원 번호가 5인 정보를 모두 가져온다.
// 그 중 userId와 title만 출력한다.
// const albumService = (() => {
//     const getListByUserId = async (userId, callback, page = 1) => {
//         try {
//             const response = await fetch(
//                 "https://jsonplaceholder.typicode.com/albums"
//             );
//             const albums = await response.json();

//             if (callback) {
//                 callback(userId, albums);
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return { getListByUserId: getListByUserId };
// })();

// const printAlbumTitlesOfUser = (userId, albums) => {
//     albums
//         .filter((album) => album.userId === userId)
//         .forEach((album) => {
//             console.log(album.userId, album.title);
//         });
// };

// albumService.getListByUserId(5, printAlbumTitlesOfUser);
