export type GalleryPhoto = {
  id:
    | "pilgrims-01"
    | "pilgrims-02"
    | "pilgrims-03"
    | "pilgrims-04"
    | "pilgrims-05"
    | "pilgrims-06"
    | "pilgrims-07"
    | "pilgrims-08"
    | "pilgrims-09";
  src: string;
  objectPosition: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  { id: "pilgrims-01", src: "/pilgrims/pilgrims-01.jpg", objectPosition: "50% 45%" },
  { id: "pilgrims-02", src: "/pilgrims/pilgrims-02.jpg", objectPosition: "50% 40%" },
  { id: "pilgrims-03", src: "/pilgrims/pilgrims-03.jpg", objectPosition: "50% 45%" },
  { id: "pilgrims-04", src: "/pilgrims/pilgrims-04.jpg", objectPosition: "50% 40%" },
  { id: "pilgrims-05", src: "/pilgrims/pilgrims-05.jpg", objectPosition: "50% 40%" },
  { id: "pilgrims-06", src: "/pilgrims/pilgrims-06.jpg", objectPosition: "50% 60%" },
  { id: "pilgrims-07", src: "/pilgrims/pilgrims-07.jpg", objectPosition: "50% 50%" },
  { id: "pilgrims-08", src: "/pilgrims/pilgrims-08.jpg", objectPosition: "50% 55%" },
  { id: "pilgrims-09", src: "/pilgrims/pilgrims-09.jpg", objectPosition: "50% 45%" },
];
