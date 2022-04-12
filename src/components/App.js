import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Quiz from "../pages/quiz/Quiz";
import Result from "../pages/result/Result";
import SignUp from "../pages/signup/SignUp";
import "./App.css";
import Layout from "./layout/Layout";




function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>

  );
}

export default App;
