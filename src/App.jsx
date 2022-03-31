import "./App.css";
import AppRouter from "./router/AppRouter";
import { Layout } from "./components/layout";
function App() {

    return (
        <>
            <Layout>
                <AppRouter />
            </Layout>
        </>
    );
}

export default App;
