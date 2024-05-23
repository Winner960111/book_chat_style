// assistant.js
(function () {
  // Create a container for the chat button
  var chatButtonContainer = document.createElement("div");
  chatButtonContainer.id = "liveChatButtonContainer"; // You can customize the ID

  // Style the container (customize as needed)
  chatButtonContainer.style.position = "fixed";
  chatButtonContainer.style.bottom = "20px";
  chatButtonContainer.style.right = "20px";
  chatButtonContainer.style.zIndex = "999";
  chatButtonContainer.style.cursor = "pointer";
  chatButtonContainer.style.width = "60px";

  //
  var chatButtonImage = document.createElement("img");
  chatButtonImage.src =
    "https://d2i2zqim3ahl97.cloudfront.net/DealerChat/chatIconWhite.svg";
  chatButtonImage.alt = "Dealer Assistant";
  chatButtonImage.style.width = "60px";
  chatButtonContainer.appendChild(chatButtonImage);
  chatButtonImage.style.borderRadius = "50%";
  chatButtonImage.style.backgroundColor = "#854fff";
  chatButtonImage.style.boxShadow = "0 0 5px #854fff";

  // Append the button to the container

  document.body.appendChild(chatButtonContainer);
  var toggle = 0;
  const chatElementContainer = document.createElement("div");
  const chatIframe = document.createElement("iframe");

  //hover logic

  chatButtonContainer.addEventListener("mouseenter", function () {
    // Code to run when the mouse enters the chatButtonContainer
    if (!activeBtn) {
      chatButtonImage.src =
        "https://d2i2zqim3ahl97.cloudfront.net/DealerChat/chatIcon.svg";
      chatButtonImage.style.transition = "0.5s";
      chatButtonImage.style.backgroundColor = "#fff";
      chatButtonImage.style.width = "60px";
      chatButtonImage.style.padding = "0px";
    } else {
      chatButtonImage.src =
        "https://d2i2zqim3ahl97.cloudfront.net/DealerChat/exitRed.svg";
      chatButtonImage.style.transition = "0.5s";
      chatButtonImage.style.backgroundColor = "#fff";
      chatButtonImage.style.width = "50px";
      chatButtonImage.style.padding = "10px";
    }
  });
  let activeBtn = false;
  chatButtonContainer.addEventListener("mouseleave", function () {
    // Code to run when the mouse leaves the chatButtonContainer
    if (!activeBtn) {
      chatButtonImage.src =
        "https://d2i2zqim3ahl97.cloudfront.net/DealerChat/chatIconWhite.svg";
      chatButtonImage.style.transition = "0.5s";
      chatButtonImage.style.backgroundColor = "#854fff";
      chatButtonImage.style.width = "60px";
      chatButtonImage.style.padding = "0px";
    } else {
      chatButtonImage.src =
        "https://d2i2zqim3ahl97.cloudfront.net/DealerChat/exitRed.svg";
      chatButtonImage.style.transition = "0.5s";
      chatButtonImage.style.backgroundColor = "#fff";
      chatButtonImage.style.width = "50px";
      chatButtonImage.style.padding = "10px";
    }
  });

  // Function to create the chat element
  function createChatElement() {
    chatElementContainer.style.position = "fixed";
    chatElementContainer.style.bottom = "85px";
    chatElementContainer.style.right = "20px";
    chatElementContainer.style.width = "415px"; //this was 400px
    chatElementContainer.style.height = "640px";
    chatElementContainer.style.zIndex = "1000";
    chatElementContainer.style.padding = "5px";
    chatElementContainer.style.borderRadius = "10px";
    chatElementContainer.id = "chatElementContainer";
    chatElementContainer.style.alignItems = "center";
    chatElementContainer.style.justifyContent = "center";

    // Create the iframe element instead of using innerHTML
    // chatIframe.style.border = '2px solid gray';
    chatIframe.src = `https://www.apps.creditapps.com/info-checker/${getContextFromWeb(
      "slug"
    )}/`;
    chatIframe.className = "iframe-loading";

    // Define what should happen on iframe load
    chatIframe.onload = function () {
      // Here, place any functions or code you want to run after the iframe loads.
      chatIframe.style.width = "100%";
      chatIframe.style.height = "100%";
      chatIframe.style.border = "none";
      chatIframe.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
      chatIframe.style.overflowX = "hidden";
      chatIframe.style.borderRadius = "10px";
      chatIframe.classList.remove("iframe-loading");
    };

    // Append the iframe directly to the container
    chatElementContainer.appendChild(chatIframe);
    chatElementContainer.style.display = "none";
    // Append the container to the body
    document.body.appendChild(chatElementContainer);
  }

  // Add an event listener to the 'load' event of the window object
  window.addEventListener("load", function () {
    // Call the special function when the URL is opened
    createChatElement();
  });

  // Add an event listener for the chat button click
  chatButtonContainer.addEventListener("click", function () {
    toggle = toggle + 1;
    handleChatButtonClick(toggle);
  });

  // Function to handle click on the chat button
  function handleChatButtonClick(toggle) {
    // Check if the chat element already exists
    console.log("this is toggel===>", toggle);
    if (toggle % 2) {
      // If it exists, remove it from the DOM
      chatElementContainer.style.display = "block";
    } else {
      // If not, create a new chat element
        chatElementContainer.style.display = "none";
        chatIframe.src = `https://www.apps.creditapps.com/info-checker/${getContextFromWeb(
          "slug"
        )}/`;
    }
  }
  //call the function with the name given in html. This wi
  const getContextFromWeb = (looking) => {
    // Loop through calabel
    for (let i = 0; i < calabel.length; i++) {
      // Check each argument array for looking parameter
      if (calabel[i][0] === looking) {
        return calabel[i][1];
      }
    }
  };
})();
