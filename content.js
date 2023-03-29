function transformToBionicText(text) {
  // The logic for bionic reading transformation goes here.
  // You need to decide which part of the word you want to emphasize (bold).
  // This is just a simple example that bolds the first letter of each word.
  const words = text.split(" ");
  const bionicWords = words.map((word) => {
    if (word.length > 0) {
      return `<strong>${word[0]}</strong>${word.slice(1)}`;
      // return "poo";
    } else {
      return "";
    }
  });

  return bionicWords.join(" ");
}

function applyBionicReading() {
  function transformNodeText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const span = document.createElement("span");
      span.innerHTML = transformToBionicText(node.nodeValue);
      node.parentNode.replaceChild(span, node);
    } else if (
      node.nodeType === Node.ELEMENT_NODE &&
      !["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "OBJECT"].includes(
        node.tagName
      )
    ) {
      for (let i = 0; i < node.childNodes.length; i++) {
        transformNodeText(node.childNodes[i]);
      }
    }
  }

  transformNodeText(document.body);
}

applyBionicReading();
