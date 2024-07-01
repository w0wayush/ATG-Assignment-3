import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import UserDetailCard from "../components/UserDetailCard";

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

const UserInfo = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showAstronaut, setShowAstronaut] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );

      const initialUsers = response.data.slice(0, 9);
      const remainingUsers = response.data.slice(9);

      const reorderedUsers = [...remainingUsers, ...initialUsers];

      const updatedUsers = reorderedUsers.map((user: User) => ({
        ...user,
        isLoading: true,
      }));

      setUsers(updatedUsers);

      setTimeout(() => {
        setUsers(remainingUsers);
      }, 1000);
    };

    fetchUserDetails();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        // Adjust the scroll threshold as needed
        setShowAstronaut(true);
      } else {
        setShowAstronaut(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowUserDetails = async (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="flex relative">
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-pattern bg-contain flex justify-center items-center "></div>
      <div className={`z-10 ${selectedUser ? "mr-24 w-1/2" : "w-full"}`}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => handleShowUserDetails(user)}
          />
        ))}
      </div>
      {selectedUser && (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 w-1/2 z-10">
          <UserDetailCard
            user={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </div>
      )}

      {/* Astronaut component */}
      <div className={`astronaut-background ${showAstronaut ? "show" : ""}`}>
        <div className="astronaut">
          <div className="head"></div>
          <div className="arm arm-left"></div>
          <div className="arm arm-right"></div>
          <div className="body">
            <div className="panel"></div>
          </div>
          <div className="leg leg-left"></div>
          <div className="leg leg-right"></div>
          <div className="schoolbag"></div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
