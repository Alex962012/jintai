import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const Gallery = ({ item }) => {
    const images = [];
    item.images.map((el) => images.push({ original: el, thumbnail: el }));

    return <ImageGallery items={images} />;
};
