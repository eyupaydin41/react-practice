import { useState } from 'react';
import axios from 'axios';

export default function Form() {
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    password: '',
    confirmPassword: ''
});

const handleSubmitWithAxios = async (event) => {
  event.preventDefault();
  try {
    await axios.post('http://localhost:3001/api/products', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Server response:', response.data);
      alert(`Form submitted successfully! ${formData.firstName}`);
    })
    .catch(error => {
      console.error('Submission error:', error);
      alert('There was an error submitting the form.');
    });

  } catch (error) {
    console.error('Submission error:', error);
    alert('There was an error submitting the form.');
  }
};

const handleSubmitWithFetch = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3001/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Server response:', data);
    alert(`Form submitted successfully! ${formData.firstName}`);
  } catch (error) {
    console.error('Submission error:', error);
    alert('There was an error submitting the form.');
  }
};

return (
<div
    style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '30px',
    width: '400px',
    margin: '50px auto',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    }}
>
    <h2 style={{ marginBottom: '20px', color: '#111827' }}>Kayıt Formu</h2>

<form onSubmit={handleSubmitWithAxios}>
    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
    <input onChange={e => setFormData({ ...formData, firstName: e.target.value })}
        type="text"
        placeholder="Ad"
        style={{
        width: '180px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        outline: 'none',
        }}
    />
    <input onChange={e => setFormData({ ...formData, lastName: e.target.value })}
        type="text"
        placeholder="Soyad"
        style={{
        width: '180px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        outline: 'none',
        }}
    />
    </div>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
    <input onChange={e => setFormData({ ...formData, email: e.target.value })}
        type="email"
        placeholder="Email"
        style={{
        width: '180px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        outline: 'none',
        }}
    />
    <input onChange={e => setFormData({ ...formData, birthDate: e.target.value })}
        type="date"
        placeholder="Doğum Tarihi"
        style={{
        width: '180px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        outline: 'none',
        }}
    />
    </div>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
    <input onChange={e => setFormData({ ...formData, password: e.target.value })}
        type="password"
        placeholder="Şifre"
        style={{
        width: '180px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        outline: 'none',
        }}
    />
    <input onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
        type="password"
        placeholder="Şifre Tekrar"
        style={{
        width: '180px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        outline: 'none',
        }}
    />
    </div>
    

    <button
    type="submit"
    style={{
        padding: '10px 25px',
        marginTop: '15px',
        borderRadius: '8px',
        backgroundColor: '#000',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
    }}
    onMouseOver={e => (e.target.style.backgroundColor = '#545453ff')}
    onMouseOut={e => (e.target.style.backgroundColor = '#000')}
    >
    Submit
    </button>
</form>
</div>
);
}
