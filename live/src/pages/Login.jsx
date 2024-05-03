import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setData((data) => {
      const name = e.target.name;
      const value = e.target.value;
      return {
        ...data,
        [name]: value,
      };
    });
  }

  function handleLogin(email, password) {
    return new Promise((resolve, reject) => {
      //Simuliamo il ritardo nell'interrogazione del server affinchè recuperi i dati dell'utente dal database:
      setTimeout(() => {
        if (email != "" && password != "") {
          //simuliamo i dati ricevuti dal server:
          const userData = {
            firstname: "Emanuele",
            lastname: "Avitabile",
            ruolo: "Admin",
            email: "emanuele@gmail.com",
          };

          const token =
            "LBJimGWT7oxHtJfVFez4dbKyL3eYcKTJh2FrpwlIAQtqYysLQHziFqEVz676IeoX";
          //I dati dell'utente vengono restituiti dal metodo handleLogin:
          resolve({
            data: userData,
            token: token,
          });
        } else {
          reject(new Error("Credenziali non valide"));
        }
      }, 2000);
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    //Al submit del form, chiamiamo il metodo handleLogin, il quale restituisce userData:
    handleLogin(data.email, data.password)
      .then((response) => {
        console.log(response);
        //Trasformiamo i dati utente ricevuti in una stringa prima di salvarlo nel local storage:
        const responseToString = JSON.stringify(response.data);
        localStorage.setItem("Utente", responseToString);
        //Salviamo il token ricevuto nel local storage:
        localStorage.setItem("Token", response.token);
        navigate("/dashboard")
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          action="#"
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                value={data.email}
                onChange={handleChange}
                name="email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                name="password"
                value={data.password}
                onChange={handleChange}
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <a className="underline" href="#">
                Sign up
              </a>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Login;
