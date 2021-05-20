import React, { useState, useEffect } from 'react';
import RefCard from './RefCard'
import './RefCard.css'

const References = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('./data/References.json')
            .then(resp => resp.json())
            .then(data => {
                setContacts(data.References)
            })
    }, [])

    console.log(contacts)

    const itemized = contacts.map((contact) => {
        return <RefCard firstName={contact.firstName} lastName={contact.lastName} job={contact.job} role={contact.role} blurb={contact.blurb} images={contact.images} image={contact.image} />
    })


    return (
        <div className='bg-black'>
            <h1>Reference Available Upon Refresh</h1>
            {itemized}
        </div>
    )
}

export default References
