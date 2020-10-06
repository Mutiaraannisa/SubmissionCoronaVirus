class ProtectYourSelf extends HTMLElementc{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode : "open"});
    }


    render () {
        this.render();
    }

    render() {
        this.shadowDOM.innerHtml = `
        <style>
                    
            .ProtectYourSelf-item{
                display: flex;
                flex-direction: column;
            }
        </style>

        <div class="ProtectYourSelf-Contianer">
        <div class="ProtectYourSelf-item">
            <div class="Protect Your Self" id="mask">
                <h2>Use Your Mask</h2>
                <img src="assets/usemaskk.png">
            </div>
            <div class="Protect Your Self" id="wash-hand">
                <h2>Wash Your Hands</h2>
                <img src="./assets/hand-washing.svg">
            </div>
            <div class="Protect Your Self">
                <h2>Social Distancing</h2>
                <img src="assets/social-distancing.png">
            </div>
        </div>
    </div>`
    }
}

customElements.define("protect-ys", ProtectYourSelf);