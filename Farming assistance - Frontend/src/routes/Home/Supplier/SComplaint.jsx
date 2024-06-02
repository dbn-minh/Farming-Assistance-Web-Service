import React from "react";

const SComplaint = () => {
  const fetchTransaction = () => {
    console.log("check transaction");
  };

  return (
    <div className="ml-4">
      <div>
        <div className="flex items-center justify-between">
          <div className="title-of-page w-[50%]">
            <div className="text-[#204E51] font-bold text-[2rem]">
              Welcome to Sprout Farm
            </div>
            <span className="!w-[100%]">
              See your complaint to other farmer
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white w-full p-2 rounded-sm text-black">
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#204E51]">
                <tr className="text-white">
                  <th>ComplaintID</th>
                  <th>FarmerID</th>
                  <th>FamerName</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody>{fetchTransaction()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

};

export default SComplaint;
