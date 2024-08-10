import { signOut } from "firebase/auth";
import { auth } from "../utile/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user=useSelector((store)=>store.user);

  const okSignOut = () => {
    signOut(auth ).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className='absolute px-8 py-2 z-10 flex justify-between items-center w-full'>
      <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt='logo'
      />

      <div className="flex items-center space-x-4">
        <img className="w-12 h-12 rounded" src={user?.photoURL} alt="icon" />
        <button onClick={okSignOut} className="bg-red-800 text-white rounded px-4 py-2">Sign Out</button>
      </div>
    </div>
  )
}

export default Header;
