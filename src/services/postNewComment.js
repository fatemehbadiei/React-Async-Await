import http from "./httpService";

export function postNewComment(data) {
    return http.post("/comments",data);
}


//send token in request's header


// import http from "./httpService";
//
// export function postNewComment(data) {
//     return http.post("/comments",data,{
//         headers:{
//             Authorization : "SECURE TOKEN",
//         }
//     });
// }



//send Bearer token in request's header


// import http from "./httpService";
//
// export function postNewComment(data) {
//
//     const token = "SECURE TOKEN";
//
//     const header = {
//         headers : {
//             Authorization : `Bearer ${token}`
//         }
//     }
//     return http.post("/comments",data,header);
// }