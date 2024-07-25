import { ArrowDown, ArrowUp, DeleteIcon, ReorderIcon } from "@/assets/Icons";
import threeDots from "@/assets/vertical_dots.png";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { useRaisedShadow } from "@/hooks/useRaisedShadow";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { useState } from "react";

interface Item {
  id: number;
  image: string;
  title: string;
  price: number;
  type: string;
}

interface ListProps {
  item: Item;
  moveItemToTop: (id: number) => void;
  moveItemToBottom: (id: number) => void;
  deleteItem: (id: number) => void;
}

const List: React.FC<ListProps> = ({ item, moveItemToTop, moveItemToBottom, deleteItem }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpenChange = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  const handleMoveItemToTop = (id: number) => {
    moveItemToTop(id);
    handleModalOpenChange(false);
  };

  const handleMoveItemToBottom = (id: number) => {
    moveItemToBottom(id);
    handleModalOpenChange(false);
  };

  const handleRemoveItem = (id: number) => {
    deleteItem(id);
    handleModalOpenChange(false);
  };

  return (
    <Reorder.Item
      value={item}
      key={item.id}
      style={{ boxShadow, y }}
      dragListener={false}
      dragControls={dragControls}
    >
      <div className="flex gap-16 shadow-md shadow-slate-300 rounded-lg p-4 items-center justify-between">
        <div className="flex items-center gap-4">
          <ReorderIcon dragControls={dragControls} />
          <img
            src={item.image}
            alt=""
            width={70}
            height={70}
            className="rounded"
          />
          <p className="text-sm font-bold">{item.title}</p>
        </div>

        <div className="flex items-center gap-3">
          <p>{item.price}</p>
          <p className="bg-[#DBFFCE] text-xs p-1.5 rounded-sm"> {item.type}</p>
          <Popover open={isModalOpen} onOpenChange={handleModalOpenChange}>
            <PopoverTrigger>
              <img src={threeDots} alt="" width={20} height={20} />
            </PopoverTrigger>
            <PopoverContent className="w-44">
              <div
                className="flex items-center mb-2 gap-1 font-semibold cursor-pointer"
                onClick={() => handleMoveItemToTop(item.id)}
              >
                <ArrowUp />
                <span className="text-sm"> Move To Top</span>
              </div>

              <div
                className="flex items-center mb-2 gap-1 font-semibold cursor-pointer"
                onClick={() => handleMoveItemToBottom(item.id)}
              >
                <ArrowDown />
                <span className="text-sm">Move To Bottom</span>
              </div>

              <div
                className="flex items-center mb-2 gap-1 text-red-600 font-semibold cursor-pointer"
                onClick={() => handleRemoveItem(item.id)}
              >
                <DeleteIcon />
                <span className="text-sm">Remove</span>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </Reorder.Item>
  );
};

export default List;