"use client";
import React from 'react';

const StudentDetail = ({ params }) => {
  console.log(params);
  return <div>{params.student}</div>;
};

export default StudentDetail;
