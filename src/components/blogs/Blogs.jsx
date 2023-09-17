'use client'
import React from 'react'
import Blog from '../blog/Blog';

const Blogs = () => {
  const blogsData= [
      {
        title: 'هنا يضاف عنوان المقال بشكل كامل',
        image: '/rectangle52.png',
        description: 'إنما يشتد افتقار العبد إلى العظة وهي الترغيب والترهيب إذا ضعفت إنابته وتذكره ، وإلا فمتى قويت إنابته وتذكره لم تشتد حاجته إلى التذكير والترغيب والترهيب ، ولكن تكون الحاجة منه شديدة إلى معرفة '
      },
      {
        title: 'هنا يضاف عنوان المقال بشكل كامل',
        image: '/rectangle51.png',
        description: 'إنما يشتد افتقار العبد إلى العظة وهي الترغيب والترهيب إذا ضعفت إنابته وتذكره ، وإلا فمتى قويت إنابته وتذكره لم تشتد حاجته إلى التذكير والترغيب والترهيب ، ولكن تكون الحاجة منه شديدة إلى معرفة '
      },
      {
        title: 'هنا يضاف عنوان المقال بشكل كامل',
        image: '/rectangle_5.png',
        description: 'إنما يشتد افتقار العبد إلى العظة وهي الترغيب والترهيب إذا ضعفت إنابته وتذكره ، وإلا فمتى قويت إنابته وتذكره لم تشتد حاجته إلى التذكير والترغيب والترهيب ، ولكن تكون الحاجة منه شديدة إلى معرفة '
      }

  ];

  return (
    <div className='my-16 px-5'>
        <h2 className='text-center text-[#116A7B] text-3xl'>المدونات</h2>
        <p className='text-center mb-8 mt-3'>ليس لأحد أن يفسر كتاب الله بخلاف ما فسره به رسوله صلى الله عليه وسلم</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center'>
        {
          blogsData.map(data => {
            return <Blog key={Math.random()} data={data}/>
          })
        }
      </div>
    </div>
  )
}

export default Blogs;