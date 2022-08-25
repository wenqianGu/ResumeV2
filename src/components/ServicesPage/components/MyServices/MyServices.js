import Service from "./components/Service";
import Layout from "../Layout";
import Title from "./components/Title";

const MyServices = () => (
    <Layout title={(<Title />)}>
        <Service/>
        <Service/>
        <Service/>
    </Layout>

)

export default MyServices