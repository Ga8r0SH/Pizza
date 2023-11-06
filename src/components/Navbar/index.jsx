import { useEffect, useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [popUp, setPopUp] = useState(false);
    const [filter, setFilter] = useState('популярности');


    const sorting = (value) => {
        setFilter(value);

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
                    <li><button>Все</button></li>
                    <li><button>Мясные</button></li>
                    <li><button>Вегетарианская</button></li>
                    <li><button>Гриль</button></li>
                    <li><button>Острые</button></li>
                    <li><button>Закрытые</button></li>
                </ul>
            </div>
            <div className="sort">
                <div className="sort__label">
                    <button className='popUpButton' onClick={toglePopUp}>
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
                            <li onClick={() => sorting("популярности")}>популярности</li>
                            <li onClick={() => sorting('цене')} >цене</li>
                            <li onClick={() => sorting('алфавиту')}>алфавиту</li>
                        </ul>
                    </div>
                ): null}

            </div>
        </div>
    )
}
export default Navbar;