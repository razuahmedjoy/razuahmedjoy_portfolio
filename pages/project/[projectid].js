import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router'

const SingleProject = () => {
    const router = useRouter()
    const {projectid} = router.query;


    const [project,setProject] = useState({});
    
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data=>{
            console.log(data)
          
        })
    },[projectid])
    console.log(project)
    return (
        <div>
            Single Project
            {projectid}
        </div>
    );
};

export default SingleProject;