import image1 from "../../assets/main-images/1/800.jpg";
import image2 from "../../assets/main-images/2/800.jpg";

class srcInterface {
  urlBase = "https://res.cloudinary.com/waterscheiddesign/";

  // Uncomment this (and remove the one below) to display images using the cloud host.
  // For testing we shouldn't do this because it'll eat at the bandwidth limit used

  // srcMapSet = {
  //   0: image1,
  //   1: image2,
  //   2:
  //     this.urlBase +
  //     "image/upload/v1566416747/Set%20Design%20%28main%20page%29/Portfolio_Placeholder_page_8_px_in_300_z9jnli.jpg",
  //   3:
  //     this.urlBase +
  //     "image/upload/v1566416740/Set%20Design%20%28main%20page%29/Portfolio_Placeholder_page_7_px_in_90_vbtgkr.jpg",
  //   4:
  //     this.urlBase +
  //     "image/upload/v1566416737/Set%20Design%20%28main%20page%29/Portfolio_Placeholder_page_6_px_in_120_nqmzdi.jpg",
  //   5:
  //     this.urlBase +
  //     "image/upload/v1566416735/Set%20Design%20%28main%20page%29/Portfolio_Placeholder_page_5_px_in_120_hhokxd.jpg"
  // };

  // This is to display images from the computer
  // For testing use this
  srcMapSet = {
    0: image1,
    1: image2,
    2: image1,
    3: image2,
    4: image1,
    5: image2,
    6: image1,
    7: image2,
    8: image1,
    9: image2,
    10: image1,
    11: image2
  };

  // This is to display images from the computer
  // For testing use this
  srcMapArt = {
    0: image2,
    1: image2,
    2: image2,
    3: image2,
    4: image2,
    5: image2
  };
}
export default srcInterface;
