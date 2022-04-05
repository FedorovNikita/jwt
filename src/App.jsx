import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Login from './pages/login';
import Rules from './pages/Rules';

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />} >
        {/* protect routes */}
        <Route element={<RequireAuth />}>
          <Route path="/rules" element={<Rules />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}

export default App;
