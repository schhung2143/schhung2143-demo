const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//--on/off modal mic
    const btnmic = document.querySelector('.js-btn-mic')
    const modal = document.querySelector('.js-modal_mic')
    const btnclose = document.querySelector('.js-modal_mic-close')
    const modalContainer = document.querySelector('.mic')

    //ham hien thi modal mic
    function showModalMic() {
        modal.classList.add('open')
    }

    //ham an modal mic
    function hideModalMic() {
        modal.classList.remove('open')
    }

    btnmic.addEventListener('click', showModalMic)
    btnclose.addEventListener('click', hideModalMic)
    modal.addEventListener('click', hideModalMic)

    modalContainer.addEventListener('click', function (event){
        event.stopPropagation()
    } )

//--on/off btn create video
    // const btCreateVideo = document.querySelector('.js-btn-create-video')
    // const modalCreateVideo = document.querySelector('.js-modal-create-video')

    // //ham hien thi modal mic
    // function onOffCreateVideo() {
    //     modalCreateVideo.classList.toggle('open')
    // }

    // function hideCreateVideo() {
    //     modalCreateVideo.classList.remove('open')
    // }

    // btCreateVideo.addEventListener('click', onOffCreateVideo)
    // document.addEventListener('click', hideCreateVideo)

    // modalCreateVideo.addEventListener('click', function (event){
    //     event.stopPropagation()
    // } )
//--on/off btn notify

//--on/off btn user

//--container-header btn
const btns = $$('.btn');

btns.forEach((btn, index) => {
    btn.onclick = function() {
        $('.btn.active').classList.remove('active');
        this.classList.add('active');
    }
})

//--click navbar-item
const navbars = $$('.navbar-item');

navbars.forEach((navbar, index) => {
    navbar.onclick = function() {
        $('.navbar-item.active').classList.remove('active');
        this.classList.add('active');
    }
})
