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

  cover: "assets/project-1-Echo/cover.png",

  size: "large",

  media: [
    { type: "youtube", 
      src: "https://www.youtube.com/embed/c95ddDC2qn0" },
    { type: "youtube", 
      src: "https://www.youtube.com/embed/z2Jc7jUT0po" },
    { type: "image", src: "assets/project-1-Echo/image-1.png" }
  ]
},
  {
  title: "Wind Rhythms",
  description: "A study into remixing, a process of combining interesting elements of other people's projects. Wind Rhythms combines the mathethmatical patterns of hermonographs and the natural mark making of Tim Knowles Wind Drawings. The repetitive yet unpredictable movement is both mechanical and natural, resulting in organic and intentional mark making. ",
  details: "Arduino Uno, ultrasonic sensor, plywood, willow tree twig, charcoal.",
  cover: "assets/project-2-Hermonograph/cover.png",
  media: [
  {
    type: "image",
    src: "assets/project-2-Hermonograph/image-2.png",
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
    cover: "assets/project-3-TeleGate/cover.png",
    media: [
      { type: "image", src: "assets/project-3-TeleGate/image-1.png" },
      { type: "image", src: "assets/project-3-TeleGate/image-2.png" },
      { type: "image", src: "assets/project-3-TeleGate/image-3.png" },
      { type: "image", src: "assets/project-3-TeleGate/image-4.png" },
      { type: "image", src: "assets/project-3-TeleGate/image-5.png" },
      { type: "youtube",
        src: "https://www.youtube.com/embed/iGIVuKx8k0A",
        text: "The harmonograph adapted to hold a natural willow branch."
      }
    ]
  }
  ,
  {
    title: "Icons Made Without Hands",
    description: "A series of computational paintings I made exploring the .",
    cover: "assets/project-4-IconsMadeWithoutHands/cover.png",
    media: [
      { type: "image", src: "assets/project-4-IconsMadeWithoutHands/image-1.png" },
      { type: "image", src: "assets/project-4-IconsMadeWithoutHands/image-2.png" },
      { type: "video", src: "assets/project-4-IconsMadeWithoutHands/video-1.mp4" },
    ]
  },
  {
    title: "MDF_Bark",
    description: "Laser etching of tree bark onto MDF.",
    cover: "assets/project-5-MDFBark/cover.png",
    size: "small",
    media: [{ type: "image", src: "assets/project-5-MDFBark/image-1.png" }]
  },
  {
    title: "Plus",
    description: "Short description of Project Six.",
    cover: "assets/project-6-PlusFilter/cover.png",
    size: "large",
    media: [
      { type: "image", src: "assets/project-6-PlusFilter/image-1.png" },
      { type: "image", src: "assets/project-6-PlusFilter/image-2.png" }
    ]
  },
  {
    title: "Live Piano",
    description: "Short description of Project Seven.",
    cover: "assets/project-7-Piano/cover.png",
    media: [{ type: "video", src: "assets/project-7-Piano/video-1.mp4" }]
  },
  {
    title: "3D Wave",
    description: "Short description of 3D wave.",
    cover: "assets/project-8-3DWave/cover.png",
    media: [
      { type: "image", src: "assets/project-8-3DWave/image-1.png" },
      { type: "image", src: "assets/project-8-3DWave/image-2.png" },
      { type: "video", src: "assets/project-8-3DWave/video-1.mp4" }
    ]
  },
  {
    title: "CAPTCHR",
    description: "Short description of CAPTCHR.",
    cover: "assets/project-9-CAPTCHR/cover.png",
    media: [
      { type: "image", src: "assets/project-9-CAPTCHR/image-1.png" },
      { type: "image", src: "assets/project-9-CAPTCHR/image-2.png" }
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

    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = "";
      media.appendChild(img);
    }

    if (item.type === "video") {
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";

      const source = document.createElement("source");
      source.src = item.src;
      source.type = "video/mp4";

      video.appendChild(source);
      media.appendChild(video);
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
