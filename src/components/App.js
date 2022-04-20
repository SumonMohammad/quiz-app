import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Quiz from "../pages/quiz/Quiz";
import Result from "../pages/result/Result";
import SignUp from "../pages/signup/SignUp";
import "./App.css";
import Layout from "./layout/Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";




function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/result/:id" component={Result} />
            <PublicRoute exact path="/signup" component={SignUp} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz/:id" component={Quiz} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>

  );
}

export default App;
