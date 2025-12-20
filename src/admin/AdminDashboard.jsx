import UploadProject from "./UploadProject";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Error from './Error';

export default function AdminDashboard() {
  // const {user} = useContext(AuthContext)
  const user = true;
  const navigate = useNavigate();

  function handleSignout(){
    signOut(auth)
    navigate('/');
  }
 
  return (
    <div className="min-h-170 mt-30 md:min-h-screen  flex items-center justify-center dark:bg-gray-900 sm:min-w-10">
     {user ? <div className="bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-3xl font-bold dark:text-white mb-4">
          Admin Dashboard
        </h1>

        <button
          onClick={handleSignout}
          className="mb-6 bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

        <UploadProject />
      </div> : <Error />}
    </div>
  )
}
