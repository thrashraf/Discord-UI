export const Link = () => {
  const allLink = [
    {
      title: "Product",
      link: ["Download", "Nitro", "Status"],
    },
    {
      title: "Company",
      link: ["About", "Jobs", "Branding", "Newsroom"],
    },
    {
      title: "Resources",
      link: ["College", "Support", "Safety", "Blog", "Feedback", "Developers", "StreamKit"],
    },
    {
      title: "Company",
      link: ["Terms", "Privacy", "Cookie Settings", "Guidelines", "Acknowledgements", "Licenses", "Moderation"],
    }
  ];

  return (
    <div className=" flex justify-around w-full">
      {allLink.map((content, index) => {
        return (
          <div key={index}>
            <p className="text-blue-600 pt-2 mb-2">{content.title}</p>
            {content.link.map((link) => {
              return (
                <ul className="text-white">
                  <li className="mb-2 hover:underline cursor-pointer text-sm">{link}</li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
