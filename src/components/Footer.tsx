import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-12 flex flex-col items-center gap-8 md:justify-between md:gap-0 md:flex-row md:items-start bg-gray-800 rounded-lg p-8 [&>section]:flex [&>section]:flex-col [&>section]:items-center md:[&>section]:items-start [&>section]:gap-4">
      <section className="[&>p]:text-sm [&>p]:text-gray-400">
        <Link href={"/"}>
          <p className="text-base font-medium uppercase tracking-wider text-white">
            Nova Store
          </p>
        </Link>
        <p>&copy; Nova Store</p>
        <p>All rights reserved.</p>
      </section>
      <section className="[&>p]:text-sm [&>p]:text-white [&>a]:text-sm [&>a]:text-gray-400">
        <p>Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of service</Link>
        <Link href="/">Privacy Policy</Link>
      </section>
      <section className="[&>p]:text-sm [&>p]:text-white [&>a]:text-sm [&>a]:text-gray-400">
        <p>Products</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </section>
      <section className="[&>p]:text-sm [&>p]:text-white [&>a]:text-sm [&>a]:text-gray-400">
        <p>Company</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiiate Program</Link>
      </section>
    </div>
  );
};

export default Footer;
