import {testeZahl, sichtbar} from './utility.js';

// @ts-ignore
window.mischMich = misch_mich;   // jetzt auch in html sichtbar
// @ts-ignore
window.mischmich_rechnen = mischmich_rechnen;


export function misch_mich() {
    console.log("in mischmich");
    sichtbar('mischmich')

}


function mischmich_rechnen() {
    let x, y, alpha;

    let input = document.getElementById('y') as HTMLInputElement | null;
    y = testeZahl(input.value);
    input = document.getElementById('x') as HTMLInputElement | null;
    x = testeZahl(input.value);

    //    x = testeZahl(window.document.form_mischmich.x.value);     // typescript mag das nicht, aber es geht
    //    y = testeZahl(window.document.form_mischmich.y.value);

    if (y === 0.0 && x === 0.0) {
        alpha = 0.0;
    } else {
        alpha = Math.atan2(y, x);
        alpha = alpha * 180.0 / Math.PI;
    }

    document.getElementById("alpha").innerText = alpha + "°";

}

