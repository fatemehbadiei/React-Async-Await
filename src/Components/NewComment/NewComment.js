// import "./NewComment.css"
// import {useState} from "react";
// import axios from "axios";

// const NewComment = () => {
//
//     const [newComment,setNewComment] = useState({
//         name: "",
//         email: "",
//         content: ""
//     });
//
//     const changeHandler = (e) => {
//       setNewComment({...newComment,[e.target.name] : e.target.value});
//     }
//
//     const addNewComment = () => {
//       axios.post("https://jsonplaceholder.typicode.com/comments",{...newComment,postId:10}).then((response)=>{
//           console.log(response.data) ;
//       }).catch()
//     }
//
//     return(
//         <div className="newComment">
//             <h2>Add new comment</h2>
//             <div className="formControl">
//                 <label>Name</label>
//                 <input type="text" name="name" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Email</label>
//                 <input type="email" name="email" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Body</label>
//                 <textarea type="textarea" name="content" onChange={changeHandler}/>
//             </div>
//             <button onClick={addNewComment}>Add New comment</button>
//         </div>
//     )
// }
//
// export default NewComment;


//use json server


// const NewComment = () => {
//
//     const [newComment,setNewComment] = useState({
//         name: "",
//         email: "",
//         content: ""
//     });
//
//     const changeHandler = (e) => {
//         setNewComment({...newComment,[e.target.name] : e.target.value});
//     }
//
//     const addNewComment = () => {
//         axios.post("http://localhost:3001/comments",{...newComment,postId:10}).then((response)=>{
//             console.log(response.data) ;
//         }).catch()
//     }
//
//     return(
//         <div className="newComment">
//             <h2>Add new comment</h2>
//             <div className="formControl">
//                 <label>Name</label>
//                 <input type="text" name="name" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Email</label>
//                 <input type="email" name="email" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Body</label>
//                 <textarea type="textarea" name="content" onChange={changeHandler}/>
//             </div>
//             <button onClick={addNewComment}>Add New comment</button>
//         </div>
//     )
// }
//
// export default NewComment;


//add new comment to comments


// const NewComment = ({addNewComment}) => {
//
//     const [newComment,setNewComment] = useState({
//         name: "",
//         email: "",
//         content: ""
//     });
//
//     const changeHandler = (e) => {
//         setNewComment({...newComment,[e.target.name] : e.target.value});
//     }
//
//     return(
//         <div className="newComment">
//             <h2>Add new comment</h2>
//             <div className="formControl">
//                 <label>Name</label>
//                 <input type="text" name="name" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Email</label>
//                 <input type="email" name="email" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Body</label>
//                 <textarea type="textarea" name="content" onChange={changeHandler}/>
//             </div>
//             <button onClick={()=>addNewComment(newComment)}>Add New comment</button>
//         </div>
//     )
// }
//
// export default NewComment;


//add new comment to comments way2 with pass setComments


// const NewComment = ({setComments}) => {
//
//     const [newComment,setNewComment] = useState({
//         name: "",
//         email: "",
//         body: ""
//     });
//
//     const changeHandler = (e) => {
//         setNewComment({...newComment,[e.target.name] : e.target.value});
//     }
//
//     const addNewComment = () => {
//         axios.post("http://localhost:3001/comments",{...newComment,postId:10}).then((response)=>{
//             axios.get("http://localhost:3001/comments").then((response)=>{
//                 console.log(response.data)
//                 setComments(response.data)
//             })
//         }).catch()
//     }
//
//     return(
//         <div className="newComment">
//             <h2>Add new comment</h2>
//             <div className="formControl">
//                 <label>Name</label>
//                 <input type="text" name="name" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Email</label>
//                 <input type="email" name="email" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Body</label>
//                 <textarea type="textarea" name="body" onChange={changeHandler}/>
//             </div>
//             <button onClick={addNewComment}>Add New comment</button>
//         </div>
//     )
// }
//
// export default NewComment;


//write this code with async await


// const NewComment = ({setComments}) => {
//
//     const [newComment, setNewComment] = useState({
//         name: "",
//         email: "",
//         body: ""
//     });
//
//     const changeHandler = (e) => {
//         setNewComment({...newComment, [e.target.name]: e.target.value});
//     }
//
//     // const addNewComment = () => {
//     //     axios.post("http://localhost:3001/comments",{...newComment,postId:10}).then((response)=>{
//     //         axios.get("http://localhost:3001/comments").then((response)=>{
//     //             console.log(response.data)
//     //             setComments(response.data)
//     //         })
//     //     }).catch()
//     // }
//
//     const addNewComment = async () => {
//         try {
//             await axios.post("http://localhost:3001/comments", {...newComment, postId: 10});
//             const {data} = await axios.get("http://localhost:3001/comments");
//             setComments(data);
//         } catch (e) {
//         }
//     }
//
//     return (
//         <div className="newComment">
//             <h2>Add new comment</h2>
//             <div className="formControl">
//                 <label>Name</label>
//                 <input type="text" name="name" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Email</label>
//                 <input type="email" name="email" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Body</label>
//                 <textarea type="textarea" name="body" onChange={changeHandler}/>
//             </div>
//             <button onClick={addNewComment}>Add New comment</button>
//         </div>
//     )
// }
//
// export default NewComment;


//write http instead of axios


// import "./NewComment.css"
// import {useState} from "react";
// import http from "../../services/httpService";
//
//
// const NewComment = ({setComments}) => {
//
//     const [newComment, setNewComment] = useState({
//         name: "",
//         email: "",
//         body: ""
//     });
//
//     const changeHandler = (e) => {
//         setNewComment({...newComment, [e.target.name]: e.target.value});
//     }
//
//     // const addNewComment = () => {
//     //     http.post("/comments",{...newComment,postId:10}).then((response)=>{
//     //         http.get("/comments").then((response)=>{
//     //             console.log(response.data)
//     //             setComments(response.data)
//     //         })
//     //     }).catch()
//     // }
//
//     const addNewComment = async () => {
//         try {
//             await http.post("/comments", {...newComment, postId: 10});
//             const {data} = await http.get("/comments");
//             setComments(data);
//         } catch (e) {
//         }
//     }
//
//     return (
//         <div className="newComment">
//             <h2>Add new comment</h2>
//             <div className="formControl">
//                 <label>Name</label>
//                 <input type="text" name="name" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Email</label>
//                 <input type="email" name="email" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Body</label>
//                 <textarea type="textarea" name="body" onChange={changeHandler}/>
//             </div>
//             <button onClick={addNewComment}>Add New comment</button>
//         </div>
//     )
// }
//
// export default NewComment;



//write this code with functions instead of http and get and post etc...



// import "./NewComment.css"
// import {useState} from "react";
// import {postNewComment} from "../../services/postNewComment";
// import {getAllComments} from "../../services/getAllComments";
//
//
// const NewComment = ({setComments}) => {
//
//     const [newComment, setNewComment] = useState({
//         name: "",
//         email: "",
//         body: ""
//     });
//
//     const changeHandler = (e) => {
//         setNewComment({...newComment, [e.target.name]: e.target.value});
//     }
//
//     // const addNewComment = () => {
//     //     http.post("/comments",{...newComment,postId:10}).then((response)=>{
//     //         http.get("/comments").then((response)=>{
//     //             console.log(response.data)
//     //             setComments(response.data)
//     //         })
//     //     }).catch()
//     // }
//
//     const addNewComment = async () => {
//         try {
//             await postNewComment({...newComment, postId: 10});
//             const {data} = await getAllComments();
//             setComments(data);
//         } catch (e) {
//         }
//     }
//
//     return (
//         <div className="newComment">
//             <h2>Add new comment</h2>
//             <div className="formControl">
//                 <label>Name</label>
//                 <input type="text" name="name" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Email</label>
//                 <input type="email" name="email" onChange={changeHandler}/>
//             </div>
//             <div className="formControl">
//                 <label>Body</label>
//                 <textarea type="textarea" name="body" onChange={changeHandler}/>
//             </div>
//             <button onClick={addNewComment}>Add New comment</button>
//         </div>
//     )
// }
//
// export default NewComment;


//write this code with react-router-dom

import "./NewComment.css"
import {useState} from "react";
import {postNewComment} from "../../services/postNewComment";
import {useNavigate} from "react-router-dom";


const NewComment = () => {

    let navigate = useNavigate();
    const [newComment, setNewComment] = useState({
        name: "",
        email: "",
        body: ""
    });

    const changeHandler = (e) => {
        setNewComment({...newComment, [e.target.name]: e.target.value});
    }


    const addNewComment = async () => {
        try {
            await postNewComment({...newComment, postId: 10});
            navigate("/");
        } catch (e) {
        }
    }

    return (
        <div className="newComment">
            <h2>Add new comment</h2>
            <div className="formControl">
                <label>Name</label>
                <input type="text" name="name" onChange={changeHandler}/>
            </div>
            <div className="formControl">
                <label>Email</label>
                <input type="email" name="email" onChange={changeHandler}/>
            </div>
            <div className="formControl">
                <label>Body</label>
                <textarea type="textarea" name="body" onChange={changeHandler}/>
            </div>
            <button onClick={addNewComment}>Add New comment</button>
        </div>
    )
}

export default NewComment;