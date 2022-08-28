import Service from "./components/Service";
import Layout from "../Layout";
import Title from "./components/Title";

const MyServices = () => (
    <Layout title={(<Title/>)}>
        <Service imgSrc="../../../../../../assets/img/web_design_icon.png" title="Web Design" alt="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor.
        </Service>
        <Service imgSrc="../../../../../../assets/img/photography_icon.png" title="Photography" alt="" >
            I have mastered the fundamental skills, including HTML, CSS, JavaScript etc.
        </Service>
        <Service imgSrc="../../../../../assets/img/creativity_icon.png" title="Management" alt="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor.
        </Service>
        <Service imgSrc="../../../../../assets/img/advertising_icon.png" title="Advertising" alt="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
        </Service>
    </Layout>
)



export default MyServices