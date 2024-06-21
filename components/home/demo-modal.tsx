import Modal from "@/components/shared/modal";
<<<<<<< HEAD
import Image from "next/image";
import {
=======
import {
  useState,
>>>>>>> upstream/main
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
<<<<<<< HEAD
  useState,
} from "react";
=======
} from "react";
import Image from "next/image";
>>>>>>> upstream/main

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
<<<<<<< HEAD
          <a href="https://cybershoptech.com">
            <Image
              alt="CyberOni Logo"
              src="/images/logo.png"
=======
          <a href="https://precedent.dev">
            <Image
              src="/logo.png"
              alt="Precedent Logo"
>>>>>>> upstream/main
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Precedent</h3>
          <p className="text-sm text-gray-500">
            Precedent is an opinionated collection of components, hooks, and
            utilities for your Next.js project.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
