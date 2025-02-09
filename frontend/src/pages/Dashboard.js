import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  Calendar,
  Clock,
  LayoutDashboard,
  LetterText,
  Mail,
  Mails,
  Sparkle,
  Sparkles,
  Text,
  UserIcon,
} from "lucide-react";
import Modal from "../components/Modal";
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    setUser(JSON.parse(userData));
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#121212] sm:overflow-hidden">
        <div className="relative p-2 sm:p-10 max-w-6xl mx-auto">
          <div className="hidden md:inline-flex items-center gap-2 w-full justify-end">
            <Link to={"/login"} className="size-8 bg-white rounded-full">
              {user ? (
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={user?.profileImg}
                  alt={user?.name}
                />
              ) : (
                <UserIcon />
              )}
            </Link>
            <div className="text-white">
              <p className="text-xl">{user?.name}</p>
              <button
                className="text-sm font-semibold text-rose-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="my-4">
            <div className="z-50 sticky top-0 left-0 right-0 w-full py-2 sm:py-0 bg-[#121212]/30 backdrop-filter backdrop-blur-sm flex justify-between items-center">
              <h1 className="text-white text-3xl sm:text-5xl font-bold">
                RemindX
              </h1>
              <div className="inline-flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                  className="px-2 py-1 sm:px-4 sm:py-2 text-center bg-violet-700 rounded-lg text-white sm:text-lg font-semibold"
                >
                  Add Email
                </button>
                <Link
                  to={"/login"}
                  className="sm:hidden size-8 p-1 bg-white rounded-full"
                >
                  <UserIcon />
                </Link>
              </div>
            </div>
            <p className="my-2 text-xs sm:text-base text-slate-400">
              Organize your emails in simpler way keep them lock until its not
              necessary and unlock automatically when needed... The smarter way
              to organize your email and don't worry about missing the interview
              schedule tommorrow...
            </p>
          </div>
          <div className="sm:grid grid-flow-col grid-cols-10 gap-4">
            <div className="relative col-span-6 h-[500px] overflow-y-scroll bg-[#272727]/60 text-white rounded-lg">
              <h2 className="z-10 w-full sticky top-0 inline-flex gap-2 items-center left-0 right-0 px-6 py-2 text-xl font-semibold bg-[#272727]/10 backdrop-filter backdrop-blur-sm shadow-md">
                <Mail /> Upcoming Unlocks
              </h2>
              <div className="px-1 my-2 sm:px-4 sm:my-4 flex flex-col gap-2">
                {[...Array(10)].map((_, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-4 w-full bg-black/50 rounded-lg "
                  >
                    <p className="text-base sm:text-lg font-semibold">
                      Email Subject Here....
                    </p>
                    <div className="flex justify-between items-center gap-2">
                      <div className="w-[60%] sm:w-[80%]">
                        <p className="relative pl-6 text-gray-400 text-sm line-clamp-2">
                          <Text className="size-5 absolute top-1 left-0" />
                          Description : Email description here with the line
                          clamp of 2 or 3 same here Email description here with
                          the line clamp of 2 or 3 same here Email description
                          here with the line clamp of 2 or 3 same here Email
                          description here with the line clamp of 2 or 3 same
                          here
                        </p>
                      </div>
                      <div className="w-[40%] sm:w-[20%] text-sm">
                        <p className="w-full inline-flex items-center gap-1 font-semibold">
                          <Calendar className="size-4" /> 08 Feb 2025
                        </p>
                        <p className="w-full inline-flex items-center gap-1 text-gray-400">
                          <Clock className="size-4" /> 10:00 pm
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden sm:block relative col-span-4 h-[500px] overflow-y-scroll bg-[#272727]/60 text-white rounded-lg">
              <h2 className="w-full sticky top-0 left-0 right-0 inline-flex items-center gap-2 px-6 py-2 text-xl font-semibold bg-[#272727]/10 backdrop-filter backdrop-blur-sm shadow-md">
                <Mails /> All Mails
              </h2>
              <div className="flex flex-col divide-y">
                {[...Array(10)].map((_, idx) => (
                  <div
                    key={idx}
                    className="p-3 w-full hover:bg-black/50 hover:cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-[10%]">
                        <p className="p-2 size-7 inline-flex justify-center items-center rounded-full text-black font-bold bg-white">
                          {idx + 1}
                        </p>
                      </div>
                      <div className="w-[90%]">
                        <p className="text-lg font-semibold">
                          Email Subject Here....
                        </p>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          Email description here with the line clamp of 2 or 3
                          same here Email description here with the line clamp
                          of 2 or 3 same here Email description here with the
                          line clamp of 2 or 3 same here Email description here
                          with the line clamp of 2 or 3 same here
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={"Lock Email"}
          description={"Lock your email until its necessary..."}
          isOpen={isModalOpen}
          onClose={(e) => {
            e.preventDefault();
            setIsModalOpen(false);
          }}
        >
          <div className="my-3 flex flex-col gap-1">
            <label
              className="text-base sm:text-lg inline-flex gap-2 items-center"
              htmlFor="email"
            >
              <Mail /> Email title
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email title here..."
              className="px-4 py-2 bg-black/50 rounded-lg ring-0 focus:outline-none"
            />
            <label
              className="text-base sm:text-lg inline-flex gap-2 items-center"
              htmlFor="desc"
            >
              <LetterText /> Email description
            </label>
            <textarea
              id="desc"
              type="text"
              placeholder="Paste the email description here..."
              className="max-h-24 h-24 min-h-24 px-4 py-2 bg-black/50 rounded-lg ring-0 focus:outline-none"
            />
            <div>
              <div className="text-base sm:text-lg inline-flex gap-2 items-center">
                <LayoutDashboard /> <p>Priority</p>
              </div>
              <div className="w-full p-2 inline-flex gap-2 items-center">
                <button className="inline-flex gap-2 items-center px-3 py-1 rounded-lg border">
                  <div className="p-1 rounded-full bg-green-600"></div>
                  <p>Low</p>
                </button>
                <button className="inline-flex gap-2 items-center px-3 py-1 rounded-lg border">
                  <div className="p-1 rounded-full bg-yellow-600"></div>
                  <p>Medium</p>
                </button>
                <button className="inline-flex gap-2 items-center px-3 py-1 rounded-lg border">
                  <div className="p-1 rounded-full bg-red-600"></div>
                  <p>High</p>
                </button>
              </div>
            </div>
            <div className="my-2 lg:grid grid-flow-col grid-cols-2">
              <div className="inline-flex gap-4 items-center">
                <label
                  className="text-base sm:text-lg inline-flex gap-2 items-center"
                  htmlFor="date"
                >
                  <Calendar /> Lock date
                </label>
                <input
                  id="date"
                  type="date"
                  placeholder="Paste the email description here..."
                  className="px-4 py-2 bg-black/50 rounded-lg ring-0 accent-white focus:outline-none"
                />
              </div>

              <div className="mt-2 lg:mt-0 inline-flex gap-4 items-center">
                <label
                  className="text-base sm:text-lg inline-flex gap-2 items-center"
                  htmlFor="time"
                >
                  <Clock /> Lock time
                </label>
                <input
                  id="time"
                  type="time"
                  placeholder="Paste the email description here..."
                  className="px-4 py-2 bg-black/50 rounded-lg ring-0 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="mt-2 w-full inline-flex justify-evenly items-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl blur-sm bg-gradient-to-r from-rose-800 via-violet-600 to-blue-600"></div>
              <button className="inline-flex gap-1 items-center justify-center bg-white/40 backdrop-filter backdrop-blur-sm text-black ring-2 ring-white/5 px-5 py-1 text-lg font-semibold rounded-lg">
                <Sparkles className="size-5" /> AI Anaylse
              </button>
            </div>
            {/* <button className="bg-[#363636] text-white px-5 py-1 text-lg font-semibold rounded-lg">
              Clear
            </button> */}
            <button className="bg-white text-black px-5 py-1 text-lg font-semibold rounded-lg">
              Save
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Dashboard;
