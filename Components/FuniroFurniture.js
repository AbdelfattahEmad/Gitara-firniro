import "../css/FuniroFurniture/FuniroFurniture.css";
import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="Title">
          <p>Share your setup with</p>
          <h2>#FuniroFurniture</h2>
        </div>

        <div className="grid">
          <div className="item item1">
            <Image
              src="/images/g1.png"
              alt="Setup 1"
              width={300}
              height={400}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
          <div className="item item2">
            <Image
              src="/images/g2.png"
              alt="Setup 2"
              width={300}
              height={400}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>

          <div className="item item3">
            <Image
              src="/images/g3.png"
              alt="Setup 3"
              width={300}
              height={400}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>

          <div className="item item4">
            <Image
              src="/images/g4.png"
              alt="Setup 4"
              width={300}
              height={400}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>

          <div className="item item5">
            <Image
              src="/images/g5.png"
              alt="Setup 5"
              width={300}
              height={400}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>

          <div className="item item6">
            <Image
              src="/images/g6.png"
              alt="Setup 6"
              width={300}
              height={400}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>

          <div className="item item7">
            <Image
              src="/images/g7.png"
              alt="Setup 7"
              width={300}
              height={400}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>

          <div className="item item8">
            <Image
              src="/images/g8.png"
              alt="Setup 8"
              width={300}
              height={400}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
          <div className="item item9">
            <Image
              src="/images/g9.png"
              alt="Setup 9"
              width={300}
              height={400}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
          
          <div className="item item10">
            <Image
              src="/images/g10.png"
              alt="Setup 10"
              width={300}
              height={400}
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
