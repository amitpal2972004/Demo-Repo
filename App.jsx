//hello
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Register from './Screens/Register';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {

  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  )
}

export default App
