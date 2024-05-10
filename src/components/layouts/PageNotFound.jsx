import Link from "next/link";
import { Container } from "react-bootstrap";

export const metadata = {
  title: "404 Error | A.R Education Consultancy",
  description: "Best Consultancy in Nepal",
};

const NotFoundPage = () => {
  return (
    <section className="py-48">
      <Container className="flex-center-center flex-column">
        <div className="img-error-wrapper">
          <img src="/assets/image/image-404.jpeg" alt="" />
        </div>
        <h4 className="fw-normal"> Oops! Page Not Found</h4>
        <Link
          href="/"
          className="btn-xs btn-primary text-white rounded-8 mt-12"
        >
          Go Back To Home
        </Link>
      </Container>
    </section>
  );
};

export default NotFoundPage;
