const input = document.querySelector("#phone");
const iti = window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function (callback) {
    fetch('https://ipinfo.io/json', { headers: { 'Accept': 'application/json' } })
      .then((resp) => resp.json())
      .then((resp) => {
        const countryCode = (resp && resp.country) ? resp.country : "us";
        callback(countryCode);
      });
  },
  separateDialCode: true,
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});