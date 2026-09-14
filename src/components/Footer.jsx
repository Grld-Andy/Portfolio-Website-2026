import SocialIcon from './SocialIcon.jsx';

const socialLinks = [
  { url: 'https://twitter.com', label: 'Twitter' },
  { url: 'https://linkedin.com', label: 'LinkedIn' },
  { url: 'https://github.com', label: 'GitHub' },
];

export default function Footer() {
  return (
    <>
      <div className="bottom_line" />
      <div className="bottom_items">
        <p>2026 - Obed NKrumah, All rights reserved</p>
        <div className="bottom_socials">
          {socialLinks.map(({ url, label }) => (
            <SocialIcon key={label} url={url} label={label} />
          ))}
        </div>
      </div>
    </>
  );
}
