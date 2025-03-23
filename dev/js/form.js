document.addEventListener('DOMContentLoaded', function() {
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
      <input type="hidden" id="127518367dfe54c3cfce" name="__gc__internal__form__helper" class="__gc__internal__form__helper" value="">
      <input type="hidden" id="127518367dfe54c3cfceref" name="__gc__internal__form__helper_ref" class="__gc__internal__form__helper_ref" value="">
      <input type="hidden" name="requestTime" value="1742726476">
      <input type="hidden" name="requestSimpleSign" value="ddf2a254c71fa8ff370ea29ffa8fa48c">
      <input type="hidden" name="isHtmlWidget" value="1"/>
    </form>
    <span id="gccounterImgContainer"></span>
  `;
  
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
