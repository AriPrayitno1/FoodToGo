import React from "react";
import { Link } from "react-router-dom";

const Verif2 = () => {
  return (
    <>
      <div className="bg-kedua text-black min-h-screen px-20 py-12">
        <div className="flex flex-col items-center">
          <div className="bg-white w-1/2 py-8 px-12 rounded-md">
            <div className="text-center mb-8">
              <h1 className="text-xl font-bold">Informasi Pribadi</h1>
            </div>
            <input
              type="text"
              placeholder="Nama"
              className="bg-white w-full mb-4 border-solid border-2 
            border-gray-300 p-1 rounded-md"
            />

            <input
              type="text"
              placeholder="Provinsi"
              className="bg-white w-full mb-4 border-solid border-2 
            border-gray-300 p-1 rounded-md"
            />

            <input
              type="text"
              placeholder="Kota"
              className="bg-white w-full mb-4 border-solid border-2 
            border-gray-300 p-1 rounded-md"
            />

            <input
              type="text"
              placeholder="Kecamatan"
              className="bg-white w-full mb-4 border-solid border-2 
            border-gray-300 p-1 rounded-md"
            />

            <input
              type="text"
              placeholder="Kode Pos"
              className="bg-white w-full mb-4 border-solid border-2 
            border-gray-300 p-1 rounded-md"
            />

            <textarea name="" id="" rows="2" placeholder="Alamat lengkap" 
            className="bg-white w-full mb-4 border-solid border-2 border-gray-300 
            p-1 rounded-md resize-none">
            </textarea>

            <div className="flex flex-col gap-2">
              <label htmlFor="profilePhoto">Unggah foto profil anda</label>
              <input type="file" name="profilePhoto"/>
            </div>
            
          </div>

          <Link to="/verif3">
            <button className='bg-blue-400 text-white flex items-center gap-1 
            rounded-md py-1 px-8 w-26 h-8 mt-12'>Lanjutkan</button>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Verif2;
