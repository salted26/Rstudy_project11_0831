import React from 'react';
import {useQuery} from "@tanstack/react-query";
import axios from "axios";


const ReactQueryPage = () => {

    const fetchPosts=()=>{
        return axios.get(`http://localhost:5000/posts`)
    }

    // 페이지에 접속시 컴포넌트가 바로 실행된다.
    // 실행 실패시 3번의 시도를 진행한다.
    const { isLoading, data, isError, error} =useQuery({
        queryKey:['posts'],
        queryFn:fetchPosts,
        retry : 1, // 재시도 횟수를 지정할 수 있다.
        select:(data)=>{
            return data.data;
        }
    })

    if(isLoading){
        return <h3>Loading....</h3>
    }
    if(isError){
        return <h3>{error.message}</h3>
    }

    return (
        <div className="page">
            ReactQueryPage
            {data.map((item, index) => (
                <div key={index}>{item.id} : {item.title} | {item.views}</div>
            ))}
        </div>
    );
};

export default ReactQueryPage;