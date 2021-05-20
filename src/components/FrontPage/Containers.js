import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import './Container.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Containers = () => {
    return (
        <div className='overload'>
            <ProgressBar animated now={40} />
            <Container>
                <hr />
                <div className='ba b--near-white shadow-2  br4 bw1'>
                    <Row>

                        <div className='container br4'>
                            <h1 className='imageBanner'>
                                My Experience
                            </h1>

                            <img className='resumeHeader pa2 shadow-4' src="https://heliontechnologies.com/wp-content/uploads/2017/12/resume-background.jpg" alt='resume' />
                            <img className='stamps' src='https://www.onlygfx.com/wp-content/uploads/2017/12/paid-rectangle-stamp-1.png' alt='yolo' />
                        </div>
                        <div className='br3 pa4'></div>


                        <Card className='ma3 grow shadow-4' style={{ width: '18rem' }}>
                            <Card.Body className='br2'>
                                <h1>Dish Network</h1>
                                <Card.Img className='ma2' variant="top" src="https://higherlogicdownload.s3.amazonaws.com/CXPA/87d54605-730a-475c-8484-8376dd43ac7a/UploadedImages/2020_Sponsors_-_GIE/bond_logo.jpg" />

                                <Card.Text className='ma3'>
                                    <p className='br2  pa2 shadow-2'>
                                        <h1> Years </h1>
                                        <p>Role</p>
                                        <p>Description</p>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className='ma3 grow shadow-4' style={{ width: '18rem' }}>
                            <Card.Body className='br2'>
                                <h1>Canvas Credit Union</h1>
                                <Card.Img className='ma2' variant="top" src="https://www.sportsvideo.org/new/wp-content/uploads/2018/02/DISH_Logo.jpg" />

                                <Card.Text className='ma3'>
                                    <p className='br2  pa2 shadow-2'>
                                        <h1> Years </h1>
                                        <p>Role</p>
                                        <p>Description</p>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className='ma3 grow shadow-4' style={{ width: '18rem' }}>
                            <Card.Body className='br2'>
                                <h1>Canvas Credit Union</h1>
                                <Card.Img className='ma2' variant="top" src="https://cdn.canvas.org/files/imgs/canvas_stacked_color.png" />

                                <Card.Text className='ma3'>
                                    <p className='br2  pa2 shadow-2'>
                                        <h1> Years </h1>
                                        <p>Role</p>
                                        <p>Description</p>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <div className='br3 pa4'></div>
                        <Card className='ma3 grow shadow-4' style={{ width: '18rem' }}>
                            <Card.Body className='br2'>
                                <h1>TD Canada Trust</h1>
                                <Card.Img className='ma2' variant="top" src="https://hawkesbury.ca/media/com_jbusinessdirectory/pictures/companies/303/cropped-1570733553.png" />

                                <Card.Text className='ma3'>
                                    <p className='br2  pa2 shadow-2'>
                                        <h1> Years </h1>
                                        <p>Role</p>
                                        <p>Description</p>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='ma3 grow shadow-4' style={{ width: '18rem' }}>
                            <Card.Body className='br2'>
                                <h1>WOW!</h1>
                                <Card.Img className='ma2' variant="top" src="https://download.logo.wine/logo/Wide_Open_West/Wide_Open_West-Logo.wine.png" />

                                <Card.Text className='ma3'>
                                    <p className='br2  pa2 shadow-2'>
                                        <h1> Years </h1>
                                        <p>Role</p>
                                        <p>Description</p>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='ma3 grow shadow-4' style={{ width: '18rem' }}>
                            <Card.Body className='br2'>
                                <h1>Ford Canada</h1>
                                <Card.Img className='ma2' variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1200px-Ford_logo_flat.svg.png" />

                                <Card.Text className='ma3'>
                                    <p className='br2  pa2 shadow-2'>
                                        <h1> Years </h1>
                                        <p>Role</p>
                                        <p>Description</p>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Row>
                </div>
            </Container>
            <hr />
        </div>
    )
}

export default Containers
