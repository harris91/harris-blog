import React from "react"
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";

type Props = {}


// Pull 메세지
const Pull: React.FC<Props> = () => {
  return (
    <div className="text-center dark:text-white m-auto pb-4 text-gray-500 dark:text-gray-400">
      <FaRegArrowAltCircleDown className="inline-block text-2xl"/>
      <h3>아래로 당겨서 새로고침</h3>
    </div>
  )
}


// 새로고침 아이콘
const Refresh: React.FC<Props> = () => {
  return (
    <div className="text-center dark:text-white m-auto pb-4">
      <CgSpinner className="animate-spin inline-block text-6xl text-gray-500 dark:text-gray-400"/>
    </div>
  )
}

export { Refresh, Pull };
