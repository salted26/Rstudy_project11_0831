import React, {useEffect, useState} from 'react';

const NormalPage = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ data, setData ] = useState(null);

    const fetchPost = async () => {
        setIsLoading(true);

        const url = "https://my-json-server.typicode.com/salted26/Rstudy_project11_0831/posts"
        const response = await fetch(url);
        const item = await response.json();

        setIsLoading(false);
        setData(item);
    }

    useEffect(() => {
        fetchPost();
    }, []);

    if(isLoading){
        return(
            <div className="page">
                <h3>Loading....</h3>
            </div>
        )
    }

    return (
        <div className="page">
            <div>Normal Fetch</div>
            {data?.map((item, index) => (
                <div key={index}>{item.id} : {item.title} | {item.views}</div>
            ))}
        </div>
    );
};

export default NormalPage;