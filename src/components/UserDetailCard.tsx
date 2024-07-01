import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";

interface User {
  id: string;
  jobTitle: string;
  profile: {
    firstName: string;
    lastName: string;
    username: string;
    email?: string;
  };
  avatar: string;
  location?: string;
  otherInfo?: string;
  Bio?: string;
  isLoading: boolean;
}

interface UserDetailCardProps {
  user: User;
  setSelectedUser: (user: User | null) => void;
}

const UserDetailCard = ({ user, setSelectedUser }: UserDetailCardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    // Simulate loading completion after 1 second (1000 ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clean up timer on unmount or state change
  }, [user]);

  return (
    <div className="bg-[#011522] top-0 sticky rounded-lg z-11 m-auto p-4 w-full h-full lg:w-1/2">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 my-1 bg-gray-300 rounded-full mb-4"></div>
            <div className="w-64 h-6 my-1 bg-gray-300 rounded mb-2"></div>
            <div className="w-48 h-4 my-1 bg-gray-300 rounded mb-1"></div>
            <div className="w-56 h-3 my-1 bg-gray-300 rounded mb-1"></div>
            <div className="w-64 h-4 my-1 bg-gray-300 rounded mb-1"></div>
            <div className="w-48 h-4 my-1 bg-gray-300 rounded mb-1"></div>
            <div className="w-56 h-3 my-1 bg-gray-300 rounded mb-1"></div>
          </div>
          <div className="flex justify-center mb-1">
            <div className="w-16 h-8 my-2 bg-gray-300 rounded"></div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center mb-4">
            <img
              src={user.avatar}
              alt={`${user.profile.firstName} ${user.profile.lastName} avatar`}
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg font-bold mb-2 text-white">{`${user.profile.firstName} ${user.profile.lastName}`}</h2>
            <p className="flex items-center justify-center gap-1 text-gray-300 mb-1">
              <MdAlternateEmail size={20} />
              {user.profile.username}
            </p>
            <p className="text-gray-400 mb-1">{user.jobTitle}</p>

            {user.profile.email && (
              <p className="flex items-center justify-center gap-2 text-gray-400 mb-1">
                <CiMail size={23} />
                {user.profile.email}
              </p>
            )}
            {user.location && (
              <p className="text-gray-400 mb-1">{user.location}</p>
            )}
            {user.Bio && (
              <p className="flex items-center justify-center text-gray-400 mb-1">
                {/* <IoInformationCircleOutline size={32} /> */}
                {user.Bio}
              </p>
            )}
            {user.otherInfo && (
              <p className="text-gray-400 mb-1">{user.otherInfo}</p>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setSelectedUser(null)}
              className="bg-[#ff605c] text-white px-4 py-2 rounded-md mr-2 hover:bg-red-500 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailCard;
