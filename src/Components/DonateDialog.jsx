import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export const DonateDialog = ({ isOpen, closeModal }) => {
  const [donateTotal, setDonateTotal] = useState(987655873);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-[1400px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-between items-center mb-2"
                  >
                    <div className="text-text-primary text-[32px] font-bold max-sm:text-2xl">
                      小額捐款
                    </div>
                    <div className="cursor-pointer" onClick={closeModal}>
                      <img
                        src="./images/cancel.png"
                        alt="cancel"
                        className="max-sm:w-[24px]"
                      />
                    </div>
                  </Dialog.Title>
                  <div>
                    <div className="bg-bg-color-theme-second p-10 rounded-3xl">
                      <div>
                        <div className="text-primary-theme-one text-[40px] font-bold">
                          您的小筆捐款
                        </div>
                        <div className="text-primary-theme-one text-[40px] font-bold">
                          是每隻毛孩未來的大大動力！
                        </div>
                      </div>
                      <div className="text-text-primary">
                        目前小額贊助總金額
                      </div>
                      <div className="text-text-primary text-[32px] font-bold">
                        {donateTotal}
                      </div>
                      <div className="flex justify-center">
                        <img src="images/donateDialog.png" alt="donate" />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
