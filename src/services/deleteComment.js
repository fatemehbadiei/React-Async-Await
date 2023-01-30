// import http from "./httpService";
//
// export function deleteComment(selectedId) {
//     return http.delete(`/comments/${selectedId}`);
// }

//use axios-interceptor

import instance from "../axiosInstance";

export function deleteComment(selectedId) {
    return instance.delete(`/comments/${selectedId}`);
}