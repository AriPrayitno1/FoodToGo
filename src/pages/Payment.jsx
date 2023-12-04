import React from "react";
import HelpBtn from "../components/HelpBtn";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
      <div className="bg-kedua px-20 py-12">
        <div className="text-black">
          <div className="flex justify-center ">
            <h1 className="text-2xl font-bold">Checkout</h1>
          </div>

          <div className="bg-white w-full rounded-sm px-16 py-8">
            <div className="flex justify-between mb-8">
              <div className="flex gap-2 p-2 border-solid border-2 h-12 rounded-xl border-black w-56">
                <input type="radio" name="payment" id="cod" />
                <img src="../../public/assets/cod.png" className="w-6" />
                <label htmlFor="cod" className="font-bold">
                  Cash On Delivery
                </label>
              </div>

              {/* CREDIT CARD PAYMENT */}
              <div className="border-solid border-2 rounded-xl border-black p-4">
                <div className="flex gap-2 mb-2 items-center">
                  <img src="../../public/assets/credit-card.png" className="w-8" />
                  <h1 className="font-bold">Credit Card</h1>
                </div>

                <div className="flex gap-2 p-2 mb-2 border-solid border-2 rounded-xl border-black w-56">
                  <input type="radio" name="payment" id="bri" />
                  <img src="../../public/assets/bri.png" className="w-20" />
                </div>

                <div className="flex gap-2 p-2 mb-2 border-solid border-2 rounded-xl border-black w-56">
                  <input type="radio" name="payment" id="mandiri" />
                  <img src="../../public/assets/mandiri.png" className="w-20" />
                </div>

                <div className="flex gap-2 p-2 border-solid border-2 rounded-xl border-black w-56">
                  <input type="radio" name="payment" id="bca" />
                  <img src="../../public/assets/bca.png" className="w-20" />
                </div>
              </div>

              {/* E-WALLET PAYMENT */}
              <div className="border-solid border-2 rounded-xl border-black p-4">
                <div className="flex gap-2 mb-2">
                  <img src="../../public/assets/e-wallet.png" />
                  <h1 className="font-bold">E-Wallet</h1>
                </div>

                <div className="flex gap-2 p-2 mb-2 border-solid border-2 rounded-xl border-black w-56">
                  <input type="radio" name="payment" id="dana" />
                  <img src="../../public/assets/dana.png" className="w-20" />
                </div>

                <div className="flex gap-2 p-2 mb-2 border-solid border-2 rounded-xl border-black w-56">
                  <input type="radio" name="payment" id="ovo" />
                  <img src="../../public/assets/ovo.png" className="w-20" />
                </div>

                <div className="flex gap-2 p-2 border-solid border-2 rounded-xl border-black w-56">
                  <input type="radio" name="payment" id="spay" />
                  <img src="../../public/assets/spay.png" className="w-16" />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Link to="/address"><button className="btn btn-sm btn-outline rounded-md px-8 text-base text-black">
                Kembali
              </button></Link>
              <Link to="/payment">
                <button className="btn btn-sm btn-outline rounded-md px-8 text-base text-white bg-utama">
                  Selanjutnya
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <HelpBtn></HelpBtn>
        </div>
      </div>
    </>
  );
};

export default Payment;
