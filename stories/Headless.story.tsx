import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const HeadlessStory: Meta = {
  title: "Example/HeadlessUI",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
};

const Template: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <DialogPanel className="bg-white p-6 rounded">
            <DialogTitle>Dialog Title</DialogTitle>
            <Description>This is a dialog description.</Description>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export default HeadlessStory;
