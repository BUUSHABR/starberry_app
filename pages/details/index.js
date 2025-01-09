'use client'

import React from "react";
import 'tailwindcss/tailwind.css'; 
import { useSearchParams } from 'next/navigation'
// import SmallMap from "../../components/mapcontainer";

import BannerImages from "../../components/details/BannerImages";
import DetailDescription from "../../components/details/DetailDescription";
import FactsFeatures from "../../components/details/FactsFeatures";
import AgentInfo from "../../components/details/AgentInfo";

import Image from 'next/image';

function DetailsPage() {
    const searchParams = useSearchParams();
    const propertyData = searchParams.get('property');
    const property = JSON.parse(propertyData)
    

    if (!property) {
        return <p>No property data available</p>;
    }

    return (
        <div className="flex flex-col lg:flex-row bg-white p-6 rounded mx-10 ">
            <BannerImages Images={property?.attributes?.images} ></BannerImages>

            <div className="lg:w-[30%] w-full mx-5">
                {/* Share & Favourite */}
                <div className="flex justify-end items-center space-x-2 space-y-2 ">
                    <button className="text-gray-500 hover:text-red-500 mt-2">
                        <Image
                            src="/assets/images/share.png"
                            alt="Share"
                            width={16}
                            height={16}
                        />
                    </button>
                    <button className="text-gray-500 hover:text-blue-500 ">
                        <Image
                            src="/assets/images/heart.png"
                            alt="Share"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
                <DetailDescription attributes={property?.attributes} />
                <FactsFeatures attributes={property?.attributes} />
                <AgentInfo agentDetails={property?.attributes?.crm_negotiator_id} />

                {/* Leaflet mapView */}
            </div>
        </div>
    );
}

export default DetailsPage;
