async function main() {
  async function hanldeCC(event) {
    event.preventDefault();
    const url = "http://127.0.0.1:3000";
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

    document.querySelector("#box").textContent = JSON.stringify(json);
  }

  //   document.querySelector("#ccBtn").addEventListener("click", hanldeCC);
  document.querySelector("#ccForm").addEventListener("submit", hanldeCC);
}

document.addEventListener("DOMContentLoaded", main);