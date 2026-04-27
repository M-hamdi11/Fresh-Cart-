import React from "react";
import AddAddressModal from "./adressmodal";
import AddressCard from "./addresscard";
import { getalladdress, getspacificaddress } from "@/api/services/rout.services";
import { addressresponsedatatype } from "@/api/types";

async function AddressesContent() {
  const all_address = await getalladdress();
  


  return (
    <div className="w-full animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">My Addresses</h2>
          <p className="text-sm text-gray-500">
            Manage your saved delivery addresses
          </p>
        </div>

        <AddAddressModal />
      </div>

      {/* Grid System */}
      {all_address && all_address.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {all_address.map((address: addressresponsedatatype) => (
            <AddressCard key={address._id} address={address._id}/>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed">
          <p className="text-gray-400">No addresses found. Add your first one!</p>
        </div>
      )}
    </div>
  );
}

export default AddressesContent;