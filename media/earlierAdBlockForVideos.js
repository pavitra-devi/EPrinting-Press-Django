
let currentUrl = window.location.href;
let securitySelectors = [];
let localFlag = false;
let container = document.createElement("div");
container.setAttribute("class", "ytblocker");
container.style.cssText = `
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 5px 0px;
`;
let notes = document.createElement("p");
notes.innerText = "Adblock for youtube™";
notes.setAttribute("class", "notes");
notes.style.cssText = `
    font-size: 12px;
    font-weight: 500;
    color: #444444;
`;
let rateus = document.createElement("button");
rateus.setAttribute("class", "rateus");
rateus.innerText = "Share";
rateus.style.cssText = `
    margin-left: 5px;
    border: none;
    outline: none;
    background: #cc0000;
    color: white;
    font-size: 12px;
    font-weight: 600;
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 0px 0px 3px 0px grey;
`;
rateus.addEventListener("click", () => {
    // rateus.innerText = "Copied ✅";
    // setTimeout(() => {
    //     rateus.innerText = "Share";
    // }, 1000);
    // navigator.clipboard.writeText("https://chrome.google.com/webstore/detail/adblock-for-youtube/meeigimblnoededboeggpdknokefoece");
    // window.open("https://chrome.google.com/webstore/detail/adblock-for-youtube/meeigimblnoededboeggpdknokefoece")
});

let closeBtn = document.createElement("p");
closeBtn.setAttribute("class", "close-share-btn");
closeBtn.innerText = "❌";
closeBtn.style.cssText = `
    margin: 0px 9px;
    font-size: 7px;
    cursor: pointer;
`;

closeBtn.addEventListener("click", () => {
    chrome.storage.sync.set({ flag: true });
    localFlag = true;
    container.remove();
})
container.appendChild(notes);
container.appendChild(closeBtn);

// chrome.storage.sync.get(null, (e) => {
//     let flag = e.flag;
//     if (flag) {
//         localFlag = true;
//     }
//     (securitySelectors = e.securitySelectors),
//         currentUrl.includes("youtube.com") &&
//         setInterval(() => {
//             let e = document.querySelector(`${securitySelectors[0]}`),
//                 t = document.querySelector(`${securitySelectors[1]}`),
//                 r = document.querySelector(`${securitySelectors[2]}`),
//                 n = document.querySelector(`${securitySelectors[3]}`),
//                 o = document.querySelector(`${securitySelectors[4]}`),
//                 p = document.querySelectorAll(`${securitySelectors[5]}`),
//                 q = securitySelectors[6] && document.querySelector(`${securitySelectors[6]}`);
//             u = securitySelectors[7] && document.querySelector(`${securitySelectors[7]}`);
//             v = securitySelectors[8] && document.querySelector(`${securitySelectors[8]}`);
//             w = securitySelectors[9] && document.querySelector(`${securitySelectors[9]}`);
//             x = securitySelectors[10] && document.querySelector(`${securitySelectors[10]}`);
//             y = securitySelectors[11];
//             z = securitySelectors[12] && document.querySelector(`${securitySelectors[12]}`);
//             // securitySelectors[11]
//             // document.querySelector(".html5-video-player.ad-showing");
//             // video = document.querySelectorAll("video");
//             w && "none" != w.getAttribute("display") && (w.style.display = "none"),
//                 e && "none" != e.getAttribute("display") && (e.style.display = "none"),
//                 t && "none" != t.getAttribute("display") && (t.style.display = "none"),
//                 q && "none" != q.getAttribute("display") && (q.style.display = "none"),
//                 u && "none" != u.getAttribute("display") && (u.style.display = "none"),
//                 v && "none" != v.getAttribute("display") && (v.style.display = "none"),
//                 z && "none" != z.getAttribute("display") && (z.style.display = "none"),
//                 // r && r.click(),
//                 // r && r.length > 1 && (video[1].currentTime = isNaN(video[1].duration) ? 0 : video[1].duration),
//                 n && (n.parentElement.parentElement.style.display = "none"),
//                 o && "none" != o.getAttribute("display") && (o.style.display = "none");
//             if (x) {
//                 if (r) {
//                     r.click()
//                 } else {
//                     let video = x.querySelector("video");
//                     video.currentTime = isNaN(video.duration) ? 0 : video.duration;
//                 }
//             }
//             if (y == "true" && !flag && !localFlag) {
//                 if (!document.querySelector(".ytblocker")) {
//                     let player = document.querySelector("#player");
//                     if (player) {
//                         // player.appendChild(container);
//                     }
//                 }
//             }
//             if (p.length > 0) {
//                 for (let count = 0; count < p.length; count++) {
//                     if (p[count].querySelector("#ad-badge")) {
//                         "none" != p[count].getAttribute("display") && (p[count].style.display = "none");
//                     }
//                 }
//             }
//         }, 500);
// });


// chrome.storage.sync.get(null, (data) => {
//     const flag = data.flag;
//     const securitySelectors = data.securitySelectors;
//     const localFlag = flag === true;
//     const container = document.createElement("div");
//     container.className = "ytblocker";
    
//     const selectors = [
//         securitySelectors[0],
//         securitySelectors[1],
//         securitySelectors[2],
//         securitySelectors[3],
//         securitySelectors[4],
//         securitySelectors[5],
//         securitySelectors[6],
//         securitySelectors[7],
//         securitySelectors[8],
//         securitySelectors[9],
//         securitySelectors[10],
//         securitySelectors[12]
//     ].join(",");
    
//     if (!currentUrl.includes("youtube.com")) {
//         return;
//     }
    
//     const elements = document.querySelectorAll(selectors);
//     const videoPlayer = document.querySelector(".html5-video-player.ad-showing");
    
//     setInterval(() => {
//         elements.forEach((el) => {
//             if (el.style.display !== "none") {
//                 el.style.display = "none";
//             }
//         });
        
//         if (videoPlayer && videoPlayer.style.display !== "none") {
//             videoPlayer.style.display = "none";
//         }
        
//         if (securitySelectors[11] && !flag && !localFlag && !document.querySelector(".ytblocker")) {
//             const player = document.querySelector("#player");
//             if (player) {
//                 player.appendChild(container);
//             }
//         }
        
//         const adBadges = document.querySelectorAll(`${selectors} #ad-badge`);
//         adBadges.forEach((badge) => {
//             if (badge.style.display !== "none") {
//                 badge.style.display = "none";
//             }
//         });
        
//         if (securitySelectors[10]) {
//             const skipButton = document.querySelector(`${securitySelectors[2]} > ${securitySelectors[10]}`);
//             if (skipButton) {
//                 skipButton.click();
//             } else {
//                 const video = document.querySelector(`${securitySelectors[10]} video`);
//                 if (video) {
//                     video.currentTime = isNaN(video.duration) ? 0 : video.duration;
//                 }
//             }
//         }
//     }, 500);
// });


// chrome.storage.sync.get(null, (data) => {
//     const { flag, securitySelectors } = data;
//     const currentUrl = window.location.href;
  
//     if (flag || !currentUrl.includes("youtube.com")) {
//       return;
//     }
  
//     setInterval(() => {
//       const [
//         adOverlay,
//         adBadge,
//         adText,
//         adClickthrough,
//         adCloseButton,
//         ...adElements
//       ] = document.querySelectorAll(securitySelectors.join(','));
  
//       if (adElements && adElements.length > 0) {
//         adElements.forEach((adElement) => {
//           if (adElement.style.display !== "none") {
//             adElement.style.display = "none";
//           }
//         });
//       }
  
//       if (adOverlay && adOverlay.style.display !== "none") {
//         adOverlay.style.display = "none";
//       }
  
//       if (adBadge && adBadge.style.display !== "none") {
//         adBadge.style.display = "none";
//       }
  
//       if (adClickthrough && adClickthrough.style.display !== "none") {
//         adClickthrough.style.display = "none";
//       }
  
//       if (adCloseButton && adCloseButton.style.display !== "none") {
//         adCloseButton.style.display = "none";
//       }
  
//       const playerContainer = document.querySelector("#player-container");
//       if (playerContainer && adAllowed) {
//         if (!document.querySelector(".ytblocker")) {
//           const container = document.createElement("div");
//           container.className = "ytblocker";
//           container.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000;";
//           playerContainer.appendChild(container);
//         }
//       }
  
//       const adContainer = document.querySelector(securitySelectors[8]);
//       if (adContainer && adContainer.style.display !== "none") {
//         adContainer.style.display = "none";
//       }
  
//       const adFrame = document.querySelector(securitySelectors[9]);
//       if (adFrame && adFrame.style.display !== "none") {
//         adFrame.style.display = "none";
//       }
//     }, 500);
//   });
  

//   chrome.storage.sync.get(['flag', 'securitySelectors'], ({flag, securitySelectors}) => {
//     if (!currentUrl.includes('youtube.com') || !flag) {
//       return;
//     }
  
//     const adSelectors = {
//       overlay: securitySelectors[0],
//       badge: securitySelectors[1],
//       text: securitySelectors[2],
//       clickthrough: securitySelectors[3],
//       closeButton: securitySelectors[4],
//       overlays: securitySelectors[5],
//       playerOverlays: securitySelectors[6],
//       container: securitySelectors[8],
//       frame: securitySelectors[9],
//     };
  
//     const adAllowed = securitySelectors[7];
//     const playerContainer = document.querySelector('#player-container');
  
//     setInterval(() => {
//       for (const [selectorName, selectorValue] of Object.entries(adSelectors)) {
//         const element = selectorValue && document.querySelector(selectorValue);
//         if (element && element.style.display !== 'none') {
//           element.style.display = 'none';
//         }
//       }
  
//       if (adSelectors.overlays) {
//         const overlays = document.querySelectorAll(adSelectors.overlays);
//         overlays.forEach((overlay) => {
//           if (overlay.style.display !== 'none') {
//             overlay.style.display = 'none';
//           }
//         });
//       }
  
//       if (adSelectors.playerOverlays) {
//         const playerOverlays = document.querySelectorAll(adSelectors.playerOverlays);
//         playerOverlays.forEach((overlay) => {
//           if (overlay.style.display !== 'none') {
//             overlay.style.display = 'none';
//           }
//         });
//       }
  
//       if (playerContainer && adAllowed && !localFlag && !document.querySelector('.ytblocker')) {
//         const container = document.createElement('div');
//         container.className = 'ytblocker';
//         container.style = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000;';
//         playerContainer.appendChild(container);
//       }
  
//       if (adSelectors.container && adSelectors.container.style.display !== 'none') {
//         adSelectors.container.style.display = 'none';
//       }
  
//       if (adSelectors.frame && adSelectors.frame.style.display !== 'none') {
//         adSelectors.frame.style.display = 'none';
//       }
//     }, 500);
//   });
  
// chrome.storage.sync.get(["flag", "securitySelectors"], (data) => {
//     const flag = data.flag;
//     const securitySelectors = data.securitySelectors || [];
//     if (!currentUrl.includes("youtube.com")) {
//       return;
//     }
  
//     const hideElement = (selector) => {
//       const el = document.querySelector(selector);
//       if (el && el.style.display !== "none") {
//         el.style.display = "none";
//       }
//     };
  
//     const hideElements = (selectors) => {
//       selectors.forEach(hideElement);
//     };
  
//     const hideAdOverlays = () => {
//       hideElements(securitySelectors.slice(0, 5));
//       hideElements(securitySelectors.slice(5));
//     };
  
//     const showPlayerBlocker = () => {
//       const playerContainer = document.querySelector("#player-container");
//       if (!playerContainer || !securitySelectors[7] || flag) {
//         return;
//       }
//       if (!document.querySelector(".ytblocker")) {
//         const container = document.createElement("div");
//         container.className = "ytblocker";
//         container.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;background:#000;";
//         playerContainer.appendChild(container);
//       }
//     };
  
//     const hideAdContainerAndFrame = () => {
//       hideElements(securitySelectors.slice(8));
//     };
  
//     setInterval(() => {
//       hideAdOverlays();
//       showPlayerBlocker();
//       hideAdContainerAndFrame();
//     }, 500);
//   });
  


chrome.storage.sync.get(["flag", "securitySelectors"], (data) => {
  const flag = data.flag;
  
  const securitySelectors = data.securitySelectors || [];
  if (!currentUrl.includes("youtube.com")) {
    return;
  }

  const hideElement = (selector) => {
    const el = document.querySelector(selector);
    if (el && el.style.display !== "none") {
      el.style.display = "none";
    }
  };

  const hideElements = (selectors) => {
    selectors.forEach(hideElement);
  };

  const hideAdOverlays = () => {
    hideElements(securitySelectors.slice(0, 5));
    hideElements(securitySelectors.slice(5));
  };

  const showPlayerBlocker = () => {
    const playerContainer = document.querySelector("#player-container");
    if (!playerContainer || !securitySelectors[7] || flag) {
      return;
    }

    if (playerContainer.style.display === "none") {
        playerContainer.style.display = "";
      }
      
    if (!document.querySelector(".ytblocker")) {
      const container = document.createElement("div");
      container.className = "ytblocker";
      container.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;background:#000;";
      playerContainer.appendChild(container);
    }
  };

  const hideAdContainerAndFrame = () => {
    hideElements(securitySelectors.slice(8));
  };

  const showRecommendedVideos = () => {
    const recommendedVideos = document.querySelector("#secondary");
    if (recommendedVideos && recommendedVideos.style.display === "none") {
      recommendedVideos.style.display = "block";
    }
  };

  setInterval(() => {
    hideAdOverlays();
    showPlayerBlocker();
    hideAdContainerAndFrame();
    showRecommendedVideos();
  }, 500);
});





// const currentUrl = window.location.href;

// // Create the container for the adblocker message and buttons.
// const container = document.createElement("div");
// container.className = "ytblocker";
// container.style.cssText = `
// display: flex;
// justify-content: end;
// align-items: center;
// margin: 5px 0px;
// `;

// // Add the message to the container.
// const notes = document.createElement("p");
// notes.textContent = "Adblock for youtube™";
// notes.className = "notes";
// notes.style.cssText = `
// font-size: 12px;
// font-weight: 500;
// color: #444444;
// `;
// container.appendChild(notes);

// // Function to handle the click event for the close button.
// function onCloseButtonClick() {
//     container.style.display = 'none';
//   }
  
//   // Function to handle the click event for the share button.
//   function onShareButtonClick() {
//     const url = 'https://example.com';
//     const title = 'Check out this great site!';
//     const encodedUrl = encodeURIComponent(url);
//     const encodedTitle = encodeURIComponent(title);
//     const shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  
//     window.open(shareUrl, '_blank');
//   }
  


// // Add the close button to the container.
// const closeBtn = document.createElement("p");
// closeBtn.className = "close-share-btn";
// closeBtn.textContent = "❌";
// closeBtn.style.cssText = `
// margin: 0px 9px;
// font-size: 7px;
// cursor: pointer;
// `;
// closeBtn.addEventListener("click", onCloseButtonClick);
// container.appendChild(closeBtn);

// // Add the share button to the container.
// const rateus = document.createElement("button");
// rateus.className = "rateus";
// rateus.textContent = "Share";
// rateus.style.cssText = `
// margin-left: 5px;
// border: none;
// outline: none;
// background: #cc0000;
// color: white;
// font-size: 12px;
// font-weight: 600;
// border-radius: 2px;
// cursor: pointer;
// box-shadow: 0px 0px 3px 0px grey;
// `;
// rateus.addEventListener("click", onShareButtonClick);
// container.appendChild(rateus);

// // Get the flag and security selectors from Chrome storage.
// chrome.storage.sync.get(
//   ["flag", "securitySelectors"],
//   ({ flag, securitySelectors = [] }) => {
//     // Exit early if the current page is not on YouTube.
//     if (!currentUrl.includes("youtube.com")) {
//       return;
//     }

//     // Helper function to hide a single element based on its selector.
//     const hideElement = (selector) => {
//       const el = document.querySelector(selector);
//       if (el && el.style.display !== "none") {
//         el.style.display = "none";
//       }
//     };

//     const hideElements = (selectors) => {
//       selectors.forEach((selector) => {
//         hideElement(selector);
//       });
//     };

//     const showPlayerBlocker = () => {

//       const playerContainer = document.getElementById("player-container");
//       if (!playerContainer || !securitySelectors[7] || flag) {
//         return;
//       }
//       if (playerContainer && playerContainer.style.display === "none") {
//         playerContainer.style.display = "";
//       }

//       if (playerContainer.classList.contains("player-container-hidden")) {
//         playerContainer.classList.remove("player-container-hidden");
//       }

      

//       if (!document.querySelector(".ytblocker")) {
//         const container = document.createElement("div");
//         container.className = "ytblocker";
//         container.style.cssText =
//           "position:absolute;top:0;left:0;width:100%;height:100%;background:#000;";
//         playerContainer.appendChild(container);
//       }
//       if (playerContainer.style.display === "none") {
//         playerContainer.style.display = "";
//       }
//     };

//     const hideAdOverlays = () => {
//       hideElements(securitySelectors.slice(0, 5));
//       hideElements(securitySelectors.slice(5));
//     };

//     const hideAdContainerAndFrame = () => {
//       hideElements(securitySelectors.slice(8));
//     };

//     const showRecommendedVideos = () => {
//       const recommendedVideos = document.getElementById("secondary");
//       if (recommendedVideos && recommendedVideos.style.display === "none") {
//         recommendedVideos.style.display = "block";
//       }
//     };

//     const runAdblockForYoutube = () => {
//         hideAdOverlays();
//         showPlayerBlocker();
//         hideAdContainerAndFrame();
//         showRecommendedVideos();
//       };
  
//       // Run the adblock every 500 milliseconds.
//       setInterval(runAdblockForYoutube, 500);
//     }
//   );





const currentUrl = window.location.href;

const container = document.createElement("div");
  container.setAttribute("class", "ytblocker");
container.style.cssText = `
display: flex;
justify-content: end;
align-items: center;
margin: 5px 0px;
`;

const notes = document.createElement("p");
notes.textContent = "Adblock for youtube™";
notes.setAttribute("class", "notes");
notes.style.cssText = `
font-size: 12px;
font-weight: 500;
color: #444444;
`;
container.appendChild(notes);

const closeBtn = document.createElement("p");
closeBtn.setAttribute("class", "close-share-btn");
closeBtn.textContent = "❌";
closeBtn.style.cssText = `
margin: 0px 9px;
font-size: 7px;
cursor: pointer;
`;
closeBtn.addEventListener("click", ()=>{
  chrome.storage.sync.set({ flag: true });
    container.remove();

});
container.appendChild(closeBtn);

const rateus = document.createElement("button");
rateus.setAttribute("class", "rateus");
rateus.textContent = "Share";
rateus.style.cssText = `
margin-left: 5px;
border: none;
outline: none;
background: #cc0000;
color: white;
font-size: 12px;
font-weight: 600;
border-radius: 2px;
cursor: pointer;
box-shadow: 0px 0px 3px 0px grey;
`;
rateus.addEventListener("click", ()=>{

  window.open("https://chrome.google.com/webstore/detail/adblock-for-youtube/meeigimblnoededboeggpdknokefoece")

});
container.appendChild(rateus);

// Get the flag and security selectors from Chrome storage.
chrome.storage.sync.get(
    ["flag", "securitySelectors"],
    ({ flag, securitySelectors = [] }) => {
      // Exit early if the current page is not on YouTube.
      if (!currentUrl.includes("youtube.com")) {
        return;
      }
  
      // Helper function to hide a single element based on its selector.
      const hideElement = (selector) => {
        const el = document.querySelector(selector);
        if (el && el.style.display !== "none") {
          el.style.display = "none";
        }
      };
  
      const hideElements = (selectors) => {
        selectors.forEach((selector) => {
          hideElement(selector);
        });
      };
  
      const showPlayerBlocker = () => {
  
        const playerContainer = document.getElementById("player-container");
        if (!playerContainer || !securitySelectors[7] || flag) {
          return;
        }
        if (playerContainer && playerContainer.style.display === "none") {
          playerContainer.style.display = "";
        }
  
        if (playerContainer.classList.contains("player-container-hidden")) {
          playerContainer.classList.remove("player-container-hidden");
        }
  
        if (!document.querySelector(".ytblocker")) {
          const container = document.createElement("div");
          container.className = "ytblocker";
          container.style.cssText =
            "position:absolute;top:0;left:0;width:100%;height:100%;background:#000;";
          playerContainer.appendChild(container);
        }
       
        const video = document.querySelector("video.html5-main-video");
        if (video && video.style.display === "none") {
          video.style.display = "";
        }
      };
  
      const hideAdOverlays = () => {
        hideElements(securitySelectors.slice(0, 5));
        hideElements(securitySelectors.slice(5));
      };
  
      const hideAdContainerAndFrame = () => {
        hideElements(securitySelectors.slice(8));
      };
  
      const showVidContainers = () => {
        const video = document.querySelector("video.html5-main-video");
        if (video && video.style.display === "none") {
          video.style.display = "";
        }
        
      };
  
      const runAdblockForYoutube = () => {
          hideAdOverlays();
          showPlayerBlocker();
          hideAdContainerAndFrame();
          showVidContainers();
        };
    
        // Run the adblock every 500 milliseconds.
        setInterval(runAdblockForYoutube, 500);
      }
    ); 






// Get the flag and security selectors from Chrome storage.
chrome.storage.sync.get(
  ["flag", "securitySelectors"],
  ({ flag, securitySelectors = [] }) => {
    // Exit early if the current page is not on YouTube.
    if (!currentUrl.includes("youtube.com")) {
      return;
    }

    // Helper function to hide a single element based on its selector.
    const hideElement = (selector) => {
      const el = document.querySelector(selector);
      if (el && el.style.display !== "none") {
        el.style.display = "none";
      }
    };

    const hideElements = (selectors) => {
      selectors.forEach((selector) => {
        hideElement(selector);
      });
    };

    const showPlayerBlocker = () => {

      const playerContainer = document.getElementById("player-container");
      if (!playerContainer || !securitySelectors[7] || flag) {
        return;
      }
      if (playerContainer && playerContainer.style.display === "none") {
        playerContainer.style.display = "";
      }

      if (playerContainer.classList.contains("player-container-hidden")) {
        playerContainer.classList.remove("player-container-hidden");
      }

      if (!document.querySelector(".ytblocker")) {
        const container = document.createElement("div");
        container.className = "ytblocker";
        container.style.cssText =
          "position:absolute;top:0;left:0;width:100%;height:100%;background:#000;";
        playerContainer.appendChild(container);
      }
      if (playerContainer.style.display === "none") {
        playerContainer.style.display = "";
      }

      // Show the video.
      const video = document.querySelector("video.html5-main-video");
      if (video && video.style.display === "none") {
        video.style.display = "";
      }
    };

    const hideAdOverlays = () => {
      hideElements(securitySelectors.slice(0, 5));
      hideElements(securitySelectors.slice(5));
    };

    const hideAdContainerAndFrame = () => {
      hideElements(securitySelectors.slice(8));
    };

    const showVidContainers = () => {
      const video = document.querySelector("video.html5-main-video");
      if (video && video.style.display === "none") {
        video.style.display = "";
      }
      

  //     const commentsSection = document.querySelector(".style-scope ytd-watch-flexy");
  // if (commentsSection && commentsSection.style.display === "none !important") {
  //     commentsSection.style.display = "";
  // }
    };

    const runAdblockForYoutube = () => {
        hideAdOverlays();
        showPlayerBlocker();
        hideAdContainerAndFrame();
        showVidContainers();
      };
  
      // Run the adblock every 500 milliseconds.
      setInterval(runAdblockForYoutube, 500);
    }
  );


  const currentUrl = window.location.href;

const container = document.createElement("div");
container.className = "ytblocker";
container.style.cssText = `
display: flex;
justify-content: end;
align-items: center;
margin: 5px 0px;
`;

const notes = document.createElement("p");
notes.textContent = "Adblock for youtube™";
notes.className = "notes";
notes.style.cssText = `
font-size: 12px;
font-weight: 500;
color: #444444;
`;
container.appendChild(notes);

function onCloseButtonClick() {
container.style.display = 'none';
}

function onShareButtonClick() {
const url = 'https://example.com';
const title = 'Check out this great site!';
const encodedUrl = encodeURIComponent(url);
const encodedTitle = encodeURIComponent(title);
const shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;

window.open(shareUrl, '_blank');
}

const closeBtn = document.createElement("p");
closeBtn.className = "close-share-btn";
closeBtn.textContent = "❌";
closeBtn.style.cssText = `
margin: 0px 9px;
font-size: 7px;
cursor: pointer;
`;
closeBtn.addEventListener("click", onCloseButtonClick);
container.appendChild(closeBtn);

const rateus = document.createElement("button");
rateus.className = "rateus";
rateus.textContent = "Share";
rateus.style.cssText = `
margin-left: 5px;
border: none;
outline: none;
background: #cc0000;
color: white;
font-size: 12px;
font-weight: 600;
border-radius: 2px;
cursor: pointer;
box-shadow: 0px 0px 3px 0px grey;
`;
rateus.addEventListener("click", onShareButtonClick);
container.appendChild(rateus);

function hideElement(selector) {
const el = document.querySelector(selector);
if (el && el.style.display !== "none") {
  el.style.display = "none";
}
}

function hideElements(selectors) {
selectors.forEach((selector) => {
  hideElement(selector);
});
}

function showPlayerBlocker() {
const playerContainer = document.getElementById("player-container");
if (!playerContainer || !securitySelectors[7] || flag) {
  return;
}

if (playerContainer.classList.contains("player-container-hidden")) {
  playerContainer.classList.remove("player-container-hidden");
}

if (!document.querySelector(".ytblocker")) {
  const container = document.createElement("div");
  container.className = "ytblocker";
  container.style.cssText =
    "position:absolute;top:0;left:0;width:100%;height:100%;background:#000;";
  playerContainer.appendChild(container);
}

// Show the video.
const video = document.querySelector("video.html5-main-video");
if (video && video.style.display === "none") {
  video.style.display = "";
}
}

function hideAdOverlays() {
hideElements(securitySelectors.slice(0, 5));
hideElements(securitySelectors.slice(5));
}

function hideAdContainerAndFrame() {
hideElements(securitySelectors.slice(8));
}
























// chrome.storage.sync.get(
//     ["flag", "securitySelectors"],
//     ({ flag, securitySelectors = [] }) => {

//       if (!currentUrl.includes("youtube.com")) {
//         return;
//       }
  
//       const hideElement = (selector) => {
//         const el = document.querySelector(selector);
//         if (el && el.style.display !== "none") {
//           el.style.display = "none";
//         }
//       };
  
//       const hideElements = (selectors) => {
//         selectors.forEach((selector) => {
//           hideElement(selector);
//         });
//       };
  
//       const showPlayerBlocker = () => {

//         const playerContainer = document.getElementById("player-container");
//         if (!playerContainer || !securitySelectors[7] || flag) {
//           return;
//         }
//         if (playerContainer && playerContainer.style.display === "none") {
//           playerContainer.style.display = "";
//         }
  
//         if (playerContainer.classList.contains("player-container-hidden")) {
//           playerContainer.classList.remove("player-container-hidden");
//         }
  
//         if (!document.querySelector(".ytblocker")) {
//           const container = document.createElement("div");
//           container.className = "ytblocker";
//           container.style.cssText =
//             "position:absolute;top:0;left:0;width:100%;height:100%;background:#000;";
//           playerContainer.appendChild(container);
//         }
//         if (playerContainer.style.display === "none") {
//           playerContainer.style.display = "";
//         }
  
//         const video = document.querySelector("video.html5-main-video");
//         if (video && video.style.display === "none") {
//           video.style.display = "";
//         }
//       };
  
//       const hideAdOverlays = () => {
//         hideElements(securitySelectors.slice(0, 5));
//         hideElements(securitySelectors.slice(5));
//       };
  
//       const hideAdContainerAndFrame = () => {
//         hideElements(securitySelectors.slice(8));
//       };
    
//       const runAdblockForYoutube = () => {
//           hideAdOverlays();
//           showPlayerBlocker();
//           hideAdContainerAndFrame();
//         };
    
//     setInterval(runAdblockForYoutube, 500);
//   });



