export default class Lampa {
  #id;
  #allapot;
  #szuloElem;
  #divElem;

  constructor(id, allapot, szuloElem) {
    this.#id = id;
    this.#allapot = allapot;
    this.#szuloElem = szuloElem;

    this.#megjelenit();
  }

  #megjelenit() {
    let igazHamis = Math.floor(Math.random());
    let txt = "";
    if (igazHamis === 0) {
      txt += `<div class="lekapcsolt"></div>`;
    } else {
      txt += `<div class="felkapcsolt"></div>`;
    }
    this.#szuloElem.append(txt);
  }

  setAllapot(allapot) {
    this.#allapot = allapot;
    this.#szinBeallit();
  }

  #szinBeallit() {
    if (this.#allapot === false) {
        /* folyt. köv. */
    }
  }
}
