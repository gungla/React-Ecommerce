import React, { useState}  from 'react'

const FormularioOrden = ({ createOrder }) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmation: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
        console.log(form)
    }

    const finalizePurchase = () => {
        const { name, email, phone } = form
        createOrder({ name, email, phone })
    }

    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )

    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="form-group">
                    <h2 className="title">Datos de contacto</h2>
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text"/>
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Email" name="email" value={form.email} onChange={getContactData} type="email"/>
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Confirma Email" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} type="email"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="finalize btn btn-primary btn-lg"  disabled={disabled} onClick={finalizePurchase}>Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}
export default FormularioOrden