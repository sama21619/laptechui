import { Search } from '../Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect, useRef } from 'react';
import { getResult} from '../../redux/search/searchApi';
import { useDispatch, useSelector } from 'react-redux';
import numberWithCommas from '../../utils/numberWithCommas';
import useDebound from './../../hooks/useDebound';
import { Link, useNavigate } from 'react-router-dom';
import './header.module.scss';
import { SearchOutlined } from '@ant-design/icons';


function SearchInput(props) {
    const [value, setValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const dispatch = useDispatch();
    
    let keySearch = useDebound(value, 500);
    const inputRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if (keySearch.length === 0) {
            setShowResult(false);
            return;
        }

        setShowResult(true);
        getResult(dispatch, keySearch);
    }, [keySearch]);


    let resultSearch = useSelector((state) => state.search.search.data);

    console.log(resultSearch)

    const handleText = (e) => {
        setValue(e.target.value);
        if (value.length < 1) {
            setShowResult(false);
        } else {
            setShowResult(true);
        }
    };


    const hideResultSearch = () => {
        setValue('');
        setShowResult(false);
    };
   

   

    const hanleClickSearch = (e) => {
        e.preventDefault();
        getResult(dispatch, value);
        hideResultSearch();
        navigate(`search`);


    };




    return (
        <div className="w-[40%]">
            <label
                htmlFor="default-search"
                className="mb-2 text-xl font-medium text-gray-900 sr-only dark:text-gray-300"
            >
                Search
            </label>
            <form className="relative outline-none" onSubmit={hanleClickSearch}>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none outline-none">
                    <Search ref={inputRef} />
                </div>
                <Tippy
                    interactive
                    visible={showResult && resultSearch.length > 0}
                    duration={50}
                    onClickOutside={() => setShowResult(false)}
                    placement="bottom"
                    content={
                        <div className="bg-white  min-h-auto max-h-[265px] rounded-lg flex flex-col gap-2 z-10 overflow-y-auto">
                            {resultSearch.length === 0 && (<h2>Không có sản phẩm trong hệ thống chúng tôi</h2>)}

                            {resultSearch.map((item) => (
                                <Link
                                    to={`${item.id}`}
                                    className="flex items-center justify-between gap-5 p-3"
                                    onClick={hideResultSearch}
                                >
                                    <div className="w-[45px] h-[45px] rounded-lg">
                                        <img src={item.image}></img>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <div className="text-[13px] font-semibold align-middle text-black">
                                            {item.name}
                                        </div>
                                        <div className="flex gap-3 items-end">
                                            <div className="text-[12px] text-red-400">
                                                {numberWithCommas(item.price)}đ
                                            </div>

                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </div>
                    }
                >
                    <input
                        type="search"
                        id="default-search"
                        className="block  h-[38px] p-4 pl-12 w-full text-xl text-gray-900 rounded-[2px] dark:placeholder-gray-400 dark:text-white outline-none border-none"
                        placeholder="Nhập tên laptop cần tìm"
                        required
                        autoComplete="off"
                        value={value}
                        onChange={handleText}
                        onFocus={() => { setShowResult(true) }}
                    />
                </Tippy>
                <button
                    type="submit"
                    className="absolute w-[58px] h-[38px]  right-0 bottom-0 top-0 bg-[#333] rounded-[2px]   focus:outline-none outline-none border-none  font-sm text-xl p-4 "

                >
                    <SearchOutlined />
                </button>
            </form>
        </div>


    );
}

export default SearchInput;
