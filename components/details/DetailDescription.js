
import React from 'react'
import { attachTextIfPresent, formatPrice, formatWithSeparator, getShortForm } from '../../utils/helper'
import PrimaryButton from '../common/PrimaryButton';
import Image from 'next/image';
const DetailDescription = ({ attributes }) => {
  return (
    <>
      <div className="border border-gray mt-2" />
      <h3 className="text-xl font-bold my-2">
        {formatPrice(attributes?.price, attributes?.currency)}{" "}
        <span className="text-sm text-cgray font-light">
          {formatWithSeparator([
            attachTextIfPresent(attributes?.bedroom, 'bed'),
            attachTextIfPresent(attributes?.floorarea_min, getShortForm(attributes?.floorarea_type))
          ])}
        </span>
      </h3>
      <p className="mt-4">{attributes?.title + ' in ' + attributes?.area || 'N/A'} </p>
      <p className="mt-4 underline text-gold font-semibold flex items-center gap-2">
        <Image
          src="/assets/images/circle.png"
          alt="Share"
          width={16}
          height={16}
          className="inline-block"
        />
        <span>Please contact us</span>
      </p>

      <div className="my-5">
        <PrimaryButton
          color="bg-[#000] hover:bg-gray-800"
          action={() => alert('Button 2 clicked!')}
          title="CONTACT AGENT"
        />
      </div>
    </>
  )
}

export default DetailDescription