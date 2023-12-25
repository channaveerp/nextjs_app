import React from 'react';
import Link from 'next/link';

const StudentList = () => {
  const StudentList = [
    {
      id: '1',
      name: 'channu',
    },
    {
      id: '2',
      name: 'channu2',
    },
    {
      id: '3',
      name: 'channu3',
    },
    {
      id: '4',
      name: 'channu4',
    },
    {
      id: '5',
      name: 'channu5',
    },
  ];

  return (
    <div>
      {StudentList.map((student) => (
        <ul>
          <li style={{ display: 'flex' }}>
            <Link href={`studentList/${student.name}`}>
              <h4>{student.id}</h4>&nbsp;
              <h4>{student.name}</h4>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default StudentList;
