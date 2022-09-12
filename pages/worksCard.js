import Image from "next/image";
export default function WorksCard() {
  const workArray = [
    {
      id: 1,
      isVideo: false,
      imageSrc: "/template/images/works/work1.jpg",
      title: "Motorcycle helmet",
      category: "Lucid Source",
      videoSrc: "",
      outSrc: "https://kulshionline.com/",
    },
    {
      id: 2,
      isVideo: true,
      imageSrc: "/template/images/works/work2.jpg",
      title: "Minimalism Shapes",
      category: "Lucid Source",
      videoSrc: "https://vimeo.com/97102654",
      outSrc: "https://kulshionline.com/",
    },
  ];
  return (
    <div className="card-inner" id="works-card">
      <div className="card-wrap">
        <div className="content works">
          <div className="title">Recent Works</div>

          <div className="filter-menu filter-button-group">
            <div className="f_btn active">
              <label>
                <input type="radio" name="fl_radio" value="grid-item" />
                All
              </label>
            </div>
            <div className="f_btn">
              <label>
                <input type="radio" name="fl_radio" value="photo" />
                Image
              </label>
            </div>
            <div className="f_btn">
              <label>
                <input type="radio" name="fl_radio" value="gallery" />
                Gallery
              </label>
            </div>
            <div className="f_btn">
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
            </div>
          </div>

          <div className="row grid-items border-line-v">
            {workArray.map((x) =>
              x.isVideo === false ? (
                <div
                  className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h"
                  key={x.id}
                >
                  <div className="box-item">
                    <div className="image">
                      <a href={x.imageSrc} className="has-popup-image">
                        <Image
                          src={x.imageSrc}
                          width={600}
                          height={800}
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
                  className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h"
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
                      <div className="category">Video</div>
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
