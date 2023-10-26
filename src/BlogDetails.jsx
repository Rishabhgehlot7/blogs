import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

export default function BlogDetails() {
    let url = useLocation();
    let currentLocation = url.pathname.split('/')[2];
    console.log(currentLocation)

    const [data, setdata] = useState([])
    const [tags, settags] = useState([])
    const getBlogs = () => {
        axios.get(`https://dummyjson.com/posts/${currentLocation}`)
            .then(function (response) {
                console.log(response);
                setdata(response.data)
                settags(response.data.tags)
            })
    }

    console.log(data);
    useEffect(() => {
        getBlogs()
    }, []);

    return (
        <div className=" w-full h-screen bg-black">
            <Link to={'/'} className='p-2 bg-[blue] rounded-xl shadow-2xl m-10 text-white font-bold border-none'>Home</Link>

            <div className='w-[80%] pb-10 bg-white fixed top-8 left-[50%] translate-x-[-50%] rounded-lg shadow-lg'>
                <h1 className=' text-3xl px-8 pt-10 font-bold'>{data.title}</h1>
                <p className=' text-xl px-8 py-4'>{data.body}</p>

                <p className='px-8 py-4'>
                    {
                        tags.map((v, i) => {
                            return (
                                <span key={i} className=' text-[18px]'> {v} |</span>
                            )
                        })
                    }
                </p>

                <p className='px-8 py-4 text-[18px]'>
                    Reactions: <span>{data.reactions}</span>
                </p>
            </div>

        </div>
    )
}
