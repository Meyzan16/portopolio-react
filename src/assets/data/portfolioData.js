
import portfolioImg01 from "../img/portopolio-nextjs.png";
import portfolioImg02 from "../img/movie-react.png";
import portfolioImg03 from "../img/portopolio-tailwind.png";
import portfolioImg04 from "../img/svcc.png";

import portfolioImg05 from "../img/beasiswa.png";
import portfolioImg06 from "../img/e-kerawanan.png";
import portfolioImg07 from "../img/esurat.png";
import portfolioImg08 from "../img/airbnb.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Frontend",
    title: "portopolio-with-nextJs",
    description:
      "project belajar dan mengiri waktu kosong",
    technologies: ["React", "Tailwind css", "nextJs"],
    siteUrl: "https://portopolio-next.vercel.app/",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Frontend",
    title: "movie-react",
    description:
      "project belajar dan mengiri waktu kosong",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://movie-react-rho.vercel.app/",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Frontend",
    title: "portofolio-with-tailwindcss",
    description:
      "project belajar tailwind pertama kali dan mengisi waktu kosong",
    technologies: ["Tailwind css"],
    siteUrl: "https://meyzan16.github.io/Project-tailwind-portopolio/",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Frontend",
    title: "svcc-telkom-indonesia",
    description:
      "project magang kampus merdeka bersama telkom indonesia dengan menyelesaikan web svcc",
    technologies: ["Boostrap", "VueJs" ],
    siteUrl: "https://meyzan16.github.io/svccindonesia/",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Fullstack",
    title: "Sistem Informasi penerimaan beasiswa",
    description:
      "Project bersama fakultas teknik penerimaan beasiswa menggunakan metode saw dan menggunakan sumber API dari pangkalan data universitas bengkulu",
    technologies: ["Codeighneter", "Javascript", "Mysql", "Boostrap"],
    siteUrl: "https://beasiswa.ft.unib.ac.id/",
  },
  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Fullstack",
    title: "E-kerawanan ",
    description:
      "Project tugas akhir saya membangun website e-kerawanan sebagai syarat kelulusan prodi informatika universitas bengkulu menggunakan sumber API dari pangkalan data BMKG. silahkan di clone, generate env dan migrate database",
    technologies: ["laravel 9", "Javascript", "Mysql", "Boostrap"],
    siteUrl: "https://github.com/Meyzan16/skripsi-gis-me",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Fullstack",
    title: "E-Surat FMIPA ",
    description:
      "bersama fakultas FMIPA dalam proses surat menyurat menggunakan qrQode dan menggunakan sumber API dari pangkalan data universitas bengkulu",
    technologies: ["laravel 9", "Javascript", "Mysql", "Boostrap"],
    siteUrl: "https://esurat.fmipa.unib.ac.id/",
  },
  {
    id: "08",
    imgUrl: portfolioImg08,
    category: "Fullstack",
    title: "Airbnb-Mern ",
    description:
      "Proyek sederhana yang saya buat menggunakan teknologi MERN , disarankan dibuka lewat desktop. referensi website https://www.airbnb.com.au/",
    technologies: ["Mongodb", "ExpressJs", "ReactJs", "NodeJs"],
    siteUrl: "https://client-bookingapp.vercel.app/",
  },
  
];

export default portfolios;
