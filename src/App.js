import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function App() {

  const [data, setdata] = useState([])


  const getBlogs = () => {
    axios.get('https://dummyjson.com/posts')
      .then(function (response) {
        console.log(response);
        setdata(response.data.posts)
      })
  }


  useEffect(() => {
    getBlogs()
  }, []);

  console.log(data);
  return (
    <div className='bg-black w-full h-100 mx-auto'>
      <h1 className=" text-center text-white font-bold text-4xl py-5">Blogs</h1>
      <div className="container my-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mx-auto max-w-[1170px] gap-4">

        {
          data.map((v, i) => {

            return (
              <div className="w-64 border bg-white rounded-xl my-5 mx-auto " key={data[i].id}>
                <div className="p-4">
                  <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">{data[i].title}</h5>
                  {data[i].tags.map((v, i) => {
                    return (
                      <span key={i}>{v} | </span>
                    )
                  })}
                  <p>reactions : {data[i].reactions}</p>
                  <Link to={`/blog/${v.id}`} className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</Link>

                </div>
              </div>)
          })
        }


        <div className="w-64 border bg-white rounded-xl my-5 mx-auto">
          <div className="p-4">
            <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">Hello World</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem.</p>
            <a href="#" className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Read more</a>
          </div>
        </div>










      </div>
    </div>
  );
}

export default App;
