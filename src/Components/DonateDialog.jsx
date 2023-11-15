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
  const [customerPrice, setCustomerPrice] = useState(0);
  const [isloading, setIsLoading] = useState(false);

  const handleSelectButton = (id) => {
    // 如果當前按鈕已經被選中，則取消選擇；否則，選中當前按鈕
    setSelectedId((prevSelectedId) => (prevSelectedId === id ? null : id));
  };

  const handleSubmit=()=>{
    console.log(selectedId)
    if(selectedId !== 3){
      const priceItem = donatePlans.filter(item => item.id === selectedId)
      setDonateTotal(priceItem[0].price+donateTotal)
      setIsLoading(true)
    }
    if(selectedId === 3){
      setDonateTotal(donateTotal+Number(customerPrice))
      setIsLoading(true)
    }
  }

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
                        <div className="mb-4">
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
                    {!isloading ? (<div>
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
                        className={`border-[3px] rounded-2xl p-2 my-4 ${selectedId === donatePlans.length ? " border-primary-theme-one" : "border-gray-200"}`}
                      >
                        <div className=" text-primary-theme-one font-bold text-[20px] pt-6 pb-2 px-4">自訂贊助金額</div>
                        <div className="bg-gray-100 rounded-2xl w-full flex items-center">
                          <div className="text-text-primary px-4">NT$</div>
                          <input 
                            type="text" 
                            className="bg-gray-100  outline-none border-none py-2 text-lg" 
                            placeholder="輸入金額"
                            value={customerPrice}
                            onChange={(e)=>{
                              setCustomerPrice(e.target.value)
                            }}
                            />
                        </div>
                      </div>
                      <div>
                        <button 
                          type="button" 
                          className="bg-primary-theme-one text-white w-full py-6 rounded-full font-semibold"
                          onClick={()=>{
                            handleSubmit()
                          }}
                          >
                          前往捐款
                        </button>
                      </div>
                    </div>)
                    :
                    (<div className="flex flex-col justify-center items-center gap-4 mt-6">
                      <div className="text-text-primary text-[28px] font-bold">
                        感謝您的捐款
                      </div>
                      <div>
                        <img src="images/finish-donate.png" alt="finish-donate" />
                      </div>
                      <div>
                        <button 
                          type="button" 
                          className="bg-gray-100 w-[224px] py-4 rounded-full cursor-pointer"
                          onClick={()=>{
                            setIsLoading(false)
                            closeModal()
                          }}
                          >
                            關閉
                          </button>
                      </div>
                    </div>)}
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
