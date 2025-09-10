const Footer = () => {
  return (
    <footer className="text-center p-4 bg-gray-100 dark:bg-gray-800">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;