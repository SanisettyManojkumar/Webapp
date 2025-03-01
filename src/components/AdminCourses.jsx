import React from 'react'

const AdminCourses = () => {
    let courses=[
        {
            id:1,
            name:'Angular',
            img:"ang.png",
            content:`Maintained by a dedicated team at Google, Angular provides a broad  
                  suite of tools APIs and libraries to simplify and streamline your 
                  development workflow, Angular gives you a solid platform on which to 
                  build fast, reliable applications that scale with both the size of your 
                  team and the size of your codebase.`,  
              duration:"30 Hrs",
              fee: 12000
        },
        {
            id:2,
            name:'React',
            img:"rea.png",
            content:`Maintained by a dedicated team at Google, Angular provides a broad  
                  suite of tools APIs and libraries to simplify and streamline your 
                  development workflow, Angular gives you a solid platform on which to 
                  build fast, reliable applications that scale with both the size of your 
                  team and the size of your codebase.`,  
              duration:"36 Hrs",
              fee: 12000
        },
        {
            id:3,
            name:'Node Js',
            img:"node.jpg",
            content:`Maintained by a dedicated team at Google, Angular provides a broad  
                  suite of tools APIs and libraries to simplify and streamline your 
                  development workflow, Angular gives you a solid platform on which to 
                  build fast, reliable applications that scale with both the size of your 
                  team and the size of your codebase.`,  
              duration:"30 Hrs",
              fee: 12000
        },
        {
            id:4,
            name:'Express Js',
            img:"exe.jpeg",
            content:`Maintained by a dedicated team at Google, Angular provides a broad  
                  suite of tools APIs and libraries to simplify and streamline your 
                  development workflow, Angular gives you a solid platform on which to 
                  build fast, reliable applications that scale with both the size of your 
                  team and the size of your codebase.`,  
              duration:"30 Hrs",
              fee: 12000
        },
        {
            id:5,
            name:'Flutter',
            img:"flu.png",
            content:`Maintained by a dedicated team at Google, Angular provides a broad  
                  suite of tools APIs and libraries to simplify and streamline your 
                  development workflow, Angular gives you a solid platform on which to 
                  build fast, reliable applications that scale with both the size of your 
                  team and the size of your codebase.`,  
              duration:"30 Hrs",
              fee: 12000
        },
        {
            id:6,
            name:'Vue Js',
            img:"vue.jpeg",
            content:`Maintained by a dedicated team at Google, Angular provides a broad  
                  suite of tools APIs and libraries to simplify and streamline your 
                  development workflow, Angular gives you a solid platform on which to 
                  build fast, reliable applications that scale with both the size of your 
                  team and the size of your codebase.`,  
              duration:"30 Hrs",
              fee: 12000
        },
        {
            id:7,
            name:'Java',
            img:"java.webp",
            content:`Maintained by a dedicated team at Google, Angular provides a broad  
                  suite of tools APIs and libraries to simplify and streamline your 
                  development workflow, Angular gives you a solid platform on which to 
                  build fast, reliable applications that scale with both the size of your 
                  team and the size of your codebase.`,  
              duration:"30 Hrs",
              fee: 12000
        },
        {
            id:8,
            name:'Python',
            img:"py.png",
            content:`Maintained by a dedicated team at Google, Angular provides a broad  
                  suite of tools APIs and libraries to simplify and streamline your 
                  development workflow, Angular gives you a solid platform on which to 
                  build fast, reliable applications that scale with both the size of your 
                  team and the size of your codebase.`,  
              duration:"30 Hrs",
              fee: 12000
        },
        {
            id:9,
            name:'JavaScript',
            img:"js.jpg",
            content:`Maintained by a dedicated team at Google, Angular provides a broad  
                  suite of tools APIs and libraries to simplify and streamline your 
                  development workflow, Angular gives you a solid platform on which to 
                  build fast, reliable applications that scale with both the size of your 
                  team and the size of your codebase.`,  
              duration:"30 Hrs",
              fee: 12000
        }
    ]
  return (
    <>
       {/*Coureses*/}
       <section className='container' id="courses">
        <h1 className="text-center my-4 text-danger">Course List</h1>
        <div className='row' id="course">

            {
                courses.map((course,index)=>{
                    return(
        <div className='col-md-4 col-sm-12 mb-2' key={course.id}>
            <div className='card'>
              <img src={"../assets/images/course/"+course.img} alt="" />
              <div className='card-body'>
                <h3 className='card-title'>{index+1} {course.name}</h3>
                <p className='card-text'>{course.content}</p>
                <div className='d-flex justify-content-between'>
                <button className='btn btn-primary'><i className='fa-solid fa-clock'> : {course.duration}</i></button>
                <button className='btn btn-danger mx-0 mb-7'>
                    <i className='fa-solid fa-indian-rupee-sign'></i> : {course.fee}</button> 
                 <button className='btn btn-info'>Read More</button>
                 </div>
              </div>
            </div>
          </div>
                    )
                })
            } 
        </div>
      </section>
    </>
  )
}

export default AdminCourses