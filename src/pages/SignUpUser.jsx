import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAction } from "../Store";
import signupImg from "../../public/assets/signup.png"
import coloredLogo from "../../public/assets/colored_logo.png"

const SignUpUser = () => {

  // integrasi website
  const [nama_depan, setNamaDepan] = useState('');
  const [nama_belakang, setNamaBelakang] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [no_handphone, setNoHP] = useState('');
  const history = useNavigate();

  async function SignUpUser(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/users', {
        nama_depan,
        nama_belakang,
        email,
        password,
        no_handphone
      });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  }
  const dispatch = useDispatch();

  const Handle = () => {
    dispatch(userAction.Login());
  };

  return (
    <>
      <div className="bg-kedua flex justify-center min-h-screen">
        <div className="flex bg-white w-3/5 h-3/4 mt-6 text-black">
          <div className="basis-2/5">
            <img src={signupImg} className="h-full" />
          </div>

          <div className="flex-col basis-3/5 p-6">
            <div className="flex justify-between items-end mb-4">
              <h1 className="text-xl font-bold mb-6">Sign Up</h1>
              <img src={coloredLogo} className="w-24"/>
            </div>

            <form name="signupFormUser">
              <div className="flex flex-col mb-4">
                <div className="flex justify-between">
                  <input type="text" placeholder="Nama Depan"
                    className="bg-white mb-4 border-solid border-2 
                  border-gray-300 p-1 rounded-md" value={nama_depan} onChange={(e)=>{
                    setNamaDepan(e.target.value)
                  }}/>

                  <input type="text" placeholder="Nama Belakang"
                    className="bg-white mb-4 border-solid border-2 
                  border-gray-300 p-1 rounded-md"value={nama_belakang} onChange={(e)=>{
                    setNamaBelakang(e.target.value)
                  }}/>
                </div>

                <input type="text" placeholder="Alamat Email"
                  className="bg-white mb-4 border-solid border-2 
                border-gray-300 p-1 rounded-md" value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }}/>

                <input type="text" placeholder="No Handphone"
                  className="bg-white mb-4 border-solid border-2 
                border-gray-300 p-1 rounded-md"value={no_handphone} onChange={(e)=>{
                  setNoHP(e.target.value)
                }}/>

                <input type="password" placeholder="Password"
                  className="bg-white mb-2 border-solid border-2 
                border-gray-300 p-1 rounded-md"value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }}/>

                <p className="text-xs">It must be a combination of minimum 8 letters, numbers, and symbols.</p>
              </div>

              <div className="mb-4">
                <Link to="/">
                  <button
                    className="w-full p-1 text-lg bg-blue-600 text-white rounded-md "
                    onSubmit={SignUpUser}>
                    Sign Up
                  </button>
                </Link>
              </div>
            </form>

            <div className="flex justify-between mb-4">
              <button className="flex align-middle shadow-lg py-2 px-4 text-sm">
                <img src="../../public/assets/google.png" className="w-6 h-6 mr-2" />
                Sign Up with Google
              </button>
              <button className="flex align-middle shadow-lg py-2 px-4 text-sm">
                <img src="../../public/assets/fb.png" className="w-6 h-6 mr-2" />
                Sign Up with Facebook
              </button>
            </div>

            <p className="text-sm ">
              Sudah punya akun? <Link to="/login" className="text-red-700 font-bold">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpUser;
