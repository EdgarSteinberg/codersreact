import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [form, setForm] = useState(true)

    const handleConfirm = (event) => {
        event.preventDefault()

        const UserData = {
            name, phone, email
        }

        onConfirm(UserData)
        setForm(false)
    }

    return (
        <>
            {form && (
                <div className={styles.tamaño}>
                    <Form onSubmit={handleConfirm}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={({ target }) => setName(target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={({ target }) => setPhone(target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}

                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Crear Orden
                        </Button>
                    </Form>
                </div>
            )}
        </>
    )
}

export default CheckoutForm