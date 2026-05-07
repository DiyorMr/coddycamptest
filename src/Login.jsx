import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate(); // 🔥 bu muhim

    const onSubmit = (data) => {
        console.log(data);

        // 🔐 oddiy tekshiruv (fake login)
        if (data.email === "coddy123@gmail.com" && data.password === "123456") {
            navigate("/home"); // 👉 boshqa page ga o'tkazadi
        } else {
            alert("Login yoki parol noto‘g‘ri");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 bg-white shadow-md rounded-2xl w-96"
            >
                <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 mb-2 border rounded-lg"
                    {...register("email", { required: "Email majburiy" })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-2 border rounded-lg"
                    {...register("password", { required: "Parol majburiy" })}
                />
                {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                )}

                <button className="w-full p-3 mt-4 text-white bg-blue-500 rounded-lg">
                    Login
                </button>
            </form>
        </div>
    );
}