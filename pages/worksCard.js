import Image from "next/image";
export default function WorksCard() {
  const workArray = [
    {
      id: 1,
      isVideo: false,
      imageSrc: "/mocks/kulshi.jpg",
      title: "Kulshi Online",
      category: "Lucid Source",
      categoryNA: "Lucid-Source",
      videoSrc: "",
      outSrc: "https://kulshionline.com/",
    },
    {
      id: 2,
      isVideo: true,
      imageSrc: "/mocks/aqarat.jpg",
      title: "Al-Aqarat Real Estate",
      category: "Lucid Source",
      categoryNA: "Lucid-Source",
      videoSrc: "https://alaqarat.com/",
      outSrc: "https://alaqarat.com/",
    },
    {
      id: 3,
      isVideo: true,
      imageSrc: "/mocks/Guide.jpg",
      title: "Guide Organization Website",
      category: "Lucid Source",
      categoryNA: "Lucid-Source",
      videoSrc: "https://test.guideorg.org/",
      outSrc: "https://test.guideorg.org/",
    },
    {
      id: 4,
      isVideo: false,
      imageSrc: "/mocks/Accounting.jpg",
      title: "Accounting System",
      category: "Al Jazary",
      categoryNA: "Al-Jazary",
      videoSrc: "/mocks/Accounting.jpg",
      outSrc: "/mocks/Accounting.jpg",
    },
    {
      id: 5,
      isVideo: false,
      imageSrc: "/mocks/Dist.jpg",
      title: "Distribution Sales System",
      category: "Al Jazary",
      categoryNA: "Al-Jazary",
      videoSrc: "/mocks/Dist.jpg",
      outSrc: "/mocks/Dist.jpg",
    },
    {
      id: 6,
      isVideo: false,
      imageSrc: "/mocks/POS.jpg",
      title: "Point Of Sale",
      category: "Al Jazary",
      categoryNA: "Al-Jazary",
      videoSrc: "/mocks/POS.jpg",
      outSrc: "/mocks/POS.jpg",
    },
  ];
  return (
    <div className="card-inner" id="works-card">
      <div className="card-wrap">
        <div className="content works">
          <div className="title">
            Recent Works <p style={{ fontSize: 10 }}>(last 2 years)</p>
          </div>

          <div className="filter-menu filter-button-group">
            <div className="f_btn active">
              <label>
                <input type="radio" name="fl_radio" value="grid-item" />
                All
              </label>
            </div>
            <div className="f_btn">
              <label>
                <input type="radio" name="fl_radio" value="Lucid-Source" />
                Lucid Source
              </label>
            </div>
            <div className="f_btn">
              <label>
                <input type="radio" name="fl_radio" value="Al-Jazary" />
                Al-Jazary
              </label>
            </div>
            {/* <div className="f_btn">
              <label>
                <input type="radio" name="fl_radio" value="video" />
                Video
              </label>
            </div>
            <div className="f_btn">
              <label>
                <input type="radio" name="fl_radio" value="music" />
                Music
              </label>
            </div>
            <div className="f_btn">
              <label>
                <input type="radio" name="fl_radio" value="design" />
                Content
              </label>
            </div> */}
          </div>

          <div className="row grid-items border-line-v">
            {workArray.map((x) =>
              x.isVideo === false ? (
                <div
                  className={`col col-d-6 col-t-6 col-m-12 grid-item ${x.categoryNA} border-line-h`}
                  key={x.id}
                >
                  <div className="box-item">
                    <div className="image">
                      <a href={x.imageSrc} className="has-popup-image">
                        <Image
                          src={x.imageSrc}
                          width={600}
                          height={500}
                          alt=""
                        />
                        <span className="info">
                          <span className="ion ion-image"></span>
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href={x.outSrc} className="name has-popup-video">
                        {x.title}
                      </a>
                      <div className="category">{x.category}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`col col-d-6 col-t-6 col-m-12 grid-item ${x.categoryNA} border-line-h`}
                  key={x.id}
                >
                  <div className="box-item">
                    <div className="image">
                      <a href={x.videoSrc} className="has-popup-video">
                        <Image
                          width={600}
                          height={400}
                          src={x.imageSrc}
                          alt=""
                        />
                        <span className="info">
                          <span className="ion ion-videocamera"></span>
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href={x.outSrc} className="name has-popup-video">
                        {x.title}
                      </a>
                      <div className="category">{x.category}</div>
                    </div>
                  </div>
                </div>
              )
            )}

            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
