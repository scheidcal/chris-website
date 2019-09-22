import image1 from "../../assets/main-images/1/800.jpg";
import image2 from "../../assets/main-images/2/800.jpg";

class srcInterface {
  urlBase = "https://res.cloudinary.com/waterscheiddesign/";
  setDesignBaseURL =
    "https://res.cloudinary.com/waterscheiddesign/image/upload/v1568643390/Set%20Design%20%28main%20page%29/";

  artDirBaseUrl =
    "https://res.cloudinary.com/waterscheiddesign/image/upload/v1566416248/Art%20Director/";

  // Uncomment this (and remove the one below) to display images using the cloud host.
  // For testing we shouldn't do this because it'll eat at the bandwidth limit used

  //https://res.cloudinary.com/waterscheiddesign/image/upload/v1568643390/Set%20Design%20%28main%20page%29/image01.jpg
  //https://res.cloudinary.com/waterscheiddesign/image/upload/v1568662057/Set%20Design%20%28main%20page%29/image02.jpg

  srcMapSet2 = [
    this.setDesignBaseURL + "image03.jpg",
    this.setDesignBaseURL + "image04.jpg",
    this.setDesignBaseURL + "image05.jpg",
    this.setDesignBaseURL + "image06.jpg",
    this.setDesignBaseURL + "image07.jpg",
    this.setDesignBaseURL + "image08.jpg",
    this.setDesignBaseURL + "image09.jpg",
    this.setDesignBaseURL + "image10.jpg",
    this.setDesignBaseURL + "image11.jpg",
    this.setDesignBaseURL + "image12.jpg",
    this.setDesignBaseURL + "image13.jpg",
    this.setDesignBaseURL + "image14.jpg",
    this.setDesignBaseURL + "image15.jpg",
    this.setDesignBaseURL + "image16.jpg",
    this.setDesignBaseURL + "image17.jpg",
    this.setDesignBaseURL + "image18.jpg",
    this.setDesignBaseURL + "image19.jpg",
    this.setDesignBaseURL + "image20.jpg",
    this.setDesignBaseURL + "image21.jpg",
    this.setDesignBaseURL + "image22.jpg",
    this.setDesignBaseURL + "image23.jpg",
    this.setDesignBaseURL + "image24.jpg",
    this.setDesignBaseURL + "image25.jpg",
    this.setDesignBaseURL + "image26.jpg",
    this.setDesignBaseURL + "image27.jpg",
    this.setDesignBaseURL + "image28.jpg",
    this.setDesignBaseURL + "image29.jpg",
    this.setDesignBaseURL + "image30.jpg"
  ];

  // This is to display images from the computer
  // For testing use this
  srcMapSet3 = {
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
  srcMapSet = [
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2
  ];

  srcMapArt = [
    // this.artDirBaseUrl + "Art_Direction_JPEG-2000_page_3_fqrawj.jp2",
    // this.artDirBaseUrl + "Art_Direction_JPEG-2000_page_4_len3d7.jp2",
    // this.artDirBaseUrl + "Art_Direction_JPEG-2000_page_5_ngfhiw.pdf",
    // this.artDirBaseUrl + "Art_Direction_JPEG-2000_page_6_w3bvlr.jp2"
  ];

  // This is to display images from the computer
  // For testing use this
  srcMapArtTesting = [image2, image2, image2, image2, image2, image2];
}
export default srcInterface;
