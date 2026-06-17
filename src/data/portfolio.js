import profilePhoto from "../assets/slide1_image0.webp";
import aboutPhoto from "../assets/slide2_image1.webp";
import qcStickerMain from "../assets/slide3_image2.webp";
import qcStickerSub1 from "../assets/slide3_image3.webp";
import qcStickerSub2 from "../assets/slide3_image4.webp";
import askiFlowMain from "../assets/slide4_image5.webp";
import askiFlowSub1 from "../assets/slide4_image6.webp";
import askiFlowSub2 from "../assets/slide4_image7.webp";
import humanPowerMain from "../assets/slide5_image9.webp";
import humanPowerSub1 from "../assets/slide5_image8.webp";
import humanPowerSub2 from "../assets/slide5_image10.webp";
import cert1 from "../assets/slide8_image11.webp";
import cert2 from "../assets/slide8_image12.webp";
import cert3 from "../assets/slide8_image13.webp";
import cert4 from "../assets/slide8_image14.webp";

export const profile = {
  name: "Dwi Putra Kunto Anggoro",
  title: "Computer Engineering Student | Machine Learning & Computer Vision",
  summary:
    "Currently pursuing a Bachelor of Applied Science (D4) in Computer Engineering at IPB University with a 3.69 GPA. Possess internship experience in Machine Learning Engineering and Computer Vision within a real-world production environment (Industry 4.0) at PT ASKI.",
  pillars: ["Computer Vision", "Machine Learning", "Embedded Systems"],
  photo: profilePhoto,
  aboutPhoto: aboutPhoto,
  email: "dwiputraanggoro@apps.ipb.ac.id",
  linkedin: "linkedin.com/in/dwi-anggoro",
  location: "Bogor, West Java",
};

export const navigation = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
];

export const projects = [
  {
    title: "QC Sticker Verification",
    subtitle: "Main Project — Apr - Jun 2026",
    description:
      "Desktop application for the automatic verification of QC sticker placement on the production line using Computer Vision.",
    details: [
      "Desktop app built with CustomTkinter (Fully Local).",
      "YOLO object detection — model iteratively trained with an increasingly larger dataset.",
      "Modbus RTU 4-Channel Relay (RS485/TTL) for solenoid control.",
      "Canny edge template matching for part-ready detection.",
      "Multi-format model support: ONNX, TFLite, OpenVINO.",
      "RFID reader integration for automatic login.",
      "24-hour stress test & trial execution on the production line.",
    ],
    tags: ["Python", "YOLO", "CustomTkinter", "Modbus RTU", "PostgreSQL", "OpenVINO", "ONNX"],
    images: [qcStickerMain, qcStickerSub1, qcStickerSub2],
    span: "lg:col-span-7",
  },
  {
    title: "ASKI-FLOW",
    subtitle: "AI Workflow Platform — Jan - Apr 2026",
    description:
      "A modular, node-based AI workflow platform for visual pipeline composition — ranging from data upload to result export.",
    details: [
      "Node-based canvas: for data upload, pre-processing, inference, and export.",
      "Integrated YOLOv5 as the primary detection model.",
      "Implemented Keras-OCR for text recognition.",
      "Features custom model training and image annotation nodes.",
      "MinIO (S3-compatible) integration for efficient dataset and model management.",
      "Includes data augmentation capabilities, template nodes, and user authentication.",
      "Evolution: Transitioned from a web-based platform to a native desktop application.",
    ],
    tags: ["Python", "YOLOv5", "Keras-OCR", "MinIO", "Docker", "Django"],
    images: [askiFlowMain, askiFlowSub1, askiFlowSub2],
    span: "lg:col-span-5",
  },
  {
    title: "Human Power Availability",
    subtitle: "Real-Time People Counting — Jan - Feb 2026",
    description:
      "A real-time worker attendance monitoring system utilizing human detection and dwell time analysis within the production area.",
    details: [
      "Implemented human detection integrated with dwell time analysis.",
      "Utilized polygon zone layouts for precise area-based tracking.",
      "Developed a web-based live monitoring dashboard.",
      "Integrated a PostgreSQL database with periodic data persistence.",
      "Configured Excel export functionalities for detection history and work shift percentages.",
      "Executed on-site deployment utilizing a Mini PC.",
      "Conducted reliability testing to ensure continuous, uninterrupted operations.",
    ],
    tags: ["Python", "YOLO", "Django", "PostgreSQL", "Mini PC", "OpenCV"],
    images: [humanPowerMain, humanPowerSub1, humanPowerSub2],
    span: "lg:col-span-4",
  },
  {
    title: "Mushroom Growth Detection",
    subtitle: "Other Project",
    description:
      "Implemented YOLOv5n for the growth stage classification of Auricularia mushrooms, validated using K-Fold Cross Validation.",
    tags: ["Python", "YOLOv5"],
    span: "lg:col-span-4",
  },
  {
    title: "IoT Flood Warning System",
    subtitle: "Other Project",
    description:
      "Developed a flood detection system utilizing ESP32 and ultrasonic sensors, integrated with MikroTik CAPsMAN and RADIUS authentication.",
    tags: ["C/C++", "ESP32", "MikroTik"],
    span: "lg:col-span-4",
  },
  {
    title: "VLAN Network Design",
    subtitle: "Other Project",
    description:
      "Configured Inter-VLAN Routing and Trunking (802.1Q) to facilitate seamless network communication between buildings.",
    tags: ["Cisco Packet Tracer"],
    span: "lg:col-span-4",
  },
  {
    title: "Network Security Simulation",
    subtitle: "Other Project",
    description:
      "OSPF, Static Routing, DMZ, Firewall, VPN tunnel.",
    tags: ["Cisco Packet Tracer"],
    span: "lg:col-span-4",
  },
  {
    title: "Linux Server Virtualization",
    subtitle: "Other Project",
    description:
      "Deployed an Ubuntu server environment via VirtualBox, provisioning DNS, Web Server, and MySQL services.",
    tags: ["Ubuntu", "VirtualBox"],
    span: "lg:col-span-4",
  },
];

export const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "C/C++", "JavaScript", "SQL"],
  },
  {
    label: "ML & CV",
    skills: ["YOLOv5/YOLOv11", "Object Detection", "Model Training", "Keras-OCR", "ONNX/TFLite/OpenVINO", "Canny Edge"],
  },
  {
    label: "Frameworks",
    skills: ["CustomTkinter", "Django", "Flask", "OpenCV"],
  },
  {
    label: "Embedded & IoT",
    skills: ["Modbus RTU", "RS485", "ESP32", "Relay Module", "Solenoid Control"],
  },
  {
    label: "DevOps & Storage",
    skills: ["Docker", "MinIO (S3)", "PostgreSQL", "PGAdmin"],
  },
  {
    label: "Networking",
    skills: ["OSPF", "VLAN", "VPN", "Firewall", "DMZ", "RADIUS"],
  },
  {
    label: "Tools",
    skills: ["Cisco PT", "MikroTik", "VirtualBox", "Fusion 360", "VS Code", "Figma"],
  },
];

export const aboutPoints = [
  "Thriving on new technical challenges.",
  "Driven by a vision for impactful tech.",
  "Dedicated to building things that work.",
];

export const education = {
  school: "IPB University (Bogor Agricultural University)",
  degree: "D4 — Bachelor of Applied Science in Computer Engineering",
  gpa: "GPA: 3.69 / 4.00",
  period: "Aug 2023 – July 2027",
  location: "Bogor, West Java, Indonesia",
};

export const awards = [
  {
    title: "1st Place — Transporter Robot Competition",
    event: "AutoTech UNJ  |  November 2025",
    description: "Designed robot chassis (Fusion 360) + navigation logic (C++). Outperformed competitors in speed & accuracy.",
  },
];

export const certificates = [
  { src: cert1, alt: "Certificate 1" },
  { src: cert2, alt: "Certificate 2" },
  { src: cert3, alt: "Certificate 3" },
  { src: cert4, alt: "Certificate 4" },
];

export const experience = {
  company: "PT ASKI (ASKI Digitalization)",
  period: "Jan – Jun 2026",
  projects: "3 Internship Projects",
};
