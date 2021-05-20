import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './RefCard.css'

const RefCard = (props) => {
    const { firstName, lastName, job, role, image, blurb } = props;


    return (
        <div className='stacks br-pill'>
            <Card bg='white shadow-5 br4 grow b--black'>
                {/* <Card.Img className='imgsize' variant="bottom" src="https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg" /> */}
                <Card.Body className='br4'>
                    <p className='br3 grow'>{firstName} {lastName}</p>
                    <hr className='br3 b--black' />
                    <Card.Img className='imgsize ba' variant="bottom" src={image} />
                    <h4>
                        {job}
                    </h4>
                    <hr />
                    <p>{blurb}</p>
                </Card.Body>
                <Card.Footer className="ba bg-blue">
                    <large className=''>{role}</large>
                </Card.Footer>
            </Card>
        </div >

    )
}

export default RefCard
