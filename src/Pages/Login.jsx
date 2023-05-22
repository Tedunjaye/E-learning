import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";

const Login = () => {
  const schema = yup.object().shape({
    userName: yup.string().min(4).max(20).required("Username is required"),
    password: yup.string().min(5).max(20).required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero-section">
        <input
          type="text"
          placeholder="Username..."
          {...register("userName")}
        />
        <h6>{errors.userName?.message}</h6>
        <br />
        <input
          type="password" // Use "password" type for password input
          placeholder="Password..."
          {...register("password")}
        />
        <h6>{errors.password?.message}</h6>
        <br />
        <Link to="/dashboard"> <input type="submit" /> </Link> {/* Add "type" attribute */}
      </div>
    </form>
  );
};

export default Login;
