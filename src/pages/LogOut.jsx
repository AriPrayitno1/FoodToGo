import React from "react";

const LogOut = () => {
  return (
    <>
      <div className="bg-kedua flex justify-center min-h-screen">
        <div className="bg-white w-3/4 flex text-black">
          <div className="basis-2/4">
            <img src="./src/assets/logout.png" />
          </div>

          <div className="flex-col align-middle basis-2/4 p-8">
            <div className="flex flex-col mb-6">
              <h1 className="text-2xl font-bold mb-6">Logout</h1>
              <p className="text-sm">Apakah anda yakin ingin keluar dari akun ini?</p>
            </div>

            <div className="mb-8">
              <button className="w-full p-2 bg-blue-600 text-white rounded-md mb-6 ">
                Iya
              </button>

              <button className="w-full p-2 bg-red-600 text-white rounded-md ">
                Tidak
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LogOut;
