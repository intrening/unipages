// widget form https://universuspro.ru/pl/lite/widget/editor?id=1275183

document.addEventListener('DOMContentLoaded', function() {

  const eventID = 'px_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 15);
  window.eventID = eventID.substring(0, 36);
  console.log('eventID', eventID);
  
  const formContainer = document.getElementById('form-container');
  
  formContainer.innerHTML = `
    <h3 class="form-heading">Запишитесь на курс</h3>
    <form
      id="ltForm6670800"
      class="lt-normal-form lt-form-inner lt-form"
      action="https://universuspro.ru/pl/lite/block-public/process-html?id=2093860768"
      method="post"
      data-open-new-window="0"
    >
      <input type="hidden" name="formParams[setted_offer_id]">
      <input type="email" maxlength="60" placeholder="Введите ваш эл. адрес" name="formParams[email]" value="" required>
      <button type="submit"
          id="button4332579" 
          onclick="if(window['btnprs67dfe54c44f24']){return false;}window['btnprs67dfe54c44f24']=true;setTimeout(function(){window['btnprs67dfe54c44f24']=false},6000);return true;">
          Записаться
      </button>
      <input name="formParams[userCustomFields][626013]" type="hidden">
      <input id="field-input-10906343" type="hidden" name="formParams[userCustomFields][10906343]" value="">
      <input type="hidden" id="127518367dfe54c3cfce" name="__gc__internal__form__helper" class="__gc__internal__form__helper" value="">
      <input type="hidden" id="127518367dfe54c3cfceref" name="__gc__internal__form__helper_ref" class="__gc__internal__form__helper_ref" value="">
      <input type="hidden" name="requestTime" value="1742726476">
      <input type="hidden" name="requestSimpleSign" value="ddf2a254c71fa8ff370ea29ffa8fa48c">
      <input type="hidden" name="isHtmlWidget" value="1"/>
    </form>
    <span id="gccounterImgContainer"></span>
  `;
  
  // Set eventID to the hidden field
  const eventIDField = document.getElementById('field-input-10906343');
  if (eventIDField) {
    eventIDField.value = window.eventID;
  }
  
  const form = document.getElementById('ltForm6670800');
  form.addEventListener('submit', function(e) {
    // Get user email
    const emailInput = document.querySelector('input[name="formParams[email]"]');
    const userEmail = emailInput ? emailInput.value.trim().toLowerCase() : null;
    
    if (!userEmail) {
      console.warn('Email пользователя не найден. Отправка события Lead отменена.');
      return;
    }
    
    // Facebook Pixel tracking with eventID
    const PIXEL_ID = '182602654894632';
    
    // Check if fbq is already initialized
    if (typeof fbq === 'undefined') {
      // Load Facebook Pixel base script
      (function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      
      // Initialize Facebook Pixel with Advanced Matching
      fbq('init', PIXEL_ID, {
        em: userEmail
      });
    }
    
    // Track Lead event with eventID
    if (window.eventID) {
      fbq('track', 'Lead', {}, { eventID: window.eventID });
    } else {
      console.warn('eventID не определён. Событие Lead не отправлено.');
    }
  });

  // Add the statistics tracking script
  let loc = document.getElementById("127518367dfe54c3cfce");
  loc.value = window.location.href;
  let ref = document.getElementById("127518367dfe54c3cfceref");
  ref.value = document.referrer;

  let statUrl = "https://universuspro.ru/stat/counter?ref=" + encodeURIComponent(document.referrer)
    + "&loc=" + encodeURIComponent(document.location.href);
  document.getElementById('gccounterImgContainer').innerHTML
    = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
});
