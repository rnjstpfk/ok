import "./Home.scss";

// 이미지들
import leftImg from "../assets/FLATLAY_3.avif";
import rightImg from "../assets/Yacht_it_final.avif";
import brandImg from "../assets/OK_DRUGS_LOGO.png";
import coffeeStar from "../assets/Coffestar.avif";

// 파일 없이 쓰는 화살표(SVG)
function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 24" fill="none" aria-hidden="true">
      <path d="M2 12H98" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M98 12L86 4M98 12L86 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="container grid">
          {/* 상단 중앙에 겹쳐 보이는 OK DRUGS 로고 */}
          <img className="brand-float" src={brandImg} alt="OK DRUGS." />

          {/* 왼쪽 큰 이미지 */}
          <div className="img-wrap left">
            <img src={leftImg} alt="product collage" />
          </div>

          {/* 오른쪽: 설명문 위 + 이미지 아래 (이미지는 SHOP NOW 위로 겹침) */}
          <div className="right-col">
            <p className="desc">
              Check in. Chew up. Tune out. Ok Drugs <br /> helps elevate micro-experiences
              for those <br /> who want to check-in to the moment in a <br /> hard and heavy world.
            </p>

            <div className="img-wrap right">
              <img className="rImg" src={rightImg} alt="cap on cactus" />
              <img className="coffee-star" src={coffeeStar} alt="" />
            </div>
          </div>
        </div>

        {/* SHOP NOW (텍스트) — 오른쪽 이미지가 위로 겹치도록 z-index 낮춤 */}
        <div className="container cta-row">
          <div className="huge">SHOP NOW</div>
        </div>

        {/* 아래 문장: 'that'에서 줄바꿈 + 오른쪽에 화살표 붙이기 */}
        <div className="container lead-row">
          <p className="lead">
            Get your feel good fix that<br />
            brings you back to life.
          </p>
          <ArrowRight className="cta-arrow" />
        </div>
      </section>
    </main>
  );
}
