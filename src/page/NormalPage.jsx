import React, {useEffect, useState} from 'react';

const NormalPage = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ data, setData ] = useState(null);

    const fetchPost = async () => {
        setIsLoading(true);
        const response = await fetch("http://localhost:5000/posts");
        const item = await response.json();
        setIsLoading(false);
        setData(item);
    }

    useEffect(() => {
        fetchPost();
    }, [isLoading]);

    if(isLoading){
        return <h3>Loading....</h3>
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