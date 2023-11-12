export const SocialMedia = ({ socialMedia }) => {
  return (
    <ul className="flex gap-[10px]">
      {socialMedia.map((item) => (
        <li key={item.alt} className="cursor-pointer">
          <img src={item.img} alt={item.alt} />
        </li>
      ))}
    </ul>
  );
};
