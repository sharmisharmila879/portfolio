import React, { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    country: "",
    language: "",
    timeZone: "",
    email: "sharmisharmila879@gmail.com",
    mobile: "9876543210",
  });
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/50"
  ); // Default profile picture

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white  border shadow-black    rounded-lg shadow-lg p-8 max-w-2xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-black">WELCOME</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-black text-white font-medium px-7 py-1.5 rounded-full hover:bg-gray-800 "
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <div className="flex items-center mb-6">
        <img
          src={profileImage}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="ml-4"
          />
        )}
        <div>
          <p className="text-lg font-medium text-black">sharmila</p>
          <p className="text-sm text-red-700">{profile.email}</p>
        </div>
      </div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-black font-medium">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
                isEditing
                  ? "bg-white border-gray-400"
                  : "bg-gray-200 border-transparent"
              }`}
            />
          </div>
          <div>
            <label className="block text-black font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
                isEditing
                  ? "bg-white border-gray-400"
                  : "bg-gray-200 border-transparent"
              }`}
            />
          </div>
          <div>
            <label className="block text-black font-medium">Gender</label>
            <input
              type="text"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
                isEditing
                  ? "bg-white border-gray-400"
                  : "bg-gray-200 border-transparent"
              }`}
            />
          </div>
          <div>
            <label className="block text-black font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={profile.country}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
                isEditing
                  ? "bg-white border-gray-400"
                  : "bg-gray-200 border-transparent"
              }`}
            />
          </div>
          <div>
            <label className="block text-black font-medium">Language</label>
            <input
              type="text"
              name="language"
              value={profile.language}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
                isEditing
                  ? "bg-white border-gray-400"
                  : "bg-gray-200 border-transparent"
              }`}
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-black font-medium">
            My Email Address
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            disabled
            className="mt-1 w-full px-3 py-1.5 bg-gray-100 border border-gray-500 rounded-md text-gray-700"
          />
        </div>
        <div className="mt-6">
          <label className="block text-black font-medium">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={profile.mobile}
            disabled
            className="mt-1 w-full px-3 py-1.5 bg-gray-100 border border-gray-500 rounded-md text-gray-700"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
