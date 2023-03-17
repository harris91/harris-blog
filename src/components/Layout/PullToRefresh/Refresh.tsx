import React from "react"
import { CgSpinner } from "react-icons/cg";

type Props = {}

const Refresh: React.FC<Props> = () => {
  return (
    <div className="text-center text-black dark:text-white m-auto pb-4">
      <CgSpinner className="animate-spin inline-block text-6xl dark:text-white"/>
    </div>
  )
}

export default Refresh
