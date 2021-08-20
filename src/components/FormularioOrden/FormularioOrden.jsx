import React, { useState}  from 'react'
import toast, { Toaster } from "react-hot-toast";
import './FormularioOrden.css'

const FormularioOrden = ({ createOrder }) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailCheck: '',
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { 
                ...state, 
                [name]: value 
            }
        })
    }

    const finalizePurchase = (e) => {
        e.preventDefault();
        const { name, email, phone } = form

        if (!form.name || !form.phone || !form.email) {
            toast.success("Completa los datos!")
        }
        else if (form.email !== form.emailCheck) {
            toast.success("El email no coincide!")
        } else {
            createOrder({ name, email, phone })
        }
    }

    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.phone.length > 0 
    )

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3"> 
                <form onSubmit={finalizePurchase}>
                    <div className="form-group">
                        <Toaster/>
                        <h4 className="titSeccion">Datos de contacto</h4>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Email" name="email" value={form.email} onChange={getContactData} type="email"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Confirma Email" name="emailCheck" value={form.emailCheck} onChange={getContactData} type="email"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="finalize btn btn-dark w-100"  disabled={disabled} >Finalizar compra</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default FormularioOrden