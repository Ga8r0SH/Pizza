/* eslint-disable no-template-curly-in-string */
import { useEffect, useState } from 'react'
import './Navbar.css'
const Navbar = ({ navBarSort , navBarSortByRating}) => {
    const [popUp, setPopUp] = useState(false);
    const [filter, setFilter] = useState('популярности');


    const sorting = (value) => {
        setFilter(value);
        navBarSortByRating(value);
    }

    
    const sortByCategory = (value) => {
        navBarSort(value);
    }



    const toglePopUp = () => {
        setPopUp(!popUp);
    }

    useEffect(() => {
        const closePopap = (event) => {
            if (popUp && !event.target.closest('.sort')) {
                setPopUp(false)
            }
        }
        if (popUp) {
            document.addEventListener('click', closePopap);
        }
        return () => {
            document.removeEventListener('click', closePopap);
        }
    }, [popUp])


    return (

        <div className="content__top">
            <div className="categories">
                <ul>
                    <li onClick={() => sortByCategory(0)}><button>Все</button></li>
                    <li onClick={() => sortByCategory(1)}><button>Мясные</button></li>
                    <li onClick={() => sortByCategory(2)}><button>Вегетарианская</button></li>
                    <li onClick={() => sortByCategory(3)}><button>Гриль</button></li>
                    <li onClick={() => sortByCategory(4)}><button>Острые</button></li>
                    <li onClick={() => sortByCategory(5)}><button>Закрытые</button></li>
                </ul>
            </div>
            <div className="sort">
                <div className="sort__label" onClick={toglePopUp}>
                    <button className='popUpButton' >
                        <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                fill="#2C2C2C"
                            />
                        </svg>
                    </button>
                    <b>Сортировка по:</b>
                    <span>{filter}</span>
                </div>
                {popUp ? (
                    <div className="sort__popup">
                        <ul>
                            <li onClick={() => sorting('популярности')}>популярности</li>
                            <li onClick={() => sorting('цена')} >цене</li>
                            <li onClick={() => sorting('алфавиту')}>алфавиту</li>
                        </ul>
                    </div>
                ) : null}

            </div>
        </div>
    )
}
export default Navbar;