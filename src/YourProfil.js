import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState({
    name: "Muhammad Dzaki Faikar",
    Nim: "2203040076",
    email: "mdzakifaikar28@gmail.com",
    address: "JL.Zaenal Arifin Barat No.1",
  });

  const [isEditing, setIsEditing] = useState(false);

  const saveProfile = () => {
    setIsEditing(false);
  };

  return (
    <div
    className="min-h-screen flex flex-col"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1491466424936-e304919aada7?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <header className="fixed top-0 left-0 right-0 z-10 shadow-md">
        <Navbar />
      </header>
      <div className="flex items-center justify-center h-screen">
        <div
          className="max-w-md w-full mx-4 md:mx-auto shadow-lg rounded-lg overflow-hidde border-4 border-white"
          style={{
            backgroundColor: "rgba(45, 212, 191, 0.4)",
            borderColor: "rgb(255, 255, 255, 0.5)",
          }}
        >
          <div className="px-6 py-4">
            <div className="flex items-center justify-center mb-8 mt-8">
              <img
                src="https://iili.io/Jq64g5B.jpg"
                alt="Foto Profil"
                className="w-32 h-32 rounded-full "
              />
            </div>
            <div className="font-bold text-xl mb-4 text-center">
              Profil Pengguna
            </div>
            <div>
              <p className="mb-4">
                <span className="block text-black text-sm font-bold mb-2">
                  Nama:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={userProfile.name}
                    onChange={(e) =>
                      setUserProfile({ ...userProfile, name: e.target.value })
                    }
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  userProfile.name
                )}
              </p>
              <p className="mb-4">
                <span className="block text-black text-sm font-bold mb-2">
                  Nim:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={userProfile.Nim}
                    onChange={(e) =>
                      setUserProfile({ ...userProfile, Nim: e.target.value })
                    }
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  userProfile.Nim
                )}
              </p>
              <p className="mb-4">
                <span className="block text-black text-sm font-bold mb-2">
                  Email:
                </span>
                {isEditing ? (
                  <input
                    type="email"
                    value={userProfile.email}
                    onChange={(e) =>
                      setUserProfile({ ...userProfile, email: e.target.value })
                    }
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  userProfile.email
                )}
              </p>
              <p className="mb-4">
                <span className="block text-black text-sm font-bold mb-2">
                  Alamat:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={userProfile.address}
                    onChange={(e) =>
                      setUserProfile({
                        ...userProfile,
                        address: e.target.value,
                      })
                    }
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  userProfile.address
                )}
              </p>
              {isEditing ? (
                <button
                  onClick={saveProfile}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 mt-4"
                >
                  Simpan
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-teal-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mb-6 mt-4"
                >
                  Edit Profil
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
