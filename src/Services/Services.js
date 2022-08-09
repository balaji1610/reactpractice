const base_url = "http://localhost:3001";

const Services = {
  // payload: () => {
  //   name: namevalue;
  //   email: email;
  //   adderss: adderss;
  // },
  getDataDetail: async () => {
    let result;
    await fetch(`${base_url}/posts`)
      //   .then((res) => {
      //     console.log(res);
      //   })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json, "--->Data");
        result = json;
      });
    return result;
  },

  Passdata: async (payload) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    let result;
    await fetch(`${base_url}/posts`, requestOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log(json, "--->Passdata");
        result = json;
      });
    return result;
  },
};

export default Services;
