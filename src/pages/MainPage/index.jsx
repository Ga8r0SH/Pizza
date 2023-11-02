import Header from "../../components/Header"
import MainContent from "../../components/MainContent";
import Navbar from "../../components/Navbar";

const MainPage = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="content">
                    <Navbar />
                    <div className="mainContentContainer">
                        <MainContent />
                        <MainContent />
                        <MainContent />
                        <MainContent />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MainPage;