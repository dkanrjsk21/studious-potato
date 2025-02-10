async function main() {
  async function hanldeCC(event) {
    event.preventDefault();

    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border");

    document.querySelector("#box").appendChild(spinner);

    const url = "https://lightning-puzzled-side.glitch.me/";
    const formData = new FormData(document.querySelector("#ccForm"));
    const text = formData.get("text");

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      headers: {
        "Content-Type": "Application/json",
      },
    });

    const json = await response.json();

    const { image, desc } = json;

    const box = document.querySelector("#box");
    box.innerHTML = "";
    const imageTag = document.createElement("img");
    imageTag.classList.add("img-fluid");
    imageTag.src = image; // image - link
    const descTag = document.createElement("p");
    descTag.textContent = desc;
    box.appendChild(imageTag);
    box.appendChild(descTag);
    
  }

  //   document.querySelector("#ccBtn").addEventListener("click", hanldeCC);
  document.querySelector("#ccForm").addEventListener("submit", hanldeCC);
}

document.addEventListener("DOMContentLoaded", main);