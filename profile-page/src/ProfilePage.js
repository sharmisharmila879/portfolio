import React, { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    country: "",
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
      console.log("File selected:", file); // Debugging log
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("No file selected");
    }
  };

  const handleImageClick = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    } else {
      console.error("File input not found");
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
      <div className="flex items-center mb-6 relative">
        <img
          src={profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full mr-4"
        />
        {isEditing && (
          <>
            <div className="w-[20px] h-[20px] rounded-full left-14 bottom-0 font-extrabold absolute bg-black text-white hover:bg-gray-800 flex items-center justify-center">
              <button onClick={handleImageClick}>+</button>
            </div>

            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleImageChange}
              //onChange={handleImageClick}
              className="hidden"
            />
          </>
        )}

        <div>
          <p className="text-lg font-medium text-black">sharmila</p>
          <p className="text-sm text-gray-700">{profile.email}</p>
        </div>
      </div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-black font-medium">First Name</label>
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
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              disabled={!isEditing}
              className={`mt-1 w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
                isEditing
                  ? "bg-white border-gray-400"
                  : "bg-gray-200 border-transparent"
              }`}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
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
        </div>
        <div className="mt-6">
          <label className="block text-black font-medium">
            Email Address
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
          <label className="block text-black font-medium">Mobile Number</label>
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
