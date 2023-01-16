/*!***************************************************
 * google-translate.js v1.0.0
 * https://Get-Web.Site/
 * author: L2Banners
 *****************************************************/

const googleTranslateConfig = {
    lang: "ru",
};

function TranslateInit() {
    let code = TranslateGetCode();
    // РќР°С…РѕРґРёРј С„Р»Р°Рі СЃ РІС‹Р±СЂР°РЅРЅС‹Рј СЏР·С‹РєРѕРј РґР»СЏ РїРµСЂРµРІРѕРґР° Рё РґРѕР±Р°РІР»СЏРµРј Рє РЅРµРјСѓ Р°РєС‚РёРІРЅС‹Р№ РєР»Р°СЃСЃ
    $('[data-google-lang="' + code + '"]').addClass('language__img_active');

    if (code == googleTranslateConfig.lang) {
        // Р•СЃР»Рё СЏР·С‹Рє РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ, СЃРѕРІРїР°РґР°РµС‚ СЃ СЏР·С‹РєРѕРј РЅР° РєРѕС‚РѕСЂС‹Р№ РїРµСЂРµРІРѕРґРёРј
        // РўРѕ РѕС‡РёС‰Р°РµРј РєСѓРєРё
        TranslateClearCookie();
    }

    // РРЅРёС†РёР°Р»РёР·РёСЂСѓРµРј РІРёРґР¶РµС‚ СЃ СЏР·С‹РєРѕРј РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    // Р’РµС€Р°РµРј СЃРѕР±С‹С‚РёРµ  РєР»РёРє РЅР° С„Р»Р°РіРё
    $('[data-google-lang]').click(function () {
        TranslateSetCookie($(this).attr("data-google-lang"))
        // РџРµСЂРµР·Р°РіСЂСѓР¶Р°РµРј СЃС‚СЂР°РЅРёС†Сѓ
        window.location.reload();
    });
}

function TranslateGetCode() {
    // Р•СЃР»Рё РєСѓРєРё РЅРµС‚, С‚Рѕ РїРµСЂРµРґР°РµРј РґРµС„РѕР»С‚РЅС‹Р№ СЏР·С‹Рє
    let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
    return lang.substr(-2);
}

function TranslateClearCookie() {
    $.cookie('googtrans', null);
    $.cookie("googtrans", null, {
        domain: "." + document.domain,
    });
}

function TranslateSetCookie(code) {
    // Р—Р°РїРёСЃС‹РІР°РµРј РєСѓРєРё /СЏР·С‹Рє_РєРѕС‚РѕСЂС‹Р№_РїРµСЂРµРІРѕРґРёРј/СЏР·С‹Рє_РЅР°_РєРѕС‚РѕСЂС‹Р№_РїРµСЂРµРІРѕРґРёРј
    $.cookie('googtrans', "/auto/" + code);
    $.cookie("googtrans", "/auto/" + code, {
        domain: "." + document.domain,
    });
}
