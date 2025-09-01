import "./Wearables.scss";

// 🔸 이미지 에셋 (프로젝트 경로에 맞게 수정)
// 히어로 왼쪽 큰 이미지 (모자+선인장)
import hatImg from "../assets/wearables/Yacht_it_final.avif";
// 중간 콜라주 3장 + 우측 두 장
import collage1 from "../assets/wearables/Screen Shot 2020-07-04 at 1_59_58 PM.avif";
import collage2 from "../assets/wearables/Screen Shot 2020-07-04 at 2_00_52 PM.avif";
import collage3 from "../assets/wearables/Screen Shot 2020-07-04 at 2_01_42 PM.avif";
import collage4 from "../assets/wearables/Eye.avif";
import collage5 from "../assets/wearables/Screen Shot 2020-07-04 at 2_00_29 PM.avif";

export default function Wearables() {
  return (
    <main className="wearables-page">
      {/* 상단 얇은 바 - 전체 폭 */}
      <div className="page-banner">
        NOT SURE WHERE YOU ARE BUT YOU ARE DEFINITELY HERE
      </div>

      <section className="container hero">
        <h1 className="title">WEARABLES</h1>
        <p className="subtitle">
          Happiness is a state of mind, laughter is a drug. I get it, now get me some.
          <br />
          We heard you wanted wearables to go with your eatables.
        </p>

        <div className="hero-grid">
          {/* 좌: 큰 이미지 */}
          <figure className="hero-image">
            <img src={hatImg} alt="OK Drugs Yacht Club Hat on cactus" />
          </figure>

          {/* 우: 제품 정보 블럭 */}
          <div className="hero-info">
            <h2 className="product-name">
              <span>YACHT CLUB</span>
              <span>HAT</span>
            </h2>

            <a className="stock" href="#">Out of Stock</a>

            <button className="btn-primary" disabled>
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* 배경색 구분 섹션 */}
      <section className="band">
        <div className="container collage">
          <div className="cards">
            <img className="card tilt-l" src={collage1} alt="Community photo 1" />
            <img className="card center" src={collage2} alt="Community photo 2" />
            <img className="card tilt-r" src={collage3} alt="Community photo 3" />
          </div>

          <div className="side">
            <img className="chip top" src={collage4} alt="Small photo 1" />
            <div className="follow">
              {/* <span className="eye" aria-hidden>👁</span> */}
              <p>
                Follow <b>@okdrugsco</b>
                <br />
                #okdrugs #claritytherapy
              </p>
            </div>
            <img className="chip bottom" src={collage5} alt="Small photo 2" />
          </div>
        </div>
      </section>

      <section className="street">
        <h2 className="street-title">
          <span>WORD ON</span>
          <span>THE STREET</span>
        </h2>

        <div className="street-copy">
          <p>
            Follow us on instagram <b>@okdrugsco</b>.
            <br />
            Tag us in a delicious post of you and
            <br />
            your OK Drugs merch
            <br />
            and we will feature them right here,
            <br />
            right now. <b>#okdrugs</b>
          </p>
        </div>
      </section>
    </main>
  );
}
