import { useState } from "react";
import Header from "../../components/Header"
import MainContent from "../../components/MainContent";
import Navbar from "../../components/Navbar";

const MainPage = () => {

    const [sorting, setSorting] = useState(0)
    const [rating, setRating] = useState('популярности')

    const navBarSort = (value) => {
        setSorting(value);
    }

    const navBarSortByRating = (value) => {
        setRating(value);
    }


    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="content">
                    <Navbar navBarSort={navBarSort} navBarSortByRating={navBarSortByRating}/>
                    <div className="mainContentContainer">
                        <MainContent sorting={sorting} rating = {rating} />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MainPage;