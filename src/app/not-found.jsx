import Link from "next/link";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <section>
        <Container className="py-40">
          <Link href="/" className="text-secondary">
            Back To Home
          </Link>
          <div className="img-landscape">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/12/14/19/error-404-1252056_1280.png"
              alt="4o4 Not found"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
