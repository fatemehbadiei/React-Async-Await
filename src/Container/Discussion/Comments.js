// import Comment from "../../Components/Comment/Comment";
// import FullComment from "../../Components/FullComment/FullComment";
// import NewComment from "../../Components/NewComment/NewComment";
// import "./Comments.css"
// import {useEffect, useState} from "react";
// import axios from "axios";

// const Comments = () => {
//
//     const [comments,setComments] = useState(null);
//
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
//             setComments(response.data.slice(0,4));//get 4 comments
//         }).catch((error)=>{
//             console.log(error);
//         })
//     },[])
//
//   return(
//       <main>
//         <section>
//             {comments ? comments.map(c=> <Comment key={c.id} name={c.name} email={c.email}/>) : <p>Loading...</p>}
//         </section>
//         <section>
//             <FullComment/>
//         </section>
//         <section>
//             <NewComment/>
//         </section>
//       </main>
//   )
// }
//
// export default Comments;


//write this code with async await

// const Comments = () => {
//
//     const [comments,setComments] = useState(null);
//
//     useEffect(()=>{
//         getComments();
//     },[]);
//
//     // async function getComments() {
//     //     try {
//     //         const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
//     //         setComments(response.data.slice(0,4));
//     //     }catch (e) {
//     //         console.log(e);
//     //     }
//     // }
//
//     //write with arrow function
//
//      const getComments = async ()=> {
//         try {
//             //destruct data from response
//             const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments");
//             setComments(data.slice(0,4));
//         }catch (e) {
//             console.log(e);
//         }
//     }
//
//     return(
//         <main>
//             <section>
//                 {comments ? comments.map(c=> <Comment key={c.id} name={c.name} email={c.email}/>) : <p>Loading...</p>}
//             </section>
//             <section>
//                 <FullComment/>
//             </section>
//             <section>
//                 <NewComment/>
//             </section>
//         </main>
//     )
// }
//
// export default Comments;


// const Comments = () => {
//
//     const [comments,setComments] = useState(null);
//     const [selectedId,setSelectedId] = useState(null);
//
//     useEffect(()=>{
//         const getComments = async ()=> {
//             try {
//                 //destruct data from response
//                 const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments");
//                 setComments(data.slice(0,4));
//             }catch (e) {
//                 console.log(e);
//             }
//         }
//         getComments();
//     },[]);
//
//     const selectCommentHandler = (id) => {
//         setSelectedId(id);
//     }
//
//     return(
//         <main>
//             <section>
//                 {comments ? comments.map(c=> <Comment key={c.id} name={c.name} email={c.email} onClick={ () => selectCommentHandler(c.id)}/>) : <p>Loading...</p>}
//             </section>
//             <section>
//                 <FullComment selectedId={selectedId}/>
//             </section>
//             <section>
//                 <NewComment/>
//             </section>
//         </main>
//     )
// }
//
// export default Comments;


//use json server


// const Comments = () => {
//
//     const [comments,setComments] = useState(null);
//     const [selectedId,setSelectedId] = useState(null);
//
//     useEffect(()=>{
//         const getComments = async ()=> {
//             try {
//                 //destruct data from response
//                 const {data} = await axios.get("http://localhost:3001/comments");
//                 setComments(data.slice(0,4));
//             }catch (e) {
//                 console.log(e);
//             }
//         }
//         getComments();
//     },[]);
//
//     const selectCommentHandler = (id) => {
//         setSelectedId(id);
//     }
//
//     return(
//         <main>
//             <section>
//                 {comments ? comments.map(c=> <Comment key={c.id} name={c.name} email={c.email} onClick={ () => selectCommentHandler(c.id)}/>) : <p>Loading...</p>}
//             </section>
//             <section>
//                 <FullComment selectedId={selectedId}/>
//             </section>
//             <section>
//                 <NewComment/>
//             </section>
//         </main>
//     )
// }
//
// export default Comments;


//add new comment to comments


// const Comments = () => {
//
//     const [comments,setComments] = useState(null);
//     const [selectedId,setSelectedId] = useState(null);
//
//     useEffect(()=>{
//         const getComments = async ()=> {
//             try {
//                 //destruct data from response
//                 const {data} = await axios.get("http://localhost:3001/comments");
//                 setComments(data);
//             }catch (e) {
//                 console.log(e);
//             }
//         }
//         getComments();
//     },[]);
//
//     const selectCommentHandler = (id) => {
//         setSelectedId(id);
//     }
//
//
//     const addNewComment = (newComment) => {
//         axios.post("http://localhost:3001/comments",{...newComment,postId:10}).then((response)=>{
//             axios.get("http://localhost:3001/comments").then((response)=>{
//                 setComments(response.data)
//             })
//         }).catch()
//     }
//
//     return(
//         <main>
//             <section>
//                 {comments ? comments.map(c=> <Comment key={c.id} name={c.name} email={c.email} onClick={ () => selectCommentHandler(c.id)}/>) : <p>Loading...</p>}
//             </section>
//             <section>
//                 <FullComment selectedId={selectedId}/>
//             </section>
//             <section>
//                 <NewComment addNewComment={addNewComment}/>
//             </section>
//         </main>
//     )
// }
//
// export default Comments;


//add comment to comments way2 with pass setComments


// const Comments = () => {
//
//     const [comments,setComments] = useState(null);
//     const [selectedId,setSelectedId] = useState(null);
//
//     useEffect(()=>{
//         const getComments = async ()=> {
//             try {
//                 //destruct data from response
//                 const {data} = await axios.get("http://localhost:3001/comments");
//                 setComments(data);
//             }catch (e) {
//                 console.log(e);
//             }
//         }
//         getComments();
//     },[]);
//
//     const selectCommentHandler = (id) => {
//         setSelectedId(id);
//     }
//
//
//     return(
//         <main>
//             <section>
//                 {comments ? comments.map(c=> <Comment key={c.id} name={c.name} email={c.email} onClick={ () => selectCommentHandler(c.id)}/>) : <p>Loading...</p>}
//             </section>
//             <section>
//                 <FullComment selectedId={selectedId}/>
//             </section>
//             <section>
//                 <NewComment setComments={setComments}/>
//             </section>
//         </main>
//     )
// }
//
// export default Comments;


//manage errors


// const Comments = () => {
//
//     const [comments, setComments] = useState(null);
//     const [selectedId, setSelectedId] = useState(null);
//     const [error, setError] = useState(false)
//
//     useEffect(() => {
//         const getComments = async () => {
//             try {
//                 //destruct data from response
//                 const {data} = await axios.get("http://localhost:3001/comments");
//                 setComments(data);
//             } catch (e) {
//                 setError(true);
//             }
//         }
//         getComments();
//     }, []);
//
//     const selectCommentHandler = (id) => {
//         setSelectedId(id);
//     }
//
//
//     const renderComments = () => {
//
//         let renderValue = <p>Loading...</p>
//
//         if (error) renderValue = <p>Fetching is failed</p>
//
//         if (comments && !error){
//             renderValue = comments.map(c =>
//                 <Comment
//                     key={c.id}
//                     name={c.name}
//                     email={c.email}
//                     onClick={() => selectCommentHandler(c.id)}
//                 />
//             )
//         }
//
//         return renderValue
//     }
//
//     return (
//         <main>
//             <section>
//                 {renderComments()}
//             </section>
//             <section>
//                 <FullComment selectedId={selectedId}/>
//             </section>
//             <section>
//                 <NewComment setComments={setComments}/>
//             </section>
//         </main>
//     )
// }
//
// export default Comments;

//use react toastify

// import { toast } from 'react-toastify';
//
// const Comments = () => {
//
//     const [comments, setComments] = useState(null);
//     const [selectedId, setSelectedId] = useState(null);
//     const [error, setError] = useState(false)
//
//     useEffect(() => {
//         const getComments = async () => {
//             try {
//                 //destruct data from response
//                 const {data} = await axios.get("http://localhost:3001/comments");
//                 setComments(data);
//             } catch (e) {
//                 setError(true);
//             }
//         }
//         getComments();
//     }, []);
//
//     const selectCommentHandler = (id) => {
//         setSelectedId(id);
//     }
//
//
//     const renderComments = () => {
//
//         let renderValue = <p>Loading...</p>
//
//         if (error) {
//             renderValue = <p>Fetching is failed</p>
//             toast.error("this is error");
//             // toast.success("hellllooooo")
//         }
//
//         if (comments && !error){
//             renderValue = comments.map(c =>
//                 <Comment
//                     key={c.id}
//                     name={c.name}
//                     email={c.email}
//                     onClick={() => selectCommentHandler(c.id)}
//                 />
//             )
//         }
//
//         return renderValue
//     }
//
//     return (
//         <main>
//             <section>
//                 {renderComments()}
//             </section>
//             <section>
//                 <FullComment selectedId={selectedId}/>
//             </section>
//             <section>
//                 <NewComment setComments={setComments}/>
//             </section>
//         </main>
//     )
// }
//
// export default Comments;


//write this code with async await


// const Comments = () => {
//
//     const [comments, setComments] = useState(null);
//     const [selectedId, setSelectedId] = useState(null);
//     const [error, setError] = useState(false)
//
//     useEffect(() => {
//         const getComments = async () => {
//             try {
//                 //destruct data from response
//                 const {data} = await axios.get("http://localhost:3001/comments");
//                 setComments(data);
//             } catch (e) {
//                 setError(true);
//             }
//         }
//         getComments();
//     }, []);
//
//     const selectCommentHandler = (id) => {
//         setSelectedId(id);
//     }
//
//
//     const renderComments = () => {
//
//         let renderValue = <p>Loading...</p>
//
//         if (error) {
//             renderValue = <p>Fetching is failed</p>
//         }
//
//         if (comments && !error){
//             renderValue = comments.map(c =>
//                 <Comment
//                     key={c.id}
//                     name={c.name}
//                     email={c.email}
//                     onClick={() => selectCommentHandler(c.id)}
//                 />
//             )
//         }
//
//         return renderValue
//     }
//
//     return (
//         <main>
//             <section>
//                 {renderComments()}
//             </section>
//             <section>
//                 <FullComment selectedId={selectedId} setComments={setComments} setSelectedId={setSelectedId}/>
//             </section>
//             <section>
//                 <NewComment setComments={setComments}/>
//             </section>
//         </main>
//     )
// }
//
// export default Comments;


//write http instead of axios


// import Comment from "../../Components/Comment/Comment";
// import FullComment from "../../Components/FullComment/FullComment";
// import NewComment from "../../Components/NewComment/NewComment";
// import "./Comments.css"
// import {useEffect, useState} from "react";
// import http from "../../services/httpService";
//
// const Comments = () => {
//
//     const [comments, setComments] = useState(null);
//     const [selectedId, setSelectedId] = useState(null);
//     const [error, setError] = useState(false)
//
//     useEffect(() => {
//         const getComments = async () => {
//             try {
//                 //destruct data from response
//                 const {data} = await http.get("/comments");
//                 setComments(data);
//             } catch (e) {
//                 setError(true);
//             }
//         }
//         getComments();
//     }, []);
//
//     const selectCommentHandler = (id) => {
//         setSelectedId(id);
//     }
//
//
//     const renderComments = () => {
//
//         let renderValue = <p>Loading...</p>
//
//         if (error) {
//             renderValue = <p>Fetching is failed</p>
//         }
//
//         if (comments && !error){
//             renderValue = comments.map(c =>
//                 <Comment
//                     key={c.id}
//                     name={c.name}
//                     email={c.email}
//                     onClick={() => selectCommentHandler(c.id)}
//                 />
//             )
//         }
//
//         return renderValue
//     }
//
//     return (
//         <main>
//             <section>
//                 {renderComments()}
//             </section>
//             <section>
//                 <FullComment selectedId={selectedId} setComments={setComments} setSelectedId={setSelectedId}/>
//             </section>
//             <section>
//                 <NewComment setComments={setComments}/>
//             </section>
//         </main>
//     )
// }
//
// export default Comments;


//write this code with functions instead of http and get and post etc...



// import Comment from "../../Components/Comment/Comment";
// import FullComment from "../../Components/FullComment/FullComment";
// import NewComment from "../../Components/NewComment/NewComment";
// import "./Comments.css"
// import {useEffect, useState} from "react";
// import {getAllComments} from "../../services/getAllComments";
//
// const Comments = () => {
//
//     const [comments, setComments] = useState(null);
//     const [selectedId, setSelectedId] = useState(null);
//     const [error, setError] = useState(false)
//
//     useEffect(() => {
//         const getComments = async () => {
//             try {
//                 //destruct data from response
//                 const {data} = await getAllComments();
//                 setComments(data);
//             } catch (e) {
//                 setError(true);
//             }
//         }
//         getComments();
//     }, []);
//
//     const selectCommentHandler = (id) => {
//         setSelectedId(id);
//     }
//
//
//     const renderComments = () => {
//
//         let renderValue = <p>Loading...</p>
//
//         if (error) {
//             renderValue = <p>Fetching is failed</p>
//         }
//
//         if (comments && !error){
//             renderValue = comments.map(c =>
//                 <Comment
//                     key={c.id}
//                     name={c.name}
//                     email={c.email}
//                     onClick={() => selectCommentHandler(c.id)}
//                 />
//             )
//         }
//
//         return renderValue
//     }
//
//     return (
//         <main>
//             <section>
//                 {renderComments()}
//             </section>
//             <section>
//                 <FullComment selectedId={selectedId} setComments={setComments} setSelectedId={setSelectedId}/>
//             </section>
//             <section>
//                 <NewComment setComments={setComments}/>
//             </section>
//         </main>
//     )
// }
//
// export default Comments;


//write this code with react-router-dom

import Comment from "../../Components/Comment/Comment";
import "./Comments.css"
import {useEffect, useState} from "react";
import {getAllComments} from "../../services/getAllComments";
import {Link} from "react-router-dom";

const Comments = () => {

    const [comments, setComments] = useState(null);
    const [error, setError] = useState(false)

    useEffect(() => {
        const getComments = async () => {
            try {
                //destruct data from response
                const {data} = await getAllComments();
                setComments(data);
            } catch (e) {
                setError(true);
            }
        }
        getComments();
    }, []);


    const renderComments = () => {

        let renderValue = <p>Loading...</p>

        if (error) {
            renderValue = <p>Fetching is failed</p>
        }

        if (comments && !error){
            renderValue = comments.map(c =>
                <Link to={`full-comment/${c.id}`} key={c.id}>
                    <Comment
                        name={c.name}
                        email={c.email}
                    />
                </Link>
            )
        }

        return renderValue
    }

    return <section>{renderComments()}</section>

}

export default Comments;