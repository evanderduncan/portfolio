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
    "Echo is an interactive kinetic sculpture that explores self-observation and reflection through physical response. Through a webcam and TouchDesigner, the participant’s form and movement is translated, in real time, across a 7×7 grid of servo motors controlled by Arduino. Each servo presses into a stretched fabric membrane, creating a physical impression that mirrors the viewer’s body. The work draws on the myth of Echo and Narcissus, reframing it through contemporary systems of self-representation such as surveillance, selfies, and feedback loops. While the interaction is playful, the delayed and imperfect reflection introduces a sense of unease, questioning the desire to recognise oneself through mediated images.",

  details: 
    "Plywood, fabric, glue, screws, hobby servos, Arduino, 16-Channel Servo Driver, webcam, TouchDesigner.",

  cover: "assets/project-1-Echo/cover.jpg",

  size: "large",

  media: [
    { 
      type: "image",
      src: "assets/project-1-Echo/cover.jpg",
      text: "Echo presented at UAL Spring Exhibition."
    },
    { type: "youtube", 
      src: "https://www.youtube.com/embed/c95ddDC2qn0", 
      text: "Demo by myself and my collaborator, Samir."
    },
    { type: "youtube", 
      src: "https://www.youtube.com/embed/z2Jc7jUT0po",
      text: "Backend of Echo, servos in motion." 
    },
    { type: "image", src: "assets/project-1-Echo/image-1.jpg",
      text: "Development process, sketching out the wiring and developing the forward mechanism." 
    }
  ]
},

  {
  title: "Wind Rhythms",
  description: "A study into remixing, a process of combining interesting elements of other people's projects. Wind Rhythms combines the mathematical patterns of harmonographs and the natural mark making of Tim Knowles Wind Drawings. The repetitive yet unpredictable movement is both mechanical and natural, resulting in organic and intentional mark making. ",
  details: "Arduino Uno, ultrasonic sensor, plywood, willow tree twig, charcoal.",
  cover: "assets/project-2-Hermonograph/cover.jpg",
  media: [
  {
    type: "image",
    src: "assets/project-2-Hermonograph/image-1.jpg",
    text: "Birdeye view of harmonograph in action."
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/UzzjpWk_ju0",
    text: "Live drawing generated through both oscillatory motion and natural affordance of the willow branch."
    
  },
  {
    type: "image",
    src: "assets/project-2-Hermonograph/image-2.jpg",
    text: "A final outcome."
  }
]
},

  {
    title: "Tele-Gate",
    description: "My master’s thesis project, Tele-Gate, explores the possibility of using data as a sculptural material in order to ask what contemporary art can be when it is fully embedded in our modern, digital landscape. Using a motion sensor attached under a public park gate, the recorded data is embodied and replicated through a 1:1 replica Tele-Gate. The recreation of this park park gate data treats the act of generating data as a sculptural event. Telepresence is reframed not as spectacle but as a quiet encounter with the politics of contemporary sensing: surveillance, infrastructural opacity, and the subtle extraction of behavioural data embedded in daily life.",
    details: "Gate: Plywood, Linear Actuator, Arduino, Micro SD Card Reader, MDFPlayer, Speaker. Sensor: ",
    cover: "assets/project-3-TeleGate/cover.jpg",
    media: [
    { 
      type: "image", 
      src: "assets/project-3-TeleGate/image-3.png",
      text: "Diagram of the relationship between the real gate and the Tele-Gate." 
    },
    { 
      type: "image", 
      src: "assets/project-3-TeleGate/image-5.jpg",
      text: ""  
    },
    { 
      type: "image", 
      src: "assets/project-3-TeleGate/image-2.png",
      text: "The sensing device, fitted with accelerometer, microphone, SD card reader, battery, button interface for setup. This sensing device was encased and attached to the uderside of the real gate."  
    },
    { 
      type: "image", 
      src: "assets/project-3-TeleGate/image-5.jpg",
      text: "Diagram of the real gate location in relation to the exhibition space."  
    },
    { type: "image", 
      src: "assets/project-3-TeleGate/image-1.jpg",
      text: "Arduino Mega, along with the SD card reader, potentiometer volume control, and linear actuator atteched to the Tele-Gate."  
    },
    { 
      type: "youtube", 
      src: "https://www.youtube.com/embed/iGIVuKx8k0A",
      text: "Final project video detailing the process of Tele-Gate."
      }
    ]
  },

  {
    title: "Icons Made Without Hands",
    description: "A series of computational paintings I made exploring the increasing modern day detatchment we have with the creation of images. Similarly to the Acheiropoieta of Christianity - icons that are said to have come into existence miraculously, divinely, not created by a human. In many ways the vast majority of image generation today are done autonomously by computers for computers, satellites, CCTV etc. This series of paintings are made my a plotting machine, following the imagary generated by computers.",
    detials: "w/e the vector software is, AxiDraw machine, acrylic, canvas.",
    cover: "assets/project-4-IconsMadeWithoutHands/cover.jpg",
    media: [
    { 
      type: "image", 
      src: "assets/project-4-IconsMadeWithoutHands/cover.jpg",
      text: "Satellite image of a car park"  
    },
    { 
      type: "image", 
      src: "assets/project-4-IconsMadeWithoutHands/image-1.jpg",
      text: "Unwarapped 3D scan of a cardboard box, the red tap, brown cardboard, green labelling."  
    },
    { 
      type: "image", 
      src: "assets/project-4-IconsMadeWithoutHands/image-2.jpg",
      text: "An amalgamation of frames captured from an open source CCTV camera located in a Japanese Laundromat. Depicting an unassuming cusotomer collecting his washed clothes."  
    },
    { 
      type: "youtube", 
      src: "https://www.youtube.com/embed/E_h7W3oHJxc",
      text: "Project video."    
      }
    ]
  },

  {
    title: "MDF_Bark",
    description: "Laser etching of tree bark onto MDF. A study into the",
    details: "Lasercutter, MDF board",
    cover: "assets/project-5-MDFBark/cover.jpg",
    size: "small",
    media: [{ type: "image", src: "assets/project-5-MDFBark/image-1.jpg" }]
  },
  {
    title: "Plus",
    description: "Plus is an image filter that processes digital images and converts them into a collage of plus shapes. The size and offset of each plus is determined by the pixel colour values of the original image. The outcome is an abstracted, topographic representation of a digital photograph’s data. ",
    details: "p5.js",
    cover: "assets/project-6-PlusFilter/cover.jpg",
    size: "large",
    media: [
      { type: "image", 
        src: "assets/project-6-PlusFilter/image-1.jpg",
        text: "A seen of Abderdeenshire with gradual experiments with my Plus filter" 
      },
      { type: "image", 
        src: "assets/project-6-PlusFilter/image-2.jpg",
        text: "Road markings, size and locations of + symbols are clearly dictated by the pixel colour value of the original digital image." 
      }
    ]
  },
  {
    title: "Live Piano",
    description: "Live Piano works through a presourced public database such as weather or sealevel, the varying data values drive according motors, activating the piano hammers that make contact with a row of piazo sensors -each with their own assigned chord. The sound generated from the Live Piano is a direct audio representation of data.",
    cover: "assets/project-7-Piano/cover.jpg",
    media: [
      { type: "image", 
        src: "assets/project-7-Piano/image-1.jpg",
        /*text: "" */
        },
      { type: "image", 
        src: "assets/project-7-Piano/image-2.jpg",
        text: "Visual schematic" 
      },
      { type: "youtube", 
        src: "https://www.youtube.com/embed/ac99THNZ8Is" 
      }]
  },
  {
    title: "Wireframe",
    description: "Stylised forms generated through randomising grids and softening effects. Born from my background in Interaction Design, and interest in UX as an artistic medium as opposed to consumer product. A series of digital interface sketches led to an interest in abstracting the practical forms of wireframing.",
    cover: "assets/project-10-Wireframes/cover.jpg",
    media: [
      { type: "image", 
        src: "assets/project-10-Wireframes/image-1.jpg",
        text: "" 
      },
      { type: "image", src: "assets/project-10-Wireframes/image-2.png" },
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
      { type: "image", 
        src: "assets/project-8-3DWave/image-1.jpg", 
        text: ""
      },
      { type: "image", src: "assets/project-8-3DWave/image-2.jpg" },
      { type: "image", src: "assets/project-8-3DWave/3dwavephysical.png" },
      { 
        type: "youtube",  
        src: "https://www.youtube.com/embed/qjEpmbi9M1Y"}
    ]
  },
  {
    title: "CAPTCHR",
    description: "Inspired by the WebArt scene and hyperlink storytelling, I developed CAPTCHR, a speculative interaction design which explores the changing relationship between humans and computers. Extending the ubiquitous CAPTCHA human verification format to question the increasing authority algorithms have in our lives.",
    details: "HTML, CSS, JS, p5.js.",
    cover: "assets/project-9-CAPTCHR/cover.jpg",
    media: [
      { type: "image", 
        src: "assets/project-9-CAPTCHR/image-1.jpg",
        text: "Once all the CAPTCHRs have been completed, the user can download their personal 'human certificate' to access websites."
       },
        
      { type: "image", 
        src: "assets/project-9-CAPTCHR/image-2.jpg", 
        text: "Movement CAPTCHR, the user is subjected to body recoginition software and required to move to computer generated patterns to complete."
      },
      { type: "youtube", 
        src: "https://www.youtube.com/embed/11IoP0gwpVc", 
        text: "Final project video, animation made on iDraw software detailing the CAPTCHR concept."
      }
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

  document.body.style.overflow = "hidden";

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
    popupImages.innerHTML = ""; // kills iframe playback
  document.body.style.overflow = "";
  overlay.classList.remove("active");
}

// Time
function updateTime() {
  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
updateTime();
setInterval(updateTime, 1000);
