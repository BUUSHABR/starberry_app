import React from 'react'
import { formatWithSeparator } from '../../utils/helper'

const AgentInfo = ({agentDetails}) => {
    console.log(agentDetails)
  return (

    <div className="flex flex-col md:flex-row w-full h-[10%] my-5">
    <div className="w-30 flex items-center justify-center bg-gray-200">
      {/* Image placeholder */}
      <img
        src={agentDetails?.profile_img}
        alt="Image"
        className="md:w-full md:h-16 sm:w-10 sm:h-10" 
      />
    </div>

    <div className="w-60 flex flex-col mx-2">
      <div className="flex items-center">
        <p className="ml-2 font-semibold text-lg">{agentDetails?.name}</p>
      </div>
      <div className="flex items-center">
        <p className="ml-2 text-xs">{agentDetails?.job_title}</p>
      </div>
      <div className="flex items-center">
        <p className="ml-2 text-xs">
          {formatWithSeparator([
            agentDetails?.mobile_phone,
            agentDetails?.email
          ])}
        </p>
      </div>
    </div>
  </div>
  )
}

export default AgentInfo