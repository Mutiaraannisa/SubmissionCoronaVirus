class FlexContainer extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM  = this.attachShadow({mode : "open"});
    }
    set covidIndoensia(covidIndonesia){
        this._covidIndonesia = covidIndonesia;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .flex-container{
            margin-top: 100px;
            text-align: center;
        }
        .flex-item {
            display: flex;
            flex-direction: row;
            text-align: center;
            padding: 10px;
        
        }
        .flex-value {
            text-align: center;
            padding: 50px;
            margin: auto 0;
        }
</style>


        <div class="flex-container">
        <h2>Corona Virus in Indonesia</h2>
        <h3>Last Update</h3> Hallo
        <div class="flex-item">
            <div class="flex-value">confirmed <br> ${this._covidIndonesia.confirmed.value}</div>
            <div class="flex-value">recovered <br> ${this._covidIndonesia.recovered.value}</div>
            <div class="flex-value">deaths<br> ${this._covidIndonesia.deaths.value}</div>
        </div>
    </div>`;
    }
}

customElements.define("flex-container", FlexContainer);