import React from "react";
import { Link } from "react-router-dom";
import { Mail, Mails, UserIcon } from "lucide-react";
const Dashboard = () => {
  return (
    <div className="h-screen min-h-screen bg-[#121212] overflow-hidden">
      <div className="p-10 max-w-6xl mx-auto">
        <div className="w-full inline-flex justify-end">
          <Link to={"/login"} className="size-8 p-1 bg-white rounded-full">
            <UserIcon />
          </Link>
        </div>
        <div className="my-4">
          <div className=" flex justify-between items-center">
            <h1 className="text-white text-5xl font-bold">RemindX</h1>
            <button className="px-4 py-2 text-center bg-violet-700 rounded-lg text-white text-lg font-semibold">
              Add Email
            </button>
          </div>
          <p className="my-2 text-slate-400">
            Organize your emails in simpler way keep them lock until its not
            necessary and unlock automatically when needed... The smarter way to
            organize your email and don't worry about missing the interview
            schedule tommorrow...
          </p>
        </div>
        <div className="grid grid-flow-col grid-cols-10 gap-4">
          <div className="relative col-span-6 h-[500px] overflow-y-scroll bg-[#272727]/60 text-white rounded-lg">
            <h2 className="w-full sticky top-0 inline-flex gap-2 items-center left-0 right-0 px-6 py-2 text-xl font-semibold bg-[#272727]/10 backdrop-filter backdrop-blur-sm shadow-md">
              <Mail /> Locked Email
            </h2>
            <div className="px-4 flex flex-col gap-2 my-4">
              {[...Array(10)].map((_, idx) => (
                <div key={idx} className="p-4 w-full bg-black/50 rounded-lg ">
                  <p className="text-lg font-semibold">
                    Email Subject Here....
                  </p>
                  <div className="flex justify-between items-center gap-2">
                    <div className="w-[80%]">
                      <p className="text-gray-400 text-sm line-clamp-2">
                        Email description here with the line clamp of 2 or 3
                        same here Email description here with the line clamp of
                        2 or 3 same here Email description here with the line
                        clamp of 2 or 3 same here Email description here with
                        the line clamp of 2 or 3 same here
                      </p>
                    </div>
                    <div className="w-[20%] text-sm">
                      <p className="font-semibold">08 Feb 2025</p>
                      <p className="text-gray-400">10:00 pm</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative col-span-4 h-[500px] overflow-y-scroll bg-[#272727]/60 text-white rounded-lg">
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
                        same here Email description here with the line clamp of
                        2 or 3 same here Email description here with the line
                        clamp of 2 or 3 same here Email description here with
                        the line clamp of 2 or 3 same here
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
  );
};

export default Dashboard;
