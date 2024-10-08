import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
  {
    src: "gfx/g1.jpg",
    width: 2560,
    height: 1700
  },
  {
    src: "gfx/g2.jpg",
    width: 2560,
    height: 1700
  },
  {
    src: "gfx/g3.jpg",
    width: 1699,
    height: 1700
  },
  {
    src: "gfx/g4.jpg",
    width: 1920,
    height: 2560
  },
  {
    src: "gfx/g5.jpg",
    width: 2560,
    height: 1700
  },
  {
    src: "gfx/g18.webp",
    width: 2560,
    height: 1709
  },
  {
    src: "gfx/g19.webp",
    width: 1709,
    height: 2560
  },
  {
    src: "gfx/g6.jpg",
    width: 2560,
    height: 1700
  },
  {
    src: "gfx/g7.jpg",
    width: 2560,
    height: 1700
  },
  {
    src: "gfx/g8.jpg",
    width: 1600,
    height: 1062
  },
  {
    src: "gfx/g9.jpg",
    width: 2560,
    height: 1438
  },
  {
    src: "gfx/g10.jpg",
    width: 537,
    height: 954
  },
  {
    src: "gfx/g11.jpg",
    width: 2560,
    height: 1438
  },
  {
    src: "gfx/g12.jpg",
    width: 1697,
    height: 1438
  },
  {
    src: "gfx/g13.jpg",
    width: 958,
    height: 1438
  },
  {
    src: "gfx/g14.jpg",
    width: 2560,
    height: 1438
  },
  {
    src: "gfx/g15.jpg",
    width: 2560,
    height: 1700
  },
  {
    src: "gfx/g16.jpg",
    width: 2560,
    height: 1438
  },

];




export default function MainGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gallery">
      {/* <Gallery photos={photos} onClick={openLightbox} direction={"column"} /> */}
      <Gallery photos={photos} onClick={openLightbox} direction={"row"} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
