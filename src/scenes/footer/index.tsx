import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 md:flex justify-between gap-16">
        {/* Logo and Description */}
        <div className="mt-16 md:mt-0 md:basis-1/2">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            We are dedicated to providing you with exceptional service and
            quality. Our goal is to enhance your lifestyle through our
            comprehensive offerings. From fitness to wellness, we have something
            for everyone.
          </p>
          <p>© Isuru. All Rights Reserved.</p>
        </div>
        
        {/* Links Section */}
        <div className="mt-16 md:mt-0 md:basis-1/4">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Discover our various services</p>
          <p className="my-5">Learn more about our programs</p>
          <p>Contact our support team</p>
        </div>
        
        {/* Contact Us Section */}
        <div className="mt-16 md:mt-0 md:basis-1/4">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            For inquiries and support, feel free to reach out to us. We're here
            to help you achieve your goals and answer any questions you may
            have.
          </p>
          <p>070 456 3212</p>
          <p>037 457 4242</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
