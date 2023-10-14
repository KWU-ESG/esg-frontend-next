import Image from "next/image";

// Banner
function Banner(props) {
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Image src="/images/banner.png" alt="" width={2500} height={300} />
      </div>
      {/* <S.BannerTitle>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </S.BannerTitle> */}
    </>
  );
}

export default Banner;
