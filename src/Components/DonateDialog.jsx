import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "./Button";

export const DonateDialog = ({ isOpen, closeModal }) => {
  const donatePlans = [
    {
      id: 0,
      title: '喵星人之友',
      headcount: 9957,
      price: 600,
    },
    {
      id: 1,
      title: '喵星大使',
      headcount: 2000,
      price: 6000,
    },
    {
      id: 2,
      title: '喵星傳奇',
      headcount: 999,
      price: 60000,
    }
  ];

  const [donateTotal, setDonateTotal] = useState(987655873);

  const [selectedId, setSelectedId] = useState(null);

  const handleSelectButton = (id) => {
    // 如果當前按鈕已經被選中，則取消選擇；否則，選中當前按鈕
    setSelectedId((prevSelectedId) => (prevSelectedId === id ? null : id));
  };

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
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4">
                    <div className="bg-bg-color-theme-second md:p-10 p-5 rounded-3xl flex md:flex-col">
                      <div>
                        <div>
                          <div className="text-primary-theme-one text-base md:text-[40px] md:leading-[60px] font-bold">
                            您的小筆捐款
                          </div>
                          <div className="text-primary-theme-one text-base md:text-[40px] md:leading-[60px] font-bold">
                            是每隻毛孩未來的大大動力！
                          </div>
                        </div>
                        <div className="text-text-primary text-sm md:text-base">
                          目前小額贊助總金額
                        </div>
                        <div className="text-text-primary text-[20px] md:text-[32px] font-bold">
                          {donateTotal}
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <img src="images/donateDialog.png" alt="donate" className="h-[98px] md:h-full object-contain" />
                      </div>
                    </div>
                    <div>
                      <div className="text-text-primary text-[20px] font-bold">
                        捐款方案
                      </div>
                      {donatePlans.map(plan =>
                        <Button
                          key={plan.id}
                          id={plan.id}
                          title={plan.title}
                          price={plan.price}
                          headcount={plan.headcount}
                          isSelected={selectedId === plan.id}
                          handleSelectButton={handleSelectButton}
                        />)}
                      <div
                        onClick={() => {
                          setSelectedId(donatePlans.length)
                        }}
                        className={`border-[3px] py-6 px-4 rounded-2xl my-4 ${selectedId === donatePlans.length ? " border-primary-theme-one" : "border-gray-200"}`}
                      >
                        <div className=" text-primary-theme-one font-bold text-[20px]">自訂贊助金額</div>
                        <div className="bg-gray-100  rounded-2xl lg:w-[509px] md:w-[430px] w-[330px]">
                          <span className="mx-2 pl-2 text-text-primary">NT$</span>
                          <input type="text" className="bg-gray-100  outline-none border-none w-[250px] md:w-[350px] lg:w-[400px] py-4 text-lg" placeholder="輸入金額"/>
                        </div>
                      </div>
                      <div>
                        <button type="button"></button>
                      </div>
                    </div>
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
