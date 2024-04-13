import './Modal.css'

export default function Modal(){

    const closeModal=()=>{
        document.querySelector('.modal').style.display = 'none'
    }


    return (
        <>
        <div className="modal">
            <p onClick={closeModal} id='close_modal' >Закрыть</p>
            <h1>Ваша корзина</h1>
            <span className="" ></span>
        </div>
        </>
    )
}

