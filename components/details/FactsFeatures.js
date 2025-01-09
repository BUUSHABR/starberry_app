import React from 'react'

const FactsFeatures = ({attributes}) => {
    console.log("asa",attributes);
    return (
        <>
            <h1 className="border-b-2 border-black my-5">FACTS & FEATURES</h1>
            <div className="flex flex-col text-sm">
                <div className="flex items-center my-2">
                    <p className="font-semibold w-[40%]">Neighbourhood:</p>
                    <p className="underline text-lblack">{attributes?.area}</p>
                </div>
                <div className="flex items-center my-2">
                    <p className="font-semibold w-[40%]">Price per sqm:</p>
                    <p className="text-lblack">1123</p>
                </div>
                <div className="flex items-center my-2">
                    <p className="font-semibold w-[40%]">Brochure:</p>
                    <a href={attributes?.brochure} className="underline text-lblack text-md">
                        Download Brochure
                    </a>
                </div>
                <div className="flex items-center my-2">
                    <p className="font-semibold w-[40%]">Floor Plan:</p>
                    <a href={attributes?.floorplan?.[0]?.srcUrl} className="underline text-lblack text-md">
                        View Floor Plan
                    </a>
                </div>
            </div>
            <div className="my-5">
                <p className="text-sm">{attributes?.description}</p>
            </div>
        </>
    )
}

export default FactsFeatures