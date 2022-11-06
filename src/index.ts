import Locale, { bundle } from "./locale";

const lang = "ko-KR";

Locale.init();

console.log("---------------------------------------------------------");

console.log(bundle.format(lang, "ACTION.EAT", bundle.get("ITEM.APPLE.NAME", lang))); // 사과를 드시겠습니까?
console.log(bundle.format(lang, "ACTION.EAT.YUM", bundle.get("ITEM.APPLE.NAME", lang))); // 냠냠... 사과를 먹어 체력이 늘어났어요!

console.log("---------------------------------------------------------");

console.log(bundle.format(lang, "ACTION.ATTACK", bundle.get("ENEMEY.NOOB_SLIME.NAME", lang))); // 초보자들을 위한 슬라임을 공격하시겠습니까?\n[참고 : 마나가 5 감소됩니다.]
console.log(bundle.format(lang, "ACTION.ATTACK.FAIL", bundle.get("ENEMEY.NOOB_SLIME.NAME", lang))); // 앗...! 공격에 실패했다!! 초보자들을 위한 슬라임이 반격을 준비합니다.

console.log("---------------------------------------------------------");

console.log(bundle.get("ENEMEY.NOOB_SLIME.NAME", lang)); // 초보자들을 위한 슬라임
console.log(bundle.get("ENEMEY.NOOB_SLIME.DESCRIPTION", lang)); // 제일 약한 슬라임이다. 초보자들이 경험치작을 하기에는 딱 알맞다.