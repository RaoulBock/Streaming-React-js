export const ApiServices = {
  on_login: async ({ email, password, UserCookie }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", UserCookie);

    var raw = JSON.stringify({
      email: email,
      password: password
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    return fetch("http://localhost:9443/auth/signin", requestOptions).then(
      (response) => response.json()
    );
  }
};

export const AuthServices = {
  on_register: async ({ name, email, password }) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: name,
      email: email,
      password: password
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch(
      "http://192.168.178.149:9443/api/users",
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));

    return response;
  }
};
