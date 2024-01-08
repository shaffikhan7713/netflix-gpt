import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LANGUAGES_SUPPORTED, LOGO_URL } from "../utils/constants";
import { toggleGptSeachView } from "../utils/gptSearchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showHideGptSearch = useSelector(
    (store) => store.gptSearch.showGptSearch
  );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("Error logout", error);
      });
  };

  useEffect(() => {
    //onAuthStateChanged return unsubscribe function to unmount state change effect
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        // navigate("/browse");
      } else {
        dispatch(removeUser());
        // navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSeachView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-full">
      <img className="w-44" src={LOGO_URL} alt="Logo" />
      <div className="p-3 m-3 font-bold text-lg">
        {showHideGptSearch && (
          <select
            className="py-3 px-4 mx-4 my-3 text-white bg-black rounded-lg"
            onChange={handleLanguageChange}
          >
            {LANGUAGES_SUPPORTED.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {showHideGptSearch ? "Homepage" : "Gpt Search"}
        </button>
        <span className="cursor-pointer" onClick={handleSignOut}>
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Header;
