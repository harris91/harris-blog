import React from "react"
import { FaRegArrowAltCircleDown } from "react-icons/fa";

type Props = {}

const Pull: React.FC<Props> = () => {
  return (
    <div className="text-center text-black dark:text-white m-auto pb-4">
      <FaRegArrowAltCircleDown className="inline-block text-2xl"/>
      <h3>아래로 당겨서 새로고침</h3>
    </div>
  )
}

export default Pull
