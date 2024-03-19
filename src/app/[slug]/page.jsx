"use client";

import { Container } from "react-bootstrap";
import { Breadcrumb } from "antd";
import Link from "next/link";
const SlugPages = () => {
  return (
    <>
      <section className="breadcrumb-banner position-relative">
        <div className="img-wide">
          <img
            src="https://media.istockphoto.com/id/1404654112/photo/terms-and-conditions-for-employers-digital-contract-that-describes-the-working-conditions-and.jpg?s=612x612&w=0&k=20&c=Q8FCrUc27ekTkOaaJJsESGNc29lIIjidFW2Gcs52x6k="
            alt="about-image"
          />

          <Container>
            <div className="about-banner-content bitter">
              <h2>Terms And Conditions</h2>
              <Breadcrumb
                className="h5 fw-normal mt-8"
                items={[
                  {
                    title: <Link href="/">Home</Link>,
                  },
                  {
                    title: "Terms And Conditions",
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section className=" py-40">
        <Container>
          <h4 className="text-center mb-12">Terms and Conditions</h4>
          <div className="p fw-light small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            praesentium earum cumque et sapiente veniam ratione quidem ipsa at
            quibusdam itaque? Magni mollitia maiores illum necessitatibus quam
            cumque magnam sit ipsum commodi reprehenderit hic cupiditate
            temporibus distinctio neque consectetur quibusdam provident aliquam
            blanditiis voluptatum omnis, adipisci eum, qui eius tempora. Aliquam
            perspiciatis pariatur doloribus? Itaque quia totam maiores quos
            alias illo fuga numquam sunt similique vel. Asperiores doloribus
            iusto quas assumenda recusandae nostrum! Cumque, temporibus. Saepe,
            corrupti voluptatum! Recusandae, quos. Nisi corrupti amet minus
            reiciendis possimus vel earum ab quod. Nulla porro voluptate ratione
            vel deleniti repellendus, quidem eaque at.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            aut sint possimus doloribus, accusamus et earum atque fugit
            inventore facere temporibus eveniet molestiae libero illum quam
            autem laborum quis quod? Iste voluptates facere quis odit ipsa
            beatae voluptatum quidem ullam expedita corrupti, necessitatibus
            esse maiores consectetur, sunt cupiditate placeat dolor hic! Ab
            ratione aut ea deleniti minus, vel consequatur tempora, itaque
            officia amet in molestiae, totam et corporis. Dolore, dolorem quas
            aspernatur quod magni pariatur nesciunt laudantium sit qui corrupti
            numquam placeat modi saepe dolores distinctio eum nisi et repellat?
            Accusantium architecto officia iste non, repellendus nihil sunt illo
            quidem?
          </div>
        </Container>
      </section>
    </>
  );
};

export default SlugPages;
