import Home from "../pages/Home";
import styles from "./App.module.css";
import Layout from "./layout/Layout";


function App() {
  return (
    <Layout className={styles.app}>
      <Home />
    </Layout>
  );
}

export default App;
