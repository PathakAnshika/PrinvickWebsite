"use client";

import React, { useState, useRef, useCallback } from "react";
import { Dancing_Script } from "next/font/google";
import Cropper from "react-easy-crop";
import { Rnd } from "react-rnd";

const cursiveFont = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [side, setSide] = useState("back"); // default back
  const [uploadedImage, setUploadedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // Previews for each side and color
  const [previews, setPreviews] = useState({
    front: { white: null, black: null },
    back: { white: null, black: null },
  });

  // Rnd sizes for each side/color
  const [rndSizes, setRndSizes] = useState({
    front: { white: { width: 150, height: 150 }, black: { width: 150, height: 150 } },
    back: { white: { width: 150, height: 150 }, black: { width: 150, height: 150 } },
  });

  // Rnd positions for each side/color
  const [rndPositions, setRndPositions] = useState({
    front: { white: { x: 30, y: 30 }, black: { x: 30, y: 30 } },
    back: { white: { x: 30, y: 30 }, black: { x: 30, y: 30 } },
  });

  const inputRef = useRef();

  const resetModal = () => {
    setUploadedImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  const handleCloseModal = () => {
  // Reset all states
  setSide("back"); // default back
  setUploadedImage(null);
  setCrop({ x: 0, y: 0 });
  setZoom(1);
  setCroppedAreaPixels(null);
  
  setPreviews({
    front: { white: null, black: null },
    back: { white: null, black: null },
  });

  setRndSizes({
    front: { white: { width: 150, height: 150 }, black: { width: 150, height: 150 } },
    back: { white: { width: 150, height: 150 }, black: { width: 150, height: 150 } },
  });

  setRndPositions({
    front: { white: { x: 30, y: 30 }, black: { x: 30, y: 30 } },
    back: { white: { x: 30, y: 30 }, black: { x: 30, y: 30 } },
  });

  setIsModalOpen(false);
};


  const onCropComplete = useCallback((croppedArea, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== "image/png") {
      alert("Only PNG with transparent background is allowed!");
      e.target.value = null;
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setUploadedImage(reader.result);
    reader.readAsDataURL(file);
  };

  const getCroppedImg = async () => {
    if (!uploadedImage || !croppedAreaPixels) return null;
    const canvas = document.createElement("canvas");
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
    const img = new Image();
    img.src = uploadedImage;
    await new Promise((res) => (img.onload = res));
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );
    return canvas.toDataURL("image/png");
  };

  const generatePreview = async () => {
    const cropped = await getCroppedImg();
    if (cropped) {
      setPreviews((prev) => ({
        ...prev,
        [side]: { white: cropped, black: cropped }, // apply to both colors
      }));
      resetModal();
    }
  };

  const handleDownload = async (color) => {
    if (!previews[side][color]) return;
    if (typeof window === "undefined") return;

    const canvas = document.createElement("canvas");
    const baseImg = new Image();
    baseImg.src = `/Tees/${color === "white" ? "White" : "Blck"}${side.charAt(0).toUpperCase() + side.slice(1)}.jpeg`;
    await new Promise((res) => (baseImg.onload = res));

    canvas.width = baseImg.width;
    canvas.height = baseImg.height;
    const ctx = canvas.getContext("2d");

    // Draw base T-shirt
    ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

    // Draw design
    const designImg = new Image();
    designImg.src = previews[side][color];
    await new Promise((res) => (designImg.onload = res));

    // Scale positions and size from preview container to canvas
    const previewWidth = 256;
    const previewHeight = 384;
    const scaleX = canvas.width / previewWidth;
    const scaleY = canvas.height / previewHeight;

    const pos = rndPositions[side][color];
    const size = rndSizes[side][color];

    ctx.drawImage(
      designImg,
      pos.x * scaleX,
      pos.y * scaleY,
      size.width * scaleX,
      size.height * scaleY
    );

    // Download
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${side}-${color}-design.png`;
    link.click();
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 md:py-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6 md:px-12">
        <div className="relative w-full h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <video
            src="/Tees/trendy.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className={`${cursiveFont.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white`}>
            Try Live Preview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed">
            At <span className="font-semibold text-sky-600">Prinvick</span>, bring your creative ideas to life! Upload your cut design with transparent background, place it perfectly on T-shirts, and preview instantly in both front and back views.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition"
          >
            🎨 Try Live Preview
          </button>
        </div>
      </div>

     {isModalOpen && (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-2 sm:p-4 overflow-auto">
    <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-6xl relative p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6">

      {/* Side toggle */}
      <div className="flex flex-row md:flex-col gap-2 md:gap-4 w-full md:w-28 justify-center md:justify-start">
        <button
          onClick={() => setSide("front")}
          className={`px-3 sm:px-4 py-2 rounded-lg border-2 text-sm sm:text-base ${side === "front" ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}
        >
          Front
        </button>
        <button
          onClick={() => setSide("back")}
          className={`px-3 sm:px-4 py-2 rounded-lg border-2 text-sm sm:text-base ${side === "back" ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}
        >
          Back
        </button>
      </div>

      {/* Close button */}
<button
  className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-red-500 z-50"
  onClick={handleCloseModal}
>
  ✖
</button>


      {/* T-shirt previews */}
      <div className="flex flex-wrap gap-3 justify-center items-center w-full md:w-auto overflow-x-auto">
        {["white", "black"].map((color) => (
          <div key={color} className="relative w-36 sm:w-48 md:w-64 h-56 sm:h-72 md:h-96 rounded-xl shadow-lg border overflow-hidden flex-shrink-0">
            <img
              src={`/Tees/${color === "white" ? "White" : "Blck"}${side.charAt(0).toUpperCase() + side.slice(1)}.jpeg`}
              alt={`${color} ${side}`}
              className="w-full h-full object-contain rounded-xl"
            />
            {previews[side][color] && (
              <Rnd
                bounds="parent"
                size={rndSizes[side][color]}
                position={rndPositions[side][color]}
                onDragStop={(e, d) =>
                  setRndPositions((prev) => ({
                    ...prev,
                    [side]: { ...prev[side], [color]: { x: d.x, y: d.y } },
                  }))
                }
                onResizeStop={(e, dir, ref, delta, position) => {
                  setRndSizes((prev) => ({
                    ...prev,
                    [side]: { ...prev[side], [color]: { width: ref.offsetWidth, height: ref.offsetHeight } },
                  }));
                  setRndPositions((prev) => ({
                    ...prev,
                    [side]: { ...prev[side], [color]: { x: position.x, y: position.y } },
                  }));
                }}
                minWidth={40}
                minHeight={40}
                className="z-20"
              >
                <img src={previews[side][color]} alt="Design" className="w-full h-full pointer-events-none" />
              </Rnd>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center md:items-start w-full md:w-auto mt-2 md:mt-0 gap-2 sm:gap-3">
        <button
          onClick={() => inputRef.current.click()}
          className="px-5 sm:px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full text-sm sm:text-base"
        >
          🎨 Upload Design
        </button>
        <input type="file" accept="image/png" onChange={handleUpload} ref={inputRef} className="hidden" />

        {uploadedImage && (
          <div className="relative w-48 sm:w-52 md:w-64 h-48 sm:h-52 md:h-64 mt-2 bg-gray-100 rounded-xl overflow-hidden">
            <Cropper
              image={uploadedImage}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
        )}

        <label className="mt-1 text-gray-700 font-medium text-sm sm:text-base">Zoom:</label>
        <input
          type="range"
          min={1}
          max={3}
          step={0.01}
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
          className="w-48 sm:w-52 md:w-64 mt-1"
        />

        <label className="mt-1 text-gray-700 font-medium text-sm sm:text-base">Resize Design:</label>
        <input
          type="range"
          min={0.1}
          max={2}
          step={0.01}
          value={rndSizes[side].white.width / 150}
          onChange={(e) => {
            const newScale = Number(e.target.value);
            setRndSizes((prev) => ({
              ...prev,
              [side]: {
                white: { width: 150 * newScale, height: 150 * newScale },
                black: { width: 150 * newScale, height: 150 * newScale },
              },
            }));
          }}
          className="w-48 sm:w-52 md:w-64 mt-1"
        />

        <button
          onClick={generatePreview}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg mt-1 sm:mt-2"
        >
          Set Design
        </button>

        <div className="flex flex-wrap gap-2 mt-1 sm:mt-2 justify-center">
          <button
            onClick={() => handleDownload("white")}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm sm:text-base"
          >
            Download White
          </button>
          <button
            onClick={() => handleDownload("black")}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-sm sm:text-base"
          >
            Download Black
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </section>
  );
}
