
import './search.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ListProduct from './../../../components/ListProduct/ListProduct';

function Search() {

    const optionsFillter = [


        {
            id: 1,
            name: 'Giá',
        },

        {
            id: 2,
            name: 'Từ thấp đến cao',
        },

    ];



    const ramFillter = [


        {
            id: 3,
            name: 'Ram',
        },
        {
            id: 4,
            name: '4 GB',
        },
        {
            id: 5,
            name: '8 GB',
        },
        {
            id: 6,
            name: '16 GB',
        },
    ];


    const cpuFillter = [


        {
            id: 7,
            name: 'CPU',
        },
        {
            id: 8,
            name: 'Core i3',
        },
        {
            id: 9,
            name: 'Core i5',
        },
        {
            id: 10,
            name: 'core i7',
        },

    ];
    const [checked, setChecked] = useState(2);



    let resultSearch = useSelector((state) => state.search.search.data);
    console.log(resultSearch);

    let product = [...resultSearch];















    //filter
    const handleClickFillter = (e) => {

        let idSelect = e.target.options[e.target.options.selectedIndex].value;
        setChecked(parseInt(idSelect));
    };

    if (checked === 2) {
        product = product.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    }



    if (checked === 4) {
        product = product.filter(e => e.ramCapacity == 4)
    }

    if (checked === 5) {
        product = product.filter(e => e.ramCapacity == 8)
    }

    if (checked === 6) {
        product = product.filter(e => e.ramCapacity == 16)
    }

   

    if (checked === 8) {
        product = product.filter(e => e.cpuType == 'Core i3')
    }

    if (checked === 9) {
        product = product.filter(e => e.cpuType == 'Core i5')
    }

    if (checked === 10) {
        product = product.filter(e => e.cpuType == 'Core i7')
    }



    return (
        <div>

            <h2 className="phone__content font-semibold text-[#CB1C22] flex justify-center py-4">Tất cả kết quả tìm kiếm</h2>
            <div className="phone__content">
                <div className="flex flex-col items-center px-5 mb-6 pr-[17px]"></div>
                <div className="listcontent">



                    {resultSearch.length > 0 ? (
                        <div className="flex flex-col">
                            <div className='flex gap-4'>
                                <select className="inline-block mb-4" onChange={(e) => handleClickFillter(e)}>
                                    {optionsFillter.map((item) => (

                                        <option value={item.id}>{item.name} </option>
                                    ))}
                                </select>


                                <select className="inline-block mb-4" onChange={(e) => handleClickFillter(e)}>
                                    {ramFillter.map((item) => (

                                        <option value={item.id}>{item.name} </option>
                                    ))}
                                </select>

                                <select className="inline-block mb-4" onChange={(e) => handleClickFillter(e)}>
                                    {cpuFillter.map((item) => (

                                        <option value={item.id}>{item.name} </option>
                                    ))}
                                </select>

                            </div>


                            <ListProduct products={product} isSlide={false}></ListProduct>
                        </div>
                    ) : (
                        <h2>Không có sản phẩm này tại hệ thống chúng tôi</h2>
                    )}


                </div>
            </div>
        </div>
    );
}

export default Search;
