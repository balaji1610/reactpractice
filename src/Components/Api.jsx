import Services from "../Services/Services";
import tableSort from "table-sort-js/table-sort.js";
import { useEffect, useState } from "react";

const API = () => {
  const [searchtt, setsearch] = useState("");
  const [getdata, setdata] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [ascending, setAscending] = useState({});

  // const [arraylist, setarraylist] = useState(posts);
  const [userFormdata, setUserFormData] = useState({
    name: "",
    email: "",
    adderss: "",
  });
  // const [sortState, setSortState] = useState("none");
  const handleChange = (event) => {
    setsearch(event.target.value);
  };

  const ascendingClick = (getdata) => {
    return getdata.sort(function (a, b) {
      return b - a;
    });
    ascending(getdata);
  };
  console.log(getdata, "--setAscending");
  const handleChangeFromData = (event) => {
    setUserFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(userFormdata, "--userFormdata");

  // const sortMethods = {
  //   none: { method: (a, b) => null },
  //   ascending: { method: undefined },
  //   descending: { method: (a, b) => (a > b ? -1 : 1) },
  // };
  const submitButtonClick = async () => {
    const resPostdata = await Services.Passdata(userFormdata);
    console.log(resPostdata, "Go Service file");
    setShowModal(false);

    window.location.reload();

    // const requestOptions = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    //   body: JSON.stringify(userFormdata),
    // };

    // console.log(requestOptions.body, "--jsonBody");
    // let result;
    // fetch(`http://localhost:3001/posts`, requestOptions)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json, "--->Passdata");
    //     result = json;
    //   });
    // return result;
  };
  tableSort();
  // let posts = [
  //   {
  //     name: "pavi",
  //   },
  //   {
  //     name: "thara",
  //   },
  //   {
  //     name: "gayathri",
  //   },
  //   {
  //     name: "devi",
  //   },
  //   {
  //     name: "thara",
  //   },
  //   {
  //     name: "gayathri",
  //   },
  //   {
  //     name: "devi",
  //   },
  //   {
  //     name: "thara",
  //   },
  //   {
  //     name: "gayathri",
  //   },
  //   {
  //     name: "devi",
  //   },
  //   {
  //     name: "pavi",
  //   },
  //   {
  //     name: "thara",
  //   },
  // ];
  // console.log(posts[0].name, posts[1].name, "---name");

  useEffect(() => {
    (async () => {
      const res = await Services.getDataDetail();

      // console.log(res, "--- GetData");

      setdata(res);
    })();
  }, []);

  return (
    <div>
      {/* <div>
        {posts.map((value, index) => (
          <ol key={index}>
            console.log({value.name},"array")
            <li className="px-6 py-4">{value.name}</li>
          </ol>
        ))}
      </div> */}
      <div className="min-h-screen bg-red-800 py-5">
        <div className="overflow-x-auto w-full">
          <div>
            <input
              type="search"
              style={{ border: "1px solid #000000" }}
              onChange={handleChange}
              placeholder="Enter a Search"
              className=" absolute left-[570px] py-[5px] text-2xl"
            ></input>

            {/* {console.log(searchtt)} */}
          </div>
          {/* <div>
            <select
              defaultValue={"DEFAULT"}
              onChange={(e) => setSortState(e.target.value)}
            >
              <option value="DEFAULT" disabled>
                None
              </option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div> */}
          <div>
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Add New
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Modal Title</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <div class=" bg-gray-300 px-2">
                          <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
                            <div class="md:flex">
                              <div class="w-full p-3 px-6 py-10">
                                <div class="mt-3 relative">
                                  <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                                    Name
                                  </span>
                                  <input
                                    type="text"
                                    class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                                    name="name"
                                    value={userFormdata.name}
                                    onChange={handleChangeFromData}
                                  />
                                </div>

                                <div class="mt-4 relative">
                                  <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                                    Email
                                  </span>
                                  <input
                                    type="text"
                                    class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                                    name="email"
                                    value={userFormdata.email}
                                    onChange={handleChangeFromData}
                                  />
                                </div>

                                <div class="mt-4 relative">
                                  <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                                    Address
                                  </span>
                                  <input
                                    type="text"
                                    class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                                    name="adderss"
                                    value={userFormdata.adderss}
                                    onChange={handleChangeFromData}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => submitButtonClick()}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
          <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden my-28 table-sort">
            <thead className="bg-gray-900">
              <tr className="text-white text-left">
                <th className="font-semibold text-sm uppercase px-6 py-4 ">
                  {" "}
                  <button onClick={ascendingClick}> S.NO </button>
                </th>
                <th className="font-semibold text-sm uppercase px-6 py-4">
                  {" "}
                  <button onClick={ascendingClick}> Name</button>{" "}
                </th>
                <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                  {" "}
                  Email{" "}
                </th>
                <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                  {" "}
                  Address{" "}
                </th>
                <th className="font-semibold text-sm uppercase px-6 py-4"> </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getdata
                .filter((value) => {
                  if (searchtt === "") {
                    return value;
                  } else if (
                    value.name.toLowerCase().includes(searchtt.toLowerCase())
                  ) {
                    return value;
                  } else if (
                    value.email.toLowerCase().includes(searchtt.toLowerCase())
                  ) {
                    return value;
                  } else if (
                    value.adderss.toLowerCase().includes(searchtt.toLowerCase())
                  ) {
                    return value;
                  }
                })

                .map((value, index) => (
                  <tr key={index} id={index}>
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{value.name}</td>
                    <td className="px-6 py-4">{value.email}</td>
                    <td className="px-6 py-4">{value.adderss}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default API;
