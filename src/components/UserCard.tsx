interface User {
  id: string;
  jobTitle: string;
  profile: {
    firstName: string;
    lastName: string;
    username: string;
  };
  avatar: string;
  location?: string;
  otherInfo?: string;
  isLoading: boolean;
}

interface Props {
  user: User;
  onClick: () => void;
}

const UserCard = ({ user, onClick }: Props) => {
  return (
    <div
      className="bg-white mx-4 my-3 rounded-lg shadow-md p-4 flex cursor-pointer transition duration-300 transform hover:shadow-lg relative"
      onClick={onClick}
    >
      {user.isLoading ? (
        <div className="animate-pulse flex">
          <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <div className="h-6 bg-gray-300 rounded w-24 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-48 mb-1"></div>
            <div className="h-3 my-2 bg-gray-300 rounded w-20"></div>
          </div>
        </div>
      ) : (
        <div className="flex">
          {user.avatar && (
            <div className="flex items-center mb-4">
              <img
                src={user.avatar}
                alt={`${user.profile.firstName} ${user.profile.lastName} avatar`}
                className="w-16 h-16 rounded-full mx-4"
              />
            </div>
          )}
          <div>
            <h2 className="text-lg font-bold mb-2">{`${user.profile.firstName} ${user.profile.lastName}`}</h2>
            <p className="text-gray-700 mb-1">{user.jobTitle}</p>
            <p className="text-gray-500 mb-2">{user.profile.username}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
