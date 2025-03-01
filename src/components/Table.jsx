import React from 'react';
import Footer from './footer';
import AdminHeader from './AdminHeader';

const Table = () => {
  const courses = [
    {
      id: 1,
      name: 'Angular',
      img: '../assets/images/course/ang.png',
      content: `Maintained by a dedicated team at Google, Angular provides a broad suite of tools APIs and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.`,
      duration: '30 Hrs',
      fee: 12000
    },
    {
      id: 2,
      name: 'React',
      img: '../assets/images/course/rea.png',
      content: `Maintained by a dedicated team at Google, Angular provides a broad suite of tools APIs and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.`,
      duration: '36 Hrs',
      fee: 15000
    },
    {
      id: 3,
      name: 'Node Js',
      img: '../assets/images/course/node.jpg',
      content: `Maintained by a dedicated team at Google, Angular provides a broad suite of tools APIs and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.`,
      duration: '30 Hrs',
      fee: 13000
    },
    {
      id: 4,
      name: 'Express Js',
      img: '../assets/images/course/exe.jpeg',
      content: `Maintained by a dedicated team at Google, Angular provides a broad suite of tools APIs and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.`,
      duration: '30 Hrs',
      fee: 10000
    },
    {
      id: 5,
      name: 'Flutter',
      img: '../assets/images/course/flu.png',
      content: `Maintained by a dedicated team at Google, Angular provides a broad suite of tools APIs and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.`,
      duration: '30 Hrs',
      fee: 13000
    },
    {
      id: 6,
      name: 'Vue Js',
      img: '../assets/images/course/vue.jpeg',
      content: `Maintained by a dedicated team at Google, Angular provides a broad suite of tools APIs and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.`,
      duration: '30 Hrs',
      fee: 14000
    },
    {
      id: 7,
      name: 'Java',
      img: '../assets/images/course/java.webp',
      content: `Maintained by a dedicated team at Google, Angular provides a broad suite of tools APIs and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.`,
      duration: '30 Hrs',
      fee: 18000
    },
    {
      id: 8,
      name: 'Python',
      img: '../assets/images/course/py.png',
      content: `Maintained by a dedicated team at Google, Angular provides a broad suite of tools APIs and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.`,
      duration: '30 Hrs',
      fee: 18000
    },
    {
      id: 9,
      name: 'JavaScript',
      img: '../assets/images/course/js.jpg',
      content: `Maintained by a dedicated team at Google, Angular provides a broad suite of tools APIs and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.`,
      duration: '30 Hrs',
      fee: 13000
    }
  ];

  return (
    <>
      <AdminHeader />
      <div className='container my-5'>
        <table className='table table-bordered table-dark table-hover table-striped'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Img</th>
              <th>Content</th>
              <th>Duration</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => {
              return (
                <tr key={course.id}>
                  <td>{index + 1}</td>
                  <td>{course.name}</td>
                  <td>
                    <img
                      src={course.img}
                      alt={course.name}
                      style={{ width: '80px', height: '80px' }}
                    />
                  </td>
                  <td>{course.content}</td>
                  <td>{course.duration}</td>
                  <td>{course.fee}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Table;
