"use client";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addadressaction } from "./addadressaction";
import { toast } from "react-toastify";

const schema = z.object({
  name: z.string().min(1, "Address label is required"),
  city: z.string().min(1, "City is required"),
  details: z.string().min(1, "Address details are required"),
  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(/^01(0|1|2|5)[0-9]{8}$/, "Enter a valid Egyptian phone number"),
  isDefault: z.boolean().optional(),
});

 export type addressData = z.infer<typeof schema>;

const AddAddressModal = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<addressData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (addressdata: addressData) => {
    setOpen(false);
    const res = await addadressaction(addressdata);
    if (res) {
      toast.success("Address added successfully!");
    } else {
      toast.error("Error adding address!");
    }
    reset();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-[#22C55E] text-white px-5 py-2.5 rounded-xl hover:bg-green-600 transition active:scale-95"
      >
        <MdAdd size={20} /> Add Address
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-xl rounded-3xl p-6 md:p-7 relative shadow-xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">Add New Address</h3>
              <p className="text-sm text-gray-500">
                Fill the details to save a new delivery location
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm text-gray-600">Address Label</label>
                <input
                  {...register("name")}
                  placeholder="Home / Work"
                  className="w-full mt-1 px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* City */}
              <div>
                <label className="text-sm text-gray-600">City</label>
                <input
                  {...register("city")}
                  placeholder="Cairo"
                  className="w-full mt-1 px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <input
                  {...register("phone")}
                  placeholder="01xxxxxxxxx"
                  maxLength={11}
                  className="w-full mt-1 px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              {/* Details */}
              <div>
                <label className="text-sm text-gray-600">Address Details</label>
                <textarea
                  {...register("details")}
                  placeholder="Street, Building number, Apartment..."
                  className="w-full mt-1 px-4 py-2.5 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details.message}</p>}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2.5 rounded-xl hover:bg-green-700 transition"
                >
                  Save Address
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 border py-2.5 rounded-xl text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddAddressModal;