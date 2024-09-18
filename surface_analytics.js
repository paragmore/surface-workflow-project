(function () {
  function getVisitorId() {
    let visitorId = localStorage.getItem("visitorId");
    if (!visitorId) {
      visitorId = "visitor-" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("visitorId", visitorId);
    }
    return visitorId;
  }
  function sendEvent(name, metadata) {
    const visitorId = getVisitorId();
    fetch("%{baseUrl}%/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, // Event name
        visitor: visitorId, // Visitor ID
        metadata, // Event metadata (details)
        createdAt: Date.now(), // Event timestamp as a number
        tagId: "%{tagId}%",
      }),
    }).catch((error) => console.error("Error sending event:", error));
  }

  sendEvent("script_initialization", {});

  sendEvent("page_view", {
    url: window.location.href,
  });

  document.addEventListener("input", function (event) {
    if (event.target.type === "email") {
      sendEvent("email_entered", {
        email: event.target.value,
        elementId: event.target.id,
      });
    }
  });

  document.addEventListener("click", function (event) {
    sendEvent("element_click", {
      elementId: event.target.id,
      tagName: event.target.tagName,
      textContent: event.target.textContent.trim(),
    });
  });
})();
