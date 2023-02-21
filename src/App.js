// import './App.css';
// import Comments from "./Container/Comments/Comments";
//
// function App() {
//   return (
//     <div className="App">
//       <Comments/>
//     </div>
//   );
// }
//
// export default App;


//use react toastify

// import './App.css';
// import Comments from "./Container/Comments/Comments";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//
// function App() {
//     return (
//         <div className="App">
//             <Comments/>
//             <ToastContainer/>
//         </div>
//     );
// }
//
// export default App;


//write this code with react-router-dom


import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {routes.map((route)=>(
                        <Route {...route}/>
                    ))}
                </Routes>
            </Layout>
            <ToastContainer/>
        </BrowserRouter>

    );
}

export default App;

