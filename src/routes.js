import HomePage from "./Pages/HomePage";
import NewCommentPage from "./Pages/NewCommentPage";
import NotFoundPage from "./Pages/NotFound";
import FullCommentPage from "./Pages/FullCommentPage";

const routes = [
    {path:"/" , element:<HomePage/>},
    {path:"/new-comment" , element:<NewCommentPage/>},
    {path:"/full-comment/:selectedId" , element:<FullCommentPage/>},
    {path:"*" , element:<NotFoundPage/>},
]

export default routes;
//([0-9]+)
//([A-Za-z]+)