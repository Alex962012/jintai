import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const Gallery = ({ item }) => {
    const images = [];
    item.map((el) => images.push({ original: process.env.REACT_APP_API_URL + el, thumbnail: process.env.REACT_APP_API_URL + el }));
    return <ImageGallery items={images} />;
};
