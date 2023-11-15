import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export const FormDialog = ({ isOpen, closeModal }) => {

  const [isloading, setIsLoading] = useState(false);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCustomerData({
      ...customerData,
      [name]: value, //變數的方式帶入屬性
    })
  }
  const handleSubmit = () => {
    console.log(customerData)
    setCustomerData({
      name: "",
      email: "",
      phone: "",
      text: "",
    })
    setIsLoading(true)
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
                      民眾服務信箱
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
                    <div className="bg-bg-color-form-dialog rounded-3xl flex md:flex-col">
                      <div className="md:p-10 p-3">
                        <div className="mb-4">
                          <div className="text-text-primary text-base md:text-[40px] md:leading-[60px] font-bold">
                            分享您的想法
                          </div>
                          <div className="text-text-primary text-base md:text-[40px] md:leading-[60px] font-bold">
                            一同為我們的未來打造更美好！
                          </div>
                        </div>
                      </div>
                      <div className=" self-end">
                        <img src="images/formDialog.png" alt="formDialog" className="max-sm:w-[206px]" />
                      </div>
                    </div>
                    {!isloading ? (
                      <from onSubmit={handleSubmit}>
                        <div className="mb-6">
                          <div className="text-text-primary text-[20px] font-bold mb-2">
                            您的姓名
                          </div>
                          <input
                            type="text"
                            className="bg-gray-100  outline-none border-none w-full py-4 text-lg rounded-lg px-3"
                            placeholder="姓名"
                            name="name"
                            value={customerData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-6">
                          <div className="text-text-primary text-[20px] font-bold mb-2">
                            Email
                          </div>
                          <input
                            type="email"
                            className="bg-gray-100  outline-none border-none w-full py-4 text-lg rounded-lg px-3"
                            placeholder="email"
                            name="email"
                            value={customerData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-6">
                          <div className="text-text-primary text-[20px] font-bold mb-2">
                            手機
                          </div>
                          <input
                            type="phone"
                            className="bg-gray-100  outline-none border-none w-full py-4 text-lg rounded-lg px-3"
                            placeholder="手機號碼"
                            name="phone"
                            value={customerData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-6">
                          <div className="text-text-primary text-[20px] font-bold mb-2">
                            您的建言
                          </div>
                          <textarea
                            className="bg-gray-100 outline-none border-none w-full h-[176px] py-4 text-lg rounded-lg px-3"
                            placeholder="輸入內容"
                            name="text"
                            value={customerData.text}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="bg-primary-theme-one text-white w-full py-6 rounded-full font-semibold"
                            onClick={() => {
                              handleSubmit()
                            }}
                          >
                            送出意見
                          </button>
                        </div>
                      </from>
                    )
                      :
                      (<div className="flex flex-col justify-center items-center gap-4 mt-6">
                        <div className="text-text-primary text-[28px] font-bold">
                          感謝您的意見
                        </div>
                        <div>
                          <img src="images/finish-donate.png" alt="finish-donate" />
                        </div>
                        <div>
                          <button
                            type="button"
                            className="bg-gray-100 w-[224px] py-4 rounded-full cursor-pointer"
                            onClick={() => {
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
