import List from "@/components/course-list/List";
import coursesData from "@/data/courseData";
import { Reorder } from "framer-motion";
import React, { useState } from "react";

const CourseList = () => {
  const [items, setItems] = useState(coursesData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const moveItemToTop = (id) => {
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index > 0) {
        const item = prevItems.splice(index, 1)[0];
        return [item, ...prevItems];
      }
      return prevItems;
    });
  };

  const moveItemToBottom = (id) => {
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index > -1) {
        const item = prevItems.splice(index, 1)[0];
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      const item = prevItems.filter((item) => item.id !== id);
      return item;
    });
  };

  return (
    <div className="bg-background-drag h-screen">
      <div className="flex items-center justify-center flex-col h-screen">
        <p className="font-bold text-5xl mb-10 text-white">Chai aur Code</p>
        <div className="bg-white flex flex-col rounded-lg p-8 lg:pr-48 pb-20 lg:w-[900px] h-[600px] md:w-[750px] ">
          {" "}
          <p className="text-4xl font-bold mb-2">Manage Bundle</p>
          <p className="text-xs text-stone-400">
            Change orders of the products based on priority
          </p>
          <Reorder.Group
            axis="y"
            values={items}
            onReorder={setItems}
            className="flex flex-col gap-4 mt-3"
          >
            {items.length ? (
              items.map((item) => (
                <List
                  item={item}
                  key={item.id}
                  moveItemToTop={moveItemToTop}
                  moveItemToBottom={moveItemToBottom}
                  deleteItem={deleteItem}
                />
              ))
            ) : (
              <div>
                <p className="text-3xl font-semibold">No Bundle Found...</p>
              </div>
            )}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
