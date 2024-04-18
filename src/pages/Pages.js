// import { Pagination } from "@mui/material";
// import { useEffect, useState } from "react"

// const Pages = () => {
//     const [page, setPage] = useState(1);
//     const [facts, setFacts] = useState([])
//     const [totalPages, setTotalPage] = useState(1)

//     useEffect(() => {
//         fetch(`https://catfact.ninja/facts?page=${page}`, { method: 'GET' })
//             .then(res => {
//                 res.json().then(response => {
//                     setFacts(response.data);
//                     setTotalPage(response.last_page);
//                 });

//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }, [page]);

//     return (
//         <div>

//             {/* {facts.map((data,index)=>{
//                 <h1 key={index}>{data.fact}</h1>
//             })} */}
//             <div className="container1">
//                 {facts.length > 0 && facts.map((item, index) => (
//                     <div key={index} className="container2">
//                         <div className="api"> {item.facts}</div>
//                     </div>
//                 ))}
//                  <Pagination count={totalPages} onChange={setPage} color="primary" />
//             </div>

           

//         </div>
//     )
// }
// export default Pages

import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { showLoader, showSnackbar } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const Pages = () => {
    const [page, setPage] = useState(1);
    const [facts, setFacts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showLoader({visible:true}));
        dispatch(showSnackbar({visible:true,message:"GETTING LOADED..."}));
        fetch(`https://catfact.ninja/facts?page=${page}`, { method: 'GET' })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then(response => {
                setFacts(response.data);
                // Calculate total pages based on total facts and pagination limit
                const totalCount = response.total;
                const perPage = response.per_page;
                const totalPages = Math.ceil(totalCount / perPage);
                setTotalPages(totalPages);
                dispatch(showLoader({visible:false}));
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                dispatch(showLoader({visible:false}))
                dispatch(showSnackbar(err.message ?? "An error occurred while loading the page"))
            });
    }, [page]);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <div className="container1">
                {facts.map((item, index) => (
                    <div key={index} className="container2">
                        <div className="api">{item.fact}</div>
                        {/* <div className="api">{item.length}</div> */}
                    </div>
                ))}
                <div className="paginationContainer">
                {/* <Pagination count={totalPages} onChange={handlePageChange} color="primary" /> */}
                <Pagination count={totalPages} onChange={handlePageChange} variant="outlined" shape="rounded" color="primary" style={{color:"blue"}}/>
                </div>
            </div>
        </div>
    );
};

export default Pages;
