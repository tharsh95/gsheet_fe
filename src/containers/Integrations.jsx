import { Link } from "react-router-dom";

const Integrations = () => {

  const arr = [
    {
      title:"Google Sheets",
      link:"/sheets"
    },
    {
      title:"Cloudinary",
    },
    {
      title:"Google reCAPTCHA",
    },
    {
      title:"Hubspot",
    },
    {
      title:"Cors",
    },
    {
      title:"Mixpanel",
    },
    {
      title:"Clarity",
    }
  ]
  return (
    <div className="flex flex-col ml-8 mt-16 ">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Integrations</h1>
      </div>
      <div>
        <ul className="flex flex-col justify-between h-[30rem]">
          {arr.map((el) => (
            <>
              <Link to={el.link} className="hover:bg-gray-300 p-6">{el.title}</Link>
              <div className="border-b border-gray-400 w-[30rem] "></div>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Integrations;
