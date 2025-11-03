class Identity extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.title = this.getAttribute('title') || 'Hafidz Kurniawan';
    this.box = this.getAttribute('box') || 'MyJemparingan';
    this.value = parseInt(this.getAttribute('value')) || 539859;
    this.nilai = parseInt(this.getAttribute('nilai')) || 22920;
    this.hasil = parseInt(this.getAttribute('hasil')) || 0;
    this.merah = parseInt(this.getAttribute('merah')) || 0;
    this.putih = parseInt(this.getAttribute('putih')) || 0;

    this.shadowRoot.innerHTML = `
      <style>
        .identity {
          background-color: #dcacf1cc;
          font-family: arial, sans-serif;
          padding: 10px;
          border: 1px thin solid #000;
        }
        .box {
          border: 1px solid #000;
          background-color: #ffffff6e;
          font-family: serif;
          padding: 10px;
          width: fit-content;
          height: auto;
          flex-direction: column;
          display: flex;
          gap: 5px;
        }
        .hasil { font-size: 1rem; }
        button {
          flex: 1;
          background-color: #d3d3d3;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          height: 30px;
        }
        #red:hover {
          background-color: #e43434ff;
        }
        #white:hover {
          background-color: #ffffffff;
        }
        #reset:hover {
            background-color: #ce7afbff;
        }

        .title {
        font-size: 1.2rem;
        margin-bottom: 5px;}

        .value, .nilai, .merah, .putih {
        font-size: 1rem;}

      </style>

      <div class="identity">
        <div class="title">${this.title}</div>
        <div class="NIM">
          NIM: 24/<span class="niu">${this.value}</span>/PA/<span class="nofak">${this.nilai}</span>
        </div>
        <div class="box">

          <div class="hasil">Value: <span class="number">${this.hasil}</span></div>
          <div class="box-content">${this.box}</div>
          <div class="buttons">
          <div class="merah">Merah: <span class="red-point">${this.merah}</span></div>
          <div class="putih">Putih: <span class="white-point">${this.putih}</span></div>
          <button id="red">red</button>
          <button id="white">white</button>
          <button id="reset">reset</button>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    const hasilSpan = this.shadowRoot.querySelector('.number');
    const redSpan = this.shadowRoot.querySelector('.red-point');
    const whiteSpan = this.shadowRoot.querySelector('.white-point');
    this.shadowRoot.getElementById('red')
      .addEventListener('click', () => {
        this.hasil += 3;
        this.merah += 1;
        hasilSpan.textContent = this.hasil;
        redSpan.textContent = this.merah;
      });
    this.shadowRoot.getElementById('white')
      .addEventListener('click', () => {
        this.hasil += 1;
        this.putih += 1;
        hasilSpan.textContent = this.hasil;
        whiteSpan.textContent = this.putih;
      });
    this.shadowRoot.getElementById('reset')
      .addEventListener('click', () => {
        this.hasil = 0;
        this.merah = 0;
        this.putih = 0;
        hasilSpan.textContent = this.hasil;
        redSpan.textContent = this.merah;
        whiteSpan.textContent = this.putih;
      });
  }
}

customElements.define('my-identity', Identity);
