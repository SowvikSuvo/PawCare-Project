const Footer = () => {
  return (
    <footer
      className=" 
     bg-base-200 "
    >
      <div className="container sm:flex justify-between text-base-content p-10 mt-10 footer mx-auto">
        <aside>
          <p>
            <span className="text-xl font-semibold">🐾PawCare</span>
            <br />
            <br />
            Helping pets stay cozy every winter ❄️
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <p>Email: skarmoker44@gmail.com</p>
          <p>Phone: +880 1768225209</p>
        </nav>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="grid grid-flow-col gap-4">
            <a>📘</a>
            <a>📸</a>
            <a>🐦</a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
