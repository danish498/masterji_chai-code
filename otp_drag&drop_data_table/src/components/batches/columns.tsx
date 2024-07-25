"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Course = {
  image: string;
  title: string;
  price: string;
  startDate?: string;
  endDate?: string;
  validityExpiry: string;
  type?: "Mock test" | "Course";
  status?: "Published" | "Unpublished";
};

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    // header: "Title",
    header: () => <div className="font-bold text-gray-600">Title</div>,
    cell: ({ row }) => {
      const title = row.getValue<string>("title");
      const image = row.original.image;
      return (
        <div className="flex items-center w-80">
          <img src={image} alt={title} className="w-24 h-14 rounded-md mr-3" />
          <span className="text-gray-500 font-semibold">{title}</span>
        </div>
      );
    },
    size: 500,
  },
  {
    accessorKey: "startDate",
    header: () => <div className="font-bold text-gray-600">Start Date</div>,
    cell: ({ row }) => {
      return (
        <div className="font-semibold text-gray-500">
          {row.getValue("startDate")}
        </div>
      );
    },
    size: 100,
  },
  {
    accessorKey: "endDate",
    header: () => <div className="font-bold text-gray-600">End Date</div>,
    cell: ({ row }) => {
      return (
        <div className="font-semibold text-gray-500">
          {row.getValue("endDate")}
        </div>
      );
    },
    size: 200,
  },
  {
    accessorKey: "price",
    header: () => <div className="font-bold text-gray-600">Price</div>,
    cell: ({ row }) => {
      return (
        <div className="font-semibold text-gray-500">
          {row.getValue("price")}
        </div>
      );
    },
    size: 100,
  },
  {
    accessorKey: "validityExpiry",
    header: () => (
      <div className="font-bold text-gray-600">Validity/Expiry</div>
    ),
    cell: ({ row }) => {
      return (
        <div className="font-semibold text-gray-500">
          {row.getValue("validityExpiry")}
        </div>
      );
    },
    size: 100,
  },
  {
    accessorKey: "status",
    header: () => <div className="font-bold text-gray-600">Status</div>,
    cell: ({ row }) => {
      return (
        <div className="font-semibold text-gray-500">
          {row.getValue("status") == "Published" ? (
            <p className="bg-[#4ED04B] border-t border-1 rounded text-center bg-opacity-40" >Published</p>
          ) : (
            <p className="bg-[#A4A4A4] rounded text-center px-1.5" >Unpublished</p>
          )}
        </div>
      );
    },
    size: 100,
  },
];
