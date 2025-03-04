import React from 'react'
import { FaUserGraduate, FaChalkboardTeacher, FaMoneyBillWave } from 'react-icons/fa';

function Home() {
  return (
    <div className="">
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 mt-10 ">
  <div className="w-full md:w-[400px] bg-background dark:bg-mini dark:text-background  rounded-lg h-[120px] flex flex-col items-center justify-center text-xl font-semibold p-5 shadow-lg hover:shadow-xl transition-all duration-300">
    <FaUserGraduate className="text-blue-500 text-3xl mb-3" />
    <span>Total Students</span>
  </div>
  <div className="w-full md:w-[400px] bg-background dark:bg-mini dark:text-background rounded-lg h-[120px] flex flex-col items-center justify-center text-xl font-semibold p-5 shadow-lg hover:shadow-xl transition-all duration-300">
    <FaChalkboardTeacher className="text-green-500 text-3xl mb-3" />
    <span>Teachers</span>
  </div>
  <div className="w-full md:w-[400px] bg-background dark:bg-mini dark:text-background rounded-lg h-[120px] flex flex-col items-center justify-center text-xl font-semibold p-5 shadow-lg hover:shadow-xl transition-all duration-300">
    <FaMoneyBillWave className="text-yellow-500 text-3xl mb-3" />
    <span>Yearly Budget</span>
  </div>
</div>


    </div>
  )
}

export default Home