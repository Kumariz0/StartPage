//Location 📍
async function getLocation() {
  if (navigator.geolocation) {
    await navigator.geolocation.getCurrentPosition(usePosition);
    resolve();
  } else {
    console.log("Geolocation is not supported by your browser.");
  }
}
function usePosition(pos) {
  setCookie("setLocation", 1);
  setCookie("lat", pos.coords.latitude);
  setCookie("long", pos.coords.longitude);
  console.log(getCookie("lat"));
  console.log(getCookie("long"));
  resolve();
}
