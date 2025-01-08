import "./index.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <input
            className="  w-full p-4 text-2xl text-left border-2 bg-green-800 rounded-lg mb-4 "
            type="text"
            placeholder="0"
          />

          <div className="  grid grid-cols-4 gap-1">
            <button className=" p-4 rounded-lg text-xl hover:bg-orange-300 bg-orange-400 ">
              AC
            </button>
            <button className=" p-4 rounded-lg text-xl hover:bg-orange-300 bg-orange-400">
              C
            </button>
            <button className=" p-4 rounded-lg text-xl  hover:bg-red-300 bg-red-400">
              DEL
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              /
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              1
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              2
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              3
            </button>
            <button className=" p-4 rounded-lg text-xl hover:bg-yellow-300 bg-yellow-400">
              x
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              4
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              5
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              6
            </button>
            <button className=" p-4 rounded-lg text-xl hover:bg-yellow-300 bg-yellow-400">
              +
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              7
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              8
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              9
            </button>
            <button className=" p-4 rounded-lg text-xl hover:bg-yellow-300 bg-yellow-400">
              -
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              .
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              0
            </button>
            <button className=" p-4 rounded-lg text-xl hover:bg-yellow-300 bg-yellow-400">
              %
            </button>
            <button className=" p-4 rounded-lg text-xl hover:bg-blue-300 bg-blue-400">
              =
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <input
            type="text"
            id="display"
            className="w-full p-4 text-2xl text-right border-2 border-gray-300 rounded-lg mb-4"
          />

          <div className="grid grid-cols-4 gap-4">
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              7
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              8
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              9
            </button>
            <button className="bg-orange-400 p-4 rounded-lg text-xl text-white hover:bg-orange-500">
              /
            </button>

            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              4
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              5
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              6
            </button>
            <button className="bg-orange-400 p-4 rounded-lg text-xl text-white hover:bg-orange-500">
              *
            </button>

            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              1
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              2
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              3
            </button>
            <button className="bg-orange-400 p-4 rounded-lg text-xl text-white hover:bg-orange-500">
              -
            </button>

            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              0
            </button>
            <button className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300">
              .
            </button>
            <button className="bg-blue-400 p-4 rounded-lg text-xl text-white hover:bg-blue-500">
              =
            </button>
            <button className="bg-orange-400 p-4 rounded-lg text-xl text-white hover:bg-orange-500">
              +
            </button>
          </div>

          <button className="bg-red-400 w-full p-4 rounded-lg text-xl text-white hover:bg-red-500 mt-4">
            C
          </button>
        </div>
      </div> */}
    </>
  );
}

export default App;
