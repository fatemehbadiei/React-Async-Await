// import "./FullComment.css"
// import {useEffect, useState} from "react";
// import axios from "axios";

// const FullComment = ({selectedId}) => {
//
//     const [comment, setComment] = useState(null);
//
//     useEffect(() => {
//         if (selectedId) {
//             axios.get(`https://jsonplaceholder.typicode.com/comments/${selectedId}`).then((response) => {
//                 setComment(response.data);
//             }).catch()
//         }
//     }, [selectedId]);
//
//     const deleteHandler = () => {
//       axios.delete(`https://jsonplaceholder.typicode.com/comments/${selectedId}`).then((response)=>{
//           console.log(response.data);
//       }).catch((err)=>{
//           console.log(err);
//       })
//     }
//
//     let commentDetail = <p>Please choose one comment</p>
//
//     if (selectedId) commentDetail = <p>Loading...</p>
//
//     if (comment) {
//         commentDetail =
//             <div className="fullComment">
//                 <p>Name : {comment.name}</p>
//                 <p>Email : {comment.email}</p>
//                 <p>Body : {comment.body}</p>
//                 <button onClick={deleteHandler}>Delete</button>
//             </div>
//     }
//     return commentDetail;
// }
//
// export default FullComment;


//use json server


// const FullComment = ({selectedId}) => {
//
//     const [comment, setComment] = useState(null);
//
//     useEffect(() => {
//         if (selectedId) {
//             axios.get(`http://localhost:3001/comments/${selectedId}`).then((response) => {
//                 setComment(response.data);
//             }).catch()
//         }
//     }, [selectedId]);
//
//     const deleteHandler = () => {
//         axios.delete(`http://localhost:3001/comments/${selectedId}`).then((response)=>{
//             console.log(response.data);
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }
//
//     let commentDetail = <p>Please choose one comment</p>
//
//     if (selectedId) commentDetail = <p>Loading...</p>
//
//     if (comment) {
//         commentDetail =
//             <div className="fullComment">
//                 <p>Name : {comment.name}</p>
//                 <p>Email : {comment.email}</p>
//                 <p>Body : {comment.body}</p>
//                 <button onClick={deleteHandler}>Delete</button>
//             </div>
//     }
//     return commentDetail;
// }
//
// export default FullComment;


//complete deleteHandler component and write it with async await


// const FullComment = ({selectedId,setComments,setSelectedId}) => {
//
//     const [comment, setComment] = useState(null);
//
//     useEffect(() => {
//         if (selectedId) {
//             axios.get(`http://localhost:3001/comments/${selectedId}`).then((response) => {
//                 setComment(response.data);
//             }).catch()
//         }
//     }, [selectedId]);
//
//     // const deleteHandler = () => {
//     //     axios.delete(`http://localhost:3001/comments/${selectedId}`).then((response)=>{
//     //         console.log(response.data);
//     //     }).catch((err)=>{
//     //         console.log(err);
//     //     })
//     // }
//
//
//     const deleteHandler = async () => {
//         try{
//             await axios.delete(`http://localhost:3001/comments/${selectedId}`);
//             const {data} = await axios.get("http://localhost:3001/comments");
//             setComments(data);
//             setComment(null);
//             setSelectedId(null);
//         }catch (e) {
//
//         }
//
//     }
//
//     let commentDetail = <p>Please choose one comment</p>
//
//     if (selectedId) commentDetail = <p>Loading...</p>
//
//     if (comment) {
//         commentDetail =
//             <div className="fullComment">
//                 <p>Name : {comment.name}</p>
//                 <p>Email : {comment.email}</p>
//                 <p>Body : {comment.body}</p>
//                 <button onClick={deleteHandler}>Delete</button>
//             </div>
//     }
//     return commentDetail;
// }
//
// export default FullComment;



//write http instead of axios

// import "./FullComment.css"
// import {useEffect, useState} from "react";
// import http from "../../services/httpService";
//
//
// const FullComment = ({selectedId,setComments,setSelectedId}) => {
//
//     const [comment, setComment] = useState(null);
//
//     useEffect(() => {
//         if (selectedId) {
//             http.get(`/comments/${selectedId}`).then((response) => {
//                 setComment(response.data);
//             }).catch()
//         }
//     }, [selectedId]);
//
//     // const deleteHandler = () => {
//     //     http.delete(`/comments/${selectedId}`).then((response)=>{
//     //         console.log(response.data);
//     //     }).catch((err)=>{
//     //         console.log(err);
//     //     })
//     // }
//
//
//     const deleteHandler = async () => {
//         try{
//             await http.delete(`/comments/${selectedId}`);
//             const {data} = await http.get("/comments");
//             setComments(data);
//             setComment(null);
//             setSelectedId(null);
//         }catch (e) {
//
//         }
//
//     }
//
//     let commentDetail = <p>Please choose one comment</p>
//
//     if (selectedId) commentDetail = <p>Loading...</p>
//
//     if (comment) {
//         commentDetail =
//             <div className="fullComment">
//                 <p>Name : {comment.name}</p>
//                 <p>Email : {comment.email}</p>
//                 <p>Body : {comment.body}</p>
//                 <button onClick={deleteHandler}>Delete</button>
//             </div>
//     }
//     return commentDetail;
// }
//
// export default FullComment;


//write this code with functions instead of http and get and post etc...


import "./FullComment.css"
import {useEffect, useState} from "react";
import {deleteComment} from "../../services/deleteComment";
import {getAllComments} from "../../services/getAllComments";
import {getOneComment} from "../../services/getOneComment";


const FullComment = ({selectedId,setComments,setSelectedId}) => {

    const [comment, setComment] = useState(null);

    useEffect(() => {
        if (selectedId) {
            getOneComment(selectedId).then((response) => {
                setComment(response.data);
            }).catch()
        }
    }, [selectedId]);

    // const deleteHandler = () => {
    //     http.delete(`/comments/${selectedId}`).then((response)=>{
    //         console.log(response.data);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }


    const deleteHandler = async () => {
        try{
            await deleteComment(selectedId);
            const {data} = await getAllComments();
            setComments(data);
            setComment(null);
            setSelectedId(null);
        }catch (e) {

        }

    }

    let commentDetail = <p>Please choose one comment</p>

    if (selectedId) commentDetail = <p>Loading...</p>

    if (comment) {
        commentDetail =
            <div className="fullComment">
                <p>Name : {comment.name}</p>
                <p>Email : {comment.email}</p>
                <p>Body : {comment.body}</p>
                <button onClick={deleteHandler}>Delete</button>
            </div>
    }
    return commentDetail;
}

export default FullComment;