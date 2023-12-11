import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const shoping = [
    {
        img: "https://i.pinimg.com/1200x/2e/78/f5/2e78f59141ee79909604b172da630818.jpg",
        name: "Gucci shirt",
        discription: "Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt (Mistry)",
        price: 1000,
    },
    {
        img: "https://i.pinimg.com/736x/cf/d9/3b/cfd93b9c8f4bf1ea1f47a298393d2490.jpg",
        name: "lacoste pant",
        discription: "VEGO Mens 4 Way Lycra Strechable Formal Trousers & Pant",
        price: 1100,
    },
    {
        img: "https://i.pinimg.com/736x/2d/a6/ec/2da6ec9850cbe24b6691c1ebd503d36e.jpg",
        name: "hublot watches",
        discription: "Hublot Men's 1520.100.1 Quartz Watch",
        price: 30000,
    },
    {
        img: "https://i.pinimg.com/736x/6e/a4/93/6ea4930c9d47d6fc5635b4f383ae9eac.jpg",
        name: "jordan man",
        discription: "Nike Mens Jordan Max Aura 3 Running Shoe",
        price: 80000,
    },
    {
        img: "https://i.pinimg.com/736x/fb/7f/2e/fb7f2eb8789f16ef83fab63051297edb.jpg",
        name: "blazer ",
        discription: "Peter England Men Regular Fit Blazer",
        price: 50,
    },
    {
        img: "https://i.pinimg.com/1200x/1e/fd/8a/1efd8a4c1a0c171dacb88e8ee1ac445e.jpg",
        name: "Gold ring with Black stoan",
        discription: "DUANMEINAD Gold Men Masonic Rings Black Stone Wedding Bands Freemasonry Jewelry",
        price: 115000,
    },
    {
        img: "https://i.pinimg.com/736x/f2/b3/b5/f2b3b51228a4897e8a94a5a76e1cdc2b.jpg",
        name: "bracelate mans",
        discription: "Piah Fashion Mens Stylish Bracelet for Mens & Boys",
        price: 200000,
    },
    {
        img: "https://i.pinimg.com/736x/52/19/86/5219867d81b974fe9741802dfdd6a29e--pinterest-instagram-apple-watch.jpg",
        name: "Macbook",
        discription: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID",
        price: 180000,
    },
    {
        img: "https://i.pinimg.com/736x/98/26/80/98268053b2d70ac6c01f0e91b1ffb0ae.jpg",
        name: "perfume",
        discription: "victoria sicreat perfume",
        price: 8000,
    },
    {
        img: "https://i.pinimg.com/736x/f1/0b/d7/f10bd7d809be3a0950e92c057738b897.jpg",
        name: "gift box",
        discription: "luxury gift box with goggles, tie, bottel opener, watch, Black Flask, Tie Clips and cuflinks  ",
        price: 110000,
    }
];
function Shoping() {

    const [filter, setFilter] = useState("");
    const [data, setData] = useState([]);
    const [sortLowToHigh, setSortLowToHigh] = useState(false);
    const [sortHighToLow, setSortHighToLow] = useState(false);


    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };


    useEffect(() => {
        const filteredItems = shoping.filter((item) => item.discription.toLowerCase().includes(filter.toLowerCase()));

        if (sortLowToHigh) {
            filteredItems.sort((a, b) => a.price - b.price);
        } else if (sortHighToLow) {
            filteredItems.sort((a, b) => b.price - a.price);
        }


        setData(filteredItems)
    }, [filter, sortLowToHigh, sortHighToLow]);

    const priceltoh = () => {
        setSortLowToHigh(true);
        setSortHighToLow(false);
    }
    const pricehtol = () => {
        setSortLowToHigh(false);
        setSortHighToLow(true);
    }


    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Filter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">shop</Nav.Link>
                            
                        </Nav>
                        <div>
                            <input
                                id="filter"
                                type="text"
                                className='rounded-2 mx-2'
                                placeholder="Search by discription"
                                value={filter}
                                onChange={handleFilterChange}
                            />
                            <button onClick={() => pricehtol()} className='mx-2 rounded-5'><i class="fa-solid fa-up-long"></i></button>
                            <button onClick={() => priceltoh()} className='mx-2 rounded-5'><i class="fa-solid fa-down-long"></i></button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='container'>
                <Row xs={1} md={3} className="g-4 mt-2">
                    {data.map((shop, id) => {
                        return (
                            <>
                                <Col key={id}>
                                    <Card>
                                        <Card.Img variant="top" src={shop.img} style={{ height: '300px' }} />
                                        <Card.Body>
                                            <Card.Title>{shop.name}</Card.Title>
                                            <Card.Title>{shop.price}</Card.Title>
                                            <Card.Text>{shop.discription}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </div>

        </div>
    )
}

export default Shoping
