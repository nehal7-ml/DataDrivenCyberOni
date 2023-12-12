import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger />
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay">
        <Dialog.Content className="DialogContent">...</Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
