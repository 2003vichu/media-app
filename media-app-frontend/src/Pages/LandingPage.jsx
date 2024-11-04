import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function LandingPage() {
    return (
        <div>
            <Container>
                <Row className='p-5 mt-5'>
                    <Col className='p-5'>
                        <h3 className='mb-4'>Welcome to <h3 className='text-danger'>Media Player</h3></h3>
                        <p>A media player is a software application or hardware device that plays audio and video files. They can play digital media from a storage device, disc, or the internet. Media players typically have control icons like play, pause, fastforward, rewind, and stop.
                        </p>
                        <button className='btn btn-danger mt-5'>Get Started</button>
                    </Col>
                    <Col>
                        <img className='w-75 mx-5' src="https://www.bing.com/th/id/OGC.cbf88a590b5b117ab4d732536bc4004a?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fc2%2f52%2f75%2fc25275eca45b7621ba5c8799906195e9.gif&ehk=pqOGSkSJ%2f4HeqLr0%2fGX5BDJcOWjIgUWwtlukvQKJn7k%3d" alt="" />
                    </Col>
                </Row>
                <Row className='p-5 shadow mb-5'>
                    <h4 className='text-center mb-5'>Features</h4>
                    <Col className='mt-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{ height: '260px', width: '270px', margin: '10px' }} variant="top" src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" />
                            <Card.Body>
                                <Card.Title>Bohemian Rhapsody</Card.Title>
                                <Card.Text>
                                    A genre-defying classic, "Bohemian Rhapsody" is known for its operatic structure and iconic guitar solos.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{ height: '260px', width: '270px', margin: '10px' }} variant="top" src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif" />
                            <Card.Body>
                                <Card.Title>Shape of You</Card.Title>
                                <Card.Text>
                                    This infectious pop track blends tropical house rhythms with catchy lyrics, becoming a global hit.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mt-5'>
                        <Card className=' shadow' style={{ width: '18rem' }}>
                            <Card.Img style={{ height: '260px', width: '270px', margin: '10px' }} variant="top" src="https://cdn.dribbble.com/users/793057/screenshots/4220268/music_visualisation.gif" />
                            <Card.Body>
                                <Card.Title>Imagine</Card.Title>
                                <Card.Text>
                                    "Imagine" is a timeless anthem for peace, inspiring listeners to envision a world of unity and harmony.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className=' border shadow mb-5 mt-5'>
                    <Col className='m-5'>
                        <h4 className='mb-5 text-danger'>Simple Fast and Powerfull</h4>
                        <p><b className='fs-6'>The Power of Music in Emotion : </b>Music has the unique ability to evoke and amplify emotions, creating deep personal connections.Music can uplift spirits, soothe the soul, and serve as an outlet for emotional release.
                        </p>
                        <p><b className='fs-6'>Cultural Influence of Music : </b>Music reflects and shapes cultural identity, serving as a powerful tool for expression across societies.Through generations, music has preserved traditions, uniting people and transcending language barriers.
                        </p>
                        <p><b className='fs-6'>The Science Behind Music and the Brain
                            : </b>Listening to music activates various brain regions, enhancing memory, mood, and cognitive functions.Studies show that music can improve mental health, reduce stress, and even aid in neurological recovery.
                        </p>
                    </Col>
                    <Col className='m-5'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/unigt-F2JT0?si=ars54AX0SdcIU4jy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage