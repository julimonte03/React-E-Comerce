import React,{useContext, useState} from 'react'
import { dataBase } from '../../firebase/config'
import { collection,addDoc,updateDoc, doc, getDoc} from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {

    const {cart,totalCart,quantityCart,emptyCart} = useContext(CartContext);

    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [telefono,setTelefono] = useState("");
    const [email,setEmail] = useState("");
    const [emailConfirmation,setEmailConfirmation] = useState("");
    const [error,setError] = useState("");
    const [orderId,setOrderId] = useState("");

    const handleForm = (event) =>{

        event.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmation){
            setError("Completa bien los campos por favor")
            return;
        }
        if(email !== emailConfirmation){
            setError("Los emails no coinciden")
            return;
        }    

        //GENERAMOS EL OBJETO DE LA ORDEN DE COMPRA

        const order = {
            items : cart.map(product =>({
                id: product.product.id,
                nombre: product.produdct.nombre,
                cantidad: product.cantidad
            })),
            total: totalCart(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //REDUCIMOS EL STOCK

        Promise.all(
            order.items.map(async (productoOrden)=>{
                const productoRef = doc(dataBase,"products",productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef,{
                    stock: stockActual - productoOrden.cantidad
                })
            })
        ).then(()=>{

            addDoc(collection(dataBase,"orders"),order)

            .then((docRef)=>{

                setError("")
                setOrderId(docRef.id);
                emptyCart();

            }).catch(error => setError("se produjo un error en la orden"))
        }
        ).catch(error =>{ 
            setError("no se pudo actualizar el stock")
        })
    }

  return (
    <div>
      
    <h1>Ingresa tus datos:</h1>

    <form onSubmit={handleForm}>

    {cart.map(p =>{

        <div key={p.product.id}>

            <p>
                {""}
                {p.product.name} x {product.cantidad}
            </p>

        </div>

    })}

    <div>
        <div>
            <label>Nombre:</label>
            <input type="text" onChange={e => setNombre(e.target.value)} />
        </div>

        <div>
            <label>Apellido:</label>
            <input type="text" onChange={e => setApellidp(e.target.value)} />
        </div>

        <div>
            <label>Telefono:</label>
            <input type="text" onChange={e => setTelefono(e.target.value)} />
        </div>

        <div>
            <label>Email:</label>
            <input type="email" onChange={e => setEmail(e.target.value)} />
        </div>

        <div>
            <label>Confirma tu email:</label>
            <input type="email" onChange={e => setEmailConfirmation(e.target.value)} />
        </div>

        <button type='submit'>Completar compra!</button>

        {error && <p>{error}</p>}

        {orderId && <p>¡Gracias por tu compra! tu numero de orden es {orderId}</p>}
    </div>

    </form>

    </div>
  )
}

export default Checkout
