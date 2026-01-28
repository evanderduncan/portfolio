/* ================= script.js ================= */

/*
ASSET STRUCTURE (example)
/assets
  /project-one
    cover.jpg
    image-1.jpg
    image-2.jpg
    video.mp4
  /project-two
    cover.jpg
    image-1.jpg
    image-2.jpg
*/

const projects = [
  {
  title: "Echo",
  description: 
    "Echo is an interactive kinetic sculpture that explores self-observation and reflection through physical response. Using body-tracking and mechanical actuation, the work translates the viewer’s presence into a tactile, shifting surface.",

  details: 
    "The installation uses a webcam and TouchDesigner body-tracking to detect the participant’s form in real time. This data is translated into movement across a 7×7 grid of servo motors controlled by Arduino. Each servo presses into a stretched fabric membrane, creating a physical impression that mirrors the viewer’s body.\n\nThe work draws on the myth of Echo and Narcissus, reframing it through contemporary systems of self-representation such as surveillance, selfies, and feedback loops. While the interaction is playful, the delayed and imperfect reflection introduces a sense of unease, questioning the desire to recognise oneself through mediated images.",

  cover: "assets/project-1-Echo/cover.jpg",

  size: "large",

  media: [
    { type: "youtube", 
      src: "https://www.youtube.com/embed/c95ddDC2qn0" },
    { type: "youtube", 
      src: "https://www.youtube.com/embed/z2Jc7jUT0po" },
    { type: "image", src: "assets/project-1-Echo/image-1.jpg" }
  ]
},
  {
  title: "Wind Rhythms",
  description: "A study into remixing, a process of combining interesting elements of other people's projects. Wind Rhythms combines the mathethmatical patterns of hermonographs and the natural mark making of Tim Knowles Wind Drawings. The repetitive yet unpredictable movement is both mechanical and natural, resulting in organic and intentional mark making. ",
  details: "Arduino Uno, ultrasonic sensor, plywood, willow tree twig, charcoal.",
  cover: "assets/project-2-Hermonograph/cover.jpg",
  media: [
  {
    type: "image",
    src: "assets/project-2-Hermonograph/image-1.jpg",
    text: "Live drawing generated through oscillatory motion."
  },
  {
    type: "image",
    src: "assets/project-2-Hermonograph/image-2.jpg",
    text: "Live drawing generated through oscillatory motion."
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/UzzjpWk_ju0 ",
    text: "The harmonograph adapted to hold a natural willow branch."
  }
]

}
,
  {
    title: "Tele-Gate",
    description: "Thesis project.",
    cover: "assets/project-3-TeleGate/cover.jpg",
    media: [
      { type: "image", src: "assets/project-3-TeleGate/image-3.png" },
      { type: "image", src: "assets/project-3-TeleGate/image-5.png" },
      { type: "image", src: "assets/project-3-TeleGate/image-2.png" },
      { type: "image", src: "assets/project-3-TeleGate/image-5.jpg" },
      { type: "image", src: "assets/project-3-TeleGate/image-1.jpg" },
      { 
        type: "youtube", 
        src: "https://www.youtube.com/embed/iGIVuKx8k0A",
        text: "Final project video detailing the process of Tele-Gate."
      }
    ]
  }
  ,
  {
    title: "Icons Made Without Hands",
    description: "A series of computational paintings I made exploring the .",
    cover: "assets/project-4-IconsMadeWithoutHands/cover.jpg",
    media: [
      { type: "image", src: "assets/project-4-IconsMadeWithoutHands/image-1.jpg" },
      { type: "image", src: "assets/project-4-IconsMadeWithoutHands/image-2.jpg" },
      { 
        type: "youtube", 
        src: "https://www.youtube.com/embed/E_h7W3oHJxc"   
      }
    ]
  },
  {
    title: "MDF_Bark",
    description: "Laser etching of tree bark onto MDF.",
    cover: "assets/project-5-MDFBark/cover.jpg",
    size: "small",
    media: [{ type: "image", src: "assets/project-5-MDFBark/image-1.jpg" }]
  },
  {
    title: "Plus",
    description: "Short description of Project Six.",
    cover: "assets/project-6-PlusFilter/cover.jpg",
    size: "large",
    media: [
      { type: "image", src: "assets/project-6-PlusFilter/image-1.jpg" },
      { type: "image", src: "assets/project-6-PlusFilter/image-2.jpg" }
    ]
  },
  {
    title: "Live Piano",
    description: "Short description of Project Seven.",
    cover: "assets/project-7-Piano/cover.jpg",
    media: [
      { type: "youtube", 
        src: "https://www.youtube.com/embed/Ff0GKf3-MKo" 
      }]
  },
  {
    title: "Wireframe",
    description: "Stylised forms generated through randomising grids and softening effects. Born from my background in Interaction Design, and interest in UX as an artistic medium as opposed to consumer product. A series of digital interface sketches led to an interest in abstracting the practical forms of wireframing.",
    cover: "assets/project-10-Wireframes/cover.jpg",
    media: [
      { type: "image", src: "assets/project-10-Wireframes/image-1.jpg" },
      { type: "image", src: "assets/project-10-Wireframes/image-2.jpg" },
      { type: "image", src: "assets/project-10-Wireframes/image-3.jpg" },
      { type: "image", src: "assets/project-10-Wireframes/image-4.jpg" },
      { type: "image", src: "assets/project-10-Wireframes/image-5.jpg" }
    ]
  },
  {
    title: "3D Wave",
    description: "An exploration into computational mixed media study, a process that takes a digital recorded humam wave, and through a series of softwares, developed the recorded motion into a 3D printed sculpture.",
    cover: "assets/project-8-3DWave/cover.png",
    media: [
      { type: "image", src: "assets/project-8-3DWave/image-1.jpg" },
      { type: "image", src: "assets/project-8-3DWave/image-2.jpg" },
      { type: "image", src: "assets/project-8-3DWave/3dwavephysical.png" },
      { 
        type: "youtube",  
        src: "https://wwww.youtube.com/embed/qjEpmbi9M1Y"}
    ]
  },
  {
    title: "CAPTCHR",
    description: "Inspired by the WebArt scene and hyperlink storytelling, I developed CAPTCHR, my final year Bachelor project which explores the changing relationship between humans and computers.",
    cover: "assets/project-9-CAPTCHR/cover.jpg",
    media: [
      { type: "image", src: "assets/project-9-CAPTCHR/image-1.jpg" },
      { type: "image", src: "assets/project-9-CAPTCHR/image-2.jpg" },
      { type: "youtube", src: "https://wwww.youtube.com/embed/11IoP0gwpVc " }
    ]
  }
];

const reel = document.getElementById('reel');
const overlay = document.getElementById('overlay');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupDetails = document.getElementById('popup-details');
const popupImages = document.getElementById('popup-images');

// Build infinite reel using project cover images
[...projects, ...projects].forEach((project, index) => {
  const item = document.createElement('div');
  item.className = 'reel-item';
  item.innerHTML = `
    <img src="${project.cover}" alt="${project.title}" />
    <p>${project.title}</p>
  `;
  item.onclick = () => openPopup(index % projects.length);
  reel.appendChild(item);
});

function openPopup(index) {
  const project = projects[index];

  popupTitle.textContent = project.title;
  popupDescription.textContent = project.description;
  popupDetails.textContent = project.details || "";

  // Clear previous media
  popupImages.innerHTML = "";

  project.media.forEach(item => {
    const row = document.createElement("div");
    row.className = "media-row";

    const text = document.createElement("div");
    text.className = "media-text";
    text.textContent = item.text || "";

    const media = document.createElement("div");
    media.className = "media-media";

    //for image

    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = "";
      media.appendChild(img);
    }

    // YOUTUBE VIDEO
    if (item.type === "youtube") {
      const iframe = document.createElement("iframe");
    iframe.src = item.src;
    iframe.loading = "lazy";
    iframe.allow =
     "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    media.appendChild(iframe);
    }

    row.appendChild(text);
    row.appendChild(media);
    popupImages.appendChild(row);
  });

  overlay.classList.add("active");
}

function closePopup() {
  popupImages.querySelectorAll("video").forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  overlay.classList.remove("active");
}

// Time
function updateTime() {
  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
updateTime();
setInterval(updateTime, 1000);
