import { Form, Input } from "antd";
import { Link, Navigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useForm } from "antd/es/form/Form";
import { useAuth } from "../../store/AuthContext";

const Signup = () => {
  const [form] = useForm();
  const { authToken } = useAuth();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      const response = await axios.post(
        "http://localhost:5050/api/auth/register",
        values
      );
      console.log(response.data);
    } catch (errorInfo) {
      console.error("Failed:", errorInfo);
    }
  };

  return (
    <div>
      {authToken && <Navigate to="/" replace={true}></Navigate>}
      <div className="isolate bg-white px-6 py-24 sm:py-12 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="mt-12 font-semibold text-center text-2xl leading-9 tracking-tight text-gray-700">
            Signup
          </p>
          {/* <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"></h2> */}
          <p className="mt-2 text-center text-lg leading-8 text-gray-600">
            Welcome to Tingre Shop
          </p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form
            form={form}
            className="space-y-6"
            // method="POST"
            onFinish={handleSubmit}
          >
            <Form.Item
              className="mt-2"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                id="username"
                type="username"
                autoComplete="username"
                placeholder="Username"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </Form.Item>
            <Form.Item
              className="mt-2"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </Form.Item>
            <Form.Item
              className="mt-2"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number !",
                },
              ]}
            >
              <div className="sm:col-span-2">
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <select
                      id="phoneNumber"
                      name="phoneNumber"
                      className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option>+91</option>
                    </select>
                    <ChevronDownIcon
                      className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder=" Phone number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </Form.Item>
            <Form.Item
              className="mt-2"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                id="password"
                placeholder="Password"
                autoComplete="password"
                required
                className="flex w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </Form.Item>
            <Form.Item
              className="mt-2"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                id="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="new-password"
                required
                className="flex w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </Form.Item>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </Form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?
            <Link
              to={"/login"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
