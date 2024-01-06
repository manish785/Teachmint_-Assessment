import {BrowserRouter as Router, redirect, Routes, Route} from 'react-router-dom';
import { UserProfile, Post } from './components/index';

function App() {
   
  const routes = (
    <Routes>
       <Route path="/user/:userId" element={<UserProfile />} />
       <Route path="/post/:postId" element={<Post />} />
    </Routes>
  );


  return (
    <div className="App">
      <div>
        <Router>
          {routes}
        </Router>
      </div>
    </div>
  );
}

export default App;
