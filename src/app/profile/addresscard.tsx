import { getspacificaddress } from "@/api/services/rout.services";
import React from "react";
import { HiOutlineLocationMarker, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import Deleteaddress from "./deleteaddress";

async function AddressCard( { address }: { address: string } ) {
    const addressdata = await getspacificaddress(address);
const{name,city,details,phone} = addressdata

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row justify-between items-start gap-4 hover:border-green-200 transition-colors">
      <div className="flex items-start gap-4">
        <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
          <HiOutlineLocationMarker size={22} />
        </div>

        <div className="space-y-1">
          <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
          <p className="text-sm text-gray-500 leading-relaxed">{details}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3">
            <span className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
              📞 {phone}
            </span>
            <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md flex items-center gap-1.5">
              📍 {city}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-4 md:pt-0">
      <Deleteaddress addressid={addressdata._id}/>
      </div>
    </div>
  );
};

export default AddressCard;