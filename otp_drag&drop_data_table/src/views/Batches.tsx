import { columns } from "@/components/batches/columns";
import { DataTable } from "@/components/batches/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CourseData from "@/data/batchedData";

const Batches = () => {
  return (
    <div className="bg-background-table h-screen">
      <div className="flex items-center justify-center flex-col h-screen">
        <p className="font-bold text-5xl mb-10 text-white">Chai aur Code</p>
        <div className="bg-white shadow flex flex-col rounded-lg p-8 lg:w-[1000px] h-[600px] md:w-[750px] ">
          <p className="text-4xl font-bold mb-2">Batches</p>
          <p className="text-xs text-stone-400 ">
            Create learner’s batch and share information at the same time.{" "}
          </p>

          <DataTable columns={columns} data={CourseData} />
        </div>
      </div>
    </div>
  );
};

export default Batches;
