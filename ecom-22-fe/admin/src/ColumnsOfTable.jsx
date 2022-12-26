import { numberWithCommas } from '~/utils';

export const productColumns = [
    { field: "id", headerName: "ID", width: 320 },

    {
        field: "image",
        headerName: "Hình ảnh",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img
                        className="w-[60px]"
                        src={params.row.image}
                        alt="avatar"
                    />
                  
                </div>
            );
        },
    },
    {
        field: "name",
        headerName: "Tên sản phẩm",
        width: 230,
    },
    {
        field: "price",
        headerName: "Giá",
        width: 100,
        renderCell: (params) => {
            return (
                <div className="font-bold text-[#cb1c22]">
                    <p>{numberWithCommas(params.row.price)}đ</p>
                    
                  
                </div>
            );
        },
    },
    
];
export const commentColumns = [
    { field: "id", headerName: "Id", width: 70 },

    {
        field: "username",
        headerName: "Tên người dùng",
        width: 150,
        
    },

    {
        field: "content",
        headerName: "Nội dung",
        width: 230,
    },

    {
        field: "createdDate",
        headerName: "Ngày tạo",
        width: 200,
    },
    
    {
        field: "productId",
        headerName: "ProductId",
        width: 350,
    },
];



export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
   
    {
        field: "name",
        headerName: "Tên",
        width: 180,
    },

    {
        field: "gender",
        headerName: "Giới tính",
        width: 80,
    },

    {
        field: "email",
        headerName: "Email",
        width: 250,
    },
    
    {
        field: "phone",
        headerName: "Số điện thoại",
        width: 120,

    },

    {
        field: "dateOfBirth",
        headerName: "Ngày sinh",
        width: 100,


    },

    {
        field: "createdDate",
        headerName: "Ngày tạo",
        width: 180,

    }
    
    
];

export const reviewProductColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 80,

       
    },


    {
        field: "productId",
        headerName: "Product ID",
        width: 320,
       
    },
    
    {
        field: "userId",
        headerName: "User ID",
        width: 80,
        
    },
    {
        field: "content",
        headerName: "Nội Dung",
        width: 230,
    },
    {
        field: "ratingPoint",
        headerName: "Điểm",
        width: 80,
    },
    {
        field: "createdDate",
        headerName: "Ngày tạo",
        width: 230,
    }

];

