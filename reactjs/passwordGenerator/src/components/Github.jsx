import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';

function Github(){

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/kundan-kumavat')
    //     .then(res => res.json())
    //     .then((res) => {
    //         console.log(res);
    //         setData(res);
    //     })
    // }, []);

    const data = useLoaderData();
    
    return(
        <div>
            Followers: {data.followers}<br />
            <img src={data.avatar_url} />
        </div>
    )
}

export default Github;

export const githubInfo = async(e) => {
    const response = await fetch('https://api.github.com/users/kundan-kumavat');
    return response.json();
}