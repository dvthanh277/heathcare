import Header from "../../components/Header/Header";
import MyPage from "../../components/MyPage/MyPage";
import Footer from "../../components/Footer/Footer";
import MyColumn from "../../components/MyColumn/MyColumn";
import ScrollTop from "../../components/ScrollTop/ScrollTop";
import MyRecord from "../../components/MyRecord/MyRecord";
import Banner from "../../components/Banner/Banner";

function Home() {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <MyPage></MyPage>
            <MyRecord></MyRecord>
            <MyColumn></MyColumn>
            <ScrollTop></ScrollTop>
            <Footer></Footer>
        </>
    );
}

export default Home;